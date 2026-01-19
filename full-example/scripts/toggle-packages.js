#!/usr/bin/env node

/**
 * Toggle between local development packages and S3 production packages
 *
 * Usage:
 *   node scripts/toggle-packages.js dev    # Use local packages from hiyve-components
 *   node scripts/toggle-packages.js prod   # Use S3 packages
 *   node scripts/toggle-packages.js status # Show current mode
 *
 * IMPORTANT: Always run `npm run packages:prod` before committing to the public
 * examples repo, so it references the S3 packages (not local file paths).
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PACKAGE_JSON = path.join(ROOT, 'package.json');

// Relative path from full-example to hiyve-components packages
// Adjust this if your directory structure is different
const COMPONENTS_PATH = '../../hiyve-components/packages';

const HIYVE_PACKAGES = [
  'audio-monitor',
  'chat',
  'client-provider',
  'control-bar',
  'device-selector',
  'file-manager',
  'mood-analysis',
  'participant-list',
  'recording',
  'transcription',
  'video-grid',
  'video-tile',
  'waiting-room',
];

const S3_BASE = 'https://s3.amazonaws.com/muzie.media/npm-registry';

function getLocalPath(pkg) {
  return `file:${COMPONENTS_PATH}/${pkg}`;
}

function getS3Path(pkg) {
  return `${S3_BASE}/hiyve-${pkg}/hiyve-${pkg}-latest.tgz`;
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
      pkg.dependencies[key] = mode === 'dev' ? getLocalPath(name) : getS3Path(name);
    }
  }

  writePackageJson(pkg);
  console.log(`\n✓ Switched to ${mode.toUpperCase()} mode\n`);

  if (mode === 'dev') {
    console.log('Local packages will be used from:');
    console.log(`  ${path.resolve(ROOT, COMPONENTS_PATH)}\n`);
    console.log('Next steps:');
    console.log('  1. Run "pnpm build" in hiyve-components (or "pnpm dev" for watch mode)');
    console.log('  2. Run "rm -rf node_modules && npm install" here');
    console.log('  3. Run "npm run dev" to start the example\n');
    console.log('\x1b[33m⚠  Remember to run "npm run packages:prod" before committing!\x1b[0m\n');
  } else {
    console.log('S3 packages will be used.\n');
    console.log('Next steps:');
    console.log('  1. Run "npm cache clean --force" (if you had old cached versions)');
    console.log('  2. Run "rm -rf node_modules && npm install"');
    console.log('  3. Run "npm run dev" to start the example\n');
  }
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
      const source = value.startsWith('file:') ? 'LOCAL' : 'S3';
      console.log(`  ${key}: ${source}`);
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
  dev     Use local packages from hiyve-components (for development)
  prod    Use S3 packages (for production/testing)
  status  Show current mode
`);
}
