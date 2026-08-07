import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { GraduationCap, Home, Users, UtensilsCrossed } from 'lucide-react'

const SECTIONS = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'The myCHEF Approach',
    title: 'Why a Private Villa Cooking Class Beats a Group Tourist Cooking School',
    body: `<p>Every week, thousands of tourists file into group cooking schools in Bali — noisy, crowded kitchens where a guide walks twenty strangers through the same simplified recipes at the same pace. You finish, eat quickly at a communal table, and head back to your villa wondering if you actually learned anything you'll remember when you get home.</p>

    <p>A private villa cooking class with myCHEF is the opposite experience. A working professional chef — someone who has cooked in serious restaurant kitchens — arrives at your villa, sets up in your own kitchen, and teaches you. Exactly you. At your pace. On the dishes you care about. With the techniques that actually transfer to your kitchen at home.</p>

    <p>Bali is one of the finest places on earth to learn to cook. The wet markets open before sunrise with an extraordinary abundance of tropical produce, fresh fish, coconut in every form, and spice combinations that have been refined over centuries. The Balinese food tradition — built around ceremonial offerings, communal feasting, and layered spice pastes called <em>base</em> — is one of the most sophisticated culinary cultures in Southeast Asia. Indonesian cuisine more broadly draws from hundreds of regional traditions across an archipelago of 17,000 islands, each with its own flavour logic. Learning to cook here, with access to fresh ingredients at their source and a chef who has grown up with these flavours, gives you something a cookbook never can.</p>

    <p>After the class, you sit down and eat the meal you cooked — at your own villa table, with your own group, in comfort. No rush, no strangers, no performance. Just excellent food you made yourself and the satisfaction of knowing how it was done.</p>

    <p>Ready to book? The commercial owner page is <a href="/experiences/cooking-class" class="text-[#7E6410] hover:underline font-medium">Cooking Class Bali</a> — contact for a written quote. This article is the how-it-works guide.</p>`,
  },
  {
    id: 'classes',
    type: 'content' as const,
    subtitle: 'Class Menu',
    title: 'Private Cooking Class Experiences',
    body: `<p>Each class is led by a professional myCHEF chef and held at your villa. All classes include ingredient sourcing, hands-on instruction, and a full sit-down meal of what you cooked. Pricing is quoted for group size, cuisine and duration — see our commercial <a href="/experiences/cooking-class" class="text-[#7E6410] hover:underline font-medium">Cooking Class Bali</a> page and WhatsApp for a written proposal (no public list price on this guide).</p>

    <p><strong>Balinese Heritage Class — 3 hours</strong><br/>
    The heart of Balinese cooking: learning to make the foundational spice pastes by hand. Your chef will guide you through <em>base gede</em> (the great paste — shallots, garlic, galangal, lemongrass, turmeric, ginger, candlenuts, shrimp paste) and <em>base wangi</em> (the aromatic paste used in lighter preparations). From there you build dishes: a mock-up of the ceremonial <em>babi guling</em> (slow-roasted spiced pork), <em>lawar</em> (the finely chopped vegetable, coconut, and spice salad central to Balinese ceremonial cuisine), and hand-rolled <em>sate lilit</em> on lemongrass skewers. This class teaches the underlying logic of Balinese flavour — understand the pastes and you can build any dish.</p>

    <p><strong>Indonesian Archipelago Class — 2.5 hours</strong><br/>
    A tour through the greatest hits of Indonesian cuisine: proper <em>rendang</em> from scratch (the slow-braised Padang beef that takes patience and layering), <em>nasi goreng</em> made the right way with day-old rice and a proper kecap manis base, <em>gado-gado</em> with hand-ground peanut sauce, and the cooling dessert <em>es cendol</em> with coconut milk, pandan jelly, and palm sugar syrup. Excellent for groups who want broad Indonesian cooking literacy rather than Bali-specific technique.</p>

    <p><strong>Modern Indonesian Fusion — 3 hours</strong><br/>
    Contemporary Indonesian cuisine technique for confident home cooks who want to go beyond the classics. Your chef demonstrates how Indonesia's flavour palette — sambal heat, coconut richness, tamarind acidity, pandan fragrance — works in modern plated presentations. Focus on professional kitchen technique: sauce reduction, protein cookery, plating composition. Ideal for guests with existing cooking confidence who want to bring Indonesian flavour into their home cooking at a higher level.</p>

    <p><strong>Seafood and Grill Masterclass — 2 hours</strong><br/>
    Bali is surrounded by ocean. This class focuses on whole fish: how to clean and prepare it, how to build a spice marinade that penetrates the flesh, how to manage a charcoal grill for even cooking without burning, and how to construct the range of Balinese sambals (raw, cooked, roasted) that elevate simply-grilled seafood into something remarkable. A practical class that teaches transferable skills for any seafood cooking.</p>

    <p><strong>Plant-Based Bali — 2.5 hours</strong><br/>
    Indonesian and Balinese cuisine has a rich tradition of vegetable-forward cooking — this class explores it fully. Proper <em>tempeh</em> techniques (tempeh goreng, tempeh manis, tempeh as a protein-forward main), jackfruit preparations both green and ripe, coconut-based vegetable curries, and vegan sambal. All dishes are naturally plant-based — no substitution required. Ideal for vegan or vegetarian groups, and eye-opening for omnivores who assume plant-based cooking means compromise.</p>

    <p>Groups typically 2–12. Book via WhatsApp and your chef will confirm ingredients, timing and a written quote within about 2 hours. For sushi-only sessions see the <a href="/experiences/sushi-masterclass" class="text-[#7E6410] hover:underline font-medium">sushi masterclass</a>.</p>`,
  },
  {
    id: 'market-trip',
    type: 'content' as const,
    subtitle: 'Morning Market Add-On',
    title: 'Optional: Sunrise Market Trip with Your Chef',
    body: `<p>The optional morning market add-on transforms the cooking class into a full half-day experience. Your chef picks you up at your villa at 6am — the hour when Bali's traditional markets (<em>pasar</em>) are at their most vibrant and freshest — and takes you directly to the local pasar used by professional cooks and households, not the tourist markets.</p>

    <p>Walking through the market with a professional chef who shops there regularly is genuinely different from going alone. Your chef explains each ingredient as it appears: why this variety of shallot and not that one, what a good turmeric rhizome looks like versus an old one, how to judge freshness in tropical fish without the cold chain cues you'd use at home. You'll see ingredients you may never have encountered — <em>kecombrang</em> (torch ginger flower), <em>daun salam</em> (Indonesian bay leaf), young coconut in every stage of development, fresh <em>tempeh</em> still warm from the maker nearby. Your chef negotiates directly with vendors in Bahasa Indonesia and selects the specific ingredients for your class that morning.</p>

    <p>By the time you return to the villa around 8am, you have a basket of ingredients you understand, a chef who has started prepping, and a significantly deeper connection to the food you're about to cook. The market trip adds roughly two hours and is quoted as a supplement on your proposal — highly recommended for anyone seriously interested in food culture, not just cooking technique.</p>`,
  },
  {
    id: 'features',
    type: 'features' as const,
    subtitle: 'What You Get',
    title: 'Private Cooking Class at Your Villa',
    features: [
      {
        icon: GraduationCap,
        title: 'Professional Instruction',
        desc: 'Your class is led by a trained professional chef — someone with real kitchen experience, not a tourist guide who has memorised a script. Real technique, real feedback, real learning.'
      },
      {
        icon: Home,
        title: 'Your Villa Kitchen',
        desc: 'No commute, no unfamiliar kitchen, no strangers. The class happens in your own villa space, with your group, at your pace. Comfortable, private, and completely yours.'
      },
      {
        icon: Users,
        title: 'Groups 2–12',
        desc: 'From a couple wanting an intimate cooking date to a group of twelve on a villa holiday — all class sizes work. Private instruction throughout: everyone participates, nobody watches from the back.'
      },
      {
        icon: UtensilsCrossed,
        title: 'Eat What You Cook',
        desc: 'The class ends with a full meal of the dishes you prepared. Sit at your own table, open a bottle of wine, and enjoy the food you cooked. No rush, no strangers, no communal canteen.'
      },
    ],
  },
  {
    id: 'gift',
    type: 'content' as const,
    subtitle: 'As a Gift Experience',
    title: 'The Perfect Villa Activity: Couples, Families, and Groups',
    body: `<p>A private cooking class is one of the most memorable activities you can do at a Bali villa — especially for groups looking for something more meaningful than a beach club or spa day. It works across almost every occasion.</p>

    <p><strong>Couples and honeymoons:</strong> A two-person cooking date with a private chef is genuinely romantic. You cook together, learn together, and sit down to a meal you made — with nobody else around. Far more personal than a restaurant booking, and a story worth telling.</p>

    <p><strong>Hen parties and birthday groups:</strong> Add a cooking class as the centrepiece activity of your villa stay. An afternoon of hands-on cooking with a chef ends with a long, celebratory dinner you prepared yourselves. The combination of activity and feast makes it memorable and self-contained — no transport required.</p>

    <p><strong>Family holidays with children:</strong> We have a family-friendly version of every class. Children from age 6 upward participate in age-appropriate tasks: mixing, shaping sate lilit, decorating dessert. The class pace adapts to the group. Kids who cook their own dinner eat it — without negotiation.</p>

    <p><strong>Takeaways every guest receives:</strong> printed recipe cards for every dish cooked in the class, a digital recipe booklet emailed after the session with full ingredient lists and technique notes, and a certificate of completion. The recipes are written for home kitchen replication — you can make these dishes when you get back.</p>`,
  },
  {
    id: 'faq',
    type: 'faq' as const,
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Book Your Class',
    title: 'Private Cooking Class at Your Bali Villa',
    body: 'Tell us your villa, preferred class type, and group size — we\'ll confirm your chef, date and a written quote within about 2 hours. Full commercial details on the <a href="/experiences/cooking-class" class="text-[#7E6410] hover:underline font-medium">Cooking Class Bali</a> page.',
    primaryAction: {
      label: 'Book a Cooking Class',
      href: 'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27d%20like%20to%20book%20a%20private%20cooking%20class%20at%20my%20Bali%20villa.'
    },
    secondaryAction: { label: 'Cooking Class Bali page', href: '/experiences/cooking-class' },
  },
]

const FAQS = [
  { question: 'How do I book a villa cooking class with myCHEF?', answer: 'WhatsApp date, guest count, villa area and cuisine preference. Commercial owner page: <a href="/experiences/cooking-class">Cooking Class Bali</a>. Or use <a href="/book">book</a> / <a href="/quote">quote</a>.' },
  { question: 'How much does a private cooking class cost?', answer: 'We quote each class for group size, cuisine, duration and location — no public list price on this guide. Message WhatsApp for a written proposal. Day-rate chef meals (different product) are on <a href="/pricing">pricing</a> and <a href="/private-chef-bali">private chef</a>.' },
  { question: 'Is the class available island-wide?', answer: 'Yes across major villa regions including Seminyak, Canggu, Ubud, Uluwatu and more. <a href="/locations">Locations</a> · <a href="/experiences/cooking-class">Cooking class</a>.' },
  { question: 'Can you handle dietary requirements?', answer: 'Yes when briefed early — vegan, vegetarian, gluten-free, pork-free and allergy-safe menus when requested.' },
  { question: 'What is included vs extra?', answer: 'Quotes list chef instruction, ingredients for the class dishes, the meal and recipes. Market trips, premium proteins and multi-day programmes are itemised when needed.' },
  { question: 'Deposit and cancellation?', answer: 'Usually 50% deposit; refund tiers on <a href="/cancellation">cancellation</a>.' },
  { question: 'How fast is a proposal?', answer: 'Often within 2–24 hours of a complete brief.' },
  { question: 'Can this combine with other services?', answer: 'Yes — stack with multi-day <a href="/private-chef-bali">private chef</a>, <a href="/catering">catering</a> and a <a href="/in-villa-service/bartenders">mobile cocktail bar</a>. Sushi-only: <a href="/experiences/sushi-masterclass">sushi masterclass</a>.' },
  { question: 'Do you clean up?', answer: 'Yes — kitchen tidy-down after the class and meal is included on serviced formats.' },
  { question: 'Kids welcome?', answer: 'Yes with age-appropriate tasks. Full kids party production: <a href="/experiences/kids-birthday-chef-party">kids birthday chef party</a>.' },
  { question: 'Who is myCHEF?', answer: 'Bali villa hospitality company — chefs, catering, events and staffing. <a href="/about">About</a> · <a href="/why-mychef">Why myCHEF</a>.' },
  { question: 'More questions?', answer: 'See the central <a href="/faq">FAQ</a> and the commercial <a href="/experiences/cooking-class">cooking class</a> page.' },
  { question: 'What deposit do you require?', answer: 'A 50% deposit confirms your booking and locks the date. The balance is typically due before the class. Full terms: <a href="/cancellation">cancellation policy</a>.' },
  { question: 'What does "++" mean on prices?', answer: '"++" means 11% government tax and 10% service charge may apply to quoted amounts. Written quotes show the all-in total before you pay.' },
  { question: 'Which areas of Bali do you cover?', answer: 'Island-wide villa coverage including Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran, Sanur, Berawa and Pererenan. Browse <a href="/locations">locations</a>.' },
  { question: 'How far in advance should I book?', answer: 'A few days is often enough off-peak; one week or more for bespoke menus and peak season. Last-minute is often possible — ask on WhatsApp.' },
  { question: 'Can you accommodate allergies and special diets?', answer: 'Yes — vegan, vegetarian, gluten-free, nut-free, shellfish allergy, pregnancy-safe and halal-sensitive menus when briefed in advance. Guide: <a href="/blog/food-allergies-dietary-requirements-private-chef-bali">food allergies</a>.' },
  { question: 'Do you clean up after the class?', answer: 'Yes — kitchen and service areas restored before we leave on serviced class formats.' },
  { question: 'How do I get a quote?', answer: 'WhatsApp date, guest count, villa area and cuisine. Or use <a href="/quote">quote</a> / <a href="/book">book</a> / <a href="/experiences/cooking-class">cooking class</a>.' },
  { question: 'What if a chef cannot make it?', answer: 'We send a verified replacement of equivalent skill or refund that service. Details: <a href="/why-mychef">why myCHEF</a>.' },
]

const RELATED_PAGES = [
  { label: 'Cooking Class Bali (book)', href: '/experiences/cooking-class', desc: 'Commercial owner page — private villa cooking class, contact for quote.' },
  { label: 'Sushi Masterclass', href: '/experiences/sushi-masterclass', desc: 'Dedicated private sushi making class at your villa.' },
  { label: 'Private Chef Bali', href: '/private-chef-bali', desc: 'Multi-day villa chef hire around your cooking class day.' },
  { label: 'Floating Breakfast Bali', href: '/catering/floating-breakfast', desc: 'The iconic Bali villa floating breakfast — how to book it.' },
  { label: 'Honeymoon Chef Bali', href: '/honeymoon-chef', desc: 'Private chef experiences for honeymoon couples in Bali.' },
  { label: 'Romantic Dinner Bali', href: '/fine-dining/romantic-dinner', desc: 'Candlelit private chef dinner at your villa.' },
]

export default function BaliVillaCookingClassPage() {
  return (
    <PremiumPage
      slug="blog/bali-villa-cooking-class-private-chef"
      title="Private Cooking Classes at Your Bali Villa"
      description="Skip the tourist cooking school. A professional myCHEF chef comes to your Bali villa to teach authentic Indonesian and Balinese cuisine. Groups 2–12."
      seoTitle="Bali Villa Cooking Class Guide | Private Chef Lessons (Support Article) | myCHEF"
      seoDescription="How a private villa cooking class works in Bali — formats, market trip and booking tips. Commercial booking: /experiences/cooking-class. Groups 2–12."
      canonicalUrl="https://mychef.id/blog/bali-villa-cooking-class-private-chef"
      h1="Private Cooking Classes at Your Bali Villa"
      subtitle="Learn Balinese & Indonesian Cuisine with a Professional Private Chef — booking on Cooking Class Bali"
      heroImage="/generated/mychef-experience-bali-luna-gallery-1.webp"
      heroImageAlt="Private chef teaching Balinese cooking class at a villa in Bali"
      ogImage="https://mychef.id/generated/mychef-experience-bali-luna-gallery-1.webp"
      keywords={['villa cooking class guide bali', 'private chef cooking class villa bali', 'in villa cooking class bali guide', 'balinese cooking class villa experience']}
      highlights={['Class Types', 'Market Trip', 'As a Gift', 'FAQ']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      ctaText="Book a Cooking Class"
      ctaSubtext="Tell us your villa, preferred class type, and group size — we'll confirm your chef and a written quote. Commercial page: /experiences/cooking-class."
      extraJsonLd={[
        breadcrumbSchema('Bali Villa Cooking Class', 'https://mychef.id/blog/bali-villa-cooking-class-private-chef', 'Blog', 'https://mychef.id/blog'),
        faqPageSchema(FAQS.map(f => ({ question: f.question, answer: f.answer }))),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Private Cooking Classes at Your Bali Villa',
          description: 'Support guide: how a private villa cooking class works in Bali. Book commercial sessions on the Cooking Class Bali experience page.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF.id', logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' } },
          datePublished: '2026-06-29',
          dateModified: new Date().toISOString().split('T')[0],
          image: 'https://mychef.id/generated/mychef-experience-bali-luna-gallery-1.webp',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://mychef.id/blog/bali-villa-cooking-class-private-chef' },
          url: 'https://mychef.id/blog/bali-villa-cooking-class-private-chef',
          wordCount: 1400,
          keywords: 'villa cooking class guide bali, private chef cooking class villa bali',
        },
      ]}
    />
  )
}
