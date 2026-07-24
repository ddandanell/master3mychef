# myCHEF.id Website Image Investigation and Replacement Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Investigate myCHEF.id, audit every image on ten experience-related pages, design a consistent premium Bali hospitality visual system, and replace the images with realistic generated photographs via the OpenAI API.

**Architecture:** The work is split into investigation (website crawl, company profile, image inventory), planning (model selection, cost estimate, page strategies, prompt library), controlled test generation, bulk production, website replacement, and QA. API key is passed via environment variable only; no secrets are committed.

**Tech Stack:** TypeScript/Node scripts for crawling and inventory, Playwright or curl for page fetching, OpenAI API (`gpt-image-2` for production), Sharp/libvips for image optimization, Vite/React site for deployment.

## Global Constraints

- Use `gpt-image-2` for final production unless OpenAI docs show a better non-deprecated model.
- Medium quality for tests and secondary images; high quality only for approved heroes.
- Generate one test per visual category before bulk production.
- Never place website text inside generated photographs.
- Do not invent company history, uniforms, vehicles, logos, awards, or partnerships.
- Stop before bulk API generation and request human approval of plan + budget.
- All filenames lowercase with hyphens: `mychef-[service]-[scene]-bali-[orientation].webp`.
- Alt text must describe what is visibly present, no keyword stuffing.
- Work in a feature branch; do not push directly to `main`.

---

## Task 1: Phase 1 — Company Investigation

**Files:**
- Create: `scripts/image-audit/crawl-report.json`
- Create: `scripts/image-audit/company-profile.md`

**Interfaces:**
- Consumes: Live website HTML from `https://mychef.id/`
- Produces: Structured company profile and page text extracts

- [ ] **Step 1.1: Crawl all ten pages in scope**

Fetch HTML for:
- `/experiences`
- `/experiences/private-cocktail-party`
- `/experiences/sushi-masterclass`
- `/experiences/private-cooking-class`
- `/experiences/kids-birthday-chef-party`
- `/experiences/champagne-oyster-experience`
- `/experiences/romantic-proposal-dinner`
- `/complete-villa-experience`
- `/villa-event-packages`
- `/vip-transport-bali`

Command: `npx tsx scripts/image-audit/crawl-pages.ts`

- [ ] **Step 1.2: Extract company identity facts**

Document: name, services, coverage, target customers, occasions, pricing position, promises, team structure, brand vocabulary, visual patterns, claims that must not be misrepresented.

- [ ] **Step 1.3: Write executive investigation report (Output 1)**

Save to `scripts/image-audit/output-01-executive-report.md`.

---

## Task 2: Phase 2 — OpenAI Model and Pricing Research

**Files:**
- Create: `scripts/image-audit/model-report.md`
- Create: `scripts/image-audit/cost-estimate.json`

**Interfaces:**
- Consumes: Official OpenAI docs (via WebSearch/FetchURL)
- Produces: Selected model, quality levels, cost estimate

- [ ] **Step 2.1: Check official OpenAI API docs for image models**

Verify non-deprecated status and pricing for `gpt-image-2`, `gpt-image-1`, `gpt-image-1-mini`, `dall-e-3`, `dall-e-2`.

- [ ] **Step 2.2: Build cost estimate**

Calculate costs per image at medium/high quality, for 1 draft, 2 variations, and full production batch. Estimate total images needed (~40–60 based on page scope).

- [ ] **Step 2.3: Write model and pricing report (Output 2)**

Save to `scripts/image-audit/output-02-model-pricing-report.md`.

---

## Task 3: Phases 3–4 — Current Image Inventory and Page Strategies

**Files:**
- Create: `scripts/image-audit/image-inventory.json`
- Create: `scripts/image-audit/page-plans.json`

**Interfaces:**
- Consumes: Crawled HTML and company profile
- Produces: One record per existing image; one visual strategy per page

- [ ] **Step 3.1: Inventory every image on the ten pages**

For each image record: page URL, section, current path, dimensions, aspect ratio, alt text, surrounding heading/paragraph, decision (retain/replace/remove/consolidate/move).

- [ ] **Step 3.2: Detect duplicates across pages**

Flag images reused on unrelated pages.

- [ ] **Step 3.3: Define page-level visual strategies**

For each page: purpose, target customer, emotional objective, hero concept, supporting concepts, setting, time of day, required details, exclusions, aspect ratios.

- [ ] **Step 3.4: Write image inventory (Output 3) and page-by-page plan (Output 4)**

Save to `scripts/image-audit/output-03-image-inventory.json` and `scripts/image-audit/output-04-page-plans.json`.

---

## Task 4: Phases 5–6 — Prompt Library and SEO Metadata

**Files:**
- Create: `scripts/image-audit/prompt-library.json`
- Create: `scripts/image-audit/seo-metadata.json`

**Interfaces:**
- Consumes: Page plans and brand consistency sheet
- Produces: Generation prompts, filenames, alt text

- [ ] **Step 4.1: Build brand consistency sheet**

Wardrobe, grooming, posture, lighting families, color temperature, villa style, table styling, plating, glassware, focal lengths, guest variation, editing treatment.

- [ ] **Step 4.2: Write individual image specifications**

One record per replacement image with: ID, page, section, filename, alt text, dimensions, model, quality, prompt, negative constraints, estimated cost.

- [ ] **Step 4.3: Write prompt library (Output 5) and SEO metadata (Output 6)**

Save to `scripts/image-audit/output-05-prompt-library.json` and `scripts/image-audit/output-06-seo-metadata.json`.

---

## Task 5: Phases 7–9 — Test Generation and Evaluation

**Files:**
- Create: `scripts/image-audit/test-images/`
- Create: `scripts/image-audit/output-07-test-evaluation.md`

**Interfaces:**
- Consumes: Prompt library, OpenAI API key (env var)
- Produces: 5 test images and scorecards

- [ ] **Step 5.1: Generate 5 medium-quality test images**

Categories: cocktail party hero, sushi masterclass instructional, kids birthday people-focused, romantic proposal evening, VIP transport.

Command: `OPENAI_API_KEY=... npx tsx scripts/image-audit/generate-tests.ts`

- [ ] **Step 5.2: Score each test on 15 criteria (1–10)**

Realism, anatomy, facial realism, food accuracy, equipment accuracy, architectural realism, lighting realism, staff professionalism, Bali relevance, brand consistency, composition, crop safety, text-space suitability, emotional fit, absence of AI artefacts.

- [ ] **Step 5.3: Revise rejected prompts and regenerate**

Reject any image with overall <8, anatomy/food/equipment <9, brand fit <8, or malformed objects.

- [ ] **Step 5.4: Write test-generation evaluation (Output 7)**

Save to `scripts/image-audit/output-07-test-evaluation.md`.

**HARD GATE:** Stop here. Request human approval of visual plan and budget before bulk generation.

---

## Task 6: Phases 10–13 — Bulk Generation, Implementation, QA

**Files:**
- Modify: page components and image references in `src/`
- Create: optimized WebP images in `public/generated/`
- Create: `scripts/image-audit/output-08-generation-manifest.json`
- Create: `scripts/image-audit/output-09-implementation-report.md`
- Create: `scripts/image-audit/output-10-qa-report.md`

**Interfaces:**
- Consumes: Approved prompt library and SEO metadata
- Produces: Replaced website images with optimized files

- [ ] **Step 6.1: Generate final approved images**

Use `gpt-image-2` at approved quality. Save originals and create WebP derivatives.

- [ ] **Step 6.2: Optimize files**

Convert to WebP, preserve crops for desktop/mobile, strip metadata, record dimensions and file sizes.

- [ ] **Step 6.3: Write final generation manifest (Output 8)**

Save to `scripts/image-audit/output-08-generation-manifest.json`.

- [ ] **Step 6.4: Replace images in source code**

Update image references in page components. Preserve structure, text, links, structured data, responsive loading. Do not lazy-load hero images.

- [ ] **Step 6.5: Build and verify**

Run `npm run build`. Confirm all 258 routes render, no broken image paths, no layout shift.

- [ ] **Step 6.6: Write implementation report (Output 9) and QA report (Output 10)**

Save to `scripts/image-audit/output-09-implementation-report.md` and `scripts/image-audit/output-10-qa-report.md`.

---

## Self-Review Checklist

- [x] Spec coverage: all 13 phases from the user prompt are represented.
- [x] Placeholder scan: no TBD/TODO in executable steps.
- [x] Type consistency: JSON/TS structures are consistent across tasks.
- [x] Scope check: investigation and planning are separated from API spend; bulk generation is gated.
