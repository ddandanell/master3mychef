import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { Calendar, Users, ChefHat, CheckCircle } from 'lucide-react'

const SECTIONS = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Wedding Catering in Bali',
    title: 'Why a Private Chef Makes Your Bali Villa Wedding',
    body: `<p>A villa wedding in Bali offers intimacy, privacy, and beauty that hotels and event venues can't match. But catering logistics — kitchen access, group dietary needs, service timing, and staff coordination — require professional management. A private chef handles all of it, allowing you to focus entirely on celebrating.</p>
    <p>Unlike hotel packages with rigid menus, a private chef adapts your catering to your vision. Balinese-inspired courses for the rehearsal dinner, a Mediterranean spread for the welcome lunch, a formal plated reception — all possible in your villa kitchen, on your timeline.</p>`,
  },
  {
    id: 'event-types',
    type: 'features' as const,
    subtitle: 'Event Coverage',
    title: 'Catering for Every Wedding Event',
    features: [
      { icon: Calendar, title: 'Rehearsal Dinner', desc: 'Intimate 20–40 guests. 2–3 courses, plated or family-style. IDR 650K–960K/person. Sets the tone for the weekend.' },
      { icon: Users, title: 'Welcome Lunch / Brunch', desc: 'Casual 30–60 guests. Buffet or grazing stations: tropical fruit, pastries, local dishes. IDR 500K–720K/person.' },
      { icon: ChefHat, title: 'Main Reception', desc: 'Semi-formal 50–150 guests. 3–4 courses with cocktail hour, first course, main, dessert. IDR 1M–2.4M/person.' },
      { icon: CheckCircle, title: 'After-Party Food', desc: 'Late-night casual. Sliders, tacos, pizza bites, dessert boards. IDR 250K–400K/person. High-energy, minimal fuss.' },
    ],
  },
  {
    id: 'planning-timeline',
    type: 'content' as const,
    subtitle: 'Planning Timeline',
    title: 'When to Book and What to Decide',
    body: `<p><strong>6 Months Before:</strong> Define guest count and dietary needs. Reach out to chefs and agencies. Confirm villa kitchen capability with property owner (oven size, fridge space, power supply).</p>
    <p><strong>4 Months Before:</strong> Select your chef or catering team. Schedule tasting menu or cuisine consultation. Confirm budget and service scope — which events need catering coverage, what's the service style for each.</p>
    <p><strong>2 Months Before:</strong> Finalize guest count as RSVPs come in. Collect dietary accommodation form from all guests. Plan detailed menus with the chef. Confirm setup logistics, equipment needs, and any rentals required.</p>
    <p><strong>1 Month Before:</strong> Confirm final logistics with villa (kitchen access, parking, delivery windows). Review backup plans for weather and ingredient delays. Confirm service timeline and staff roles with chef.</p>
    <p><strong>1 Week Before:</strong> Final dietary verification. Confirm team arrival times and setup schedule. Sync with all other vendors (photographer, planner, florist) on catering timeline and coordination points.</p>`,
  },
  {
    id: 'service-styles',
    type: 'content' as const,
    subtitle: 'Service Options',
    title: 'Service Styles: Plated, Buffet, Cocktail',
    body: `<p><strong>Plated Service (Most Formal):</strong> Chef plates individually in kitchen; waitstaff serves each course. Requires 3–5 dedicated service staff for 50–100 guests. Ideal for the main reception when formality and photography matter. Cost: add IDR 1.5M–3M for service staff team.</p>
    <p><strong>Buffet Service (Flexible, Casual):</strong> All dishes arranged on stations; guests serve themselves or staff assists. Works well for welcome lunches, rehearsal dinners with a relaxed vibe, and large guest counts. Lower service cost, more flexible pacing.</p>
    <p><strong>Cocktail Reception (Social, Interactive):</strong> Passed appetizers, stationary food stations, open bar. No formal seating — guests mingle. Great for pre-ceremony cocktail hour or post-ceremony celebrations. Requires mobile service staff and constant replenishment. Add IDR 2.5M–5M for passing staff.</p>
    <p><strong>Hybrid Approach (Recommended):</strong> Cocktail canapés on arrival → plated first course → buffet-style main → plated dessert. Balances formality with guest interaction. Works for 40–100 guests with 3–4 service staff.</p>`,
  },
  {
    id: 'kitchen-requirements',
    type: 'content' as const,
    subtitle: 'Villa Assessment',
    title: 'Kitchen Requirements & Equipment',
    body: `<p><strong>Must-Have Villa Kitchen Features:</strong></p>
    <ul style="margin: 1rem 0; padding-left: 2rem;">
      <li>Large oven and stovetop (minimum 4 burners for 50+ guests)</li>
      <li>Spacious refrigerator and freezer for multi-day ingredient storage</li>
      <li>Adequate prep counter space and power supply</li>
      <li>Strong water pressure and sink access near prep area</li>
    </ul>
    <p><strong>Equipment Often Rented:</strong> Additional ovens or warming boxes, industrial-size pots and pans, serving platters and chafing dishes, glassware and cutlery. Equipment rental typically IDR 5M–8M for a full weekend wedding.</p>
    <p><strong>Villa Assessment Checklist:</strong> Before finalizing menus, your chef should visit (or receive detailed photos of) the kitchen to assess capacity, flag limitations, and plan around them. A skilled catering chef adapts — but surprises on the day hurt execution.</p>`,
  },
  {
    id: 'dietary',
    type: 'content' as const,
    subtitle: 'Guest Accommodations',
    title: 'Managing Dietary Needs for Wedding Guests',
    body: `<p>Collect dietary needs from all guests 2 months before. Expect to accommodate 10–20% of guests with some restriction:</p>
    <ul style="margin: 1rem 0; padding-left: 2rem;">
      <li>Vegetarian, vegan, pescatarian — handled without compromise to main menu quality</li>
      <li>Food allergies (nuts, shellfish, soy, gluten, dairy) — handled with cross-contamination protocols</li>
      <li>Religious or cultural restrictions (halal, kosher) — requires advance sourcing coordination</li>
      <li>Medical diets (gluten-free, lactose-free, low-sodium) — confirm with chef 6+ weeks ahead</li>
    </ul>
    <p>A skilled private chef handles 10–15 dietary variations simultaneously without compromising the main course experience. Confirm your chef's approach to allergies before booking — it's a non-negotiable vetting question for a wedding.</p>`,
  },
  {
    id: 'budget',
    type: 'content' as const,
    subtitle: 'Budget Breakdown',
    title: 'Full Wedding Weekend Cost: 60-Guest Example',
    body: `<p><strong>60-Guest Villa Wedding (Rehearsal Dinner + Welcome Lunch + Main Reception):</strong></p>
    <ul style="margin: 1rem 0; padding-left: 2rem;">
      <li>Head Chef (3 days, ~8 hours/day): IDR 16M–19M</li>
      <li>Sous Chef (3 days): IDR 4.8M–6.4M</li>
      <li>Service Staff (4 servers, 2 event days): IDR 6.5M–9.6M</li>
      <li>Ingredients (3 meals × 60 guests, premium sourcing): IDR 40M–56M</li>
      <li>Equipment Rental (ovens, serving ware, warmers): IDR 5M–8M</li>
      <li>Delivery & Setup: IDR 1.6M–3.2M</li>
    </ul>
    <p><strong>Total: IDR 73M–104M</strong> (~IDR 1.2M–1.7M per person for full weekend catering)</p>
    <p><strong>Cost-Saving Options:</strong> Book during low season (Nov–Mar). Prioritize buffet over plated for rehearsal/lunch. Use local Balinese ingredients over imported. Combine lunch and cocktail hour into one continuous service. Book same chef team for all events to reduce coordination cost.</p>`,
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Start Planning',
    title: 'Build Your Bali Wedding Catering Plan',
    body: 'Share your dates, guest count, and vision with our team. We match you with the right chef for your venue, style, and budget.',
    primaryAction: { label: 'Contact Our Team', href: '/contact' },
    secondaryAction: { label: 'Browse Chefs', href: '/chefs' },
  },
]

const FAQS = [
  {
    question: 'How far in advance should I book a private chef for a Bali wedding?',
    answer: '6 months is ideal for premium dates (June–September, December). 4 months is acceptable. Less than 3 months limits your chef selection and forces simpler menus due to ingredient sourcing constraints.',
  },
  {
    question: 'Can a private chef handle both the rehearsal dinner and the main reception?',
    answer: 'Yes — and we recommend it. Using the same chef team across all wedding events creates consistency, reduces coordination effort, and often comes with a multi-event discount. The chef already knows your preferences and kitchen by day two.',
  },
  {
    question: 'What happens if my villa kitchen is too small for a large guest count?',
    answer: 'A professional catering chef will assess your kitchen in advance and bring or rent supplemental equipment (portable ovens, warming stations, prep surfaces). Some dishes can be partially prepared off-site and finished at the villa. Your chef manages this — your job is to flag the kitchen limitations early.',
  },
  {
    question: 'How do you handle allergies across a large mixed guest list?',
    answer: 'Collect dietary forms 6–8 weeks before the event. Share the full list with your chef. A skilled catering chef separates allergen-free preparations, labels dishes clearly, and briefs service staff on which plates are allergen-specific. Confirm this protocol during the hiring process.',
  },
  {
    question: 'What is included in the chef fee vs. what do I pay separately?',
    answer: 'Chef fee covers time, expertise, menu planning, and kitchen management. Ingredient costs are typically a separate budget line (chef shops and provides receipts, or you provide a grocery allowance). Equipment rental, service staff, and beverage management may be included or separate — confirm all inclusions in writing before signing.',
  },
  {
    question: 'Can a private chef do a tasting menu before the wedding to confirm the food?',
    answer: 'Yes, and we strongly recommend it for main reception menus. A tasting session (typically 2–3 months before the event) lets you approve each course, adjust flavors, and finalize wine pairings. Tasting sessions usually cost IDR 1.5M–3M for 2 people and are worth every rupiah for a wedding.',
  },
]

const RELATED_PAGES = [
  { label: 'Browse Chefs', href: '/chefs', desc: 'Meet our event-experienced private chefs.' },
  { label: 'Event Planning Guide', href: '/blog/event-planning-bali', desc: 'Full logistics guide for weddings and celebrations.' },
  { label: 'Catering Menus', href: '/blog/bali-catering-menu', desc: 'Explore menu styles and cuisine options.' },
  { label: 'Corporate Events', href: '/blog/corporate-events-catering-bali', desc: 'Catering for corporate retreats and executive dinners.' },
  { label: 'Contact Us', href: '/contact', desc: 'Discuss your wedding dates and vision with our team.' },
]

export default function WeddingPrivateChefPage() {
  return (
    <PremiumPage
      slug="blog/wedding-private-chef-bali-planning-guide"
      title="Wedding Private Chef in Bali: Planning & Catering Guide"
      description="Plan your Bali villa wedding catering with a private chef. Menus, timelines, service styles, and full budget breakdown in IDR."
      seoTitle="Wedding Private Chef Bali | Villa Catering Planning Guide"
      seoDescription="Plan your Bali villa wedding catering with a private chef. Menus, timelines, service styles, and full budget breakdown in IDR."
      canonicalUrl="https://mychef.id/blog/wedding-private-chef-bali-planning-guide"
      h1="Wedding Private Chef in Bali"
      subtitle="Planning & Catering Guide for Your Villa Wedding"
      heroImage="/generated/mychef-blog-wedding-private-chef.webp"
      heroImageAlt="Private chef elegantly serving a multi-course wedding dinner at a luxury Bali villa"
      ogImage="https://mychef.id/generated/mychef-blog-wedding-private-chef.webp"
      keywords={['wedding private chef bali', 'bali villa wedding catering', 'private chef wedding bali']}
      highlights={['Wedding Events', 'Planning Timeline', 'Service Styles', 'Budget Guide']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema('Wedding Private Chef Bali', 'https://mychef.id/blog/wedding-private-chef-bali-planning-guide', 'Blog', 'https://mychef.id/blog'),
        faqPageSchema(FAQS),
      ]}
      ctaText="Plan Your Wedding Catering"
      ctaSubtext="Share your dates, guest count, and vision — we match you with the right chef."
    />
  )
}
