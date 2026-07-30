/**
 * RETIRED 2026-07-30 — do not restore.
 *
 * This was the /villa-chef page. It published the old private chef day-rate ladder
 * (IDR 2,500,000 / 3,500,000 / 4,200,000 per day) while having no navbar link and a
 * non-keyword URL — which is why almost nobody found what was, commercially, the most
 * useful page on the site.
 *
 * Its content and pricing now live on the Private Chef pillar:
 *   route     src/App.tsx                          -> /private-chef-bali
 *   page      src/pages/PrivateChefPillarPage.tsx
 *   prices    src/data/siteFacts.ts -> MEAL_PLANS  (single source of truth)
 *   redirect  src/data/redirects.ts                -> /villa-chef 301 /private-chef-bali
 *
 * Kept as a tombstone so the retired rates cannot be reintroduced by copy-paste.
 * Not imported anywhere, not part of any route.
 */

export {}
