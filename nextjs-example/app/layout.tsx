/**
 * @fileoverview Next.js Example - Root Layout
 * @module nextjs-example/app/layout
 *
 * Next.js App Router root layout. Wraps all pages with
 * Material-UI theme provider and AppRouterCacheProvider
 * for SSR-compatible emotion styling.
 *
 * This is a server component (no 'use client' directive) so
 * metadata exports work correctly for SEO.
 */

import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';

export const metadata: Metadata = {
  title: 'Hiyve Video - Next.js Example',
  description: 'Video conferencing with Hiyve SDK and Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
