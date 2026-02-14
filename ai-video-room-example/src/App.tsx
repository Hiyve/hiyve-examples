/**
 * @fileoverview AI Video Room Example - App Component
 * @module ai-video-room-example/App
 *
 * State-based router that selects the active view based on connection lifecycle:
 *
 * - Not connected -> JoinForm (room creation or join)
 * - Connecting -> ConnectingScreen (loading spinner)
 * - Waiting for host -> WaitForHostScreen (guest waiting room)
 * - In room -> VideoRoom (video grid, controls, AI sidebar)
 *
 * User name and role are persisted to localStorage so they survive page refreshes.
 */

import { useState } from 'react';
import { useConnection, useRoom, useWaitForHost } from '@hiyve/react';
import { WaitForHostScreen } from '@hiyve/react-ui';
import { JoinForm, VideoRoom, ConnectingScreen } from './components';
import { STORAGE_KEYS } from './constants';

function App() {
  const { isConnecting } = useConnection();
  const { isInRoom } = useRoom();
  const { isWaiting: isWaitingForHost } = useWaitForHost();

  const [userName] = useState(() => localStorage.getItem(STORAGE_KEYS.userName) || '');
  const [userRole] = useState(() => (localStorage.getItem(STORAGE_KEYS.userRole) as 'owner' | 'guest') || 'owner');

  if (isWaitingForHost) {
    return <WaitForHostScreen />;
  }

  if (isConnecting) {
    return <ConnectingScreen isCreating={userRole === 'owner'} />;
  }

  if (isInRoom) {
    return <VideoRoom userName={userName} />;
  }

  return <JoinForm />;
}

export default App;
