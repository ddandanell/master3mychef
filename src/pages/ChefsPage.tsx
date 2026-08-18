import { ChefHat, Flame, Fish, Sparkles } from 'lucide-react'
import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema, personSchema } from '@/components/SeoHead'
import { siteFacts } from '@/data/siteFacts'

const SITE = 'https://mychef.id'

const CHEFS = [
  {
    name: 'Adriano',
    slug: 'adriano',
    role: 'Executive Chef & Founder',
    specialty: 'Mediterranean Fine Dining',
    badge: `Fine-dining-trained in ${siteFacts.founderTrainingCity} · Founder since ${siteFacts.foundingYear}`,
    image: '/generated/chef-adriano-portrait.webp',
    bio: 'Adriano built myCHEF after years in Michelin-level kitchens in northern Italy and a formative stretch in Tokyo. He still leads menu development, chef training, and every signature tasting experience we serve in Bali villas.',
    achievements: [`Milan-trained in ${siteFacts.founderTrainingCity}`, 'Leads chef training for every new hire', 'Trusted for proposals, anniversaries, and VIP dinners'],
    signatureDishes: ['Hand-rolled tagliatelle al tartufo', 'Grilled branzino with salsa verde', 'Tiramisu with espresso-soaked ladyfingers'],
    guestQuote: 'Adriano cooked for our anniversary and it was genuinely the best meal we had in Bali — better than any restaurant. The pasta alone was worth flying here for.',
    guestName: 'Sophie R., Sydney',
  },
  {
    name: 'I Made Surya',
    slug: 'made-surya',
    role: 'Head Chef — Mediterranean',
    specialty: 'Handmade Pasta & Seafood',
    badge: "Ubud talent shaped through myCHEF's in-house program",
    image: '/generated/chef-made-surya-portrait.webp',
    bio: "Surya is the calm hand behind many of our Mediterranean set menus. He combines Adriano's technique with Balinese market knowledge, turning just-caught seafood, handmade pasta, and clean sauces into elegant villa dinners.",
    achievements: ['Leads Mediterranean villa menus', 'Known for fresh pasta and seafood timing', 'Guest favourite for intimate 6–12 person dinners'],
    signatureDishes: ['Prawn linguine with chilli and white wine', 'Pan-seared sea bass with caponata', 'Panna cotta with passion fruit'],
    guestQuote: 'Surya cooked for our group of eight and every single person at the table was blown away. The pasta he made from scratch that evening is something we still talk about.',
    guestName: 'James T., London',
  },
  {
    name: 'Bayu Pranata',
    slug: 'bayu-pranata',
    role: 'Head Chef — BBQ & Grill',
    specialty: 'Open-Flame Cooking',
    badge: 'Jimbaran grill specialist with decades around charcoal',
    image: '/generated/chef-bayu-pranata-portrait.webp',
    bio: 'Bayu runs our BBQ and grill experiences with the confidence of someone who grew up cooking over live fire. From wagyu and lobster to whole fish and satay, he keeps the energy relaxed while every protein lands perfectly cooked.',
    achievements: ['Leads poolside BBQ events across Bali', 'Specialist in seafood, wagyu, and family-style spreads', 'Experienced with celebrations from 10 to 80 guests'],
    signatureDishes: ['Wagyu beef brisket with chimichurri', 'Jimbaran-style grilled whole fish', 'Smoky lamb ribs with sambal matah'],
    guestQuote: 'Bayu turned our villa into a proper grill restaurant for the night. The wagyu was perfectly cooked and the whole fish was stunning — our group of 25 was raving all week.',
    guestName: 'Mark L., Melbourne',
  },
  {
    name: 'Ni Putu Asri',
    slug: 'ni-putu-asri',
    role: 'Head Chef — Balinese & Asian Fusion',
    specialty: 'Balinese Classics & Modern Asian',
    badge: 'Gianyar-born chef rooted in ceremonial cooking traditions',
    image: '/generated/chef-ni-putu-asri-portrait.webp',
    bio: 'Asri protects the local soul of the myCHEF menu. She leads Indonesian feasts, ceremonial dishes, and Asian fusion menus with a balance of authenticity, polish, and warmth that villa guests immediately feel.',
    achievements: ['Leads Indonesian feast menus', 'Balances tradition with modern plating', 'Trusted for family celebrations and cultural dinners'],
    signatureDishes: ['Bebek betutu (slow-cooked Balinese duck)', 'Nasi goreng kampung with market herbs', 'Balinese lawar with pork and coconut'],
    guestQuote: 'Asri cooked an Indonesian feast for our family of twelve and it was extraordinary. She explained every dish as she served it — it felt like a true cultural experience, not just dinner.',
    guestName: 'Priya N., Singapore',
  },
  {
    name: 'Wayan Suarjana',
    slug: 'wayan-suarjana',
    role: 'Head Pastry Chef',
    specialty: 'Pastry, Desserts & Petit Fours',
    badge: 'Bali-trained with experience in luxury Seminyak hotel pastry kitchens',
    image: '/generated/chef-wayan-suarjana-portrait.webp',
    bio: 'Wayan brings precision and patience to every dessert course. Trained in Seminyak hotel pastry kitchens before joining myCHEF, he leads all our dessert menus from chocolate tasting plates to tropical fruit pavlovas and Balinese rice pudding variations.',
    achievements: ['Leads all pastry and dessert menus', 'Creates custom celebration cakes for villa events', 'Specialist in chocolate work and plated desserts'],
    signatureDishes: ['Chocolate lava cake with Balinese vanilla', 'Tropical fruit pavlova with lychee cream', 'Coconut pandan layer cake'],
    guestQuote: 'The dessert course Wayan prepared was honestly the highlight of our entire stay. The chocolate cake was perfect, and the pandan layer cake looked like art.',
    guestName: 'Clara M., Amsterdam',
  },
  {
    name: 'Ketut Mahardika',
    slug: 'ketut-mahardika',
    role: 'Head Chef — Seafood & Japanese',
    specialty: 'Japanese Technique & Fresh Seafood',
    badge: 'Trained in Japanese knife technique, sourcing direct from Jimbaran fish market',
    image: '/generated/chef-ketut-mahardika-portrait.webp',
    bio: 'Ketut specialises in Japanese-influenced preparations and Bali seafood. He sources directly from Jimbaran each morning and builds menus around what arrived. His sashimi boards, grilled fish with yuzu, and local prawn tempura are consistently the most requested dishes across our Japanese-leaning bookings.',
    achievements: ['Japanese knife skills and fish butchery', 'Sashimi and crudo menus', 'Manages seafood sourcing for large events'],
    signatureDishes: ['Otoro sashimi with ponzu', 'Grilled king prawns with yuzu butter', 'Japanese-spiced yellowfin tuna tataki'],
    guestQuote: 'Ketut prepared a sashimi and grilled seafood dinner that rivalled anything we have eaten in Tokyo. The fish was extraordinary — you could tell it was sourced that morning.',
    guestName: 'Hiroshi K., Osaka',
  },
  {
    name: 'Sari Dewi Kusuma',
    slug: 'sari-dewi-kusuma',
    role: 'Wellness & Retreat Chef',
    specialty: 'Plant-Based, Ayurvedic & Raw Cuisine',
    badge: 'Ubud wellness community favourite for yoga retreats and detox programs',
    image: '/generated/chef-sari-dewi-portrait.webp',
    bio: 'Sari leads our wellness kitchen — retreat catering, detox programmes, and the kind of Balinese whole-food cooking that leaves guests feeling genuinely restored. She understands the rhythms of yoga retreat schedules, works around complex dietary combinations, and turns healthy eating into something guests actually look forward to.',
    achievements: ['Leads retreat and wellness bookings across Ubud', 'Specialist in raw, vegan, and Ayurvedic menus', 'Trusted by wellness retreat operators across Bali'],
    signatureDishes: ['Raw zucchini pad thai with cashew sauce', 'Jamu golden turmeric bowl', 'Balinese banana blossom curry'],
    guestQuote: 'Sari fed our yoga retreat group for seven days and every single meal was incredible. People who normally struggle to eat healthy were going back for seconds. She is truly gifted.',
    guestName: 'Rachel B., Los Angeles',
  },
  {
    name: 'Komang Artha',
    slug: 'komang-artha',
    role: 'Senior Event Chef',
    specialty: 'Large-Scale Villa Events & Buffets',
    badge: "15 years running events from 20 to 200 guests across Bali's top villa estates",
    image: '/generated/chef-komang-artha-portrait.webp',
    bio: 'Komang has the calmness of someone who has cooked through everything — power outages, rain-cancelled outdoor setups, last-minute dietary changes at 150-person weddings. He leads our larger events and catering programmes with a team coordination skill that keeps the kitchen and front-of-house moving in sync regardless of what changes.',
    achievements: ['Runs events from 20 to 200+ guests', 'Specialist in wedding and corporate catering logistics', 'Mentors junior kitchen staff across myCHEF'],
    signatureDishes: ['Indonesian rijsttafel (rice table feast)', 'Spit-roasted suckling pig buffet', 'Satay platter with six sauces'],
    guestQuote: 'Komang and his team catered our 120-person villa wedding and everything was seamless. The food was outstanding and not a single thing went wrong — he is a true professional.',
    guestName: 'Emma & Tom W., Edinburgh',
  },
]

const CHEF_PERSON_SCHEMAS = [
  personSchema({
    name: 'Adriano',
    jobTitle: 'Executive Chef & Founder',
    description:
      'Adriano built myCHEF after years in Michelin-level kitchens in northern Italy and a formative stretch in Tokyo. He still leads menu development, chef training, and every signature tasting experience we serve in Bali villas.',
    url: `${SITE}/chefs/adriano`,
    image: `${SITE}/generated/chef-adriano-portrait.webp`,
    worksFor: { '@id': 'https://mychef.id/#business' },
    knowsAbout: [
      'Mediterranean Fine Dining',
      `Milan-trained in ${siteFacts.founderTrainingCity}`,
      'Leads chef training for every new hire',
      'Trusted for proposals, anniversaries, and VIP dinners',
    ],
  }),
  personSchema({
    name: 'I Made Surya',
    jobTitle: 'Head Chef — Mediterranean',
    description:
      "Surya is the calm hand behind many of our Mediterranean set menus. He combines Adriano's technique with Balinese market knowledge, turning just-caught seafood, handmade pasta, and clean sauces into elegant villa dinners.",
    url: `${SITE}/chefs/made-surya`,
    image: `${SITE}/generated/chef-made-surya-portrait.webp`,
    worksFor: { '@id': 'https://mychef.id/#business' },
    knowsAbout: [
      'Handmade Pasta & Seafood',
      'Leads Mediterranean villa menus',
      'Known for fresh pasta and seafood timing',
      'Guest favourite for intimate 6–12 person dinners',
    ],
  }),
  personSchema({
    name: 'Bayu Pranata',
    jobTitle: 'Head Chef — BBQ & Grill',
    description:
      'Bayu runs our BBQ and grill experiences with the confidence of someone who grew up cooking over live fire. From wagyu and lobster to whole fish and satay, he keeps the energy relaxed while every protein lands perfectly cooked.',
    url: `${SITE}/chefs/bayu-pranata`,
    image: `${SITE}/generated/chef-bayu-pranata-portrait.webp`,
    worksFor: { '@id': 'https://mychef.id/#business' },
    knowsAbout: [
      'Open-Flame Cooking',
      'Leads poolside BBQ events across Bali',
      'Specialist in seafood, wagyu, and family-style spreads',
      'Experienced with celebrations from 10 to 80 guests',
    ],
  }),
  personSchema({
    name: 'Ni Putu Asri',
    jobTitle: 'Head Chef — Balinese & Asian Fusion',
    description:
      'Asri protects the local soul of the myCHEF menu. She leads Indonesian feasts, ceremonial dishes, and Asian fusion menus with a balance of authenticity, polish, and warmth that villa guests immediately feel.',
    url: `${SITE}/chefs/ni-putu-asri`,
    image: `${SITE}/generated/chef-ni-putu-asri-portrait.webp`,
    worksFor: { '@id': 'https://mychef.id/#business' },
    knowsAbout: [
      'Balinese Classics & Modern Asian',
      'Leads Indonesian feast menus',
      'Balances tradition with modern plating',
      'Trusted for family celebrations and cultural dinners',
    ],
  }),
  personSchema({
    name: 'Wayan Suarjana',
    jobTitle: 'Head Pastry Chef',
    description:
      'Wayan brings precision and patience to every dessert course. Trained in Seminyak hotel pastry kitchens before joining myCHEF, he leads all our dessert menus from chocolate tasting plates to tropical fruit pavlovas and Balinese rice pudding variations.',
    url: `${SITE}/chefs/wayan-suarjana`,
    image: `${SITE}/generated/chef-wayan-suarjana-portrait.webp`,
    worksFor: { '@id': 'https://mychef.id/#business' },
    knowsAbout: [
      'Pastry, Desserts & Petit Fours',
      'Leads all pastry and dessert menus',
      'Creates custom celebration cakes for villa events',
      'Specialist in chocolate work and plated desserts',
    ],
  }),
  personSchema({
    name: 'Ketut Mahardika',
    jobTitle: 'Head Chef — Seafood & Japanese',
    description:
      'Ketut specialises in Japanese-influenced preparations and Bali seafood. He sources directly from Jimbaran each morning and builds menus around what arrived. His sashimi boards, grilled fish with yuzu, and local prawn tempura are consistently the most requested dishes across our Japanese-leaning bookings.',
    url: `${SITE}/chefs/ketut-mahardika`,
    image: `${SITE}/generated/chef-ketut-mahardika-portrait.webp`,
    worksFor: { '@id': 'https://mychef.id/#business' },
    knowsAbout: [
      'Japanese Technique & Fresh Seafood',
      'Japanese knife skills and fish butchery',
      'Sashimi and crudo menus',
      'Manages seafood sourcing for large events',
    ],
  }),
  personSchema({
    name: 'Sari Dewi Kusuma',
    jobTitle: 'Wellness & Retreat Chef',
    description:
      'Sari leads our wellness kitchen — retreat catering, detox programmes, and the kind of Balinese whole-food cooking that leaves guests feeling genuinely restored. She understands the rhythms of yoga retreat schedules, works around complex dietary combinations, and turns healthy eating into something guests actually look forward to.',
    url: `${SITE}/chefs/sari-dewi-kusuma`,
    image: `${SITE}/generated/chef-sari-dewi-portrait.webp`,
    worksFor: { '@id': 'https://mychef.id/#business' },
    knowsAbout: [
      'Plant-Based, Ayurvedic & Raw Cuisine',
      'Leads retreat and wellness bookings across Ubud',
      'Specialist in raw, vegan, and Ayurvedic menus',
      'Trusted by wellness retreat operators across Bali',
    ],
  }),
  personSchema({
    name: 'Komang Artha',
    jobTitle: 'Senior Event Chef',
    description:
      'Komang has the calmness of someone who has cooked through everything — power outages, rain-cancelled outdoor setups, last-minute dietary changes at 150-person weddings. He leads our larger events and catering programmes with a team coordination skill that keeps the kitchen and front-of-house moving in sync regardless of what changes.',
    url: `${SITE}/chefs/komang-artha`,
    image: `${SITE}/generated/chef-komang-artha-portrait.webp`,
    worksFor: { '@id': 'https://mychef.id/#business' },
    knowsAbout: [
      'Large-Scale Villa Events & Buffets',
      'Runs events from 20 to 200+ guests',
      'Specialist in wedding and corporate catering logistics',
      'Mentors junior kitchen staff across myCHEF',
    ],
  }),
]

const SECTIONS = [
  {
    id: 'team',
    type: 'content' as const,
    subtitle: 'Our Team',
    title: "The Culinary Team Behind Bali's Private Dining Favourite",
    body: `<p>myCHEF is led by Adriano and powered by a 50+ person hospitality team trained for villa service, not restaurant shortcuts. Every chef is taught how to cook beautifully in unfamiliar kitchens, adapt to dietary requests, and leave the space spotless before they go.</p>
    <p>That means better timing, calmer service, and food that still feels personal even when the event is large. From candlelit dinners to full villa celebrations, the chefs below set the standard.</p>`,
    image: '/generated/mychef-finedining-bali-chefs-hero.webp',
    imageAlt: 'myCHEF chefs preparing private dining service in Bali',
  },
  {
    id: 'profiles',
    type: 'profiles' as const,
    subtitle: 'Chef Profiles',
    title: 'Meet Adriano and the Lead Chefs Guests Ask For By Name',
    profiles: CHEFS,
  },
  {
    id: 'standards',
    type: 'features' as const,
    subtitle: 'Why It Works',
    title: 'How We Keep Every Chef Experience Consistent',
    features: [
      {
        icon: ChefHat,
        title: '6+ Months of Training',
        desc: 'Every lead chef is trained on myCHEF recipes, villa kitchen workflows, guest communication, and cleanup standards before leading a booking.',
      },
      {
        icon: Fish,
        title: 'Cuisine-Led Assignments',
        desc: 'Mediterranean menus go to Mediterranean specialists. BBQ nights go to grill chefs. We match the chef to the menu, not the other way around.',
      },
      {
        icon: Flame,
        title: 'Event-Tested Under Pressure',
        desc: 'Our chefs regularly execute romantic dinners, birthdays, retreats, and large group BBQs in villas across Seminyak, Canggu, Ubud, and Uluwatu.',
      },
      {
        icon: Sparkles,
        title: 'Service Beyond the Plate',
        desc: 'Presentation, pacing, table reset, and kitchen restoration are part of the job. The experience should feel effortless from the guest side.',
      },
    ],
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Book a Chef',
    title: "Tell Us Your Dates and We'll Match the Right Chef",
    body: 'Share your villa location, guest count, and the kind of meal you want. We will recommend the best chef for that menu and help you lock in availability fast.',
  },
]

const FAQS = [
  {
    question: 'Who will cook at my villa in Bali?',
    answer: 'A named chef from our 50+ person Indonesian team, matched to your cuisine and event. Profiles are public on this page; your brief is confirmed before the date. Book via <a href="/private-chef-bali">private chef</a> or <a href="/book">book</a>.',
  },
  {
    question: 'Are your chefs Indonesian?',
    answer: 'Yes. myCHEF chefs are Indonesian professionals, led by Milan-trained leadership — a real differentiator versus expat-only marketplace freelancers.',
  },
  {
    question: 'Can I request a specific myCHEF chef?',
    answer: 'Yes, especially for multi-day stays and repeat guests. For single dinners we match the best available specialist for your cuisine if your first choice is booked.',
  },
  {
    question: 'What is Chef Rotation?',
    answer: 'On weekly (7+ day) private chef bookings you can request a different specialist by day — Japanese one night, Balinese the next — at no extra day-rate charge. Details on <a href="/private-chef-bali">private chef Bali</a>.',
  },
  {
    question: 'Who is Adriano?',
    answer: 'Adriano is the founder and executive chef, trained to fine-dining standards in Milan. He leads technique standards for the team and still cooks select villa evenings. More on <a href="/chefs">about myCHEF</a>.',
  },
  {
    question: 'Do head chefs cook every booking personally?',
    answer: 'Head chefs set recipes and standards and cook many bookings themselves. Larger or concurrent services may run with brigade members trained to the same standard under head-chef systems.',
  },
  {
    question: 'What cuisines can your chefs cook?',
    answer: 'Italian &amp; Mediterranean, Japanese &amp; seafood, Indonesian &amp; Balinese, BBQ &amp; open flame, plant-based &amp; wellness, and pastry/desserts — plus custom fusion when briefed.',
  },
  {
    question: 'How are chefs trained and vetted?',
    answer: 'Multi-month training, food-safety practice, villa service standards and ongoing supervision. You are not hiring an unverified WhatsApp number.',
  },
  {
    question: 'What if my assigned chef cannot make it?',
    answer: 'We send a verified replacement of equivalent calibre or refund that service. <a href="/why-mychef">Why myCHEF →</a>',
  },
  {
    question: 'Can chefs handle allergies and kids menus?',
    answer: 'Yes — dietary redesign is routine. See <a href="/kids-menus">kids menus</a> and our <a href="/blog/food-allergies-dietary-requirements-private-chef-bali">allergy guide</a>.',
  },
  {
    question: 'Do chefs shop for groceries?',
    answer: 'Yes on daily private chef hire. Shopping work is included; food is billed at cost with receipts. Fine dining/catering packages usually include ingredients in the per-person price.',
  },
  {
    question: 'Which areas of Bali do chefs travel to?',
    answer: 'Island-wide villa coverage. <a href="/locations">Locations →</a>',
  },
  {
    question: 'How far in advance should I book a named chef?',
    answer: 'For peak season or a specific head chef, 2+ weeks is safer. Many dinners book with a few days’ notice when schedules allow.',
  },
  {
    question: 'Can the same chef cook fine dining and casual family meals?',
    answer: 'Yes. Multi-day stays often mix simple breakfasts with one tasting-level dinner. Formats live under <a href="/dining-styles">dining styles</a> and <a href="/fine-dining">fine dining</a>.',
  },
  {
    question: 'Do you place long-term household chefs?',
    answer: 'Yes via <a href="/staffing">staffing</a> and <a href="/staffing/live-in-chef">live-in chef</a> — different from holiday day-rate hire.',
  },
  {
    question: 'How do I book after choosing a chef style?',
    answer: 'WhatsApp cuisine preference, date, guests and villa area. We confirm who is available and send a fixed quote. <a href="/quote">Quote →</a>',
  },
  {
    question: 'Are pastry and dessert specialists available?',
    answer: 'Yes — celebration cakes, plated desserts and petit fours for dinners and events.',
  },
  {
    question: 'Can chefs run a cooking class or sushi masterclass?',
    answer: 'Yes as curated experiences: <a href="/experiences/cooking-class">cooking class</a> and <a href="/experiences/sushi-masterclass">sushi masterclass</a>.',
  },
  {
    question: 'Do chefs bring equipment for villa kitchens?',
    answer: 'Specialised tools travel with the team when the menu needs them; standard villa kitchens cover most services.',
  },
  {
    question: 'Where can I read guest feedback on the chef team?',
    answer: 'Dated reviews on <a href="/reviews">reviews</a> and occasion stories across fine dining, catering and private chef pages.',
  },
]

const RELATED_PAGES = [
  { label: 'About myCHEF', href: '/fine-dining/our-chefs', desc: 'Read the founder story and the standards behind the team.' },
  { label: 'Menus', href: '/fine-dining/menus', desc: 'See the menu styles each chef can execute in your villa.' },
  { label: 'Fine Dining', href: '/fine-dining', desc: 'Explore tasting menus and premium in-villa dining.' },
  { label: 'Catering', href: '/catering', desc: 'Planning a bigger group, BBQ, or buffet-style event?' },
  { label: 'Pricing', href: '/pricing', desc: 'Understand starting prices and what is included.' },
  { label: 'Book Now', href: '/book', desc: 'Reserve your date and tell us which chef style you want.' },
]

export default function ChefsPage() {
  return (
    <PremiumPage
      slug="chefs"
      title="Our Chefs"
      description={`Meet Adriano and the lead chefs behind myCHEF — fine-dining-trained leadership, villa-tested specialists, and a 50+ person team trusted across Bali.`}
      seoTitle="Fine-Dining Private Chefs Bali | Meet the Team — myCHEF"
      seoDescription={`Meet the myCHEF private chef team in Bali. Fine-dining-trained leadership, 50+ villa-tested chefs for fine dining, BBQs, retreats & events. Book via WhatsApp.`}
      canonicalUrl="https://mychef.id/chefs"
      h1="Meet the Chefs Behind Every myCHEF Experience"
      subtitle={`From Adriano's fine-dining-trained leadership to our Bali-based specialists in Mediterranean, Indonesian, and BBQ dining.`}
      heroImage="/generated/mychef-finedining-bali-chefs-hero.webp"
      heroImageAlt="myCHEF culinary team in Bali"
      ogImage="https://mychef.id/generated/mychef-finedining-bali-chefs-hero.webp"
      keywords={['private chef bali', 'mychef chefs', 'bali culinary team']}
      highlights={['Adriano + Lead Chef Profiles', '50+ Hospitality Professionals', '6+ Months of Training', 'Book a Chef via WhatsApp']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[...CHEF_PERSON_SCHEMAS, breadcrumbSchema('Our Chefs', 'https://mychef.id/chefs'), faqPageSchema(FAQS)]}
      ctaText="Book a Chef"
      ctaSubtext="Message us on WhatsApp and we will recommend the best chef for your villa, menu, and dates."
    />
  )
}
