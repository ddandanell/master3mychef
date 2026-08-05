import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { Star, Shield, MessageCircle, Clock } from 'lucide-react'

const SECTIONS = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'The Role Explained',
    title: 'The Most Misunderstood Role in a Bali Villa Team',
    body: `<p>The villa butler is the most misunderstood and undervalued role in a villa team. Many visitors assume a butler is just a fancy word for a waiter — they are not. A trained butler is a guest experience orchestrator: they anticipate needs before they arise, they create moments, they manage the entire guest journey. In Bali's luxury villa market, the difference between an average stay and an unforgettable one is often a single exceptional butler.</p>

    <p>Think about what happens when a stay genuinely exceeds expectations. The pool is set up before you get there. Your preferred coffee is ready at 7am without you asking. The driver is booked before you remember you need one. The chef has been briefed on tonight's dietary preferences. A birthday rose-petal setup appears without anyone mentioning logistics to the guest. None of these things happen by accident — they happen because a skilled butler is working quietly in the background, tracking preferences, communicating across the team, and staying one step ahead.</p>

    <p>The butler role in Bali exists across a wide spectrum. At the basic end, some villas assign a single multi-role staff member a "butler" title without formal training. At the premium end, a trained professional with a hotel background manages the full guest experience as a dedicated role. Understanding where a candidate sits on that spectrum — and what your villa stay actually requires — is what this guide is designed to help you navigate.</p>

    <p>This guide covers exactly what a Bali villa butler does across a full day, what separates a good butler from a great one, how to vet candidates properly, what current market rates look like in IDR, and when to hire a butler versus a waiter or a full villa team. Whether you are a villa owner sourcing long-term staff or a guest planning a two-week luxury holiday, the information below will help you make the right decision.</p>`,
  },
  {
    id: 'what-butler-does',
    type: 'content' as const,
    subtitle: 'Role Breakdown',
    title: 'What a Villa Butler Actually Does — Hour by Hour',
    body: `<p>The clearest way to understand the butler role is to follow a skilled butler through a full villa day. Unlike a chef (whose role is anchored to meal preparation) or a housekeeper (whose role is anchored to cleaning), the butler's role is continuous and fluid — it expands and contracts based on what the guests need at any moment.</p>

    <p><strong>Morning (06:30–10:00):</strong> The butler arrives ahead of guests waking. They prepare and lay the breakfast table, brief the housekeeping team on any schedule changes, and check the day's guest requirements. Breakfast service is the butler's first visibility moment — preparing and serving coffee, juice, and food; noting preferences for the rest of the stay (one guest takes oat milk, another eats no eggs). Simultaneously, the butler organises the day: confirming transport bookings, arranging any activity reservations, and communicating the schedule to the chef for lunch and dinner planning.</p>

    <p><strong>Daytime (10:00–18:00):</strong> The butler is available throughout the day, not visibly hovering but accessible within moments. They handle incoming deliveries, coordinate restaurant reservations and vendor access, manage pool or equipment setup for activities, and solve problems before guests encounter them. A great butler identifies the problem three steps ahead — a guest who mentioned surfing in passing last night has a transport booking waiting by morning. The villa's minibar and pantry are checked and restocked. The chef is briefed on evening menu preferences gathered from casual morning conversation.</p>

    <p><strong>Evening (18:00–22:00+):</strong> Pre-dinner service begins: cocktails, canapés, sunset setup. If guests are dining at the villa, the butler coordinates with the chef, manages table presentation, and oversees the entire service flow. During dinner, the butler handles drinks service and plate clearing at appropriate intervals without disrupting the meal's pace. Post-dinner clearing is managed. Turndown service — fresh towels, bed preparation, evening amenities — is completed while guests enjoy after-dinner time. Special surprises (birthday setups, anniversary arrangements, welcome gifts from the villa owner) are executed at precisely the right moment.</p>

    <p><strong>Ongoing across the stay:</strong> The butler maintains a private preferences log — room temperature, coffee order, preferred wake-up time, dietary notes, any allergies communicated informally. They liaise with the villa manager or owner on property matters. They manage the villa's consumables stock. They are, in every sense, the guest's single point of contact for everything the stay requires.</p>

    <p>What makes this fundamentally different from a waiter is the orientation: a waiter responds to requests. A butler generates solutions before requests are made. One role is reactive; the other is proactive. That difference is felt in every hour of the stay.</p>`,
  },
  {
    id: 'standards',
    type: 'features' as const,
    subtitle: 'Vetting Standards',
    title: 'The Four Standards That Define a Professional Butler',
    features: [
      {
        icon: Star,
        title: 'Hospitality Trained',
        desc: 'Formal butler training or a luxury hotel front-of-house background is required. A candidate who has worked as a guest relations officer or butler at a 5-star Bali property brings transferable protocols and service standards that self-taught candidates simply do not have.',
      },
      {
        icon: Shield,
        title: 'Fully Vetted',
        desc: 'Criminal background check, minimum 2 employer references from verifiable luxury properties, and a practical skills assessment. References are called, not just listed. Any gap in the employment history is explained before the candidate reaches your shortlist.',
      },
      {
        icon: MessageCircle,
        title: 'English Proficiency',
        desc: 'Assessed, not assumed. Guest communication is the core of the butler role — from taking breakfast orders to managing special requests. A butler who cannot communicate fluently and warmly in English cannot do the job for an international guest. We assess English at interview, not at placement.',
      },
      {
        icon: Clock,
        title: 'Discretion & Anticipation',
        desc: 'The hallmark of a great butler: invisible until needed, present when required. Discretion means conversations in the villa stay in the villa. Anticipation means your glass is refilled before you notice it is empty. Both are learned behaviours that only show up in candidates with real luxury hospitality experience.',
      },
    ],
  },
  {
    id: 'costs',
    type: 'content' as const,
    subtitle: 'Current Market Rates',
    title: 'What a Villa Butler Costs in Bali (IDR 2026)',
    body: `<p>Butler rates in Bali vary significantly based on the type of engagement, the butler's experience and training background, and whether the role is live-in or live-out. The following ranges reflect current market rates for vetted, professional candidates — not unverified freelancers found through informal channels.</p>

    <p><strong>Short-term holiday butler (1–2 weeks):</strong> IDR 400,000–600,000 per day. This is the most common engagement for villa guests on a holiday stay. The butler works the full active day, typically 8–10 hours. Minimum engagement is usually 5 days. The range reflects English level (stronger English commands a premium) and whether the butler can also serve formally (waiter-butler hybrid).</p>

    <p><strong>Monthly placement (live-out):</strong> For villa owners who want a dedicated butler on staff for regular occupancy periods. The butler lives in their own accommodation and commutes to the villa. Pricing reflects training background, English proficiency, and experience with villa management responsibilities beyond pure guest service — request a quote for current market guidance.</p>

    <p><strong>Live-in butler:</strong> A live-in butler is on the property and available outside standard working hours. The accommodation value is effectively part of the compensation package — total cost to the employer should be assessed against the live-out equivalent plus transport and availability premium. Request a quote for current market guidance.</p>

    <p><strong>Event butler (specific dinner or party):</strong> IDR 750,000–1,200,000 for a 6-hour service. Suitable for a private dinner party, a birthday evening, or a celebration where professional table service is needed for one event without an ongoing placement. See our <a href="/blog/private-dinner-party-bali" class="text-[#7E6410] hover:underline font-medium">private dinner party guide</a> for how event butler service integrates with private chef bookings.</p>

    <p>What determines the price within these bands: English level is the largest single variable. A butler with hotel-trained, near-native English commands a significant premium over a candidate with functional but limited English. Training background (formal hotel vs. villa-trained vs. self-taught) is the second variable. Experience with high-end properties specifically — where discretion, anticipation, and standards of presentation are institutional, not improvised — justifies rates toward the upper end of each range.</p>`,
  },
  {
    id: 'butler-vs-waiter',
    type: 'content' as const,
    subtitle: 'Role Clarity',
    title: 'Butler vs Waiter: Understanding the Distinction',
    body: `<p>The single most common confusion in villa staffing is treating these two roles as interchangeable. They are not. Understanding the difference determines whether you hire correctly for what your event or stay actually requires.</p>

    <p><strong>A waiter serves food and drinks reactively.</strong> A waiter is on shift during meal service. They take orders, carry dishes, clear plates, and keep glasses filled during the meal. Their role begins when guests sit down and ends when the table is cleared. They are excellent at what they do — but what they do is bounded and transactional.</p>

    <p><strong>A butler manages the entire guest experience proactively.</strong> A butler's role spans the full waking day. They are thinking about the evening before the morning starts. They manage the team, coordinate external vendors, track preferences, handle logistics, and create the invisible infrastructure that makes a villa stay feel effortless. Their role is ongoing, relational, and anticipatory.</p>

    <p>For a dinner party: hire a waiter. For a week-long luxury stay: hire a butler. For both: hire both — they have distinct, complementary roles that do not overlap. Many well-run villa households have a head butler who manages one or two waiters during meal service. The butler orchestrates; the waiters execute the table service itself. This division ensures the butler remains available to the guest throughout the evening rather than being absorbed into plate-carrying.</p>

    <p>The practical test: if the primary need is professional table service for a specific meal, a waiter is the right hire. If the need is continuous, proactive guest management across a full stay or multiple days, a butler is the right hire. Both roles require vetting — but they require different skills, different experience backgrounds, and different interview criteria.</p>`,
  },
  {
    id: 'faq',
    type: 'faq' as const,
    subtitle: 'Common Questions',
    title: 'Frequently Asked Questions',
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Ready to Hire',
    title: 'Find Your Villa Butler',
    body: 'Tell us your villa, requirements, and start date — we present vetted candidates within 3 days.',
    primaryAction: {
      label: 'Chat on WhatsApp',
      href: 'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27m%20looking%20to%20hire%20a%20villa%20butler%20in%20Bali.',
    },
    secondaryAction: { label: 'View Staffing Services', href: '/staffing/villa-staff' },
  },
]

const FAQS = [
  {
    question: 'Is a villa butler the same as a housekeeper?',
    answer: 'No — a housekeeper manages cleaning and laundry. A butler manages guest experience, table service, and the overall flow of the villa stay. Some properties have both.',
  },
  {
    question: 'How long does it take to place a butler?',
    answer: 'Typically 1–2 weeks from brief to confirmed placement. Rush placements possible with a limited candidate pool.',
  },
  {
    question: 'Can I hire a butler for just a 2-week holiday?',
    answer: 'Yes — short-term holiday butlers are one of our most popular services. Minimum 5 days.',
  },
  {
    question: 'Do butlers speak English?',
    answer: 'We assess English proficiency as part of our vetting. All myCHEF butlers have confirmed English communication skills.',
  },
  {
    question: 'What is the difference between a private butler and a hotel butler?',
    answer: 'A hotel butler serves multiple guests across a floor. A private villa butler is exclusively dedicated to your household — the attention and personalisation is incomparably higher.',
  },
  {
    question: 'Do you replace the butler if it does not work out?',
    answer: 'Yes — 90-day replacement guarantee on all placements.',
  },
]

const RELATED_PAGES = [
  { label: 'Villa Staff Hiring Guide', href: '/staffing/villa-staff', desc: 'Complete guide to building a full villa team in Bali.' },
  { label: 'Live-In Chef Guide', href: '/staffing', desc: 'How to hire a live-in private chef for your Bali villa.' },
  { label: 'Staffing Villa Staff', href: '/staffing/villa-staff', desc: 'Browse all villa staff placement services from myCHEF.' },
  { label: 'Staffing Placement', href: '/staffing/private-chef-placement', desc: 'How the myCHEF placement process works end to end.' },
  { label: 'Private Dinner Party Bali', href: '/blog/private-dinner-party-bali', desc: 'How to plan a private dinner party at a Bali villa.' },
  { label: 'Pricing', href: '/pricing', desc: 'Full pricing for all myCHEF services and placements.' },
]

export default function VillaButlerBaliPage() {
  return (
    <PremiumPage
      slug="blog/villa-butler-bali-guide"
      title="Villa Butler Bali: The Complete Hiring Guide"
      description="Complete guide to hiring a villa butler in Bali. Roles, responsibilities, costs, vetting standards, short vs long-term placement. Free consultation with myCHEF."
      seoTitle="Villa Butler Bali | Hire a Villa Butler in Bali | myCHEF"
      seoDescription="Complete guide to hiring a villa butler in Bali. Roles, responsibilities, costs, vetting standards, short vs long-term placement. Free consultation with myCHEF."
      canonicalUrl="https://mychef.id/blog/villa-butler-bali-guide"
      h1="Villa Butler Bali: The Complete Hiring Guide"
      subtitle="What a Bali Villa Butler Does, What They Cost, and How to Find the Right One"
      heroImage="/generated/mychef-experience-bali-luna-gallery-1.webp"
      heroImageAlt="Professional villa butler serving guests at a Bali luxury villa — myCHEF staffing"
      ogImage="https://mychef.id/generated/mychef-experience-bali-luna-gallery-1.webp"
      keywords={['villa butler bali', 'hire butler bali', 'bali villa butler', 'butler service bali villa', 'personal butler bali']}
      highlights={['What a Butler Does', 'Standards', 'Costs', 'FAQ']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema('Villa Butler Bali Guide', 'https://mychef.id/blog/villa-butler-bali-guide', 'Blog', 'https://mychef.id/blog'),
        faqPageSchema(FAQS.map(f => ({ question: f.question, answer: f.answer }))),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Villa Butler Bali: The Complete Hiring Guide',
          description: 'Complete guide to hiring a villa butler in Bali. Roles, responsibilities, cost IDR, vetting standards, short vs long-term placement.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: {
            '@type': 'Organization',
            name: 'myCHEF.id',
            logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' },
          },
          datePublished: '2026-06-29',
          dateModified: '2026-06-29',
          image: 'https://mychef.id/generated/mychef-experience-bali-luna-gallery-1.webp',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://mychef.id/blog/villa-butler-bali-guide' },
          url: 'https://mychef.id/blog/villa-butler-bali-guide',
          wordCount: 1400,
          keywords: 'villa butler bali, hire butler bali, bali villa butler, butler service bali villa, personal butler bali',
        },
      ]}
      ctaText="Find Your Villa Butler"
      ctaSubtext="Tell us your villa, requirements, and start date — we present vetted candidates within 3 days."
    />
  )
}
