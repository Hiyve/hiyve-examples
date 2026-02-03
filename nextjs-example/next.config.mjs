import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Transpile Hiyve SDK packages
  transpilePackages: [
    '@hiyve/client-provider',
    '@hiyve/control-bar',
    '@hiyve/device-selector',
    '@hiyve/rtc-client',
    '@hiyve/video-grid',
    '@hiyve/video-tile',
    '@hiyve/utilities',
  ],
  // Webpack configuration for handling SDK packages
  webpack: (config, { isServer }) => {
    // Handle node-fetch for browser builds
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }

    // Resolve Emotion and MUI to single instances to prevent hydration mismatches
    // This ensures the @hiyve/* packages use the same Emotion/MUI as the app
    config.resolve.alias = {
      ...config.resolve.alias,
      '@emotion/react': path.resolve(__dirname, 'node_modules/@emotion/react'),
      '@emotion/styled': path.resolve(__dirname, 'node_modules/@emotion/styled'),
      '@emotion/cache': path.resolve(__dirname, 'node_modules/@emotion/cache'),
      '@mui/material': path.resolve(__dirname, 'node_modules/@mui/material'),
      '@mui/system': path.resolve(__dirname, 'node_modules/@mui/system'),
    };

    return config;
  },
};

export default nextConfig;
