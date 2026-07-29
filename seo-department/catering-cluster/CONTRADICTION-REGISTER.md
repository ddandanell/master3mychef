# Catering Cluster — Contradiction Register

**Scope:** the 11 `/catering*` URLs · **Compiled:** 2026-07-28 · **Owner:** Compliance & Risk (24)
**Method:** direct source inspection of the 11 page components, `src/data/page-meta.ts` and `public/sitemap.xml`.

> **Nothing in this register has been corrected.** Per the source hierarchy, conflicts are logged and escalated — never silently resolved. Rewriting does not begin until items marked CRITICAL and HIGH have a management ruling.

**Source hierarchy used:** 1) written management instruction → 2) approved pricing reference → 3) approved business policies → 4) current website → 5) older content → 6) external assumption.
**Problem:** items 1–3 have not been supplied. Every conflict below therefore sits at level 4 (website vs website), which is precisely why none can be resolved internally.

---

## CRITICAL

### C-01 — Tax and service notation applied inconsistently across the cluster
The `++` suffix (11% government tax + 10% service charge = **+21%**) is applied erratically. The same headline number means two different final prices depending on which page the guest reads.

| Page | Prices shown **with** `++` | Prices shown **without** |
|---|---:|---:|
| `/catering` (hub) | 4 | **46** |
| `/catering/bbq-catering` | 0 | 14 |
| `/catering/buffet` | 22 | 19 |
| `/catering/plated-catering` | 21 | 14 |
| `/catering/drop-off-catering` | 0 | 5 |
| `/catering/babi-guling` | 0 | 10 |
| `/catering/villa-catering` | 6 | 1 |
| `/catering/corporate-catering` | 0 | 2 |
| `/catering/floating-breakfast` | 0 | 15 |

**Worked example.** The hub advertises the 3-course plated menu as `IDR 800,000/person`. The plated page prices the same tier with `++` notation. A guest comparing the two pages sees an unexplained **21% increase** — IDR 800,000 vs IDR 968,000 effective.

**Impact:** price-transparency failure at the exact moment of decision; predictable quote disputes; erodes the trust the cluster is meant to build. Commercially the most damaging item found.

**Cannot be fixed by the department** — it requires a ruling on whether displayed prices are net or gross, applied once, everywhere.

---

## HIGH

### H-01 — Five pages carry two competing meta descriptions
`src/data/page-meta.ts` is documented as the single typed source of truth, but five pages also pass an inline `description` prop with **different text**:

| Page | Conflict |
|---|---|
| `/catering/plated-catering` | page-meta omits price; inline states "from IDR 800K++/person" |
| `/catering/villa-catering` | page-meta says "groups of 10-150"; inline leads on lunch/dinner pricing |
| `/catering/corporate-catering` | page-meta leads on "Tax invoices (NPWP)"; inline leads on "formal written proposals" |
| `/catering/retreat-catering` | page-meta says "plant-forward, nutrient-dense… Vegan, raw & gluten-free specialists"; inline says "one-day workshops, wellness programs" |
| `/catering/floating-breakfast` | **page-meta does not disclose the add-on-only rule; inline does** |

**Impact:** whichever renders last wins, and it is currently ambiguous which that is. The centralised metadata layer is not actually authoritative, which undermines duplicate-title protection sitewide.

**H-01a — Floating breakfast is the commercially serious instance.** The page states in five separate places that the service is **add-on only, not sold standalone**. Its `page-meta` description omits this entirely and reads as a standalone offer. Guests arriving from search on that snippet will enquire for something that cannot be booked.

*Note: the brief asked whether floating breakfast has contradictory standalone rules. **On-page, it does not** — the add-on rule is stated consistently, and the "2 guests / 4 guests" figures are not a conflict (couple package vs group brunch). The contradiction is metadata vs page, not within the page.*

### H-02 — Minimum-spend logic conflicts with specialist minimums — **RESOLVED 2026-07-30**

**The premise of this entry was wrong.** It was written against a misread figure, and re-verification against the codebase on 2026-07-30 found no universal minimum-spend rule anywhere in the site.

Two specific corrections to what this entry previously claimed:

- **The hub does not state "Minimum spend IDR 5,000,000".** `src/pages/CateringMainPage.tsx` contains no minimum-spend claim. Its only "minimum" is *"Minimum 5 guests"* (line 432, repeated line 1201) — a guest count. The `IDR 5,000,000` on that page is line 131, a **package tier price** ("Medium — 25 to 30 guests. Extended sides and larger portions."). A tier price was read as a floor.
- **`/catering/plated-catering` does not carry a 5,000,000 spend minimum.** `CateringPlatedPage.tsx:598` states the opposite, explicitly: *"Plated service starts at five guests — there is no minimum spend."*

Verified state of every catering entry point, read from source 2026-07-30:

| Page | Actual minimum (verified) | Type |
|---|---|---|
| `/catering` (hub) | 5 guests | guest count |
| `/catering/babi-guling` | 6 guests, min total IDR 3,900,000 | guest count + total |
| `/catering/bbq-catering` | 10 guests | guest count — *register previously said 6* |
| `/catering/plated-catering` | 5 guests, **no** minimum spend | guest count |
| `/catering/villa-catering` | 8 guests | guest count |
| `/catering/buffet` | 30 standard; 20–29 at higher per-person rates | guest count |
| `/catering/drop-off-catering` | 4 (family) / 8 (dinner party, grazing) | guest count |
| `/catering/grazing-tables` | 5 guests, individually quoted | guest count — *register previously said 6* |
| `/catering/corporate-catering` | IDR 15,000,000 (`siteFacts.corporateMinSpend`) | **spend — the only one on the site** |
| `/catering/retreat-catering` | "Minimum booking applies" | **undefined — still open, see Q7** |

**Management ruling (2026-07-30):** the babi guling IDR 3,900,000 figure is correct; the supposed 5,000,000 hub minimum was not a real rule. No page change was required — the cluster already prices on per-service guest-count minimums, with corporate the single spend-based exception.

**Standing correction for this register:** entries here must cite file and line. Three of this entry's nine rows were wrong because it was written from recollection rather than from source.

### H-03 — "Michelin" appears on four catering pages without evidence on file
Present on `/catering`, `/catering/bbq-catering`, `/catering/plated-catering`, `/catering/drop-off-catering`. Ties to standing risk **R-003**. Michelin-related credentials are specific and externally checkable; they need a documented basis (which chef, which restaurant, which years) or softer wording.

### H-04 — NPWP tax-registration claim stated seven times on `/catering/corporate-catering`
"We are NPWP-registered and issue formal tax invoices with itemised breakdowns." This is a factual regulatory claim aimed at exactly the audience most likely to verify it. It is very likely true — but the department has no documentation. **Supply the NPWP number for the file and this closes immediately.**

---

## MEDIUM

### M-01 — Thirteen catering-intent pages live outside the cluster
These compete with the cluster for the same commercial intents and are all in the sitemap:

| Competing URL | Collides with |
|---|---|
| `/villa-bbq-catering-bali` | `/catering/bbq-catering` |
| `/seafood-bbq-catering-bali` | `/catering/bbq-catering` |
| `/bbq-grill` | `/catering/bbq-catering` |
| `/journal/bbq-catering-cost-breakdown-bali` | `/catering/bbq-catering` |
| `/corporate-retreat-catering-bali` | **both** corporate **and** retreat |
| `/blog/drop-off-catering-bali` | `/catering/drop-off-catering` |
| `/blog/bali-catering-menu` | `/catering` hub |
| `/blog/corporate-events-catering-bali-team-dining` | `/catering/corporate-catering` |
| `/bali-wedding-catering-packages` · `/wedding-catering-indonesia` · `/journal/bali-wedding-catering-complete-guide` · `/journal/villa-wedding-catering-logistics-bali` | wedding catering intent (4 pages, one intent) |

**BBQ has five URLs chasing one commercial intent.** This is the largest cannibalisation exposure in the cluster and cannot be resolved without Search Console query-per-URL data. **Do not delete or redirect any of these on assumption** — several may hold links or rankings.

### M-02 — Sourcing claims requiring supplier evidence
- `/catering/bbq-catering` page-meta: "**organic** sides" (the on-page copy says "satay and sides" — the word organic appears only in metadata)
- `/catering/retreat-catering`: "produce comes from local markets and **organic farms**"
- `/catering/villa-catering`: "we source **halal-certified** proteins on request"

All three are supplier-dependent claims. They are plausible and reasonably worded — none claims myCHEF itself holds a certification — but each needs a named supplier basis.

### M-03 — Retreat page compositional claim
"Meals are colourful, **nutrient-dense**, and free from hidden sugars or heavy processed oils."

*Assessment: the retreat page's detox language is markedly better than a keyword scan suggests.* Twelve "detox" mentions are almost all **operational** — supporting a guest's existing cleanse protocol, labelling items, preventing off-protocol service, plus "digital detox" used as a tourism term. It does not claim health outcomes. Only the sentence above makes a compositional assertion, and it is defensible if the kitchen standard is documented.

---

## LOW

### L-01 — Guest-count figures used as pricing tiers, not achievement claims
`450+ guests` (babi guling), `250+ guests` (hub) appear in capacity/pricing tables. **Not** claims of events delivered. No action beyond confirming the upper capacity is genuinely deliverable.

### L-02 — Hub title blurs category ownership
`Catering Bali | Villa & Event Catering by Private Chefs` — "by Private Chefs" imports private-chef intent into the page that must own "catering Bali". Minor, addressed at rewrite.

---

## Verified as NOT problems

Recorded so these are not re-raised, and to keep the register honest:

- **No `aggregateRating` or review schema markup anywhere in the cluster.** The 5-star testimonials on ten pages are display-only. This is compliant with Google's self-serving review policy.
- **Allergen wording is correct.** `/catering/corporate-catering` states: "We cannot guarantee a completely allergen-free environment, so guests with serious allergies should provide full written details." That is the right disclaimer, not a liability.
- **Floating breakfast on-page rules are internally consistent** (see H-01a — the fault is in metadata).
- **Halal wording is correctly scoped** — sourcing halal-certified proteins, not claiming to be a halal-certified kitchen.

---

## Blocking questions for management

| # | Question | Blocks |
|---|---|---|
| 1 | Are displayed catering prices **net or `++`**? One rule, applied everywhere. | C-01 — blocks all rewriting |
| 2 | ~~Is IDR 5,000,000 a **universal** minimum spend, or plated-only?~~ **ANSWERED 2026-07-30: neither — it is a 25–30 guest package tier price on the hub, not a minimum. No universal spend floor exists. See H-02.** | H-02 — closed |
| 3 | Is floating breakfast **add-on only**? (On-page says yes; metadata implies standalone.) | H-01a |
| 4 | What is the documented basis for **"Michelin"**? | H-03 |
| 5 | Please supply the **NPWP number** for the file. | H-04 |
| 6 | Which suppliers substantiate **organic** and **halal-certified**? | M-02 |
| 7 | What is the retreat minimum, in numbers? `/catering/retreat-catering` says only "Minimum booking applies" — the one catering entry point with no number attached. | **Still open** (was filed under H-02; H-02 is now closed, this question is not) |

**Questions 1 and 3 block the rewrite entirely.** Rewriting price-bearing pages before the pricing rule is fixed would replicate the contradiction into new copy. (Question 2 was answered on 2026-07-30 and no longer blocks anything.)
