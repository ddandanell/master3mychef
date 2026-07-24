import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema, serviceSchema } from '@/components/SeoHead'
import { Wine, Shell, Clock, Shield, Users, Sparkles } from 'lucide-react'
import type { PageSection } from '@/components/PremiumPage'
import { ARTICLE_CONTENT } from '@/data/content/articleContent'

const WA_LINK = 'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27m%20interested%20in%20adding%20the%20Champagne%20%26%20Oyster%20Hour%20to%20my%20Bali%20villa%20dinner%20or%20event.%20Can%20you%20send%20details%20and%20pricing%3F'
const CANONICAL = 'https://mychef.id/experiences/champagne-oyster-experience'

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Champagne & Oyster Experience Bali',
    title: 'Champagne & Oyster Hour at Your Bali Villa',
    image: '/generated/mychef-oyster-champagne-station-pour-bali-landscape.webp',
    imageAlt: 'Oyster bar Bali with champagne service at an elegant private villa',
    body: `<p>Some evenings deserve an opening act. Our Champagne & Oyster Hour is a slim, luxurious add-on to a private dinner, proposal or celebration: a fresh oyster station set up at your villa, oysters shucked on-site moments before serving, and champagne chilled to the right temperature — for an hour that makes the rest of the evening feel bigger.</p>

    <p><a href="${WA_LINK}" class="text-[#7E6410] hover:underline font-medium">Add Oysters & Champagne to My Evening — WhatsApp +62 896-7407-2020</a></p>`,
  },
  {
    id: 'addon',
    type: 'content' as const,
    subtitle: 'The Add-On That Opens the Evening',
    title: 'A Golden-Hour Prelude to Dinner',
    image: '/generated/mychef-oyster-champagne-seafood-station-bali-landscape.webp',
    imageAlt: 'Mediterranean seafood and oyster station setup at a Bali villa event',
    body: `<p>We source the freshest oysters available for your date and serve them simply, the way oysters are best: classic mignonette, fresh lemon, crushed ice. Champagne is your call — a crisp Blanc de Blancs is our usual suggestion, and bottles are billed at cost plus sourcing, always quoted transparently before you commit.</p>

    <p>Most guests book it as the first hour of something else: the pre-dinner reception before a <a href="/fine-dining" class="text-[#7E6410] hover:underline font-medium">private chef dinner</a>, <a href="/proposal-dinner" class="text-[#7E6410] hover:underline font-medium">add it to a proposal dinner</a>, or the poolside opener for a birthday or <a href="/events/weddings" class="text-[#7E6410] hover:underline font-medium">pre-reception oyster bar</a>. We time the station so it flows straight into whatever comes next.</p>`,
  },
  {
    id: 'seo-content',
    type: 'content' as const,
    title: "Champagne & Oyster Hour at Your Bali Villa",
    body: ARTICLE_CONTENT['/experiences/champagne-oyster-experience'],
  },
  {
    id: 'offerings',
    type: 'features' as const,
    subtitle: "What's Included",
    title: 'Everything in the Champagne & Oyster Hour',
    features: [
      {
        icon: Shell,
        title: 'Fresh Oysters',
        desc: 'Oysters selected and sourced for your date, kept on ice until service.',
      },
      {
        icon: Wine,
        title: 'Champagne Service',
        desc: 'Champagne or sparkling wine service, billed at cost plus sourcing.',
      },
      {
        icon: Users,
        title: 'On-Site Shucking',
        desc: 'Oysters shucked and plated just before serving by trained staff.',
      },
      {
        icon: Sparkles,
        title: 'Station Setup',
        desc: 'Ice, glassware, linens and garnishes included; full clean-down afterwards.',
      },
      {
        icon: Shield,
        title: 'Allergy Alternative',
        desc: 'A separate seafood or canapé station for guests with shellfish allergies.',
      },
      {
        icon: Clock,
        title: 'Timed to Your Evening',
        desc: 'We arrive 60–90 minutes before service and coordinate with the main kitchen team.',
      },
    ],
  },
  {
    id: 'booking',
    type: 'content' as const,
    subtitle: 'How Booking Works',
    title: 'Add the Hour to Your Evening',
    body: `<p>The experience suits 2 to 30+ guests and works poolside, on a terrace or in the garden. We arrive 60–90 minutes before service. Book at least 5–7 days ahead for the best oyster selection — more in peak season — and mention any shellfish allergies: we'll run an alternative seafood or canapé station for those guests alongside. Every hour is quoted individually, itemised and confirmed before a deposit secures the date [BUSINESS CONFIRMATION REQUIRED: deposit level — crawl for this URL is silent; live pages elsewhere show 50%].</p>

    <p>Popular pairings: <a href="/proposal-dinner" class="text-[#7E6410] hover:underline font-medium">add it to a proposal dinner</a>, the <a href="/experiences/romantic-proposal-dinner" class="text-[#7E6410] hover:underline font-medium">full proposal package</a>, or a <a href="/fine-dining/romantic-dinner" class="text-[#7E6410] hover:underline font-medium">romantic dinner for two</a>.</p>

    <p><a href="${WA_LINK}" class="text-[#7E6410] hover:underline font-medium">Add the Oyster Hour — WhatsApp +62 896-7407-2020</a></p>`,
  },
  {
    id: 'faq',
    type: 'faq' as const,
    subtitle: 'FAQ',
    title: 'Champagne & Oyster Experience FAQ',
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Book the Hour',
    title: 'Ready for Oysters and Champagne in Your Villa?',
    body: 'Tell us your date, villa and guest count — and what it opens for. We will reply within the hour with an itemised proposal.',
    primaryAction: {
      label: 'Add the Oyster Hour',
      href: WA_LINK,
      external: true,
    },
    secondaryAction: {
      label: 'Browse All Experiences',
      href: '/experiences',
    },
  },
]

const FAQS = [
  { question: 'How much does the Champagne & Oyster Hour cost?', answer: 'Quoted individually — it depends on guest count, oyster selection and champagne choice. Champagne is billed at cost plus sourcing; your quote is itemised and all-in before you commit.' },
  { question: 'How many guests does it suit?', answer: 'From 2 to 30+. It scales from a romantic table for two to a full pre-dinner reception.' },
  { question: 'How long does it run?', answer: 'Typically one to two hours — designed as the opening act to a dinner or celebration.' },
  { question: 'What about shellfish allergies?', answer: 'We plan an alternative seafood or canapé station for allergic guests so nobody is left out.' },
  { question: 'What does it pair with?', answer: 'A private chef dinner, a proposal dinner, a full proposal package, or a <a href="/events/weddings" class="text-[#7E6410] hover:underline font-medium">pre-reception oyster bar</a> — we coordinate timing with the main kitchen team.' },
]

const RELATED_PAGES = [
  { label: 'Private Experiences Bali', href: '/experiences', desc: 'Browse the full collection of private culinary and celebration experiences.' },
  { label: 'Proposal Dinner', href: '/proposal-dinner', desc: 'Chef-led proposal dinner at your Bali villa.' },
  { label: 'Romantic Dinners', href: '/fine-dining/romantic-dinner', desc: 'Candlelit private chef dinners for two.' },
  { label: 'Wedding Pre-Receptions', href: '/events/weddings', desc: 'Welcome receptions and wedding catering at Bali villas.' },
]

export default function ExperienceChampagneOysterExperiencePage() {
  return (
    <PremiumPage
      slug="experiences/champagne-oyster-experience"
      title="Champagne & Oyster Experience Bali | Villa Oyster Bar"
      description="Add a private oyster bar & champagne hour to your Bali villa dinner or event — fresh oysters, shucked on-site, champagne at cost. WhatsApp myCHEF."
      seoTitle="Champagne & Oyster Experience Bali | Villa Oyster Bar"
      seoDescription="Add a private oyster bar & champagne hour to your Bali villa dinner or event — fresh oysters, shucked on-site, champagne at cost. WhatsApp myCHEF."
      canonicalUrl={CANONICAL}
      h1="Champagne & Oyster Experience Bali"
      subtitle="Fresh Oysters, Curated Champagne and Private Villa Service"
      heroImage="/generated/mychef-oyster-champagne-station-pour-bali-landscape.webp"
      heroImageAlt="Champagne toast and fresh oysters at an elegant private villa experience in Bali"
      ogImage="https://mychef.id/generated/mychef-oyster-champagne-station-pour-bali-landscape.webp"
      keywords={[
        'champagne and oyster experience bali',
        'oyster bar bali',
        'champagne reception villa bali',
        'private oyster bar bali',
        'bali oyster shucking',
      ]}
      highlights={['Fresh Oysters', 'Champagne at Cost', 'Villa Setup', '2–30+ Guests']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema(
          'Champagne & Oyster Experience Bali',
          CANONICAL,
          'Experiences',
          'https://mychef.id/experiences'
        ),
        faqPageSchema(FAQS),
        serviceSchema(
          'Champagne & Oyster Experience Bali',
          'A private oyster bar and champagne hour at your Bali villa: fresh oysters shucked on-site, champagne billed at cost plus sourcing, full setup and service for 2–30+ guests. Booked as an add-on to dinners, proposals and events.',
          CANONICAL
        ),
      ]}
      ctaText="Add the Oyster Hour"
      ctaSubtext="Tell us your date and villa — we will reply within the hour with a bespoke quote."
    />
  )
}
