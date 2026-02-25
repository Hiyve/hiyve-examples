#!/usr/bin/env bash
# Run test suites across all examples (in parallel by default).
# Usage: ./scripts/test-all.sh [--bail] [--sequential]
#   --bail        Launch all in parallel, but kill remaining on first failure
#   --sequential  Run one at a time (old behavior, useful for debugging)

set -uo pipefail

BAIL=false
SEQUENTIAL=false
for arg in "$@"; do
  case "$arg" in
    --bail) BAIL=true ;;
    --sequential) SEQUENTIAL=true ;;
    *) echo "Unknown flag: $arg"; exit 1 ;;
  esac
done

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

# ── Temp dir for per-example logs ──────────────────────────────
TMPDIR_LOGS="$(mktemp -d)"
cleanup() { rm -rf "$TMPDIR_LOGS"; }
trap cleanup EXIT

# ── Sequential mode (old behavior) ────────────────────────────
if $SEQUENTIAL; then
  PASSED=0
  FAILED=0
  FAILURES=()

  for example in "${EXAMPLES[@]}"; do
    dir="$ROOT_DIR/$example"
    if [[ ! -f "$dir/package.json" ]]; then
      echo "⚠ $example — skipped (no package.json)"
      continue
    fi
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
  exit 0
fi

# ── Parallel mode (default) ───────────────────────────────────

# Arrays indexed by position — keeps output in definition order.
PIDS=()
NAMES=()
SKIPPED=()

TOTAL_START="$(date +%s)"

for i in "${!EXAMPLES[@]}"; do
  example="${EXAMPLES[$i]}"
  dir="$ROOT_DIR/$example"

  if [[ ! -f "$dir/package.json" ]]; then
    SKIPPED+=("$example (no package.json)")
    continue
  fi
  if ! grep -q '"test"' "$dir/package.json"; then
    SKIPPED+=("$example (no test script)")
    continue
  fi

  logfile="$TMPDIR_LOGS/$example.log"

  # Launch in background; record wall-clock time inside the subshell.
  (
    start="$(date +%s)"
    cd "$dir" && pnpm test > "$logfile" 2>&1
    rc=$?
    elapsed=$(( $(date +%s) - start ))
    echo "$elapsed" > "$TMPDIR_LOGS/$example.time"
    exit $rc
  ) &

  PIDS+=($!)
  NAMES+=("$example")
done

# ── Wait for results (poll so we can print live progress) ─────

TOTAL_JOBS=${#PIDS[@]}
FINISHED=0
PASSED=0
FAILED=0
FAILURES=()
EXIT_CODES=()
DONE=()
for i in "${!PIDS[@]}"; do DONE[$i]=false; done

printf "\nRunning %d examples in parallel...\n\n" "$TOTAL_JOBS"

bail_triggered=false

while true; do
  all_done=true
  for i in "${!PIDS[@]}"; do
    ${DONE[$i]} && continue
    if ! kill -0 "${PIDS[$i]}" 2>/dev/null; then
      # Process finished — collect exit code.
      wait "${PIDS[$i]}" 2>/dev/null
      EXIT_CODES[$i]=$?
      DONE[$i]=true
      FINISHED=$((FINISHED + 1))

      timefile="$TMPDIR_LOGS/${NAMES[$i]}.time"
      elapsed="?"
      [[ -f "$timefile" ]] && elapsed="$(cat "$timefile")"

      if [[ ${EXIT_CODES[$i]} -eq 0 ]]; then
        PASSED=$((PASSED + 1))
        printf "  ✓  %-30s  %ss  [%d/%d]\n" "${NAMES[$i]}" "$elapsed" "$FINISHED" "$TOTAL_JOBS"
      else
        FAILED=$((FAILED + 1))
        FAILURES+=("${NAMES[$i]}")
        printf "  ✗  %-30s  %ss  [%d/%d]\n" "${NAMES[$i]}" "$elapsed" "$FINISHED" "$TOTAL_JOBS"
        if $BAIL; then
          bail_triggered=true
          break 2
        fi
      fi
    else
      all_done=false
    fi
  done
  $all_done && break
  sleep 0.1
done

if $bail_triggered; then
  # Kill remaining jobs.
  for i in "${!PIDS[@]}"; do
    ${DONE[$i]} && continue
    kill "${PIDS[$i]}" 2>/dev/null
    wait "${PIDS[$i]}" 2>/dev/null || true
  done
fi

TOTAL_ELAPSED=$(( $(date +%s) - TOTAL_START ))

# ── Print summary ─────────────────────────────────────────────

for s in "${SKIPPED[@]+"${SKIPPED[@]}"}"; do
  [[ -n "$s" ]] && printf "  ⚠  skip   %s\n" "$s"
done

# Show killed jobs (bail mode only).
for i in "${!NAMES[@]}"; do
  if [[ -z "${EXIT_CODES[$i]+x}" ]]; then
    printf "  —  killed  %s\n" "${NAMES[$i]}"
  fi
done

echo ""
echo "══════════════════════════════════════"
printf "  %d passed, %d failed  (%ds total)\n" "$PASSED" "$FAILED" "$TOTAL_ELAPSED"
echo "══════════════════════════════════════"

# ── Print logs of failed examples ─────────────────────────────

if [[ ${#FAILURES[@]} -gt 0 ]]; then
  echo ""
  for example in "${FAILURES[@]}"; do
    logfile="$TMPDIR_LOGS/$example.log"
    printf "┌─ %s (output) ─────────────────────\n" "$example"
    if [[ -f "$logfile" ]]; then
      cat "$logfile"
    else
      echo "  (no log captured)"
    fi
    printf "└──────────────────────────────────────\n\n"
  done

  if $BAIL; then
    echo "BAIL: stopped after first failure (${FAILURES[0]})"
  fi

  exit 1
fi
