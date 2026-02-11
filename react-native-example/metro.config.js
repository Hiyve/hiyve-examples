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

const config = isDevMode
  ? {
      watchFolders: [sdkPackages],
      resolver: {
        nodeModulesPaths: [path.resolve(__dirname, 'node_modules')],
      },
    }
  : {};

if (isDevMode) {
  console.log('[Metro] Dev mode: watching SDK packages at', sdkPackages);
}

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
