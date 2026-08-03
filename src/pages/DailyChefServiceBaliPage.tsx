import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { siteFacts } from '@/data/siteFacts'

const sections: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    title: 'Daily Chef Service in Bali — Regular Home Cooking for Villa Stays and Expat Life',
    body: `A daily chef service fills the gap between a single dinner booking and a full-time live-in chef. If you're staying in Bali for several weeks, living in a villa long-term, or an expat who wants consistent home-cooked meals without committing to a permanent hire, daily chef service is the most practical and cost-effective solution.

myCHEF matches you with a vetted, experienced chef who comes to your villa — daily, every few days, or on whatever schedule suits your household. Your chef shops from local markets, prepares meals tailored to your dietary preferences, and handles all cleanup. You eat well every day without managing staff, shopping, or kitchen logistics.

This service is popular among digital nomads on extended stays, expat families managing busy schedules, villa owners who want consistent food quality for guests, and retirees enjoying the Bali lifestyle without the complexity of full-time staff.`,
  },
  {
    id: 'how-it-works',
    type: 'content',
    title: 'How Daily Chef Service Works',
    body: `**1. Consultation and menu planning** — We begin with a brief consultation to understand your household size, dietary requirements, cuisine preferences, and meal schedule. Do you want breakfast only? All three meals? Meal prep on set days? We design the service around your life, not a fixed package.

**2. Chef matching** — We match you with a chef whose experience and cooking style fits your needs. For families: a chef comfortable with children's meals and diverse menus. For health-conscious clients: a chef skilled in organic, plant-based, and therapeutic diets. For adventurous eaters: a chef who can move confidently between Indonesian, Western, and Asian cuisines.

**3. Market sourcing** — Your chef handles grocery shopping from Bali's fresh markets and trusted suppliers. They know where to source quality ingredients, seasonal produce, and specialty items. ${siteFacts.groceryPolicy}.

**4. Daily preparation** — Your chef arrives at an agreed time, prepares your meals, and leaves the kitchen clean. Some clients prefer a prep-and-reheat model (chef cooks in the morning, you reheat at mealtimes). Others want live cooking and table service. We accommodate both.

**5. Ongoing adjustment** — As your preferences evolve, your chef adjusts menus accordingly. No rigid weekly plans. If you're bored of the current rotation or hosting guests who have different needs, just let us know.`,
  },
  {
    id: 'pricing',
    type: 'content',
    title: 'Daily Chef Service Rates in Bali',
    body: `Every daily chef booking includes one professional chef and one dedicated assistant. Groceries are charged separately at cost, supported by receipts. Our published rates (meal-count model):

**One meal a day**
Cook and serve one meal (breakfast, lunch or dinner): IDR 1,000,000++ per day
Weekly rate (10% off): IDR 900,000++ per day · Monthly rate (20% off): IDR 800,000++ per day

**Two meals a day**
Cook and serve any two of breakfast, lunch or dinner: IDR 1,800,000++ per day
Weekly rate (10% off): IDR 1,620,000++ per day · Monthly rate (20% off): IDR 1,440,000++ per day

**Three meals a day**
Cook and serve breakfast, lunch and dinner: IDR 2,700,000++ per day
Weekly rate (10% off): IDR 2,430,000++ per day · Monthly rate (20% off): IDR 2,160,000++ per day

Our chefs are specialists across Japanese, Western, Indonesian and Balinese, Italian, French, Mediterranean, Chinese, international and healthy cuisine, with more available on request. Most come from head or senior chef roles in five-star hotels and high-end restaurants, speak excellent English, and are assigned to match your preferred cuisine.

Prices are subject to a 10% service charge and 11% tax. A ${siteFacts.depositPercent}% deposit confirms your booking. Groceries are charged separately at cost, supported by receipts.`,
  },
  {
    id: 'who-its-for',
    type: 'content',
    title: 'Who Uses Daily Chef Service in Bali',
    body: `**Digital nomads and remote workers on extended stays** — Cooking every day is time-consuming when you're also managing work, clients, and the Bali lifestyle. A daily chef gives you two to three hours back each day, plus the mental space that comes from not thinking about meals.

**Expat families** — Families with children in Bali's international schools often want consistent, nutritionally balanced meals at home. A daily chef who knows your children's preferences and dietary needs is more reliable than any restaurant rotation.

**Villa owners and property managers** — For villas with regular guest turnovers, a daily chef service creates a premium offering that justifies higher rental rates. Guests staying 1–4 weeks often book chef service as part of the villa package.

**Retirees and long-stay travelers** — Many retirees in Bali prefer eating at home over restaurants but don't want the effort of daily cooking. A one-meal chef day at IDR 1,000,000++ per day — less at the weekly and monthly rates — is often cheaper than eating out as a household, with better quality and zero effort.

**Wellness and health-focused residents** — Clients following strict dietary protocols — anti-inflammatory, ketogenic, Ayurvedic, low-FODMAP, or clinical elimination diets — need a chef who can execute specific recipes consistently. We match these clients with specialist chefs.`,
  },
  {
    id: 'vs-live-in',
    type: 'content',
    title: 'Daily Chef vs. Live-In Chef — Which Is Right for You?',
    body: `The decision comes down to your household size, budget, and how much you value having a chef always available.

**Daily Chef** is the right choice if:
- Your household is 1–6 people
- You want flexibility — adjust days and hours as needed
- You're in Bali for weeks or months but not permanently
- You prefer a clear boundary between your private home time and working staff

**Live-In Chef** makes more sense if:
- You run a large villa with 6+ residents or frequent guests
- You need meal service at unpredictable times (early breakfasts, late-night returns)
- You want your chef to develop deep familiarity with your household over months
- You're a property owner creating a full-service villa experience

myCHEF offers both. Many clients start with a daily arrangement and transition to live-in once they find a chef they trust.`,
  },
  {
    id: 'cta',
    type: 'content',
    title: 'Start Your Daily Chef Service',
    body: `Tell us your location, household size, meal schedule, and any dietary requirements. We'll match you with a suitable chef and have a trial session set up within 48–72 hours.`,
  },
]

const faqs = [
  {
    question: 'Can I try a daily chef before committing to a regular schedule?',
    answer:
      'Yes. We offer trial sessions — a single day or 3-day trial — so you can experience the service and meet your chef before committing to a regular schedule. Most clients convert to a regular arrangement after one trial week.',
  },
  {
    question: 'What if I want to change my chef after a few weeks?',
    answer:
      'No problem. We maintain a roster of chefs and can arrange a changeover if your preferences or needs shift. We\'ll match you with a new chef and handle the transition. There\'s no penalty for changing.',
  },
  {
    question: 'Does the chef do the grocery shopping?',
    answer:
      `Yes. Market sourcing is included in the service. Your chef shops at local Bali markets and trusted suppliers. ${siteFacts.groceryPolicy} with receipts. If you have specific brands or dietary requirements, share them in advance and your chef will source accordingly.`,
  },
  {
    question: 'Can the daily chef cook for guests who are visiting?',
    answer:
      'Absolutely. Many clients notify their chef a day or two before having guests over. The chef adjusts portion sizes and sometimes the menu to accommodate. For larger dinner parties (8+ people), we can add event staff or a second chef to the team for the specific occasion.',
  },
  {
    question: 'Is daily chef service available outside of South Bali?',
    answer:
      'Yes. We cover Seminyak, Canggu, Uluwatu, Jimbaran, Sanur, Nusa Dua, Ubud, and Pererenan with standard rates. Amed, Lovina, Tabanan, and outer islands involve a travel surcharge. Contact us to confirm coverage for your area.',
  },
]

const relatedPages = [
  { label: 'Live-In Chef Bali', href: '/staffing', desc: 'Full-time residential chef placement' },
  { label: 'Household Chef Bali', href: '/staffing/household-staff', desc: 'Long-term household chef arrangements' },
  { label: 'Chef Placement Agency', href: '/staffing/private-chef-placement', desc: 'How placement and vetting works' },
  { label: 'Private Chef Bali Expats', href: '/private-chef-bali', desc: 'Chef services for Bali residents' },
  { label: 'Private Chef Cost Bali', href: '/blog/private-chef-cost-bali', desc: 'Full breakdown of chef pricing' },
  { label: 'How to Hire a Private Chef', href: '/blog/how-to-hire-private-chef-bali-complete-guide', desc: 'Complete hiring guide' },
]

export default function DailyChefServiceBaliPage() {
  return (
    <PremiumPage
      slug="blog/daily-chef-service-bali"
      title="Daily Chef Service Bali — Part-Time Cook Hire for Villa Stays & Expat Life"
      seoTitle="Daily Chef Service Bali — Regular In-Villa Cooking | myCHEF"
      description="Hire a daily chef in Bali for consistent home-cooked meals. Part-time and full-day options for villa stays, expat families, and digital nomads."
      seoDescription="Daily chef service in Bali for expats, long-stay villa guests and families. One, two or three meals a day with weekly and monthly discounts. Market sourcing included. From IDR 1,000,000++/day."
      h1="Daily Chef Service Bali — Part-Time In-Villa Chef for Extended Stays & Expat Life"
      subtitle="Regular home cooking for villa renters, expat families, and digital nomads — without the complexity of full-time staff."
      heroImage="/images/blog/daily-chef-service-bali.jpg"
      heroImageAlt="Indonesian private chef preparing daily home-cooked meals in a Bali villa kitchen"
      ogImage="/images/blog/daily-chef-service-bali.jpg"
      canonicalUrl="https://mychef.id/blog/daily-chef-service-bali"
      keywords={[
        'daily chef service bali',
        'part time chef bali',
        'daily cook hire bali',
        'regular chef service bali',
        'everyday chef bali',
        'ongoing chef hire bali',
        'weekly chef service bali',
        'villa chef daily bali',
        'in villa cook bali',
        'expat chef bali',
      ]}
      highlights={['Chef + Assistant Included', 'Market Sourcing Included', 'Trial Sessions', 'From IDR 1,000,000++/day']}
      sections={sections}
      faqs={faqs}
      relatedPages={relatedPages}
      ctaText="Start Daily Chef Service"
      ctaSubtext="Share your schedule and dietary preferences — we'll match you with a chef within 48 hours."
      extraJsonLd={[
        breadcrumbSchema('Daily Chef Service Bali', 'https://mychef.id/blog/daily-chef-service-bali', 'Blog', 'https://mychef.id/journal'),
        faqPageSchema(faqs),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Daily Chef Service Bali — Part-Time In-Villa Cook for Expats & Long Stays',
          description:
            'Hire a daily chef in Bali for regular in-villa cooking. Part-time, full-day, and monthly packages for expats, villa renters, and families. Market sourcing included.',
          url: 'https://mychef.id/blog/daily-chef-service-bali',
          datePublished: '2026-06-30',
          dateModified: '2026-06-30',
          author: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          image: 'https://mychef.id/images/blog/daily-chef-service-bali.jpg',
        },
      ]}
    />
  )
}
