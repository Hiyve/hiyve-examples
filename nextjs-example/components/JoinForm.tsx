'use client';

/**
 * JoinForm Component - Room Entry Interface
 *
 * A simple form for creating or joining video rooms with device preview.
 */

import { useState, useCallback } from 'react';
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  Alert,
  Stack,
} from '@mui/material';
import { useConnection } from '@hiyve/client-provider';
import { DevicePreview } from '@hiyve/device-selector';

interface JoinFormProps {
  onUserNameChange: (name: string) => void;
}

export default function JoinForm({ onUserNameChange }: JoinFormProps) {
  const [roomName, setRoomName] = useState('');
  const [userName, setUserName] = useState('');
  const [error, setError] = useState<string | null>(null);

  const { createRoom, joinRoom } = useConnection();

  const handleCreate = useCallback(async () => {
    if (!roomName.trim() || !userName.trim()) {
      setError('Please enter both room name and your name');
      return;
    }
    setError(null);
    onUserNameChange(userName);
    try {
      await createRoom(roomName.trim(), userName.trim());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create room');
    }
  }, [roomName, userName, createRoom, onUserNameChange]);

  const handleJoin = useCallback(async () => {
    if (!roomName.trim() || !userName.trim()) {
      setError('Please enter both room name and your name');
      return;
    }
    setError(null);
    onUserNameChange(userName);
    try {
      await joinRoom(roomName.trim(), userName.trim());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to join room');
    }
  }, [roomName, userName, joinRoom, onUserNameChange]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleJoin();
      }
    },
    [handleJoin]
  );

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        p: 2,
      }}
    >
      <Paper sx={{ p: 4, maxWidth: 500, width: '100%' }}>
        <Typography variant="h4" gutterBottom align="center">
          Hiyve Video
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 3 }}>
          Create or join a video room
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <Box sx={{ mb: 3 }}>
          <DevicePreview
            videoElementId="local-video"
            showDeviceSelectors
            showMuteButtons
            aspectRatio="16/9"
          />
        </Box>

        <Stack spacing={2}>
          <TextField
            label="Room Name"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            onKeyDown={handleKeyDown}
            fullWidth
            autoFocus
            placeholder="Enter room name"
          />

          <TextField
            label="Your Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            onKeyDown={handleKeyDown}
            fullWidth
            placeholder="Enter your name"
          />

          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              onClick={handleCreate}
              fullWidth
              size="large"
            >
              Create Room
            </Button>
            <Button
              variant="outlined"
              onClick={handleJoin}
              fullWidth
              size="large"
            >
              Join Room
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
}
