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

// Production uses latest tag from the private registry (except rtc-client which uses alpha)
const PROD_VERSION = 'latest';
const RTC_CLIENT_VERSION = 'alpha';

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
  return `file:${COMPONENTS_PATH}/${pkg}`;
}

function getProdPath(pkg) {
  // rtc-client uses alpha tag, all others use latest
  return pkg === 'rtc-client' ? RTC_CLIENT_VERSION : PROD_VERSION;
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
  return version?.startsWith('file:');
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

function setMode(mode) {
  const pkg = readPackageJson();
  const hiyvePackages = getHiyvePackages(pkg);
  const currentMode = getCurrentMode(pkg);

  if (currentMode === mode) {
    console.log(`Already in ${mode} mode (all ${hiyvePackages.length} packages)`);
    return;
  }

  let updated = 0;
  for (const name of hiyvePackages) {
    const key = `@hiyve/${name}`;
    const targetVersion = mode === 'dev' ? getLocalPath(name) : getProdPath(name);
    if (pkg.dependencies[key] !== targetVersion) {
      pkg.dependencies[key] = targetVersion;
      updated++;
    }
  }

  writePackageJson(pkg);
  console.log(`Updated package.json to ${mode.toUpperCase()} mode`);
  console.log(`  Toggled ${updated} of ${hiyvePackages.length} @hiyve/* packages`);
}

function showStatus() {
  const pkg = readPackageJson();
  const mode = getCurrentMode(pkg);
  const hiyvePackages = getHiyvePackages(pkg);

  const modeLabel = mode === 'mixed' ? 'MIXED (run dev or prod to fix)' : mode.toUpperCase();
  console.log(`\nCurrent mode: ${modeLabel}\n`);
  console.log(`Found ${hiyvePackages.length} @hiyve/* packages:\n`);

  for (const name of hiyvePackages) {
    const key = `@hiyve/${name}`;
    const value = pkg.dependencies[key];
    const source = isDevVersion(value) ? 'LOCAL' : 'REGISTRY';
    // Highlight mismatched packages in mixed mode
    const highlight = mode === 'mixed' ? (isDevVersion(value) ? '' : ' ⚠️') : '';
    console.log(`  ${key}: ${source}${highlight}`);
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
  prod    Update package.json to use S3 packages
  status  Show current mode and package sources
`);
}
