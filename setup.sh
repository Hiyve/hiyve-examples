#!/bin/bash

# Hiyve Examples - Setup Script
#
# This script sets up everything needed to run the hiyve-examples project
# after downloading (via git clone or zip download).
#
# Usage:
#   ./setup.sh           # Full interactive setup
#   ./setup.sh --quick   # Skip prompts, use defaults

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
FULL_EXAMPLE_DIR="$SCRIPT_DIR/full-example"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
BOLD='\033[1m'
NC='\033[0m'

# Parse arguments
QUICK_MODE=false
if [[ "$1" == "--quick" ]] || [[ "$1" == "-q" ]]; then
    QUICK_MODE=true
fi

print_banner() {
    echo ""
    echo -e "${CYAN}${BOLD}╔════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${CYAN}${BOLD}║              Hiyve Examples - Setup Script                 ║${NC}"
    echo -e "${CYAN}${BOLD}╚════════════════════════════════════════════════════════════╝${NC}"
    echo ""
}

print_status() {
    echo -e "${GREEN}✓${NC} $1"
}

print_step() {
    echo -e "\n${CYAN}▶${NC} ${BOLD}$1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

print_info() {
    echo -e "  $1"
}

# Check Node.js version
check_node() {
    print_step "Checking Node.js version..."

    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed"
        echo ""
        echo "  Please install Node.js 18 or later:"
        echo "    - macOS: brew install node"
        echo "    - Linux: https://nodejs.org/en/download/"
        echo "    - Windows: https://nodejs.org/en/download/"
        echo ""
        exit 1
    fi

    NODE_VERSION=$(node -v | sed 's/v//' | cut -d. -f1)
    if [ "$NODE_VERSION" -lt 18 ]; then
        print_error "Node.js version 18+ required (found $(node -v))"
        echo ""
        echo "  Please upgrade Node.js to version 18 or later"
        echo ""
        exit 1
    fi

    print_status "Node.js $(node -v) detected"
}

# Check npm
check_npm() {
    if ! command -v npm &> /dev/null; then
        print_error "npm is not installed"
        exit 1
    fi
    print_status "npm $(npm -v) detected"
}

# Install dependencies
install_dependencies() {
    print_step "Installing dependencies..."

    cd "$FULL_EXAMPLE_DIR"

    print_info "Installing frontend dependencies..."
    npm install
    print_status "Frontend dependencies installed"

    print_info "Installing server dependencies..."
    cd "$FULL_EXAMPLE_DIR/server"
    npm install
    print_status "Server dependencies installed"
}

# Setup environment file
setup_env() {
    print_step "Setting up environment..."

    ENV_FILE="$FULL_EXAMPLE_DIR/server/.env"
    ENV_EXAMPLE="$FULL_EXAMPLE_DIR/server/.env.example"

    if [ -f "$ENV_FILE" ]; then
        print_status "Environment file already exists"

        # Check if it's configured
        if grep -q "your-api-key-here\|your-client-secret-here" "$ENV_FILE" 2>/dev/null; then
            print_warning "Environment file needs configuration"
            NEEDS_CONFIG=true
        else
            NEEDS_CONFIG=false
        fi
    else
        print_info "Creating environment file from template..."
        cp "$ENV_EXAMPLE" "$ENV_FILE"
        print_status "Environment file created"
        NEEDS_CONFIG=true
    fi

    # Prompt for credentials if needed and not in quick mode
    if [ "$NEEDS_CONFIG" = true ] && [ "$QUICK_MODE" = false ]; then
        echo ""
        echo -e "  ${YELLOW}MuzieRTC API credentials required${NC}"
        echo "  Get your credentials from your MuzieRTC account."
        echo ""

        read -p "  Enter your API Key (or press Enter to skip): " APIKEY
        if [ -n "$APIKEY" ]; then
            # Update APIKEY in .env file (macOS and Linux compatible)
            if [[ "$OSTYPE" == "darwin"* ]]; then
                sed -i '' "s/APIKEY=.*/APIKEY=$APIKEY/" "$ENV_FILE"
            else
                sed -i "s/APIKEY=.*/APIKEY=$APIKEY/" "$ENV_FILE"
            fi
        fi

        read -p "  Enter your Client Secret (or press Enter to skip): " CLIENT_SECRET
        if [ -n "$CLIENT_SECRET" ]; then
            if [[ "$OSTYPE" == "darwin"* ]]; then
                sed -i '' "s/CLIENT_SECRET=.*/CLIENT_SECRET=$CLIENT_SECRET/" "$ENV_FILE"
            else
                sed -i "s/CLIENT_SECRET=.*/CLIENT_SECRET=$CLIENT_SECRET/" "$ENV_FILE"
            fi
        fi

        if [ -n "$APIKEY" ] && [ -n "$CLIENT_SECRET" ]; then
            print_status "API credentials configured"
        fi
    fi
}

# Print final instructions
print_success() {
    echo ""
    echo -e "${GREEN}${BOLD}╔════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${GREEN}${BOLD}║                    Setup Complete!                         ║${NC}"
    echo -e "${GREEN}${BOLD}╚════════════════════════════════════════════════════════════╝${NC}"
    echo ""

    # Check if credentials are configured
    ENV_FILE="$FULL_EXAMPLE_DIR/server/.env"
    if grep -q "your-api-key-here\|your-client-secret-here" "$ENV_FILE" 2>/dev/null; then
        echo -e "${YELLOW}Before starting, configure your API credentials:${NC}"
        echo ""
        echo "  1. Edit full-example/server/.env"
        echo "  2. Set APIKEY and CLIENT_SECRET"
        echo ""
        echo "  Contact MuzieRTC for API credentials if you don't have them."
        echo ""
    fi

    echo -e "${BOLD}To start the application:${NC}"
    echo ""
    echo -e "  ${CYAN}cd full-example${NC}"
    echo -e "  ${CYAN}npm run dev${NC}"
    echo ""
    echo "  This starts both the frontend (port 5173) and backend (port 3001)."
    echo ""
    echo -e "  Open ${CYAN}http://localhost:5173${NC} in your browser."
    echo ""
}

# Main execution
main() {
    print_banner

    check_node
    check_npm
    install_dependencies
    setup_env

    print_success
}

main
