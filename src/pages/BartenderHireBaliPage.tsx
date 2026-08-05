import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const sections: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    title: 'Hire a Bartender in Bali for Your Villa Event',
    body: `Whether you're hosting a poolside birthday party, a villa wedding, or an intimate cocktail dinner, a professional bartender transforms your event. myCHEF connects you with experienced, uniformed bar staff across Bali — Seminyak, Canggu, Uluwatu, Ubud, and beyond.

Our bartenders are trained in classic cocktails, tropical signatures, and Indonesian-inspired drinks. They arrive with everything they need — equipment, garnishes, and energy — so you can focus on your guests. No bar setup headaches, no improvised service. Just consistently great drinks and polished presentation from start to finish.

Hiring through myCHEF means your bartender has been vetted, briefed on your event, and is covered by our same-day replacement guarantee. We don't leave you short-staffed on event day.`,
  },
  {
    id: 'bartender-types',
    type: 'content',
    title: 'Types of Bar Staff We Provide',
    body: `**Standard Bartender** — Professional bar service for villa parties, birthday events, and casual celebrations. Covers classic cocktails, mocktails, beer, wine, and spirits. Ideal for 10–60 guests.

**Mixologist / Craft Bartender** — Elevated service for weddings, corporate events, and luxury villa dinners. Specialises in signature cocktail creation, theatrical presentation, and premium spirits education. Available with bespoke cocktail menu design.

**Mobile Bar Package** — Bartender + equipment hire bundled together. We bring the portable bar, glassware, ice, and full setup. You supply the alcohol (or we can source for an additional fee). Popular for events where the villa has no fixed bar.

**Event Bar Team** — For larger events (60+ guests), we staff a full bar team: lead bartender, bar back, and runner. Ensures no wait times and seamless service throughout the evening.

**Wine & Champagne Service** — Elegant service for intimate dinners, proposals, and formal events. Sommelier-trained staff handle pours, temperatures, and pairing recommendations.`,
  },
  {
    id: 'what-included',
    type: 'content',
    title: 'What\'s Included When You Hire Through myCHEF',
    body: `Every bartender booking through myCHEF includes:

**Pre-event briefing** — Your bartender is briefed on guest count, event type, drink preferences, timings, and any special requirements (dietary, religious, allergen-free). No surprises on the day.

**Uniform and professional presentation** — All bar staff arrive in clean uniform appropriate for your event style: smart-casual for villa parties, formal for weddings and corporate events.

**Equipment coordination** — We confirm what equipment you have on-site and arrange any missing items (shakers, jiggers, ice bins, speed pourers) before your event.

**Same-day replacement guarantee** — If your scheduled bartender cannot attend due to illness or emergency, we provide a replacement at no additional cost. This guarantee is unique to myCHEF in Bali.

**Cleanup handover** — Bar staff clean the bar area, dispose of bottles, and leave the space in order before departing.`,
  },
  {
    id: 'pricing',
    type: 'content',
    title: 'Bartender Hire Rates in Bali',
    body: `Bartender rates in Bali vary based on service level, event duration, and whether equipment is included. Typical ranges as of 2025–2026:

**Standard Bartender**
- 4-hour minimum: from IDR 650,000
- Full day (8 hours): from IDR 1,100,000
- Overtime: IDR 120,000–150,000/hour

**Mixologist / Craft Bartender**
- 4-hour minimum: from IDR 950,000
- Full day (8 hours): from IDR 1,600,000

**Mobile Bar Package (staff + equipment)**
- Starting from IDR 2,500,000 for up to 6 hours (excludes alcohol)

**Event Bar Team (3 staff)**
- From IDR 3,200,000 for a 6-hour event

All rates include travel within South Bali (Seminyak, Canggu, Uluwatu, Nusa Dua, Jimbaran, Sanur). Surcharges apply for Ubud, Amed, Lovina, and outer islands.

myCHEF requires a 50% deposit to confirm your booking, with the balance due the day before your event.`,
  },
  {
    id: 'when-to-book',
    type: 'content',
    title: 'When to Book Your Bartender',
    body: `Bali's event calendar peaks during June–September (dry season) and December–January (festive season). During these periods, experienced bar staff book out weeks in advance — especially for weekends.

**Recommended booking windows:**
- Casual villa parties: 3–7 days in advance
- Birthday events and celebrations: 1–2 weeks
- Weddings and corporate events: 4–8 weeks
- Peak season (June–Sept, Dec–Jan): add 2+ weeks to every category

Last-minute bookings (under 48 hours) are sometimes available, but selection is limited. For critical events — weddings, corporate, proposals — never leave bar staffing to chance.

Booking via myCHEF gives you one point of contact for bar staff, food service, and kitchen crew. Many clients combine a bartender with our waiter hire and private chef services for seamlessly staffed villa events.`,
  },
  {
    id: 'cta',
    type: 'content',
    title: 'Book a Bartender for Your Bali Event',
    body: `Tell us your event date, guest count, and drink preferences, and we'll match you with the right bar staff within a few hours. myCHEF covers all major Bali areas and offers same-day replacement protection on every booking.`,
  },
]

const faqs = [
  { question: 'How much do waiters and bartenders cost in Bali?', answer: 'Waiters from about IDR 250K/hour; bartenders from IDR 350K/hour (3-hour minimums). <a href="/in-villa-service">In-villa service</a>.' },
  { question: 'Minimum booking?', answer: 'Hourly roles usually 3-hour minimum; waiter bookings often start at two waiters.' },
  { question: 'Can we hire staff without food?', answer: 'Yes — self-catered or third-party caterer support is normal.' },
  { question: 'What do staff wear?', answer: 'Professional uniforms matched to event formality.' },
  { question: 'Alcohol included?', answer: 'No — BYO or sourced at cost; hire covers the professional.' },
  { question: 'Waiter ratio?', answer: 'About one waiter per 10 guests for formal service.' },
  { question: 'Butler service?', answer: 'Yes — <a href="/in-villa-service/butlers">butlers</a>.' },
  { question: 'Mixology and signature cocktails?', answer: 'Yes — <a href="/in-villa-service/mixology">mixology</a>.' },
  { question: 'Areas covered?', answer: 'Island-wide. <a href="/locations">Locations</a>.' },
  { question: 'Combine with private chef?', answer: 'Yes — most common luxury setup.' },
  { question: 'Vetted staff?', answer: 'Employed/supervised teams with replacement-or-refund cover.' },
  { question: 'How to book staff?', answer: 'WhatsApp date, area, headcount and roles needed.' },
  { question: 'How do I book this with myCHEF in Bali?', answer: 'WhatsApp date, guest count, villa area and your goal. Or use <a href="/book">book</a> / <a href="/quote">quote</a>.' },
  { question: 'Where can I see prices?', answer: 'Published tables on <a href="/pricing">pricing</a> and <a href="/private-chef-bali">private chef</a> day rates.' },
  { question: 'Is service available island-wide?', answer: 'Yes across major villa regions. <a href="/locations">Locations</a>.' },
  { question: 'Can you handle dietary requirements?', answer: 'Yes when briefed early — no extra charge for standard adaptations.' },
  { question: 'What is included vs extra?', answer: 'Quotes list inclusions; premium ingredients, alcohol and extra staff are itemised when needed.' },
  { question: 'Deposit and cancellation?', answer: 'Usually 50% deposit; refund tiers on <a href="/cancellation">cancellation</a>.' },
  { question: 'How fast is a proposal?', answer: 'Often within 2–24 hours of a complete brief.' },
  { question: 'Can this combine with other services?', answer: 'Yes — chef, catering, staff and transport can stack in one plan.' },
]

const relatedPages = [
  { label: 'Event Staff Bali', href: '/in-villa-service', desc: 'Waiters, kitchen crew and full event teams' },
  { label: 'Villa Party Catering', href: '/events/villa-parties', desc: 'Food and drinks for villa celebrations' },
  { label: 'Private Chef Bali', href: '/private-chef-bali', desc: 'In-villa chef for dinner and events' },
  { label: 'Grazing Tables Bali', href: '/catering/grazing-tables', desc: 'Grazing boards and charcuterie for events' },
  { label: 'Bachelor Party Bali', href: '/blog/bachelor-party-bali-private-chef', desc: 'Full-service catering for buck\'s parties' },
  { label: 'Large Group Catering', href: '/group-villa-dinner-packages-bali', desc: 'Catering solutions for 30+ guests' },
]

export default function BartenderHireBaliPage() {
  return (
    <PremiumPage
      slug="blog/bartender-hire-bali"
      title="Bartender Hire Bali — Private Villa Bar Staff for Events & Parties"
      seoTitle="Bartender Hire Bali — Professional Bar Staff for Villa Events"
      description="Hire a professional bartender in Bali for your villa party, wedding, or corporate event. Vetted bar staff, mobile bar packages, and same-day replacement."
      seoDescription="Hire vetted bartenders in Bali for villa parties, weddings & corporate events. Standard, mixologist, and mobile bar packages. Same-day replacement."
      h1="Bartender Hire Bali — Professional Bar Staff for Villa Parties & Events"
      subtitle="Vetted bartenders and mixologists for villa parties, weddings, corporate events, and private dinners across Bali."
      heroImage="/images/blog/bartender-hire-bali.jpg"
      heroImageAlt="Professional bartender in uniform mixing cocktails at an outdoor villa bar in Bali"
      ogImage="/images/blog/bartender-hire-bali.jpg"
      canonicalUrl="https://mychef.id/blog/bartender-hire-bali"
      keywords={[
        'bartender hire bali',
        'hire bartender bali',
        'private bartender bali',
        'cocktail bartender hire bali',
        'mobile bar bali',
        'bar staff hire bali',
        'event bartender bali',
        'mixologist hire bali',
        'villa bartender bali',
        'bartender for party bali',
      ]}
      highlights={['Same-Day Replacement', 'Mobile Bar Packages', 'Vetted & Uniformed', 'From IDR 650K']}
      sections={sections}
      faqs={faqs}
      relatedPages={relatedPages}
      ctaText="Book a Bartender"
      ctaSubtext="Tell us your event details and we'll confirm bar staff within a few hours."
      extraJsonLd={[
        breadcrumbSchema('Bartender Hire Bali', 'https://mychef.id/blog/bartender-hire-bali', 'Blog', 'https://mychef.id/journal'),
        faqPageSchema(faqs),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Bartender Hire Bali — Professional Bar Staff for Villa Events & Parties',
          description:
            'Hire vetted bartenders in Bali for villa parties, weddings, corporate events. Standard bartenders, mixologists, mobile bar packages with same-day replacement guarantee.',
          url: 'https://mychef.id/blog/bartender-hire-bali',
          datePublished: '2026-06-30',
          dateModified: '2026-06-30',
          author: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          image: 'https://mychef.id/images/blog/bartender-hire-bali.jpg',
        },
      ]}
    />
  )
}
