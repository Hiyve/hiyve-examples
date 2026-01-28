'use client';

/**
 * Next.js Example - Main Page
 *
 * This is the entry point for the Next.js video conferencing example.
 * It wraps the app with ClientProvider and handles routing between
 * the join form and video room views.
 */

import { useState } from 'react';
import { ClientProvider, useConnection, useRoom } from '@hiyve/client-provider';
import { Box, CircularProgress, Typography } from '@mui/material';
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
  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.message || 'Failed to generate room token');
  }
  return (await response.json()).roomToken;
}

/**
 * Inner app component that uses Hiyve hooks.
 * Must be inside ClientProvider.
 */
function AppContent() {
  const { isConnecting } = useConnection();
  const { isInRoom } = useRoom();
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

/**
 * Main page component.
 * Wraps the app with ClientProvider for Hiyve SDK state management.
 */
export default function Home() {
  return (
    <ClientProvider
      generateRoomToken={generateRoomToken}
      localVideoElementId="local-video"
      persistDeviceChanges
      onError={(err) => console.error('[ClientProvider Error]', err)}
    >
      <AppContent />
    </ClientProvider>
  );
}
