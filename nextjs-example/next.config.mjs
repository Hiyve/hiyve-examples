import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sdkPackages = path.join(__dirname, '../../hiyve-sdk/packages');
const isDevMode = fs.existsSync(sdkPackages);

// Dynamically discover all @hiyve/* package names from the SDK
function getHiyvePackageNames() {
  if (!isDevMode) return [];
  return fs.readdirSync(sdkPackages)
    .filter(dir => {
      const pkgJsonPath = path.join(sdkPackages, dir, 'package.json');
      if (!fs.existsSync(pkgJsonPath)) return false;
      const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf-8'));
      return pkgJson.name?.startsWith('@hiyve/');
    })
    .map(dir => {
      const pkgJson = JSON.parse(fs.readFileSync(path.join(sdkPackages, dir, 'package.json'), 'utf-8'));
      return pkgJson.name;
    });
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Transpile all Hiyve SDK packages
  transpilePackages: [
    '@hiyve/react',
    '@hiyve/react-ui',
    '@hiyve/core',
    '@hiyve/rtc-client',
    '@hiyve/utilities',
    ...(isDevMode ? getHiyvePackageNames() : []),
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

    // Resolve Emotion and MUI to single instances to prevent hydration mismatches.
    // Note: Do NOT alias react/react-dom here — Next.js manages its own React
    // resolution for server components (which require React.cache).
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
