# Kimi — MyChef Project Skills

Read this file FIRST in every session.

## MANDATORY STARTUP SEQUENCE

1. Read `.kimi/skills/00-kimi-system-prompt.md` — project facts and skill index
2. Read `.kimi/skills/GIT-DANGER-RULES.md` — CRITICAL git safety rules (incident history)
3. Read `.kimi/skills/01-production-source-of-truth.md` — confirm you are editing root `/src`
4. Read `.kimi/skills/02-git-history-audit.md` — run git log to see what changed recently

Then load the specific skills relevant to your task before starting work.

## The single most important rule

**NEVER run `git rm -r --cached .` or `git add -A` or `git add .` at repo root.**

These destroyed the entire site's git tracking in commit `0a3d99f` (2026-06-30) and caused 7 consecutive Vercel build failures. Always stage specific files only: `git add src/MyFile.tsx`.

## Before every commit

```bash
npx tsc -b 2>&1 | tail -5   # must exit 0
git ls-files package.json index.html tsconfig.json src/main.tsx  # all must return paths
git add <specific files only>
git commit -m "type(scope): what and why"
git push origin main
```

## Skills in `.kimi/skills/`

| File | When |
|------|------|
| `00-kimi-system-prompt.md` | Every session start |
| `GIT-DANGER-RULES.md` | Before any git command |
| `01-production-source-of-truth.md` | First — every sprint |
| `02-git-history-audit.md` | Start of sprint |
| `03-duplicate-file-control.md` | Before creating any file |
| `04-dead-code-detection.md` | Before editing/deleting |
| `05-routing-and-sitemap-audit.md` | After page changes |
| `06-google-tracking-audit.md` | Before tracking changes |
| `07-search-console-error-triage.md` | SEO sprints |
| `08-schema-audit.md` | Schema changes |
| `09-internal-linking-audit.md` | SEO sprints |
| `10-content-reuse-system.md` | Before writing new pages |
| `11-conversion-flow-audit.md` | CTA/mobile sprints |
| `12-build-and-typescript-verification.md` | Before EVERY commit |
| `13-commit-and-deploy-discipline.md` | Every ship |
| `14-sprint-reporting.md` | End of sprint |
| `15-do-not-touch-guard.md` | Before editing anything |
