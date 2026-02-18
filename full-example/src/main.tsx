/**
 * @fileoverview Full Example - Application Entry Point
 * @module full-example/main
 *
 * Sets up the provider hierarchy (HiyveProvider, CloudProvider, FileCacheProvider,
 * MoodAnalysisProvider) and renders the root application with MUI dark theme.
 *
 * Provider hierarchy:
 * - ThemeProvider: MUI dark theme
 * - HiyveProvider: WebRTC connection (requires generateRoomToken)
 * - CloudProvider: AI cloud features (requires generateCloudToken)
 * - FileCacheProvider: File management
 * - MoodAnalysisProvider: Sentiment detection
 *
 * See SDK documentation for detailed API reference.
 */

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme, CssBaseline, Snackbar, Alert } from '@mui/material';
import { HiyveProvider } from '@hiyve/react';
import { CloudProvider, MoodAnalysisProvider } from '@hiyve/react-intelligence';
import { FileCacheProvider } from '@hiyve/react-collaboration';
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

// Wrapper component to show connection errors
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
          <FileCacheProvider>
            <MoodAnalysisProvider analyzerType="human">
              <App />
            </MoodAnalysisProvider>
          </FileCacheProvider>
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
