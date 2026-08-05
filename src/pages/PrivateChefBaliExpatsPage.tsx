import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { Home, Leaf, Clock, RefreshCw } from 'lucide-react'

const SECTIONS = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Expat & Long-Stay Residents',
    title: 'Why Bali Expats Are Hiring Private Chefs',
    body: `<p>Bali has become one of the world's most desirable long-stay destinations. Canggu, Seminyak, Pererenan, and Ubud now host tens of thousands of digital nomads, retirees, remote workers, and long-stay families — many spending three months, six months, or settling permanently. And a growing number of them are discovering that hiring a private chef isn't a luxury; it's one of the most practical financial and lifestyle decisions they make.</p>

    <p>The daily reality of eating in Bali as a long-stay resident is different from a two-week holiday. Yes, there are excellent warungs serving IDR 30,000 nasi campur. But if you care about what's in your food — the oil quality, the protein sources, whether it's actually gluten-free — restaurant dining becomes a daily negotiation. Health-conscious expats find themselves spending IDR 150,000–300,000 per meal at a mid-tier Canggu café just to get macro-conscious, allergy-safe food. For a couple, that's IDR 900,000–1,800,000 per day before dinner.</p>

    <p>A private chef changes that equation entirely. Your food is cooked in your kitchen, to your exact specifications, with ingredients you can verify. Your chef shops the morning market, knows your macros, remembers your preference for low-sodium sauces, and has dinner ready when you finish work. Beyond cost and health, the time savings are transformative: no meal planning, no shopping, no cooking, no cleaning up. For a remote worker or family managing a busy Bali life, that recovery of two to three hours per day compounds dramatically over a month.</p>

    <p>And when you want to entertain — host a dinner for fellow expats, celebrate a milestone, throw a garden party — your chef is already there. No caterer to book, no restaurant to coordinate, no compromise on the menu. This guide explains exactly how the service model works, what it costs, and how to find the right arrangement for your household.</p>`,
  },
  {
    id: 'options',
    type: 'content' as const,
    subtitle: 'Service Models',
    title: 'Two Ways to Hire a Private Chef as a Bali Expat',
    body: `<p>Not every household needs the same level of service. myCHEF offers two placement models for long-stay residents, each suited to a different lifestyle and budget.</p>

    <p><strong>Daily Cook (monthly rate — IDR 2,160,000++ per day):</strong> Your chef and a dedicated assistant arrive each morning, cook and serve all meals for the day (breakfast, lunch, dinner — or whichever combination you prefer), and leave once the kitchen is clean. This complete full-day arrangement, booked at the monthly rate (20% off the standard IDR 2,700,000++ per day), is the most popular choice for couples and small families. The chef handles weekly meal planning, market shopping, ingredient storage, and all cooking. You come home to a prepared dinner and leave for work with a packed lunch. Ideal for households eating at home most evenings, with a relatively structured daily routine. Book 7 days or longer and <strong>Chef Rotation</strong> is included at no extra charge — request a different specialist chef or cuisine on any day, so you're never locked into one style of cooking.</p>

    <p><strong>Live-In Chef (tailored quote):</strong> A full-time, live-in arrangement where the chef resides in the villa or a nearby staff room and is available for all meals, event catering, and on-call cooking needs. This model is suited to larger households (families of four or more), villas with frequent guests, or expats who entertain regularly and want maximum availability. Pricing reflects chef seniority, cuisine breadth, and whether additional staffing (kitchen assistant) is included — our <a href="/staffing/live-in-chef">staffing team</a> provides a tailored quote after a short consultation.</p>

    <p>Choosing between models typically comes down to how often you eat at home, whether you have children, and how much flexibility your schedule demands. Our placement team can advise based on a short consultation. Every booking includes one professional chef and one dedicated assistant; groceries are charged separately at cost, supported by receipts. Prices are subject to a 10% service charge and 11% tax.</p>`,
  },
  {
    id: 'costs-comparison',
    type: 'content' as const,
    subtitle: 'Cost Comparison',
    title: 'The Real Cost of Eating in Bali Without a Chef',
    body: `<p>Let's work through the actual numbers for a couple living in Bali for three months or longer. This is the analysis most expats do — usually after they've already been here for a month and noticed their food spend.</p>

    <p><strong>Daily restaurant dining for two:</strong> At health-conscious mid-tier cafés in Canggu or Seminyak (the typical choice for expats who care about food quality), expect to spend IDR 400,000–750,000 per meal. Three meals per day: IDR 900,000–1,500,000 daily. Monthly: IDR 27M–45M. And this doesn't count delivery fees, late-night snacking, or the alcohol that inevitably appears at dinner.</p>

    <p><strong>Home-cooked meals with a private chef:</strong> A complete full-day arrangement — breakfast, lunch and dinner cooked and served by one professional chef with a dedicated assistant — is IDR 2,160,000++ per day at the monthly rate (20% off the standard IDR 2,700,000++), roughly IDR 100M++ per month for daily service. Groceries are charged separately at cost, supported by receipts; a couple eating well typically budgets IDR 1M–2M per week. A lighter half-day plan at the monthly rate (IDR 800,000++ per day) covers one cooked and served meal plus one prepared for later. This is a premium service rather than a budget hack — the return shows up in the health and time dividends below, not in a headline saving versus restaurants. Prices are subject to a 10% service charge and 11% tax.</p>

    <p><strong>The health dividend:</strong> Separate from cost, home cooking delivers benefits that restaurant dining structurally cannot. You know exactly what's in every meal — the oil type, the sodium level, whether cross-contamination is possible. Expats with food allergies, autoimmune conditions, or specific dietary protocols (keto, Whole30, macro-tracking) find private chef service genuinely transformative rather than merely convenient. The chef learns your specific requirements in week one and applies them every day thereafter.</p>

    <p><strong>Time dividend:</strong> Estimate conservatively: 30 minutes of meal planning per day, 45 minutes of shopping every two days, 60 minutes of cooking and 20 minutes of cleaning per meal. That's approximately 2.5–3 hours per day. Over a month: 75–90 hours returned to you. At any reasonable valuation of your time, the math favors a chef decisively.</p>`,
  },
  {
    id: 'features',
    type: 'features' as const,
    subtitle: 'What You Get',
    title: 'What Long-Stay Chef Service Includes',
    features: [
      {
        icon: Home,
        title: 'Feels Like Home',
        desc: 'Meals cooked to your taste, in your kitchen, on your schedule. Your chef learns your preferences in week one and adapts the menu to your routine — whether that means early breakfast before morning surf, a light lunch, or a substantial dinner after a long work day.',
      },
      {
        icon: Leaf,
        title: 'Health-Focused',
        desc: 'Macro-balanced, organic-sourced, diet-specific options as standard. Whether you follow keto, plant-based, gluten-free, high-protein, or any combination, your chef shops and cooks to specification. No negotiating with restaurant staff about oil types or hidden sauces.',
      },
      {
        icon: Clock,
        title: 'Time Reclaimed',
        desc: 'No meal planning, no grocery shopping, no cooking, no cleaning up. Your chef handles every step from market to table. The average expat household reclaims 2–3 hours per day — time that flows directly into work, family, and the lifestyle that brought you to Bali.',
      },
      {
        icon: RefreshCw,
        title: 'Flexible Contracts',
        desc: 'Monthly rolling contracts with a 1-month minimum. Cancel with 2 weeks notice. Pause provisions for travel of 7+ days. No long-term lock-in, no agency penalties — structured to match the flexible lifestyle of Bali long-stay residents.',
      },
    ],
  },
  {
    id: 'what-to-expect',
    type: 'content' as const,
    subtitle: 'The Process',
    title: 'What to Expect in Your First Month',
    body: `<p>Getting started with a long-term private chef arrangement is straightforward. Here is how the first month typically unfolds.</p>

    <p><strong>Initial consultation (Week 0):</strong> Before placement, we run a detailed intake session — typically 30–45 minutes over WhatsApp or video call. We cover: your dietary preferences and restrictions, your typical weekly schedule, the cuisines you most enjoy and want to explore, your household size and any guest patterns, ingredient priorities (organic, local market, imported), and any absolute off-limits ingredients. This becomes the brief your chef works from.</p>

    <p><strong>First shopping trip (Day 1):</strong> Your chef does an initial market tour — often with you present if you'd like — to establish baseline stock: pantry essentials, spices, sauces, preferred protein sources, and the fresh produce rhythm. We recommend a starting weekly grocery budget conversation at this point. Most couples spend IDR 800K–1.5M per week on groceries for healthy, varied cooking; larger households or those eating premium proteins spend more.</p>

    <p><strong>First week trial:</strong> The first week is a calibration period. Your chef cooks from the brief, and you provide feedback daily — portion size, seasoning preference, timing. A good chef actively solicits this feedback and adjusts rapidly. By the end of week one, you should have a settled rhythm.</p>

    <p><strong>Feedback loop:</strong> After week two, we recommend a brief check-in with the myCHEF placement team to confirm everything is working as expected. Any adjustments — schedule changes, menu direction, scope changes — are handled at this point.</p>

    <p><strong>Menu rotation:</strong> By month two, most chefs establish a three- to four-week rotating menu that prevents repetition while keeping preparation efficient. You can request additions, theme weeks (Japanese month, Mediterranean rotation), or special occasion menus at any time. Long-term arrangements are dynamic, not static.</p>`,
  },
  {
    id: 'faq',
    type: 'faq' as const,
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Start Your Search',
    title: 'Find Your Long-Term Chef',
    body: 'Share your location, household size, and preferred arrangement — we\'ll match you with the right chef within 48 hours.',
    primaryAction: {
      label: 'Chat on WhatsApp',
      href: 'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27m%20an%20expat%20in%20Bali%20and%20I%27m%20interested%20in%20a%20long-term%20private%20chef%20arrangement.',
      external: true,
    },
    secondaryAction: {
      label: 'View Staffing Options',
      href: '/staffing/private-chef-placement',
    },
  },
]

const FAQS = [
  { question: 'How much is a private chef in Bali per day?', answer: 'Daily private chef rates are published by meal count with weekly/monthly discounts. <a href="/private-chef-bali">Private chef Bali</a>.' },
  { question: 'Are groceries included?', answer: 'Shopping work is included; food is billed at cost with receipts on daily hire.' },
  { question: 'What is Chef Rotation?', answer: 'On 7+ day bookings you can request different specialist chefs by day at no extra day-rate charge.' },
  { question: 'Can the chef cook in our villa kitchen?', answer: 'Yes — standard villa kitchens work; we bring specialised tools when needed.' },
  { question: 'Is this cheaper than restaurants for groups?', answer: 'For six+ people on two meals/day, the day rate split often beats mid-range restaurant totals plus taxis.' },
  { question: 'Can I request a specific chef?', answer: 'Yes for multi-day stays when available. Meet the team: <a href="/chefs">chefs</a>.' },
  { question: 'Fine dining vs daily chef?', answer: 'Fine dining is multi-course event pricing; daily chef is meal-count day rates. <a href="/fine-dining">Fine dining</a>.' },
  { question: 'Do you cover my area?', answer: 'Island-wide. <a href="/locations">Locations</a>.' },
  { question: 'Kids menus with daily chef?', answer: 'Yes — <a href="/kids-menus">kids menus</a> and parallel adult meals.' },
  { question: 'Live-in vs daily chef?', answer: 'Live-in is long-term placement (<a href="/staffing/live-in-chef">live-in chef</a>); daily is holiday day-rate hire.' },
  { question: 'Payment methods?', answer: 'Bank transfer and major cards; deposit then balance as quoted.' },
  { question: 'Last-minute private chef?', answer: 'Often possible outside peak — WhatsApp availability.' },
  { question: 'Is this guide free?', answer: 'Yes — educational content to help you plan. Booking is optional.' },
  { question: 'Can myCHEF deliver what this guide describes?', answer: 'Yes — start at <a href="/services">services</a> or <a href="/private-chef-bali">private chef</a>.' },
  { question: 'How do I get prices after reading?', answer: 'See <a href="/pricing">pricing</a> or WhatsApp a fixed quote request.' },
  { question: 'Does advice apply across Bali?', answer: 'Yes for major villa areas — confirm logistics for remote spots.' },
  { question: 'Allergies covered in real bookings?', answer: 'Yes — brief us at enquiry. <a href="/blog/food-allergies-dietary-requirements-private-chef-bali">Allergy guide</a>.' },
  { question: 'Daily chef vs one dinner?', answer: 'Multi-day stays → private chef day rates; celebration nights → fine dining or catering.' },
  { question: 'How to book after this guide?', answer: 'WhatsApp date, guests, area — <a href="/book">book</a>.' },
  { question: 'Related services?', answer: 'Browse <a href="/dining-styles">dining styles</a> and <a href="/events">events</a>.' },
]

const RELATED_PAGES = [
  { label: 'Live-In Chef Bali', href: '/staffing', desc: 'Complete guide to live-in chef arrangements for Bali villas and households.' },
  { label: 'Staffing Placement', href: '/staffing/private-chef-placement', desc: 'myCHEF private chef placement and long-term staffing services.' },
  { label: 'Private Chef Cost Bali', href: '/blog/private-chef-cost-bali', desc: 'Full pricing breakdown for private chef services in Bali.' },
  { label: 'Private Chef Canggu', href: '/private-chef/canggu', desc: 'Private chef services in Canggu — the expat heartland of Bali.' },
  { label: 'Private Chef Seminyak', href: '/private-chef/seminyak', desc: 'Private chef services in Seminyak — luxury villa dining.' },
  { label: 'Private Chef Ubud', href: '/private-chef/ubud', desc: 'Private chef services in Ubud — wellness-focused and retreat cooking.' },
]

export default function PrivateChefBaliExpatsPage() {
  return (
    <PremiumPage
      slug="blog/private-chef-bali-expats"
      title="Private Chef in Bali for Expats & Long-Stay Residents"
      description="Expat or long-term Bali resident? Hire a private chef for weekly meal prep, dinner parties and daily cooking. Flexible contracts from 1 month."
      seoTitle="Private Chef Bali for Expats | Long-Term Chef Services | myCHEF"
      seoDescription="Expat or long-term Bali resident? Hire a private chef for weekly meal prep, dinner parties and daily cooking. Flexible contracts from 1 month."
      canonicalUrl="https://mychef.id/blog/private-chef-bali-expats"
      h1="Private Chef in Bali for Expats & Long-Stay Residents"
      subtitle="Everything You Need to Know About Hiring a Chef for Your Bali Life"
      heroImage="/generated/mychef-experience-bali-luna-gallery-1.webp"
      heroImageAlt="Private chef preparing healthy meals for expat household in Bali villa"
      ogImage="https://mychef.id/generated/mychef-experience-bali-luna-gallery-1.webp"
      keywords={['private chef bali expat', 'personal chef bali long term', 'hire chef bali villa', 'live in chef bali expat', 'cook bali villa long stay']}
      highlights={['Service Models', 'Cost Comparison', 'What to Expect', 'FAQ']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema('Private Chef Bali for Expats', 'https://mychef.id/blog/private-chef-bali-expats', 'Blog', 'https://mychef.id/blog'),
        faqPageSchema(FAQS.map((f) => ({ question: f.question, answer: f.answer }))),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Private Chef in Bali for Expats & Long-Stay Residents',
          description: 'Expat or long-term Bali resident? Hire a private chef for weekly meal prep, dinner parties and daily cooking. Flexible contracts from 1 month. Transparent pricing.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: {
            '@type': 'Organization',
            name: 'myCHEF.id',
            logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' },
          },
          datePublished: '2026-06-29',
          dateModified: new Date().toISOString().split('T')[0],
          image: 'https://mychef.id/generated/mychef-experience-bali-luna-gallery-1.webp',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://mychef.id/blog/private-chef-bali-expats' },
          url: 'https://mychef.id/blog/private-chef-bali-expats',
          wordCount: 1400,
          keywords: 'private chef bali expat, personal chef bali long term, hire chef bali villa long stay',
        },
      ]}
      ctaText="Find Your Long-Term Chef"
      ctaSubtext="Share your location, household size, and preferred arrangement — we'll match you with the right chef within 48 hours."
    />
  )
}
