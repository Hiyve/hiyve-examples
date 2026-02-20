/**
 * @fileoverview Telehealth Example - Application Entry Point
 * @module telehealth-example/main
 *
 * Bootstraps the React application with the full provider stack including
 * theme, Hiyve WebRTC, cloud AI, file caching, and mood analysis.
 * All tokens are generated automatically via @hiyve/admin server middleware.
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
    primary: { main: '#00897b' },
  },
});

function Root() {
  const [error, setError] = useState<string | null>(null);

  return (
    <ThemeProvider theme={theme}>
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
