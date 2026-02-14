/**
 * @fileoverview Basic Identity Example - Main Application Component
 * @module basic-identity-example/App
 *
 * The root application component that routes between views based on
 * authentication state. This demonstrates the simplest auth flow:
 *
 * ```
 * Not Authenticated  →  AuthFlow (login/register/forgot-password)
 *       ↓
 * Loading            →  Spinner
 *       ↓
 * Authenticated      →  Dashboard (profile + protected content)
 * ```
 *
 * ## Key Hooks Used
 *
 * - `useUser()` - User state (user, isAuthenticated, isLoading)
 *
 * ## State Flow
 *
 * 1. User sees login form (AuthFlow handles login/register/forgot-password)
 * 2. User logs in → `isAuthenticated` becomes true → show Dashboard
 * 3. User clicks logout → `isAuthenticated` becomes false → show AuthFlow
 */

import { useUser, AuthFlow } from '@hiyve/react-identity';
import { Box, CircularProgress } from '@mui/material';
import { Dashboard } from './components/Dashboard';

function App() {
  const { isAuthenticated, isLoading } = useUser();

  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (isAuthenticated) {
    return <Dashboard />;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        p: 2,
      }}
    >
      <AuthFlow initialView="login" showRegisterLink />
    </Box>
  );
}

export default App;
