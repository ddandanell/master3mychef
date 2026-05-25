#!/usr/bin/env bash
set -u

APP_DIR="/Users/openclaw/Downloads/MYCHEF . MASTER/app"
REPORT="$APP_DIR/reports/tracking-evidence-report.md"
PREVIEW_LOG="/tmp/mychef_preview.log"

cd "$APP_DIR" || exit 1

TS="$(date '+%Y-%m-%d %H:%M:%S %Z')"

TRACKING_STATUS="FAIL"
BUILD_STATUS="FAIL"
IMAGES_STATUS="FAIL"
UI_STATUS="PASS"
PREVIEW_STATUS="FAIL"
PREVIEW_NOTES=""
CHANGES="none"
NEXT_STEP="Continue loop and apply one safe reversible UI/readability improvement."

run_cmd() {
  local label="$1"
  local cmd="$2"
  local outfile="$3"
  bash -lc "$cmd" >"$outfile" 2>&1
  return $?
}

# Self-heal precheck
pkill -f "vite preview --host 127.0.0.1 --port 4173" >/dev/null 2>&1 || true
pkill -f "vite preview --port 4173" >/dev/null 2>&1 || true
pkill -f "playwright-mcp|mcp-chrome" >/dev/null 2>&1 || true

mkdir -p "$APP_DIR/reports"

# 1) Tracking
TRACKING_LOG="/tmp/mychef_tracking.log"
if run_cmd "tracking" "npx playwright test tests/e2e/ga4-tracking.spec.ts --reporter=line" "$TRACKING_LOG"; then
  TRACKING_STATUS="PASS"
fi

# 2) Build + image audit
BUILD_LOG="/tmp/mychef_build.log"
if run_cmd "build" "npm run build" "$BUILD_LOG"; then
  BUILD_STATUS="PASS"
fi

IMAGES_LOG="/tmp/mychef_images.log"
if run_cmd "images" "npm run audit:images" "$IMAGES_LOG"; then
  IMAGES_STATUS="PASS"
fi

# 3) UI consistency quick scan (skill-aligned guard checks)
if grep -R "rgba(0,0,0,0.72)" src >/dev/null 2>&1; then
  UI_STATUS="FAIL (found old light overlay rgba(0,0,0,0.72))"
fi
if grep -R "translate-y-2.*translate-y-0" src/components/Navbar.tsx >/dev/null 2>&1; then
  UI_STATUS="FAIL (found popping dropdown translate pattern)"
fi

# 4) Preview/runtime verification (terminal only)
: > "$PREVIEW_LOG"
nohup npx vite preview --host 127.0.0.1 --port 4173 >"$PREVIEW_LOG" 2>&1 &
PREVIEW_PID=$!
sleep 4

HOME_CODE="$(curl -s -o /tmp/mychef_home.html -w '%{http_code}' http://127.0.0.1:4173/)"
FINE_CODE="$(curl -s -o /tmp/mychef_fine.html -w '%{http_code}' http://127.0.0.1:4173/fine-dining)"

if [[ "$HOME_CODE" == "200" && "$FINE_CODE" == "200" ]]; then
  PREVIEW_STATUS="PASS"
  PREVIEW_NOTES="/=$HOME_CODE /fine-dining=$FINE_CODE"
else
  PREVIEW_STATUS="FAIL"
  PREVIEW_NOTES="/=$HOME_CODE /fine-dining=$FINE_CODE"
fi

kill "$PREVIEW_PID" >/dev/null 2>&1 || true
pkill -f "vite preview --host 127.0.0.1 --port 4173" >/dev/null 2>&1 || true

# 5) Changes summary
CHANGES_RAW="$(git status --porcelain | awk '{print $2}' | tr '\n' ', ' | sed 's/, $//')"
if [[ -n "$CHANGES_RAW" ]]; then
  CHANGES="$CHANGES_RAW"
fi

# 6) Update evidence report
{
  echo ""
  echo "## Loop tick - $TS"
  echo "- TRACKING: $TRACKING_STATUS"
  echo "- BUILD: $BUILD_STATUS"
  echo "- IMAGES: $IMAGES_STATUS"
  echo "- UI CONSISTENCY: $UI_STATUS"
  echo "- PREVIEW CHECK: $PREVIEW_STATUS ($PREVIEW_NOTES)"
  echo "- CHANGES: $CHANGES"
  echo "- NEXT STEP: $NEXT_STEP"
} >> "$REPORT"

# 7) Final status output
printf "TRACKING: %s\n" "$TRACKING_STATUS"
printf "BUILD: %s\n" "$BUILD_STATUS"
printf "IMAGES: %s\n" "$IMAGES_STATUS"
printf "UI CONSISTENCY: %s\n" "$UI_STATUS"
printf "PREVIEW CHECK: %s %s\n" "$PREVIEW_STATUS" "$PREVIEW_NOTES"
printf "CHANGES: %s\n" "$CHANGES"
printf "NEXT STEP: %s\n" "$NEXT_STEP"
