import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    subtitle: 'Household Chef Bali',
    title: 'Household Chef Bali: How to Hire a Personal Chef for Your Villa or Home',
    body: `<p>A household chef is a private culinary professional engaged on an ongoing basis — cooking for a household, villa, or residence on a recurring schedule. In Bali, this arrangement has become increasingly common among long-term residents, villa owners, expatriate families, and extended-stay guests who want the convenience of freshly prepared meals without the complexity of employing a full-time staff member.</p>
    <p>Unlike a <a href="/blog/live-in-chef-bali-hiring-guide" class="text-[#C5A028] hover:underline font-medium">live-in chef</a>, a household chef typically visits on a service schedule — a set number of days per week — rather than residing at the property. myCHEF\'s household chef service is designed for exactly this market. We place experienced, background-checked, English-speaking chefs with households across Bali\'s expat and villa communities on monthly rolling arrangements.</p>`,
  },
  {
    id: 'who-needs',
    type: 'content',
    subtitle: 'Who Is This For',
    title: 'Who Hires a Household Chef in Bali?',
    body: `<p><strong>Long-term villa residents:</strong> After the first week or two of eating out daily, residents typically want a more sustainable, healthier, and more cost-effective solution. A household chef provides home-cooked quality at a fraction of the cost of daily restaurant meals.</p>
    <p><strong>Expatriate families:</strong> Bali\'s growing expatriate community — particularly around Canggu, Seminyak, and Ubud — includes many families who prioritise wholesome, consistent home cooking. A household chef on a 3 to 5 day weekly schedule handles breakfast prep, school lunch boxes, family dinners, and batch-cooking.</p>
    <p><strong>Remote workers and digital nomads:</strong> Professionals working remotely from Bali for 1 to 6 months find that a household chef is one of the most impactful quality-of-life additions to their stay.</p>
    <p>Read more about Bali long-term private chef options in our <a href="/blog/private-chef-bali-expats" class="text-[#C5A028] hover:underline font-medium">guide for expats</a>.</p>`,
  },
  {
    id: 'service-structure',
    type: 'content',
    subtitle: 'How It Works',
    title: 'How a Household Chef Arrangement Works in Practice',
    body: `<p><strong>Scheduling:</strong> You select a service schedule — commonly 3 to 5 days per week. Most clients choose morning and early afternoon service (7am to 2pm) covering breakfast, lunch preparation, and advance prep for dinner.</p>
    <p><strong>Menu planning:</strong> At the start of each week, your chef shares a proposed menu based on your preferences, seasonal availability, and the household\'s schedule. You approve, adjust, or redirect as desired. The chef then handles all shopping, prep, cooking, and kitchen cleanup.</p>
    <p><strong>Grocery sourcing:</strong> Your chef sources ingredients from local markets and trusted suppliers. Groceries are charged at cost — myCHEF does not mark up ingredient prices. You receive a weekly grocery spend report.</p>`,
  },
  {
    id: 'costs',
    type: 'content',
    subtitle: 'Pricing',
    title: 'How Much Does a Household Chef Cost in Bali?',
    body: `<p>Household chef pricing is structured around a monthly service fee:</p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.75rem;display:flex;flex-direction:column;gap:0.5rem;">
      <li><strong>3 days/week arrangement:</strong> From IDR 7,000,000 to 10,000,000 per month (chef fee only, excluding groceries).</li>
      <li><strong>5 days/week arrangement:</strong> From IDR 11,000,000 to 15,000,000 per month (chef fee only, excluding groceries).</li>
      <li><strong>Daily rate (ad hoc):</strong> IDR 650,000 to 1,000,000 per service day.</li>
    </ul>
    <p style="margin-top:0.75rem;">Grocery costs add IDR 150,000 to 400,000 per person per day. For a full comparison see our <a href="/blog/private-chef-cost-bali" class="text-[#C5A028] hover:underline font-medium">Bali private chef cost guide</a>.</p>`,
  },
  {
    id: 'placement',
    type: 'content',
    subtitle: 'Managed vs Placement',
    title: 'Managed Chef vs. Direct Chef Placement — What Is the Difference?',
    body: `<p><strong>Managed household chef service:</strong> myCHEF manages the relationship — we assign a qualified chef, handle scheduling and substitutions, ensure consistent quality, and act as your point of contact. The chef is employed and insured through myCHEF. This is the recommended option for most clients.</p>
    <p><strong>Chef placement:</strong> myCHEF sources and vets a chef for your household. Once you choose a chef and confirm the placement, the working relationship is directly between you and the chef. Suitable for households who want to employ a dedicated private chef directly. See our full <a href="/staffing" class="text-[#C5A028] hover:underline font-medium">staffing and placement services</a> page.</p>`,
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
  {
    question: "What is the minimum engagement period for a household chef arrangement in Bali?",
    answer: "The minimum engagement for a managed household chef service is one calendar month. For ad hoc day-rate bookings, there is no minimum.",
  },
  {
    question: "Can a household chef accommodate multiple dietary requirements within the same household?",
    answer: "Yes. If your household includes a vegan, a meat-eater, a gluten-intolerant family member, and children with separate preferences, your chef plans menus that accommodate everyone simultaneously.",
  },
  {
    question: "What happens if my household chef is sick or unavailable?",
    answer: "Under the managed household chef service, myCHEF provides a qualified substitute chef for any days your regular chef is unavailable.",
  },
  {
    question: "Do household chef arrangements include grocery shopping?",
    answer: "Yes. Your chef shops at local markets and selected suppliers and charges ingredients at cost. You receive an itemised weekly grocery report.",
  },
  {
    question: "Is a household chef available outside of Canggu and Seminyak?",
    answer: "Yes. We place household chefs across Bali including Ubud, Uluwatu, Nusa Dua, Sanur, Jimbaran, Berawa, Pererenan, and the wider expat belt. We also operate in Jakarta.",
  },
]

export default function HouseholdChefBaliGuidePage() {
  return (
    <PremiumPage
      slug="blog/household-chef-bali-hiring-guide"
      title="Household Chef Bali: How to Hire a Personal Chef for Your Villa or Home"
      description="Hire a household chef in Bali for recurring weekly cooking. Monthly arrangements, daily rates, managed service and direct placement options for expats, villa residents, and long-stay guests."
      h1="Household Chef Bali — How to Hire a Personal Chef for Your Villa or Home"
      subtitle="The complete guide to household chef arrangements for Bali expats, villa residents, and long-stay guests"
      heroImage="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=80"
      heroImageAlt="Household chef preparing a family meal in a Bali villa kitchen"
      ogImage="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=80"
      keywords={['household chef bali', 'personal chef bali', 'bali household chef hire', 'private chef bali monthly', 'expat chef bali']}
      highlights={['Monthly Arrangements', 'Groceries at Cost', 'All Bali Areas', 'From IDR 7M/month']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={[
        { label: 'Live-In Chef Bali Guide', href: '/blog/live-in-chef-bali-hiring-guide', desc: 'Hiring a live-in private chef for your Bali villa or home.' },
        { label: 'Private Chef for Expats', href: '/blog/private-chef-bali-expats', desc: 'Long-term private chef options for Bali expats and residents.' },
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
