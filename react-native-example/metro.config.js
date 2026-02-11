const fs = require('fs');
const path = require('path');
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * Auto-detects local SDK packages for development mode.
 * When ../../hiyve-sdk/packages exists, Metro watches the entire
 * packages directory so all @hiyve/* imports resolve to local source.
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const sdkPackages = path.resolve(__dirname, '../../hiyve-sdk/packages');
const isDevMode = fs.existsSync(sdkPackages);

// Web-only modules imported by @hiyve/utilities that don't exist in React Native.
// These are never called at runtime — only getInitials/getUserColor are used.
const emptyShim = path.resolve(__dirname, 'shims/empty.js');
const WEB_ONLY_MODULES = ['@mui/material', '@mui/icons-material', 'dayjs'];

const config = {
  resolver: {
    resolveRequest: (context, moduleName, platform) => {
      if (WEB_ONLY_MODULES.includes(moduleName)) {
        return {type: 'sourceFile', filePath: emptyShim};
      }
      return context.resolveRequest(context, moduleName, platform);
    },
    ...(isDevMode && {
      nodeModulesPaths: [path.resolve(__dirname, 'node_modules')],
    }),
  },
  ...(isDevMode && {
    watchFolders: [sdkPackages],
  }),
};

if (isDevMode) {
  console.log('[Metro] Dev mode: watching SDK packages at', sdkPackages);
}

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
