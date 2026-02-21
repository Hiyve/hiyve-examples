#!/usr/bin/env node

/**
 * Toggle between local development packages and registry production packages
 *
 * This script dynamically finds all @hiyve/* packages in package.json and
 * toggles them between local file paths and registry versions.
 *
 * Usage:
 *   node scripts/toggle-packages.js dev    # Update to local packages
 *   node scripts/toggle-packages.js prod   # Update to registry packages
 *   node scripts/toggle-packages.js status # Show current mode
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
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
 * @param {string} pkg - Package name without @hiyve/ prefix (e.g., 'react-media-player')
 * @param {string} tag - Dist tag to use ('latest' or 'alpha')
 * @returns {string} The actual version number or the tag as fallback
 */
function getVersionFromMetadata(pkg, tag = 'latest') {
  const cacheKey = `${pkg}:${tag}`;
  if (versionCache.has(cacheKey)) {
    return versionCache.get(cacheKey);
  }

  // Map package name to metadata filename (e.g., 'react-media-player' -> 'hiyve-react-media-player.json')
  const metadataFile = path.join(METADATA_PATH, `hiyve-${pkg}.json`);

  try {
    if (fs.existsSync(metadataFile)) {
      const metadata = JSON.parse(fs.readFileSync(metadataFile, 'utf8'));
      const version = metadata['dist-tags']?.[tag];
      if (version) {
        versionCache.set(cacheKey, version);
        return version;
      }
    }
  } catch (error) {
    console.warn(`Warning: Could not read metadata for ${pkg}: ${error.message}`);
  }

  // Fallback to tag if metadata not found
  console.warn(`Warning: Using '${tag}' tag as fallback for @hiyve/${pkg}`);
  return tag;
}

/**
 * Dynamically find all @hiyve/* packages in package.json
 */
function getHiyvePackages(pkg) {
  const packages = [];
  for (const dep of Object.keys(pkg.dependencies || {})) {
    if (dep.startsWith('@hiyve/')) {
      packages.push(dep.replace('@hiyve/', ''));
    }
  }
  return packages.sort();
}

function getProdPath(pkg) {
  // rtc-client uses alpha tag, all others use latest
  const tag = pkg === 'rtc-client' ? 'alpha' : 'latest';
  return getVersionFromMetadata(pkg, tag);
}

/**
 * Check if a package version is in dev mode (local file path)
 */
function isDevVersion(version) {
  return version?.startsWith('link:') || version?.startsWith('file:');
}

/**
 * Get current mode by checking ALL packages.
 * Returns 'dev' if all are local, 'prod' if all are registry, 'mixed' if some of each.
 */
function getCurrentMode(pkg) {
  const hiyvePackages = getHiyvePackages(pkg);
  if (hiyvePackages.length === 0) return 'unknown';

  let devCount = 0;
  let prodCount = 0;

  for (const name of hiyvePackages) {
    const version = pkg.dependencies[`@hiyve/${name}`];
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

/**
 * Toggle @hiyve/* packages in package.json.
 * @param {string} filePath - Path to package.json
 * @param {string} componentsPath - Relative path to hiyve-sdk/packages
 * @param {string} mode - 'dev' or 'prod'
 * @param {string} label - Display label
 */
function toggleFile(filePath, componentsPath, mode, label) {
  if (!fs.existsSync(filePath)) return;

  const pkg = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const hiyvePackages = getHiyvePackages(pkg);
  if (hiyvePackages.length === 0) return;

  let updated = 0;
  for (const name of hiyvePackages) {
    const key = `@hiyve/${name}`;
    const targetVersion = mode === 'dev' ? `link:${componentsPath}/${name}` : getProdPath(name);
    if (pkg.dependencies[key] !== targetVersion) {
      pkg.dependencies[key] = targetVersion;
      updated++;
    }
  }

  if (updated === 0) {
    console.log(`${label}: Already in ${mode} mode (${hiyvePackages.length} packages)`);
    return;
  }

  fs.writeFileSync(filePath, JSON.stringify(pkg, null, 2) + '\n');
  console.log(`${label}: Updated to ${mode.toUpperCase()} mode (${updated} of ${hiyvePackages.length} @hiyve/* packages)`);
}

function setMode(mode) {
  toggleFile(PACKAGE_JSON, COMPONENTS_PATH, mode, 'package.json');
}

function showStatusForFile(filePath, label) {
  if (!fs.existsSync(filePath)) return;

  const pkg = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const mode = getCurrentMode(pkg);
  const hiyvePackages = getHiyvePackages(pkg);
  if (hiyvePackages.length === 0) return;

  const modeLabel = mode === 'mixed' ? 'MIXED (run dev or prod to fix)' : mode.toUpperCase();
  console.log(`\n${label} — mode: ${modeLabel}`);

  for (const name of hiyvePackages) {
    const key = `@hiyve/${name}`;
    const value = pkg.dependencies[key];
    const isDev = isDevVersion(value);
    const source = isDev ? 'LOCAL' : 'REGISTRY';
    const versionInfo = isDev ? '' : ` (v${value})`;
    const highlight = mode === 'mixed' ? (isDev ? '' : ' ⚠️') : '';
    console.log(`  ${key}: ${source}${versionInfo}${highlight}`);
  }
}

function showStatus() {
  showStatusForFile(PACKAGE_JSON, 'package.json');
  console.log('');
}

// Main
const command = process.argv[2];

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
    console.log(`
Usage: node scripts/toggle-packages.js <command>

Commands:
  dev     Update package.json to use local packages
  prod    Update package.json to use S3 packages
  status  Show current mode and package sources
`);
}
