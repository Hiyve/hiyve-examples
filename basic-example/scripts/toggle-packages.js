#!/usr/bin/env node

/**
 * Toggle between local development packages and registry production packages
 *
 * This script only updates package.json. The shell script (toggle-packages.sh)
 * handles building, cleaning, and installing.
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

// Relative path from basic-example to hiyve-sdk packages
const COMPONENTS_PATH = '../../hiyve-sdk/packages';

// Only the packages used by basic-example
const HIYVE_PACKAGES = [
  'client-provider',
  'control-bar',
  'device-selector',
  'rtc-client',
  'utilities',
  'video-grid',
  'video-tile',
];

// Production uses latest tag from the private registry (except rtc-client which uses alpha)
const PROD_VERSION = 'latest';
const RTC_CLIENT_VERSION = 'alpha';

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

function getCurrentMode(pkg) {
  const firstHiyve = pkg.dependencies['@hiyve/control-bar'];
  if (firstHiyve?.startsWith('file:')) return 'dev';
  // Prod mode: semver ranges, dist-tags (latest, alpha), or S3 URLs
  if (firstHiyve?.startsWith('^') || firstHiyve?.startsWith('~')) return 'prod';
  if (firstHiyve === 'latest' || firstHiyve === 'alpha') return 'prod';
  if (firstHiyve?.includes('s3.amazonaws.com')) return 'prod';
  return 'unknown';
}

function setMode(mode) {
  const pkg = readPackageJson();
  const currentMode = getCurrentMode(pkg);

  if (currentMode === mode) {
    console.log(`Already in ${mode} mode`);
    return;
  }

  for (const name of HIYVE_PACKAGES) {
    const key = `@hiyve/${name}`;
    if (pkg.dependencies[key]) {
      pkg.dependencies[key] = mode === 'dev' ? getLocalPath(name) : getProdPath(name);
    }
  }

  writePackageJson(pkg);
  console.log(`Updated package.json to ${mode.toUpperCase()} mode`);
}

function showStatus() {
  const pkg = readPackageJson();
  const mode = getCurrentMode(pkg);

  console.log(`\nCurrent mode: ${mode.toUpperCase()}\n`);
  console.log('Package sources:');

  for (const name of HIYVE_PACKAGES) {
    const key = `@hiyve/${name}`;
    const value = pkg.dependencies[key];
    if (value) {
      const source = value.startsWith('file:') ? 'LOCAL' : 'REGISTRY';
      console.log(`  ${key}: ${source}`);
    } else {
      console.log(`  ${key}: \x1b[33mNOT IN PACKAGE.JSON\x1b[0m`);
    }
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
