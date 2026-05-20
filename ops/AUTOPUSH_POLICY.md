# Auto Commit + Push Policy (myCHEF)

Effective: 2026-05-20
Scope: /Users/openclaw/Downloads/MYCHEF . MASTER/app

Rule:
- After any verified build (npm run build passes), Hermes will:
  1) create a git commit with a concise message
  2) push to the current branch

Constraints:
- No destructive ops (reset, force-push, delete) without explicit approval.
- No secrets or .env files ever committed.
- If build fails, do not commit or push.

Notes:
- This replaces prior approval-gated commit/push behavior for this repo only.
