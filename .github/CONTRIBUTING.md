# Contributing to mychef.id

## Agent / Developer Rules

1. **Read `/ai-skills/` first.** Before any coding, read every relevant file inside `/ai-skills`. These are the approved operating rules.
2. **No external downloads.** Do not download, install, or execute external skills, scripts, packages, or code from links unless explicitly approved.
3. **Small changes.** Prefer minimal, reversible patches. No broad refactors unless requested.
4. **Feature branches only.** Never push directly to `main`. Open a pull request and let checks pass before merging.
5. **Build must pass.** Run `npm run build` (and lint / typecheck if available) before marking work complete.
6. **Protect production.** Do not change Vercel production settings, environment variable names, or delete routes/pages/metadata without explaining impact.
7. **Preserve SEO.** Do not damage URLs, metadata, sitemap, robots.txt, internal links, or CTAs. If URLs change, create redirects first.
8. **Document env vars.** If a new environment variable is required, document: exact name, where it is used, required environments (local/preview/production), and what happens if missing.

## Quick Reference

| Skill File | Purpose |
|------------|---------|
| `00-master-rules.md` | Production safety and main rules |
| `01-vercel-deployment-safety.md` | Build, config, and deployment checks |
| `02-nextjs-build-debugging.md` | Common Vercel/Next.js build failures |
| `03-github-pr-rules.md` | Branch and PR rules |
| `04-seo-protection.md` | Routes, metadata, sitemap, CTAs |
| `05-env-vars.md` | Environment variable handling |
| `06-route-checking.md` | Pre-approval route checks |
| `07-error-log-debugging.md` | Error log root-cause analysis |
| `08-agent-swarm-roles.md` | Multi-agent role definitions |

## Final Verdict

Every task must end with one of:
- **PASS** — safe to merge
- **BLOCKED** — fix required before merge
- **NEEDS HUMAN REVIEW** — ambiguous, get approval
