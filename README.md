# mychef.id

AI-powered private chef platform deployed on Vercel.

## AI Agent Onboarding

**Before doing any work on this repo, read:**

1. `AI_INSTRUCTIONS.md` — master agent prompt and work process
2. `ai-skills/` — approved skill library (9 files)

These are the only approved skills. Do not download external skills or scripts without explicit approval.

## Quick Scripts

```bash
pnpm dev              # start dev server
pnpm build            # full production build
pnpm lint             # lint check
pnpm verify:ai-skills # verify ai-skills files are present
```

## Project Structure

- `src/` — source code
- `public/` — static assets
- `scripts/` — build & audit scripts
- `ai-skills/` — approved AI agent skill library
- `.github/` — PR templates, issue templates, contributing guidelines
- `vercel.json` — Vercel deployment config

## Contributing

See `.github/CONTRIBUTING.md` and `.github/PULL_REQUEST_TEMPLATE.md`.
