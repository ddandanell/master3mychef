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
    <p>Unlike hotel packages with rigid menus, a private chef adapts your catering to your vision. Balinese-inspired courses for the rehearsal dinner, a Mediterranean spread for the welcome lunch, a formal <a href="/fine-dining" class="text-[#7E6410] hover:underline font-medium">fine dining reception</a> — all possible in your villa kitchen, on your timeline. Every wedding is quoted individually with a detailed, itemised proposal.</p>`,
  },
  {
    id: 'event-types',
    type: 'features' as const,
    subtitle: 'Event Coverage',
    title: 'Catering for Every Wedding Event',
    features: [
      { icon: Calendar, title: 'Rehearsal Dinner', desc: 'Intimate 20–40 guests. 2–3 courses, plated or family-style. Sets the tone for the weekend.' },
      { icon: Users, title: 'Welcome Lunch / Brunch', desc: 'Casual 30–60 guests. Buffet or grazing stations: tropical fruit, pastries, local dishes.' },
      { icon: ChefHat, title: 'Main Reception', desc: 'Semi-formal 50–150 guests. 3–4 courses with cocktail hour, first course, main, dessert.' },
      { icon: CheckCircle, title: 'After-Party Food', desc: 'Late-night casual. Sliders, tacos, pizza bites, dessert boards. High-energy, minimal fuss.' },
    ],
  },
  {
    id: 'planning-timeline',
    type: 'content' as const,
    subtitle: 'Planning Timeline',
    title: 'When to Book and What to Decide',
    body: `<p><strong>6 Months Before:</strong> Define guest count and dietary needs. Reach out to chefs and agencies. Confirm villa kitchen capability with property owner (oven size, fridge space, power supply). Popular venues in <a href="/locations/uluwatu" class="text-[#7E6410] hover:underline font-medium">Uluwatu</a> and <a href="/locations/ubud" class="text-[#7E6410] hover:underline font-medium">Ubud</a> book out early during peak season.</p>
    <p><strong>4 Months Before:</strong> Select your chef or catering team. Schedule tasting menu or cuisine consultation. Confirm budget and service scope — which events need catering coverage, what's the service style for each. Our <a href="/events" class="text-[#7E6410] hover:underline font-medium">wedding and events service</a> covers all of this.</p>
    <p><strong>2 Months Before:</strong> Finalize guest count as RSVPs come in. Collect dietary accommodation form from all guests. Plan detailed menus with the chef. Confirm setup logistics, equipment needs, and any rentals required.</p>
    <p><strong>1 Month Before:</strong> Confirm final logistics with villa (kitchen access, parking, delivery windows). Review backup plans for weather and ingredient delays. Confirm service timeline and staff roles with chef.</p>
    <p><strong>1 Week Before:</strong> Final dietary verification. Confirm team arrival times and setup schedule. Sync with all other vendors (photographer, planner, florist) on catering timeline and coordination points.</p>`,
  },
  {
    id: 'service-styles',
    type: 'content' as const,
    subtitle: 'Service Options',
    title: 'Service Styles: Plated, Buffet, Cocktail',
    body: `<p><strong>Plated Service (Most Formal):</strong> Chef plates individually in kitchen; waitstaff serves each course. Requires 3–5 dedicated service staff for 50–100 guests. Ideal for the main reception when formality and photography matter. An expanded service team is scoped into your proposal.</p>
    <p><strong>Buffet Service (Flexible, Casual):</strong> All dishes arranged on stations; guests serve themselves or staff assists. Works well for welcome lunches, rehearsal dinners with a relaxed vibe, and large guest counts. Lower service cost, more flexible pacing.</p>
    <p><strong>Cocktail Reception (Social, Interactive):</strong> Passed appetizers, stationary food stations, open bar. No formal seating — guests mingle. Great for pre-ceremony cocktail hour or post-ceremony celebrations. Requires mobile service staff and constant replenishment, scoped into your proposal.</p>
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
    <p><strong>Equipment Often Rented:</strong> Additional ovens or warming boxes, industrial-size pots and pans, serving platters and chafing dishes, glassware and cutlery. Equipment rental is arranged per event and included as a line item in your proposal.</p>
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
    subtitle: 'Scoping & Quotes',
    title: 'How a Full Wedding Weekend Is Scoped',
    body: `<p><strong>Every wedding weekend is quoted individually.</strong> For a 60-guest villa wedding spanning a rehearsal dinner, welcome lunch, and main reception, your itemised proposal covers:</p>
    <ul style="margin: 1rem 0; padding-left: 2rem;">
      <li>Chef and kitchen team across all event days</li>
      <li>Service staff matched to each event's format and guest count</li>
      <li>Ingredients with premium sourcing and market shopping</li>
      <li>Equipment rental (ovens, serving ware, warmers)</li>
      <li>Delivery, setup, and full cleanup after every event</li>
    </ul>
    <p><strong>What shapes the quote:</strong> guest count, number of service days, menu complexity, staffing ratio, and bar service. You receive a transparent, line-by-line proposal before any deposit is requested.</p>
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
  { question: 'How much does wedding catering in Bali cost?', answer: 'Receptions typically IDR 1.5M–3M++ per person; intimate formats can start lower. See <a href="/events/weddings">wedding catering</a> and <a href="/bali-wedding-catering-packages">packages</a>.' },
  { question: 'Do you offer menu tastings for weddings?', answer: 'Yes — tastings are part of wedding planning for full receptions, scheduled before the day.' },
  { question: 'Can you handle banjar fees and villa permissions?', answer: 'We coordinate with villa managers on access, noise and banjar requirements and list third-party fees in the proposal.' },
  { question: 'Can guests bring their own alcohol?', answer: 'Yes — BYO with service staff, or full bar packages. <a href="/in-villa-service/bartenders">Bartenders</a>.' },
  { question: 'What is the rain plan for outdoor receptions?', answer: 'Every outdoor wedding has a covered fallback (marquee/indoor) confirmed before the day.' },
  { question: 'Do you cater rehearsal and welcome dinners?', answer: 'Yes — BBQ, family-style or plated formats via <a href="/events">events</a> and <a href="/catering">catering</a>.' },
  { question: 'What staffing ratio do you use?', answer: 'About one waiter per 8–10 seated guests, plus kitchen lead; cocktail hours add tray staff.' },
  { question: 'Can you work with our wedding planner?', answer: 'Yes — daily collaboration with planners and villa managers.' },
  { question: 'Do you offer halal-friendly wedding menus?', answer: 'Yes — pork-free and halal-sensitive lines when specified at planning.' },
  { question: 'How is this different from a private chef dinner?', answer: 'Weddings are multi-guest production. Couples dinners: <a href="/fine-dining/romantic-dinner">romantic dinner</a>.' },
  { question: 'Which areas host most villa weddings?', answer: 'Uluwatu, Canggu, Seminyak, Ubud, Nusa Dua and Jimbaran are common — we cover island-wide.' },
  { question: 'Can kids and elderly dietary needs be managed?', answer: 'Yes — labelled plates and briefed service for mixed multi-gen guest lists.' },
  { question: 'How much is a private chef in Bali per day?', answer: 'From IDR 1,000,000++/day for one meal (chef + assistant). Two meals IDR 1.8M++, three IDR 2.7M++. Weekly −10%, monthly −20%. <a href="/private-chef-bali">Private chef Bali</a>.' },
  { question: 'Are groceries included?', answer: 'Shopping work is included; food is billed at cost with receipts on daily hire.' },
  { question: 'What is Chef Rotation?', answer: 'On 7+ day bookings you can request different specialist chefs by day at no extra day-rate charge.' },
  { question: 'Can the chef cook in our villa kitchen?', answer: 'Yes — standard villa kitchens work; we bring specialised tools when needed.' },
  { question: 'Is this cheaper than restaurants for groups?', answer: 'For six+ people on two meals/day, the day rate split often beats mid-range restaurant totals plus taxis.' },
  { question: 'Can I request a specific chef?', answer: 'Yes for multi-day stays when available. Meet the team: <a href="/chefs">chefs</a>.' },
  { question: 'Fine dining vs daily chef?', answer: 'Fine dining is multi-course event pricing; daily chef is meal-count day rates. <a href="/fine-dining">Fine dining</a>.' },
  { question: 'Do you cover my area?', answer: 'Island-wide. <a href="/locations">Locations</a>.' },
]

const RELATED_PAGES = [
  { label: 'Browse Chefs', href: '/chefs', desc: 'Meet our event-experienced private chefs.' },
  { label: 'Event Planning Guide', href: '/blog/event-planning-bali', desc: 'Full logistics guide for weddings and celebrations.' },
  { label: 'Catering Menus', href: '/blog/bali-catering-menu', desc: 'Explore menu styles and cuisine options.' },
  { label: 'Corporate Events', href: '/corporate-case-studies', desc: 'Catering for corporate retreats and executive dinners.' },
  { label: 'Contact Us', href: '/contact', desc: 'Discuss your wedding dates and vision with our team.' },
]

export default function WeddingPrivateChefPage() {
  return (
    <PremiumPage
      slug="blog/wedding-private-chef-bali-planning-guide"
      title="Wedding Private Chef in Bali: Planning & Catering Guide"
      description="Plan your Bali villa wedding catering with a private chef. Menus, timelines, service styles, and planning guidance."
      seoTitle="Wedding Private Chef Bali | Villa Catering Planning Guide"
      seoDescription="Plan your Bali villa wedding catering with a private chef. Menus, timelines, service styles, and planning guidance."
      canonicalUrl="https://mychef.id/blog/wedding-private-chef-bali-planning-guide"
      h1="Wedding Private Chef in Bali: Planning & Logistics Guide"
      subtitle="Planning & Catering Guide for Your Villa Wedding"
      heroImage="/generated/mychef-blog-wedding-private-chef.webp"
      heroImageAlt="Private chef elegantly serving a multi-course wedding dinner at a luxury Bali villa"
      ogImage="https://mychef.id/generated/mychef-blog-wedding-private-chef.webp"
      keywords={['wedding private chef bali', 'bali villa wedding catering', 'private chef wedding bali']}
      highlights={['Wedding Events', 'Planning Timeline', 'Service Styles', 'Scoping & Quotes']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema('Wedding Private Chef Bali', 'https://mychef.id/blog/wedding-private-chef-bali-planning-guide', 'Blog', 'https://mychef.id/blog'),
        faqPageSchema(FAQS),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Wedding Private Chef in Bali: Planning & Catering Guide',
          description: 'Plan your Bali villa wedding catering with a private chef. Menus, timelines, service styles, and planning guidance.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF.id', logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' } },
          datePublished: '2025-05-01',
          dateModified: new Date().toISOString().split('T')[0],
          image: 'https://mychef.id/generated/mychef-blog-wedding-private-chef.webp',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://mychef.id/blog/wedding-private-chef-bali-planning-guide' },
          url: 'https://mychef.id/blog/wedding-private-chef-bali-planning-guide',
        },
      ]}
      ctaText="Plan Your Wedding Catering"
      ctaSubtext="Share your dates, guest count, and vision — we match you with the right chef."
    />
  )
}
