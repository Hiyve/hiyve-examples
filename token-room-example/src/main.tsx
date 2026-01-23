/**
 * Token Room Example - Application Entry Point
 *
 * Demonstrates token-based room joining with invite links.
 * This is a minimal example - no sidebar, no advanced features.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { ClientProvider } from '@hiyve/client-provider';
import App from './App';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

/**
 * Generate a room token from the backend server.
 * This token allows the client to authenticate with the signaling server.
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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ClientProvider
        generateRoomToken={generateRoomToken}
        localVideoElementId="local-video"
        persistDeviceChanges
        onError={(err) => console.error('[ClientProvider Error]', err)}
      >
        <App />
      </ClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
