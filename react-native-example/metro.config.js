const fs = require('fs');
const path = require('path');
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * Supports two modes controlled by `npm run packages:dev` / `packages:prod`:
 *
 *  - **Dev mode** (link:/file: paths in package.json):
 *    Resolves @hiyve/* from local SDK source via extraNodeModules, watches
 *    the SDK directory for live reload. Other deps resolve from node_modules.
 *
 *  - **Prod mode** (version numbers in package.json):
 *    Default Metro resolution — uses published packages from node_modules.
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const sdkPackages = path.resolve(__dirname, '../../hiyve-sdk/packages');

/** Check if any @hiyve/* dep uses a local path (link: or file:). */
function isDevMode() {
  try {
    const pkg = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'package.json'), 'utf8'));
    const deps = pkg.dependencies || {};
    return Object.keys(deps).some(
      name => name.startsWith('@hiyve/') &&
        (deps[name].startsWith('link:') || deps[name].startsWith('file:')),
    );
  } catch {
    return false;
  }
}

/** Map @hiyve/* package names to local SDK source directories. */
function buildHiyveAliases() {
  const aliases = {};
  try {
    const pkg = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'package.json'), 'utf8'));
    const deps = pkg.dependencies || {};
    for (const name of Object.keys(deps)) {
      if (!name.startsWith('@hiyve/')) continue;
      const shortName = name.replace('@hiyve/', '');
      const localDir = path.resolve(sdkPackages, shortName);
      if (fs.existsSync(localDir)) {
        aliases[name] = localDir;
      }
    }
  } catch {}
  return aliases;
}

const devMode = isDevMode() && fs.existsSync(sdkPackages);

const config = devMode
  ? (() => {
      const aliases = buildHiyveAliases();
      console.log('[Metro] Dev mode: resolving', Object.keys(aliases).join(', '));
      return {
        watchFolders: [sdkPackages],
        resolver: {
          extraNodeModules: aliases,
          nodeModulesPaths: [path.resolve(__dirname, 'node_modules')],
        },
      };
    })()
  : {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
