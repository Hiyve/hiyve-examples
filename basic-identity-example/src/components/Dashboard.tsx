/**
 * @fileoverview Dashboard - Protected page shown after authentication
 * @module basic-identity-example/Dashboard
 *
 * Displays the UserProfile component and a simple protected content area
 * to demonstrate that authentication is working. The UserProfile component
 * includes a logout button by default.
 */

import { useUser, UserProfile } from '@hiyve/react-identity';
import { Box, Typography, Paper, Chip } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

/** Dashboard displaying user profile info and logout button using useUser hook */
export function Dashboard() {
  const { user } = useUser();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        p: 4,
        minHeight: '100vh',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <UserProfile />

      <Paper
        elevation={2}
        sx={{
          p: 3,
          maxWidth: 400,
          width: '100%',
          textAlign: 'center',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 2 }}>
          <VerifiedUserIcon color="success" />
          <Typography variant="h6">Protected Content</Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          This page is only visible to authenticated users.
        </Typography>
        {user?.email && (
          <Chip
            label={user.email}
            variant="outlined"
            sx={{ mt: 2 }}
          />
        )}
      </Paper>
    </Box>
  );
}
