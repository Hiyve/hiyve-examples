/**
 * ConnectingScreen Component
 *
 * Displays a loading indicator while connecting to a room.
 * Optionally displays connection errors for better feedback.
 *
 * @example
 * ```tsx
 * import { ConnectingScreen } from './components/ConnectingScreen';
 *
 * function App() {
 *   const { isConnecting, error } = useConnection();
 *
 *   if (isConnecting) {
 *     return <ConnectingScreen isCreating={userRole === 'owner'} error={error} />;
 *   }
 *   // ...
 * }
 * ```
 *
 * ## Props
 * - `isCreating` - Whether user is creating (true) or joining (false) a room
 * - `error` - Optional connection error to display
 *
 * ## Hooks Used
 * None - this is a presentational component
 */

import { Box, Typography, CircularProgress, Alert } from '@mui/material';

interface ConnectingScreenProps {
  /** Whether user is creating (true) or joining (false) a room */
  isCreating?: boolean;
  /** Optional connection error to display */
  error?: string | null;
}

export function ConnectingScreen({ isCreating = false, error }: ConnectingScreenProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
        px: 2,
      }}
    >
      <CircularProgress size={60} />
      <Typography variant="h6" sx={{ mt: 3 }}>
        {isCreating ? 'Creating room...' : 'Joining room...'}
      </Typography>
      {error && (
        <Alert severity="warning" sx={{ mt: 3, maxWidth: 400 }}>
          {error}
        </Alert>
      )}
    </Box>
  );
}
