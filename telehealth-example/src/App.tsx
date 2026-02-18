/**
 * @fileoverview Telehealth Example - Application Mode Router
 * @module telehealth-example/App
 *
 * Routes between landing, call, postMeeting, and search modes. Manages the
 * transition from an active video visit to the post-meeting clinical notes view.
 */

import { useState, useCallback } from 'react';
import { useConnection, useRoom, useWaitForHost } from '@hiyve/react';
import { JoinForm, ConnectingScreen, WaitForHostScreen } from '@hiyve/react-ui';
import { LandingPage } from './components/LandingPage';
import { VideoRoom } from './components/VideoRoom';
import { PostMeetingView } from './components/PostMeetingView';
import { SearchView } from './components/SearchView';

type AppMode = 'landing' | 'call' | 'postMeeting' | 'search';

const STORAGE_PREFIX = 'hiyve-telehealth-example';

function App() {
  const [mode, setMode] = useState<AppMode>('landing');
  const [lastResponseId, setLastResponseId] = useState<string | null>(null);
  const [lastRoomName, setLastRoomName] = useState('');

  const { isConnecting } = useConnection();
  const { isInRoom, room } = useRoom();
  const { isWaiting: isWaitingForHost } = useWaitForHost();

  const handleLeaveWithResponseId = useCallback((responseId: string | null) => {
    setLastResponseId(responseId);
    setLastRoomName(room?.name || localStorage.getItem(`${STORAGE_PREFIX}-roomName`) || '');
    setMode('postMeeting');
  }, [room]);

  const handleBack = useCallback(() => {
    setLastResponseId(null);
    setLastRoomName('');
    setMode('landing');
  }, []);

  // Video call flow
  if (mode === 'call') {
    if (isWaitingForHost) return <WaitForHostScreen />;
    if (isConnecting) return <ConnectingScreen />;
    if (isInRoom) {
      return (
        <VideoRoom
          onLeaveWithResponseId={handleLeaveWithResponseId}
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
          title: 'Telehealth Session',
          subtitle: 'Start or join a telehealth consultation',
        }}
      />
    );
  }

  // Post-meeting view
  if (mode === 'postMeeting') {
    return (
      <PostMeetingView
        responseId={lastResponseId}
        roomName={lastRoomName}
        userName={localStorage.getItem(`${STORAGE_PREFIX}-userName`) || ''}
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
