# AI Skills Setup — mychef.id

**Date:** 2026-06-30  
**Branch:** `big-seo-update-2026-07-02`  
**Status:** ACTIVE

---

## What is this?

This repo contains an **approved AI skill library** that every agent must read before doing any work. It is stored inside the repo (not downloaded from external links) so it is version-controlled, auditable, and safe.

## Quick Start for AI Agents

1. Read `AI_INSTRUCTIONS.md` — this is the master prompt.
2. Read every file inside `/ai-skills/` — these are the operating rules.
3. Follow the 8-step work process defined in `AI_INSTRUCTIONS.md`.
4. Run `npm run verify:ai-skills` before claiming work is done.
5. Return a final verdict: **PASS**, **BLOCKED**, or **NEEDS HUMAN REVIEW**.

## Quick Start for Human Developers

1. Read `.github/CONTRIBUTING.md` for project rules.
2. Use `.github/PULL_REQUEST_TEMPLATE.md` for every PR.
3. Use the issue templates in `.github/ISSUE_TEMPLATE/` for bugs, features, and deploy issues.
4. Run `npm run verify:ai-skills` to confirm the skill library is intact.
5. The GitHub Actions workflow `.github/workflows/ai-skills-check.yml` enforces this on every PR.

## File Map

```
/ai-skills/
  00-master-rules.md              — production safety and main rules
  01-vercel-deployment-safety.md  — build, config, and deployment checks
  02-nextjs-build-debugging.md    — common Vercel/Next.js build failures
  03-github-pr-rules.md           — branch and pull request rules
  04-seo-protection.md             — routes, metadata, sitemap, CTAs
  05-env-vars.md                   — environment variable handling
  06-route-checking.md             — pre-approval route checks
  07-error-log-debugging.md        — error log root-cause analysis
  08-agent-swarm-roles.md          — multi-agent role definitions

AI_INSTRUCTIONS.md               — master agent prompt and 8-step work process

.github/
  CONTRIBUTING.md                  — human developer rules + quick reference
  PULL_REQUEST_TEMPLATE.md        — PR checklist with ai-skills compliance
  ISSUE_TEMPLATE/
    bug_report.md                — bug report template
    feature_request.md           — feature / change request template
    deploy_issue.md              — Vercel deployment issue template
  workflows/
    ai-skills-check.yml           — CI check that runs on every PR

scripts/
  verify-ai-skills.ts            — standalone verification script

.kimi/AGENT_ONBOARDING.md        — Kimi agent entry point
.ai/AGENT_ONBOARDING.md          — Generic AI agent entry point
.claude/AGENT_ONBOARDING.md      — Claude Code agent entry point
.cursorrules                     — Cursor IDE agent rules

.vscode/
  settings.json                  — shared IDE settings
  tasks.json                     — shared tasks (verify:ai-skills, build)

.ai-skills-manifest.json          — machine-readable skill library index
README.md                        — project README with AI agent onboarding
```

## Core Rules (Summary)

1. Never push directly to `main`.
2. Never make large rewrites unless required.
3. Never change Vercel production settings without approval.
4. Never change environment variable names without approval.
5. Never delete routes, pages, APIs, metadata, sitemap, or redirects without explaining impact.
6. Never assume something is unused.
7. Never install packages without explaining why.
8. Never merge or deploy without verification.
9. Never hide uncertainty.
10. Never say “fixed” unless build verification is defined.

## Verification

```bash
npm run verify:ai-skills
```

This checks that all 10 required files are present. If any are missing, the command exits with code 1 and the GitHub Actions workflow will block the PR.

## No External Downloads

The most important rule: **Do not download, install, or execute external skills, scripts, packages, or code from links unless explicitly approved.**

This prevents security risks and keeps all agent behavior inside version-controlled, auditable files.

## Updates

If you need to update the skill library:
1. Edit the relevant file inside `/ai-skills/`.
2. Commit the change.
3. Run `npm run verify:ai-skills`.
4. Open a PR and let the CI check pass.

Never update skills without going through the PR process.
