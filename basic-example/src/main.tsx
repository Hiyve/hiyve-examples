/**
 * @fileoverview Basic Example - Application Entry Point
 * @module basic-example/main
 *
 * This is the entry point for the simplest possible video conferencing app
 * using the Hiyve SDK. It demonstrates the minimal setup required:
 *
 * 1. **Theme Setup** - MUI dark theme with CssBaseline for consistent styling
 * 2. **HiyveProvider** - The core provider that manages WebRTC state
 * 3. **Room Token Generation** - Server-side authentication for signaling
 *
 * ## Architecture
 *
 * ```
 * ThemeProvider
 *   └── CssBaseline
 *       └── HiyveProvider
 *           └── App
 * ```
 *
 * ## HiyveProvider Props
 *
 * - `generateRoomToken` - Async function to fetch JWT from your backend
 * - `localVideoElementId` - ID for the local video element (used across components)
 * - `persistDeviceChanges` - Remember user's camera/mic selection
 * - `onError` - Global error handler for WebRTC errors
 *
 * @see {@link https://doawc2271w91z.cloudfront.net/docs/hiyve-sdk/latest/index.html} API Documentation
 */

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme, CssBaseline, Snackbar, Alert } from '@mui/material';
import { HiyveProvider } from '@hiyve/react';
import { formatHiyveError } from '@hiyve/utilities';
import App from './App';

/**
 * MUI theme configuration.
 * Using dark mode for a modern video conferencing look.
 */
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

/**
 * Fetches a room token from the backend server.
 *
 * The room token is a JWT that authenticates the client with the Hiyve
 * signaling server. It's generated server-side using your API credentials
 * to keep them secure (never expose API keys in client code).
 *
 * @returns {Promise<string>} The room token JWT
 * @throws {Error} If the server request fails or returns an error
 *
 * @example
 * // The token is used internally by ClientProvider when connecting:
 * // 1. User clicks "Create Room" or "Join Room"
 * // 2. ClientProvider calls generateRoomToken()
 * // 3. Token is sent to signaling server for authentication
 * // 4. WebRTC connection is established
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
 * Root component with error handling.
 *
 * Wraps the app with required providers and displays connection errors
 * in a Snackbar at the top of the screen.
 */
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

/**
 * Application root render.
 *
 * Wraps the app with required providers:
 * - StrictMode: React development checks
 * - Root: Theme, ClientProvider, and error handling
 */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
