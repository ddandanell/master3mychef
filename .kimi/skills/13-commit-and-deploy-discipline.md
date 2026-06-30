# Skill 13 — Commit & Deploy Discipline

**Purpose:** Commit only verified changes, with clear messages, and confirm the deploy — so history stays trustworthy and reversible.

**When to use:** Every time you ship.

## Sandbox/git facts
- Sandbox cannot modify `.git` or delete mounted files. Do git via Mac Terminal (osascript): `cd <root> && rm -f .git/index.lock && git add <specific files> && git commit -m "…" && git push origin main`.
- Stage **specific files**, not `git add -A` (root sees `app/` and `.claude/worktrees` as gitlinks — never commit those).
- Deletions: use `git rm <file>` (sandbox `rm` is blocked).

## Checklist
1. Stage only the files you changed (list them explicitly).
2. Conventional message: `type(scope): what + why`.
3. Push to `main`; capture the commit SHA.
4. Monitor Vercel: `list_deployments` → find your SHA → poll `get_deployment` until READY.
5. If ERROR: read `get_deployment_build_logs`, fix, re-ship. Never leave main broken.

## Verification
- `git log --oneline -1` = your commit; Vercel deployment for that SHA = READY and aliased to mychef.id.

## Output
"Committed <sha> (<files>); pushed main; Vercel <dpl id> = READY on mychef.id."
