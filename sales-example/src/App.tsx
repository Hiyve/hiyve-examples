/**
 * @fileoverview Sales Example - Application Root Component
 * @module sales-example/App
 *
 * Routes between landing, video call, post-meeting analysis, and search modes.
 * Manages the sales call lifecycle including AI-powered post-call analysis.
 */

import { useState, useCallback } from 'react';
import { useConnection, useRoom, useWaitForHost, useCloudClient } from '@hiyve/react';
import { JoinForm, ConnectingScreen, WaitForHostScreen } from '@hiyve/react-ui';
import { useAnalysis } from '@hiyve/react-intelligence';
import { LandingPage } from './components/LandingPage';
import { VideoRoom } from './components/VideoRoom';
import { PostMeetingView } from './components/PostMeetingView';
import { SearchView } from './components/SearchView';

type AppMode = 'landing' | 'call' | 'postMeeting' | 'search';

const STORAGE_PREFIX = 'hiyve-sales-example';

function App() {
  const [mode, setMode] = useState<AppMode>('landing');
  const [lastResponseId, setLastResponseId] = useState<string | null>(null);
  const [lastRoomName, setLastRoomName] = useState('');

  const { isConnecting } = useConnection();
  const { isInRoom, room } = useRoom();
  const { isWaiting: isWaitingForHost } = useWaitForHost();

  const cloud = useCloudClient();
  const { result, loading, analyzeSalesCall, clearResult } = useAnalysis({ cloud });

  const handleLeaveWithAnalysis = useCallback(async (transcript: string, responseId: string | null) => {
    setLastResponseId(responseId);
    setLastRoomName(room?.name || localStorage.getItem(`${STORAGE_PREFIX}-roomName`) || '');
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
    return (
      <JoinForm
        autoConnect
        onBack={() => setMode('landing')}
        storagePrefix={STORAGE_PREFIX}
        labels={{
          title: 'Sales Call Room',
          subtitle: 'Start or join a sales call session',
        }}
      />
    );
  }

  // Post-meeting analysis
  if (mode === 'postMeeting') {
    return (
      <PostMeetingView
        data={result}
        responseId={lastResponseId}
        roomName={lastRoomName}
        userName={localStorage.getItem(`${STORAGE_PREFIX}-userName`) || ''}
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
