# Task 4 Report: Expand Hub Page Content & Discovery

## Summary

Expanded the `/bar-services/` hub page into a canonical discovery page with unique, 1,000+ word body copy, an "All Bar Services" discovery grid, and a gallery block.

## Files changed

- `src/data/bar-services/types.ts`
  - Extended `BarServicesHubData.expandedCopy` from a single `{ title, paragraphs }` block to a structured object with `intro`, `whyNow`, `whyMyChef`, `howWeWork`, and `cta` sections.
- `src/data/bar-services/hub.ts`
  - Added `expandedCopy` with five sections totalling **1,165 words**.
  - Added `galleryImages` with three image assets and alt text.
  - Kept the existing `groups` array (Consulting, Staffing, Management, Flagship).
- `src/pages/BarServicesHubPage.tsx`
  - Imported and rendered `BarServiceGallery`.
  - Rendered the new `expandedCopy` sections between the hero and service discovery grid.
  - Converted the existing service-groups section into the canonical "All Bar Services" discovery grid.
  - Added FAQ, Contact, and Resources utility cards under a "Help & guidance" group.

## Word-count verification

Verified by extracting all paragraph strings from `expandedCopy` in `src/data/bar-services/hub.ts`:

| Section      | Words | Target | Status |
|--------------|-------|--------|--------|
| intro        | 284   | ≥250   | ✓      |
| whyNow       | 256   | ≥200   | ✓      |
| whyMyChef    | 242   | ≥200   | ✓      |
| howWeWork    | 236   | ≥200   | ✓      |
| cta          | 147   | ≥100   | ✓      |
| **Total**    | **1,165** | **≥1,000** | **✓** |

## Discovery grid coverage

The discovery grid surfaces:

- **Consulting (5):** Bar Audit & Improvement, Bar Costing & Inventory Control, Cocktail Menu Development, Signature Cocktail Creation, New Bar Setup
- **Staffing (3):** Temporary Bartender Staffing, Permanent Bar Staff Recruitment, Bar Equipment Supply & Rental
- **Management (2):** Bar Staff Training, Monthly Bar Management Support
- **Flagship (1):** Complete Bar Performance Programme
- **Help & guidance (3):** FAQ, Contact, Resources

Total: **11 services + FAQ + Contact + Resources** ✓

## Verification commands

```bash
npx eslint src/pages/BarServicesHubPage.tsx src/data/bar-services/hub.ts src/data/bar-services/types.ts
# → passed

npx tsc --noEmit
# → passed

pnpm build
# → passed (281/281 routes prerendered)
```

## Notes

- Copy was written from the blueprint themes but rewritten and expanded to be unique to the hub page.
- The primary keyword "bar consultant Bali" is present in the H1 and the first paragraph of the expanded copy.
- Gallery images reuse existing generated assets already validated by the build pipeline.
