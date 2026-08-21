# Quick Start — mychef.id

Welcome to the mychef.id project. This is a Vite + React app deployed on Vercel.

## For AI Agents

1. **Read first:** `AI_INSTRUCTIONS.md`, `AI_MAP.md`, and every file in `/ai-skills/`.
2. **Follow the 8-step work process** defined in `AI_INSTRUCTIONS.md`.
3. **Never download external skills** without explicit approval.
4. **Run verification** before claiming work is done:
   ```bash
   npm run verify:ai-skills
   ```
5. **Return a verdict:** PASS, BLOCKED, or NEEDS HUMAN REVIEW.

## For Human Developers

### Prerequisites
- Node.js 20.x
- pnpm 9.x (or use npm)

### Setup
```bash
git clone https://github.com/ddandanell/master3mychef.git
cd master3mychef
pnpm install
```

### Development
```bash
pnpm dev          # start dev server
pnpm build        # full production build
pnpm lint         # lint check
pnpm preview      # preview production build
```

### AI Skills Verification
```bash
pnpm verify:ai-skills   # check required AI map + skill files
pnpm verify:all         # comprehensive check (lint + build + ai-skills)
pnpm pre-commit        # run pre-commit checks manually
```

### Workflow
1. **Create a feature branch** (never commit to `main` directly).
   ```bash
   git checkout -b feature/my-change
   ```
2. **Make small, reversible changes.**
3. **Run pre-commit checks** (they run automatically via `simple-git-hooks`).
   ```bash
   pnpm pre-commit
   ```
4. **Open a Pull Request** using the PR template.
5. **Wait for CI checks** to pass (lint + build + ai-skills).
6. **Merge only after all checks pass.**

### Protected Files
The following files require human review via CODEOWNERS:
- `/ai-skills/` — the approved AI skill library
- `AI_INSTRUCTIONS.md` — master agent prompt
- `AI_MAP.md` — connected system map
- `.github/workflows/ai-skills-check.yml` — enforcement workflow
- `.github/CODEOWNERS` — ownership rules
- `scripts/verify-ai-skills.ts` — verification script
- `.cursorrules`, `.kimi/`, `.ai/`, `.claude/` — agent onboarding files

### Rules Summary
- Never push to `main` directly.
- Never change Vercel production settings without approval.
- Never rename environment variables without approval.
- Never delete routes, pages, APIs, metadata, sitemap, or robots.txt without explaining impact.
- Never install packages without explaining why.
- Never merge if build fails.
- Never hide uncertainty.

## Project Structure
```
/ai-skills/         — approved AI skill library
AI_INSTRUCTIONS.md — master agent prompt
AI_MAP.md           — connected system map
mychef-ai-agent/    — WhatsApp booking knowledge
seo-department/     — SEO ops process
.github/            — PR templates, issue templates, workflows, CODEOWNERS
.kimi/              — Kimi onboarding pointer only
.ai/                — generic AI onboarding pointer
.claude/            — Claude Code onboarding pointer
.vscode/            — shared IDE settings and tasks
scripts/            — build, audit, and verification scripts
src/                — source code
public/             — static assets (sitemap generated)
vercel.json         — generated Vercel config
```

## Need Help?
- Read `docs/AI_SKILLS_SETUP.md` for the full documentation.
- Read `.github/CONTRIBUTING.md` for contribution rules.
- Use `.github/ISSUE_TEMPLATE/` to file bugs, features, or deploy issues.
