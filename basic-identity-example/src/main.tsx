/**
 * @fileoverview Basic Identity Example - Application Entry Point
 * @module basic-identity-example/main
 *
 * This is the entry point for the simplest possible authentication app
 * using the Hiyve Identity SDK. It demonstrates the minimal setup required:
 *
 * 1. **Theme Setup** - MUI dark theme with CssBaseline for consistent styling
 * 2. **IdentityProvider** - The core provider that manages authentication state
 *
 * ## Architecture
 *
 * ```
 * ThemeProvider
 *   └── CssBaseline
 *       └── IdentityProvider
 *           └── App
 * ```
 *
 * ## IdentityProvider Props
 *
 * - `apiKey` - Your public API key (pk_live_* or pk_test_*)
 * - `environment` - 'production' or 'development'
 *
 * No server-side setup is required. The IdentityProvider communicates
 * directly with the Hiyve Identity API using the public API key.
 */

import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme, CssBaseline, Box, Typography, Link } from '@mui/material';
import { IdentityProvider } from '@hiyve/react-identity';
import App from './App';

/**
 * MUI theme configuration.
 * Using dark mode for a modern look.
 */
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const apiKey = import.meta.env.VITE_HIYVE_API_KEY as string | undefined;
const environment = (import.meta.env.VITE_HIYVE_ENVIRONMENT as 'production' | 'development') || 'development';

/**
 * Shown when the API key is not configured.
 */
function ApiKeyRequired() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        gap: 2,
        p: 4,
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom>
        API Key Required
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 500 }}>
        To use this example, create a <code>.env</code> file in the{' '}
        <code>basic-identity-example</code> directory with your Hiyve public API key:
      </Typography>
      <Box
        component="pre"
        sx={{
          bgcolor: 'grey.900',
          p: 2,
          borderRadius: 1,
          fontSize: '0.875rem',
          textAlign: 'left',
        }}
      >
        {`VITE_HIYVE_API_KEY=pk_test_your-key-here\nVITE_HIYVE_ENVIRONMENT=development`}
      </Box>
      <Typography variant="body2" color="text.secondary">
        Get your API key at{' '}
        <Link href="https://console.hiyve.dev" target="_blank" rel="noopener">
          console.hiyve.dev
        </Link>
      </Typography>
    </Box>
  );
}

function Root() {
  if (!apiKey) {
    return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <ApiKeyRequired />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <IdentityProvider apiKey={apiKey} environment={environment}>
        <App />
      </IdentityProvider>
    </ThemeProvider>
  );
}

// Note: React.StrictMode is intentionally omitted here.
// IdentityProvider creates HiyveAuth in useMemo and destroys it in useEffect
// cleanup. StrictMode's double-effect cycle destroys the memoized instance,
// causing "HiyveAuth instance has been destroyed" on any auth action.
ReactDOM.createRoot(document.getElementById('root')!).render(<Root />);
