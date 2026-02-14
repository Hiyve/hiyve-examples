/**
 * @fileoverview Token Room Example - Create Room Component
 * @module token-room-example/components/CreateRoom
 *
 * Handles room creation with token-based authentication.
 * After creating a room, the SDK connects to the signaling server
 * and the user is placed directly into the VideoRoom view. The
 * owner can then share an invite link so guests can join.
 *
 * ```
 * CreateRoom
 *   ├── "Your Name" text field (persisted to localStorage)
 *   ├── "Room Name" text field (persisted to localStorage)
 *   └── "Create Room" button
 *         └── calls useConnection().createRoom(roomName, userName)
 * ```
 *
 * ## Key Concepts
 * - **Room tokens vs join tokens**: The room token (generated in main.tsx)
 *   authenticates the SDK with the signaling server. The join token is a
 *   separate, per-room credential embedded in invite links so guests can
 *   join without needing API credentials.
 * - **localStorage persistence**: Both the user name and room name are
 *   saved to localStorage so the form is pre-filled on return visits.
 *   This uses dedicated storage keys (prefixed `hiyve-token-example-`)
 *   to avoid collisions with other examples.
 * - **Owner auto-join**: `createRoom()` both creates the room on the
 *   server and joins the user into it in a single call.
 */

import { useState, useCallback, useEffect } from 'react';
import {
  Typography,
  Paper,
  TextField,
  Button,
  Container,
} from '@mui/material';
import { VideoCall as VideoCallIcon } from '@mui/icons-material';
import { useConnection } from '@hiyve/react';

/**
 * Props for the {@link CreateRoom} component.
 */
interface CreateRoomProps {
  /** Callback fired whenever the user name field changes; used by App to track the display name for VideoRoom. */
  onUserNameChange?: (name: string) => void;
}

/**
 * localStorage keys for persisting form values across sessions.
 * Prefixed with `hiyve-token-example-` to avoid collisions with
 * other Hiyve examples that may run on the same origin.
 */
const STORAGE_KEYS = {
  userName: 'hiyve-token-example-userName',
  roomName: 'hiyve-token-example-roomName',
} as const;

export function CreateRoom({ onUserNameChange }: CreateRoomProps) {
  const [roomName, setRoomName] = useState(
    () => localStorage.getItem(STORAGE_KEYS.roomName) || ''
  );
  const [userName, setUserName] = useState(
    () => localStorage.getItem(STORAGE_KEYS.userName) || ''
  );

  const [isLoading, setIsLoading] = useState(false);

  const { createRoom } = useConnection();

  // Persist form values
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.userName, userName);
    onUserNameChange?.(userName);
  }, [userName, onUserNameChange]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.roomName, roomName);
  }, [roomName]);

  const handleCreateRoom = useCallback(async () => {
    if (!roomName.trim() || !userName.trim()) return;
    setIsLoading(true);
    try {
      await createRoom(roomName.trim(), userName.trim());
    } catch (err) {
      console.error('Create room failed', err);
    } finally {
      setIsLoading(false);
    }
  }, [roomName, userName, createRoom]);

  const isFormValid = userName.trim().length >= 3 && roomName.trim().length > 0;

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          Create a Room
        </Typography>

        <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 3 }}>
          Create a room and share the invite link with others
        </Typography>

        <TextField
          fullWidth
          label="Your Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          margin="normal"
          helperText="At least 3 characters"
        />

        <TextField
          fullWidth
          label="Room Name"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          margin="normal"
          helperText="Name for your room (e.g., team-standup)"
        />

        <Button
          fullWidth
          variant="contained"
          size="large"
          startIcon={<VideoCallIcon />}
          onClick={handleCreateRoom}
          disabled={!isFormValid || isLoading}
          sx={{ mt: 3 }}
        >
          {isLoading ? 'Creating...' : 'Create Room'}
        </Button>
      </Paper>
    </Container>
  );
}
