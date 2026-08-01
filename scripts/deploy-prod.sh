#!/usr/bin/env bash
# Always deploy mychef.id to the locked Vercel project: master3mychef
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
LOCK_ID="prj_VkMbGIUciFBk2VE0EUy2SikfWOgK"
LOCK_NAME="master3mychef"
TEAM_SCOPE="daviddandanell-9392s-projects"

cd "$ROOT"

if [[ ! -f .vercel/project.json ]]; then
  echo "ERROR: missing .vercel/project.json — refuse to deploy (would create a new project)."
  exit 1
fi

PROJECT_ID="$(python3 -c "import json; print(json.load(open('.vercel/project.json'))['projectId'])")"
PROJECT_NAME="$(python3 -c "import json; print(json.load(open('.vercel/project.json')).get('projectName',''))")"

if [[ "$PROJECT_ID" != "$LOCK_ID" || "$PROJECT_NAME" != "$LOCK_NAME" ]]; then
  echo "ERROR: .vercel/project.json is NOT the locked production project."
  echo "  expected: $LOCK_NAME / $LOCK_ID"
  echo "  found:    $PROJECT_NAME / $PROJECT_ID"
  echo "Copy the correct link from the main repo .vercel/project.json and retry."
  exit 1
fi

echo "Deploying to locked project: $LOCK_NAME ($LOCK_ID)"
exec vercel deploy --prod --yes --archive=tgz --scope "$TEAM_SCOPE"
