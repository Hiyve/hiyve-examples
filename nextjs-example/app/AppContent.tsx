'use client';

/**
 * @fileoverview Next.js Example - App Content (Client-Only)
 * @module nextjs-example/app/AppContent
 *
 * Client-only component containing Hiyve SDK providers and hooks.
 * Loaded via next/dynamic with ssr: false in page.tsx because
 * the Hiyve SDK requires browser APIs (WebRTC, MediaDevices) that
 * aren't available during server-side rendering.
 */

import { useState } from 'react';
import { HiyveProvider, useConnection, useRoom } from '@hiyve/react';
import { formatHiyveError } from '@hiyve/utilities';
import { Box, CircularProgress, Typography, Snackbar, Alert } from '@mui/material';
import JoinForm from '@/components/JoinForm';
import VideoRoom from '@/components/VideoRoom';

/**
 * Fetches a room token from the Next.js API route.
 */
async function generateRoomToken(): Promise<string> {
  const response = await fetch('/api/generate-room-token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || 'Failed to generate room token');
  }
  return data.roomToken;
}


/**
 * Inner component that uses Hiyve hooks (must be inside HiyveProvider).
 */
function RoomRouter() {
  const { isConnecting } = useConnection();
  const { isInRoom } = useRoom();
  const [userName, setUserName] = useState('');

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

  if (isInRoom) {
    return <VideoRoom userName={userName} />;
  }

  return <JoinForm onUserNameChange={setUserName} />;
}

/** Main application content with HiyveProvider and room routing */
export default function AppContent() {
  const [error, setError] = useState<string | null>(null);

  return (
    <>
      <HiyveProvider
        generateRoomToken={generateRoomToken}
        localVideoElementId="local-video"
        persistDeviceChanges
        onError={(err: unknown) => {
          console.error('[HiyveProvider Error]', err);
          const message = err instanceof Error ? err.message : String(err);
          setError(message);
        }}
      >
        <RoomRouter />
      </HiyveProvider>

      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError(null)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={() => setError(null)} severity="warning" sx={{ width: '100%' }}>
          {error && formatHiyveError(error)}
        </Alert>
      </Snackbar>
    </>
  );
}
