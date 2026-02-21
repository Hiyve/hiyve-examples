/**
 * @fileoverview Media Player Example - Application Entry Point
 * @module media-player-example/main
 *
 * Entry point for the media player demo app. Unlike other examples, this
 * requires no HiyveProvider or server — the media player works standalone
 * with just a MUI ThemeProvider.
 *
 * ```
 * ThemeProvider (dark)
 *   └── CssBaseline
 *       └── App (tabbed demos)
 * ```
 *
 * @see {@link App} - Tabbed demo container with Basic, Full-Featured, and Custom Hook demos
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import App from './App';

/** MUI dark theme for a modern media player look. */
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
