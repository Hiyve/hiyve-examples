/**
 * @fileoverview AI Video Room Example - Join Form Component
 * @module ai-video-room-example/components/JoinForm
 *
 * Pre-join form that lets the user create or join a video room.
 * Includes a role toggle (owner vs guest), name/room inputs, and a device
 * preview dialog for testing camera and microphone before joining.
 *
 * Form values are persisted to localStorage so they survive page refreshes.
 * This is a simplified version focused on AI features -- no waiting room
 * configuration or advanced room settings.
 */

import { useState, useCallback, useEffect } from 'react';
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Container,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
  Dialog,
  DialogTitle,
  DialogContent,
} from '@mui/material';
import { TooltipIconButton } from '@hiyve/utilities';
import {
  VideoCall as VideoCallIcon,
  Settings as SettingsIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { useConnection } from '@hiyve/react';
import { DevicePreview, type SelectedDevices } from '@hiyve/react-ui';
import { STORAGE_KEYS } from '../constants';

/** Role determines whether the user creates a new room or joins an existing one. */
type UserRole = 'owner' | 'guest';

export function JoinForm() {
  const [roomNameInput, setRoomNameInput] = useState(
    () => localStorage.getItem(STORAGE_KEYS.roomName) || ''
  );
  const [userName, setUserName] = useState(
    () => localStorage.getItem(STORAGE_KEYS.userName) || ''
  );
  const [userRole, setUserRole] = useState<UserRole>(
    () => (localStorage.getItem(STORAGE_KEYS.userRole) as UserRole) || 'owner'
  );

  const [showDevicePreview, setShowDevicePreview] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDevices, setSelectedDevices] = useState<SelectedDevices>({});

  const { createRoom, joinRoom } = useConnection();

  // Persist form values to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.userName, userName);
  }, [userName]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.roomName, roomNameInput);
  }, [roomNameInput]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.userRole, userRole);
  }, [userRole]);

  const handleCreateRoom = useCallback(async () => {
    if (!roomNameInput.trim() || !userName.trim()) return;
    setIsLoading(true);
    try {
      await createRoom(roomNameInput.trim(), userName.trim());
    } catch (err) {
      console.error('Failed to create room:', err);
    } finally {
      setIsLoading(false);
    }
  }, [roomNameInput, userName, createRoom]);

  const handleJoinRoom = useCallback(async () => {
    if (!roomNameInput.trim() || !userName.trim()) return;
    setIsLoading(true);
    try {
      await joinRoom(roomNameInput.trim(), userName.trim());
    } catch (err) {
      console.error('Failed to join room:', err);
    } finally {
      setIsLoading(false);
    }
  }, [roomNameInput, userName, joinRoom]);

  const isFormValid = userName.trim().length >= 4 && roomNameInput.trim().length > 0;

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          AI Video Room
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 3 }}>
          Video conferencing with AI-powered meeting intelligence
        </Typography>

        {/* Role selection toggle */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <ToggleButtonGroup
            value={userRole}
            exclusive
            onChange={(_, value) => value && setUserRole(value)}
            size="small"
          >
            <ToggleButton value="owner">Create Room</ToggleButton>
            <ToggleButton value="guest">Join Room</ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <TextField
          fullWidth
          label="Your Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          margin="normal"
          helperText="At least 4 characters"
        />

        <TextField
          fullWidth
          label="Room Name"
          value={roomNameInput}
          onChange={(e) => setRoomNameInput(e.target.value)}
          margin="normal"
          helperText={
            userRole === 'owner'
              ? 'Create a new room with this name'
              : 'Enter the room name to join'
          }
        />

        <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
          <Button
            fullWidth
            variant="contained"
            size="large"
            startIcon={<VideoCallIcon />}
            onClick={userRole === 'owner' ? handleCreateRoom : handleJoinRoom}
            disabled={!isFormValid || isLoading}
          >
            {isLoading ? (userRole === 'owner' ? 'Creating...' : 'Joining...') : (userRole === 'owner' ? 'Create Room' : 'Join Room')}
          </Button>
          <TooltipIconButton
            tooltip="Test camera & microphone"
            onClick={() => setShowDevicePreview(true)}
            color="default"
          >
            <SettingsIcon />
          </TooltipIconButton>
        </Box>
      </Paper>

      {/* Device Preview Dialog */}
      <Dialog
        open={showDevicePreview}
        onClose={() => setShowDevicePreview(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          Test Camera & Microphone
          <IconButton onClick={() => setShowDevicePreview(false)} size="small">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 0 }}>
          {showDevicePreview && (
            <DevicePreview
              videoDeviceId={selectedDevices.videoInput}
              audioDeviceId={selectedDevices.audioInput}
              onDeviceChange={setSelectedDevices}
              width="100%"
              height={300}
              showAudioOutput
              showRefreshButton
              persistSelection
            />
          )}
        </DialogContent>
      </Dialog>
    </Container>
  );
}
