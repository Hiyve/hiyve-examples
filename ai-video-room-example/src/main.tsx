/**
 * @fileoverview AI Video Room Example - Application Entry Point
 * @module ai-video-room-example/main
 *
 * Sets up the provider hierarchy that enables AI-powered video conferencing:
 *
 * 1. ThemeProvider -- MUI dark theme for the entire app
 * 2. HiyveProvider -- WebRTC connection and room management (requires generateRoomToken)
 * 3. CloudProvider -- Hiyve Cloud API authentication for AI features (requires generateCloudToken)
 * 4. MoodAnalysisProvider -- Facial sentiment detection on local video stream
 *
 * Token generation functions fetch from the local Express server, which in turn
 * calls the Hiyve signaling server (room token) and Hiyve Cloud API (cloud token).
 * This keeps API credentials server-side only.
 */

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme, CssBaseline, Snackbar, Alert } from '@mui/material';
import { HiyveProvider } from '@hiyve/react';
import { CloudProvider, MoodAnalysisProvider } from '@hiyve/react-intelligence';
import { formatHiyveError } from '@hiyve/utilities';
import App from './App';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

/** Generate a room token from your backend server. */
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

/** Generate a cloud token from your backend server for AI features. */
async function generateCloudToken() {
  const response = await fetch('/api/generate-cloud-token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || 'Failed to generate cloud token');
  }
  return { cloudToken: data.cloudToken, environment: data.environment };
}

function Root() {
  const [error, setError] = useState<string | null>(null);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <HiyveProvider
        generateRoomToken={generateRoomToken}
        localVideoElementId="local-video"
        persistDeviceChanges
        onError={(err) => {
          console.error('[HiyveProvider Error]', err);
          setError(err.message || String(err));
        }}
      >
        <CloudProvider generateCloudToken={generateCloudToken}>
          <MoodAnalysisProvider analyzerType="human">
            <App />
          </MoodAnalysisProvider>
        </CloudProvider>
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
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
