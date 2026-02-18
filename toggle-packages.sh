#!/bin/bash

# Toggle between local development packages and registry production packages
#
# Usage:
#   ./toggle-packages.sh dev    # Use local packages from hiyve-sdk
#   ./toggle-packages.sh prod   # Use registry packages
#   ./toggle-packages.sh status # Show current mode
#
# IMPORTANT: Always run `./toggle-packages.sh prod` before committing to the public
# examples repo, so it references the registry packages (not local file paths).

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BASIC_EXAMPLE_DIR="$SCRIPT_DIR/basic-example"
BASIC_IDENTITY_EXAMPLE_DIR="$SCRIPT_DIR/basic-identity-example"
FULL_EXAMPLE_DIR="$SCRIPT_DIR/full-example"
TOKEN_ROOM_EXAMPLE_DIR="$SCRIPT_DIR/token-room-example"
NEXTJS_EXAMPLE_DIR="$SCRIPT_DIR/nextjs-example"
ANGULAR_EXAMPLE_DIR="$SCRIPT_DIR/angular-example"
AI_EXAMPLE_DIR="$SCRIPT_DIR/ai-video-room-example"
RN_EXAMPLE_DIR="$SCRIPT_DIR/react-native-example"
REACT_ROOM_EXAMPLE_DIR="$SCRIPT_DIR/react-room-example"
SALES_EXAMPLE_DIR="$SCRIPT_DIR/sales-example"
INTERVIEW_EXAMPLE_DIR="$SCRIPT_DIR/interview-example"
TELEHEALTH_EXAMPLE_DIR="$SCRIPT_DIR/telehealth-example"
ROOMS_EXAMPLE_DIR="$SCRIPT_DIR/rooms-example"
COMPONENTS_DIR="$SCRIPT_DIR/../hiyve-sdk"

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
    echo -e "${CYAN}Toggle Packages - Switch between local and registry packages${NC}"
    echo ""
    echo "Usage: ./toggle-packages.sh <command>"
    echo ""
    echo "Commands:"
    echo "  dev     Switch to local packages and rebuild"
    echo "  prod    Switch to registry packages and reinstall"
    echo "  status  Show current mode for all examples"
    echo ""
    echo -e "${YELLOW}IMPORTANT:${NC} Always run './toggle-packages.sh prod' before committing!"
    echo ""
}

do_status() {
    echo ""
    echo -e "${CYAN}=== basic-example ===${NC}"
    cd "$BASIC_EXAMPLE_DIR"
    node scripts/toggle-packages.js status

    echo -e "${CYAN}=== basic-identity-example ===${NC}"
    cd "$BASIC_IDENTITY_EXAMPLE_DIR"
    node scripts/toggle-packages.js status

    echo -e "${CYAN}=== full-example ===${NC}"
    cd "$FULL_EXAMPLE_DIR"
    node scripts/toggle-packages.js status

    echo -e "${CYAN}=== token-room-example ===${NC}"
    cd "$TOKEN_ROOM_EXAMPLE_DIR"
    node scripts/toggle-packages.js status

    echo -e "${CYAN}=== nextjs-example ===${NC}"
    cd "$NEXTJS_EXAMPLE_DIR"
    node scripts/toggle-packages.js status

    echo -e "${CYAN}=== angular-example ===${NC}"
    cd "$ANGULAR_EXAMPLE_DIR"
    node scripts/toggle-packages.js status

    echo -e "${CYAN}=== ai-video-room-example ===${NC}"
    cd "$AI_EXAMPLE_DIR"
    node scripts/toggle-packages.js status

    echo -e "${CYAN}=== react-native-example ===${NC}"
    cd "$RN_EXAMPLE_DIR"
    node scripts/toggle-packages.js status

    echo -e "${CYAN}=== react-room-example ===${NC}"
    cd "$REACT_ROOM_EXAMPLE_DIR"
    node scripts/toggle-packages.js status

    echo -e "${CYAN}=== sales-example ===${NC}"
    cd "$SALES_EXAMPLE_DIR"
    node scripts/toggle-packages.js status

    echo -e "${CYAN}=== interview-example ===${NC}"
    cd "$INTERVIEW_EXAMPLE_DIR"
    node scripts/toggle-packages.js status

    echo -e "${CYAN}=== telehealth-example ===${NC}"
    cd "$TELEHEALTH_EXAMPLE_DIR"
    node scripts/toggle-packages.js status

    echo -e "${CYAN}=== rooms-example ===${NC}"
    cd "$ROOMS_EXAMPLE_DIR"
    node scripts/toggle-packages.js status
}

toggle_example() {
    local example_dir="$1"
    local example_name="$2"
    local mode="$3"

    print_status "[$example_name] Updating package.json..."
    cd "$example_dir"
    node scripts/toggle-packages.js "$mode"

    if [ "$mode" = "prod" ]; then
        # Clean pnpm store to ensure fresh packages
        pnpm store prune 2>/dev/null || true
    fi

    print_status "[$example_name] Cleaning node_modules and pnpm-lock.yaml..."
    rm -rf node_modules pnpm-lock.yaml

    print_status "[$example_name] Installing dependencies..."
    pnpm install

    # Clear Vite cache in dev mode so aliased @hiyve/* packages resolve
    # correctly instead of using stale pre-bundled copies
    if [ "$mode" = "dev" ] && [ -d "node_modules/.vite" ]; then
        print_status "[$example_name] Clearing Vite cache..."
        rm -rf node_modules/.vite
    fi
}

toggle_rn_example() {
    local example_dir="$1"
    local example_name="$2"
    local mode="$3"

    print_status "[$example_name] Updating package.json..."
    cd "$example_dir"
    node scripts/toggle-packages.js "$mode"

    if [ "$mode" = "prod" ]; then
        pnpm store prune 2>/dev/null || true
    fi

    print_status "[$example_name] Cleaning node_modules and pnpm-lock.yaml..."
    rm -rf node_modules pnpm-lock.yaml

    print_status "[$example_name] Installing dependencies..."
    pnpm install
}

do_dev() {
    echo ""
    print_status "Switching to DEV mode (local packages)"
    echo ""

    # Check if hiyve-sdk exists
    if [ ! -d "$COMPONENTS_DIR" ]; then
        print_error "hiyve-sdk not found at: $COMPONENTS_DIR"
        exit 1
    fi

    # Build hiyve-sdk first
    print_status "Building hiyve-sdk packages..."
    cd "$COMPONENTS_DIR"
    pnpm build

    # Toggle all examples
    toggle_example "$BASIC_EXAMPLE_DIR" "basic-example" "dev"
    toggle_example "$BASIC_IDENTITY_EXAMPLE_DIR" "basic-identity-example" "dev"
    toggle_example "$FULL_EXAMPLE_DIR" "full-example" "dev"
    toggle_example "$TOKEN_ROOM_EXAMPLE_DIR" "token-room-example" "dev"
    toggle_example "$NEXTJS_EXAMPLE_DIR" "nextjs-example" "dev"
    toggle_example "$ANGULAR_EXAMPLE_DIR" "angular-example" "dev"
    toggle_example "$AI_EXAMPLE_DIR" "ai-video-room-example" "dev"
    toggle_rn_example "$RN_EXAMPLE_DIR" "react-native-example" "dev"
    toggle_example "$REACT_ROOM_EXAMPLE_DIR" "react-room-example" "dev"
    toggle_example "$SALES_EXAMPLE_DIR" "sales-example" "dev"
    toggle_example "$INTERVIEW_EXAMPLE_DIR" "interview-example" "dev"
    toggle_example "$TELEHEALTH_EXAMPLE_DIR" "telehealth-example" "dev"
    toggle_example "$ROOMS_EXAMPLE_DIR" "rooms-example" "dev"

    echo ""
    print_status "DEV mode ready!"
    echo ""
    echo -e "  Start an example:"
    echo -e "    ${CYAN}cd basic-example && pnpm run dev${NC}"
    echo -e "    ${CYAN}cd basic-identity-example && pnpm run dev${NC}"
    echo -e "    ${CYAN}cd full-example && pnpm run dev${NC}"
    echo -e "    ${CYAN}cd token-room-example && pnpm run dev${NC}"
    echo -e "    ${CYAN}cd nextjs-example && pnpm run dev${NC}"
    echo -e "    ${CYAN}cd angular-example && pnpm run dev${NC}"
    echo -e "    ${CYAN}cd ai-video-room-example && pnpm run dev${NC}"
    echo -e "    ${CYAN}cd react-native-example && pnpm run dev${NC}"
    echo -e "    ${CYAN}cd react-room-example && pnpm run dev${NC}"
    echo -e "    ${CYAN}cd sales-example && pnpm run dev${NC}"
    echo -e "    ${CYAN}cd interview-example && pnpm run dev${NC}"
    echo -e "    ${CYAN}cd telehealth-example && pnpm run dev${NC}"
    echo -e "    ${CYAN}cd rooms-example && pnpm run dev${NC}"
    echo ""
    echo -e "  Run ${CYAN}pnpm dev${NC} in hiyve-sdk for watch mode"
    echo ""
    print_warning "Remember to run './toggle-packages.sh prod' before committing!"
    echo ""
}

do_prod() {
    echo ""
    print_status "Switching to PROD mode (registry packages)"
    echo ""

    # Toggle all examples
    toggle_example "$BASIC_EXAMPLE_DIR" "basic-example" "prod"
    toggle_example "$BASIC_IDENTITY_EXAMPLE_DIR" "basic-identity-example" "prod"
    toggle_example "$FULL_EXAMPLE_DIR" "full-example" "prod"
    toggle_example "$TOKEN_ROOM_EXAMPLE_DIR" "token-room-example" "prod"
    toggle_example "$NEXTJS_EXAMPLE_DIR" "nextjs-example" "prod"
    toggle_example "$ANGULAR_EXAMPLE_DIR" "angular-example" "prod"
    toggle_example "$AI_EXAMPLE_DIR" "ai-video-room-example" "prod"
    toggle_rn_example "$RN_EXAMPLE_DIR" "react-native-example" "prod"
    toggle_example "$REACT_ROOM_EXAMPLE_DIR" "react-room-example" "prod"
    toggle_example "$SALES_EXAMPLE_DIR" "sales-example" "prod"
    toggle_example "$INTERVIEW_EXAMPLE_DIR" "interview-example" "prod"
    toggle_example "$TELEHEALTH_EXAMPLE_DIR" "telehealth-example" "prod"
    toggle_example "$ROOMS_EXAMPLE_DIR" "rooms-example" "prod"

    echo ""
    print_status "PROD mode ready!"
    echo ""
    echo -e "  Start an example:"
    echo -e "    ${CYAN}cd basic-example && pnpm run dev${NC}"
    echo -e "    ${CYAN}cd basic-identity-example && pnpm run dev${NC}"
    echo -e "    ${CYAN}cd full-example && pnpm run dev${NC}"
    echo -e "    ${CYAN}cd token-room-example && pnpm run dev${NC}"
    echo -e "    ${CYAN}cd nextjs-example && pnpm run dev${NC}"
    echo -e "    ${CYAN}cd angular-example && pnpm run dev${NC}"
    echo -e "    ${CYAN}cd ai-video-room-example && pnpm run dev${NC}"
    echo -e "    ${CYAN}cd react-native-example && pnpm run dev${NC}"
    echo -e "    ${CYAN}cd react-room-example && pnpm run dev${NC}"
    echo -e "    ${CYAN}cd sales-example && pnpm run dev${NC}"
    echo -e "    ${CYAN}cd interview-example && pnpm run dev${NC}"
    echo -e "    ${CYAN}cd telehealth-example && pnpm run dev${NC}"
    echo -e "    ${CYAN}cd rooms-example && pnpm run dev${NC}"
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
