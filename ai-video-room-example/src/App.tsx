/**
 * @fileoverview AI Video Room Example - App Component
 * @module ai-video-room-example/App
 *
 * Routes between views based on WebRTC connection state using useRoomFlow.
 *
 * View routing (via useRoomFlow screen):
 * - lobby -> JoinForm (SDK)
 * - connecting -> ConnectingScreen (SDK)
 * - waiting-for-host -> WaitForHostScreen (SDK)
 * - in-room -> VideoRoom
 */

import { useState } from 'react';
import { useRoomFlow } from '@hiyve/react';
import {
  JoinForm,
  ConnectingScreen,
  WaitForHostScreen,
} from '@hiyve/react-ui';
import { VideoRoom } from './components';
import { STORAGE_KEYS } from './constants';

function App() {
  const { screen } = useRoomFlow();

  // Read user data from localStorage (persisted by JoinForm via storagePrefix)
  const [userName] = useState(() => localStorage.getItem(STORAGE_KEYS.userName) || '');
  const [userRole] = useState(() => (localStorage.getItem(STORAGE_KEYS.userRole) as 'owner' | 'guest') || 'owner');

  switch (screen) {
    case 'waiting-for-host':
      return <WaitForHostScreen />;

    case 'connecting':
      return <ConnectingScreen isCreating={userRole === 'owner'} />;

    case 'in-room':
      return <VideoRoom userName={userName} />;

    default:
      return (
        <JoinForm
          autoConnect
          storagePrefix="hiyve-ai-example"
        />
      );
  }
}

export default App;
