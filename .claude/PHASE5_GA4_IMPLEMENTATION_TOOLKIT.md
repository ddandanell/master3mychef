# Phase 5: GA4 Implementation Toolkit
**Date:** May 17, 2026  
**Purpose:** Ready-to-deploy GA4 tracking code, event definitions, and validation procedures  
**Timeline:** Phase 1 (May 25–June 1), Phase 2 (June 1–June 20)

---

## 🔧 Phase 1: Basic Setup (May 25–June 1)

### Step 1: Verify GA4 Property

**Access:**
1. Google Analytics → Admin → Property Settings (left sidebar)
2. Confirm property is linked to **mychef.id**
3. Note **Measurement ID** (format: `G-XXXXXXXXXX`)

**If property doesn't exist:**
1. Create new property named "mychef.id"
2. Select **Web** platform
3. Specify URL: `https://mychef.id`
4. Accept Google Analytics terms
5. Copy Measurement ID for next step

### Step 2: Install Measurement Code

Add to `src/app/layout.tsx` (or equivalent root layout in Next.js):

```tsx
import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* GA4 Measurement Code */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

**Replace `G-XXXXXXXXXX` with your actual Measurement ID.**

### Step 3: Link Google Search Console

1. GA4 Admin → Data Streams → Web
2. Scroll to "Google Search Console"
3. Click **Link Google Search Console**
4. Select **mychef.id** property
5. Confirm link (may take 24 hours to sync)

**Verification:** Check GA4 > Acquisition > Google Search Console to see GSC data flowing in.

---

## 📊 Phase 1: Custom Events (Copy-Paste Ready)

### Event 1: CTA Click

**Purpose:** Track button clicks (Book, Inquiry, Service requests)

**HTML Setup:**
```html
<!-- Add data-event attributes to CTA buttons -->
<button data-event="cta_click" data-cta-type="book-button">
  Book a Chef
</button>
```

**React Event Handler:**
```tsx
'use client'

export function CTAButton({ label, ctaType }: { label: string; ctaType: string }) {
  const handleClick = () => {
    if (window.gtag) {
      window.gtag('event', 'cta_click', {
        cta_type: ctaType,
        page_location: window.location.pathname,
      });
    }
  };

  return (
    <button onClick={handleClick}>
      {label}
    </button>
  );
}
```

**GA4 Event Name:** `cta_click`  
**Parameters:**
- `cta_type`: "book-button" | "inquiry-button" | "service-request"
- `page_location`: Current page path

---

### Event 2: Blog Read

**Purpose:** Track blog engagement (scroll >50% on blog pages)

**Implementation (add to blog page component):**

```tsx
'use client'

import { useEffect } from 'react'

export function BlogScrollTracker({ blogName }: { blogName: string }) {
  useEffect(() => {
    let hasTracked = false;

    const handleScroll = () => {
      if (hasTracked) return;

      const scrollPercentage =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      if (scrollPercentage > 50) {
        if (window.gtag) {
          window.gtag('event', 'blog_read', {
            blog_name: blogName,
            scroll_depth: Math.round(scrollPercentage),
            page_location: window.location.pathname,
          });
        }
        hasTracked = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [blogName]);

  return null; // Non-rendering tracking component
}
```

**Usage in BlogPage.tsx:**
```tsx
export default function BlogPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <BlogScrollTracker blogName={params.slug} />
      {/* Rest of blog content */}
    </>
  );
}
```

**GA4 Event Name:** `blog_read`  
**Parameters:**
- `blog_name`: "how-to-hire-private-chef" | "private-chef-cost-breakdown" | etc.
- `scroll_depth`: Percentage scrolled (50–100)
- `page_location`: Blog URL path

---

### Event 3: Page Scroll

**Purpose:** Track engagement on all pages (scroll >75%)

**Implementation (global, add to root layout):**

```tsx
'use client'

import { useEffect } from 'react'

export function PageScrollTracker() {
  useEffect(() => {
    let hasTracked = false;

    const handleScroll = () => {
      if (hasTracked) return;

      const scrollPercentage =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      if (scrollPercentage > 75) {
        if (window.gtag) {
          window.gtag('event', 'page_scroll', {
            page_type: detectPageType(window.location.pathname),
            scroll_depth: Math.round(scrollPercentage),
            page_location: window.location.pathname,
          });
        }
        hasTracked = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
}

function detectPageType(pathname: string): string {
  if (pathname.includes('/blog')) return 'blog';
  if (pathname.includes('/fine-dining') || pathname.includes('/catering') || pathname.includes('/staffing')) return 'service';
  if (pathname === '/') return 'homepage';
  return 'other';
}
```

**Add to root layout:**
```tsx
import { PageScrollTracker } from '@/components/tracking/PageScrollTracker'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <PageScrollTracker />
        {children}
      </body>
    </html>
  );
}
```

**GA4 Event Name:** `page_scroll`  
**Parameters:**
- `page_type`: "blog" | "service" | "homepage" | "other"
- `scroll_depth`: 75–100
- `page_location`: Current URL path

---

### Event 4: Inquiry Submit

**Purpose:** Track contact form submissions (critical conversion)

**Implementation (form component):**

```tsx
'use client'

import { useState } from 'react'

export function InquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      // Submit form logic here
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Track successful submission
        if (window.gtag) {
          window.gtag('event', 'inquiry_submit', {
            inquiry_type: formData.get('service_type') || 'general',
            page_location: window.location.pathname,
            conversion_value: 1, // Indicates successful submission
          });
        }
        // Show success message, reset form, etc.
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <select name="service_type">
        <option value="private-chef">Private Chef Hire</option>
        <option value="catering">Catering Event</option>
        <option value="staffing">Staff Hire</option>
        <option value="fine-dining">Fine Dining Experience</option>
      </select>
      {/* ... other fields ... */}
      <button type="submit" disabled={isSubmitting}>
        Submit Inquiry
      </button>
    </form>
  );
}
```

**GA4 Event Name:** `inquiry_submit`  
**Parameters:**
- `inquiry_type`: "private-chef" | "catering" | "staffing" | "fine-dining" | "general"
- `page_location`: Source page URL
- `conversion_value`: 1 (indicates successful submission)

---

## 🏷️ Phase 1: Custom Dimensions

**Add to GA4 before June 1:**

### Dimension 1: Blog Name
**Purpose:** Segment blog performance data

**Setup:**
1. GA4 Admin → Custom definitions → Custom dimensions
2. Click **Create custom dimension**
3. **Dimension name:** `blog_name`
4. **Scope:** Event
5. **Description:** "Name of the blog post (slug)"
6. **User property:** No
7. Save

**Usage in code:** (already included in Event 2 above)
```tsx
gtag('event', 'blog_read', {
  blog_name: blogName,
  // ...
});
```

---

### Dimension 2: Page Type
**Purpose:** Segment by content category (blog, service, homepage)

**Setup:**
1. GA4 Admin → Custom definitions → Custom dimensions
2. Click **Create custom dimension**
3. **Dimension name:** `page_type`
4. **Scope:** Event
5. **Description:** "Content type: blog, service, homepage, etc."
6. Save

**Usage in code:** (already included in Event 3 above)
```tsx
gtag('event', 'page_scroll', {
  page_type: detectPageType(pathname),
  // ...
});
```

---

### Dimension 3: Keyword Target
**Purpose:** Track keyword-level performance

**Setup:**
1. GA4 Admin → Custom definitions → Custom dimensions
2. Click **Create custom dimension**
3. **Dimension name:** `keyword_target`
4. **Scope:** Event
5. **Description:** "Primary target keyword for the content"
6. Save

**Usage (add to blog pages):**
```tsx
// In blog metadata or frontmatter
const blogPost = {
  id: 'how-to-hire-private-chef',
  title: 'How to Hire a Private Chef in Bali',
  keywordTarget: 'how to hire private chef bali',
  // ...
};

// In event tracking
gtag('event', 'blog_read', {
  blog_name: blogPost.id,
  keyword_target: blogPost.keywordTarget,
  // ...
});
```

---

## ✅ Phase 1 Verification Checklist (By June 1)

**Measurement Code:**
- [ ] GA4 script installed in root layout
- [ ] Measurement ID correctly configured (G-XXXXXXXXXX)
- [ ] Tag fires on page load (test with GA4 DebugView)

**Custom Events:**
- [ ] Event 1 (cta_click) firing on button clicks
- [ ] Event 2 (blog_read) firing on blog pages at >50% scroll
- [ ] Event 3 (page_scroll) firing on all pages at >75% scroll
- [ ] Event 4 (inquiry_submit) firing on form submission

**Custom Dimensions:**
- [ ] Dimension 1 (blog_name) created and receiving values
- [ ] Dimension 2 (page_type) created and receiving values
- [ ] Dimension 3 (keyword_target) created and receiving values

**Data Flow:**
- [ ] GA4 real-time report shows incoming events
- [ ] GSC integration synced (data visible in GA4 Acquisition tab)
- [ ] At least 10 events of each type recorded

---

## 📺 Phase 2: Dashboard Setup (June 1–June 20)

### Dashboard 1: Blog Performance (6 cards)

**Purpose:** Monitor individual blog metrics

**Cards:**
1. **Impressions by Blog**
   - Metric: Page views
   - Dimension: blog_name
   - Filter: page_type = "blog"
   - Date range: Last 7 days

2. **Click-Through Rate (Blog)**
   - Metric: Events (blog_read) / Page views
   - Dimension: blog_name
   - Filter: page_type = "blog"

3. **Scroll Depth (Blog)**
   - Metric: Scroll depth (average)
   - Dimension: blog_name
   - Filter: event_name = "blog_read"

4. **CTA Clicks from Blogs**
   - Metric: Event count (cta_click)
   - Dimension: blog_name
   - Filter: cta_type = any

5. **Avg Session Duration (Blog)**
   - Metric: Session duration
   - Dimension: blog_name
   - Filter: page_type = "blog"

6. **Bounce Rate (Blog)**
   - Metric: Bounce rate
   - Dimension: blog_name
   - Filter: page_type = "blog"

---

### Dashboard 2: Organic Keywords (6 cards)

**Purpose:** Track keyword ranking and organic traffic

**Cards:**
1. **Top Keywords by Position**
   - Metric: Position (avg, ASC)
   - Dimension: Query
   - Source: Google Search Console data
   - Filter: Position < 30

2. **Impressions vs. Clicks**
   - Metric: Impressions, Clicks
   - Dimension: Query
   - Source: GSC
   - Limit: Top 10

3. **CTR Trend**
   - Metric: Click-through rate
   - Dimension: Date
   - Filter: Position 1–20
   - Chart: Line (7-day trend)

4. **Position Improvement**
   - Metric: Position (monthly comparison)
   - Dimension: Query
   - Filter: Position has improved
   - Sort: Improvement DESC

5. **High-Impression Low-Position Keywords**
   - Metric: Impressions
   - Dimension: Query
   - Filter: Impressions > 100 AND Position > 10
   - Action items: These are keywords to optimize

6. **New Keywords in Top 50**
   - Metric: Query
   - Dimension: Date
   - Filter: Position between 1–50, first seen this month

---

### Dashboard 3: Page Performance (6 cards)

**Purpose:** Monitor all page types (blogs, services, homepage)

**Cards:**
1. **Traffic by Page Type**
   - Metric: Session count
   - Dimension: page_type
   - Chart: Pie or bar

2. **Conversion by Page Type**
   - Metric: inquiry_submit event count
   - Dimension: page_type
   - Calculate rate: Events / Sessions

3. **Core Web Vitals**
   - Metric: LCP, INP, CLS
   - Dimension: Page path
   - Filter: page_type = "blog" OR "service"
   - Target: LCP < 2.5s, INP < 200ms, CLS < 0.1

4. **Avg Session Duration by Page Type**
   - Metric: Average session duration
   - Dimension: page_type
   - Sort: Duration DESC

5. **Top Pages by Engagement**
   - Metric: Engagement rate
   - Dimension: Page path
   - Filter: Session count > 10
   - Limit: Top 10

6. **Scroll Depth Distribution**
   - Metric: Count
   - Dimension: scroll_depth (binned: <25%, 25–50%, 50–75%, >75%)
   - Chart: Stacked bar

---

## 🔍 Phase 2 Validation Procedure

**Timeline:** Week of June 20

**Step 1: Dashboard Accuracy Check**
- [ ] Each dashboard displays data (non-zero values)
- [ ] Dimensions are properly segmenting (not lumped as "not set")
- [ ] Date ranges are configurable
- [ ] Filters work as expected

**Step 2: Data Quality Review**
- [ ] At least 100 events of each type recorded
- [ ] No obvious data anomalies or spikes
- [ ] Conversion funnels showing inquiry_submit events
- [ ] GSC data synced and visible in Acquisition tab

**Step 3: Performance Baseline**
- [ ] Record Core Web Vitals baseline (June 20)
- [ ] Document average scroll depths
- [ ] Note top performing pages
- [ ] Establish monitoring targets

---

## 📋 Implementation Order

**Week 1 (May 25–31):**
- Install GA4 measurement code
- Verify code fires correctly (GA4 DebugView)
- Test Event 1 (cta_click)

**Week 2 (June 1–7):**
- Implement Events 2–4 (blog_read, page_scroll, inquiry_submit)
- Create custom dimensions 1–3
- Validate all events firing
- Link Google Search Console

**Week 3–4 (June 8–21):**
- Build Dashboard 1 (Blog Performance)
- Build Dashboard 2 (Organic Keywords)
- Build Dashboard 3 (Page Performance)
- Validate dashboard accuracy

**Week of June 20:**
- Final validation checklist
- Record baseline metrics
- Begin weekly monitoring

---

## 🧪 Testing Events Locally (DebugView)

**Enable GA4 DebugView:**
1. In browser console, run:
   ```javascript
   gtag('config', 'G-XXXXXXXXXX', { 'debug_mode': true })
   ```

2. GA4 → DebugView (real-time tab)
3. Trigger events (click buttons, scroll, submit forms)
4. Watch events appear in real-time

**Expected output:**
```
Event: cta_click
- cta_type: "book-button"
- page_location: "/blog/how-to-hire-private-chef"

Event: blog_read
- blog_name: "how-to-hire-private-chef"
- scroll_depth: 87
- page_location: "/blog/how-to-hire-private-chef"
```

---

**Status:** Toolkit complete, ready for implementation starting May 25.

