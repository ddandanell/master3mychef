import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { Heart, Star, Clock, CheckCircle, Sparkles, Camera } from 'lucide-react'
import type { PageSection } from '@/components/PremiumPage'

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Proposal Dinner Bali',
    title: 'The Perfect Proposal Dinner in Bali: A Private Chef Experience',
    body: `<p>Few places on earth are as naturally suited to a marriage proposal as Bali. The island's light at dusk — golden, warm, almost theatrical — gives even an ordinary evening the texture of a film scene. A private villa in Uluwatu with a clifftop infinity pool, a jungle pavilion in Ubud with firefly-lit frangipani trees, a beachside terrace in Canggu with the sound of waves below: these are settings a restaurant cannot replicate.</p>

    <p>A private chef proposal dinner changes the entire nature of the moment. There is no maître d' hovering, no couple at the next table watching, no fixed kitchen timing that forces the evening to move too fast. The space is entirely yours. The menu was designed around the two of you — her favourite ingredient quietly folded into the third course, his preferred wine already open and breathing. Our Balinese kitchen team coordinates every detail in advance, arriving hours before you do to prepare, set up, and disappear when service begins.</p>

    <p>The result is an evening that feels less like a booking and more like a world created specifically for this moment — because it was. For couples planning a proposal in Bali, a private chef dinner is not the luxurious option. It is simply the right one.</p>`,
  },
  {
    id: 'planning',
    type: 'content' as const,
    subtitle: 'How to Plan It',
    title: 'Planning Your Proposal Dinner: A Step-by-Step Timeline',
    body: `<p>The secret to a flawless proposal dinner is coordination that happens weeks before the night itself. Here is how we approach the planning process with every couple.</p>

    <p><strong>Six weeks out — secure the date and venue:</strong> Contact us as early as possible. Peak Bali season (July–August, December) books quickly, and securing a specific villa date requires advance confirmation. Tell us the villa, the approximate guest count (almost always two), and the occasion. We will confirm availability and send an initial proposal within 24 hours.</p>

    <p><strong>Four weeks out — menu design and dietary brief:</strong> This is where the evening starts to take shape. We discuss her food preferences, his dietary requirements, any ingredients that carry personal significance, and the overall culinary direction you want. We then draft a bespoke 5–7 course menu for your approval. This is also when we discuss champagne and wine pairings.</p>

    <p><strong>Two weeks out — logistics brief:</strong> We coordinate the full logistics — chef arrival time, setup completion, service start time, estimated course timing, and the photographer's arrival window if you are arranging one. We also take your brief on table décor, florals, and candle arrangement. You confirm final details and make the deposit payment.</p>

    <p><strong>The day before — confirmation call:</strong> A brief check-in with you (and only you) to confirm everything is in place: the villa access contact, any last-minute menu adjustments, the ring logistics if you want us involved in the reveal moment.</p>

    <p><strong>The day of — arrival and setup:</strong> Our team arrives 3–4 hours before dinner. By the time you walk in, the table is set, the kitchen is prepped, and the first course is timed to your arrival. You see only the result — not the work.</p>`,
  },
  {
    id: 'menu',
    type: 'content' as const,
    subtitle: 'The Menu',
    title: 'What a Proposal Dinner Menu Looks Like',
    body: `<p>A proposal dinner menu is not simply a tasting menu — it is a curated narrative built around two people. Our Michelin-trained team designs each course to carry the evening forward, building in pace and intensity toward the moment you have planned.</p>

    <p><strong>A typical 6-course proposal menu might move like this:</strong></p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;margin-bottom:0.5rem;">
      <li><em>Amuse-bouche:</em> Smoked Jimbaran tuna on crispy tempeh with yuzu emulsion and microherb</li>
      <li><em>First course:</em> Balinese heritage tomato carpaccio with aged balsamic, Lombok sea salt, and cold-pressed coconut oil</li>
      <li><em>Second course:</em> Seared scallop with black garlic purée, turmeric beurre blanc, and crispy shallots</li>
      <li><em>Third course:</em> House-made tagliolini with slow-braised Balinese duck ragù and shaved black truffle</li>
      <li><em>Main:</em> Grass-fed tenderloin with daun salam jus, roasted local sweet potato, and charred broccolini</li>
      <li><em>Dessert:</em> Dark chocolate ganache with salted palm sugar caramel, candied pandan, and Bali vanilla ice cream</li>
    </ul>

    <p>Champagne service begins on arrival — we recommend opening with a non-vintage Blanc de Blancs and transitioning to a vintage Champagne with the main course for the proposal moment itself. If she prefers natural wines, rosé, or cocktails, we build the pairing around her preferences instead.</p>

    <p>All dietary requirements — vegan, gluten-free, shellfish allergies — are confirmed in advance and handled without fuss. Her plate and his plate can follow entirely different dietary paths while remaining visually and culinarily coherent. This is the level of customisation a restaurant cannot offer.</p>`,
  },
  {
    id: 'features',
    type: 'features' as const,
    subtitle: 'What We Offer',
    title: 'Every Element of Your Proposal Evening',
    features: [
      {
        icon: Heart,
        title: 'Private Villa Setup',
        desc: 'Our Balinese team arrives hours ahead to dress the villa, set the table with linen and crystal, place candles and florals, and prepare the kitchen. When you arrive, everything is already perfect.',
      },
      {
        icon: Sparkles,
        title: 'Custom Menu Design',
        desc: 'A bespoke 5–7 course tasting menu built around your partner\'s preferences, favourite ingredients, and dietary requirements. Not a template — a menu created for this evening.',
      },
      {
        icon: Star,
        title: 'Champagne & Wine Service',
        desc: 'Curated Champagne opening, wine pairings per course, and a full beverages brief. We can pre-chill the bottle you have brought, or source the right Champagne for the moment.',
      },
      {
        icon: Camera,
        title: 'Photographer Coordination',
        desc: 'We time the proposal moment into the evening and coordinate with your photographer on arrival, positioning, and lighting — so the moment is captured without feeling staged.',
      },
      {
        icon: CheckCircle,
        title: 'Flower & Décor Package',
        desc: 'Rose petals, tropical florals, candelabras, and bespoke table arrangements sourced fresh on the day. Brief us on the aesthetic and we execute it — romantic, minimal, lush, or whimsical.',
      },
      {
        icon: Clock,
        title: 'Discretion & Timing',
        desc: 'We coordinate exclusively with you. Your partner sees nothing until the evening itself. Course pacing, the proposal window, and post-yes Champagne are all planned in advance and timed precisely.',
      },
    ],
  },
  {
    id: 'locations',
    type: 'content' as const,
    subtitle: 'Where to Propose',
    title: 'The Best Bali Villa Settings for a Proposal Dinner',
    body: `<p>The location shapes the proposal as much as any other element. Bali's distinct villa landscapes each offer a different kind of beauty — here are the four settings our clients choose most often.</p>

    <p><strong>Uluwatu — Clifftop Drama:</strong> The Bukit Peninsula's limestone clifftops deliver some of the most cinematically dramatic private villa settings in Southeast Asia. An infinity pool that appears to pour directly into the Indian Ocean. Sunset that turns the sky coral and gold. Uluwatu proposal dinners tend to be the most visually striking — and the most photographed. See our <a href="/private-chef/uluwatu" class="text-[#7E6410] hover:underline font-medium">Uluwatu private chef page</a> for villa options in this area.</p>

    <p><strong>Seminyak — Garden Elegance:</strong> Seminyak's mature villa estates — many set around centuries-old frangipani trees and walled tropical gardens — offer a more contained, deeply intimate setting. The lighting is warmer, the sound profile quieter, and the garden-table setup achievable even in smaller villas. See our <a href="/private-chef/seminyak" class="text-[#7E6410] hover:underline font-medium">Seminyak private chef page</a> for details.</p>

    <p><strong>Ubud — Jungle Pavilion:</strong> Ubud's jungle villas sit above river gorges and rice terrace valleys, surrounded by the sound of water and birdsong. A candlelit pavilion set against a backdrop of tropical forest, with mist moving through the valley below, creates a proposal setting unlike anything else on the island. See our <a href="/private-chef/ubud" class="text-[#7E6410] hover:underline font-medium">Ubud private chef page</a>.</p>

    <p><strong>Canggu — Beachside Warmth:</strong> Canggu's villa scene has evolved into one of Bali's most design-forward — modern architecture, open-plan living spaces, and direct beach access. A Canggu beachside proposal dinner works particularly well for couples who want a more contemporary, less traditional Bali aesthetic. See our <a href="/private-chef/canggu" class="text-[#7E6410] hover:underline font-medium">Canggu private chef page</a>.</p>

    <p>We work across all of Bali's villa regions — if your villa is not listed here, <a href="https://wa.me/62089674072020" class="text-[#7E6410] hover:underline font-medium">message us on WhatsApp</a> and we will confirm availability at your specific location.</p>`,
  },
  {
    id: 'pricing',
    type: 'content' as const,
    subtitle: 'Investment',
    title: 'Proposal Dinner Pricing',
    body: `<p>Our proposal dinner packages start from <strong>IDR 3,500,000++ per person</strong> (minimum two persons), which covers the chef, service staff, custom menu design, and all produce. The total investment for a complete proposal evening — including champagne, floral décor, and photographer coordination — typically falls between IDR 7,000,000 and IDR 15,000,000 for two persons, depending on the menu tier and add-ons selected.</p>

    <p><strong>What is included in the base package:</strong></p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;margin-bottom:0.5rem;">
      <li>Chef and service staff (arrival, setup, service, and kitchen clean-down)</li>
      <li>Bespoke 5–6 course menu designed around your preferences</li>
      <li>All premium ingredients and produce sourced fresh on the day</li>
      <li>Table setup with linen, crystal, and candles</li>
      <li>Champagne and wine service coordination (beverages billed separately at cost)</li>
    </ul>

    <p>Floral décor packages, rose petal arrangements, and photographer coordination are available as add-ons. For full pricing across all tiers, see our <a href="/pricing" class="text-[#7E6410] hover:underline font-medium">pricing page</a>. To discuss a bespoke package for your specific vision, <a href="https://wa.me/62089674072020" class="text-[#7E6410] hover:underline font-medium">message us directly on WhatsApp</a> — we respond within the hour.</p>`,
  },
  {
    id: 'faq',
    type: 'faq' as const,
    subtitle: 'Common Questions',
    title: 'Proposal Dinner FAQ',
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Start Planning',
    title: 'Ready to Plan the Perfect Proposal?',
    body: 'Tell us your date, villa location, and vision — we will respond within the hour with a custom proposal.',
    primaryAction: {
      label: 'Message Us on WhatsApp',
      href: 'https://wa.me/62089674072020?text=Hi%20myCHEF%2C%20I%27m%20planning%20a%20proposal%20dinner%20in%20Bali%20and%20would%20love%20to%20discuss%20options.',
      external: true,
    },
    secondaryAction: {
      label: 'View Pricing',
      href: '/pricing',
    },
  },
]

const FAQS = [
  { question: 'How far in advance should I book a proposal dinner?', answer: 'We recommend booking at least 3–4 weeks in advance for standard availability, and 6 weeks or more during peak season (July–August and December). Last-minute requests under 2 weeks may be accommodated depending on availability.' },
  { question: 'Can you keep the dinner a secret from my partner?', answer: 'Absolutely. We coordinate entirely with the proposing partner only. All communication, logistics briefings, and day-of coordination go through you alone. Your partner sees only the finished setting when you arrive together.' },
  { question: 'What if it rains on the evening of the proposal?', answer: 'Most Bali villas have covered pavilions or joglos that work beautifully as indoor alternatives. We confirm a backup setup option for every outdoor dinner during the planning phase.' },
  { question: 'Can you arrange a photographer for the proposal moment?', answer: 'Yes — we have a network of Bali villa photographers who specialise in natural, unobtrusive event photography. We coordinate their timing and positioning. Photographer fees are billed separately.' },
  { question: 'What does a proposal dinner cost in Bali?', answer: 'Base packages start from IDR 3,500,000++ per person (minimum two persons). A complete proposal evening typically totals IDR 7,000,000–15,000,000 for two persons. High-end packages can reach IDR 25,000,000–50,000,000++.' },
  { question: 'Do you handle proposal coordination beyond just the dinner?', answer: 'Yes — floral and rose petal setup, candle arrangements, champagne staging, villa staff briefing, and photographer coordination. We handle everything so you can focus on the moment.' },
]

const RELATED_PAGES = [
  { label: 'Romantic Dinner Bali', href: '/fine-dining/romantic-dinner', desc: 'Private chef romantic dinner experiences for couples in Bali villas.' },
  { label: 'Tasting Menu', href: '/fine-dining/tasting-menu', desc: 'Bespoke tasting menus designed by our Michelin-trained team.' },
  { label: 'Private Chef Bali', href: '/fine-dining/private-chef-bali', desc: 'Full overview of private chef services across Bali.' },
  { label: 'Pricing', href: '/pricing', desc: 'Transparent pricing for all myCHEF packages and event types.' },
  { label: 'Uluwatu Private Chef', href: '/private-chef/uluwatu', desc: 'Private chef services for Uluwatu clifftop villas.' },
  { label: 'Seminyak Private Chef', href: '/private-chef/seminyak', desc: 'Private chef services for Seminyak villas and estates.' },
  { label: 'Ubud Private Chef', href: '/private-chef/ubud', desc: 'Private chef services for Ubud jungle and rice terrace villas.' },
]

export default function ProposalDinnerPage() {
  return (
    <PremiumPage
      slug="blog/proposal-dinner-bali-private-chef"
      title="Proposal Dinner Bali: Private Chef for Your Perfect Moment"
      description="Plan the perfect proposal dinner in Bali. Private chef, candlelit villa setup, custom menu. Michelin-trained team. From IDR 3,500,000++. Message us on WhatsApp."
      seoTitle="Proposal Dinner Bali | Private Chef for Your Perfect Moment | myCHEF"
      seoDescription="Plan the perfect proposal dinner in Bali. Private chef, candlelit villa setup, custom menu. Michelin-trained team. From IDR 3,500,000++. Message us on WhatsApp."
      canonicalUrl="https://mychef.id/blog/proposal-dinner-bali-private-chef"
      h1="Proposal Dinner Bali"
      subtitle="A Private Chef Experience for Your Perfect Moment"
      heroImage="/generated/mychef-experience-bali-luna-gallery-1.webp"
      heroImageAlt="Candlelit proposal dinner setup at a Bali villa — private chef romantic dinner experience"
      ogImage="https://mychef.id/generated/mychef-experience-bali-luna-gallery-1.webp"
      keywords={[
        'proposal dinner bali',
        'proposal dinner chef bali',
        'private chef proposal bali',
        'romantic dinner proposal bali villa',
        'bali proposal dinner package',
        'marriage proposal dinner bali',
      ]}
      highlights={['Planning Timeline', 'Custom Menu', 'Villa Locations', 'Pricing']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema(
          'Proposal Dinner Bali',
          'https://mychef.id/blog/proposal-dinner-bali-private-chef',
          'Journal',
          'https://mychef.id/journal'
        ),
        faqPageSchema(FAQS),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Proposal Dinner Bali: Private Chef for Your Perfect Moment',
          description:
            'Plan the perfect proposal dinner in Bali. Private chef, candlelit villa setup, custom tasting menu. Michelin-trained team. From IDR 3,500,000++.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: {
            '@type': 'Organization',
            name: 'myCHEF.id',
            logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' },
          },
          datePublished: '2026-06-29',
          dateModified: '2026-06-29',
          image: 'https://mychef.id/generated/mychef-experience-bali-luna-gallery-1.webp',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://mychef.id/blog/proposal-dinner-bali-private-chef',
          },
          url: 'https://mychef.id/blog/proposal-dinner-bali-private-chef',
          wordCount: 1600,
          keywords:
            'proposal dinner bali, proposal dinner chef bali, private chef proposal bali, romantic dinner proposal bali',
          about: {
            '@type': 'Service',
            name: 'Proposal Dinner Bali — Private Chef',
            provider: { '@type': 'Organization', name: 'myCHEF', url: 'https://mychef.id' },
            areaServed: { '@type': 'Place', name: 'Bali, Indonesia' },
            offers: {
              '@type': 'Offer',
              priceCurrency: 'IDR',
              price: '3500000',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: '3500000',
                priceCurrency: 'IDR',
                unitText: 'per person',
                description: 'Starting price per person, minimum 2 persons',
              },
            },
          },
        },
      ]}
      ctaText="Plan Your Proposal Dinner"
      ctaSubtext="Tell us your date and villa — we will reply within the hour with a bespoke quote."
    />
  )
}
