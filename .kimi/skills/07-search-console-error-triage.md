# Skill 07 — Search Console Error Triage

**Purpose:** Classify GSC issues by real business impact so effort goes to revenue-relevant fixes, not noise.

**When to use:** When reviewing Google Search Console coverage/indexing reports.

## Priority classes (highest → lowest)
1. **P1 — Indexing blocked on a commercial page:** `noindex`, robots-blocked, or canonical pointing elsewhere on a money page (pricing, service, location, cost guide). Fix immediately.
2. **P2 — Duplicate / wrong canonical:** "Duplicate, Google chose different canonical" or "Alternate page with proper canonical tag" on a page you want indexed.
3. **P3 — Not found (404) / Soft 404:** especially URLs in the sitemap or linked internally → add 301 or fix link.
4. **P4 — Redirected URL submitted in sitemap:** remove from sitemap (sitemap = 200 pages only).
5. **P5 — Discovered, currently not indexed / Crawled not indexed:** thin/low-value; improve content or accept.
6. **P6 — Invalid structured data:** schema errors (see Skill 08).

## Checklist
1. Export the GSC issue list; tag each URL with P1–P6.
2. Cross-check each URL against `redirects.ts`/`vercel.json` and `sitemap.ts`.
3. For P3/P4, confirm the live status code before acting.
4. Never bulk-fix without confirming the URL is one we want indexed.

## Verification
- Each P1/P2 URL: live page returns 200, self-referential canonical, no noindex.
- Each P4 URL removed from sitemap.

## Output
A triage table: URL | class | live status | root cause | action | owner.
