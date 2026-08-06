import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { Wine, Users, Music, Sparkles, GlassWater, UtensilsCrossed } from 'lucide-react'
import type { PageSection } from '@/components/PremiumPage'
import {
  COCKTAIL_FREE_FLOW_NOTE,
  COCKTAIL_IMAGE_PATHS,
  COCKTAIL_MIN_GUESTS,
  COCKTAIL_PACKAGES,
  COCKTAIL_PRICE_FLOOR_DISPLAY,
  COCKTAIL_TAX_NOTE,
  cocktailPackageWaUrl,
  cocktailServiceAggregateOfferSchema,
} from '@/data/cocktailServicePackages'
import {
  COCKTAIL_CLUSTER,
  COCKTAIL_PARTY_OCCASIONS,
  COCKTAIL_PARTY_TIMELINE,
} from '@/data/cocktailSeoCluster'

const WA_LINK = cocktailPackageWaUrl('recommend')
const CANONICAL = 'https://mychef.id/experiences/private-cocktail-party'

const packageTableRows = COCKTAIL_PACKAGES.map(
  (p) => `
        <tr class="border-b border-stone-800">
          <td class="py-3 pr-4 font-semibold">${p.name}</td>
          <td class="py-3 pr-4">${p.priceDisplay} / guest</td>
          <td class="py-3 pr-4">${p.durationLabel}</td>
          <td class="py-3">${p.alcoholShort}. Min ${p.minGuests} guests.</td>
        </tr>`,
).join('')

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Private Cocktail Party Bali',
    title: 'Private Cocktail Party in Bali — Your Villa, One Complete Night',
    image: '/generated/mychef-cocktail-party-bartender-pour-bali-landscape.webp',
    imageAlt:
      'Professional bartender pouring a signature cocktail at a luxury Bali villa infinity pool at sunset',
    body: `<p>A <strong>private cocktail party in Bali</strong> is an occasion — not just a bar invoice. Guests arrive to a villa that already feels like the only venue that matters: welcome pours, a four-cocktail menu, zero-proof options, and a team that runs ice, glassware and last call while you host.</p>

    <p>From twelve friends around a Seminyak pool to eighty guests on an Uluwatu clifftop, the scale changes; the standard does not. The bar layer uses our three complete packages (from <strong>${COCKTAIL_PRICE_FLOOR_DISPLAY} per guest</strong>, minimum ${COCKTAIL_MIN_GUESTS}). Food, waiters, DJ and styling stack on as optional upgrades.</p>

    <p>Package prices and inclusions in full: <a href="/in-villa-service/bartenders" class="text-[#7E6410] hover:underline font-medium">luxury cocktail service packages in Bali</a>. Custom signatures and craft: <a href="/in-villa-service/mixology" class="text-[#7E6410] hover:underline font-medium">private mixology and custom cocktail design in Bali</a>.</p>

    <p><a href="${WA_LINK}" class="text-[#7E6410] hover:underline font-medium">Plan My Cocktail Party — WhatsApp</a>. Send date, villa area, guest count and package preference.</p>`,
  },
  {
    id: 'occasions',
    type: 'content' as const,
    subtitle: 'Occasion types',
    title: 'What kind of private cocktail party are you hosting?',
    body: COCKTAIL_PARTY_OCCASIONS.map(
      (o) =>
        `<h3 class="font-semibold text-lg mt-6 mb-2">${o.title}</h3><p>${o.body}</p>`,
    ).join(''),
  },
  {
    id: 'timeline',
    type: 'content' as const,
    subtitle: 'Run of show',
    title: 'A private cocktail party timeline that actually works',
    body: `<p>Great parties feel effortless because the bar ops are timed. A typical villa cocktail party runs like this:</p>
    <ul class="list-none space-y-3 my-4">
      ${COCKTAIL_PARTY_TIMELINE.map((row) => `<li><strong>${row.t}:</strong> ${row.d}</li>`).join('')}
    </ul>
    <p>We lock last call, zero-proof options and any canapé passes with you before the first guest arrives.</p>`,
  },
  {
    id: 'experience',
    type: 'content' as const,
    subtitle: 'What the night feels like',
    title: 'From Welcome Cocktail to Last Pour',
    body: `<p>Guests arrive to a welcome drink and a bar already set: glassware, ice, garnishes, fresh juices and house-made syrups. Bartenders matched to your headcount keep drinks moving; optional service staff clear and refresh. When the last pour is done, we break the bar down and restore the villa service areas.</p>`,
  },
  {
    id: 'packages',
    type: 'content' as const,
    subtitle: 'The bar layer — same packages sitewide',
    title: 'Cocktail Packages for Your Party',
    image: '/generated/mychef-cocktail-party-cocktails-canapes-bali-landscape.webp',
    imageAlt:
      'Tropical cocktails and canapés on a villa bar overlooking infinity pool and ocean',
    body: `<p>Every private cocktail party uses the same three complete cocktail products as our commercial cocktail page. Choose the bar package first; food and entertainment stack on top.</p>

    <table class="w-full text-left border-collapse my-4 text-sm">
      <thead>
        <tr class="border-b border-stone-700">
          <th class="py-2 pr-4">Package</th>
          <th class="py-2 pr-4">Price (++)</th>
          <th class="py-2 pr-4">Duration</th>
          <th class="py-2">Alcohol</th>
        </tr>
      </thead>
      <tbody>
        ${packageTableRows}
      </tbody>
    </table>

    <p>${COCKTAIL_TAX_NOTE}</p>
    <p>${COCKTAIL_FREE_FLOW_NOTE}</p>
    <p>Deep package comparison: <a href="/in-villa-service/bartenders#packages" class="text-[#7E6410] hover:underline font-medium">luxury cocktail service packages in Bali</a>.</p>

    <p><a href="${WA_LINK}" class="text-[#7E6410] hover:underline font-medium">Get My Cocktail Party Quote — WhatsApp</a>.</p>`,
  },
  {
    id: 'upgrades',
    type: 'content' as const,
    subtitle: 'Optional event upgrades',
    title: 'Food, Staff & Entertainment — Quoted Separately',
    image: COCKTAIL_IMAGE_PATHS.crossSell,
    imageAlt: COCKTAIL_IMAGE_PATHS.crossSellAlt,
    body: `<p>The packages above cover the cocktail service. These upgrades are <strong>not</strong> bundled unless your written proposal says so:</p>
    <ul class="list-disc pl-5 space-y-2 my-4">
      <li>Chef-made canapés and grazing tables</li>
      <li>BBQ or seated private dinner after cocktails</li>
      <li>Waiters and floor service team</li>
      <li>DJ, live music or sound system</li>
      <li>Styling, flowers and decorative bar counter</li>
      <li>Photography and videography</li>
      <li>Wedding or corporate branding</li>
      <li>Guest transport coordination</li>
    </ul>
    <p>Food formats: <a href="/catering" class="text-[#7E6410] hover:underline font-medium">catering</a> · <a href="/events/villa-parties" class="text-[#7E6410] hover:underline font-medium">villa party catering</a> · <a href="/fine-dining" class="text-[#7E6410] hover:underline font-medium">fine dining</a>.</p>`,
  },
  {
    id: 'drinks',
    type: 'content' as const,
    subtitle: 'The drinks',
    title: 'Four Cocktails, Classics & Zero-Proof',
    image: '/generated/mychef-cocktail-party-mobile-bar-detail-bali-landscape.webp',
    imageAlt: 'Premium cocktail tools and spirit bottles on a candlelit villa bar cart at dusk',
    body: `<p>Your menu is built before the party: choose four cocktails for speed and consistency. Classics, modern favourites, tropical serves, spirit-forward options, zero-proof and Bali signatures are all available. For deeper craft and interactive sessions see <a href="/in-villa-service/mixology" class="text-[#7E6410] hover:underline font-medium">private mixology &amp; custom cocktail design in Bali</a>.</p>`,
  },
  {
    id: 'team-proof',
    type: 'content' as const,
    subtitle: 'The team',
    title: 'Professional Bar Setup Before Guests Arrive',
    image: '/generated/mychef-cocktail-party-bartenders-setup-bali-portrait.webp',
    imageAlt: 'Two professional bartenders preparing glassware and ice at a luxury Bali villa outdoor bar',
    body: `<p>Ice, glassware, garnishes and station layout are ready before the first guest. The same standards apply whether you book BYO, free flow or premium — only the spirit tier and service length change.</p>`,
  },
  {
    id: 'features',
    type: 'features' as const,
    subtitle: 'What the party includes',
    title: 'Bar Foundation of a Private Cocktail Party',
    features: [
      {
        icon: GlassWater,
        title: 'Complete Cocktail Packages',
        desc: `BYO, free flow or premium from ${COCKTAIL_PRICE_FLOOR_DISPLAY} per guest — team, setup and cleanup included.`,
      },
      {
        icon: Users,
        title: 'Bartender Team Scaled to Guests',
        desc: 'Staffing matched to headcount so queues never form.',
      },
      {
        icon: Wine,
        title: 'Full Bar Setup',
        desc: 'Glassware, ice, garnishes, syrups, tools and back bar logistics.',
      },
      {
        icon: UtensilsCrossed,
        title: 'Optional Canapés & Dinner',
        desc: 'Chef food quoted separately and timed to the bar.',
      },
      {
        icon: Music,
        title: 'Optional Entertainment',
        desc: 'DJ, music and styling partners coordinated when briefed.',
      },
      {
        icon: Sparkles,
        title: 'Villa-Wide Coverage',
        desc: 'Seminyak, Canggu, Ubud, Uluwatu and beyond — travel noted on quote.',
      },
    ],
  },
  {
    id: 'areas',
    type: 'content' as const,
    subtitle: 'Where parties land',
    title: 'Villa Cocktail Parties Across Bali',
    body: `<p><strong>Uluwatu</strong> — clifftop sundowners and premium free flow for wedding welcomes. <strong>Seminyak</strong> — garden and poolside elegance for birthdays and hens nights. <strong>Canggu</strong> — contemporary social energy and longer parties. <strong>Ubud</strong> — pavilion and jungle settings with a quieter rhythm. We confirm logistics for your exact villa on WhatsApp.</p>
    <p>Compare neighbourhood dining context on our <a href="/locations" class="text-[#7E6410] hover:underline font-medium">Bali locations hub</a>.</p>`,
  },
  {
    id: 'guest-planning',
    type: 'content' as const,
    subtitle: 'Guest counts',
    title: 'How many people for a villa cocktail party?',
    body: `<p>Most private cocktail parties sit between <strong>10 and 60 guests</strong>. Under 10, we still quote the package minimum. Over 60, we plan multi-station bars and extra floor staff so queues never form.</p>
    <p>Tell us mixed drinkers vs zero-proof needs early — it changes shopping lists for BYO and free-flow stock plans for supplied packages.</p>`,
  },
  {
    id: 'keyword-split',
    type: 'content' as const,
    subtitle: 'Right page, right intent',
    title: 'Cocktail party vs packages vs mixology',
    body: `<p>This page owns <strong>private cocktail party Bali</strong> — the occasion, timeline and add-ons.</p>
    <p>For the commercial package table and free-flow rules, go to <a href="/in-villa-service/bartenders" class="text-[#7E6410] hover:underline font-medium">luxury cocktail service packages in Bali</a>.</p>
    <p>For botanical signatures and interactive craft, go to <a href="/in-villa-service/mixology" class="text-[#7E6410] hover:underline font-medium">private mixology and custom cocktail design in Bali</a>.</p>
    <p>For full food production without a cocktail-first brief, see <a href="/events/villa-parties" class="text-[#7E6410] hover:underline font-medium">villa party catering</a>.</p>`,
  },
  {
    id: 'faq',
    type: 'faq' as const,
    subtitle: 'Private Cocktail Party Bali — FAQ',
    title: 'Common Questions',
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Plan Your Party',
    title: 'Ready to Host Your Private Cocktail Party in Bali?',
    body: `<p>Tell us your date, villa and guest count — we reply with a package recommendation and optional upgrades. Compare <a href="/in-villa-service/bartenders">luxury cocktail service packages in Bali</a>, craft menus via <a href="/in-villa-service/mixology">private mixology in Bali</a>, or full food production on <a href="/events/villa-parties">villa party catering</a>.</p>`,
    primaryAction: {
      label: 'Plan My Cocktail Party',
      href: WA_LINK,
      external: true,
    },
    secondaryAction: {
      label: 'Luxury Cocktail Packages',
      href: '/in-villa-service/bartenders',
    },
  },
]

const FAQS = [
  {
    question: 'How much does a private cocktail party cost in Bali?',
    answer: `The bar layer uses complete packages from <strong>${COCKTAIL_PRICE_FLOOR_DISPLAY} per guest</strong> (BYO, 6 hours, min ${COCKTAIL_MIN_GUESTS}). Free flow IDR 1,300,000++ / guest (4h). Premium IDR 1,700,000++ / guest (6h). Food and entertainment are quoted separately.`,
  },
  {
    question: 'Is this bartender-only hire?',
    answer:
      'No. Packages are complete cocktail services (team, four cocktails, equipment, setup and cleanup). See <a href="/in-villa-service/bartenders">luxury cocktail &amp; bartender service packages</a>.',
  },
  {
    question: 'Is alcohol included?',
    answer:
      'BYO: you supply spirits. Free Flow and Premium include standard or premium spirits for the approved four-cocktail menu.',
  },
  {
    question: 'Can we add canapés and a DJ?',
    answer:
      'Yes — listed as optional upgrades and priced on the proposal. Not automatic in the bar package.',
  },
  {
    question: 'How many cocktails per guest should we plan?',
    answer:
      'For free flow, service is unlimited from the agreed four-cocktail menu during the window (responsible service applies). For BYO, we help size the shopping list to headcount and duration.',
  },
  {
    question: 'Can you create zero-proof options?',
    answer:
      'Yes. Zero-proof serves are standard on the menu board. Deeper craft: <a href="/in-villa-service/mixology">mixology</a>.',
  },
  {
    question: 'Which areas do you cover?',
    answer: 'Island-wide villa coverage. <a href="/locations">Locations →</a>',
  },
  {
    question: 'Deposit and cancellation?',
    answer: 'Typically 50% deposit; balance before the event. <a href="/cancellation">Policy →</a>',
  },
  {
    question: 'Can cocktails lead into a seated dinner?',
    answer:
      'Yes — pair with <a href="/fine-dining">fine dining</a>, <a href="/bbq-grill">BBQ</a> or <a href="/catering">catering</a>.',
  },
  {
    question: 'How do I get a quote for a private cocktail party in Bali?',
    answer:
      'WhatsApp date, villa area, guest count, package preference and any food/entertainment upgrades.',
  },
  {
    question: 'What is the difference between this page and luxury cocktail packages?',
    answer:
      'This page plans the <strong>occasion</strong> (timeline, canapés, entertainment). Package prices and free-flow rules live on <a href="/in-villa-service/bartenders">luxury cocktail service packages in Bali</a>.',
  },
  {
    question: 'Can we do a hens party cocktail night at a villa?',
    answer:
      'Yes — very common. Zero-proof options for mixed groups, clear package choice, optional canapés. Same island-wide coverage.',
  },
  {
    question: 'Do you run wedding welcome cocktail parties?',
    answer:
      'Yes — premium packages for longer windows; couple signatures via <a href="/in-villa-service/mixology">private mixology in Bali</a>; coordination with planners on timing.',
  },
  {
    question: 'What if it rains on a poolside cocktail party?',
    answer:
      'We plan covered bar positions during briefing so service continues under shelter whenever the villa allows.',
  },
  {
    question: 'Is this for hotels and beach clubs too?',
    answer:
      'This page is private villa parties. Venue operators should use <a href="/bar-services/">B2B bar services</a>.',
  },
]

const RELATED_PAGES = [
  {
    label: COCKTAIL_CLUSTER.bartenders.inboundAnchor,
    href: COCKTAIL_CLUSTER.bartenders.path,
    desc: COCKTAIL_CLUSTER.bartenders.role,
  },
  {
    label: COCKTAIL_CLUSTER.mixology.inboundAnchor,
    href: COCKTAIL_CLUSTER.mixology.path,
    desc: COCKTAIL_CLUSTER.mixology.role,
  },
  {
    label: 'Villa Party Catering',
    href: '/events/villa-parties',
    desc: 'Full villa party food and production when the brief is food-first.',
  },
  {
    label: 'Bar Services (B2B)',
    href: '/bar-services/',
    desc: 'Venue consulting — separate from private cocktail parties.',
  },
]

export default function ExperiencePrivateCocktailPartyPage() {
  const meta = COCKTAIL_CLUSTER['cocktail-party']
  return (
    <PremiumPage
      slug="experiences/private-cocktail-party"
      title={meta.title}
      description={meta.description}
      seoTitle={meta.title}
      seoDescription={meta.description}
      canonicalUrl={CANONICAL}
      h1={meta.h1}
      subtitle={`Occasion page for private cocktail parties — bar packages from ${COCKTAIL_PRICE_FLOOR_DISPLAY} per guest, food & entertainment optional`}
      heroImage="/generated/mychef-cocktail-party-bartender-pour-bali-landscape.webp"
      heroImageAlt="Professional bartender pouring a signature cocktail at a luxury Bali villa infinity pool at sunset"
      ogImage="https://mychef.id/generated/bartender-hire-bali-cocktail-party.webp"
      keywords={[
        meta.primary,
        ...meta.secondary,
      ]}
      highlights={[
        'Complete Bar Packages',
        'Optional Canapés',
        'Four Cocktail Menu',
        'Bali-Wide Villas',
      ]}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema(
          'Private Cocktail Party Bali',
          CANONICAL,
          'Experiences',
          'https://mychef.id/experiences',
        ),
        faqPageSchema(FAQS),
        cocktailServiceAggregateOfferSchema({
          name: 'Private Cocktail Party Bali — Cocktail Service Packages',
          description: `Private villa cocktail parties in Bali using complete packages from ${COCKTAIL_PRICE_FLOOR_DISPLAY} per guest. Optional food and entertainment quoted separately.`,
          url: CANONICAL,
        }),
      ]}
      ctaText="Plan My Cocktail Party"
      ctaSubtext="Date, villa, guests and package preference — fixed quote on WhatsApp."
    />
  )
}
