/**
 * @fileoverview Token Room Example - Main Application Router
 * @module token-room-example/App
 *
 * Acts as a simple client-side router, choosing which view to render
 * based on the SDK connection state and URL query parameters. There
 * is no React Router -- routing is handled by inspecting
 * `window.location.search` on mount.
 *
 * ```
 * App (state machine)
 *   ├── isConnecting   → Loading spinner
 *   ├── isInRoom       → VideoRoom
 *   ├── has joinToken  → JoinRoom  (guest flow via invite link)
 *   └── default        → CreateRoom (owner flow)
 * ```
 *
 * ## URL Parameters
 * Invite links use query parameters rather than path segments:
 * - `?joinToken=<JWT>` -- the join token granting access to a specific room
 * - `&region=<string>` -- the media server region (e.g. "us-east-1")
 *
 * ## User Name Tracking
 * The `userName` state is kept in sync via two mechanisms:
 * 1. **Same-tab**: The `onUserNameChange` callback prop on CreateRoom/JoinRoom
 * 2. **Cross-tab**: A `storage` event listener catches changes made in other tabs
 *
 * Both read from the same localStorage key (`hiyve-token-example-userName`).
 */

import { useState, useEffect } from 'react';
import { useConnection, useRoom } from '@hiyve/react';
import { CreateRoom } from './components/CreateRoom';
import { JoinRoom } from './components/JoinRoom';
import { VideoRoom } from './components/VideoRoom';
import { Box, CircularProgress, Typography } from '@mui/material';

function App() {
  const { isConnecting } = useConnection();
  const { isInRoom } = useRoom();

  // Check if this is a join link
  const [joinParams, setJoinParams] = useState<{
    joinToken: string;
    region: string;
  } | null>(null);

  // Track user name for VideoRoom
  const [userName, setUserName] = useState(() =>
    localStorage.getItem('hiyve-token-example-userName') || ''
  );

  // Parse URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const joinToken = params.get('joinToken');
    const region = params.get('region');

    if (joinToken && region) {
      setJoinParams({ joinToken, region });
    }
  }, []);

  const isJoinLink = joinParams !== null;

  // Sync userName from localStorage (cross-tab only - same-tab uses onUserNameChange callback)
  useEffect(() => {
    const handleStorage = () => {
      setUserName(localStorage.getItem('hiyve-token-example-userName') || '');
    };
    window.addEventListener('storage', handleStorage);
    return () => {
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  // Connecting state
  if (isConnecting) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          gap: 2,
        }}
      >
        <CircularProgress />
        <Typography variant="h6">
          {isJoinLink ? 'Joining room...' : 'Creating room...'}
        </Typography>
      </Box>
    );
  }

  // In room - show video room
  if (isInRoom) {
    return <VideoRoom userName={userName} />;
  }

  // Not in room - show appropriate form
  if (isJoinLink && joinParams) {
    return (
      <JoinRoom
        joinToken={joinParams.joinToken}
        region={joinParams.region}
        onUserNameChange={setUserName}
      />
    );
  }

  return <CreateRoom onUserNameChange={setUserName} />;
}

export default App;
