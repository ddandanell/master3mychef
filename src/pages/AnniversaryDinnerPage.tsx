import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { Heart, Star, Wine, Clock, Camera, Gift } from 'lucide-react'

const SECTIONS = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'The Ultimate Anniversary Celebration',
    title: 'Why a Bali Villa Anniversary Dinner Is Unlike Anything Else',
    image: '/generated/mychef-experience-bali-fine-dining-4.webp',
    imageAlt: 'Intimate anniversary dinner table set on a Bali villa terrace by candlelight',
    body: `<p>A restaurant anniversary dinner is a reservation. A private villa anniversary dinner in Bali is an event built entirely around you.</p>

    <p>When you book a restaurant, you share the room with fifty other couples, each celebrating something of their own. Your waiter is juggling eight tables. The lighting is fixed. The menu is the same for everyone. You are one of many.</p>

    <p>When myCHEF comes to your villa, there are no neighboring tables. The menu we design is drawn from the two of you — your favorite ingredients, the country where you first met, the dish that appeared at your wedding. Our Balinese team sets up quietly while you are at the spa; by the time you walk onto your terrace or garden pavilion, the table is dressed, the candles are lit, and the first glass of champagne is already chilled.</p>

    <p>The evening belongs only to you. The chef plates each course in your villa kitchen and a single discreet server carries it out. Between courses, you have complete silence — the garden, the sound of the rice fields or the ocean, and each other. No interruptions to check on you every four minutes. No background noise. No rush to turn the table.</p>

    <p>This is the difference between dining out and being hosted. myCHEF's anniversary dinners are designed to feel like the latter — whether your milestone is your first year or your fiftieth.</p>`,
  },
  {
    id: 'milestones',
    type: 'content' as const,
    subtitle: 'Milestone Tiers',
    title: 'Every Anniversary Calls for a Different Experience',
    body: `<p>Not every anniversary is the same, and the dinner should reflect that. We scale the menu, service level, and production to match the weight of the milestone you are marking.</p>

    <p><strong>First Anniversary (Paper) — Intimate 4-Course Romance:</strong> Your first year together deserves an elegant introduction to what myCHEF does best. A composed four-course menu: a light amuse-bouche, a shared seafood starter with local tiger prawns, a beautifully plated main, and a dessert with your anniversary date piped in chocolate. Clean, romantic, intimate. From IDR 2,500,000 per person.</p>

    <p><strong>Fifth Anniversary (Wood) — Exploration Menu with Balinese Ingredients:</strong> Five years in, curiosity and comfort coexist. A five-course menu that weaves Indonesian ingredients into a European fine-dining framework — Balinese spice-crusted duck, pandan-infused crème brûlée, local volcanic salt finishing each course. A celebration of where you are and where you have been. From IDR 3,500,000 per person.</p>

    <p><strong>Tenth Anniversary (Tin) — Grand 7-Course Tasting Menu:</strong> A decade together warrants ceremony. A full seven-course tasting menu with wine pairings selected course by course. Amuse-bouche through petit fours, with a sorbet intermezzo to cleanse the palate between the seafood and main courses. The chef personally presents each course at the table. From IDR 5,500,000 per person.</p>

    <p><strong>Twenty-Fifth Anniversary (Silver) — White-Glove Plated Dinner:</strong> Silver service for a silver anniversary. Two servers, a dedicated sommelier, synchronized plating, formal table settings with crisp linen and silver-tone accents. A six-course menu designed collaboratively over several conversations before your arrival. From IDR 7,000,000 per person.</p>

    <p><strong>Fiftieth Anniversary (Gold) — Full Event, Multi-Chef Team:</strong> A golden anniversary is not just a dinner — it is an occasion. We expand the team to accommodate family and close friends, add live music coordination, multi-course family-style service across multiple tables, and a full floristry and candle display. This is a full event production. Pricing on request; typically from IDR 60,000,000 for the evening.</p>`,
  },
  {
    id: 'menu',
    type: 'content' as const,
    subtitle: 'Sample Menu',
    title: 'The Anniversary Tasting Menu: Six Courses for Two',
    body: `<p>Every anniversary menu is built from scratch for your couple. What follows is an example of our signature six-course anniversary tasting menu — representative of the structure and quality you can expect, personalized with your preferences in advance.</p>

    <p><strong>Amuse-Bouche:</strong> A single-bite expression of the evening's theme. Typically a Balinese-spiced tuna tartare on a pressed rice cracker, or truffle-scented wild mushroom velouté in a demitasse — a quiet opening statement that signals what is to come.</p>

    <p><strong>Seafood Starter:</strong> Jimbaran-catch tiger prawns or local lobster, simply prepared to honour the ingredient. Chargrilled and served over a chilled avocado and Balinese lime crème fraîche, topped with micro herbs from our local supplier. Paired with a glass of Nyetimber Classic Cuvée or equivalent.</p>

    <p><strong>Sorbet Intermezzo:</strong> A palate reset between the sea and the land. Our house favourite is yuzu and lemongrass sorbet — clean, aromatic, and light. A moment to pause, refill glasses, and let the evening breathe.</p>

    <p><strong>Wagyu Main:</strong> Australian or Japanese Wagyu striploin, rested and sliced table-side. Accompanied by a truffle jus, seasonal Balinese vegetables, and potato gratin. The centrepiece of the evening — the course that earns the silence that follows it.</p>

    <p><strong>Cheese Course (Optional):</strong> A small curated selection of imported European cheeses with Balinese honey, house-made lavosh, and candied walnuts. Available on request — some couples prefer to move straight to dessert.</p>

    <p><strong>Dessert and Petit Fours:</strong> Dark chocolate fondant with a molten centre, vanilla bean ice cream, and a dusting of edible gold. Your anniversary date and a short message — "Ten years, always you" — piped in 70% Valrhona chocolate on the plate. Petit fours served alongside the final champagne toast of the evening.</p>

    <p>Champagne pairing is available throughout — we recommend a half-bottle of Moët & Chandon or equivalent for the first two courses, transitioning to a red Burgundy with the main, and returning to champagne for dessert.</p>`,
  },
  {
    id: 'features',
    type: 'features' as const,
    subtitle: 'What Is Included',
    title: 'Every Anniversary Dinner Includes',
    features: [
      {
        icon: Heart,
        title: 'Personalized Menu Design',
        desc: 'Before your dinner, we send a short questionnaire — your dietary preferences, the country where you met, your favourite ingredients, any foods with meaning to your relationship. The menu is built around your answers, not from a template.'
      },
      {
        icon: Gift,
        title: 'Villa Decoration and Flowers',
        desc: 'We coordinate with trusted local Balinese florists to arrange fresh tropical flowers and table decoration. Rose petals, floating candles, frangipani centrepieces — tell us the style and we handle the rest, set up before you arrive at the table.'
      },
      {
        icon: Wine,
        title: 'Champagne Toast Service',
        desc: 'Your evening opens with a chilled welcome glass of champagne — served the moment you sit down. We recommend a curated pairing throughout the meal, or we can work with bottles you have brought yourself. No corkage fee.'
      },
      {
        icon: Star,
        title: 'Anniversary Cake Coordination',
        desc: 'We work with Bali\'s best patissiers to arrange a custom anniversary cake — whether a single-tier chocolate ganache for two or a layered creation for a family gathering. Delivered to your villa and integrated into the dessert course.'
      },
      {
        icon: Camera,
        title: 'Photo-Ready Table Styling',
        desc: 'Every table we set is styled to photograph beautifully — layered linen, hand-placed cutlery, intentional candlelight. If you have a photographer joining the evening, let us know and we will time the first course presentation accordingly.'
      },
      {
        icon: Clock,
        title: 'Discreet Service',
        desc: 'Your myCHEF team consists of a Michelin-trained chef and one dedicated server. We are present when needed and invisible when not. No hovering, no check-ins mid-conversation, no third-party catering crews with unfamiliar faces. The evening belongs to you.'
      },
    ],
  },
  {
    id: 'settings',
    type: 'content' as const,
    subtitle: 'Where to Host Your Dinner',
    title: 'The Best Villa Settings for an Anniversary Dinner in Bali',
    body: `<p>Bali offers a remarkable range of private villa environments, and the setting dramatically shapes the character of your anniversary evening. Here are the four settings our couples choose most often — and what makes each one special.</p>

    <p><strong>Garden Pavilions — Seminyak and Canggu:</strong> The classic Bali villa experience. An open-sided bale or garden gazebo surrounded by tropical greenery, lit by oil lamps and candles, with the sounds of frogs and insects filling the night air. Intimate, lush, and quintessentially Balinese. Best suited to couples who want warmth, closeness, and that unmistakable tropical atmosphere. See our <a href="/private-chef/seminyak" class="text-[#C5A028] hover:underline font-medium">Seminyak private chef page</a> for villa options.</p>

    <p><strong>Rice Terrace Views — Ubud:</strong> Dinner at elevation, overlooking sculpted emerald terraces in the fading light. Ubud's valley villas offer an agricultural stillness that is unlike anywhere else on the island. The air is cooler, the pace is slower, and the backdrop is one of the most photographed landscapes in Asia. Ideal for couples who want nature as their companion. See our <a href="/private-chef/ubud" class="text-[#C5A028] hover:underline font-medium">Ubud private chef page</a>.</p>

    <p><strong>Clifftop Infinity Pools — Uluwatu and Bukit Peninsula:</strong> The most dramatic setting in Bali. Dinner on a terrace or pool deck at the cliff's edge, with the Indian Ocean below and the Bali sky overhead. Uluwatu sunsets are among the most celebrated in the world — timing your first course to arrive just as the sky turns orange is something we can absolutely arrange. See our <a href="/private-chef/uluwatu" class="text-[#C5A028] hover:underline font-medium">Uluwatu private chef page</a> for clifftop villa specialists.</p>

    <p><strong>Beachfront — Jimbaran and Sanur:</strong> Sand-adjacent dining with the sound of waves as your backdrop. Jimbaran's calm bay is famous for its seafood and sunsets; Sanur's quieter stretch appeals to couples who prefer a more peaceful, village-feel setting. Both allow for a table positioned as close to the water as your villa permits.</p>

    <p>Not sure which area suits your stay? Tell us your villa address and we will advise on the ideal setup for your specific outdoor space.</p>`,
  },
  {
    id: 'planning',
    type: 'content' as const,
    subtitle: 'Planning Your Evening',
    title: 'How a myCHEF Anniversary Dinner Comes Together',
    body: `<p>Most couples tell us that part of what makes the evening special is how effortless it felt. That is by design. Here is how we make it happen.</p>

    <p><strong>Step 1 — Tell Us About the Two of You:</strong> When you reach out via WhatsApp, we send a short pre-event form. We ask about dietary requirements (allergies, intolerances, preferences), whether you have a milestone to mark and what it means to you, whether you want flowers and decoration, your preferred tone (romantic and quiet, or celebratory and expansive), and whether you have a photographer joining. This takes five minutes and gives us everything we need.</p>

    <p><strong>Step 2 — Menu Design and Confirmation:</strong> Within 48 hours, we send a proposed menu for your approval. We explain each course, the wine pairing logic, and any personal elements we have incorporated — a dish from your home country, the ingredient you mentioned was meaningful to you. You approve, request changes, or add something we missed. Once confirmed, your evening is locked.</p>

    <p><strong>Step 3 — The Chef Arrives While You Are at the Spa:</strong> We ask that you plan to be away from your villa for two to two-and-a-half hours before your dinner time. This is when our Balinese team arrives — the chef begins mise en place in your kitchen, the server arranges the table, the florist delivers and places the flowers, and the champagne goes into the ice. When you return, the villa is transformed.</p>

    <p><strong>Step 4 — Your Evening Begins:</strong> We greet you at the table, pour your welcome champagne, and the first course goes out within ten minutes. From that point, the evening is entirely yours. We time each course to your pace — if you are deep in conversation, we wait. If you want courses closer together, we move accordingly. The evening ends when you are ready for it to end.</p>

    <p><strong>Step 5 — We Leave Quietly:</strong> After dessert, the team clears the table and kitchen, removes all equipment, and departs without fuss. You are left with your villa, your evening, and however you choose to end it.</p>`,
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Reserve Your Anniversary Dinner',
    title: 'Make This Anniversary Unforgettable',
    body: 'Tell us your villa, your date, and your milestone — we will design a menu and evening that reflects exactly that. WhatsApp response within a few hours.',
    primaryAction: { label: 'Plan Your Anniversary Dinner', href: 'https://wa.me/628113803488?text=Hi%20myCHEF%2C%20I%20would%20like%20to%20book%20an%20anniversary%20dinner%20at%20my%20Bali%20villa' },
    secondaryAction: { label: 'View Pricing', href: '/pricing' },
  },
]

const FAQS = [
  {
    question: 'How far in advance should I book an anniversary dinner?',
    answer: 'We recommend a minimum of three weeks in advance for most anniversary dinners — this gives us time to design the menu, source specific ingredients, and coordinate floristry. For milestone anniversaries (10th, 25th, 50th) or bookings during peak Bali season (July–August, Christmas–New Year), six weeks is strongly advised. Last-minute requests are sometimes possible — contact us on WhatsApp and we will be honest about availability.',
  },
  {
    question: 'Can you incorporate something personal into the menu?',
    answer: 'Yes — this is one of the things that sets a myCHEF anniversary dinner apart from a restaurant. Tell us your story: the country where you met, the dish you ate on your first date, the ingredient that means something specific to one of you. We weave these into the menu structure. Common requests include recreating a dish from a meaningful trip, incorporating a cultural dish from one partner\'s home country, or using a specific ingredient (black truffle, a particular variety of seafood) associated with a milestone moment.',
  },
  {
    question: 'Can you arrange flowers and decoration?',
    answer: 'Yes. We coordinate with trusted local Balinese florists who are familiar with our villa setup requirements. You describe the style you want — tropical abundance, minimal and elegant, white roses only, a specific colour palette — and we handle the brief, delivery, and placement. Fresh flowers are typically frangipani, heliconia, orchids, and tropical foliage, all sourced locally in Bali. Floristry is priced separately from the dinner; we send a quote alongside the menu proposal.',
  },
  {
    question: 'What does an anniversary dinner at a Bali villa cost?',
    answer: 'Anniversary dinners start from IDR 2,500,000++ per person for a four-course intimate dinner for two, and range up to IDR 8,000,000++ per person for a full grand tasting menu with white-glove silver service and premium wine pairings. The final cost depends on the number of courses, wine and champagne pairing, group size, decoration, and any specialist ingredients. We send a fully itemised quote after you share your requirements — no surprises.',
  },
  {
    question: 'Do you bring your own equipment?',
    answer: 'Yes. The myCHEF team arrives with a complete portable kitchen setup: induction cooktops, chafing equipment, full plating kit, service ware, linen, and anything else required to work independently of your villa\'s kitchen infrastructure. We use your villa\'s kitchen as a workspace but bring every tool and surface we need. At the end of the evening, we clean and restore everything to how we found it.',
  },
  {
    question: 'What if we want to keep the dinner a surprise for one partner?',
    answer: 'We coordinate exclusively with one partner for surprise anniversary dinners. All communication — WhatsApp messages, menu confirmations, logistics details — goes only to the organising partner. We arrive and set up discreetly while the guest of honour is elsewhere (we recommend the spa or a guided tour), and the reveal is entirely under your control. We have done many surprise anniversary dinners and know how to stay invisible until the right moment.',
  },
]

const RELATED_PAGES = [
  { label: 'Romantic Dinner Bali', href: '/fine-dining/romantic-dinner', desc: 'myCHEF\'s signature romantic dinner experience for couples at Bali villas.' },
  { label: 'Tasting Menu Bali', href: '/fine-dining/tasting-menu', desc: 'Multi-course tasting menus from our Michelin-trained chef team.' },
  { label: 'Birthday Dinners', href: '/events/birthdays', desc: 'Private villa birthday celebrations — intimate or group events.' },
  { label: 'Private Chef Seminyak', href: '/private-chef/seminyak', desc: 'Private chef services for Seminyak and Canggu villas.' },
  { label: 'Private Chef Ubud', href: '/private-chef/ubud', desc: 'Anniversary and romantic dinners in Ubud\'s rice terrace villas.' },
  { label: 'Private Chef Uluwatu', href: '/private-chef/uluwatu', desc: 'Clifftop villa dinners on the Bukit Peninsula.' },
  { label: 'Pricing Guide', href: '/pricing', desc: 'Full pricing for all myCHEF menus and service levels.' },
]

export default function AnniversaryDinnerPage() {
  return (
    <PremiumPage
      slug="blog/anniversary-dinner-villa-bali"
      title="Anniversary Dinner Bali Villa | Private Chef for Milestone Celebrations | myCHEF"
      description="Celebrate your anniversary with a private chef dinner at your Bali villa. Custom menu, intimate setup, Michelin-trained team. From IDR 2,500,000++ per person."
      seoTitle="Anniversary Dinner Bali Villa | Private Chef for Milestone Celebrations | myCHEF"
      seoDescription="Celebrate your anniversary with a private chef dinner at your Bali villa. Custom menu, intimate setup, Michelin-trained team. From IDR 2,500,000++ per person."
      canonicalUrl="https://mychef.id/blog/anniversary-dinner-villa-bali"
      h1="Anniversary Dinner Bali Villa"
      subtitle="Private Chef for Milestone Celebrations — Intimate, Personalized, Unforgettable"
      heroImage="/generated/mychef-experience-bali-fine-dining-4.webp"
      heroImageAlt="Romantic anniversary dinner table set on a Bali villa terrace by candlelight, styled by myCHEF"
      ogImage="https://mychef.id/generated/mychef-experience-bali-fine-dining-4.webp"
      keywords={['anniversary dinner bali villa', 'anniversary private chef bali', 'romantic dinner bali villa', 'private chef anniversary bali', 'milestone dinner bali', 'villa anniversary dinner bali']}
      highlights={['Why a Villa Dinner', 'Milestone Tiers', 'Sample Menu', 'Villa Settings']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema('Anniversary Dinner Bali Villa', 'https://mychef.id/blog/anniversary-dinner-villa-bali', 'Blog', 'https://mychef.id/blog'),
        faqPageSchema(FAQS.map(f => ({ question: f.question, answer: f.answer }))),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Anniversary Dinner Bali Villa | Private Chef for Milestone Celebrations',
          description: 'Celebrate your anniversary with a private chef dinner at your Bali villa. Custom menu, intimate setup, Michelin-trained team. From IDR 2,500,000++ per person.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: {
            '@type': 'Organization',
            name: 'myCHEF.id',
            logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' },
          },
          datePublished: '2026-06-29',
          dateModified: new Date().toISOString().split('T')[0],
          image: 'https://mychef.id/generated/mychef-experience-bali-fine-dining-4.webp',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://mychef.id/blog/anniversary-dinner-villa-bali' },
          url: 'https://mychef.id/blog/anniversary-dinner-villa-bali',
          wordCount: 1700,
          keywords: 'anniversary dinner bali villa, anniversary private chef bali, romantic dinner bali villa, milestone dinner bali',
        },
      ]}
      ctaText="Plan Your Anniversary Dinner"
      ctaSubtext="Tell us your villa, your date, and your milestone — we design the menu and handle every detail from flowers to champagne."
    />
  )
}
