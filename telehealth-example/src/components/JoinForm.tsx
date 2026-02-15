/**
 * @fileoverview Pre-join form for telehealth video visits.
 * @module telehealth-example/components/JoinForm
 *
 * Pre-join form for creating or joining a telehealth video visit. Includes
 * role toggle (owner/guest), name and room inputs, a device preview
 * dialog for testing camera and microphone, and localStorage
 * persistence of user preferences.
 */

import { useState, useCallback, useEffect } from 'react';
import {
  Box, Typography, Paper, TextField, Button, Container,
  IconButton, ToggleButton, ToggleButtonGroup, Dialog, DialogTitle, DialogContent,
} from '@mui/material';
import { TooltipIconButton } from '@hiyve/utilities';
import {
  VideoCall as VideoCallIcon,
  Settings as SettingsIcon,
  Close as CloseIcon,
  ArrowBack as ArrowBackIcon,
} from '@mui/icons-material';
import { useConnection } from '@hiyve/react';
import { DevicePreview, type SelectedDevices } from '@hiyve/react-ui';

const STORAGE_KEYS = {
  userName: 'hiyve-telehealth-example-userName',
  roomName: 'hiyve-telehealth-example-roomName',
  userRole: 'hiyve-telehealth-example-userRole',
};

type UserRole = 'owner' | 'guest';

interface JoinFormProps {
  onBack: () => void;
}

export function JoinForm({ onBack }: JoinFormProps) {
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

  useEffect(() => { localStorage.setItem(STORAGE_KEYS.userName, userName); }, [userName]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.roomName, roomNameInput); }, [roomNameInput]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.userRole, userRole); }, [userRole]);

  const handleSubmit = useCallback(async () => {
    if (!roomNameInput.trim() || !userName.trim()) return;
    setIsLoading(true);
    try {
      if (userRole === 'owner') {
        await createRoom(roomNameInput.trim(), userName.trim());
      } else {
        await joinRoom(roomNameInput.trim(), userName.trim());
      }
    } catch (err) {
      console.error('Failed to connect:', err);
    } finally {
      setIsLoading(false);
    }
  }, [roomNameInput, userName, userRole, createRoom, joinRoom]);

  const isFormValid = userName.trim().length >= 4 && roomNameInput.trim().length > 0;

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Button startIcon={<ArrowBackIcon />} onClick={onBack} sx={{ mb: 2 }}>Back</Button>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom align="center">Telehealth Visit</Typography>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 3 }}>
          Start or join a telehealth video visit
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <ToggleButtonGroup value={userRole} exclusive onChange={(_, v) => v && setUserRole(v)} size="small">
            <ToggleButton value="owner">Create Room</ToggleButton>
            <ToggleButton value="guest">Join Room</ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <TextField fullWidth label="Your Name" value={userName} onChange={(e) => setUserName(e.target.value)} margin="normal" helperText="At least 4 characters" />
        <TextField fullWidth label="Room Name" value={roomNameInput} onChange={(e) => setRoomNameInput(e.target.value)} margin="normal" helperText={userRole === 'owner' ? 'Create a new room with this name' : 'Enter the room name to join'} />

        <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
          <Button fullWidth variant="contained" size="large" startIcon={<VideoCallIcon />} onClick={handleSubmit} disabled={!isFormValid || isLoading}>
            {isLoading ? 'Connecting...' : userRole === 'owner' ? 'Create Room' : 'Join Room'}
          </Button>
          <TooltipIconButton tooltip="Test camera & microphone" onClick={() => setShowDevicePreview(true)} color="default">
            <SettingsIcon />
          </TooltipIconButton>
        </Box>
      </Paper>

      <Dialog open={showDevicePreview} onClose={() => setShowDevicePreview(false)} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          Test Camera & Microphone
          <IconButton onClick={() => setShowDevicePreview(false)} size="small"><CloseIcon /></IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 0 }}>
          {showDevicePreview && (
            <DevicePreview videoDeviceId={selectedDevices.videoInput} audioDeviceId={selectedDevices.audioInput} onDeviceChange={setSelectedDevices} width="100%" height={300} showAudioOutput showRefreshButton persistSelection />
          )}
        </DialogContent>
      </Dialog>
    </Container>
  );
}
