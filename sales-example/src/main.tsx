/**
 * @fileoverview Sales Example - Application Entry Point
 * @module sales-example/main
 *
 * Bootstraps the React application with the full provider stack including
 * theme, Hiyve WebRTC, cloud AI, file caching, and mood analysis.
 */

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme, CssBaseline, Snackbar, Alert } from '@mui/material';
import { HiyveProvider } from '@hiyve/react';
import { CloudProvider, MoodAnalysisProvider } from '@hiyve/react-intelligence';
import { FileCacheProvider } from '@hiyve/react-collaboration';
import { formatHiyveError } from '@hiyve/utilities';
import App from './App';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#0288d1' },
  },
});

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HiyveProvider
        generateRoomToken={generateRoomToken}
        generateCloudToken={generateCloudToken}
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
