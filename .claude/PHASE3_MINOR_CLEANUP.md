# Phase 3 Minor Cleanup — Subdirectory Images
**Scope**: Secondary image organization task  
**Status**: Documented for future reference  
**Priority**: Low (does not block monitoring or production)

---

## Finding

Phase 3 core standardization (79 images) is complete. However, 15 additional images remain in subdirectories without size suffixes:

### Images Needing Size Suffix
**In public/generated/events/:**
- anniversary-chef.webp
- anniversary-romantic.webp
- baby-shower-hero.webp
- corporate-team.webp
- retreat-breakfast.webp
- retreat-table.webp
- villa-party-night.webp

**In public/generated/catering/:**
- floating-breakfast.webp

**In public/generated/ root:**
- bali-hub-hero.webp
- bali-locations-sunset.webp
- chefs-table-hero-luxury.webp
- floating-breakfast-bali.webp
- hero-corporate-events.webp
- luna-chef-portrait.webp
- partner-platform-hero.webp

---

## Current State

**Production**: ✅ Live (HTTP 200)  
**References**: Active (found 14+ TypeScript file references)  
**Impact**: Zero — these are used but don't follow new naming convention  
**Blocking**: No

---

## Decision

**Defer to Phase 3.5 cleanup task** (not blocking Sunday monitoring)

Reason: These subdirectory images have established references throughout the codebase. Renaming requires:
1. Moving files from subdirectories to public/generated/
2. Adding size suffixes to filenames
3. Updating 14+ file references in TypeScript code
4. Testing build and visual regression

This is a refactoring task suitable for a dedicated session, not a critical fix.

---

## Next Steps

1. ✅ **Phase 3 Core**: Complete (79 images standardized)
2. → **Sunday Monitoring**: Execute (May 19, 0800 UTC)
3. → **Phase 3.5**: Schedule cleanup task after Week 2 monitoring
4. → **Phase 4**: Evaluate based on monitoring insights

---

**Status**: Phase 3 core complete — Phase 3.5 deferred pending Monday prioritization  
**Documented**: 17 May 2026, 23:55 UTC
