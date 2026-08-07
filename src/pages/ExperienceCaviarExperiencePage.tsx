import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema, providerRef, serviceSchema } from '@/components/SeoHead'
import {
  Sparkles,
  Wine,
  Users,
  Ship,
  Briefcase,
  Shell,
  GlassWater,
  UtensilsCrossed,
} from 'lucide-react'
import type { PageSection } from '@/components/PremiumPage'

/**
 * /experiences/caviar-experience — commercial owner for caviar experience Bali
 * Product rule: contact / WhatsApp for quote only — no public list prices.
 */

const WA_LINK =
  'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27d%20like%20a%20caviar%20experience%20proposal%20in%20Bali.%20Date%3A%20%20Guests%3A%20%20Villa%20or%20yacht%3A%20'
const CANONICAL = 'https://mychef.id/experiences/caviar-experience'
const HERO = '/generated/mychef-caviar-experience-bali-hero-villa.webp'
const IMG_STATION = '/generated/mychef-caviar-experience-bali-service-station.webp'
const IMG_SERVICE = '/generated/mychef-caviar-experience-bali-champagne-service.webp'

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Caviar Experience Bali',
    title: 'Luxury Caviar Service, Private Chefs & Champagne Experiences',
    image: HERO,
    imageAlt: 'Premium caviar and champagne service on a Bali villa terrace at golden hour',
    body: `<p>There are moments that deserve something extraordinary. Whether you are celebrating a birthday, hosting friends in a private villa, welcoming guests aboard a yacht, planning a proposal, or simply enjoying a sunset overlooking the ocean, nothing creates a more luxurious atmosphere than premium caviar paired with exceptional service.</p>

    <p>At myCHEF Bali, we offer exclusive <strong>caviar experiences</strong> across the island — world-class ingredients with experienced <a href="/private-chef-bali" class="text-[#7E6410] hover:underline font-medium">private chefs</a>, professional butlers, bartenders and flawless hospitality. We bring everything directly to your villa, yacht or event venue so you enjoy one of the world’s finest delicacies without leaving your accommodation.</p>

    <p>Our team creates intimate tastings for two guests or elegant receptions for more than one hundred people. Every <strong>caviar service Bali</strong> booking is quoted for your date, guest count, selection and staffing — contact us for a written proposal. There is no public list price on this page.</p>`,
  },
  {
    id: 'complete',
    type: 'features' as const,
    subtitle: 'A Complete Luxury Experience',
    title: 'More Than Serving Caviar',
    features: [
      {
        icon: Sparkles,
        title: 'Premium caviar selections',
        desc: 'Carefully sourced tins presented with blinis, crème fraîche and classic accompaniments — plated or station-style.',
      },
      {
        icon: Wine,
        title: 'Champagne pairings',
        desc: 'Chilled champagne and sparkling service timed to your reception, dinner or sunset — see also champagne service options below.',
      },
      {
        icon: UtensilsCrossed,
        title: 'Private chef',
        desc: 'A professional chef designs the sequence: canapés, seafood, courses or a full fine-dining menu around the caviar moment.',
      },
      {
        icon: Shell,
        title: 'Oyster station & seafood',
        desc: 'Live oyster shucking, seafood towers and chilled platters — stack with our champagne & oyster experience when you want shellfish centre stage.',
      },
      {
        icon: GlassWater,
        title: 'Bartenders & mobile bar',
        desc: 'Signature cocktails, vodka service or a full mobile cocktail bar for larger villa parties and VIP receptions.',
      },
      {
        icon: Users,
        title: 'Butler & fine dining service',
        desc: 'Uniformed service staff, luxury table styling, villa setup and complete cleanup so you never touch a tray.',
      },
    ],
  },
  {
    id: 'perfect-for',
    type: 'content' as const,
    subtitle: 'Perfect For',
    title: 'Occasions Built for Luxury Caviar Bali',
    body: `<p>Our <strong>villa caviar Bali</strong> and VIP formats are popular for:</p>
    <ul class="list-disc pl-6 space-y-1">
      <li>Luxury villa dinners and <a href="/fine-dining" class="text-[#7E6410] hover:underline font-medium">fine dining Bali</a> evenings</li>
      <li>Romantic proposals and anniversaries</li>
      <li><a href="/events/weddings" class="text-[#7E6410] hover:underline font-medium">Wedding catering Bali</a> arrivals and cocktail hours</li>
      <li>Birthday celebrations and milestone parties</li>
      <li>Yacht charters and <strong>yacht catering Bali</strong> days at sea</li>
      <li>Corporate VIP events, product launches and executive dinners</li>
      <li>Sunset cocktail parties and luxury retreats</li>
      <li><strong>Private events Bali</strong> for discreet high-profile hosts</li>
    </ul>
    <p>Whether you host two guests or two hundred, we build a personalised run-of-show around your location and timing.</p>`,
  },
  {
    id: 'selection',
    type: 'content' as const,
    subtitle: 'Premium Caviar Selection',
    title: 'Siberian, Oscietra, Beluga & Seasonal Tins',
    image: IMG_STATION,
    imageAlt: 'Open caviar tin with mother-of-pearl spoon, blinis and crème fraîche',
    body: `<p>We work with carefully selected premium suppliers so quality and freshness match a true luxury service. Depending on availability, we can source varieties including:</p>
    <ul class="list-disc pl-6 space-y-1">
      <li><strong>Siberian caviar</strong> — approachable luxury, often chosen for larger receptions</li>
      <li><strong>Oscietra (Osetra) caviar</strong> — nutty complexity, a classic for champagne pairings</li>
      <li><strong>Beluga caviar</strong> — the showpiece tin when the occasion calls for it</li>
      <li><strong>Imperial and seasonal premium selections</strong> — confirmed on your proposal</li>
    </ul>
    <p>Our chefs recommend the ideal option for your guest count, budget band and style of event. Premium Indonesian distributors supply internationally recognised grades; we confirm exact labels and gram weights in writing before you deposit. We never publish a fixed retail card here — selections move with the market.</p>
    <p><strong>How should caviar be served?</strong> Traditionally chilled, on ice or a cold slate, with a non-reactive spoon (mother-of-pearl or horn — metal can taint delicate flavour). Guests often taste a small amount alone first, then with blini and crème fraîche. Our team brings the right tools and coaches hosts who want a short tasting sequence.</p>`,
  },
  {
    id: 'pairings',
    type: 'content' as const,
    subtitle: 'Champagne & Beverage Pairings',
    title: 'Champagne Service Bali & Classic Partners',
    image: IMG_SERVICE,
    imageAlt: 'Butler pouring champagne for VIP guests at a Bali villa caviar dinner',
    body: `<p>Great caviar deserves exceptional drinks. <strong>Caviar and champagne</strong> is the classic pairing; many guests also enjoy premium vodka, or a quiet non-alcoholic luxury line for daytime and dry programmes.</p>
    <p>Our sommeliers and bartenders can recommend:</p>
    <ul class="list-disc pl-6 space-y-1">
      <li>Champagne and sparkling wine service</li>
      <li>Premium vodka presentation</li>
      <li>Signature cocktails timed to canapés</li>
      <li>Alcohol-free luxury pairings</li>
    </ul>
    <p>For larger events, add a complete <a href="/in-villa-service/bartenders" class="text-[#7E6410] hover:underline font-medium">mobile cocktail bar</a> or a full <a href="/experiences/private-cocktail-party" class="text-[#7E6410] hover:underline font-medium">private cocktail party</a> plan. Prefer shellfish as the hero with caviar as an upgrade? See our <a href="/experiences/champagne-oyster-experience" class="text-[#7E6410] hover:underline font-medium">champagne & oyster experience</a> — <strong>oyster and caviar Bali</strong> stacks beautifully on one timeline.</p>`,
  },
  {
    id: 'areas',
    type: 'content' as const,
    subtitle: 'Served Anywhere in Bali',
    title: 'Island-Wide Caviar Service',
    body: `<p>We travel throughout Bali for <strong>luxury catering Bali</strong> and premium villa dining, including Seminyak, Canggu, Ubud, Uluwatu, Sanur, Nusa Dua, Jimbaran, Kuta, Amed, Sidemen and more. Outer islands such as Nusa Lembongan, Nusa Penida and the Gili Islands can be arranged upon request with logistics confirmed on the proposal.</p>
    <p>No matter where your villa sits, our team arranges delivery, setup and service — coordinated with villa managers when access rules apply. Browse <a href="/locations" class="text-[#7E6410] hover:underline font-medium">locations</a> for area pages, or start with a WhatsApp brief.</p>`,
  },
  {
    id: 'villa',
    type: 'content' as const,
    subtitle: 'Private Villa Caviar Experience',
    title: 'Discreet Service in Your Own Home',
    body: `<p>Many guests prefer enjoying caviar in the privacy of their villa. Our team arrives before your event to prepare the kitchen, chill the champagne, arrange the table and ensure every detail is ready before guests arrive.</p>
    <p>Throughout the evening, your private chef prepares each course while service staff look after food, drinks and pacing. When the evening finishes, your villa is left as we found it — full cleanup included on serviced formats. Combine multi-day meals with <a href="/private-chef-bali" class="text-[#7E6410] hover:underline font-medium">private chef day rates</a> when the caviar night is one highlight of a longer stay.</p>`,
  },
  {
    id: 'yacht',
    type: 'features' as const,
    subtitle: 'Yacht & Luxury Boat Catering',
    title: 'Caviar at Sea',
    features: [
      {
        icon: Ship,
        title: 'Pre-departure prep',
        desc: 'We prepare stations and cold chain before boarding and coordinate timing with your captain.',
      },
      {
        icon: Shell,
        title: 'Seafood towers & oysters',
        desc: 'Fresh oysters, seafood towers and sushi can ride alongside the caviar service.',
      },
      {
        icon: Wine,
        title: 'Champagne on the water',
        desc: 'Chilled service, glassware and sunset canapés for charter days and proposals at sea.',
      },
      {
        icon: Briefcase,
        title: 'VIP & corporate charters',
        desc: 'Discreet VIP catering Bali for client entertainment and executive days out.',
      },
    ],
  },
  {
    id: 'why',
    type: 'content' as const,
    subtitle: 'Why Choose myCHEF Bali',
    title: 'Restaurant-Quality Cuisine with Discreet Hospitality',
    body: `<p>When you book a <strong>private chef caviar Bali</strong> experience with myCHEF you receive experienced private chefs, professional event coordination, luxury service staff, premium ingredients, flexible menus, villa inspections when required, reliable communication, and complete setup and cleanup.</p>
    <p>Every event is planned individually to match your vision, guest numbers and location — the same standard we apply to <a href="/catering" class="text-[#7E6410] hover:underline font-medium">premium catering Bali</a>, weddings and villa parties. We answer the practical questions guests actually ask: how caviar should be eaten, whether it should be served cold (yes — properly chilled), and how to pair it without guesswork on the day.</p>`,
  },
  {
    id: 'faq',
    type: 'faq' as const,
    subtitle: 'Caviar Experience Bali — FAQ',
    title: 'Common Questions',
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Book Your Caviar Experience',
    title: 'Request a Bespoke Caviar Proposal',
    body: `Whether you are planning an intimate evening for two or a luxury celebration with hundreds of guests, myCHEF Bali creates unforgettable caviar experiences with exceptional food, professional service and complete attention to detail. Tell us your date, guest count, villa or yacht, and preferred style — we reply with availability and a written quote.`,
    primaryAction: {
      label: 'WhatsApp Caviar Experience',
      href: WA_LINK,
      external: true,
    },
    secondaryAction: {
      label: 'All Experiences',
      href: '/experiences',
    },
  },
]

const FAQS = [
  {
    question: 'How much does a caviar experience in Bali cost with myCHEF?',
    answer:
      'We quote each caviar experience for guest count, caviar selection, champagne or bar service, staffing and location. There is no public list price on this page — message WhatsApp for a written proposal before any deposit.',
  },
  {
    question: 'Can I book caviar without a private chef?',
    answer:
      'Yes. We can arrange caviar platters and presentation only, or a complete dining experience with chef, butlers and drinks. Tell us which level of service you want in your brief.',
  },
  {
    question: 'Can you provide champagne with caviar?',
    answer:
      'Yes — champagne and sparkling service are popular pairings. Depending on your event and local supply, you may provide bottles or ask us to source them; costs are itemised on the proposal. See also <a href="/experiences/champagne-oyster-experience">champagne & oyster</a> and <a href="/in-villa-service/sommelier">sommelier service</a>.',
  },
  {
    question: 'How should caviar be served and eaten?',
    answer:
      'Serve chilled on ice or a cold surface. Use a non-reactive spoon (mother-of-pearl or similar — metal can affect flavour). Taste a little alone first, then with blini and crème fraîche if you like. Our team handles plating and can guide guests through a short tasting.',
  },
  {
    question: 'What is the difference between Beluga, Oscietra and Siberian caviar?',
    answer:
      'They are different sturgeon grades with distinct textures and flavours — Beluga is often the most exclusive, Oscietra (Osetra) is prized for nutty complexity, and Siberian is a refined option popular for larger groups. We recommend based on availability and your occasion on the quote.',
  },
  {
    question: 'Is caviar worth it for a villa celebration?',
    answer:
      'For guests who want a true luxury moment — proposals, VIP dinners, yacht days — caviar with professional service creates atmosphere that standard canapés cannot. Whether it fits your budget is personal; we quote clearly so you can decide before you commit.',
  },
  {
    question: 'Can we combine oysters and caviar?',
    answer:
      'Yes — oyster and caviar Bali stacks are popular. Start from this page for caviar-led service, or from our <a href="/experiences/champagne-oyster-experience">champagne & oyster experience</a> when live shucking is the hero and caviar is an upgrade.',
  },
  {
    question: 'Can you customise the menu around caviar?',
    answer:
      'Absolutely. Every menu is built around your preferences: canapés only, multi-course fine dining, seafood towers, sushi, or a full wedding cocktail hour. Dietary needs are planned when briefed early.',
  },
  {
    question: 'Do you travel across Bali for caviar service?',
    answer:
      'Yes — island-wide villa and venue service, with outer-island charters on request. Share your exact location in the brief. <a href="/locations">Locations →</a>',
  },
  {
    question: 'Can you cater large luxury and VIP events?',
    answer:
      'Yes. We regularly support private parties, weddings, corporate VIP receptions and product launches with large guest counts, full staffing and production timelines.',
  },
  {
    question: 'Can guests with shellfish allergies join?',
    answer:
      'Caviar is fish roe, not shellfish, but events often include oysters or seafood nearby. Tell us allergies in advance so we plan safe alternatives and station layout. We cannot always guarantee a completely shellfish-free environment if oysters are also served.',
  },
  {
    question: 'How far in advance should I book?',
    answer:
      'Book as early as possible in peak season (July–August, December holidays) to secure premium tins and staffing. Last-minute is sometimes possible — ask on WhatsApp with your date.',
  },
  {
    question: 'Is setup and cleanup included?',
    answer:
      'Yes on serviced formats — we set the station, serve, and restore the villa or yacht service area before we leave.',
  },
  {
    question: 'How do I get a quote?',
    answer:
      'WhatsApp date, guest count, villa or yacht, and whether you want caviar-only or full chef + champagne service — or use <a href="/quote">quote</a> / <a href="/book">book</a>.',
  },
]

const RELATED_PAGES = [
  {
    label: 'Champagne & Oyster Experience',
    href: '/experiences/champagne-oyster-experience',
    desc: 'Live oyster shucking and champagne reception — ideal stack with caviar.',
  },
  {
    label: 'Private Cocktail Party',
    href: '/experiences/private-cocktail-party',
    desc: 'Mobile bar packages for villa parties and VIP nights.',
  },
  {
    label: 'Private Chef Bali',
    href: '/private-chef-bali',
    desc: 'Multi-day villa chef hire around your celebration.',
  },
  {
    label: 'Fine Dining Bali',
    href: '/fine-dining',
    desc: 'Tasting menus and luxury villa dining formats.',
  },
  {
    label: 'Wedding Catering',
    href: '/events/weddings',
    desc: 'Wedding receptions and cocktail-hour production.',
  },
  {
    label: 'In-Villa Service',
    href: '/in-villa-service',
    desc: 'Butlers, waiters, bartenders and sommeliers.',
  },
]

export default function ExperienceCaviarExperiencePage() {
  return (
    <PremiumPage
      slug="experiences/caviar-experience"
      title="Caviar Experience Bali | Luxury Villa Caviar & Champagne Service | myCHEF"
      description="Caviar experience Bali at your villa or yacht — premium caviar, private chef, champagne service and butlers. Intimate tastings to VIP events. Contact for a custom quote."
      seoTitle="Caviar Experience Bali | Luxury Villa Caviar & Champagne Service | myCHEF"
      seoDescription="Caviar experience Bali at your villa or yacht — premium caviar, private chef, champagne service and butlers. Intimate tastings to VIP events. Contact for a custom quote."
      canonicalUrl={CANONICAL}
      h1="Caviar Experience Bali — Luxury Caviar Service at Your Villa or Yacht"
      subtitle="Premium caviar, private chefs, champagne service and discreet hospitality — contact for a bespoke quote"
      heroImage={HERO}
      heroImageAlt="Luxury caviar and champagne experience at a Bali villa terrace"
      ogImage={`https://mychef.id${HERO}`}
      keywords={[
        'caviar experience bali',
        'caviar service bali',
        'luxury caviar bali',
        'private chef caviar bali',
        'villa caviar bali',
        'champagne service bali',
        'oyster and caviar bali',
        'luxury catering bali',
        'yacht catering bali',
        'vip catering bali',
        'premium catering bali',
        'luxury villa dining bali',
      ]}
      highlights={['Premium Selections', 'Champagne & Pairings', 'Villa or Yacht', 'Contact for Quote']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      ctaText="WhatsApp Caviar Experience"
      ctaSubtext="Share date, guest count and villa or yacht — we reply with options and a written proposal."
      extraJsonLd={[
        breadcrumbSchema('Caviar Experience Bali', CANONICAL, 'Experiences', 'https://mychef.id/experiences'),
        faqPageSchema(FAQS.map((f) => ({ question: f.question, answer: f.answer }))),
        serviceSchema(
          'Caviar Experience Bali',
          'Luxury caviar service in Bali at your villa or yacht: premium caviar selections, private chef, champagne pairings, butlers and VIP event staffing. Custom quote only.',
          CANONICAL
        ),
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Caviar Experience Bali — Villa & Yacht Luxury Service',
          description:
            'Private caviar experience in Bali with premium tins, champagne service, private chef and professional hospitality staff. Contact for custom quote.',
          provider: providerRef,
          areaServed: { '@type': 'Place', name: 'Bali, Indonesia' },
          serviceType: 'Luxury caviar catering and private chef experience',
          image: `https://mychef.id${HERO}`,
          url: CANONICAL,
        },
      ]}
    />
  )
}
