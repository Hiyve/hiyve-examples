/**
 * @fileoverview Token Room Example - Application Entry Point
 * @module token-room-example/main
 *
 * Bootstraps the React application with the Hiyve SDK provider and
 * global error handling. This is a minimal example demonstrating
 * token-based room joining with invite links -- no sidebar, no
 * advanced features.
 *
 * ```
 * Root
 *   ├── ThemeProvider (MUI dark theme)
 *   ├── HiyveProvider (SDK context - auth, media, signaling)
 *   │   └── App (routing between views)
 *   └── Snackbar (global error display)
 * ```
 *
 * ## Authentication Flow
 * The `generateRoomToken` callback is passed to `HiyveProvider`. The SDK
 * calls it automatically when it needs a fresh room token (on initial
 * connect and on token expiry). The token is a short-lived JWT issued
 * by the backend server, which in turn calls the Hiyve Cloud API with
 * the project's API key and secret.
 *
 * ## Error Handling
 * `HiyveProvider.onError` catches all SDK-level errors (network failures,
 * token issues, media errors). The `formatHiyveError` utility translates
 * raw error strings into user-friendly messages.
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
 * Generate a room token from the backend server.
 *
 * Room tokens are short-lived JWTs that authenticate this client with
 * the Hiyve signaling server. The backend endpoint (`/api/generate-room-token`)
 * calls the Hiyve Cloud API using the project's API key and secret, so
 * those credentials never reach the browser.
 *
 * The SDK calls this function automatically:
 * - On initial connection (when `createRoom` or `joinRoom` is invoked)
 * - When the current token expires and needs refreshing
 *
 * @returns A room token JWT string
 * @throws {Error} If the backend returns a non-OK response
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
 * Root component that wraps the app in providers and displays global errors.
 *
 * Responsibilities:
 * - Provides the MUI dark theme via `ThemeProvider`
 * - Initializes the Hiyve SDK via `HiyveProvider` with the room token generator
 * - Catches and displays SDK errors in a top-center Snackbar
 *
 * The `persistDeviceChanges` prop on `HiyveProvider` tells the SDK to remember
 * the user's camera/microphone selection in localStorage across sessions.
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
        <Alert onClose={() => setError(null)} severity="error" sx={{ width: '100%' }}>
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
