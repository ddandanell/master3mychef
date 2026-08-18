import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema, providerRef, serviceSchema } from '@/components/SeoHead'
import {
  Wine,
  Flame,
  Users,
  Ship,
  Briefcase,
  GlassWater,
  UtensilsCrossed,
  Sparkles,
  Heart,
  PartyPopper,
} from 'lucide-react'
import type { PageSection } from '@/components/PremiumPage'

/**
 * /experiences/whiskey-cigar-experience — commercial owner for whiskey tasting + cigar lounge Bali
 * Product rule: contact / WhatsApp for quote only — no public list prices.
 */

const WA_LINK =
  'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27d%20like%20a%20Whiskey%20%26%20Cigar%20Experience%20proposal%20in%20Bali.%20Date%3A%20%20Guests%3A%20%20Villa%20or%20yacht%3A%20'
const CANONICAL = 'https://mychef.id/experiences/whiskey-cigar-experience'
const HERO = '/generated/mychef-whiskey-cigar-experience-bali-hero-villa.webp'
const IMG_TASTING = '/generated/mychef-whiskey-cigar-experience-bali-tasting-glasses.webp'
const IMG_DINNER = '/generated/mychef-whiskey-cigar-experience-bali-steak-dinner.webp'

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Whiskey & Cigar Experience Bali',
    title: 'Luxury Whiskey Tastings, Premium Cigars & Private Chef Experiences',
    image: HERO,
    imageAlt: 'Luxury whiskey glasses and premium cigars on a Bali villa terrace at evening',
    body: `<p>Some evenings deserve more than just dinner. Whether you are celebrating a milestone birthday, entertaining business partners, hosting a gentlemen’s evening, relaxing after a golf day, or simply enjoying a luxury villa with friends, a premium <strong>whiskey and cigar experience</strong> creates an unforgettable atmosphere.</p>

    <p>At myCHEF Bali, we create bespoke <strong>Whiskey &amp; Cigar Experiences</strong> that combine exceptional spirits, premium cigars, <a href="/private-chef-bali" class="text-[#7E6410] hover:underline font-medium">private chefs</a>, butlers and luxury hospitality. Every event is carefully planned so craftsmanship, conversation and pacing sit at the centre of the night — not a rushed bar tray and a half-smoked stub.</p>

    <p>From intimate tastings for two guests to exclusive corporate events for over one hundred people, our team brings everything directly to your villa, private residence, yacht or event venue anywhere in Bali. This page is the commercial home for <strong>whiskey tasting Bali</strong>, <strong>cigar experience Bali</strong> and <strong>cigar lounge Bali</strong> villa formats. We do not publish a fixed public price list — selections, bottle grades and staffing are quoted for your date and guest count. Message WhatsApp for a written proposal.</p>

    <p><strong>Luxury whiskey Bali</strong> evenings work best when the run-of-show is designed as one continuous hospitality plan: welcome pour, guided tasting, dinner courses that respect the spirits, then a cigar lounge window with water, palate cleansers and responsible service. That is the myCHEF difference versus buying a bottle and hoping the villa kit is enough.</p>`,
  },
  {
    id: 'more-than',
    type: 'features' as const,
    subtitle: 'More Than a Whiskey Tasting',
    title: 'Craftsmanship, Conversation and Atmosphere',
    features: [
      {
        icon: Wine,
        title: 'Premium whiskey selection',
        desc: 'Single malts, blends, Japanese whisky, Irish, bourbon, rye and limited editions sourced for your brief.',
      },
      {
        icon: Flame,
        title: 'Premium cigars',
        desc: 'Trusted-supplier cigars with mild to full-bodied options and elegant presentation for first-timers and aficionados.',
      },
      {
        icon: UtensilsCrossed,
        title: 'Private chef dinner',
        desc: 'Steak, wagyu, lobster, oysters, caviar upgrades and cheese boards prepared fresh in your villa kitchen.',
      },
      {
        icon: GlassWater,
        title: 'Cocktail & whiskey bar',
        desc: 'Old Fashioned, Manhattan, Whiskey Sour, Boulevardier, Penicillin and signature whiskey cocktails.',
      },
      {
        icon: Users,
        title: 'Butler & lounge service',
        desc: 'Uniformed staff, ashtrays, seating layout, glassware, bar setup and full cleanup.',
      },
      {
        icon: Sparkles,
        title: 'Luxury table styling',
        desc: 'Tasting mats, water service, lighting and presentation that feel intentional — not improvised.',
      },
    ],
  },
  {
    id: 'perfect-for',
    type: 'content' as const,
    subtitle: 'Perfect For',
    title: 'Evenings Built for Whiskey, Cigars and Good Company',
    body: `<p>Our <strong>private whiskey tasting Bali</strong> and cigar lounge formats are ideal for:</p>
    <ul class="list-disc pl-6 space-y-1">
      <li>Luxury villa evenings and <strong>luxury villa experiences Bali</strong></li>
      <li>Birthday celebrations and milestone nights</li>
      <li><a href="/events/corporate-events" class="text-[#7E6410] hover:underline font-medium">Corporate events Bali</a> and executive dinners</li>
      <li>Business networking and client entertainment</li>
      <li><a href="/blog/bachelor-party-bali-private-chef" class="text-[#7E6410] hover:underline font-medium">Bachelor party Bali</a> villa weekends</li>
      <li>Golf groups after a day on the course</li>
      <li>Yacht charters and <strong>yacht catering Bali</strong> sunsets</li>
      <li>Luxury retreats and private celebrations</li>
      <li><strong>VIP experiences Bali</strong> for discreet high-profile hosts</li>
    </ul>
    <p>Whether the mood is relaxed and informal or a fully catered luxury dinner, we build the experience around your guests — not a one-size script. Many hosts stack this evening with a <a href="/experiences/private-cocktail-party" class="text-[#7E6410] hover:underline font-medium">private cocktail party</a> earlier, or open with a <a href="/experiences/caviar-experience" class="text-[#7E6410] hover:underline font-medium">caviar experience</a> before the whiskey flight.</p>`,
  },
  {
    id: 'whiskey',
    type: 'content' as const,
    subtitle: 'Premium Whiskey Selection',
    title: 'Scotch, Japanese Whisky, Bourbon & Beyond',
    image: IMG_TASTING,
    imageAlt: 'Three whiskey tasting glasses with a premium cigar on a villa table',
    body: `<p>Every whiskey collection is different. Our coordinators work with premium suppliers throughout Bali to source bottles that suit your taste, guest experience level and budget band. Popular categories include:</p>
    <ul class="list-disc pl-6 space-y-1">
      <li><strong>Single Malt Scotch</strong> — Speyside elegance, Highland depth, or peaty Islay when the group wants smoke</li>
      <li><strong>Blended Scotch</strong> — approachable luxury for larger parties</li>
      <li><strong>Japanese Whisky</strong> — refined, often lighter profiles that pair beautifully with food</li>
      <li><strong>Irish Whiskey</strong> — smooth, conversational pours for longer evenings</li>
      <li><strong>American Bourbon</strong> — vanilla, oak and sweetness that love steak and cigar sweetness</li>
      <li><strong>Rye Whiskey</strong> — spice-forward pours that shine in cocktails</li>
      <li><strong>Premium world whisky</strong> and limited edition releases when available</li>
    </ul>
    <p>Whether you enjoy smoky Islay whiskies, smooth Speyside expressions or elegant Japanese whisky, we build a tasting specifically for your event. A guided flight usually moves from lighter to bolder so palates stay clear. We serve proper glassware, room-temperature pours for nosing (whiskey is not typically served ice-cold for serious tasting — a drop of water is optional), and still water between samples.</p>
    <p>Guests often ask <em>why whisky is expensive</em>. Age, cask quality, rarity and import logistics all matter — and the right answer for a villa night is not “the biggest bottle,” but the right sequence for your group. We itemise options on the proposal so you approve the selection before we source.</p>`,
  },
  {
    id: 'cigars',
    type: 'content' as const,
    subtitle: 'Premium Cigars',
    title: 'A Proper Setting for Premium Cigars Bali',
    body: `<p>A great cigar deserves the perfect setting. We source <strong>premium cigars Bali</strong> guests actually want to smoke through trusted suppliers and recommend selections for both experienced aficionados and first-time guests. Popular options include Cuban-style profiles where available, Dominican and Nicaraguan cigars, mild to full-bodied strengths, and luxury presentation with cutters, ashtrays and rest trays.</p>
    <p>Our team can prepare a dedicated <strong>cigar lounge Bali</strong> corner on your terrace or garden: comfortable seating, ashtrays, side tables, water and soft lighting so conversation lasts. Villa rules matter — we confirm smoking zones with hosts and managers so you never discover a restriction mid-event.</p>
    <p><strong>Do whiskey and cigars go together?</strong> Yes, when pairings are thoughtful. Sweeter bourbons often flatter medium cigars; peaty Scotch can match fuller, earthier smokes; lighter Japanese whisky suits milder cigars so neither overwhelms the other. We guide pairings live rather than leaving guests to guess.</p>
    <p><strong>How to pair whiskey and cigars</strong> in practice: taste a little whiskey first, light the cigar, then return to the glass so smoke and spirit meet in sequence. We pace the lounge so people who prefer only whiskey or only a short cigar feel welcome — not pressured into a full night of either.</p>`,
  },
  {
    id: 'food',
    type: 'content' as const,
    subtitle: 'Food Pairings by Private Chefs',
    title: 'Steak, Seafood and Luxury Plates That Honour the Glass',
    image: IMG_DINNER,
    imageAlt: 'Private chef steak dinner with whiskey service at a Bali villa table',
    body: `<p>Whiskey and cigars become more memorable when paired with exceptional food. Our chefs create bespoke menus that complement the selected spirits rather than fighting them with sugar-heavy sauces. Popular dishes include dry-aged steak, wagyu beef, grilled lobster, king prawns, oysters, <a href="/experiences/caviar-experience" class="text-[#7E6410] hover:underline font-medium">caviar</a>, artisan cheeses, charcuterie boards, truffle dishes and handmade desserts.</p>
    <p>Every menu is prepared fresh inside your villa. A classic flow is canapés during the first pour, a main course of steak or seafood during the core tasting, then cheese or dessert as the cigar lounge opens. For hosts who want full <a href="/fine-dining" class="text-[#7E6410] hover:underline font-medium">fine dining Bali</a> ambition, we design a multi-course progression with whiskey pairings noted course-by-course.</p>
    <p><strong>Luxury catering Bali</strong> for this format is not a buffet dropped and left — it is timed production with butlers so plates arrive when conversation peaks, not when the kitchen happens to finish. Dietary needs (including non-drinkers and guests who skip cigars) are planned when briefed early so every seat has a great evening.</p>`,
  },
  {
    id: 'bar',
    type: 'content' as const,
    subtitle: 'Cocktail & Whiskey Bar Service',
    title: 'Classics and a Mobile Whiskey Bar',
    body: `<p>Many guests combine tasting with a luxury cocktail experience. Our professional bartenders prepare Old Fashioned, Manhattan, Whiskey Sour, Boulevardier, Penicillin and signature whiskey cocktails built on the same bottles as the flight — or on dedicated cocktail pours so the tasting bottles stay pure.</p>
    <p>For larger events we provide a complete mobile whiskey bar with premium glassware, ice management and experienced bartenders throughout the evening. Stack with our <a href="/in-villa-service/bartenders" class="text-[#7E6410] hover:underline font-medium">mobile cocktail bar packages</a> or a full <a href="/experiences/private-cocktail-party" class="text-[#7E6410] hover:underline font-medium">private cocktail party</a> plan when the night starts social and ends as a seated tasting.</p>
    <p>Non-alcoholic luxury options are available: zero-alcohol spirits, craft sodas, tea pairings and chef-led mocktails so non-drinkers stay in the same conversation. Responsible service limits are agreed in writing for free-flow formats.</p>`,
  },
  {
    id: 'villa',
    type: 'content' as const,
    subtitle: 'Private Villa Experience',
    title: 'We Arrive Early. You Host Calmly.',
    body: `<p>The majority of our Whiskey &amp; Cigar Experiences take place inside private villas across Bali. Our team arrives before your guests to prepare the kitchen, set up the tasting area, organise the dining table and ensure everything is perfectly presented before the evening begins.</p>
    <p>Throughout the event, chefs prepare every course while service staff handles food, drinks and cleanup, allowing you to simply enjoy your guests. When the last cigar is out and the last glass is rinsed, the villa is left as found — full cleanup is standard on serviced formats.</p>
    <p>For multi-day stays, keep a <a href="/private-chef-bali" class="text-[#7E6410] hover:underline font-medium">private chef</a> for daily meals and reserve one evening as the signature whiskey night. That structure keeps the holiday easy while giving one night a true event feel.</p>`,
  },
  {
    id: 'yacht',
    type: 'features' as const,
    subtitle: 'Yacht & Luxury Boat Experiences',
    title: 'Whiskey, Cigars and Ocean Horizon',
    features: [
      {
        icon: Ship,
        title: 'Sunset cruises',
        desc: 'Prepped bars, chilled glassware and timed service coordinated with your captain.',
      },
      {
        icon: PartyPopper,
        title: 'Birthdays at sea',
        desc: 'Tasting flights and cigar windows timed to light and arrival of guests.',
      },
      {
        icon: Briefcase,
        title: 'Corporate entertaining',
        desc: 'Discreet VIP service for client days out and executive charters.',
      },
      {
        icon: Heart,
        title: 'Proposals & VIP',
        desc: 'Quiet luxury — no loud entertainment unless you ask for it.',
      },
    ],
  },
  {
    id: 'areas',
    type: 'content' as const,
    subtitle: 'Available Across Bali',
    title: 'Island-Wide Service for Villas, Yachts and Venues',
    body: `<p>We travel throughout Bali including Uluwatu, Seminyak, Canggu, Ubud, Nusa Dua, Sanur, Jimbaran, Kuta, Amed, Sidemen, and on request Nusa Lembongan and Nusa Penida. Our team also arranges experiences at private residences, luxury hotels and exclusive event venues when access is approved.</p>
    <p>Browse <a href="/locations" class="text-[#7E6410] hover:underline font-medium">locations</a> for area context, then WhatsApp the exact villa pin — logistics for glassware, ice and cigar seating change with coastal wind, highland humidity and boat transfers. We plan for the real environment, not a studio set.</p>`,
  },
  {
    id: 'why',
    type: 'content' as const,
    subtitle: 'Why Choose myCHEF Bali',
    title: 'Luxury Is Flawless Execution',
    body: `<p>Luxury is about more than premium products. It is about flawless execution. When you book with myCHEF Bali you receive experienced private chefs, professional event coordinators, luxury service staff, premium ingredients, flexible menus, premium whiskey sourcing, cigar sourcing, bartenders and butlers, complete event setup, full cleanup, and reliable communication from first message to final invoice.</p>
    <p>Every experience is designed specifically for your group. We answer the questions guests actually ask: do whiskey and cigars go together (yes, when paced well); should whiskey be cold for tasting (generally no — room temperature for nosing, ice only if you prefer it casual); what whiskey goes well with cigars (we match body to body); and how much it costs (we quote, never guess on a public page).</p>
    <p>Want the full hospitality stack the same week? Add <a href="/experiences/champagne-oyster-experience" class="text-[#7E6410] hover:underline font-medium">champagne &amp; oysters</a>, <a href="/experiences/caviar-experience" class="text-[#7E6410] hover:underline font-medium">caviar</a>, or multi-day chef hire — one WhatsApp thread, one team.</p>`,
  },
  {
    id: 'how-it-works',
    type: 'content' as const,
    subtitle: 'How Booking Works',
    title: 'From Brief to Breakdown',
    body: `<p><strong>1. Share the brief.</strong> Date, guest count, villa or yacht, experience level with whiskey/cigars, food preferences, and whether you want tasting-only or full dinner.</p>
    <p><strong>2. Receive a written proposal.</strong> Bottle options, cigar selection band, chef menu outline, staffing, timing and any boat logistics — itemised.</p>
    <p><strong>3. Confirm and deposit.</strong> We lock sourcing for limited bottles and cigars that need advance procurement.</p>
    <p><strong>4. Setup.</strong> We arrive early to build the tasting station, lounge seating and kitchen plan.</p>
    <p><strong>5. Service.</strong> Guided tasting, dinner, cocktails and cigar window on one timeline.</p>
    <p><strong>6. Cleanup.</strong> Glassware, ashtrays, kitchen and lounge area restored before we leave.</p>`,
  },
  {
    id: 'faq',
    type: 'faq' as const,
    subtitle: 'Whiskey & Cigar Experience Bali — FAQ',
    title: 'Common Questions',
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Book Your Whiskey & Cigar Experience',
    title: 'Request a Bespoke Proposal',
    body: `Whether you’re planning an intimate evening for two, entertaining important clients, or celebrating with friends, myCHEF Bali delivers a refined Whiskey &amp; Cigar Experience with premium spirits, exceptional cuisine and impeccable service. Tell us your date, guest list and location — we create a bespoke plan and a clear written quote.`,
    primaryAction: {
      label: 'WhatsApp Whiskey & Cigar Experience',
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
    question: 'How much does a whiskey and cigar experience in Bali cost?',
    answer:
      'We quote each event for guest count, whiskey selection, cigars, food, staffing and location. There is no public list price on this page — message WhatsApp for a written proposal before any deposit.',
  },
  {
    question: 'Can I book only a whiskey tasting without cigars or dinner?',
    answer:
      'Yes. We can provide a guided whiskey tasting on its own, or combine it with private dining, cocktails, cigars and full butler service.',
  },
  {
    question: 'Can you source premium cigars in Bali?',
    answer:
      'Yes. We work with trusted suppliers based on availability and your preferred strength and origin profiles. Exact labels are confirmed on the proposal.',
  },
  {
    question: 'Can we customise the whiskey selection?',
    answer:
      'Absolutely. We tailor every tasting to flavour preference (smoky, sweet, light, peated), budget band and experience level — from first-timers to collectors.',
  },
  {
    question: 'Do whiskey and cigars go together — how do you pair them?',
    answer:
      'Yes when paced well. We typically taste whiskey first, light the cigar, then return to the glass. Sweeter bourbons suit medium cigars; peaty Scotch often matches fuller smokes; lighter Japanese whisky pairs with milder cigars.',
  },
  {
    question: 'Should whiskey be served cold?',
    answer:
      'For guided tasting we usually serve at room temperature for nosing and flavour. Ice or a drop of water is available if guests prefer a casual serve — we adapt on the night.',
  },
  {
    question: 'Can you combine whiskey, cigars and fine dining?',
    answer:
      'Yes — one of our most popular formats: guided flight, multi-course private chef dinner, then a cigar lounge window. See also <a href="/fine-dining">fine dining</a> and <a href="/private-chef-bali">private chef</a>.',
  },
  {
    question: 'Do you offer whiskey cocktails as well as neat pours?',
    answer:
      'Yes. Old Fashioned, Manhattan, Whiskey Sour, Boulevardier, Penicillin and signatures. Larger groups can add a mobile bar — <a href="/in-villa-service/bartenders">bartender packages</a> / <a href="/experiences/private-cocktail-party">cocktail party</a>.',
  },
  {
    question: 'Is this suitable for bachelor parties and corporate events?',
    answer:
      'Yes. Bachelor villa weekends and corporate client entertainment are common briefs. We adjust energy, duration and menu formality to the group. <a href="/blog/bachelor-party-bali-private-chef">Bachelor catering →</a> · <a href="/events/corporate-events">Corporate events →</a>',
  },
  {
    question: 'Do you travel across Bali and on yachts?',
    answer:
      'Yes — island-wide villas and venues, plus yacht charters with captain coordination. Outer islands on request. <a href="/locations">Locations →</a>',
  },
  {
    question: 'Can non-drinkers or non-smokers join?',
    answer:
      'Yes. We plan zero-alcohol luxury drinks and full dinner for everyone. Cigar lounge seating can be optional; no one is required to smoke or drink.',
  },
  {
    question: 'How far in advance should I book?',
    answer:
      'As early as possible for peak season and rare bottles or specialty cigars that need advance sourcing. Last-minute is sometimes possible — ask with your date on WhatsApp.',
  },
  {
    question: 'Is setup and cleanup included?',
    answer:
      'Yes on serviced formats — tasting station, lounge, kitchen and service areas are restored before we leave.',
  },
  {
    question: 'How do I get a quote?',
    answer:
      'WhatsApp date, guest count, villa or yacht, and whether you want tasting-only or full dinner + cigars — or use <a href="/quote">quote</a> / <a href="/book">book</a>.',
  },
]

const RELATED_PAGES = [
  {
    label: 'Private Cocktail Party',
    href: '/experiences/private-cocktail-party',
    desc: 'Mobile bar and cocktail-led villa parties.',
  },
  {
    label: 'Caviar Experience Bali',
    href: '/experiences/caviar-experience',
    desc: 'Premium caviar with champagne — ideal luxury opener.',
  },
  {
    label: 'Champagne & Oyster',
    href: '/experiences/champagne-oyster-experience',
    desc: 'Oyster bar and champagne reception formats.',
  },
  {
    label: 'Private Chef Bali',
    href: '/private-chef-bali',
    desc: 'Multi-day villa chef hire around your celebration.',
  },
  {
    label: 'Bachelor Party Catering',
    href: '/blog/bachelor-party-bali-private-chef',
    desc: 'Food and bar ideas for villa bachelor weekends.',
  },
  {
    label: 'Corporate Events',
    href: '/events/corporate-events',
    desc: 'Executive dinners and client entertainment.',
  },
]

export default function ExperienceWhiskeyCigarExperiencePage() {
  return (
    <PremiumPage
      slug="experiences/whiskey-cigar-experience"
      title="Whiskey & Cigar Experience Bali | Private Tasting & Lounge | myCHEF"
      description="Whiskey tasting Bali with premium cigars, private chef dinner and butler service at your villa or yacht. Scotch, Japanese whisky, bourbon. Contact for a custom quote."
      seoTitle="Whiskey & Cigar Experience Bali | Private Tasting & Lounge | myCHEF"
      seoDescription="Whiskey tasting Bali with premium cigars, private chef dinner and butler service at your villa or yacht. Scotch, Japanese whisky, bourbon. Contact for a custom quote."
      canonicalUrl={CANONICAL}
      h1="Whiskey & Cigar Experience Bali — Private Tastings, Premium Cigars & Chef Pairings"
      subtitle="Luxury whiskey tasting and cigar lounge service at your villa or yacht — contact for a bespoke quote"
      heroImage={HERO}
      heroImageAlt="Whiskey and cigar experience at a luxury Bali villa terrace"
      ogImage={`https://mychef.id${HERO}`}
      keywords={[
        'whiskey experience bali',
        'whiskey tasting bali',
        'cigar experience bali',
        'cigar lounge bali',
        'luxury whiskey bali',
        'private whiskey tasting bali',
        'premium cigars bali',
        'whisky tasting bali',
        'whiskey and cigar pairing',
        'bachelor party bali',
        'yacht catering bali',
        'vip experiences bali',
        'luxury villa experiences bali',
        'corporate events bali',
      ]}
      highlights={['Guided Tasting', 'Premium Cigars', 'Private Chef Pairings', 'Contact for Quote']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      ctaText="WhatsApp Whiskey & Cigar Experience"
      ctaSubtext="Share date, guest count and villa or yacht — we reply with options and a written proposal."
      extraJsonLd={[
        breadcrumbSchema(
          'Whiskey & Cigar Experience Bali',
          CANONICAL,
          'Experiences',
          'https://mychef.id/experiences'
        ),
        faqPageSchema(FAQS.map((f) => ({ question: f.question, answer: f.answer }))),
        serviceSchema(
          'Whiskey & Cigar Experience Bali',
          'Private whiskey tasting and premium cigar lounge experiences in Bali at your villa or yacht, with private chef food pairings, bartenders and butler service. Custom quote only.',
          CANONICAL
        ),
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Whiskey & Cigar Experience Bali — Villa & Yacht Luxury Service',
          description:
            'Bespoke whiskey tasting Bali with premium cigars, private chef dinner pairings and professional hospitality staff. Contact for custom quote.',
          provider: providerRef,
          areaServed: { '@type': 'Place', name: 'Bali, Indonesia' },
          serviceType: 'Private whiskey tasting and cigar lounge experience',
          image: `https://mychef.id${HERO}`,
          url: CANONICAL,
        },
      ]}
    />
  )
}
