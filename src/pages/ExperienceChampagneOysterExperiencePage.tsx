import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema, serviceSchema } from '@/components/SeoHead'
import { Wine, Shell, Clock, Shield, Users, Sparkles } from 'lucide-react'
import type { PageSection } from '@/components/PremiumPage'

const WA_LINK = 'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27m%20interested%20in%20the%20oyster%20bar%20Bali%20Champagne%20%26%20Oyster%20Experience.%20Can%20you%20send%20me%20details%20and%20pricing%3F'
const CANONICAL = 'https://mychef.id/experiences/champagne-oyster-experience'

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Oyster Bar Bali',
    title: 'A Champagne & Oyster Experience in Your Bali Villa',
    image: '/generated/oyster-bar-bali-champagne.webp',
    imageAlt: 'Oyster bar Bali with champagne service at an elegant private villa',
    body: `<p>There is a particular kind of evening that begins with a single oyster and a glass of something cold and golden. It is unhurried, intentional, and quietly luxurious. The myCHEF Champagne & Oyster Experience brings that evening to your villa — not as a catering package, but as a curated private event built around two of the finest pleasures on any table.</p>

    <p>We set up a fresh <strong>oyster bar Bali</strong> experience in your villa, source the best oysters available that day, chill the champagne, and pair everything to the setting and the company. Whether you are celebrating an anniversary, hosting a small group before a larger dinner, or simply want an afternoon that feels like the best kind of indulgence, the experience is designed around the moment.</p>

    <p>Our team handles every detail: sourcing, shucking, plating, champagne service, and cleanup. You do not need to know how to open an oyster or which champagne works best. You only need to choose the setting — poolside in Canggu, a clifftop terrace in Uluwatu, a garden pavilion in Ubud — and we build the rest around you.</p>`,
  },
  {
    id: 'how-it-works',
    type: 'content' as const,
    subtitle: 'How It Works',
    title: 'From Booking to the First Pour',
    image: '/generated/mychef-events-bali-party-medi.webp',
    imageAlt: 'Mediterranean seafood and oyster station setup at a Bali villa event',
    body: `<p>The experience is designed to feel effortless from the first message. We keep the planning process short and precise, because the evening itself should feel spontaneous.</p>

    <p><strong>Step one — tell us the occasion:</strong> Message us with your date, villa location, and guest count. Let us know whether this is a romantic setup for two, a pre-dinner reception for eight, or a poolside gathering for a larger group. We confirm availability and send a tailored proposal within 24 hours.</p>

    <p><strong>Step two — choose your direction:</strong> We discuss oyster quantity, champagne preferences, and any dietary needs. Some guests want a classic French approach with Blanc de Blancs and mignonette; others prefer a looser, tropical setup with rosé and citrus. We tailor the selection to your taste.</p>

    <p><strong>Step three — we arrive and build the station:</strong> On the day, our team arrives with everything needed: oysters on ice, champagne chilled to the right temperature, glassware, linens, and garnish. We set up 60–90 minutes before your guests arrive, then serve and explain each pairing as the evening unfolds.</p>

    <p><strong>Step four — the evening is yours:</strong> We stay through service, refresh the station, manage the champagne, and clear everything away at the end. You host. We work.</p>`,
  },
  {
    id: 'offerings',
    type: 'features' as const,
    subtitle: 'What We Bring',
    title: 'Everything Included in the Oyster Bar Bali Experience',
    features: [
      {
        icon: Shell,
        title: 'Fresh Oysters on Ice',
        desc: 'Oysters selected for quality and freshness, presented on crushed ice with classic garnishes including mignonette, lemon, and shallot.',
      },
      {
        icon: Wine,
        title: 'Curated Champagne',
        desc: 'Champagne and sparkling wine options chosen to match the oysters and the occasion. We guide selection based on your preferences.',
      },
      {
        icon: Users,
        title: 'Private Villa Setup',
        desc: 'We bring the station, glassware, ice, linens, and service team to your villa — poolside, terrace, garden, or dining room.',
      },
      {
        icon: Clock,
        title: 'Timed to Your Evening',
        desc: 'The station is ready before guests arrive and refreshed throughout the experience. Pacing matches your schedule, not ours.',
      },
      {
        icon: Shield,
        title: 'Safe Handling',
        desc: 'All seafood is transported cold, stored on ice, and served within strict food safety windows by trained kitchen staff.',
      },
      {
        icon: Sparkles,
        title: 'Optional Add-Ons',
        desc: 'Extend the experience with caviar, chilled prawns, crab, or a full follow-on dinner. We coordinate everything as one seamless evening.',
      },
    ],
  },
  {
    id: 'oysters',
    type: 'content' as const,
    subtitle: 'The Oysters',
    title: 'Oyster Selection for Your Villa',
    body: `<p>The quality of an oyster experience depends almost entirely on what arrives on the day. We do not promise varieties we cannot source reliably in Bali. Instead, we work with trusted suppliers to secure the freshest oysters available for your date — typically a mix of fine de claire, Pacific, or similarly suited varieties depending on import schedules and local availability.</p>

    <p>Each oyster is checked, cleaned, and kept on ice from the moment it leaves the supplier until it reaches your plate. Our team shucks them on-site, just before service, which means the oyster is still full of its own seawater and flavour when it is handed to you.</p>

    <p>We serve them simply, because that is how oysters are best enjoyed. A classic mignonette of red wine vinegar and shallot. Fresh lemon. Maybe a dash of Tabasco or a ginger-shallot dressing if you prefer an Asian approach. The idea is to let the oyster speak and the champagne lift it.</p>

    <p>If you have a specific variety in mind — Fine de Claire, Gillardeau, Kumamoto, or another — let us know when you book and we will confirm what is possible for your date. Some varieties require advance ordering and are subject to availability.</p>`,
  },
  {
    id: 'champagne',
    type: 'content' as const,
    subtitle: 'The Champagne',
    title: 'Champagne & Sparkling Wine Pairing',
    image: '/generated/mychef-experience-bali-aura-toast.webp',
    imageAlt: 'Champagne being poured at an elegant Bali villa event',
    body: `<p>Champagne and oysters share a quiet logic: both are about restraint, acidity, and a kind of brightness that makes the palate feel alive. The right glass of Champagne turns a good oyster into something memorable.</p>

    <p>We typically recommend a Blanc de Blancs or a crisp non-vintage Brut to open the experience — both styles have the minerality and clean finish that work with oysters without overpowering them. For guests who prefer something softer, a high-quality sparkling rosé or an extra-dry Prosecco can be arranged.</p>

    <p>The selection is always discussed with you before the event. If you have a favourite house or vintage, we will do our best to source it. If you would rather leave the choice to us, we select based on the oysters, the season, and the mood you want to create. Either way, the champagne arrives properly chilled and is opened at the table.</p>

    <p>Champagne and sparkling wines are billed at cost plus sourcing. We are transparent about pricing before you commit, and we never mark up bottles without telling you.</p>`,
  },
  {
    id: 'settings',
    type: 'content' as const,
    subtitle: 'Settings',
    title: 'Where the Experience Works Best',
    body: `<p>The setting matters as much as the food. A Champagne & Oyster Experience works in almost any private villa space, but some setups are naturally more suited to the mood.</p>

    <p><strong>Poolside at sunset:</strong> A long ice bed of oysters beside the pool, champagne in hand, the sky turning coral over the villa. This is the most requested setup for groups of six to twelve and for bachelorette or birthday gatherings.</p>

    <p><strong>Clifftop terrace:</strong> In Uluwatu or the Bukit Peninsula, the combination of oysters, champagne, and an ocean view creates an occasion that feels larger than the guest list. Ideal for proposals, anniversaries, or intimate celebrations.</p>

    <p><strong>Garden pavilion:</strong> For a quieter, more contained evening, a garden table in Seminyak or Ubud surrounded by tropical planting and candlelight creates a sense of privacy that a restaurant cannot match.</p>

    <p><strong>Pre-dinner reception:</strong> The experience also works beautifully as the opening act to a larger private dinner. Guests gather for oysters and champagne for an hour before moving to the main table. We coordinate the timing with the dinner chef so the transition is seamless.</p>`,
  },
  {
    id: 'pricing',
    type: 'content' as const,
    subtitle: 'Investment',
    title: 'Oyster Bar Bali Pricing',
    body: `<p>Pricing for the oyster bar Bali experience depends on guest count, oyster selection, and champagne choice. Because these inputs vary significantly, we quote each event individually rather than publishing a fixed menu price.</p>

    <p><strong>Starting from IDR 950,000 per person</strong> for a standard two-hour experience with fresh oysters, champagne service and full station setup. Premium oyster varieties, extended service, and larger group logistics will adjust the final investment.</p>

    <p><strong>What is typically included in the quote:</strong></p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;margin-bottom:0.5rem;">
      <li>Fresh oysters selected and sourced for your date</li>
      <li>Champagne or sparkling wine selection, chilled and served</li>
      <li>On-site oyster shucking and plating</li>
      <li>Station setup with ice, glassware, linens, and garnishes</li>
      <li>Service staff for the duration of the experience</li>
      <li>Full breakdown and kitchen cleanup</li>
    </ul>

    <p>Add-ons such as caviar, chilled seafood towers, live musicians, floral styling, or a follow-on multi-course dinner can be included in the same proposal. For a full overview of private dining packages, see our <a href="/pricing" class="text-[#7E6410] hover:underline font-medium">pricing page</a>.</p>`,
  },
  {
    id: 'upgrades',
    type: 'content' as const,
    subtitle: 'Make It Bigger',
    title: 'Popular Upgrades for Your Champagne & Oyster Experience',
    body: `<p>The most common upgrade is to extend the oyster bar into a full tasting evening. We add chilled prawns, crab, or a caviar bump station, followed by a multi-course seafood dinner prepared by a private chef. This is a popular format for anniversaries and milestone birthdays.</p>

    <p>For events, an <a href="/events/villa-parties" class="text-[#7E6410] hover:underline font-medium">oyster bar Bali</a> reception is a memorable way to welcome guests before a villa party or wedding dinner. We also coordinate live acoustic music, florals, and professional photography on request.</p>`,
  },
  {
    id: 'faq',
    type: 'faq' as const,
    subtitle: 'Common Questions',
    title: 'Champagne & Oyster Experience FAQ',
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Book the Experience',
    title: 'Ready for Oysters and Champagne in Your Villa?',
    body: 'Tell us your date, villa location, and guest count. We will reply within the hour with a tailored proposal.',
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
  { question: 'What is included in the Champagne & Oyster Experience?', answer: 'The experience includes fresh oysters sourced for your date, champagne or sparkling wine service, on-site shucking and plating, station setup with ice and glassware, service staff, and full cleanup. Add-ons such as caviar, seafood towers, or a follow-on dinner can be arranged.' },
  { question: 'How many guests can you cater for?', answer: 'The experience works for intimate groups of 2 guests up to larger villa gatherings of 30 or more. The setup scales depending on your space and guest count. Message us with your numbers and we will design the right station.' },
  { question: 'Which champagne do you serve?', answer: 'We typically suggest a Blanc de Blancs or non-vintage Brut, but the final selection is tailored to your preferences and budget. If you have a preferred house or vintage, let us know and we will source it where possible.' },
  { question: 'Where in Bali do you serve this experience?', answer: 'We serve villas across Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran, Sanur, and surrounding areas. If your villa is outside these main regions, message us and we will confirm logistics.' },
  { question: 'How far in advance should I book?', answer: 'We recommend booking at least 5–7 days in advance to secure the best oyster selection and champagne. During peak season (July–August and December–January), 2–3 weeks is better. Short-notice requests are sometimes possible — ask us.' },
  { question: 'Can you accommodate shellfish allergies or dietary restrictions?', answer: 'Yes. We always ask about allergies and dietary requirements during planning. Guests with shellfish allergies can be offered an alternative seafood or canapé station while the rest of the group enjoys oysters.' },
  { question: 'Can this be part of a larger event?', answer: 'Absolutely. The Champagne & Oyster Experience is a popular pre-dinner reception or poolside opening to a private villa dinner, birthday party, or anniversary celebration. We coordinate timing with the main kitchen team.' },
  { question: 'Are the oysters served raw?', answer: 'Yes. Oysters are shucked fresh on-site and served raw on ice with classic garnishes. If you prefer grilled or baked oysters as part of the menu, we can arrange that on request.' },
  { question: 'Do I need to provide glasses or ice?', answer: 'No. We bring all glassware, ice, linens, shucking tools, and serving equipment. You only need to provide the space and the guests.' },
  { question: 'Can I choose the oyster variety?', answer: 'We confirm what is available for your date and can usually offer a choice between two or three varieties. Special orders such as Gillardeau or Kumamoto may require advance notice and are subject to availability.' },
]

const RELATED_PAGES = [
  { label: 'Romantic Dinner Bali', href: '/fine-dining/romantic-dinner', desc: 'Private candlelit dinners for two in your Bali villa.' },
  { label: 'Private Chef Bali', href: '/fine-dining/private-chef-bali', desc: 'Full private chef services for villas across Bali.' },
  { label: 'Events & Celebrations', href: '/events', desc: 'Villa parties, weddings, and corporate events catered end-to-end.' },
  { label: 'Pricing', href: '/pricing', desc: 'Transparent pricing for all myCHEF experiences and services.' },
]

export default function ExperienceChampagneOysterExperiencePage() {
  return (
    <PremiumPage
      slug="experiences/champagne-oyster-experience"
      title="Oyster Bar Bali | Champagne & Oyster Experience | myCHEF"
      description="Book a private oyster bar in Bali with champagne service at your villa. Fresh oysters, live shucking, premium glassware and tailored menus. Enquire now."
      seoTitle="Oyster Bar Bali | Champagne & Oyster Experience | myCHEF"
      seoDescription="Book a private oyster bar in Bali with champagne service at your villa. Fresh oysters, live shucking, premium glassware and tailored menus. Enquire now."
      canonicalUrl={CANONICAL}
      h1="Oyster Bar Bali — Champagne & Oyster Experience at Your Villa"
      subtitle="Fresh Oysters, Curated Champagne, and Private Villa Service"
      heroImage="/generated/oyster-bar-bali-champagne.webp"
      heroImageAlt="Champagne toast and fresh oysters at an elegant private villa experience in Bali"
      ogImage="https://mychef.id/generated/oyster-bar-bali-champagne.webp"
      keywords={[
        'oyster bar Bali',
        'champagne oyster experience Bali',
        'private oyster bar Bali',
        'oyster catering Bali',
        'Bali oyster shucking',
        'luxury villa oysters Bali',
        'seafood bar Bali',
        'Bali champagne and oysters',
      ]}
      highlights={['Fresh Oysters', 'Curated Champagne', 'Villa Setup', 'Tailored Quote']}
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
        faqPageSchema(FAQS),
        serviceSchema(
          'Oyster Bar Bali',
          'A private oyster bar Bali experience in your villa, featuring fresh oysters, curated champagne service, and full in-villa setup.',
          CANONICAL
        ),
      ]}
      ctaText="Book the Experience"
      ctaSubtext="Tell us your date and villa — we will reply within the hour with a bespoke quote."
    />
  )
}
