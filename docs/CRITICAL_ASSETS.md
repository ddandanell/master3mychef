# Critical Assets — Must Remain in Repository

## Problem
The homepage hero image (`/generated/bali-hub-hero.webp`) was repeatedly being lost during deployments, breaking the hero section display.

## Solution
Critical image assets are now validated at **build time**. If any are missing, the build **fails immediately** before deployment.

## Protected Assets

These files **MUST** exist in `public/generated/` at all times:

| Asset | Purpose | Used On |
|-------|---------|---------|
| `bali-hub-hero.webp` | Homepage hero section | `/` (HubPage) |
| `hub-fine-dining.webp` | Fine Dining portal card | `/` |
| `hub-catering.webp` | Catering portal card | `/` |
| `hub-events.webp` | Events portal card | `/` |
| `hero-how-it-works.webp` | "How It Works" section bg | `/` |

## Build Validation

The build process now includes two checkpoints:

1. **Pre-build**: `scripts/validate-critical-assets.ts` runs before code compilation
   - Confirms all critical images are present
   - Blocks build with error message if anything is missing

2. **Post-build**: Same validation runs after bundling
   - Ensures Vite copying didn't fail
   - Prevents broken deployments

## If Build Fails

If you see:
```
❌ CRITICAL: Missing essential hero/portal images!
   Missing: public/generated/bali-hub-hero.webp
```

**Action**: Restore the missing file from git history:
```bash
git checkout HEAD -- public/generated/
```

## Why Files Go Missing

Common causes:
1. **Accidental deletion** during file cleanup
2. **Git ignore patterns** excluding the directory
3. **Gitkeep files** missing (Vite doesn't commit empty folders)
4. **Merged conflicts** during branch syncs

## Adding New Critical Assets

If you add a new hero/portal image that's essential to the homepage:

1. Verify it's in `public/generated/`
2. Add it to `CRITICAL_ASSETS` array in `scripts/validate-critical-assets.ts`
3. Commit the script update with the new asset
4. Test the build locally: `npm run build`

## Never Remove Without Replacement

Before deleting **any** image in `public/generated/`:

1. Search the codebase for all references:
   ```bash
   grep -r "generated/image-name.webp" src/
   ```
2. If referenced in production code, it's critical — don't delete
3. Only delete images with zero references
4. Test build after deletion: `npm run build`

## Backup Location

If anything critical is lost, check `/Users/openclaw/Downloads/Hero\ -mychef.png` for the original hero asset.
