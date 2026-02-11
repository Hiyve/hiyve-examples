#!/usr/bin/env node

/**
 * Toggle between local development packages and registry production packages
 *
 * This script dynamically finds all @hiyve/* packages in package.json and
 * toggles them between local file paths and registry versions.
 *
 * Note: This example uses npm (not pnpm), so dev mode uses `file:` protocol
 * instead of `link:` (npm treats `file:` as a symlink).
 *
 * Usage:
 *   node scripts/toggle-packages.js dev    # Update to local packages
 *   node scripts/toggle-packages.js prod   # Update to registry packages
 *   node scripts/toggle-packages.js status # Show current mode
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PACKAGE_JSON = path.join(ROOT, 'package.json');

// Relative path from this example to hiyve-sdk packages
const COMPONENTS_PATH = '../../hiyve-sdk/packages';

// Path to package metadata (contains actual version numbers)
const METADATA_PATH = path.resolve(__dirname, '../../../hiyve-sdk/package-metadata');

// Cache for version lookups
const versionCache = new Map();

/**
 * Get the actual version number from package metadata
 * @param {string} pkg - Package name without @hiyve/ prefix (e.g., 'rtc-client-rn')
 * @param {string} tag - Dist tag to use ('latest' or 'alpha')
 * @returns {string} The actual version number or the tag as fallback
 */
function getVersionFromMetadata(pkg, tag) {
  tag = tag || 'latest';
  const cacheKey = pkg + ':' + tag;
  if (versionCache.has(cacheKey)) {
    return versionCache.get(cacheKey);
  }

  // Map package name to metadata filename (e.g., 'rtc-client-rn' -> 'hiyve-rtc-client-rn.json')
  const metadataFile = path.join(METADATA_PATH, 'hiyve-' + pkg + '.json');

  try {
    if (fs.existsSync(metadataFile)) {
      const metadata = JSON.parse(fs.readFileSync(metadataFile, 'utf8'));
      const version = metadata['dist-tags'] && metadata['dist-tags'][tag];
      if (version) {
        versionCache.set(cacheKey, version);
        return version;
      }
    }
  } catch (error) {
    console.warn('Warning: Could not read metadata for ' + pkg + ': ' + error.message);
  }

  // Fallback to tag if metadata not found
  console.warn('Warning: Using \'' + tag + '\' tag as fallback for @hiyve/' + pkg);
  return tag;
}

/**
 * Dynamically find all @hiyve/* packages in package.json
 */
function getHiyvePackages(pkg) {
  var packages = [];
  var deps = Object.keys(pkg.dependencies || {});
  for (var i = 0; i < deps.length; i++) {
    if (deps[i].startsWith('@hiyve/')) {
      packages.push(deps[i].replace('@hiyve/', ''));
    }
  }
  return packages.sort();
}

function getLocalPath(pkg) {
  // npm uses file: protocol for local packages (creates symlink)
  return 'file:' + COMPONENTS_PATH + '/' + pkg;
}

function getProdPath(pkg) {
  // rtc-client uses alpha tag, all others use latest
  var tag = pkg === 'rtc-client' ? 'alpha' : 'latest';
  return getVersionFromMetadata(pkg, tag);
}

function readPackageJson() {
  return JSON.parse(fs.readFileSync(PACKAGE_JSON, 'utf8'));
}

function writePackageJson(pkg) {
  fs.writeFileSync(PACKAGE_JSON, JSON.stringify(pkg, null, 2) + '\n');
}

/**
 * Check if a package version is in dev mode (local file path)
 */
function isDevVersion(version) {
  return version && (version.startsWith('link:') || version.startsWith('file:'));
}

/**
 * Get current mode by checking ALL packages.
 * Returns 'dev' if all are local, 'prod' if all are registry, 'mixed' if some of each.
 */
function getCurrentMode(pkg) {
  var hiyvePackages = getHiyvePackages(pkg);
  if (hiyvePackages.length === 0) return 'unknown';

  var devCount = 0;
  var prodCount = 0;

  for (var i = 0; i < hiyvePackages.length; i++) {
    var version = pkg.dependencies['@hiyve/' + hiyvePackages[i]];
    if (isDevVersion(version)) {
      devCount++;
    } else {
      prodCount++;
    }
  }

  if (devCount === hiyvePackages.length) return 'dev';
  if (prodCount === hiyvePackages.length) return 'prod';
  return 'mixed';
}

function setMode(mode) {
  var pkg = readPackageJson();
  var hiyvePackages = getHiyvePackages(pkg);

  var updated = 0;
  for (var i = 0; i < hiyvePackages.length; i++) {
    var name = hiyvePackages[i];
    var key = '@hiyve/' + name;
    var targetVersion = mode === 'dev' ? getLocalPath(name) : getProdPath(name);
    if (pkg.dependencies[key] !== targetVersion) {
      pkg.dependencies[key] = targetVersion;
      updated++;
    }
  }

  if (updated === 0) {
    console.log('Already in ' + mode + ' mode (all ' + hiyvePackages.length + ' packages up to date)');
    return;
  }

  writePackageJson(pkg);
  console.log('Updated package.json to ' + mode.toUpperCase() + ' mode');
  console.log('  Toggled ' + updated + ' of ' + hiyvePackages.length + ' @hiyve/* packages');
}

function showStatus() {
  var pkg = readPackageJson();
  var mode = getCurrentMode(pkg);
  var hiyvePackages = getHiyvePackages(pkg);

  var modeLabel = mode === 'mixed' ? 'MIXED (run dev or prod to fix)' : mode.toUpperCase();
  console.log('\nCurrent mode: ' + modeLabel + '\n');
  console.log('Found ' + hiyvePackages.length + ' @hiyve/* packages:\n');

  for (var i = 0; i < hiyvePackages.length; i++) {
    var name = hiyvePackages[i];
    var key = '@hiyve/' + name;
    var value = pkg.dependencies[key];
    var isDev = isDevVersion(value);
    var source = isDev ? 'LOCAL' : 'REGISTRY';
    var versionInfo = isDev ? '' : ' (v' + value + ')';
    var highlight = mode === 'mixed' ? (isDev ? '' : ' ⚠️') : '';
    console.log('  ' + key + ': ' + source + versionInfo + highlight);
  }
  console.log('');
}

// Main
var command = process.argv[2];

switch (command) {
  case 'dev':
    setMode('dev');
    break;
  case 'prod':
    setMode('prod');
    break;
  case 'status':
    showStatus();
    break;
  default:
    console.log('\nUsage: node scripts/toggle-packages.js <command>\n\nCommands:\n  dev     Update package.json to use local packages\n  prod    Update package.json to use registry packages\n  status  Show current mode and package sources\n');
}
