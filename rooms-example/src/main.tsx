/**
 * @fileoverview Rooms Example - Application Entry Point
 * @module rooms-example/main
 *
 * Bootstraps the React app with HiyveProvider, wiring up server-side token
 * generation for both room authentication and cloud features.
 */

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme, CssBaseline, Snackbar, Alert } from '@mui/material';
import { HiyveProvider } from '@hiyve/react';
import { formatHiyveError } from '@hiyve/utilities';
import App from './App';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

/**
 * Fetches a room token from the backend server.
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
 * Fetches a cloud token from the backend server.
 * The API key stays server-side; the browser only gets short-lived tokens.
 */
async function generateCloudToken() {
  const res = await fetch('/api/generate-cloud-token', { method: 'POST' });
  if (!res.ok) throw new Error('Failed to generate cloud token');
  const { cloudToken, environment } = await res.json();
  return { cloudToken, environment };
}


function Root() {
  const [error, setError] = useState<string | null>(null);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <HiyveProvider
        generateRoomToken={generateRoomToken}
        generateCloudToken={generateCloudToken}
        localVideoElementId="local-video"
        persistDeviceChanges
        onError={(err: unknown) => {
          console.error('[HiyveProvider Error]', err);
          const message = err instanceof Error ? err.message : String(err);
          setError(message);
        }}
      >
        <App />
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
