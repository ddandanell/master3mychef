# Local ↔ Online Sync

**Online (production) source of truth:** `origin/main` on GitHub → Vercel project `master3mychef` → https://mychef.id

**SEO campaign branch:** `feat/seo-ranking-safe-optimize`  
- Based on production `main`
- All ranking-safe SEO work happens here
- Auto-checkpoint push every 20 minutes while the campaign runs

**Do not** mix this with long-lived WIP branches (e.g. `fix/concierge-widget-mobile`) that may be ahead/behind production with unrelated uncommitted files.

## How to work on the same version as online

```bash
git fetch origin
git checkout feat/seo-ranking-safe-optimize
git pull --ff-only origin feat/seo-ranking-safe-optimize
# or start clean from production:
git checkout -B feat/seo-ranking-safe-optimize origin/main
```

## After SEO is approved

Merge `feat/seo-ranking-safe-optimize` → `main` (PR), then Vercel deploys mychef.id.
