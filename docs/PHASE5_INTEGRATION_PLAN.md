# Phase 5 Content Integration Plan
**Status:** In Progress  
**Last Updated:** 2026-05-18  
**Author:** Claude CLI  

---

## ✅ STEP 1: Current Structure Analysis

### Current Blog Setup
- **Blog Index:** `/src/components/BlogIndexPage.tsx`
- **Individual Blog Pattern:** Uses `LandingPage` component with `kind="blog"`
- **Route Registration:** Via `BLOG_POST_SLUGS` array in `src/data/route-slugs.ts`
- **Currently Registered:** 7 blog posts (existing slugs)

### Routing Architecture
```
App.tsx:
  <Route path="/blog" element={<BlogIndexPage />} />
  {BLOG_POST_SLUGS.map((slug) => (
    <Route key={slug} path={`/${slug}`} element={<LandingPage kind="blog" />} />
  ))}
```

The `LandingPage` component with `kind="blog"` likely consumes blog data from a centralized structure.

### Current Blog Posts (7 existing)
1. `blog/private-chef-bali-cost-breakdown-2026`
2. `blog/best-bali-villas-private-chef-kitchen`
3. `blog/wedding-rehearsal-dinner-bali`
4. `blog/yoga-retreat-chef-bali-meal-planning`
5. `blog/private-chef-vs-restaurant-bali`
6. `blog/how-to-plan-villa-birthday-party-bali`
7. `blog/private-chef-romantic-dinners-bali`

---

## 📋 STEP 2: Phase 5 Content Mapping

### Phase 5 Blog Posts (10 total) – To Be Created

**Tier 1: High-Priority Content (Based on QWS & Search Volume)**

| # | Title (Draft) | Slug (To Register) | Word Count | Status | SEO Keywords |
|---|---|---|---|---|---|
| 1 | How to Hire a Private Chef in Bali | `blog/how-to-hire-private-chef-bali-guide` | 3,500-4,000 | Ready (outline exists) | hire private chef bali, how to hire private chef |
| 2 | Private Chef Cost Breakdown | `blog/private-chef-bali-cost-breakdown-detailed` | 3,000-3,500 | Ready (outline exists) | private chef cost bali, pricing |
| 3 | Chef Qualifications & Selection | `blog/chef-qualifications-bali-hiring` | 2,500-3,000 | Ready (outline exists) | chef qualifications, credentials |
| 4 | Private Chef Roles Explained | `blog/private-chef-roles-responsibilities` | 2,000-2,500 | Ready (outline exists) | private chef roles, job description |

**Tier 2: Supporting Content (Long-tail & Niche Keywords)**

| # | Title (Draft) | Slug (To Register) | Word Count | Status |
|---|---|---|---|---|
| 5 | Wedding Chef Planning Guide | `blog/wedding-private-chef-bali-guide` | 2,500-3,000 | Outline exists |
| 6 | Corporate Catering & Team Events | `blog/corporate-catering-bali-private-chef` | 2,000-2,500 | Outline exists |
| 7 | Romantic Dinner Hosting | `blog/romantic-dinner-private-chef-bali` | 2,000-2,500 | Outline exists |
| 8 | Dining by Location | `blog/private-chef-by-location-bali` | 2,500-3,000 | Outline exists |
| 9 | TBD (Fine Dining Trends) | `blog/fine-dining-trends-bali-2026` | 2,500-3,000 | To be written |
| 10 | TBD (Seasonal Ingredients) | `blog/seasonal-ingredients-bali-cooking` | 2,500-3,000 | To be written |

---

## 🏗️ STEP 3: Implementation Architecture

### Option A: Centralized Data Structure (Recommended)
**Pattern:** Similar to existing implementation  
**Location:** `src/data/blogContent.ts` or extend existing sitemap  
**Structure:**
```typescript
interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  hero: string
  content: string // Full HTML or markdown
  schema: object // FAQPage, BreadcrumbList, HowTo markup
  internalLinks: Array<{ text: string; href: string }>
  category: string
  keywords: string[]
}

export const BLOG_POSTS_PHASE5: BlogPost[] = [
  {
    id: 'hire-chef-bali',
    slug: 'blog/how-to-hire-private-chef-bali-guide',
    title: 'How to Hire a Private Chef in Bali',
    // ... rest of fields
  },
  // ... 9 more posts
]
```

**Advantages:**
- Reuses existing routing pattern
- LandingPage already handles `kind="blog"` rendering
- Single source of truth for content
- Easy to manage internally with version control
- Can migrate to headless CMS later

**Implementation Steps:**
1. Create `src/data/blogContent.ts` with BlogPost interface
2. Add 10 Phase 5 posts to `BLOG_POSTS_PHASE5` array
3. Update `route-slugs.ts` BLOG_POST_SLUGS with new slug names
4. Verify LandingPage consumes the data correctly
5. Register routes in App.tsx (already done via mapping)

### Option B: Individual Page Components
**Pattern:** Like `/fine-dining/romantic-dinner` → RomanticDinnerPage  
**Drawback:** Requires 10 new individual .tsx files, less maintainable

**We will NOT use this approach** — the centralized data structure is more maintainable.

---

## 🔗 STEP 4: Internal Linking Map

### Hub-and-Spoke Architecture

**3 Pillar Pages (Semantic Hubs):**
1. `/fine-dining` (LunaPage) – Links to Fine Dining content
2. `/events` (EventsMainPage) – Links to Event Planning content
3. `/in-villa-service` (InVillaServicePage) – Links to Service content

**10 Blog Posts (Sibling Content)**  
All blog posts should:
- Link to 2-3 related blog posts
- Link to 1 pillar page
- Link to 1-2 service pages (`/services/*`)
- Link to location pages (e.g., `/locations/seminyak`)

**Example internal links for Blog #1 (How to Hire):**
- → `/blog/chef-qualifications-bali-hiring` (related blog)
- → `/blog/private-chef-cost-breakdown-detailed` (related blog)
- → `/fine-dining` (pillar page)
- → `/services/private-chef-placement` (service)
- → `/locations/seminyak` (location)

---

## 📦 STEP 5: Verification Checklist

- [ ] All 10 blog post slugs added to `BLOG_POST_SLUGS` in `route-slugs.ts`
- [ ] Blog content data created in `src/data/blogContent.ts`
- [ ] Each post has: title, slug, excerpt, hero image, content, schema, internal links
- [ ] LandingPage component verified to consume blog data correctly
- [ ] Build passes (no TypeScript errors)
- [ ] Each blog post renders at correct URL (`/blog/slug`)
- [ ] Internal links are valid (no 404s)
- [ ] SEO schema (FAQPage, BreadcrumbList, HowTo) renders in HTML `<head>`
- [ ] Pillar pages updated with blog links
- [ ] Homepage updated with blog links

---

## 📅 Timeline

**Week 1 (May 19-25):**
- Day 1-2: Create blog content data structure + 4 tier-1 posts
- Day 3: Create 4 tier-2 posts
- Day 4: Create posts 9-10 + verification

**Week 2 (May 26-June 1):**
- Update pillar pages with blog links
- Internal link verification
- Full site testing + deployment

---

## 🚀 Next Actions (Ready to Execute)

1. **Read LandingPage component** to confirm how it consumes blog data
2. **Create `src/data/blogContent.ts`** with Phase 5 blog posts
3. **Update `src/data/route-slugs.ts`** with new BLOG_POST_SLUGS
4. **Verify build** passes
5. **Test browser** for rendering
6. **Report status** after Step 1 completion
