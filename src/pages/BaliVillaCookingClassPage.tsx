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

    <p>After the class, you sit down and eat the meal you cooked — at your own villa table, with your own group, in comfort. No rush, no strangers, no performance. Just excellent food you made yourself and the satisfaction of knowing how it was done.</p>`,
  },
  {
    id: 'classes',
    type: 'content' as const,
    subtitle: 'Class Menu',
    title: 'Private Cooking Class Experiences',
    body: `<p>Each class is led by a professional myCHEF chef and held at your villa. All classes include ingredient sourcing, hands-on instruction, and a full sit-down meal of what you cooked. Starting from IDR 700,000 per person.</p>

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

    <p>All classes: from <strong>IDR 700,000 per person</strong>. Groups 2–12. Book via WhatsApp and your chef will confirm ingredients and timing within 2 hours.</p>`,
  },
  {
    id: 'market-trip',
    type: 'content' as const,
    subtitle: 'Morning Market Add-On',
    title: 'Optional: Sunrise Market Trip with Your Chef',
    body: `<p>The optional morning market add-on transforms the cooking class into a full half-day experience. Your chef picks you up at your villa at 6am — the hour when Bali's traditional markets (<em>pasar</em>) are at their most vibrant and freshest — and takes you directly to the local pasar used by professional cooks and households, not the tourist markets.</p>

    <p>Walking through the market with a professional chef who shops there regularly is genuinely different from going alone. Your chef explains each ingredient as it appears: why this variety of shallot and not that one, what a good turmeric rhizome looks like versus an old one, how to judge freshness in tropical fish without the cold chain cues you'd use at home. You'll see ingredients you may never have encountered — <em>kecombrang</em> (torch ginger flower), <em>daun salam</em> (Indonesian bay leaf), young coconut in every stage of development, fresh <em>tempeh</em> still warm from the maker nearby. Your chef negotiates directly with vendors in Bahasa Indonesia and selects the specific ingredients for your class that morning.</p>

    <p>By the time you return to the villa around 8am, you have a basket of ingredients you understand, a chef who has started prepping, and a significantly deeper connection to the food you're about to cook. The market trip adds approximately 2 hours to the total experience and is available as a supplement of <strong>IDR 250,000 per person</strong>. Highly recommended for anyone seriously interested in food culture, not just cooking technique.</p>`,
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
    body: 'Tell us your villa, preferred class type, and group size — we\'ll confirm your chef and date within 2 hours.',
    primaryAction: {
      label: 'Book a Cooking Class',
      href: 'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27d%20like%20to%20book%20a%20private%20cooking%20class%20at%20my%20Bali%20villa.'
    },
    secondaryAction: { label: 'View Pricing', href: '/pricing' },
  },
]

const FAQS = [
  {
    question: 'Do I need cooking experience to join?',
    answer: 'None. Our classes cater from complete beginner to intermediate home cook. Your chef adapts the instruction level to the group — if you\'ve never held a chef\'s knife, that\'s where we start.',
  },
  {
    question: 'What equipment does my villa need?',
    answer: 'A working stovetop, basic pots and pans, and a chopping board. Your chef brings professional knives and any specialist equipment — spice grinders, mortar and pestle, skewers, and anything else the class requires.',
  },
  {
    question: 'Can I request a specific dish or cuisine?',
    answer: 'Yes, we can build a bespoke class around any dish or cuisine with 1 week notice. If you have a dish you\'ve always wanted to learn — a specific regional Indonesian recipe, something you ate at a restaurant and want to recreate — tell us and your chef will build the class around it.',
  },
  {
    question: 'Is the morning market trip included in the price?',
    answer: 'The market trip is an IDR 250,000 per person supplement. It adds approximately 2 hours to the experience (the trip runs 6–8am before the class begins) and is highly recommended for anyone interested in Balinese food culture beyond the cooking itself.',
  },
  {
    question: 'Can children participate?',
    answer: 'Yes, we have a family-friendly version of every class. Children under 8 participate in age-appropriate tasks supervised by a parent — mixing, shaping, and decorating rather than knife work or high-heat cooking. The class pace adapts to the group.',
  },
  {
    question: 'What do we receive at the end?',
    answer: 'Printed recipe cards for every dish cooked in the class, a digital recipe booklet emailed after the session with full ingredient lists and technique notes for home replication, and a certificate of completion. The recipes are written for a standard home kitchen — you can make these dishes when you return home.',
  },
]

const RELATED_PAGES = [
  { label: 'Private Chef Bali', href: '/fine-dining/private-chef-bali', desc: 'Full private chef dinner service at your Bali villa.' },
  { label: 'Floating Breakfast Bali', href: '/blog/floating-breakfast-bali', desc: 'The iconic Bali villa floating breakfast — how to book it.' },
  { label: 'Honeymoon Chef Bali', href: '/blog/honeymoon-private-chef-bali', desc: 'Private chef experiences for honeymoon couples in Bali.' },
  { label: 'Romantic Dinner Bali', href: '/fine-dining/romantic-dinner', desc: 'Candlelit private chef dinner at your villa — full romantic dining experience.' },
  { label: 'Pricing', href: '/pricing', desc: 'Full pricing for all myCHEF services and group sizes.' },
  { label: 'Event Planning Bali', href: '/blog/event-planning-bali', desc: 'Complete logistics guide for Bali villa events and activities.' },
]

export default function BaliVillaCookingClassPage() {
  return (
    <PremiumPage
      slug="blog/bali-villa-cooking-class-private-chef"
      title="Private Cooking Classes at Your Bali Villa"
      description="Skip the tourist cooking school. Have a professional myCHEF chef come to your Bali villa and teach you authentic Indonesian and Balinese cuisine. Groups 2–12. From IDR 700,000/person."
      seoTitle="Bali Villa Cooking Class | Private Chef Cooking Lessons at Your Villa | myCHEF"
      seoDescription="Skip the tourist cooking school. Have a professional myCHEF chef come to your Bali villa and teach you authentic Indonesian and Balinese cuisine. Groups 2–12. From IDR 700,000/person."
      canonicalUrl="https://mychef.id/blog/bali-villa-cooking-class-private-chef"
      h1="Private Cooking Classes at Your Bali Villa"
      subtitle="Learn Balinese & Indonesian Cuisine with a Professional Private Chef"
      heroImage="/generated/mychef-experience-bali-luna-gallery-1.webp"
      heroImageAlt="Private chef teaching Balinese cooking class at a villa in Bali"
      ogImage="https://mychef.id/generated/mychef-experience-bali-luna-gallery-1.webp"
      keywords={['cooking class bali villa', 'private cooking class bali', 'bali cooking class private chef', 'in villa cooking class bali', 'balinese cooking class private']}
      highlights={['Class Types', 'Market Trip', 'As a Gift', 'FAQ']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      ctaText="Book a Cooking Class"
      ctaSubtext="Tell us your villa, preferred class type, and group size — we'll confirm your chef and date within 2 hours."
      extraJsonLd={[
        breadcrumbSchema('Bali Villa Cooking Class', 'https://mychef.id/blog/bali-villa-cooking-class-private-chef', 'Blog', 'https://mychef.id/blog'),
        faqPageSchema(FAQS.map(f => ({ question: f.question, answer: f.answer }))),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Private Cooking Classes at Your Bali Villa',
          description: 'Skip the tourist cooking school. Have a professional myCHEF chef come to your Bali villa and teach you authentic Indonesian and Balinese cuisine. Groups 2–12.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF.id', logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' } },
          datePublished: '2026-06-29',
          dateModified: new Date().toISOString().split('T')[0],
          image: 'https://mychef.id/generated/mychef-experience-bali-luna-gallery-1.webp',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://mychef.id/blog/bali-villa-cooking-class-private-chef' },
          url: 'https://mychef.id/blog/bali-villa-cooking-class-private-chef',
          wordCount: 1400,
          keywords: 'cooking class bali villa, private cooking class bali, bali cooking class private chef',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Event',
          name: 'Private Cooking Class at Your Bali Villa',
          description: 'A professional myCHEF chef comes to your Bali villa to teach authentic Indonesian and Balinese cuisine. Groups 2–12. From IDR 700,000/person.',
          url: 'https://mychef.id/blog/bali-villa-cooking-class-private-chef',
          image: 'https://mychef.id/generated/mychef-experience-bali-luna-gallery-1.webp',
          eventStatus: 'https://schema.org/EventScheduled',
          eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
          location: {
            '@type': 'Place',
            name: 'Your Bali Villa',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Bali',
              addressCountry: 'ID',
            },
          },
          organizer: {
            '@type': 'Organization',
            name: 'myCHEF.id',
            url: 'https://mychef.id',
          },
          offers: {
            '@type': 'Offer',
            price: '600000',
            priceCurrency: 'IDR',
            availability: 'https://schema.org/InStock',
            url: 'https://mychef.id/blog/bali-villa-cooking-class-private-chef',
          },
        },
      ]}
    />
  )
}
