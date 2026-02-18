/**
 * @fileoverview Basic Example - Main Application Component
 * @module basic-example/App
 *
 * Routes between views based on WebRTC connection state using useRoomFlow.
 *
 * View routing (via useRoomFlow screen):
 * - lobby -> JoinForm (SDK)
 * - connecting -> ConnectingScreen (SDK)
 * - in-room -> VideoRoom
 *
 * This is the simplest example -- no waiting room, no waiting-for-host.
 *
 * @see {@link VideoRoom} - In-room video experience
 */

import { useState } from 'react';
import { useRoomFlow } from '@hiyve/react';
import { JoinForm, ConnectingScreen } from '@hiyve/react-ui';
import { VideoRoom } from './components/VideoRoom';

/**
 * localStorage key used by the SDK JoinForm to persist the user name.
 * Must match the storagePrefix passed to JoinForm + '-userName'.
 */
const STORAGE_KEY_USERNAME = 'hiyve-basic-userName';
const STORAGE_KEY_USERROLE = 'hiyve-basic-userRole';

/**
 * Main application component.
 *
 * Uses `useRoomFlow` to derive the current screen from connection state,
 * replacing manual if/else routing with useConnection/useRoom hooks.
 *
 * @returns {JSX.Element} The appropriate view based on connection state
 */
function App() {
  const { screen } = useRoomFlow();

  // Read user data from localStorage (persisted by JoinForm via storagePrefix)
  const [userName] = useState(() => localStorage.getItem(STORAGE_KEY_USERNAME) || '');
  const [userRole] = useState(() => (localStorage.getItem(STORAGE_KEY_USERROLE) as 'owner' | 'guest') || 'owner');

  switch (screen) {
    case 'connecting':
      return <ConnectingScreen isCreating={userRole === 'owner'} />;

    case 'in-room':
      return <VideoRoom userName={userName} />;

    default:
      return (
        <JoinForm
          autoConnect
          devicePreviewMode="inline"
          storagePrefix="hiyve-basic"
        />
      );
  }
}

export default App;
