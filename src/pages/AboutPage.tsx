import { Award, ChefHat, Globe, Heart, House, Shield, Users, UtensilsCrossed } from 'lucide-react'
import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema } from '@/components/SeoHead'

const ADRIANO_PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Adriano',
  jobTitle: 'Executive Chef & Founder',
  worksFor: {
    '@type': 'Organization',
    name: 'myCHEF.id',
  },
  description: 'Michelin-trained chef, trained in Milan. Founded myCHEF.id in Bali.',
}

const SECTIONS = [
  {
    id: 'story',
    type: 'content' as const,
    subtitle: 'Our Story',
    title: 'From Milan and Modena to Villa Kitchens Across Bali',
    body: `<p>myCHEF was founded by Adriano, a chef from Milan who trained under Michelin-level standards in Modena before sharpening his discipline in Tokyo kitchens. When he arrived in Bali, he saw a gap: beautiful villas, incredible guests, but private dining that often felt improvised rather than world-class.</p>
    <p>So he built a company around one idea: <strong>Your Villa. Our Kitchen.</strong> That meant designing menus that work in real villa kitchens, creating service systems that feel effortless for hosts, and training a team that treats every private space with total respect.</p>
    <p>Today, myCHEF is trusted for romantic dinners, family celebrations, full-service events, and longer in-villa stays across the island — still guided by Adriano’s standards, but delivered by a deeply local Bali team.</p>`,
    image: '/generated/luna-team.webp',
    imageAlt: 'myCHEF hospitality team preparing for private villa dining service in Bali',
  },
  {
    id: 'stats',
    type: 'features' as const,
    subtitle: 'By the Numbers',
    title: 'A Track Record Built One Villa at a Time',
    features: [
      { icon: Users, title: '50+ Staff', desc: 'Chefs, service professionals, coordinators, and support staff trained for private hospitality in Bali villas.' },
      { icon: House, title: '560+ Villas', desc: 'Trusted by guests, villa managers, and hosts across Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, and beyond.' },
      { icon: UtensilsCrossed, title: '12,000+ Guests', desc: 'Served through intimate dinners, family stays, birthdays, weddings, retreats, and premium catered events.' },
      { icon: Award, title: '8+ Years', desc: 'Operating in Bali since 2016 with systems refined around reliability, presentation, and guest comfort.' },
    ],
  },
  {
    id: 'values',
    type: 'features' as const,
    subtitle: 'What We Stand For',
    title: 'The Principles Behind Every Plate',
    features: [
      { icon: ChefHat, title: 'Michelin-Trained Standards', desc: 'Technique, timing, cleanliness, and presentation are non-negotiable — whether it is a two-person dinner or a 60-guest event.' },
      { icon: Users, title: 'Indonesian Talent First', desc: 'myCHEF grows local culinary talent through in-house training, mentorship, and clear progression into lead-chef roles.' },
      { icon: Shield, title: 'Trusted in Private Spaces', desc: 'Our team is trained to operate discreetly, communicate clearly, and leave every kitchen restored after service.' },
      { icon: Heart, title: 'Guest-First Hospitality', desc: 'Allergies, children, celebrations, last-minute changes, and cultural requirements are handled with care, not friction.' },
      { icon: Globe, title: 'Local Produce, Global Technique', desc: 'We source in Bali, then cook with Mediterranean, modern European, Indonesian, and Asian techniques that feel refined but never forced.' },
      { icon: Award, title: 'Constant Refinement', desc: 'Menus, prep systems, and service flow are reviewed continuously so each booking gets better than the last.' },
    ],
  },
  {
    id: 'coverage',
    type: 'content' as const,
    subtitle: 'Where We Serve',
    title: 'Built for the Realities of Bali Villa Hospitality',
    body: `<p>We serve across Bali’s major villa destinations — Seminyak, Canggu, Ubud, Uluwatu, Jimbaran, Sanur, Nusa Dua, and surrounding areas. We know the kitchens, the access constraints, the traffic, and the suppliers, which means fewer surprises on the day.</p>
    <p>That local knowledge matters. It is how we keep ingredients fresh, arrivals on time, and service calm even when a villa kitchen is small or the guest list changes late.</p>`,
    image: '/generated/mychef-misc-bali-hub-villa.webp',
    imageAlt: 'Luxury Bali villa where myCHEF serves private dining',
  },
  {
    id: 'meet-team',
    type: 'cta' as const,
    subtitle: 'Meet the Team',
    title: 'Want to See the Chefs Behind the Brand?',
    body: 'Explore the lead chefs guests request most often — including Adriano, Surya, and Bayu — and see who is best suited to Mediterranean dinners, Indonesian feasts, BBQ nights, and tasting menus.',
    primaryAction: { label: 'Meet the Team', href: '/chefs' },
    secondaryAction: { label: 'Book a Chef', href: '/book' },
  },
]

const FAQS = [
  {
    question: 'Who founded myCHEF?',
    answer: 'myCHEF was founded by Adriano, a Milan-born chef who trained under Michelin-level standards in Modena before bringing that discipline to Bali villa hospitality.',
  },
  {
    question: 'How large is the myCHEF team?',
    answer: 'We operate with 50+ staff across chefs, service, logistics, and coordination — built to handle everything from intimate dinners to large-format events.',
  },
  {
    question: 'How many villas and guests has myCHEF served?',
    answer: 'myCHEF has served 560+ villas and more than 12,000 guests across Bali through private dining, catering, weddings, retreats, and extended villa stays.',
  },
  {
    question: 'What makes myCHEF different from a freelance private chef?',
    answer: 'You get a full team, proven systems, menu depth, backup coverage, and Michelin-trained standards — not just one individual trying to manage shopping, cooking, service, and cleanup alone.',
  },
  {
    question: 'Can I meet the chefs before booking?',
    answer: 'Yes. Visit the chefs page to see the lead profiles, then message us on WhatsApp if you want to request a specific chef or discuss the right fit for your event.',
  },
]

const RELATED_PAGES = [
  { label: 'Our Chefs', href: '/chefs', desc: 'Meet Adriano and the lead chefs behind the myCHEF experience.' },
  { label: 'Menus', href: '/menus', desc: 'Browse menu styles for villa dinners, feasts, BBQs, and tasting menus.' },
  { label: 'Fine Dining', href: '/fine-dining', desc: 'Explore premium tasting menus and intimate villa experiences.' },
  { label: 'Catering', href: '/catering', desc: 'Planning a larger group, buffet, BBQ, or staffed event?' },
  { label: 'Pricing', href: '/pricing', desc: 'See starting prices and the structure behind our offers.' },
  { label: 'Contact', href: '/contact', desc: 'Talk to the team about your dates, villa, and guest count.' },
]

export default function AboutPage() {
  return (
    <PremiumPage
      slug="about"
      title="About myCHEF"
      description="Learn how Adriano built myCHEF in Bali — Michelin-trained roots, 50+ staff, 560+ villas served, and 12,000+ guests hosted across the island."
      seoTitle="About myCHEF Bali | Michelin-Trained Private Chef Team"
      seoDescription="Meet the myCHEF Bali team: Michelin-trained founder Adriano, 50+ local professionals, 560+ villas served. See how we make villa dining exceptional."
      canonicalUrl="https://mychef.id/about"
      h1="The Story Behind myCHEF in Bali"
      subtitle="Michelin-trained origin. Bali-built team. Trusted in 560+ villas across the island."
      heroImage="/generated/mychef-misc-bali-section-villa-kitchen.webp"
      heroImageAlt="Indonesian private chef preparing a fine dining dinner in a private Bali villa"
      ogImage="https://mychef.id/generated/mychef-finedining-bali-luna-chef-portrait.webp"
      keywords={['private chef bali', 'about mychef', 'bali catering company']}
      highlights={['Michelin-Trained Founder', '50+ Staff', '560+ Villas Served', '12,000+ Guests Hosted']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema('About myCHEF', 'https://mychef.id/about'),
        ADRIANO_PERSON_SCHEMA,
      ]}
      ctaText="Chat With Our Team"
      ctaSubtext="Planning a dinner, event, or villa stay? We’ll help you choose the right myCHEF experience."
    />
  )
}
