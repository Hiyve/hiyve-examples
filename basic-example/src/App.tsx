/**
 * @fileoverview Basic Example - Main Application Component
 * @module basic-example/App
 *
 * The root application component that handles routing between views
 * based on connection state. This demonstrates the simplest flow:
 *
 * ```
 * Not Connected  →  JoinForm (enter room name & user name)
 *       ↓
 * Connecting     →  Loading spinner
 *       ↓
 * In Room        →  VideoRoom (video grid & controls)
 * ```
 *
 * ## Key Hooks Used
 *
 * - `useConnection()` - Connection state and room actions (createRoom, joinRoom, leaveRoom)
 * - `useRoom()` - Room state (room info, isOwner, isInRoom)
 *
 * ## State Flow
 *
 * 1. User enters room name and clicks "Create" or "Join"
 * 2. `isConnecting` becomes true → show loading
 * 3. Connection succeeds → `isInRoom` becomes true → show VideoRoom
 * 4. User clicks "Leave" → `isInRoom` becomes false → show JoinForm
 *
 * @see {@link JoinForm} - Room creation/join form
 * @see {@link VideoRoom} - In-room video experience
 */

import { useState } from 'react';
import { useConnection, useRoom } from '@hiyve/client-provider';
import { JoinForm } from './components/JoinForm';
import { VideoRoom } from './components/VideoRoom';
import { Box, CircularProgress, Typography } from '@mui/material';

/**
 * Main application component.
 *
 * Routes between JoinForm and VideoRoom based on connection state.
 * Manages userName state to pass to VideoRoom for display.
 *
 * @returns {JSX.Element} The appropriate view based on connection state
 *
 * @example
 * // Usage (already set up in main.tsx):
 * <ClientProvider generateRoomToken={generateRoomToken}>
 *   <App />
 * </ClientProvider>
 */
function App() {
  /**
   * Connection hook provides:
   * - isConnecting: true while establishing WebRTC connection
   * - error: connection error message (if any)
   * - createRoom(roomName, userName): create and join a new room
   * - joinRoom(roomName, userName): join an existing room
   * - leaveRoom(): disconnect from current room
   */
  const { isConnecting } = useConnection();

  /**
   * Room hook provides:
   * - room: current room object (name, id, etc.) or null
   * - isOwner: true if current user created the room
   * - isInRoom: true if connected to a room
   */
  const { isInRoom } = useRoom();

  /**
   * Track user name locally to pass to VideoRoom.
   * This is set by JoinForm when user creates/joins.
   */
  const [userName, setUserName] = useState('');

  // Loading state while WebRTC connection is being established
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
        <Typography variant="h6">Connecting...</Typography>
      </Box>
    );
  }

  // Connected to a room - show the video room
  if (isInRoom) {
    return <VideoRoom userName={userName} />;
  }

  // Not in a room - show the join form
  return <JoinForm onUserNameChange={setUserName} />;
}

export default App;
