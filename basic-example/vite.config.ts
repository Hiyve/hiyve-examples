import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

const sdkPackages = path.resolve(__dirname, '../../hiyve-sdk/packages');
const isDevMode = fs.existsSync(sdkPackages);

// Dynamically alias ALL SDK packages so every @hiyve/* import resolves to
// the same physical file. Without this, Vite pre-bundles some packages with
// their own copy of client-provider's React context, causing "must be used
// within a ClientProvider" errors.
function getDevAliases(): Record<string, string> {
  if (!isDevMode) return {};

  const aliases: Record<string, string> = {};
  for (const dir of fs.readdirSync(sdkPackages)) {
    const pkgJsonPath = path.join(sdkPackages, dir, 'package.json');
    if (fs.existsSync(pkgJsonPath)) {
      const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf-8'));
      if (pkgJson.name?.startsWith('@hiyve/')) {
        aliases[pkgJson.name] = path.join(sdkPackages, dir);
      }
    }
  }
  return aliases;
}

function getDevExclude(): string[] {
  if (!isDevMode) return [];
  return Object.keys(getDevAliases());
}

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: getDevExclude(),
    include: [
      '@mui/material',
      '@mui/icons-material',
      '@emotion/react',
      '@emotion/styled',
    ],
  },
  resolve: {
    alias: getDevAliases(),
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
      ignored: ['!**/node_modules/@hiyve/**'],
    },
    fs: {
      allow: [
        '.',
        ...(isDevMode ? [path.resolve(__dirname, '../../hiyve-sdk')] : []),
      ],
    },
  },
});
