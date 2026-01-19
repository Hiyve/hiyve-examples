#!/bin/bash

# Toggle between local development packages and S3 production packages
#
# Usage:
#   ./toggle-packages.sh dev    # Use local packages from hiyve-components
#   ./toggle-packages.sh prod   # Use S3 packages
#   ./toggle-packages.sh status # Show current mode
#
# IMPORTANT: Always run `./toggle-packages.sh prod` before committing to the public
# examples repo, so it references the S3 packages (not local file paths).

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
FULL_EXAMPLE_DIR="$SCRIPT_DIR/full-example"
COMPONENTS_DIR="$SCRIPT_DIR/../hiyve-components"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m'

print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

show_usage() {
    echo ""
    echo -e "${CYAN}Toggle Packages - Switch between local and S3 packages${NC}"
    echo ""
    echo "Usage: ./toggle-packages.sh <command>"
    echo ""
    echo "Commands:"
    echo "  dev     Switch to local packages and rebuild"
    echo "  prod    Switch to S3 packages and reinstall"
    echo "  status  Show current mode"
    echo ""
    echo -e "${YELLOW}IMPORTANT:${NC} Always run './toggle-packages.sh prod' before committing!"
    echo ""
}

do_status() {
    cd "$FULL_EXAMPLE_DIR"
    node scripts/toggle-packages.js status
}

do_dev() {
    echo ""
    print_status "Switching to DEV mode (local packages)"
    echo ""

    # Check if hiyve-components exists
    if [ ! -d "$COMPONENTS_DIR" ]; then
        print_error "hiyve-components not found at: $COMPONENTS_DIR"
        exit 1
    fi

    # Build hiyve-components first
    print_status "Building hiyve-components packages..."
    cd "$COMPONENTS_DIR"
    pnpm build

    # Switch to dev mode
    print_status "Updating package.json to use local packages..."
    cd "$FULL_EXAMPLE_DIR"
    node scripts/toggle-packages.js dev

    # Clean and reinstall
    print_status "Cleaning node_modules..."
    rm -rf node_modules

    print_status "Installing dependencies..."
    npm install

    echo ""
    print_status "DEV mode ready!"
    echo ""
    echo -e "  Run ${CYAN}npm run dev${NC} in full-example to start the app"
    echo -e "  Run ${CYAN}pnpm dev${NC} in hiyve-components for watch mode"
    echo ""
    print_warning "Remember to run './toggle-packages.sh prod' before committing!"
    echo ""
}

do_prod() {
    echo ""
    print_status "Switching to PROD mode (S3 packages)"
    echo ""

    # Switch to prod mode
    print_status "Updating package.json to use S3 packages..."
    cd "$FULL_EXAMPLE_DIR"
    node scripts/toggle-packages.js prod

    # Clean npm cache to ensure fresh packages
    print_status "Cleaning npm cache..."
    npm cache clean --force 2>/dev/null || true

    # Clean and reinstall
    print_status "Cleaning node_modules..."
    rm -rf node_modules

    print_status "Installing dependencies from S3..."
    npm install

    echo ""
    print_status "PROD mode ready!"
    echo ""
    echo -e "  Run ${CYAN}npm run dev${NC} in full-example to start the app"
    echo ""
}

# Main
case "${1:-}" in
    dev)
        do_dev
        ;;
    prod)
        do_prod
        ;;
    status)
        do_status
        ;;
    *)
        show_usage
        ;;
esac
