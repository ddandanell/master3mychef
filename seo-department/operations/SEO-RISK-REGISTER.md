# SEO Risk Register — myCHEF.id

**Owner:** Compliance & Risk (24) · **Updated:** 2026-07-28
Severity: CRITICAL (stop work) · HIGH · MEDIUM · LOW

| ID | Risk | Severity | Evidence | Impact | Required action | Owner | Status |
|---|---|---|---|---|---|---|---|
| R-001 | **Service area overreach.** 61 of 62 areas published, including Munduk, Pemuteran, Amed, Lovina, Tulamben, Nusa Penida, Kintamani — 2–4 hours from the South Bali base | HIGH | `src/data/privateChefAreas.ts` — 61 `published: true`, 1 `false` | Enquiries that must be declined; misleading LocalBusiness schema asserting presence; trust damage; potential misrepresentation | Management confirms genuine coverage per area. Unpublish or explicitly qualify (e.g. travel surcharge, minimum spend) any area not reliably served | Management / 01 | **OPEN — awaiting business decision** |
| R-002 | **Intent overlap across three page families.** `/private-chef/{area}`, `/locations/{area}`, `/journal/private-chef-{area}-guide` | MEDIUM | 248-URL sitemap analysis | Split ranking signals; unclear which page Google serves; wasted crawl and editorial effort | Pull query-per-URL from GSC. Consolidate **only on evidence**. Do not delete pages with existing links or rankings | 05 / 04 | OPEN — blocked on GSC |
| R-003 | **Unsubstantiated quantitative trust claims.** e.g. "560+ villas served", "Michelin-trained" in live metadata | HIGH | `src/data/page-meta.ts` | Unsupported advertising claims; credibility exposure if challenged | Management provides documented substantiation, or the claims are removed/softened. Applies everywhere the figure is reused | 24 / Management | **OPEN — evidence required** |
| R-004 | **Allergy and dietary claims.** Dietary handling described in a way that could read as a medical or safety guarantee | HIGH | Site handles dietary content across multiple pages | Health risk to guests; legal liability; no SEO benefit justifies it | Audit all dietary and allergy language. State procedures, never guarantee outcomes | 24 / 11 | OPEN |
| R-005 | **Client imagery permission.** Event photography of private clients | MEDIUM | Extensive event imagery across the site | Privacy breach; loss of client trust | Documented permission required before any identifiable client image is published or reused | 17 / 24 | OPEN |
| R-006 | **Conversion tracking gap.** WhatsApp is the primary conversion and its tracking status is unverified | HIGH | No tracking configuration found in repo review | Every performance claim becomes unfalsifiable; budget allocated blind | Audit and implement WhatsApp click tracking before any performance reporting is issued | 18 | OPEN |
| R-007 | **Rendering parity on a Vite SPA.** Crawlers and AI bots may receive an empty shell | CRITICAL if confirmed | Vite + React on Vercel; robots.txt explicitly invites AI crawlers | Content invisible to search and AI systems; robots.txt permission becomes worthless | Verify raw HTML vs rendered DOM on 10 priority URLs immediately | 06 | OPEN — verify first |
| R-008 | **Additional domain confusion.** `satuatapsinergi.id` served from the same Vercel project | LOW | `.vercel/project.json` domain list | Possible duplicate content or brand confusion | Clarify intent with management; confirm canonical handling | 06 / 22 | OPEN |

## Escalation rule
Any risk raised to CRITICAL halts related work until management rules. Compliance & Risk may raise a stop without the Director's agreement.
