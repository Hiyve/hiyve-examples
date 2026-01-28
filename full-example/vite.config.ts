import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // Include dependencies used by @hiyve packages so they're properly pre-bundled
    include: [
      '@mui/material',
      '@mui/icons-material',
      '@emotion/react',
      '@emotion/styled',
      'prop-types',
    ],
  },
  resolve: {
    // Dedupe dependencies to ensure single instance resolution
    // This prevents "multiple instances" warnings for packages shared between
    // hiyve-sdk and full-example
    dedupe: [
      'react',
      'react-dom',
      '@emotion/react',
      '@emotion/styled',
      '@emotion/cache',
      '@mui/material',
      '@mui/system',
      '@mui/icons-material',
    ],
  },
  build: {
    commonjsOptions: {
      // Include @hiyve packages in CommonJS transformation
      include: [/node_modules/, /@hiyve\//],
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
    watch: {
      // Watch hiyve-sdk for changes
      ignored: ['!**/node_modules/@hiyve/**'],
    },
    fs: {
      // Allow serving files from hiyve-sdk
      allow: [
        '.',
        path.resolve(__dirname, '../../hiyve-sdk'),
      ],
    },
  },
});
