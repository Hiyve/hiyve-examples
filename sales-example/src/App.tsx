import { useState, useCallback } from 'react';
import { useConnection, useRoom, useWaitForHost } from '@hiyve/react';
import { WaitForHostScreen } from '@hiyve/react-ui';
import { useAnalysis } from '@hiyve/react-intelligence';
import { useCloudClient } from './cloudClient';
import { LandingPage } from './components/LandingPage';
import { JoinForm } from './components/JoinForm';
import { VideoRoom } from './components/VideoRoom';
import { PostMeetingView } from './components/PostMeetingView';
import { SearchView } from './components/SearchView';
import { Box, CircularProgress, Typography } from '@mui/material';

type AppMode = 'landing' | 'call' | 'postMeeting' | 'search';

const STORAGE_KEYS = {
  userName: 'hiyve-sales-example-userName',
  roomName: 'hiyve-sales-example-roomName',
};

function ConnectingScreen() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
      <CircularProgress size={60} />
      <Typography variant="h6" sx={{ mt: 3 }}>Connecting...</Typography>
    </Box>
  );
}

function App() {
  const [mode, setMode] = useState<AppMode>('landing');
  const [lastTranscript, setLastTranscript] = useState('');
  const [lastResponseId, setLastResponseId] = useState<string | null>(null);
  const [lastRoomName, setLastRoomName] = useState('');

  const { isConnecting } = useConnection();
  const { isInRoom, room } = useRoom();
  const { isWaiting: isWaitingForHost } = useWaitForHost();

  const cloud = useCloudClient();
  const { result, loading, analyzeSalesCall, clearResult } = useAnalysis({ cloud });

  const handleLeaveWithAnalysis = useCallback(async (transcript: string, responseId: string | null) => {
    setLastTranscript(transcript);
    setLastResponseId(responseId);
    setLastRoomName(room?.name || localStorage.getItem(STORAGE_KEYS.roomName) || '');
    setMode('postMeeting');
    if (transcript) {
      try {
        await analyzeSalesCall({ transcript });
      } catch (err) {
        console.error('Sales analysis failed:', err);
      }
    }
  }, [analyzeSalesCall, room]);

  const handleBack = useCallback(() => {
    clearResult();
    setLastTranscript('');
    setLastResponseId(null);
    setLastRoomName('');
    setMode('landing');
  }, [clearResult]);

  // Video call flow
  if (mode === 'call') {
    if (isWaitingForHost) return <WaitForHostScreen />;
    if (isConnecting) return <ConnectingScreen />;
    if (isInRoom) {
      return (
        <VideoRoom
          onLeaveWithAnalysis={handleLeaveWithAnalysis}
          onLeave={() => setMode('landing')}
        />
      );
    }
    return <JoinForm onBack={() => setMode('landing')} />;
  }

  // Post-meeting analysis
  if (mode === 'postMeeting') {
    return (
      <PostMeetingView
        data={result}
        transcript={lastTranscript}
        responseId={lastResponseId}
        roomName={lastRoomName}
        userName={localStorage.getItem(STORAGE_KEYS.userName) || ''}
        loading={loading}
        onBack={handleBack}
      />
    );
  }

  // Search flow
  if (mode === 'search') {
    return <SearchView onBack={() => setMode('landing')} />;
  }

  return (
    <LandingPage
      onStartCall={() => setMode('call')}
      onSearch={() => setMode('search')}
    />
  );
}

export default App;
