/**
 * JoinRoom Component
 *
 * Guest flow: Join a room using an invite link with a join token.
 *
 * ## Flow
 * 1. Receive link with joinToken and region params
 * 2. Validate token server-side to get room name
 * 3. Enter display name
 * 4. Click "Join Room" to join using normal flow
 */

import { useState, useCallback, useEffect } from 'react';
import {
  Typography,
  Paper,
  TextField,
  Button,
  Alert,
  Container,
  CircularProgress,
  Box,
} from '@mui/material';
import { VideoCall as VideoCallIcon } from '@mui/icons-material';
import { useConnection } from '@hiyve/client-provider';

interface JoinRoomProps {
  joinToken: string;
  region: string;
  onUserNameChange?: (name: string) => void;
}

const STORAGE_KEY = 'hiyve-token-example-userName';

export function JoinRoom({ joinToken, region, onUserNameChange }: JoinRoomProps) {
  const [userName, setUserName] = useState(
    () => localStorage.getItem(STORAGE_KEY) || ''
  );
  const [validationError, setValidationError] = useState<string | null>(null);
  const [joinError, setJoinError] = useState<string | null>(null);
  const [isValidating, setIsValidating] = useState(true);
  const [roomInfo, setRoomInfo] = useState<{ roomName: string; isActive: boolean } | null>(null);

  const { joinRoom, error: connectionError } = useConnection();

  // Persist user name
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, userName);
    onUserNameChange?.(userName);
  }, [userName, onUserNameChange]);

  // Validate token on mount
  useEffect(() => {
    const validateToken = async () => {
      setIsValidating(true);
      setValidationError(null);

      try {
        // Use a temporary user ID for validation
        // The actual user ID will be set when joining
        const tempUserId = 'guest_' + Math.random().toString(36).substring(7);

        const response = await fetch('/api/validate-join-token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            joinToken,
            region,
            userId: tempUserId,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || data.error || 'Invalid invite link');
        }

        if (data.valid && data.roomName) {
          setRoomInfo({
            roomName: data.roomName,
            isActive: data.isActive ?? true,
          });
        } else {
          throw new Error('Invalid or expired invite link');
        }
      } catch (err) {
        console.error('Token validation failed:', err);
        setValidationError(
          err instanceof Error ? err.message : 'Invalid or expired invite link'
        );
      } finally {
        setIsValidating(false);
      }
    };

    validateToken();
  }, [joinToken, region]);

  const handleJoinRoom = useCallback(async () => {
    if (!userName.trim() || !roomInfo) return;

    setJoinError(null);

    try {
      // Use the normal joinRoom flow with the room name from the token
      await joinRoom(roomInfo.roomName, userName.trim());
    } catch (err) {
      console.error('Join room failed:', err);
      setJoinError(err instanceof Error ? err.message : 'Failed to join room');
    }
  }, [userName, roomInfo, joinRoom]);

  const isFormValid = userName.trim().length >= 3 && roomInfo !== null;
  const displayError = joinError || connectionError || null;

  // Show loading while validating token
  if (isValidating) {
    return (
      <Container maxWidth="sm" sx={{ mt: 8 }}>
        <Paper sx={{ p: 4, textAlign: 'center' }}>
          <CircularProgress sx={{ mb: 2 }} />
          <Typography>Validating invite link...</Typography>
        </Paper>
      </Container>
    );
  }

  // Show error if token is invalid
  if (validationError) {
    return (
      <Container maxWidth="sm" sx={{ mt: 8 }}>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom align="center">
            Invalid Link
          </Typography>
          <Alert severity="error" sx={{ mb: 3 }}>
            {validationError}
          </Alert>
          <Typography variant="body2" color="text.secondary" align="center">
            Please ask the room owner for a new invite link.
          </Typography>
          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Button
              variant="outlined"
              onClick={() => {
                window.history.replaceState({}, '', '/');
                window.location.reload();
              }}
            >
              Create Your Own Room
            </Button>
          </Box>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          Join Room
        </Typography>

        {roomInfo && (
          <Typography
            variant="body1"
            color="primary"
            align="center"
            sx={{ mb: 3 }}
          >
            You're invited to join: <strong>{roomInfo.roomName}</strong>
          </Typography>
        )}

        {displayError && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {displayError}
          </Alert>
        )}

        <TextField
          fullWidth
          label="Your Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          margin="normal"
          helperText="Enter your display name (at least 3 characters)"
          autoFocus
        />

        <Button
          fullWidth
          variant="contained"
          size="large"
          startIcon={<VideoCallIcon />}
          onClick={handleJoinRoom}
          disabled={!isFormValid}
          sx={{ mt: 3 }}
        >
          Join Room
        </Button>
      </Paper>
    </Container>
  );
}

export default JoinRoom;
