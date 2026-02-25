#!/usr/bin/env bash
# Run test suites across all examples.
# Usage: ./scripts/test-all.sh
#   --bail    Stop on first failure

set -euo pipefail

BAIL=false
[[ "${1:-}" == "--bail" ]] && BAIL=true

EXAMPLES=(
  basic-example
  media-player-example
  basic-identity-example
  token-room-example
  react-room-example
  rooms-example
  full-example
  ai-video-room-example
  interview-example
  sales-example
  telehealth-example
  nextjs-example
  angular-example
  react-native-example
)

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
PASSED=0
FAILED=0
FAILURES=()

for example in "${EXAMPLES[@]}"; do
  dir="$ROOT_DIR/$example"
  if [[ ! -f "$dir/package.json" ]]; then
    echo "⚠ $example — skipped (no package.json)"
    continue
  fi

  # Check that a test script exists
  if ! grep -q '"test"' "$dir/package.json"; then
    echo "⚠ $example — skipped (no test script)"
    continue
  fi

  printf "\n── %s ──\n" "$example"
  if (cd "$dir" && pnpm test 2>&1); then
    PASSED=$((PASSED + 1))
  else
    FAILED=$((FAILED + 1))
    FAILURES+=("$example")
    if $BAIL; then
      echo ""
      echo "BAIL: stopping after first failure ($example)"
      exit 1
    fi
  fi
done

printf "\n══════════════════════════════════════\n"
printf "Results: %d passed, %d failed (of %d)\n" "$PASSED" "$FAILED" "${#EXAMPLES[@]}"
if [[ ${#FAILURES[@]} -gt 0 ]]; then
  printf "Failed:  %s\n" "${FAILURES[*]}"
  exit 1
fi
