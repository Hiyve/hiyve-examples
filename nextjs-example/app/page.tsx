'use client';

/**
 * @fileoverview Next.js Example - Main Page
 * @module nextjs-example/app/page
 *
 * Uses next/dynamic with ssr: false because the Hiyve SDK requires
 * browser APIs (WebRTC, MediaDevices) that aren't available during
 * server-side rendering.
 */

import dynamic from 'next/dynamic';
import { Box, CircularProgress } from '@mui/material';

const AppContent = dynamic(() => import('./AppContent'), {
  ssr: false,
  loading: () => (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <CircularProgress />
    </Box>
  ),
});

/** Home page component that renders the main application content */
export default function Home() {
  return <AppContent />;
}
