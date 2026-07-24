import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { Wine, Users, Music, Sparkles, Clock, GlassWater } from 'lucide-react'
import type { PageSection } from '@/components/PremiumPage'

const WA_LINK = 'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27m%20interested%20in%20bartender%20hire%20Bali%20for%20a%20private%20cocktail%20party.%20Can%20you%20share%20availability%20and%20pricing%3F'
const CANONICAL = 'https://mychef.id/experiences/private-cocktail-party'

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Bartender Hire Bali',
    title: 'Host a Private Cocktail Party in Bali with a Personal Bartender & Bar Team',
    image: '/generated/bartender-hire-bali-cocktail-party.webp',
    imageAlt: 'Bartender hire Bali service crafting cocktails at a private villa party',
    body: `<p>Professional <strong>bartender hire Bali</strong> service is the fastest way to turn a beautiful villa into the only venue that matters. Whether you are celebrating a birthday, an anniversary, a villa welcome, a corporate retreat, or simply a night worth remembering, the right cocktail party brings people together without the queues, closing times, or generic drinks lists of a public bar.</p>

    <p>At myCHEF, we design private cocktail parties as complete experiences. A dedicated bartender or bar team arrives with everything needed to serve a tailored drinks menu, from classic cocktails and Bali-inspired signatures to zero-proof options for guests who prefer not to drink. Meanwhile, our kitchen team prepares a flowing selection of canapés, grazing boards, and small plates designed to match the pace and style of the party.</p>

    <p>The result is an evening that feels curated rather than catered. Guests move freely between the pool, the lounge, and the terrace. Music plays at the volume you choose. Drinks are served exactly when hands are empty. And you are free to actually enjoy your own party instead of managing it.</p>`,
  },
  {
    id: 'experience',
    type: 'content' as const,
    subtitle: 'The Experience',
    title: 'What Happens at a myCHEF Private Cocktail Party',
    body: `<p>Every private cocktail party begins with a brief. We ask about the occasion, the guest count, the villa layout, the desired mood, and any drink preferences or dietary requirements that matter. From there we build a tailored plan: the bar setup location, the cocktail menu, the food pairing, the staffing ratio, and the service timing.</p>

    <p>On the day, our team arrives well before the first guest. We set up the bar with glassware, ice, garnishes, fresh juices, and house-made syrups. The kitchen prepares canapés and grazing elements so that food appears continuously rather than in formal courses. When guests arrive, they are greeted with a welcome cocktail and the evening begins naturally.</p>

    <p>Throughout the event, our bartenders and service staff read the room. They adjust pace, refresh drinks, clear glasses, and keep the food flowing. When the party winds down, we break down the bar, restore the kitchen, and leave the villa as we found it. You wake up to memories, not mess.</p>

    <p>This is the standard we apply whether the party is for twelve friends in a Seminyak villa or eighty guests at a clifftop estate in Uluwatu. The scale changes; the attention to detail does not.</p>`,
  },
  {
    id: 'menu',
    type: 'content' as const,
    subtitle: 'Cocktails & Canapés',
    title: 'What We Serve at a Private Cocktail Party',
    image: '/generated/mychef-events-bali-villa-parties-bar.webp',
    imageAlt: 'Stylish private bar setup at a Bali villa cocktail party',
    body: `<p>The drinks menu is the centrepiece of any cocktail party. Our bartenders build each menu around your preferences and the occasion, balancing recognisable classics with signatures that feel specific to Bali and to your group.</p>

    <p><strong>Cocktail menus typically include:</strong></p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;margin-bottom:0.5rem;">
      <li><em>Classics done properly:</em> Negroni, Old Fashioned, Margarita, Mojito, Espresso Martini, and Aperol Spritz</li>
      <li><em>Bali-inspired signatures:</em> Cocktails built with local arak, fresh tropical fruit, pandan, lemongrass, torch ginger, and Balinese spices</li>
      <li><em>Zero-proof options:</em> Sophisticated mocktails using house shrubs, cold-pressed juices, and herbal infusions so non-drinking guests feel equally considered</li>
      <li><em>Champagne and wine service:</em> Bubbles on arrival, chilled rosé, and a concise wine selection matched to the food</li>
      <li><em>Beer, spirits, and mixers:</em> A tailored back bar based on what your guests actually drink</li>
    </ul>

    <p><strong>Food is designed to match the drinks:</strong></p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;margin-bottom:0.5rem;">
      <li>Passed canapés such as tuna tartare on crispy wonton, chicken satay skewers, and compressed watermelon with feta</li>
      <li>Grazing boards with cured meats, local cheeses, marinated olives, and artisan bread</li>
      <li>Station-style small plates for longer parties, including bao buns, tacos, and Balinese-style skewers</li>
      <li>Dietary-specific alternatives prepared separately and served with the same care</li>
    </ul>

    <p>Menus are confirmed in advance and can be adjusted for vegan, gluten-free, halal, or allergy requirements without compromising on presentation or flavour.</p>`,
  },
  {
    id: 'features',
    type: 'features' as const,
    subtitle: 'What Is Included',
    title: 'Everything Included in Bartender Hire Bali',
    features: [
      {
        icon: GlassWater,
        title: 'Custom Cocktail Menu',
        desc: 'A drinks list designed around your occasion and guest preferences, from classics to Bali-inspired signatures and zero-proof options.',
      },
      {
        icon: Users,
        title: 'Bartender & Service Team',
        desc: 'Professional bartenders and service staff matched to your guest count, with discreet, attentive service throughout the event.',
      },
      {
        icon: Wine,
        title: 'Full Bar Setup',
        desc: 'We bring glassware, ice, garnishes, syrups, tools, and the back bar — everything needed for a polished private bar experience.',
      },
      {
        icon: Sparkles,
        title: 'Canapés & Grazing',
        desc: 'Chef-prepared bites and boards designed to complement the drinks and keep guests satisfied without slowing the party.',
      },
      {
        icon: Music,
        title: 'Atmosphere Coordination',
        desc: 'We coordinate placement, lighting, and service timing to match the mood — relaxed sundowner, elegant soirée, or high-energy celebration.',
      },
      {
        icon: Clock,
        title: 'End-to-End Management',
        desc: 'Planning, shopping, setup, service, and clean-down are all handled by our team so you can be a guest at your own party.',
      },
    ],
  },
  {
    id: 'planning',
    type: 'content' as const,
    subtitle: 'How It Works',
    title: 'Planning Your Private Cocktail Party from First Message to Last Drink',
    image: '/generated/mychef-service-bali-hero-bartenders.webp',
    imageAlt: 'Professional bartenders preparing for a private cocktail event in Bali',
    body: `<p>The difference between a good cocktail party and a seamless one is planning. We break the process into clear stages so you always know what is happening and nothing is left to the last minute.</p>

    <p><strong>Step one — send us a brief:</strong> A short WhatsApp message is enough to begin. Include your preferred date, villa location, approximate guest count, and the occasion. If you already know the kind of cocktails or food you want, mention that too. We respond within the hour with availability and initial guidance.</p>

    <p><strong>Step two — menu and logistics design:</strong> We schedule a quick planning call or continue over WhatsApp. Together we confirm the cocktail menu style, canapé selection, bar setup location, service timing, and any dietary requirements. This is also when we discuss whether you would like us to supply beverages or handle only the bar team and mixers.</p>

    <p><strong>Step three — confirmation and deposit:</strong> Once the plan is approved, we send a written confirmation with the menu, staffing, and investment summary. A deposit secures the date and team. From this point, you can focus on your guests while we handle the rest.</p>

    <p><strong>Step four — setup and service:</strong> Our team arrives at the villa ahead of the party to set up the bar, prepare the kitchen, and arrange service stations. When guests arrive, everything is ready. During the event we manage pacing, replenishment, and clean-up discreetly.</p>

    <p><strong>Step five — wrap and restore:</strong> After the final drink is served, we break down the bar, clear glassware, restore the kitchen, and remove all equipment. The villa is left tidy so your evening ends on a high note.</p>`,
  },
  {
    id: 'locations',
    type: 'content' as const,
    subtitle: 'Where We Host',
    title: 'Bali Villa Settings That Suit a Cocktail Party',
    body: `<p>The best cocktail parties take advantage of Bali's indoor-outdoor villa architecture. A private cocktail party works in almost any villa, but certain settings create particularly memorable results.</p>

    <p><strong>Uluwatu — Clifftop Sundowners:</strong> A Uluwatu villa with ocean views is unbeatable for a sunset cocktail party. Guests arrive as the light turns gold, drinks are served by the infinity pool, and the evening settles into a clifftop dinner if you choose to extend. See our <a href="/private-chef/uluwatu" class="text-[#7E6410] hover:underline font-medium">Uluwatu private chef page</a> for more on villa dining in this area.</p>

    <p><strong>Seminyak — Garden & Poolside Elegance:</strong> Seminyak's mature villas with central pools and lush walled gardens are ideal for sophisticated cocktail parties. The contained setting makes service smooth and the atmosphere intimate. See our <a href="/private-chef/seminyak" class="text-[#7E6410] hover:underline font-medium">Seminyak private chef page</a>.</p>

    <p><strong>Canggu — Contemporary Beachside Energy:</strong> Canggu villas tend to be design-forward and social, with open kitchens, pool decks, and space for music. They suit larger cocktail parties and celebrations with a younger, more energetic crowd. See our <a href="/private-chef/canggu" class="text-[#7E6410] hover:underline font-medium">Canggu private chef page</a>.</p>

    <p><strong>Ubud — Jungle Pavilion Gatherings:</strong> For a cocktail party with a different rhythm, Ubud's jungle villas offer pavilions suspended above valleys and rice terraces. The soundscape is birdsong and river water rather than waves. See our <a href="/private-chef/ubud" class="text-[#7E6410] hover:underline font-medium">Ubud private chef page</a>.</p>

    <p>We host cocktail parties across all Bali villa regions. If your villa is not listed, <a href="https://wa.me/6289674072020" class="text-[#7E6410] hover:underline font-medium">message us on WhatsApp</a> and we will confirm logistics for your specific location.</p>`,
  },
  {
    id: 'pricing',
    type: 'content' as const,
    subtitle: 'Investment',
    title: 'Bartender Hire Bali Pricing',
    image: '/generated/mychef-mixology-bali-bar-setup.webp',
    imageAlt: 'Professional mobile bar setup for bartender hire Bali at a private party',
    body: `<p>Pricing for bartender hire Bali depends on guest count, menu complexity, bar package, service duration, and staffing requirements. Because every event is tailored, we quote each party individually after a brief planning call.</p>

    <p><strong>What is included in a typical cocktail party quote:</strong></p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;margin-bottom:0.5rem;">
      <li>Custom cocktail menu design and bartender service</li>
      <li>All bar equipment, glassware, ice, garnishes, and mise en place</li>
      <li>Chef-prepared canapés or grazing boards based on your chosen package</li>
      <li>Service staff for setup, service, and clean-down</li>
      <li>Ingredients and produce sourced fresh for the event</li>
    </ul>

    <p><strong>Starting from IDR 2,500,000 for a 3-hour package</strong> for intimate groups; larger celebrations and premium bar packages are quoted separately.</p>

    <p>Beverages may be billed separately at cost depending on the package structure. Add-ons such as extended service hours, additional bartenders, live stations, themed décor, or photographer coordination can be included on request. For a precise quote for your date and villa, <a href="https://wa.me/6289674072020" class="text-[#7E6410] hover:underline font-medium">message us on WhatsApp</a> — we respond within the hour.</p>`,
  },
  {
    id: 'upgrades',
    type: 'content' as const,
    subtitle: 'Make It Bigger',
    title: 'Popular Upgrades for Your Cocktail Party',
    body: `<p>Many hosts want to extend the cocktail party into a full evening. The most popular upgrades include a live DJ or playlist curation, a roaming oyster or caviar station, a seated dinner after the reception, and a photographer to capture the night. We can also arrange transport coordination for guests staying at nearby villas.</p>

    <p>If you are planning a corporate event or brand activation, ask about branded cocktail menus, custom glassware, and cocktail competition formats that turn the party into a team activity. Whatever the occasion, the <a href="/in-villa-service/bartenders" class="text-[#7E6410] hover:underline font-medium">bartender hire Bali</a> team adapts the service to match.</p>`,
  },
  {
    id: 'faq',
    type: 'faq' as const,
    subtitle: 'Common Questions',
    title: 'Private Cocktail Party FAQ',
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Start Planning',
    title: 'Ready to Host Your Bali Cocktail Party?',
    body: 'Tell us your date, villa location, and guest count — we will reply within the hour with a tailored cocktail party plan.',
    primaryAction: {
      label: 'Message Us on WhatsApp',
      href: WA_LINK,
      external: true,
    },
    secondaryAction: {
      label: 'View Pricing',
      href: '/pricing',
    },
  },
]

const FAQS = [
  { question: 'How many guests can you cater for at a private cocktail party?', answer: 'We host cocktail parties from intimate gatherings of 8–12 guests up to larger villa celebrations of 80 or more. Staffing and bar setup scale accordingly.' },
  { question: 'Do you provide the alcohol, or do we buy it ourselves?', answer: 'We can structure this either way. Some clients prefer a full package where we source all beverages; others provide their own alcohol and we provide the bar team, equipment, and mixers. We will recommend the best option for your event.' },
  { question: 'Can you create non-alcoholic cocktails for some guests?', answer: 'Yes. We design zero-proof cocktails with the same care as alcoholic drinks, using fresh juices, shrubs, herbal infusions, and house-made syrups so every guest has something exceptional in hand.' },
  { question: 'How far in advance should I book bartender hire Bali?', answer: 'We recommend booking at least 2–3 weeks in advance. During peak season (July–August and December), 4–6 weeks is safer. Last-minute requests may be possible depending on availability.' },
  { question: 'What food is served at a cocktail party?', answer: 'We typically serve passed canapés, grazing boards, and station-style small plates. The style and quantity depend on whether the cocktail party is a prelude to dinner or the main event.' },
  { question: 'Do you handle setup and clean-down?', answer: 'Yes. We arrive early to set up the bar and kitchen, and we clean everything down after the event. You should not need to lift a finger.' },
  { question: 'Can you match a theme or special occasion?', answer: 'Absolutely. We can tailor the cocktail menu, garnishes, service style, and food presentation to match birthdays, anniversaries, product launches, weddings, or any other occasion.' },
  { question: 'Which areas of Bali do you cover?', answer: 'We cover Seminyak, Canggu, Uluwatu, Ubud, Jimbaran, Nusa Dua, Sanur, and surrounding villa areas across Bali.' },
  { question: 'Can I book just a bartender without the food?', answer: 'Yes. We offer bartender-only packages where you provide the alcohol and we provide the bar team, equipment, and mixers. This is a popular option for hosts who already have catering arranged.' },
  { question: 'What happens if my guest count changes?', answer: 'Let us know as soon as possible. Small changes can usually be accommodated up to 48 hours before the event. Larger changes may affect staffing and pricing.' },
  { question: 'Do I need a special bar area at my villa?', answer: 'Not necessarily. We can set up a mobile bar by the pool, on a terrace, or in a covered pavilion. During planning we confirm the best location based on your villa layout and guest flow.' },
  { question: 'Is gratuity included in the quote?', answer: 'Gratuity is not automatically added. If you would like to tip the team, you are welcome to do so on the night. We never pressure guests for additional payment.' },
]

const RELATED_PAGES = [
  { label: 'Bar Services Bali', href: '/bar-services', desc: 'Bartender staffing, cocktail menu creation, and full bar management for Bali events.' },
  { label: 'Private Chef Bali', href: '/fine-dining/private-chef-bali', desc: 'Full overview of private chef and dining experiences across Bali.' },
  { label: 'Villa Party Catering', href: '/events/villa-parties', desc: 'Complete villa party catering for celebrations of any size.' },
  { label: 'Pricing', href: '/pricing', desc: 'Transparent pricing for all myCHEF packages and event types.' },
]

export default function ExperiencePrivateCocktailPartyPage() {
  return (
    <PremiumPage
      slug="experiences/private-cocktail-party"
      title="Bartender Hire Bali | Private Cocktail Party in Your Villa | myCHEF"
      description="Hire a bartender in Bali for a private cocktail party at your villa. Custom cocktails, canapés, full bar setup and professional service. WhatsApp myCHEF today."
      seoTitle="Bartender Hire Bali | Private Cocktail Party in Your Villa | myCHEF"
      seoDescription="Hire a bartender in Bali for a private cocktail party at your villa. Custom cocktails, canapés, full bar setup and professional service. WhatsApp myCHEF today."
      canonicalUrl={CANONICAL}
      h1="Bartender Hire Bali — Private Cocktail Party in Your Villa"
      subtitle="A Personal Bartender, Custom Cocktails & Canapés at Your Villa"
      heroImage="/generated/bartender-hire-bali-cocktail-party.webp"
      heroImageAlt="Bartender hire Bali crafting a signature cocktail at a private villa party"
      ogImage="https://mychef.id/generated/bartender-hire-bali-cocktail-party.webp"
      keywords={[
        'bartender hire Bali',
        'private cocktail party Bali',
        'cocktail party chef Bali',
        'private bartender Bali villa',
        'Bali villa cocktail party',
        'cocktail party catering Bali',
        'private cocktail catering Bali',
        'mobile bar Bali',
      ]}
      highlights={['Custom Cocktails', 'Canapés & Grazing', 'Full Bar Setup', 'Bali-Wide Service']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema(
          'Bartender Hire Bali',
          CANONICAL,
          'Experiences',
          'https://mychef.id/experiences'
        ),
        faqPageSchema(FAQS),
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Bartender Hire Bali — Private Cocktail Party',
          description:
            'Hire a bartender in Bali for a private cocktail party with custom cocktails, canapés, and full bar setup in your villa.',
          provider: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          areaServed: { '@type': 'Place', name: 'Bali, Indonesia' },
          serviceType: 'Private Cocktail Party & Bar Service',
          offers: {
            '@type': 'Offer',
            priceCurrency: 'IDR',
            price: '2500000',
            description: 'Starting from IDR 2,500,000 for a 3-hour cocktail party package',
          },
        },
      ]}
      ctaText="Plan Your Cocktail Party"
      ctaSubtext="Tell us your date, villa, and guest count — we will reply within the hour."
    />
  )
}
