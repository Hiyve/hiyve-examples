import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

// Path to hiyve-sdk packages for alias resolution (dev mode only)
const sdkPackages = path.resolve(__dirname, '../../hiyve-sdk/packages');
const isDevMode = fs.existsSync(sdkPackages);

// Build aliases for ALL SDK packages when in dev mode.
// Every @hiyve/* import must resolve to the same physical file — if some
// packages are aliased and others are pre-bundled by Vite, React contexts
// created by client-provider end up duplicated and useContext() returns undefined.
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

// In dev mode, exclude all @hiyve/* from pre-bundling so they resolve
// through the aliases above instead of being duplicated in .vite/deps/
function getDevExclude(): string[] {
  if (!isDevMode) return [];
  return Object.keys(getDevAliases());
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // Exclude @hiyve packages from pre-bundling in dev mode so they
    // resolve through aliases (prevents duplicate React context issues)
    exclude: getDevExclude(),
    // Include shared deps so they're still pre-bundled for performance
    include: [
      '@mui/material',
      '@mui/icons-material',
      '@emotion/react',
      '@emotion/styled',
      'prop-types',
    ],
  },
  resolve: {
    // Alias @hiyve/* packages in dev mode so Vite can resolve internal SDK imports
    alias: getDevAliases(),
    // Dedupe dependencies to ensure single instance resolution
    // This prevents "multiple instances" warnings for packages shared between
    // hiyve-sdk and full-example, and ensures providers work correctly with symlinks
    dedupe: [
      'react',
      'react-dom',
      '@emotion/react',
      '@emotion/styled',
      '@emotion/cache',
      '@mui/material',
      '@mui/system',
      '@mui/icons-material',
      '@hiyve/client-provider',
      '@hiyve/cloud-provider',
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
      // Allow serving files from hiyve-sdk (dev mode only)
      allow: [
        '.',
        ...(isDevMode ? [path.resolve(__dirname, '../../hiyve-sdk')] : []),
      ],
    },
  },
});
