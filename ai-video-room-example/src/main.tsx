/**
 * @fileoverview AI Video Room Example - Application Entry Point
 * @module ai-video-room-example/main
 *
 * Sets up the provider hierarchy that enables AI-powered video conferencing:
 *
 * 1. ThemeProvider -- MUI dark theme for the entire app
 * 2. HiyveProvider -- WebRTC connection and room management (auto-generates room + cloud tokens)
 * 3. CloudProvider -- Hiyve Cloud API authentication for AI features (auto-generates tokens via server proxy)
 * 4. MoodAnalysisProvider -- Facial sentiment detection on local video stream
 *
 * All tokens are generated automatically by the SDK when the server uses
 * @hiyve/admin middleware (mountHiyveRoutes). API credentials stay server-side only.
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

function Root() {
  const [error, setError] = useState<string | null>(null);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <HiyveProvider
        localVideoElementId="local-video"
        persistDeviceChanges
        onError={(err) => {
          console.error('[HiyveProvider Error]', err);
          setError(err.message || String(err));
        }}
      >
        <CloudProvider>
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
