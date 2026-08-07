import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, serviceSchema } from '@/components/SeoHead'
import { Wine, Shell, Users, Sparkles, GlassWater, PartyPopper, Sun, Waves, Heart, Cake, Briefcase, Shield } from 'lucide-react'
import type { PageSection } from '@/components/PremiumPage'

const WA_LINK = 'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27d%20like%20to%20request%20a%20champagne%20and%20oyster%20proposal%20for%20my%20event%20in%20Bali.%20Please%20send%20details.'
const CANONICAL = 'https://mychef.id/experiences/champagne-oyster-experience'

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Champagne & Oyster Experience Bali',
    title: 'A Private Oyster Bar and Champagne Service, Built Around Your Event',
    image: '/generated/mychef-oyster-champagne-station-pour-bali-landscape.webp',
    imageAlt: 'Oyster bar Bali with champagne service at an elegant private villa',
    body: `<p>Create a private champagne and oyster experience at your Bali villa, wedding, Sunday brunch, birthday, pool party, or corporate event. Our team sources fresh oysters, prepares and shucks them on site, chills and serves the champagne, builds the oyster station, provides the glassware and garnishes, manages service, and handles the final breakdown.</p>

    <ul class="list-disc pl-6 space-y-1">
      <li>Private oyster bar in your villa</li>
      <li>Sunday brunch and daytime events</li>
      <li>Weddings and cocktail receptions</li>
      <li>Birthdays, bridal events and pool parties</li>
      <li>On-site oyster shucking</li>
      <li>Champagne and sparkling-wine service</li>
      <li>Seafood and caviar upgrades</li>
      <li>Professional setup and service staff</li>
      <li>Custom quotation for every event</li>
    </ul>`,
  },
  {
    id: 'formats',
    type: 'features' as const,
    subtitle: 'Choose Your Experience',
    title: 'Six Ways to Serve Oysters and Champagne',
    features: [
      {
        icon: GlassWater,
        title: 'Champagne & Oyster Hour',
        desc: 'The classic pre-dinner reception: fresh oysters on ice, live shucking, mignonette and lemon, champagne service and staff for one to two hours. Ideal for romantic evenings, proposals, anniversaries and sunset gatherings.',
      },
      {
        icon: Sun,
        title: 'Sunday Champagne Brunch',
        desc: 'A fresh oyster station plus champagne, eggs and brunch dishes, smoked salmon, salads, pastries, tropical fruit and desserts — with an optional Bloody Mary and cocktail station. Made for villa Sundays, birthday brunches and bridal groups.',
      },
      {
        icon: Waves,
        title: 'Poolside Oyster Party',
        desc: 'An oyster bar and champagne station by the pool with chilled prawns, seafood platters, canapés, bartenders and full ice and beverage management. Built for villa parties, birthdays and sunset sessions.',
      },
      {
        icon: Heart,
        title: 'Wedding Oyster Bar',
        desc: 'A styled oyster station with live shucking and champagne service for guest arrivals, cocktail hour or the day-after brunch — custom signage, floral styling and waiters, coordinated with your wedding caterer.',
      },
      {
        icon: Cake,
        title: 'Birthday & Bridal Brunch',
        desc: 'Champagne, oysters and a brunch buffet or grazing table with fruit, pastries, floral styling, cake service and music — for milestone birthdays, bridal mornings, bachelorettes and baby showers.',
      },
      {
        icon: Briefcase,
        title: 'Corporate Champagne Reception',
        desc: 'An oyster and seafood station with champagne service, canapés and a professional bar team for product launches, client entertainment and executive events — timed around speeches, with a formal quotation.',
      },
    ],
  },
  {
    id: 'live-shucking',
    type: 'content' as const,
    subtitle: 'Live Entertainment',
    title: 'Live Oyster Shucking at Your Event',
    body: `<p>The oyster station is both food service and part of the event experience. Guests watch the oysters being opened in front of them, ask about the varieties and garnishes, and receive each oyster freshly shucked — never pre-opened in a kitchen an hour earlier.</p>

    <ul class="list-disc pl-6 space-y-1">
      <li>Oysters opened in front of guests</li>
      <li>A chef or trained shucker at the station</li>
      <li>Oyster varieties explained as they are served</li>
      <li>Garnishes added to order</li>
      <li>Continuous replenishment over ice</li>
      <li>Suited to receptions and social events</li>
      <li>Optional personalised tasting sequence</li>
    </ul>`,
  },
  {
    id: 'oysters',
    type: 'content' as const,
    subtitle: 'The Oysters',
    title: 'Oyster Selection, Sourcing and Presentation',
    body: `<p>We source the freshest oysters available for your date — availability and variety depend on the season and the market, and we confirm exactly what will be served when we quote. Premium imported varieties can be arranged where supply allows.</p>

    <p>Served classically on crushed ice with mignonette, shallot and fresh lemon — or prepared as grilled oysters, baked oysters, a Rockefeller-style gratin, or with Asian-style, citrus or chilli dressings. For guests who prefer something other than shellfish, we can prepare suitable non-shellfish alternatives such as vegetarian canapés, a cheese and fruit station, meat canapés, vegan bites or non-seafood brunch dishes.</p>

    <p><strong>A note on shellfish allergies:</strong> guests with shellfish allergies must inform us before the event. We can prepare suitable non-shellfish alternatives, but because shellfish is handled on site, we cannot guarantee a completely shellfish-free environment.</p>`,
  },
  {
    id: 'champagne',
    type: 'content' as const,
    subtitle: 'Champagne & Drinks',
    title: 'Champagne Service Options and Brunch Drinks',
    body: `<p>A crisp Brut is the classic oyster partner; a Blanc de Blancs is our usual suggestion for purists, rosé champagne suits celebrations, and a good Prosecco-style sparkling keeps larger parties flowing happily. Our <a href="/in-villa-service/sommelier" class="text-[#7E6410] hover:underline font-medium">private sommelier service</a> can guide champagne selection and pairing for special occasions.</p>

    <p><strong>Service levels:</strong> you can supply your own champagne, have myCHEF source bottles at an agreed cost, or choose a standard sparkling-wine, premium champagne or rosé champagne package. Free-flow service is available for a defined period — the duration and service limits are agreed in writing before the event. A champagne tasting or a champagne-and-cocktail combination can also be arranged, alongside a non-alcoholic sparkling option.</p>

    <p><strong>Brunch and party drinks:</strong> Bloody Mary, Mimosa, Bellini, Aperol Spritz, French 75, Espresso Martini, non-alcoholic spritzes, fresh juice, sparkling water, coffee and tea — with <a href="/in-villa-service/bartenders" class="text-[#7E6410] hover:underline font-medium">bartenders for villa parties</a> or a full <a href="/experiences/private-cocktail-party" class="text-[#7E6410] hover:underline font-medium">champagne and cocktail party</a> setup if the event calls for it.</p>`,
  },
  {
    id: 'menu',
    type: 'content' as const,
    subtitle: 'Beyond Oysters',
    title: 'Build Your Seafood and Brunch Menu',
    image: '/generated/mychef-oyster-champagne-seafood-station-bali-landscape.webp',
    imageAlt: 'Seafood and oyster station setup at a Bali villa brunch event',
    body: `<p><strong>Chilled seafood:</strong> king prawns, crab, lobster, scallops, ceviche, tuna or salmon tartare, and full seafood towers.</p>

    <p><strong>Luxury additions:</strong> <a href="/experiences/caviar-experience" class="text-[#7E6410] hover:underline font-medium">caviar experience</a> with blinis and crème fraîche, smoked salmon, truffle canapés, wagyu bites, premium cheeses and charcuterie — or <a href="/catering/grazing-tables" class="text-[#7E6410] hover:underline font-medium">a luxury grazing table in Bali</a> running alongside the oyster station.</p>

    <p><strong>Brunch food:</strong> eggs Benedict, an omelette station, brioche and pastries, avocado toast, salads, tropical fruit, pancakes and desserts — see also our <a href="/catering/villa-catering" class="text-[#7E6410] hover:underline font-medium">private villa brunch catering</a> for larger spreads.</p>

    <p>Many guests continue the occasion with a <a href="/fine-dining/tasting-menu" class="text-[#7E6410] hover:underline font-medium">champagne and oyster tasting dinner</a> or a <a href="/fine-dining/private-chef-bali" class="text-[#7E6410] hover:underline font-medium">private seafood dinner</a> after the reception — we time the station to flow straight into whatever comes next.</p>`,
  },
  {
    id: 'styling',
    type: 'content' as const,
    subtitle: 'Station Design',
    title: 'Oyster Bar Styling',
    body: `<p>The station can be styled to match the event: classic white and silver, tropical Bali, Mediterranean coastal, black and gold, wedding floral, poolside casual luxury, rustic wood and linen, modern corporate, romantic candlelight, or a fully branded event station.</p>

    <p>Equipment is provided as needed: ice displays, oyster trays, seafood tower stands, champagne buckets, glassware, linen, signage, menu cards, floral elements, cocktail tables, lighting and serving tools.</p>`,
  },
  {
    id: 'occasions',
    type: 'content' as const,
    subtitle: 'Occasions',
    title: 'Made for Celebrations of Every Kind',
    body: `<p><strong>Weddings.</strong> A <a href="/events/weddings" class="text-[#7E6410] hover:underline font-medium">champagne reception for weddings</a> or a wedding oyster bar for the cocktail hour, guest arrivals or the day-after brunch.</p>

    <p><strong>Villa and pool parties.</strong> A <a href="/events/villa-parties" class="text-[#7E6410] hover:underline font-medium">champagne oyster bar for villa parties</a> with bartenders, music and full poolside service.</p>

    <p><strong>Birthdays and bridal events.</strong> A <a href="/events/birthdays" class="text-[#7E6410] hover:underline font-medium">champagne birthday brunch</a>, bridal morning, bachelorette or baby shower with oysters, brunch food and cake service.</p>

    <p><strong>Corporate events.</strong> <a href="/catering/corporate-catering" class="text-[#7E6410] hover:underline font-medium">Executive event catering</a> for product launches, client entertainment and networking receptions, with formal quotations and timed service.</p>

    <p><strong>Romantic occasions.</strong> The original champagne and oyster hour — proposals, anniversaries and quiet evenings that deserve an opening act.</p>`,
  },
  {
    id: 'included',
    type: 'features' as const,
    subtitle: "What's Included",
    title: 'Everything the Experience Covers',
    features: [
      {
        icon: Shell,
        title: 'Fresh Oysters',
        desc: 'Sourced for your date, kept on ice until service, with classic and dressed preparations.',
      },
      {
        icon: Users,
        title: 'Live Shucking Station',
        desc: 'A trained shucker opening oysters in front of your guests, with continuous replenishment.',
      },
      {
        icon: Wine,
        title: 'Champagne Service',
        desc: 'Customer-supplied, sourced at agreed cost, or a package — chilled and served throughout.',
      },
      {
        icon: Sparkles,
        title: 'Styling & Equipment',
        desc: 'Ice displays, glassware, linen, signage, florals and cocktail tables matched to your event.',
      },
      {
        icon: PartyPopper,
        title: 'Service Staff',
        desc: 'Waiters, bartenders and an event lead scaled to your guest count and format.',
      },
      {
        icon: Shield,
        title: 'Setup & Breakdown',
        desc: 'Full setup before guests arrive and a complete clean-down afterwards — the villa is left as found.',
      },
    ],
  },
  {
    id: 'pricing',
    type: 'content' as const,
    subtitle: 'Pricing',
    title: 'How Champagne and Oyster Pricing Works',
    body: `<p>Every champagne and oyster experience is quoted individually. Pricing depends on guest count, oyster quantity and variety, champagne selection, event duration, food additions, styling, staffing, equipment, location, and service format. We can quote a short oyster hour, a full Sunday brunch, a wedding oyster bar, or a larger champagne party.</p>

    <p>To keep things transparent, the service package — oysters, catering, setup, equipment and staff — is quoted separately from the champagne. Champagne can be supplied by you, or sourced by myCHEF at an agreed bottle cost confirmed before you commit. Nothing is hidden inside a package price.</p>

    <p>Available from six guests, subject to a minimum booking value.</p>

    <p><a href="${WA_LINK}" class="text-[#7E6410] hover:underline font-medium">Request a Champagne and Oyster Proposal — WhatsApp +62 896-7407-2020</a></p>`,
  },
  {
    id: 'process',
    type: 'content' as const,
    subtitle: 'How Booking Works',
    title: 'From Brief to Breakdown',
    body: `<p><strong>1. Share the brief.</strong> Event type, date, villa or venue, guest count, duration and the style you have in mind.</p>

    <p><strong>2. Receive an itemised proposal.</strong> Oysters, food, champagne service level, staffing, styling and equipment — each shown separately.</p>

    <p><strong>3. Confirm and secure the date.</strong> The team, sourcing and equipment are scheduled once the booking is confirmed.</p>

    <p><strong>4. Sourcing.</strong> Oysters and seafood are ordered for your date; champagne is supplied by you or sourced at the agreed cost.</p>

    <p><strong>5. Setup.</strong> We arrive ahead of service — typically 60–90 minutes for a reception, longer for brunch or styled events — and build the station.</p>

    <p><strong>6. Service.</strong> Live shucking, champagne service and food run to the agreed timeline.</p>

    <p><strong>7. Breakdown and cleanup.</strong> Equipment is collected and the area is left as found.</p>`,
  },
  {
    id: 'areas',
    type: 'related' as const,
    title: 'Available Across Bali',
    links: [
      { label: 'Oyster Bar Seminyak', href: '/locations/seminyak', desc: 'Villa receptions and sunset oyster hours in the heart of Seminyak.' },
      { label: 'Champagne Brunch Canggu', href: '/locations/canggu', desc: 'Sunday brunches and poolside parties across Canggu and Berawa.' },
      { label: 'Private Oyster Bar Uluwatu', href: '/locations/uluwatu', desc: 'Clifftop villas with room for styled stations and larger receptions.' },
      { label: 'Wedding Oyster Bar Nusa Dua', href: '/locations/nusa-dua', desc: 'Resort-area weddings and celebrations with calm beachside settings.' },
      { label: 'Champagne Experience Jimbaran', href: '/locations/jimbaran', desc: 'Bay-side villas and seafood-led celebrations by the water.' },
      { label: 'Villa Brunch Sanur', href: '/locations/sanur', desc: 'Relaxed beachside brunches and family celebrations on the east coast.' },
      { label: 'Private Event Catering Ubud', href: '/locations/ubud', desc: 'Jungle villas and retreat venues for brunches and intimate receptions.' },
    ],
  },
  {
    id: 'enquiry',
    type: 'cta' as const,
    subtitle: 'Plan the Experience',
    title: 'Request a Champagne and Oyster Proposal',
    body: 'Tell us the event type, date, villa or area, guest count and duration — plus your oyster and champagne preferences — and we will reply within the hour with an itemised proposal.',
    primaryAction: {
      label: 'Request a Champagne and Oyster Proposal',
      href: WA_LINK,
      external: true,
    },
    secondaryAction: {
      label: 'Use the Detailed Enquiry Form',
      href: '/quote',
    },
  },
]

const FAQS = [
  { question: 'Can you organize a Sunday champagne brunch in our villa?', answer: 'Yes. A fresh oyster station with live shucking, champagne service and a full brunch spread — eggs, smoked salmon, salads, pastries, tropical fruit and desserts — plus an optional Bloody Mary or cocktail station.' },
  { question: 'Can we book an oyster bar for a villa party?', answer: 'Yes. The poolside oyster party format adds chilled prawns, seafood platters, canapés, bartenders and full ice and beverage management for birthdays, sunset gatherings and larger villa stays.' },
  { question: 'Do you provide live oyster shucking?', answer: 'Yes. A trained shucker opens the oysters in front of your guests, explains the varieties, adds garnishes to order and keeps the station replenished over ice.' },
  { question: 'Can you cater a wedding cocktail hour?', answer: 'Yes. A styled wedding oyster bar with live shucking, champagne service, custom signage, floral styling and waiters — coordinated with your wedding caterer so nothing clashes.' },
  { question: 'Can we combine oysters with a full brunch?', answer: 'Yes. The oyster station runs as the centrepiece while brunch dishes, pastries, fruit and desserts are served alongside — one team, one timeline.' },
  { question: 'Do you provide champagne, or can we supply our own?', answer: 'Either. You can supply your own bottles, have myCHEF source champagne at an agreed bottle cost, or choose a standard sparkling-wine, premium champagne or rosé package. The champagne cost is always shown separately from the service package.' },
  { question: 'Can you offer free-flow champagne?', answer: 'Yes, for a defined service period. The duration, package and responsible-service limits are agreed in writing before the event.' },
  { question: 'What oyster varieties are available?', answer: 'Availability depends on the season and the market; we confirm the exact varieties when we quote. Premium imported varieties can be arranged where supply allows, and grilled, baked or dressed preparations are available.' },
  { question: 'Can you provide caviar and seafood towers?', answer: 'Yes. Caviar with blinis and crème fraîche can be added to the oyster station, or book a full <a href="/experiences/caviar-experience">caviar experience Bali</a> as the luxury centrepiece. Seafood towers, king prawns, crab, lobster, scallops, ceviche and tartares are available too.' },
  { question: 'Can you add bartenders and cocktails?', answer: 'Yes. Brunch cocktails — Bloody Marys, Mimosas, Bellinis, Aperol Spritz, French 75s — or a full bar team for parties and receptions.' },
  { question: 'Can you provide non-seafood options?', answer: 'Yes. Vegetarian canapés, a cheese and fruit station, meat canapés, vegan bites and non-seafood brunch dishes can be included for guests who prefer them.' },
  { question: 'Is the service suitable for guests with shellfish allergies?', answer: 'Guests with shellfish allergies must inform us before the event. We can prepare suitable non-shellfish alternatives, but because shellfish is handled on site, we cannot guarantee a completely shellfish-free environment.' },
  { question: 'Can the oyster station be set up outdoors?', answer: 'Yes — poolside, on a terrace or in the garden. We plan shaded placement, ice management and continuous replenishment so the oysters stay properly cold even in hot weather.' },
  { question: 'Do you provide ice, glassware, linens and equipment?', answer: 'Yes. Ice displays, oyster trays, champagne buckets, glassware, linen, signage and serving tools are included in the service package, styled to your event.' },
  { question: 'Can the experience continue into a private dinner?', answer: 'Yes. The reception can be timed to flow directly into a private chef dinner or tasting menu — the station closes as the first course is served.' },
  { question: 'Is cleanup included?', answer: 'Yes. Full breakdown, equipment collection and cleanup of the service area are included in every proposal.' },
]

const RELATED_PAGES = [
  { label: 'Caviar Experience Bali', href: '/experiences/caviar-experience', desc: 'Premium caviar with private chef and champagne — villa or yacht, contact for quote.' },
  { label: 'Private Cocktail Party', href: '/experiences/private-cocktail-party', desc: 'A villa cocktail party in Bali with professional bartenders and bar setup.' },
  { label: 'Villa Parties', href: '/events/villa-parties', desc: 'Full-service villa party planning for private pool party catering and events.' },
  { label: 'Wedding Catering', href: '/events/weddings', desc: 'Wedding receptions, cocktail hours and pre-dinner wedding catering.' },
  { label: 'Grazing Tables', href: '/catering/grazing-tables', desc: 'Cheese and charcuterie with champagne — a grazing table beside the oyster bar.' },
]

export default function ExperienceChampagneOysterExperiencePage() {
  return (
    <PremiumPage
      slug="experiences/champagne-oyster-experience"
      title="Oyster Bar Bali | Champagne Brunch, Villa Parties & Events"
      description="Private oyster bar & champagne service in Bali: live shucking, Sunday brunch, villa parties, weddings & corporate receptions. Custom proposals."
      seoTitle="Oyster Bar Bali | Champagne Brunch, Villa Parties & Events"
      seoDescription="Private oyster bar & champagne service in Bali: live shucking, Sunday brunch, villa parties, weddings & corporate receptions. Custom proposals."
      canonicalUrl={CANONICAL}
      h1="Champagne & Oyster Experience in Bali for Brunches, Parties and Private Events"
      subtitle="A Private Oyster Bar with Live Shucking and Champagne Service at Your Villa or Venue"
      heroImage="/generated/mychef-oyster-champagne-station-pour-bali-landscape.webp"
      heroImageAlt="Champagne toast and fresh oysters at an elegant private villa experience in Bali"
      ogImage="https://mychef.id/generated/mychef-oyster-champagne-station-pour-bali-landscape.webp"
      keywords={[
        'oyster bar bali',
        'champagne and oyster experience bali',
        'champagne brunch bali',
        'private oyster bar bali',
        'oyster catering bali',
        'wedding oyster bar bali',
      ]}
      highlights={['Live Oyster Shucking', 'Sunday Brunch to Villa Parties', 'Weddings, Birthdays & Corporate', 'Custom Proposal for Every Event']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema(
          'Oyster Bar Bali',
          CANONICAL,
          'Experiences',
          'https://mychef.id/experiences'
        ),
        serviceSchema(
          'Champagne & Oyster Experience Bali',
          'Private champagne and oyster experiences in Bali: live oyster shucking, champagne service, Sunday brunches, villa parties, wedding oyster bars, birthdays and corporate receptions — full setup, professional staff and complete breakdown at your villa or venue.',
          CANONICAL
        ),
      ]}
      ctaText="Request a Champagne and Oyster Proposal"
      ctaSubtext="Tell us your event, date and villa — we reply within the hour with an itemised champagne and oyster proposal."
    />
  )
}
