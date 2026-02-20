/**
 * @fileoverview Full Example - Application Entry Point
 * @module full-example/main
 *
 * Sets up the provider hierarchy and renders the root application with MUI dark theme.
 *
 * Provider hierarchy:
 * - ThemeProvider: MUI dark theme
 * - HiyveProvider: WebRTC connection + cloud tokens (auto-generated via @hiyve/admin server middleware)
 * - CloudProvider: AI cloud features (auto-generates tokens via server proxy)
 * - FileCacheProvider: File management
 * - MoodAnalysisProvider: Sentiment detection
 *
 * Room tokens and cloud tokens are generated automatically by HiyveProvider
 * when the server uses @hiyve/admin middleware (mountHiyveRoutes).
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
