import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme, CssBaseline, Snackbar, Alert } from '@mui/material';
import { HiyveProvider } from '@hiyve/react';
import { CloudProvider, MoodAnalysisProvider } from '@hiyve/react-intelligence';
import { FileCacheProvider } from '@hiyve/react-collaboration';
import { CloudClientProvider } from './cloudClient';
import App from './App';

const CLOUD_ENVIRONMENT = (import.meta.env.VITE_HIYVE_ENVIRONMENT || 'development') as 'production' | 'development';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#00897b' },
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

async function generateCloudToken(): Promise<string> {
  const response = await fetch('/api/generate-cloud-token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || 'Failed to generate cloud token');
  }
  return data.cloudToken;
}

function Root() {
  const [error, setError] = useState<string | null>(null);

  const getErrorMessage = (err: string) => {
    const errLower = err.toLowerCase();
    if (errLower.includes('does not exist') || errLower.includes('not found') || errLower.includes('no room')) {
      return 'Unable to join room. The room name may be incorrect or the host hasn\'t started the meeting yet.';
    }
    return err;
  };

  return (
    <ThemeProvider theme={theme}>
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
        <CloudProvider generateCloudToken={generateCloudToken} environment={CLOUD_ENVIRONMENT}>
          <CloudClientProvider>
            <FileCacheProvider>
              <MoodAnalysisProvider analyzerType="human">
                <App />
              </MoodAnalysisProvider>
            </FileCacheProvider>
          </CloudClientProvider>
        </CloudProvider>
      </HiyveProvider>

      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError(null)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={() => setError(null)} severity="warning" sx={{ width: '100%' }}>
          {error && getErrorMessage(error)}
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
