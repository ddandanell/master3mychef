# 🌐 WEBSITE ALIGNMENT — Living Loop

**Purpose:** keep the live **mychef.id** website and what **Peter says** in agreement, and flag
what (if anything) to fix. This is a repeating loop, not a one-time check.

- **Last live check:** 2026-06-08 (re-verified against the real sitemap)
- **Method:** read `mychef.id/sitemap.xml` for the true page list, then spot-check status codes.
- **Owner:** Claude/Hermes runs the check → David decides any fixes.

---

## ✅ CORRECTION (2026-06-08) — the site is healthy

An earlier pass reported "40 of 49 pages dead (404)." **That was wrong** — it tested an
**outdated list of URLs** (from the old `PRICE_AUDIT.md`). The real site has **100+ live pages**;
those pages simply live at **different addresses** than the old list assumed.

Verified live today (HTTP 200):
| Old (wrong) URL → 404 | Real live URL → 200 |
|------------------------|----------------------|
| `/private-chef-bali` | `/fine-dining/private-chef-bali` ✅ |
| `/events/wedding-events` | `/events/weddings` ✅ |
| `/staffing/private-chef-staffing` | `/staffing/private-chef-placement` ✅ |
| `/catering/wedding-catering` | `/events/weddings` + `/bali-wedding-catering-packages` ✅ |

**Takeaway:** the website is well-built and broad. The lesson is to always pull the **sitemap**
as the source of truth, never a hand-typed link list. `PRICE_AUDIT.md` is now treated as stale.

---

## What the real site actually contains (from sitemap.xml)

- **Location SEO pages (~33 + a `/locations/*` set):** Seminyak, Canggu, Uluwatu, Ubud, Nusa Dua,
  Jimbaran, Sanur, Berawa, Pererenan, Bukit, Kuta, Legian, Kerobokan, Petitenget, Tanah Lot,
  Tabanan, Denpasar, Gianyar, Tegallalang, Amed, Lovina, Candidasa, Padang Bai, Ungasan, Pecatu —
  plus Jakarta, Menteng, Kemang, SCBD, Pondok Indah, BSD, Surabaya, Bandung, Yogyakarta.
- **Fine Dining:** romantic-dinner, tasting-menu, chefs-table, menus, our-chefs, private-chef-bali.
- **Catering:** bbq, buffet, plated, drop-off, babi-guling, grazing-tables, villa, corporate,
  retreat, floating-breakfast.
- **Events:** weddings, birthdays, anniversaries, corporate-events, retreats, baby-showers,
  villa-parties.
- **In-Villa Service:** waiters, butlers, bartenders, mixology, sommelier, host-hostess.
- **Staffing:** private-chef-placement, live-in-chef, villa-staff, household-staff,
  for-villa-managers, for-hotels-restaurants.
- **Conversion-focused service pages:** michelin-private-chef-bali-prices, private-tasting-menu-bali,
  chef-table-experience-bali, group-villa-dinner-packages-bali, luxury-birthday-party-bali,
  hire-private-chef-bali-monthly, villa-staff-bali-agency, butler-service-bali-daily-rate, etc.
- **Content:** `/blog/*` (~23 posts) and `/journal/*` (~14 posts) + `/guide/*`.
- **Core:** `/pricing`, `/book`, `/contact`, `/staffing`, `/locations`, `/partner-platform`,
  `/certified-partner`, `/press`, `/privacy`, `/terms`, `/cancellation`.

> Note: `mychef.id/cancellation` **exists** — so the cancellation policy may already be written on
> the site. Worth reading it to answer `QUESTIONS_FOR_DAVID.md` Q-003.

---

## How this loop runs (repeat any time)
1. **Pull** `mychef.id/sitemap.xml` → the authoritative list of real pages.
2. **Spot-check** status codes on a sample (and any page Peter references).
3. **Diff** live page content vs `KUNDE TEST/knowledge/` + `CONTROL_PANEL.md`.
4. **Log** mismatches: what the site says vs what Peter says.
5. **Recommend** a fix (site or knowledge) and raise any unknowns in `QUESTIONS_FOR_DAVID.md`.
6. Re-run after any site or knowledge change.

> Run on demand: *"run the website alignment check."* Can be scheduled weekly once on the VPS,
> posting a short diff to Telegram.

---

## Price alignment (live pages, still accurate)
The prices Peter knows (`KUNDE TEST/knowledge/pricing.md`) matched the live fine-dining, catering,
corporate-events, and villa-staff pages on the 2026-06-08 scan. No price contradictions found.
**Next loop should also read the dedicated `/pricing` page** (it exists and may carry the canonical
price list) and the conversion pages like `michelin-private-chef-bali-prices`.

## Recommended next actions
1. **Re-point Peter's knowledge to the real URL structure** so he can link customers to live pages
   (e.g. weddings → `/events/weddings`, monthly chef → `/hire-private-chef-bali-monthly`).
2. **Read `/pricing` and `/cancellation`** to fill pricing gaps and Q-003 (cancellation terms).
3. **Retire `PRICE_AUDIT.md`'s "dead pages" claim** — superseded by this file.

## Open questions raised by this check
- See `QUESTIONS_FOR_DAVID.md` Q-005 (now reframed) and Q-003 (cancellation page exists — read it).
