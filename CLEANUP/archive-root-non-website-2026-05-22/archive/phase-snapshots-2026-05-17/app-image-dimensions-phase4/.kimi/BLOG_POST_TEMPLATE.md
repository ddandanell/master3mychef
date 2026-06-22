# myCHEF Blog Post Template

Use this template for every new article added to `src/data/sitemap.ts`.

## 1. Article Brief
- **Primary keyword:**
- **Secondary keywords (2-4):**
- **Search intent:** Transactional / Commercial investigation / Informational
- **Target audience:** Family villa stay / Couple / Wedding host / Retreat organiser / Corporate organiser
- **Primary CTA:** `/pricing` / `/calculator` / `/quote`
- **Supporting internal links:**
- **Planned publish date:**
- **Target word count:** 800-1200 words

## 2. Title Guidelines
- Aim for **50-65 characters** when possible.
- Put the **primary keyword near the front**.
- Promise a concrete outcome: cost clarity, planning help, comparison, checklist, or real process insight.
- Avoid vague luxury phrasing.
- Good patterns:
  - `Private Chef Bali Cost Guide for Family Villa Stays`
  - `Wedding Catering Bali: 7 Things to Confirm Before Booking`
  - `Ubud vs Uluwatu for Private Dining in Bali`

## 3. Metadata Rules
- **Slug:** lowercase, hyphenated, starts with `blog/`
- **Meta description:** 140-160 characters, concrete, keyword-aware, no filler
- **Date:** use ISO format `YYYY-MM-DD`
- **Opening paragraph:** mention the primary keyword once and establish the article's practical angle fast

## 4. Brand Tone Rules
**Reference:** `/Users/openclaw/Downloads/MYCHEF . MASTER/mychef/plan.md` lines 58-82.

### Core Tone Rules
1. Short sentences. Concrete words. Active voice.
2. Show luxury through specifics, not adjectives.
3. Lead with guest outcome (`you`), not process (`we`).
4. Warm + confident + Bali-villa-aware.
5. No vague luxury clichés such as `curated journey`, `elevated`, or `immerse yourself`.

### Service-Line Tone Guidance
- **Fine Dining:** intimate, cinematic, refined; emphasize craft, intimacy, menu detail, memory value.
- **Catering:** clear, practical, stress-free; emphasize convenience, value clarity, and family/group fit.
- **Events:** confident, full-service, operational; emphasize reliability, handling everything, and package clarity.
- **In-Villa Service / Staffing:** professional, trust-heavy, operationally specific.

### Trust Rules
- Use verifiable claims only.
- Prioritize proof: named people, real photos, concrete stats, real testimonials.

## 5. Recommended Structure
1. **H1:** keyword-led promise
2. **Intro:** 80-120 words, practical context, mention Bali use case
3. **H2 #1:** answer the main search question directly
4. **H2 #2:** cost / logistics / planning detail
5. **H2 #3:** comparison, checklist, or timeline
6. **H2 #4:** myCHEF angle or operational proof
7. **Close:** short summary + CTA

## 6. SEO Checklist
- [ ] Primary keyword in H1
- [ ] Primary keyword in intro
- [ ] Primary keyword in one H2
- [ ] Meta title and description are unique
- [ ] Article length is 800-1200 words
- [ ] At least 3 internal links included
- [ ] At least 1 conversion link included
- [ ] Includes Bali-specific details, not generic travel copy
- [ ] Includes one proof detail (guest count, service flow, pricing example, sourcing detail, area-specific note)
- [ ] CTA matches the article intent

## 7. Internal Linking Strategy
Every post should include:
- **1 money page link** early in the article
- **1 conversion page link** mid-article or near the close
- **1 related post link** to a closely matched guide
- **1 location or supporting service link** when relevant

### Suggested Link Pools
- **Villa Dining:** `/pricing`, `/calculator`, `/fine-dining/private-dinner`, `/catering/villa-catering`
- **Events:** `/events/weddings`, `/corporate-events`, `/quote`, `/retreats`, `/catering/bbq-catering`
- **Bali Living:** `/locations`, `/locations/seminyak`, `/locations/canggu`, `/locations/ubud`, `/locations/uluwatu`
- **Chef Stories:** `/about`, `/chefs`, `/why-mychef`, `/fine-dining`

## 8. Draft Block for `BLOG_POSTS`
```ts
{
  slug: 'blog/your-post-slug',
  title: 'Your SEO Title Here',
  description: 'Search-friendly summary that clearly explains the angle and includes the main keyword naturally.',
  date: '2026-06-05',
  content: `
    <h2>Section heading</h2>
    <p>Short, concrete paragraph with one internal link to <a href="/pricing" class="text-[#C5A028] hover:underline font-medium">pricing</a>.</p>
  `,
}
```

## 9. Final Pre-Publish Check
- Read the draft out loud. If it sounds generic, soften the adjectives and add specifics.
- Confirm the article helps someone make a booking decision or plan a real Bali moment.
- Run `npx tsc -b` and `npm run build` before pushing.
