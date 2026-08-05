import { Award, ChefHat, Globe, Heart, House, Shield, Users, UtensilsCrossed } from 'lucide-react'
import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema } from '@/components/SeoHead'
import { siteFacts } from '@/data/siteFacts'

const ADRIANO_PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Adriano',
  jobTitle: 'Executive Chef & Founder',
  worksFor: {
    '@type': 'Organization',
    name: 'myCHEF.id',
  },
  description: `Fine-dining-trained chef, trained in ${siteFacts.founderTrainingCity}. Founded myCHEF.id in Bali in ${siteFacts.foundingYear}.`,
}

const SECTIONS = [
  {
    id: 'story',
    type: 'content' as const,
    subtitle: 'Our Story',
    title: `From ${siteFacts.founderTrainingCity} to Villa Kitchens Across Bali`,
    body: `<p>myCHEF was founded by Adriano, a chef who trained under Michelin-level standards in ${siteFacts.founderTrainingCity} before sharpening his discipline in Tokyo kitchens. When he arrived in Bali in ${siteFacts.foundingYear}, he saw a gap: beautiful villas, incredible guests, but private dining that often felt improvised rather than world-class.</p>
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
      { icon: House, title: '560+ Events', desc: 'Trusted by guests, villa managers, and hosts across Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, and beyond.' },
      { icon: UtensilsCrossed, title: '12,000+ Guests', desc: 'Served through intimate dinners, family stays, birthdays, weddings, retreats, and premium catered events.' },
      { icon: Award, title: `Since ${siteFacts.foundingYear}`, desc: `Operating in Bali since ${siteFacts.foundingYear} with systems refined around reliability, presentation, and guest comfort.` },
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
    answer: `myCHEF was founded by Adriano, a chef who trained under Michelin-level standards in ${siteFacts.founderTrainingCity} before bringing that discipline to Bali villa hospitality in ${siteFacts.foundingYear}. Meet him and the team on <a href="/chefs">our chefs</a>.`,
  },
  {
    question: 'How large is the myCHEF team?',
    answer: 'We operate with 50+ staff across chefs, service, logistics and coordination — sized for intimate dinners through large-format events.',
  },
  {
    question: 'How many villas and guests has myCHEF served?',
    answer: `${siteFacts.reviewFraming} across private dining, catering, weddings, retreats and extended villa stays in Bali.`,
  },
  {
    question: 'What makes myCHEF different from a freelance private chef?',
    answer: 'A full team, systems, menu depth, backup coverage and fine-dining standards — not one person juggling shopping, cooking, service and cleanup alone. <a href="/why-mychef">Why myCHEF →</a>',
  },
  {
    question: 'Can I meet the chefs before booking?',
    answer: 'Yes. Browse lead profiles on <a href="/chefs">chefs</a>, then WhatsApp if you want a specific chef or cuisine fit.',
  },
  {
    question: 'Is myCHEF based in Bali?',
    answer: `Yes. Operations are Bali-based with address and contact published sitewide (${siteFacts.addressDisplay}). Service covers villa areas island-wide via <a href="/locations">locations</a>.`,
  },
  {
    question: 'What services does myCHEF offer?',
    answer: 'Private chef day rates, fine dining, catering, events, experiences, in-villa staff and long-term staffing. Start at <a href="/services">services</a>.',
  },
  {
    question: 'Are your prices transparent?',
    answer: 'Yes — published day rates and menu starts, with ++ tax/service explained and all-in quotes before deposit. <a href="/pricing">Pricing →</a>',
  },
  {
    question: 'Do you only serve luxury travellers?',
    answer: 'We specialise in villa hospitality for couples, families, groups, retreats and corporate hosts — formats scale from daily chef hire to weddings.',
  },
  {
    question: 'How do I contact myCHEF?',
    answer: `WhatsApp ${siteFacts.phoneDisplay}, email ${siteFacts.email}, or <a href="/contact">contact</a> / <a href="/book">book</a>.`,
  },
  {
    question: 'What is your cancellation policy?',
    answer: `${siteFacts.cancellationPolicy} Full detail: <a href="/cancellation">cancellation</a>.`,
  },
  {
    question: 'Do you hire chefs and hospitality staff?',
    answer: 'Yes — careers and team growth via <a href="/join-our-team">join our team</a>, and client-side placement via <a href="/staffing">staffing</a>.',
  },
  {
    question: 'Can villa managers partner with myCHEF?',
    answer: 'Yes. Partner and referral pathways exist for villa operators — see <a href="/partner">partner</a> and related villa programmes.',
  },
  {
    question: 'Where can I read independent guest feedback?',
    answer: 'Curated, dated reviews on <a href="/reviews">reviews</a> plus Google Business Profile signals tied to our public NAP.',
  },
  {
    question: 'Do you cook Indonesian and international cuisine?',
    answer: 'Both. Specialist head chefs cover Balinese/Indonesian, Mediterranean, Japanese, BBQ, plant-based and pastry.',
  },
  {
    question: 'Is grocery markup part of your model?',
    answer: `On daily private chef hire, ${siteFacts.groceryPolicy.toLowerCase()} with receipts. Package dining usually includes ingredients in the menu price.`,
  },
  {
    question: 'How long has myCHEF operated in Bali?',
    answer: `Since ${siteFacts.foundingYear}, building from fine-dining roots into full villa hospitality operations.`,
  },
  {
    question: 'Can you support multi-day family villa stays?',
    answer: 'Yes — meal plans from one to three meals per day with weekly/monthly discounts. <a href="/private-chef-bali">Private chef Bali →</a>',
  },
  {
    question: 'Do you cater weddings and corporate retreats?',
    answer: 'Yes. <a href="/events/weddings">Weddings</a>, <a href="/events/corporate">corporate events</a> and <a href="/catering/retreat-catering">retreat catering</a>.',
  },
  {
    question: 'What should I send in my first message?',
    answer: 'Date, villa area, guest count and the service you want (daily chef, dinner, BBQ, wedding). We reply with availability and a fixed quote path.',
  },
]

const RELATED_PAGES = [
  { label: 'Our Chefs', href: '/chefs', desc: 'Meet Adriano and the lead chefs behind the myCHEF experience.' },
  { label: 'Menus', href: '/fine-dining/menus', desc: 'Browse menu styles for villa dinners, feasts, BBQs, and tasting menus.' },
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
      description={`Learn how Adriano built myCHEF in Bali — fine-dining-trained roots, 50+ staff, ${siteFacts.reviewFraming}.`}
      seoTitle="About myCHEF Bali | Fine-Dining Private Chef Team"
      seoDescription={`Meet the myCHEF Bali team: fine-dining-trained founder Adriano, 50+ local professionals, ${siteFacts.reviewFraming}. See how we make villa dining exceptional.`}
      canonicalUrl="https://mychef.id/about"
      h1="The Story Behind myCHEF in Bali"
      subtitle={`Fine-dining-trained origin. Bali-built team. ${siteFacts.reviewFraming}.`}
      heroImage="/generated/mychef-misc-bali-section-villa-kitchen.webp"
      heroImageAlt="Indonesian private chef preparing a fine dining dinner in a private Bali villa"
      ogImage="https://mychef.id/generated/mychef-finedining-bali-luna-chef-portrait.webp"
      keywords={['private chef bali', 'about mychef', 'bali catering company']}
      highlights={['Fine-Dining-Trained Founder', '50+ Staff', siteFacts.eventsServed, siteFacts.guestsServed]}
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
