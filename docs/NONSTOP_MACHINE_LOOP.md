# Non-Stop Machine Loop (myCHEF)

Status: ACTIVE DESIGN
Date: 2026-05-22

Objective:
- Run continuously in repeated cycles.
- Auto-decide and continue without waiting for prompts.
- Keep optimizing until no meaningful next action is available in current scope.

Execution mode:
1) Tracking-first checks (GA/GTM/event integrity)
2) Image integrity checks (missing/broken refs + visual verification)
3) UI consistency pass using mychef-ui-patterns (navbar motion, overlays, typography, section rhythm)
4) Page optimization pass (one reversible improvement per loop)
5) Re-check edited pages
6) Full verify pass (tests + build + image audit)
7) Write evidence + next loop plan
8) Repeat on next schedule

Auto-approval policy (scoped):
- Auto-approve normal implementation choices and sequencing decisions.
- Auto-approve non-destructive edits in /app.
- Enforce Bash policy in docs/BASH_EXECUTION_POLICY.md.
- Ask before:
  - deleting many files
  - changing database schema
  - pushing to main
  - deploying production
  - modifying .env
  - installing global packages
- Deny always:
  - reading ~/.ssh
  - reading browser profiles
  - reading password manager files
  - scanning home directory
  - deleting outside project
  - rm -rf outside project
  - uploading secrets

Loop stop condition:
- Only when all in-scope checks pass and no next safe optimization remains.
- Otherwise continue automatically on next cycle.

Per-loop output artifact:
- reports/tracking-evidence-report.md (update)
- short status summary with: what changed, proof, next step
