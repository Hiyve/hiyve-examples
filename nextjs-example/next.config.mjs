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
  ],
  // Webpack configuration for handling SDK packages
  webpack: (config, { isServer }) => {
    // Handle node-fetch for browser builds (already stubbed in rtc-client, but just in case)
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
};

export default nextConfig;
