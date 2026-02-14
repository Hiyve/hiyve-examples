#!/usr/bin/env node

/**
 * Toggle between local development packages and registry production packages
 *
 * The @hiyve/angular package uses file: (copy) instead of link: (symlink)
 * in dev mode because link: causes duplicate @angular/* module instances
 * that break Angular's dependency injection. With file:, pnpm copies the
 * package into the virtual store where peer deps resolve from the app's
 * node_modules — ensuring singleton Angular instances.
 *
 * Usage:
 *   node scripts/toggle-packages.js dev    # Use local packages
 *   node scripts/toggle-packages.js prod   # Use registry packages
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
 * @param {string} pkg - Package name without @hiyve/ prefix (e.g., 'video-grid')
 * @param {string} tag - Dist tag to use ('latest' or 'alpha')
 * @returns {string} The actual version number or the tag as fallback
 */
function getVersionFromMetadata(pkg, tag = 'latest') {
  const cacheKey = `${pkg}:${tag}`;
  if (versionCache.has(cacheKey)) {
    return versionCache.get(cacheKey);
  }

  // Map package name to metadata filename (e.g., 'video-grid' -> 'hiyve-video-grid.json')
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

// Angular packages need file: (copy) instead of link: (symlink) in dev mode
// because link: creates duplicate @angular/* instances that break DI
function isAngularPackage(name) {
  return name === 'angular';
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

function getLocalPath(pkg) {
  // Angular uses file: (copy) to avoid duplicate module instances
  // All others use link: (symlink) for live development
  const protocol = isAngularPackage(pkg) ? 'file' : 'link';
  return `${protocol}:${COMPONENTS_PATH}/${pkg}`;
}

function getProdPath(pkg) {
  // rtc-client uses alpha tag, all others use latest
  const tag = pkg === 'rtc-client' ? 'alpha' : 'latest';
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
  return version?.startsWith('link:') || version?.startsWith('file:');
}

/**
 * Get current mode by checking all @hiyve/* packages.
 * Returns 'dev' if all are local, 'prod' if all are registry, 'mixed' if some of each.
 */
function getCurrentMode(pkg) {
  const packages = getHiyvePackages(pkg);
  if (packages.length === 0) return 'unknown';

  let devCount = 0;
  let prodCount = 0;

  for (const name of packages) {
    const version = pkg.dependencies[`@hiyve/${name}`];
    if (isDevVersion(version)) {
      devCount++;
    } else {
      prodCount++;
    }
  }

  if (devCount === packages.length) return 'dev';
  if (prodCount === packages.length) return 'prod';
  return 'mixed';
}

function setMode(mode) {
  const pkg = readPackageJson();
  const allPackages = getHiyvePackages(pkg);

  let updated = 0;

  for (const name of allPackages) {
    const key = `@hiyve/${name}`;
    const targetVersion = mode === 'dev' ? getLocalPath(name) : getProdPath(name);
    if (pkg.dependencies[key] !== targetVersion) {
      pkg.dependencies[key] = targetVersion;
      updated++;
    }
  }

  if (updated === 0) {
    console.log(`Already in ${mode} mode (all ${allPackages.length} packages up to date)`);
    return;
  }

  writePackageJson(pkg);
  console.log(`Updated package.json to ${mode.toUpperCase()} mode`);
  console.log(`  Toggled ${updated} package(s)`);

  const angular = allPackages.filter(isAngularPackage);
  if (angular.length > 0 && mode === 'dev') {
    console.log(`  Note: @hiyve/angular uses file: (copy) — run pnpm install after SDK rebuilds`);
  }
}

function showStatus() {
  const pkg = readPackageJson();
  const mode = getCurrentMode(pkg);
  const allPackages = getHiyvePackages(pkg);

  const modeLabel = mode === 'mixed' ? 'MIXED (run dev or prod to fix)' : mode.toUpperCase();
  console.log(`\nCurrent mode: ${modeLabel}\n`);

  console.log(`Packages (${allPackages.length}):\n`);
  for (const name of allPackages) {
    const key = `@hiyve/${name}`;
    const value = pkg.dependencies[key];
    const isDev = isDevVersion(value);
    const source = isDev ? 'LOCAL' : 'REGISTRY';
    const protocol = isAngularPackage(name) && isDev ? ' (file: copy)' : '';
    const versionInfo = isDev ? protocol : ` (v${value})`;
    console.log(`  ${key}: ${source}${versionInfo}`);
  }
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
  prod    Update package.json to use registry packages
  status  Show current mode and package sources
`);
}
