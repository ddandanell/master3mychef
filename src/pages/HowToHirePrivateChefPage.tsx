import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema, howToSchema } from '@/components/SeoHead'
import { CheckCircle, Clock, Users, Star, Shield, MessageCircle } from 'lucide-react'

const CANONICAL = 'https://mychef.id/blog/how-to-hire-private-chef-bali-complete-guide'
const WA_LINK = 'https://wa.me/4915234561712?text=' + encodeURIComponent('Hi myCHEF, I\'d like to hire a private chef in Bali. Can you help me?')

const FAQS = [
  {
    question: 'How much does it cost to hire a private chef in Bali?',
    answer: 'Private chef hire in Bali ranges from IDR 1,500,000 to IDR 8,000,000+ per person depending on the tier. Budget chefs (casual family meals, daily cooking) start from IDR 800,000–1,500,000 per person. Mid-range fine dining and event catering runs IDR 1,500,000–3,000,000 per person. Premium Michelin-standard tasting menus with multi-chef teams start from IDR 3,000,000–8,000,000+ per person. Grocery costs are charged at-cost on top of the service fee.',
  },
  {
    question: 'How far in advance do I need to book a private chef in Bali?',
    answer: 'A minimum of one week is recommended for casual villa meals. For special events, celebrations, or dinner parties, book 3–4 weeks ahead to allow time for menu planning and ingredient sourcing. During peak season (July–August, December–January), 6 weeks advance notice is strongly advised as the best chefs fill quickly.',
  },
  {
    question: 'Do I need a fully equipped kitchen to hire a private chef?',
    answer: 'No. myCHEF chefs bring portable induction hobs, specialist cookware, knives, and equipment if your villa kitchen is basic or incomplete. We conduct a kitchen assessment before the date and arrive fully prepared. Most Bali villas have adequate setups, but we never leave you stuck.',
  },
  {
    question: 'What if I have guests with severe food allergies?',
    answer: 'All myCHEF menus are designed from scratch around your group\'s dietary requirements, including severe allergies. Our HACCP-certified chefs apply strict cross-contamination protocols — separate prep surfaces, dedicated utensils, and ingredient verification at source. We ask for a full allergy brief at booking and reconfirm on the day.',
  },
  {
    question: 'Can I hire a chef for just breakfast in Bali?',
    answer: 'Yes. Daily breakfast service is available from IDR 500,000++ per person. We also offer breakfast-only weekly packages for extended villa stays. Whether you want a full cooked spread, fresh tropical juices, eggs to order, or a healthy wellness breakfast, we\'ll tailor it to your preferences and schedule.',
  },
  {
    question: 'Is a private chef worth it compared to restaurant dining in Bali?',
    answer: 'At 4 or more guests, a private chef is cost-comparable to a quality restaurant dinner — and infinitely more flexible. You eat at your own pace, in your own villa, with a fully customised menu. No transport, no queues, no compromising on dietary needs. For families, couples, or groups with specific preferences, the private chef experience is almost always better value and far more memorable.',
  },
]

const SECTIONS = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Complete Hiring Guide',
    title: 'How to Hire a Private Chef in Bali: What You Need to Know',
    image: '/generated/mychef-experience-bali-fine-dining-4.webp',
    imageAlt: 'Michelin-trained private chef plating a fine dining course in a Bali villa',
    body: `<p>The private chef market in Bali is growing rapidly — and almost completely unregulated. On any given week, you'll find a wide spectrum of operators: Michelin-trained professionals with verified food safety certification at one end, and informal "home cooks" offering villa meals at the other. The quality gap between them is enormous, and most guests don't know how to tell the difference until something goes wrong.</p>
    <p>This guide gives you a working framework for hiring a private chef in Bali with confidence. You'll learn what credentials actually matter, what six steps to follow from first contact to the dinner table, what questions every client should ask, and what fair pricing looks like in 2026. Whether you're planning a romantic villa dinner for two, a group celebration, or a week of daily private cooking, use this guide before you book.</p>
    <p>myCHEF has served 12,000+ guests across 560+ villas in Bali since 2019. This is the framework we'd give our own family.</p>`,
  },
  {
    id: 'six-steps',
    type: 'content' as const,
    subtitle: 'Step-by-Step Process',
    title: 'The 6-Step Process to Hire a Private Chef in Bali',
    body: `<h3 style="font-family: var(--font-playfair, serif); font-size: 1.25rem; margin: 1.5rem 0 0.5rem; color: #1A1A1A;">Step 1: Define Your Needs</h3>
    <p>Before contacting any chef, get clear on four things: the occasion (casual meals, a special dinner, a week of cooking), the group size and composition (adults, children, elderly guests), any dietary requirements or allergies, and your approximate budget per person. The clearer you are, the more accurate the proposal you'll receive — and the better job the chef can do.</p>

    <h3 style="font-family: var(--font-playfair, serif); font-size: 1.25rem; margin: 1.5rem 0 0.5rem; color: #1A1A1A;">Step 2: Research Providers</h3>
    <p>Look for chefs or services with verifiable credentials (formal culinary training, food safety certification), genuine reviews from recent clients, and responsive communication. If a provider takes more than 24 hours to reply to an initial enquiry, treat that as a warning sign. myCHEF profiles include training background, specialties, and client reviews — all independently verified.</p>

    <h3 style="font-family: var(--font-playfair, serif); font-size: 1.25rem; margin: 1.5rem 0 0.5rem; color: #1A1A1A;">Step 3: Request a Custom Menu Proposal</h3>
    <p>Don't accept a generic quote with a price and nothing else. A professional chef will send you a custom menu proposal: specific courses tailored to your group, seasonal ingredient suggestions, and dietary accommodations built in. If they can't or won't produce a real proposal, move on. The proposal tells you everything about how they work.</p>

    <h3 style="font-family: var(--font-playfair, serif); font-size: 1.25rem; margin: 1.5rem 0 0.5rem; color: #1A1A1A;">Step 4: Confirm Pricing Transparency</h3>
    <p>Get a clear breakdown of what's included in the price. A trustworthy provider will itemise: the chef's service fee, the grocery/ingredient budget (charged at-cost with receipts), any additional service staff (waitstaff, sommelier), equipment if the villa kitchen is limited, and cleanup. Surprises at the end are a red flag. Transparent pricing is a baseline professional standard.</p>

    <h3 style="font-family: var(--font-playfair, serif); font-size: 1.25rem; margin: 1.5rem 0 0.5rem; color: #1A1A1A;">Step 5: Review Your Chef's Profile</h3>
    <p>Once you've received a proposal you like, spend five minutes reviewing the chef's actual background. Where did they train? What kind of kitchens have they worked in? Do they specialise in cuisines that match your brief? A chef with five years in Michelin-star kitchens and HACCP certification is a fundamentally different hire from someone who learned to cook in resort hotel buffets. Both may produce good food — but at very different levels, and at very different risk profiles for an event.</p>

    <h3 style="font-family: var(--font-playfair, serif); font-size: 1.25rem; margin: 1.5rem 0 0.5rem; color: #1A1A1A;">Step 6: Confirm the Booking with Deposit and Brief</h3>
    <p>Lock the date with a deposit (typically 25–50%). At this stage, share your villa address so the chef can plan transport and logistics, organise a brief kitchen tour or photo walkthrough so they can assess the setup, and confirm timings for each meal. A written booking confirmation protects both parties. The brief is where great events are made or missed — the more detail you provide, the better the result.</p>`,
  },
  {
    id: 'what-to-look-for',
    type: 'content' as const,
    subtitle: 'Professional Standards',
    title: 'What Separates a Professional Private Chef from an Independent Cook',
    body: `<p>Bali has a wide spectrum of people calling themselves private chefs. At the professional end, you're hiring someone who has completed formal culinary training (a diploma programme, an apprenticeship in a Michelin-star kitchen, or equivalent), holds current food safety certification, works with professional liability insurance, and operates within a structure that includes a backup or replacement if they're unavailable on your date.</p>
    <p><strong>HACCP Certification</strong> — Hazard Analysis and Critical Control Points — is the international food safety standard used by professional kitchens worldwide. A HACCP-certified chef has been trained to identify and control biological, chemical, and physical hazards at every stage of food preparation. For large groups, allergy-sensitive guests, or events where the consequences of a food safety failure are serious, this certification is non-negotiable.</p>
    <p>The <strong>same-day replacement guarantee</strong> is equally important for villa events. If your booked chef falls ill on the morning of a dinner for sixteen guests, an unaffiliated freelancer has no backup for you. A professional service like myCHEF maintains a vetted roster and can deploy a replacement chef of equivalent calibre — same menu, same standard — with minimal disruption. For event-critical bookings, always ask: "What happens if you're unavailable on the day?"</p>
    <p>myCHEF operates with all of the above as standard: Michelin-trained team, HACCP certification, same-day replacement guarantee, and money-back assurance. It's the framework we built after seeing too many guests left stranded by informal operators in the years before we launched.</p>`,
  },
  {
    id: 'questions-to-ask',
    type: 'content' as const,
    subtitle: 'Due Diligence',
    title: '8 Questions to Ask Before You Book a Private Chef in Bali',
    body: `<p><strong>1. What training or credentials do you have?</strong><br/>Look for formal culinary school training, apprenticeships in professional kitchens, or verifiable experience in quality restaurants. "Self-taught" is not disqualifying, but it raises the bar on other credentials.</p>

    <p><strong>2. Have you cooked at this type of event before?</strong><br/>A chef who regularly does multi-course dinner parties for 12 guests is not the same as one who does daily villa breakfasts. Match experience to your event type — ask for examples and, where possible, client references from comparable events.</p>

    <p><strong>3. What's included in the quoted price?</strong><br/>The service fee is just one line item. Clarify whether groceries, equipment, service staff (waiters, sommeliers), transport, and cleanup are included or charged separately. A complete quote avoids surprises.</p>

    <p><strong>4. How do you handle dietary restrictions and allergies?</strong><br/>A professional answer covers both menu design (building around restrictions from the start) and safety protocols (cross-contamination prevention, separate prep areas, ingredient verification). A vague answer here is a red flag.</p>

    <p><strong>5. What happens if you're unavailable on the day?</strong><br/>Illness, emergencies, and accidents happen. Ask explicitly about the backup plan. If they don't have one, you're taking on the full risk of a cancellation with no recourse.</p>

    <p><strong>6. Do you source ingredients, or do I?</strong><br/>Most private chefs handle ingredient sourcing themselves, which is the right answer — they know the local markets, quality suppliers, and seasonal availability. Clarify whether groceries are charged at-cost (with receipts) or as a flat rate included in the fee.</p>

    <p><strong>7. Can I see a sample menu for my event type?</strong><br/>A confident professional will have examples of past menus for similar occasions. This shows range, style, and whether their cooking philosophy matches what you're looking for. If they can't produce examples, that tells you something.</p>

    <p><strong>8. What's the cancellation and refund policy?</strong><br/>Know the terms before you sign. Standard practice is a non-refundable deposit within a defined window (e.g. 72 hours before the date), with full or partial refunds for cancellations further out. myCHEF offers a money-back guarantee — ask any provider you're considering what theirs is.</p>`,
  },
  {
    id: 'features',
    type: 'features' as const,
    subtitle: 'myCHEF Standards',
    title: 'What We Guarantee on Every Booking',
    features: [
      {
        icon: Star,
        title: 'Verified Chef Credentials',
        desc: 'Every myCHEF chef has verified culinary training — from Michelin-star kitchen experience to accredited hospitality programmes. We check credentials before onboarding, not after.',
      },
      {
        icon: CheckCircle,
        title: 'Transparent Ingredient Pricing',
        desc: 'Groceries are charged at-cost with full receipts. No mark-ups, no bundles, no surprises. You see exactly what was bought, where, and for how much.',
      },
      {
        icon: Clock,
        title: 'Same-Day Replacement Guarantee',
        desc: 'If your booked chef is unavailable on the day, we dispatch a verified replacement of equivalent calibre — same menu brief, same standard. Your event does not get cancelled.',
      },
      {
        icon: Users,
        title: 'Custom Menu Proposals',
        desc: 'Every enquiry receives a tailored menu proposal, not a generic rate card. Courses are designed around your group, your occasion, and your dietary requirements from the first contact.',
      },
      {
        icon: Shield,
        title: 'HACCP Food Safety Certified',
        desc: 'Our chefs hold HACCP certification — the international food safety standard. Critical for allergy-sensitive guests and large groups where food safety cannot be left to chance.',
      },
      {
        icon: MessageCircle,
        title: 'Money-Back Guarantee',
        desc: "If you're not satisfied with the service, we make it right — or we refund you. We've served 12,000+ guests and stand behind every booking.",
      },
    ],
  },
  {
    id: 'pricing',
    type: 'content' as const,
    subtitle: 'Pricing Guide',
    title: 'What Private Chef Hire Actually Costs in Bali (2026)',
    body: `<p>Pricing for private chefs in Bali follows three broad tiers. Understanding the differences helps you budget accurately and avoid either overpaying for a casual meal or under-budgeting for a special event.</p>

    <h3 style="font-family: var(--font-playfair, serif); font-size: 1.2rem; margin: 1.5rem 0 0.5rem; color: #1A1A1A;">Budget Tier — IDR 800,000–1,500,000 per person</h3>
    <p>Casual family meals, daily villa cooking, simple Western or Indonesian menus. Typically covers one-two courses, standard ingredients, and no additional service staff. Suitable for 3–7 day villa stays where you want good home cooking without restaurant formality.</p>

    <h3 style="font-family: var(--font-playfair, serif); font-size: 1.2rem; margin: 1.5rem 0 0.5rem; color: #1A1A1A;">Mid-Range Tier — IDR 1,500,000–3,000,000 per person</h3>
    <p>Fine dining dinner experiences, event catering, quality imported and local premium ingredients, 3–5 courses with professional presentation. Often includes a waitstaff member. This is the sweet spot for special occasions: birthdays, anniversaries, proposal dinners, villa dinner parties. myCHEF's most popular tier starts here.</p>

    <h3 style="font-family: var(--font-playfair, serif); font-size: 1.2rem; margin: 1.5rem 0 0.5rem; color: #1A1A1A;">Premium Tier — IDR 3,000,000–8,000,000++ per person</h3>
    <p>Tasting menus, Michelin-standard cooking, premium and rare ingredients (imported wagyu, live seafood, truffle), multi-chef teams, dedicated sommelier, full front-of-house service. This is a restaurant-quality experience in your villa — often better than most restaurants you'd find in Bali.</p>

    <h3 style="font-family: var(--font-playfair, serif); font-size: 1.2rem; margin: 1.5rem 0 0.5rem; color: #1A1A1A;">How Grocery Pricing Works</h3>
    <p>At myCHEF, groceries are always charged at-cost — meaning you pay exactly what the chef paid at market or from the supplier, with receipts. There is no ingredient mark-up. The service fee covers the chef's time, skill, and logistics. This model is more transparent than a bundled "all-in" rate, and almost always saves you money compared to providers who bake ingredient costs into a flat fee at inflated rates.</p>
    <p>For reference on detailed cost breakdowns by occasion, see our <a href="/blog/private-chef-cost-bali" class="text-[#C5A028] hover:underline font-medium">complete private chef cost guide</a> or <a href="/pricing" class="text-[#C5A028] hover:underline font-medium">view our pricing page</a>.</p>`,
  },
  {
    id: 'cta-mid',
    type: 'cta' as const,
    subtitle: 'Start Your Booking',
    title: 'Ready to Hire a Private Chef in Bali?',
    body: 'Tell us your date, group size, and occasion. We\'ll send you a custom menu proposal and a confirmed chef profile within a few hours.',
    bg: 'dark' as const,
    primaryAction: {
      label: 'Chat on WhatsApp',
      href: WA_LINK,
      external: true,
    },
    secondaryAction: {
      label: 'View Pricing',
      href: '/pricing',
    },
  },
  {
    id: 'related',
    type: 'related' as const,
    title: 'More Resources',
    links: [
      { label: 'Private Chef Cost in Bali (Full Guide)', href: '/blog/private-chef-cost-bali', desc: 'Detailed breakdown of what every tier actually costs, with real examples.' },
      { label: 'Private Chef Bali — Overview', href: '/fine-dining/private-chef-bali', desc: 'How myCHEF works: meet the team, see the menus, browse chef profiles.' },
      { label: 'Complete Bali Private Chef Guide', href: '/guide/private-chef-bali', desc: 'Everything you need to plan a private chef experience in Bali from start to finish.' },
      { label: 'Our Pricing', href: '/pricing', desc: 'Up-to-date service fees and package options across all tiers.' },
      { label: 'Meet Our Chefs', href: '/chefs', desc: 'Browse individual chef profiles, specialties, and past event galleries.' },
      { label: 'Request a Quote', href: '/quote', desc: 'Get a custom proposal for your dates, group size, and occasion.' },
    ],
  },
]

const HOW_TO_STEPS = [
  {
    name: 'Define your needs',
    text: 'Clarify occasion type, group size, dietary requirements, and your per-person budget before contacting any chef.',
  },
  {
    name: 'Research providers',
    text: 'Look for verifiable culinary credentials, HACCP food safety certification, genuine reviews, and fast response times.',
  },
  {
    name: 'Request a custom menu proposal',
    text: 'Ask for a tailored proposal with specific courses and ingredient considerations — not a generic price quote.',
  },
  {
    name: 'Confirm pricing transparency',
    text: 'Get an itemised breakdown covering service fee, at-cost groceries, service staff, equipment, and cleanup.',
  },
  {
    name: "Review the chef's profile",
    text: 'Verify training background, kitchen experience, cuisine specialties, and ask for references from similar events.',
  },
  {
    name: 'Confirm booking with deposit and brief',
    text: 'Pay the deposit (25–50%), share villa address and kitchen layout, confirm meal timings and a written booking confirmation.',
  },
]

export default function HowToHirePrivateChefPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Hire a Private Chef in Bali (2026) — Complete Guide',
    description:
      'Step-by-step guide to hiring a private chef in Bali. What to ask, what to expect, how pricing works, how to book. Michelin-trained chefs from IDR 1,500,000++.',
    author: {
      '@type': 'Person',
      name: 'Adriano Cattaneo',
      jobTitle: 'Executive Chef & Founder',
      worksFor: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
    },
    publisher: {
      '@type': 'Organization',
      name: 'myCHEF.id',
      url: 'https://mychef.id',
      logo: { '@type': 'ImageObject', url: 'https://mychef.id/mychef-logo.svg' },
    },
    datePublished: '2026-06-29',
    dateModified: '2026-06-29',
    image: 'https://mychef.id/generated/mychef-experience-bali-fine-dining-4.webp',
    mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL },
    url: CANONICAL,
    wordCount: 1600,
    about: {
      '@type': 'Service',
      name: 'Private Chef Hire in Bali',
      provider: { '@id': 'https://mychef.id/#business' },
    },
  }

  const howToSchemaObj = howToSchema({
    name: 'How to Hire a Private Chef in Bali',
    description:
      'A step-by-step process for hiring a professional private chef in Bali — from defining your needs to confirming your booking with a deposit and event brief.',
    totalTime: 'P7D',
    steps: HOW_TO_STEPS,
  })

  return (
    <PremiumPage
      slug="blog/how-to-hire-private-chef-bali-complete-guide"
      title="How to Hire a Private Chef in Bali (2026) | Complete Guide"
      description="Step-by-step guide to hiring a private chef in Bali. What to ask, what to expect, how pricing works, how to book. Michelin-trained chefs from IDR 1,500,000++."
      seoTitle="How to Hire a Private Chef in Bali (2026) | Complete Guide | myCHEF"
      seoDescription="Step-by-step guide to hiring a private chef in Bali. What to ask, what to expect, how pricing works, how to book. Michelin-trained chefs from IDR 1,500,000++."
      canonicalUrl={CANONICAL}
      h1="How to Hire a Private Chef in Bali"
      subtitle="Step-by-step guide: what to look for, what to ask, how pricing works, and how to book with confidence."
      heroImage="/generated/mychef-experience-bali-fine-dining-4.webp"
      heroImageAlt="Michelin-trained private chef presenting a fine dining course in a Bali villa"
      ogImage="https://mychef.id/generated/mychef-experience-bali-fine-dining-4.webp"
      keywords={[
        'how to hire private chef bali',
        'hire private chef bali guide',
        'private chef bali booking',
        'private chef bali cost',
        'private chef bali',
      ]}
      highlights={[
        '6-Step Hiring Process',
        'HACCP-Certified Chefs',
        'Transparent Pricing',
        'Same-Day Replacement Guarantee',
        'Money-Back Guarantee',
      ]}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={[]}
      ctaText="Chat on WhatsApp"
      ctaSubtext="We reply within the hour — tell us your date and group size to get a custom proposal."
      extraJsonLd={[
        breadcrumbSchema(
          'How to Hire a Private Chef in Bali',
          CANONICAL,
          'Journal',
          'https://mychef.id/journal'
        ),
        faqPageSchema(FAQS),
        articleSchema,
        howToSchemaObj,
      ]}
    />
  )
}
