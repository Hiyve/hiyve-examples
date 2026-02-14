/**
 * @fileoverview AI Video Room Example - Connecting Screen Component
 * @module ai-video-room-example/components/ConnectingScreen
 *
 * Displays a loading spinner and status message while the WebRTC connection
 * is being established. Shows a different message depending on whether the
 * user is creating a new room or joining an existing one.
 */

import { Box, Typography, CircularProgress, Alert } from '@mui/material';

interface ConnectingScreenProps {
  /** Whether user is creating (true) or joining (false) a room */
  isCreating?: boolean;
  /** Optional connection error to display */
  error?: string | null;
}

export function ConnectingScreen({ isCreating = false, error }: ConnectingScreenProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
        px: 2,
      }}
    >
      <CircularProgress size={60} />
      <Typography variant="h6" sx={{ mt: 3 }}>
        {isCreating ? 'Creating room...' : 'Joining room...'}
      </Typography>
      {error && (
        <Alert severity="warning" sx={{ mt: 3, maxWidth: 400 }}>
          {error}
        </Alert>
      )}
    </Box>
  );
}
