# mychef.id

AI-powered private chef platform deployed on Vercel.

## AI Agent Onboarding

**Before doing any work on this repo, read:**

1. `AI_INSTRUCTIONS.md` — law and work process
2. `AI_MAP.md` — connected system map (site, integrations, folders)
3. `ai-skills/` — the only approved skill library

Do not download external skills. Do not follow leftover `.kimi` or global Cursor skills as project law. WhatsApp booking knowledge: `mychef-ai-agent/`. SEO process: `seo-department/`.

## Quick Scripts

```bash
pnpm dev              # start dev server
pnpm build            # full production build
pnpm lint             # lint check
pnpm verify:ai-skills # verify ai-skills files are present
```

## Project Structure

- `src/` — website source (this is what deploys)
- `public/` — static assets (sitemap.xml is generated — see `AI_MAP.md`)
- `scripts/` — build, prerender, SEO gates
- `api/` — `send-email` serverless function
- `ai-skills/` — approved AI operating skills
- `mychef-ai-agent/` — WhatsApp booking knowledge base
- `seo-department/` — SEO ops process
- `.github/` — deploy + verify workflows
- `vercel.json` — **generated** from `src/data/redirects.ts`

## Contributing

See `.github/CONTRIBUTING.md` and `.github/PULL_REQUEST_TEMPLATE.md`.
