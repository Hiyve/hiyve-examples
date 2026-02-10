const path = require('path');
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  // Uncomment the following for local muzieRTCClientRN development:
  // watchFolders: [path.resolve(__dirname, '../../muzieRTCClientRN')],
  // resolver: {
  //   nodeModulesPaths: [path.resolve(__dirname, 'node_modules')],
  // },
};

// Suppress unused variable warning
void path;

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
