/**
 * @fileoverview Next.js Example - MUI Theme Configuration
 * @module nextjs-example/theme
 *
 * Defines the Material UI dark theme used throughout the application.
 */

'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default theme;
