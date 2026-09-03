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
    body: `**1. Consultation and menu planning** — We begin with a brief consultation to understand your household size, dietary requirements, cuisine preferences, and meal schedule. Stay chef is a full day of staff with three flexible meals. One lunch, dinner or party is catering. We design the service around your life, not a one-meal stay SKU.

**2. Chef matching** — We match you with a chef whose experience and cooking style fits your needs. For families: a chef comfortable with children's meals and diverse menus. For health-conscious clients: a chef skilled in organic, plant-based, and therapeutic diets. For adventurous eaters: a chef who can move confidently between Indonesian, Western, and Asian cuisines.

**3. Market sourcing** — Your chef handles grocery shopping from Bali's fresh markets and trusted suppliers. They know where to source quality ingredients, seasonal produce, and specialty items. ${siteFacts.groceryPolicy}.

**4. Daily preparation** — Your chef arrives at an agreed time, prepares your meals, and leaves the kitchen clean. Some clients prefer a prep-and-reheat model (chef cooks in the morning, you reheat at mealtimes). Others want live cooking and table service. We accommodate both.

**5. Ongoing adjustment** — As your preferences evolve, your chef adjusts menus accordingly. No rigid weekly plans. If you're bored of the current rotation or hosting guests who have different needs, just let us know.`,
  },
  {
    id: 'pricing',
    type: 'content',
    title: 'Daily Chef Service Rates in Bali',
    body: `Every daily chef booking includes one professional chef and one dedicated assistant. Groceries are charged separately at cost, supported by receipts. Stay chef starts at a full day of staff — you cannot buy a single meal of private chef.

**Full-day stay chef (three flexible meals)**
Cook and serve three meals: IDR 2,700,000++ per day
Weekly rate (10% off): IDR 2,430,000++ per day · Monthly rate (20% off): IDR 2,160,000++ per day

Those three meals are credits, not locked to breakfast + lunch + dinner. Use each as breakfast, lunch or dinner however you want — including three breakfasts.

One lunch, dinner or party is catering (food included). We inspect the villa and kitchen first so the kitchen meets our standard; we arrive with the team, not a full catering kit — that setup is not done for one meal.

Our chefs are specialists across Japanese, Western, Indonesian and Balinese, Italian, French, Mediterranean, Chinese, international and healthy cuisine, with more available on request. Most come from head or senior chef roles in five-star hotels and high-end restaurants, speak excellent English, and are assigned to match your preferred cuisine.

**Chef Rotation, included on 7+ day bookings.** Book a week or longer and you're not locked into one chef or one cuisine for the whole stay. At no extra charge, request a different specialist chef — Japanese one day, Italian the next, Indonesian and Balinese after that — day by day, whenever you feel like a change. It's the reason clients on longer stays keep coming back: full access to our entire chef roster, not just whoever you started with.

Prices are subject to a 10% service charge and 11% tax. A ${siteFacts.depositPercent}% deposit confirms your booking. Groceries are charged separately at cost, supported by receipts.`,
  },
  {
    id: 'who-its-for',
    type: 'content',
    title: 'Who Uses Daily Chef Service in Bali',
    body: `**Digital nomads and remote workers on extended stays** — Cooking every day is time-consuming when you're also managing work, clients, and the Bali lifestyle. A daily chef gives you two to three hours back each day, plus the mental space that comes from not thinking about meals.

**Expat families** — Families with children in Bali's international schools often want consistent, nutritionally balanced meals at home. A daily chef who knows your children's preferences and dietary needs is more reliable than any restaurant rotation.

**Villa owners and property managers** — For villas with regular guest turnovers, a daily chef service creates a premium offering that justifies higher rental rates. Guests staying 1–4 weeks often book chef service as part of the villa package.

**Retirees and long-stay travelers** — Many retirees in Bali prefer eating at home over restaurants but don't want the effort of daily cooking. A full-day stay chef at IDR 2,700,000++ per day — less at the weekly and monthly rates — with three meals placed as you like is often cheaper than eating out as a household, with better quality and zero effort.

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
  { question: 'How do I book this with myCHEF in Bali?', answer: 'WhatsApp date, guest count, villa area and your goal. Or use <a href="/book">book</a> / <a href="/quote">quote</a>.' },
  { question: 'Where can I see prices?', answer: 'Published tables on <a href="/pricing">pricing</a> and <a href="/private-chef-bali">private chef</a> day rates.' },
  { question: 'Is service available island-wide?', answer: 'Yes across major villa regions. <a href="/locations">Locations</a>.' },
  { question: 'Can you handle dietary requirements?', answer: 'Yes when briefed early — no extra charge for standard adaptations.' },
  { question: 'What is included vs extra?', answer: 'Quotes list inclusions; premium ingredients, alcohol and extra staff are itemised when needed.' },
  { question: 'Deposit and cancellation?', answer: 'Usually 50% deposit; refund tiers on <a href="/cancellation">cancellation</a>.' },
  { question: 'How fast is a proposal?', answer: 'Often within 2–24 hours of a complete brief.' },
  { question: 'Can this combine with other services?', answer: 'Yes — private chef, catering and a mobile cocktail bar stack in one plan. <a href="/in-villa-service/bartenders">Mobile bar →</a> · <a href="/catering">Catering →</a> · <a href="/private-chef-bali">Private chef →</a>' },
  { question: 'Do you clean up?', answer: 'Yes on serviced formats.' },
  { question: 'Kids welcome?', answer: 'Yes with adapted menus when needed. <a href="/kids-menus">Kids menus</a>.' },
  { question: 'Who is myCHEF?', answer: 'Bali villa hospitality company — chefs, catering, events and staffing. <a href="/chefs">About</a> · <a href="/why-mychef">Why myCHEF</a>.' },
  { question: 'More questions?', answer: 'See the central <a href="/faq">FAQ</a>.' },
  { question: 'What deposit do you require?', answer: 'A 50% deposit confirms your booking and locks the date. The balance is typically due the day before service. Full terms: <a href="/cancellation">cancellation policy</a>.' },
  { question: 'What does "++" mean on prices?', answer: '"++" means 11% government tax and 10% service charge are added to the listed price. Written quotes show the all-in total before you pay.' },
  { question: 'Which areas of Bali do you cover?', answer: 'Island-wide villa coverage including Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran, Sanur, Berawa and Pererenan. Browse <a href="/locations">locations</a>.' },
  { question: 'How far in advance should I book?', answer: 'A few days for most dinners; one to two weeks for larger events; longer for peak season and weddings. Last-minute is often possible — ask on WhatsApp.' },
  { question: 'Can you accommodate allergies and special diets?', answer: 'Yes — vegan, vegetarian, gluten-free, nut-free, shellfish allergy, pregnancy-safe and halal-sensitive menus when briefed in advance, at no extra charge. Guide: <a href="/blog/food-allergies-dietary-requirements-private-chef-bali">food allergies</a>.' },
  { question: 'Do you clean up after service?', answer: 'Yes on serviced chef, catering and fine-dining formats — kitchen and service areas restored before we leave.' },
  { question: 'How do I get a quote?', answer: 'WhatsApp date, guest count, villa area and what you want. Or use <a href="/quote">quote</a> / <a href="/book">book</a> / <a href="/faq">FAQ</a>.' },
  { question: 'What if a chef or staff member cannot make it?', answer: 'We send a verified replacement of equivalent role or refund that service. Details: <a href="/why-mychef">why myCHEF</a>.' },
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
      seoDescription="Daily chef service in Bali for expats, long-stay villa guests and families. Full-day staff minimum with weekly and monthly discounts. Market sourcing included. From IDR 2,700,000++/day."
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
      highlights={['Chef + Assistant Included', 'Market Sourcing Included', 'Chef Rotation on 7+ Day Bookings', 'From IDR 2,700,000++/day']}
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
