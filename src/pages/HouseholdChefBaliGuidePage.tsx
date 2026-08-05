import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    subtitle: 'Household Chef Bali',
    title: 'Household Chef Bali: How to Hire a Personal Chef for Your Villa or Home',
    body: `<p>A household chef is a private culinary professional engaged on an ongoing basis — cooking for a household, villa, or residence on a recurring schedule. In Bali, this arrangement has become increasingly common among long-term residents, villa owners, expatriate families, and extended-stay guests who want the convenience of freshly prepared meals without the complexity of employing a full-time staff member.</p>
    <p>Unlike a <a href="/staffing" class="text-[#7E6410] hover:underline font-medium">live-in chef</a>, a household chef typically visits on a service schedule — a set number of days per week — rather than residing at the property. myCHEF's household chef service is designed for exactly this market. We place experienced, background-checked, English-speaking chefs with households across Bali's expat and villa communities on monthly rolling arrangements.</p>`,
  },
  {
    id: 'who-needs',
    type: 'content',
    subtitle: 'Who Is This For',
    title: 'Who Hires a Household Chef in Bali?',
    body: `<p><strong>Long-term villa residents:</strong> After the first week or two of eating out daily, residents typically want a more sustainable, healthier, and more cost-effective solution. A household chef provides home-cooked quality at a fraction of the cost of daily restaurant meals.</p>
    <p><strong>Expatriate families:</strong> Bali's growing expatriate community — particularly around Canggu, Seminyak, and Ubud — includes many families who prioritise wholesome, consistent home cooking. A household chef on a 3 to 5 day weekly schedule handles breakfast prep, school lunch boxes, family dinners, and batch-cooking.</p>
    <p><strong>Remote workers and digital nomads:</strong> Professionals working remotely from Bali for 1 to 6 months find that a household chef is one of the most impactful quality-of-life additions to their stay.</p>
    <p>Read more about Bali long-term private chef options in our <a href="/private-chef-bali" class="text-[#7E6410] hover:underline font-medium">guide for expats</a>.</p>`,
  },
  {
    id: 'service-structure',
    type: 'content',
    subtitle: 'How It Works',
    title: 'How a Household Chef Arrangement Works in Practice',
    body: `<p><strong>Scheduling:</strong> You select a service schedule — commonly 3 to 5 days per week. Most clients choose morning and early afternoon service (7am to 2pm) covering breakfast, lunch preparation, and advance prep for dinner.</p>
    <p><strong>Menu planning:</strong> At the start of each week, your chef shares a proposed menu based on your preferences, seasonal availability, and the household's schedule. You approve, adjust, or redirect as desired. The chef then handles all shopping, prep, cooking, and kitchen cleanup.</p>
    <p><strong>Grocery sourcing:</strong> Your chef sources ingredients from local markets and trusted suppliers. Groceries are charged at cost — myCHEF does not mark up ingredient prices. You receive a weekly grocery spend report.</p>`,
  },
  {
    id: 'costs',
    type: 'content',
    subtitle: 'Pricing',
    title: 'How Much Does a Household Chef Cost in Bali?',
    body: `<p>Every household chef booking includes one professional chef and one dedicated assistant. Groceries are charged separately at cost, supported by receipts. Our published rates:</p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.75rem;display:flex;flex-direction:column;gap:0.5rem;">
      <li><strong>Half day:</strong> Cook and serve one meal, plus one additional meal prepared for later (no service for the prepared meal) — IDR 1,000,000++ per day standard · IDR 900,000++ per day at the weekly rate (10% off) · IDR 800,000++ per day at the monthly rate (20% off).</li>
      <li><strong>Full day:</strong> Cook and serve two meals, plus one additional meal prepared for later — IDR 1,800,000++ per day standard · IDR 1,620,000++ per day weekly · IDR 1,440,000++ per day monthly.</li>
      <li><strong>Complete full day:</strong> Cook and serve breakfast, lunch and dinner — IDR 2,700,000++ per day standard · IDR 2,430,000++ per day weekly · IDR 2,160,000++ per day monthly.</li>
    </ul>
    <p style="margin-top:0.75rem;">A 3 days/week or 5 days/week schedule is billed at the monthly daily rate for the plan you choose. Our chefs are specialists across Japanese, Western, Indonesian and Balinese, Italian, French, Mediterranean, Chinese, international and healthy cuisine, with more available on request — most come from head or senior chef roles in five-star hotels and high-end restaurants and speak excellent English, and your chef is assigned to match your preferred cuisine. Prices are subject to a 10% service charge and 11% tax. For a full comparison see our <a href="/blog/private-chef-cost-bali" class="text-[#7E6410] hover:underline font-medium">Bali private chef cost guide</a>.</p>`,
  },
  {
    id: 'placement',
    type: 'content',
    subtitle: 'Managed vs Placement',
    title: 'Managed Chef vs. Direct Chef Placement — What Is the Difference?',
    body: `<p><strong>Managed household chef service:</strong> myCHEF manages the relationship — we assign a qualified chef, handle scheduling and substitutions, ensure consistent quality, and act as your point of contact. The chef is employed and insured through myCHEF. This is the recommended option for most clients.</p>
    <p><strong>Chef placement:</strong> myCHEF sources and vets a chef for your household. Once you choose a chef and confirm the placement, the working relationship is directly between you and the chef. Suitable for households who want to employ a dedicated private chef directly. See our full <a href="/staffing" class="text-[#7E6410] hover:underline font-medium">staffing and placement services</a> page.</p>`,
  },
  {
    id: 'cta',
    type: 'cta',
    subtitle: 'Get Started',
    title: 'Hire a Household Chef in Bali',
    body: 'Tell us about your household, schedule, and cooking preferences. We will match you with the right chef and get your arrangement started.',
    primaryAction: { label: 'Contact Our Team', href: '/contact' },
    secondaryAction: { label: 'View Staffing Services', href: '/staffing' },
  },
]

const FAQS = [
  { question: 'What staffing services do you offer in Bali?', answer: 'Day-rate in-villa staff and long-term placement of chefs, managers, butlers and household teams. <a href="/staffing">Staffing</a> · <a href="/in-villa-service">in-villa service</a>.' },
  { question: 'How fast is placement?', answer: 'Often around 48 hours for roles with ready candidates; specialist searches take longer.' },
  { question: 'Replacement guarantee?', answer: 'Placement programmes typically include a replacement window (e.g. 30 days) in writing.' },
  { question: 'Live-in vs live-out?', answer: 'Live-in resides on property; live-out works set shifts. We help you choose.' },
  { question: 'Background checks?', answer: 'Candidates are interviewed, reference-checked and supervised through myCHEF systems.' },
  { question: 'Can we hire staff without catering?', answer: 'Yes for event staff. <a href="/in-villa-service">In-villa service</a>.' },
  { question: 'Hotel and restaurant staffing?', answer: 'Yes — <a href="/staffing/hotels">hotel staffing</a> and B2B kitchen solutions.' },
  { question: 'Trial days?', answer: 'Paid trials before long-term placement are common.' },
  { question: 'English-speaking staff?', answer: 'Guest-facing roles are English-capable; we match language needs.' },
  { question: 'What info starts a search?', answer: 'Role, location, live-in/out, languages, salary band, start date.' },
  { question: 'Backup if staff is sick?', answer: 'Temporary cover can be arranged through the network.' },
  { question: 'How to start?', answer: 'WhatsApp the brief or <a href="/contact">contact</a>.' },
  { question: 'Is this guide free?', answer: 'Yes — educational content to help you plan. Booking is optional.' },
  { question: 'Can myCHEF deliver what this guide describes?', answer: 'Yes — start at <a href="/services">services</a> or <a href="/private-chef-bali">private chef</a>.' },
  { question: 'How do I get prices after reading?', answer: 'See <a href="/pricing">pricing</a> or WhatsApp a fixed quote request.' },
  { question: 'Does advice apply across Bali?', answer: 'Yes for major villa areas — confirm logistics for remote spots.' },
  { question: 'Allergies covered in real bookings?', answer: 'Yes — brief us at enquiry. <a href="/blog/food-allergies-dietary-requirements-private-chef-bali">Allergy guide</a>.' },
  { question: 'Daily chef vs one dinner?', answer: 'Multi-day stays → private chef day rates; celebration nights → fine dining or catering.' },
  { question: 'How to book after this guide?', answer: 'WhatsApp date, guests, area — <a href="/book">book</a>.' },
  { question: 'Related services?', answer: 'Browse <a href="/dining-styles">dining styles</a> and <a href="/events">events</a>.' },
]

export default function HouseholdChefBaliGuidePage() {
  return (
    <PremiumPage
      slug="blog/household-chef-bali-hiring-guide"
      title="Household Chef Bali: How to Hire a Personal Chef for Your Villa or Home"
      description="Hire a household chef in Bali for recurring weekly cooking. Monthly arrangements, daily rates, managed service and direct placement options for expats."
      h1="Household Chef Bali — How to Hire a Personal Chef for Your Villa or Home"
      subtitle="The complete guide to household chef arrangements for Bali expats, villa residents, and long-stay guests"
      heroImage="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=80"
      heroImageAlt="Household chef preparing a family meal in a Bali villa kitchen"
      ogImage="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=80"
      keywords={['household chef bali', 'personal chef bali', 'bali household chef hire', 'private chef bali monthly', 'expat chef bali']}
      highlights={['Monthly Arrangements', 'Groceries at Cost', 'All Bali Areas', 'From IDR 1,000,000++/day']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={[
        { label: 'Live-In Chef Bali Guide', href: '/staffing', desc: 'Hiring a live-in private chef for your Bali villa or home.' },
        { label: 'Private Chef for Expats', href: '/private-chef-bali', desc: 'Long-term private chef options for Bali expats and residents.' },
        { label: 'Staffing Services', href: '/staffing', desc: 'Direct placement and managed staffing for Bali households.' },
        { label: 'Pricing Guide', href: '/pricing', desc: 'Full breakdown of private chef and staffing costs in Bali.' },
      ]}
      extraJsonLd={[
        breadcrumbSchema('Household Chef Bali Guide', 'https://mychef.id/blog/household-chef-bali-hiring-guide', 'Blog', 'https://mychef.id/blog'),
        faqPageSchema(FAQS.map(f => ({ question: f.question, answer: f.answer }))),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Household Chef Bali: How to Hire a Personal Chef for Your Villa or Home',
          description: 'Hire a household chef in Bali for recurring weekly cooking. Monthly arrangements, daily rates, managed service and placement options.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF.id', logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' } },
          datePublished: '2026-06-30',
          dateModified: '2026-06-30',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://mychef.id/blog/household-chef-bali-hiring-guide' },
          url: 'https://mychef.id/blog/household-chef-bali-hiring-guide',
        },
      ]}
      ctaText="Enquire About a Household Chef"
      ctaSubtext="We match you with the right chef and schedule for your household."
    />
  )
}
