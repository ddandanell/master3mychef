# Task 4 Report: Update BarService types to support section images

## Status

DONE

## What changed

- Added optional section image fields to the `BarService` interface in `src/data/bar-services/types.ts`:
  - `problemImage?`, `problemAlt?`
  - `deliverablesImage?`, `deliverablesAlt?`
  - `processImage?`, `processAlt?`
  - `proofImage?`, `proofAlt?`
- Kept `galleryImages` unchanged for backward compatibility and added a `@deprecated` JSDoc comment directing future use to the section image fields.
- Expanded-section images are intentionally left for Task 5.

## Commits made

- `abfc3d81` — types: section image fields on BarService

## Verification

- `npx tsc --noEmit` passed with no errors.
- Pre-commit checks passed (AI skills, secret scan, branch safety).

## Concerns

None.
