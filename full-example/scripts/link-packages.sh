#!/bin/bash
# Creates symlinks to local @hiyve packages for live development
# Run this after npm install to restore symlinks
# Skips silently if hiyve-components is not found (PROD mode)

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
COMPONENTS_DIR="$PROJECT_DIR/../../hiyve-components/packages"

# Check if hiyve-components exists - if not, we're in PROD mode
if [ ! -d "$COMPONENTS_DIR" ]; then
  echo "ℹ Using S3 packages (hiyve-components not found locally)"
  exit 0
fi

PACKAGES_DIR="$(cd "$COMPONENTS_DIR" && pwd)"

cd "$PROJECT_DIR"

rm -rf node_modules/@hiyve
mkdir -p node_modules/@hiyve

packages=(
  "audio-monitor"
  "chat"
  "client-provider"
  "control-bar"
  "device-selector"
  "file-manager"
  "mood-analysis"
  "participant-list"
  "recording"
  "sidebar"
  "transcription"
  "video-grid"
  "video-tile"
  "waiting-room"
  "whiteboard"
)

for pkg in "${packages[@]}"; do
  if [ -d "$PACKAGES_DIR/$pkg" ]; then
    ln -s "$PACKAGES_DIR/$pkg" "node_modules/@hiyve/$pkg"
  fi
done

echo "✓ Symlinked ${#packages[@]} @hiyve packages to $PACKAGES_DIR"
