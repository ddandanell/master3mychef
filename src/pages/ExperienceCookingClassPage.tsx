import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema, providerRef } from '@/components/SeoHead'
import {
  GraduationCap,
  Home,
  Users,
  UtensilsCrossed,
  ChefHat,
  MapPin,
} from 'lucide-react'
import type { PageSection } from '@/components/PremiumPage'

/**
 * /experiences/cooking-class — primary SEO pillar for "cooking class bali"
 * Guest product: private in-villa cooking classes. No published list prices —
 * contact WhatsApp for a custom quote. Balinese, Indonesian + other cuisines.
 */

const WA_LINK =
  'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27m%20interested%20in%20a%20cooking%20class%20at%20my%20Bali%20villa.%20Please%20send%20options%20and%20availability.'
const CANONICAL = 'https://mychef.id/experiences/cooking-class'
const HERO = '/generated/mychef-cooking-class-bali-hero-villa.webp'
const IMG_ING = '/generated/mychef-cooking-class-bali-ingredients-spread.webp'
const IMG_DINE = '/generated/mychef-cooking-class-bali-guests-dining.webp'

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Cooking Class Bali',
    title: 'Cooking Class in Bali — Private Chef Lessons at Your Villa',
    image: HERO,
    imageAlt:
      'Private chef teaching a hands-on cooking class in a luxury Bali villa kitchen with tropical light',
    body: `<p>A <strong>cooking class in Bali</strong> should taste like the island — spice pastes pounded by hand, coconut milk simmered patiently, sambal balanced until it sings — not like a rushed tourist demo with twenty strangers and a fixed script. myCHEF runs a <strong>private cooking class</strong> in the kitchen of <em>your</em> villa: a professional chef, ingredients sourced for your session, instruction at your pace, and a full meal of the dishes you cook together.</p>

    <p>Whether you searched for a <strong>cooking class Bali</strong>, <strong>cookery classes in Bali</strong>, <strong>cooking lessons in Bali</strong>, or an <strong>in villa cooking class Bali</strong>, the product is the same guest experience: the chef comes to you. No shuttle bus. No shared bench. No “watch from the back.” Couples, families, birthday groups, wedding parties and villa friends book it as the centrepiece of a day that ends around your own table.</p>

    <p>We specialise in <strong>Balinese cooking class</strong> and <strong>Indonesian cooking class</strong> formats, and we also design sessions around other cuisines when you want them — Mediterranean, modern Asian fusion, healthy plant-forward plates, seafood and grill technique, and more. Prefer sushi only? See our dedicated <a href="/experiences/sushi-masterclass" class="text-[#7E6410] hover:underline font-medium">sushi masterclass</a>.</p>

    <p><a href="${WA_LINK}" class="text-[#7E6410] hover:underline font-medium">Contact us on WhatsApp +62 896-7407-2020</a> with your villa area, group size, preferred cuisine and date. We reply with class options and a clear proposal — <strong>no public price list</strong>; every session is quoted for your brief.</p>`,
  },
  {
    id: 'why-villa',
    type: 'content' as const,
    subtitle: 'Private villa, not a crowded school',
    title: 'Why a Private Cooking Class Beats a Tourist Kitchen School',
    body: `<p>Traditional cooking schools in Bali can be excellent — and they can also mean fixed menus, large groups and a pace set by whoever is slowest or loudest in the room. A <strong>private cooking class Bali</strong> flips that model. Your villa kitchen becomes the classroom. Your dietary needs shape the menu. Your skill level sets the depth: beginners get foundations; confident home cooks get technique, timing and plating notes they can take home.</p>

    <p>That is why guests searching for the <strong>best cooking class in Bali</strong> often choose a villa format when they want privacy, flexibility and a real meal at the end. Honeymoon couples treat it as an anti-restaurant date. Families turn it into a holiday memory kids still talk about. Wedding parties use a class as a welcome activity before the reception. Corporate and retreat groups use it as team-building that does not feel like a conference room icebreaker.</p>

    <p>myCHEF is already a chef-led hospitality company for villa dining and catering across the island. Cooking classes sit in the same family of services as <a href="/private-chef-bali" class="text-[#7E6410] hover:underline font-medium">private chef hire</a> and <a href="/catering" class="text-[#7E6410] hover:underline font-medium">villa catering</a> — the same operational standard, the same WhatsApp booking flow, the same cleanup-before-we-leave mindset.</p>`,
  },
  {
    id: 'cuisines',
    type: 'content' as const,
    subtitle: 'What you can learn',
    title: 'Balinese, Indonesian and Multi-Cuisine Cooking Classes',
    image: IMG_ING,
    imageAlt:
      'Balinese cooking class ingredients including turmeric, lemongrass, chili and coconut on a teak villa table',
    body: `<p><strong>Balinese heritage cooking class.</strong> Learn the island’s flavour logic from the mortar up: spice pastes such as <em>base gede</em>, fragrant <em>base wangi</em>, satay on lemongrass, lawar-style salads, sambals, and a slow, fragrant main that shows why Balinese food is more than “spicy.” This is the session most guests mean when they type <strong>Balinese cooking class</strong> or <strong>cooking class Bali Ubud</strong> energy into a search bar — even when the class is held in Seminyak, Canggu or Uluwatu.</p>

    <p><strong>Indonesian archipelago cooking class.</strong> A wider map of the country’s greatest plates: patient rendang technique, nasi goreng that starts with day-old rice, peanut sauce ground for gado-gado, regional sambals, and desserts that use palm sugar and coconut the way local cooks do. Ideal if you want an <strong>Indonesian cooking class</strong> that travels well back to a home kitchen.</p>

    <p><strong>Other cuisines on request.</strong> Not every villa group wants only local food. We regularly run Mediterranean sharing menus, modern fusion plating, healthy plant-forward sessions, seafood and charcoal grill masterclasses, and kids-friendly pizza or simple pastry workshops. Japanese raw fish and hand rolls live on the <a href="/experiences/sushi-masterclass" class="text-[#7E6410] hover:underline font-medium">sushi masterclass</a> page so keywords stay clean.</p>

    <p>Every format is hands-on. You cook. You ask questions. You leave with recipe cards written for a normal home kitchen — not a commercial brigade. Tell us what you want to learn when you message; we design the class around your group rather than forcing a fixed tourist syllabus.</p>`,
  },
  {
    id: 'how-it-works',
    type: 'content' as const,
    subtitle: 'How cooking classes work with myCHEF',
    title: 'How a Villa Cooking Class Works from First Message to Final Plate',
    body: `<p><strong>1. Contact us.</strong> WhatsApp date, villa area (or pin), guest count, ages if kids join, dietary needs and cuisine preference. That is enough for us to check chef availability.</p>
    <p><strong>2. We propose the class.</strong> You receive a written outline: dishes, approximate duration, what the villa kitchen needs, and what we bring. No hidden line items after you approve the proposal.</p>
    <p><strong>3. We shop and set up.</strong> Ingredients are sourced for your session. The chef arrives with knives, specialty tools (mortar, skewers, spice kit) and any equipment your villa kitchen is missing.</p>
    <p><strong>4. You cook.</strong> Instruction is paced for beginners or advanced cooks. Everyone participates. Safety and hygiene standards match our private-chef service.</p>
    <p><strong>5. You eat what you cooked.</strong> The class ends with a sit-down meal at your villa table — the part guests remember most.</p>
    <p><strong>6. We clean up.</strong> Kitchen restored, tools packed, recipes shared. Optional upgrades (market morning, wine pairing notes, photographer for a wedding party class) are discussed before you confirm.</p>
    <p>Typical sessions run roughly two to three hours of cooking plus the meal. Longer formats and market mornings are available when your schedule allows — confirm duration on your proposal.</p>`,
  },
  {
    id: 'features',
    type: 'features' as const,
    subtitle: 'What every class includes',
    title: 'What Is Included in a myCHEF Cooking Class',
    features: [
      {
        icon: GraduationCap,
        title: 'Professional chef instructor',
        desc: 'A trained chef adapts the class to your skill level — foundations or deeper technique.',
      },
      {
        icon: Home,
        title: 'Your villa kitchen',
        desc: 'In-villa cooking class Bali: no transport, no strangers, full privacy.',
      },
      {
        icon: Users,
        title: 'Small private groups',
        desc: 'Ideal for couples, families and villa friends. Larger groups quoted with staffing plan.',
      },
      {
        icon: UtensilsCrossed,
        title: 'Eat what you cook',
        desc: 'The class ends with a full meal of the dishes you prepared together.',
      },
      {
        icon: ChefHat,
        title: 'Recipes to take home',
        desc: 'Printed cards and notes written for a standard home kitchen.',
      },
      {
        icon: MapPin,
        title: 'Island-wide coverage',
        desc: 'Seminyak, Canggu, Ubud, Uluwatu, Jimbaran, Sanur, Nusa Dua, Kuta corridor and more.',
      },
    ],
  },
  {
    id: 'occasions',
    type: 'content' as const,
    subtitle: 'Who books a cooking class',
    title: 'Cooking Classes for Couples, Kids, Parties, Weddings and Teams',
    image: IMG_DINE,
    imageAlt:
      'Guests dining at a Bali villa after a private cooking class, sharing dishes they prepared with their chef',
    body: `<p><strong>Cooking class for couples.</strong> A private afternoon that is more memorable than another restaurant booking — and more relaxed than a large group school. Perfect for honeymoons and anniversaries.</p>
    <p><strong>Cooking class for kids and families.</strong> Children from roughly school age can take age-appropriate tasks while adults handle knives and heat. Family versions keep spice levels flexible. For a full kids party production, see also <a href="/experiences/kids-birthday-chef-party" class="text-[#7E6410] hover:underline font-medium">kids birthday chef party</a>.</p>
    <p><strong>Birthday gift and celebration class.</strong> Many guests book a class as a birthday activity for a villa holiday group — social, useful and photographable without forcing everyone into a nightclub.</p>
    <p><strong>Wedding party cooking class.</strong> Welcome the bridal party or family with a hands-on session the day before the ceremony. Pair later with <a href="/events/weddings" class="text-[#7E6410] hover:underline font-medium">wedding catering</a> so food stays under one team.</p>
    <p><strong>Team building cooking class.</strong> Small corporate and retreat groups use a villa class as a collaborative activity that ends in a shared meal. For multi-day food programmes, connect with <a href="/events/retreats" class="text-[#7E6410] hover:underline font-medium">retreat catering</a>.</p>
    <p><strong>Are cooking classes worth it?</strong> For villa guests who want more than a photo of a spice market, yes — you leave with skills, recipes and a meal you made. Value is in privacy, customisation and chef quality, not in racing through a fixed tourist demo. Message us if you want an honest recommendation for your group size and kitchen.</p>`,
  },
  {
    id: 'areas',
    type: 'content' as const,
    subtitle: 'Where we teach',
    title: 'Cooking Class Bali Across Seminyak, Canggu, Ubud, Uluwatu and Beyond',
    body: `<p>Search data shows strong interest in <strong>cooking class Ubud</strong>, <strong>cooking class Seminyak</strong>, <strong>cooking class Canggu</strong>, <strong>cooking class Uluwatu</strong>, <strong>Jimbaran</strong>, <strong>Sanur</strong>, <strong>Kuta</strong> and <strong>Nusa Dua</strong>. myCHEF is not locked to a single school address — we travel to your villa kitchen island-wide.</p>
    <p>Ubud suits heritage and market-driven menus. Seminyak and Canggu suit design villas and group holidays. Uluwatu and Jimbaran suit seafood and sunset-timed sessions. Sanur and Nusa Dua suit families and longer stays. Remote areas may need more lead time for logistics; we flag that when you enquire.</p>
    <p>Browse area context on our <a href="/locations" class="text-[#7E6410] hover:underline font-medium">locations hub</a> and chef hire pages such as <a href="/private-chef/ubud" class="text-[#7E6410] hover:underline font-medium">private chef Ubud</a> and <a href="/private-chef/seminyak" class="text-[#7E6410] hover:underline font-medium">private chef Seminyak</a> if you also want multi-day dining.</p>`,
  },
  {
    id: 'what-to-expect',
    type: 'content' as const,
    subtitle: 'Practical details',
    title: 'What a Cooking Class Is Like — Duration, Kitchen, What to Wear',
    body: `<p><strong>How long do cooking classes take?</strong> Most villa classes run about two to three hours of instruction and cooking, then you sit down to eat. Longer menus or market mornings extend the day — we confirm duration on your proposal.</p>
    <p><strong>What should I wear to a cooking class?</strong> Closed or secure shoes, clothes you do not mind getting a splash of sambal on, and hair tied back if long. We bring aprons when useful. Leave formal wear for dinner after.</p>
    <p><strong>What does our villa kitchen need?</strong> A working stove, basic pots and chopping space is enough for most classes. The chef brings professional knives and specialist tools. Share a kitchen photo or villa listing when you book so we plan realistically.</p>
    <p><strong>Beginners welcome.</strong> A <strong>cooking class for beginners</strong> is our default unless you tell us you want advanced technique. We never assume prior training.</p>
    <p><strong>Pricing.</strong> We do not publish a fixed public rate card for cooking classes on this page. Sessions are quoted for guest count, cuisine, duration and location. Contact us for a clear written proposal before you pay a deposit.</p>`,
  },
  {
    id: 'faq',
    type: 'faq' as const,
    subtitle: 'Cooking Class Bali — FAQ',
    title: 'Common Questions About Cooking Classes',
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Book your class',
    title: 'Ready to Book a Cooking Class at Your Bali Villa?',
    body: `Tell us your villa area, group size, cuisine preference and date. We will confirm chef availability and send a tailored proposal — Balinese, Indonesian or another cuisine you want to learn. Explore more on <a href="/experiences" class="text-[#7E6410] hover:underline font-medium">private experiences</a>, <a href="/experiences/sushi-masterclass" class="text-[#7E6410] hover:underline font-medium">sushi masterclass</a> and <a href="/private-chef-bali" class="text-[#7E6410] hover:underline font-medium">private chef</a> day rates.`,
    primaryAction: {
      label: 'WhatsApp About a Cooking Class',
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
    question: 'How much are cooking classes in Bali with myCHEF?',
    answer:
      'We quote each cooking class for your group size, cuisine, duration and villa location. There is no single public list price on this page — message WhatsApp for a written proposal before any deposit.',
  },
  {
    question: 'Are cooking classes worth it at a private villa?',
    answer:
      'For guests who want privacy, a custom menu and a real meal at the end, a private villa cooking class is often more valuable than a large tourist demo. You leave with recipes and skills, not only photos.',
  },
  {
    question: 'What is a cookery class — and how does a cooking class work?',
    answer:
      'A cookery / cooking class is hands-on instruction where you prepare dishes with a chef. With myCHEF the chef comes to your villa, teaches the session, you cook together, then you eat what you made and we clean up.',
  },
  {
    question: 'Do you offer a Balinese cooking class and Indonesian cooking class?',
    answer:
      'Yes — Balinese heritage (spice pastes, sambals, island classics) and wider Indonesian archipelago menus are our most requested formats. Other cuisines available on request.',
  },
  {
    question: 'Is this an in-villa cooking class in Bali?',
    answer:
      'Yes. Classes are held in your villa kitchen island-wide (Seminyak, Canggu, Ubud, Uluwatu, Jimbaran, Sanur, Nusa Dua, Kuta corridor and more).',
  },
  {
    question: 'How long do cooking classes take?',
    answer:
      'Typically about two to three hours of cooking plus the meal. Longer menus or optional market mornings extend the day — confirmed on your proposal.',
  },
  {
    question: 'Is there a cooking class for beginners?',
    answer:
      'Yes. Beginners are welcome. Instruction adapts to the group. Experienced cooks can request deeper technique.',
  },
  {
    question: 'Do you offer a cooking class for kids or with kids?',
    answer:
      'Yes — family formats with age-appropriate tasks. For a full kids party production see <a href="/experiences/kids-birthday-chef-party">kids birthday chef party</a>.',
  },
  {
    question: 'Can couples book a private cooking class?',
    answer:
      'Yes — cooking class for couples is one of our most popular villa experiences for honeymoons and date nights in.',
  },
  {
    question: 'Can we book a cooking class as a gift or for a birthday?',
    answer:
      'Yes. Share the recipient’s villa details and dietary notes. We coordinate discreetly for birthday and gift experiences.',
  },
  {
    question: 'Do you run cooking classes for team building or retreats?',
    answer:
      'Yes for small villa groups. Multi-day food programmes can connect with <a href="/events/retreats">retreat catering</a> and <a href="/events/corporate">corporate events</a>.',
  },
  {
    question: 'What should I wear to a cooking class?',
    answer:
      'Comfortable clothes you can cook in, secure shoes, hair tied back if long. Aprons available when useful.',
  },
  {
    question: 'What does our villa kitchen need?',
    answer:
      'A working stove and basic prep space is usually enough. We bring specialist tools. Share a kitchen photo or listing link when you enquire.',
  },
  {
    question: 'Can you handle vegan, vegetarian, gluten-free or halal menus?',
    answer:
      'Yes when briefed at enquiry. Plant-forward Balinese and Indonesian sessions are popular; pork-free options are routine.',
  },
  {
    question: 'How far in advance should we book a cooking class in Bali?',
    answer:
      'A few days is often enough off-peak; one week or more for bespoke menus and peak season (July–August, December). Last-minute sometimes possible — ask on WhatsApp.',
  },
  {
    question: 'What deposit is required?',
    answer:
      'Typically 50% to confirm the chef and date; balance before the class. <a href="/cancellation">Cancellation policy</a>.',
  },
  {
    question: 'Is this different from the sushi masterclass?',
    answer:
      'Yes. This page covers Balinese, Indonesian and multi-cuisine villa cooking classes. Sushi has its own page: <a href="/experiences/sushi-masterclass">sushi masterclass</a>.',
  },
  {
    question: 'How do I contact you to book?',
    answer:
      'WhatsApp +62 896-7407-2020 with villa area, guest count, cuisine and date — or use <a href="/quote">quote</a> / <a href="/book">book</a>.',
  },
]

const RELATED_PAGES = [
  {
    label: 'Sushi Masterclass Bali',
    href: '/experiences/sushi-masterclass',
    desc: 'Dedicated private sushi class at your villa.',
  },
  {
    label: 'Kids Birthday Chef Party',
    href: '/experiences/kids-birthday-chef-party',
    desc: 'Kids cooking parties and entertainment at the villa.',
  },
  {
    label: 'Private Chef Bali',
    href: '/private-chef-bali',
    desc: 'Multi-day villa chef hire around your holiday.',
  },
  {
    label: 'Villa Catering',
    href: '/catering',
    desc: 'BBQ, buffet and event catering when you want us to cook for you.',
  },
  {
    label: 'All Experiences',
    href: '/experiences',
    desc: 'Cocktail parties, oysters, proposals and more.',
  },
  {
    label: 'Locations',
    href: '/locations',
    desc: 'Seminyak, Canggu, Ubud, Uluwatu and island-wide coverage.',
  },
]

export default function ExperienceCookingClassPage() {
  return (
    <PremiumPage
      slug="experiences/cooking-class"
      title="Cooking Class Bali | Private Villa Balinese & Indonesian Lessons | myCHEF"
      description="Cooking class in Bali at your villa — private Balinese & Indonesian lessons with a chef. Couples, kids, parties & weddings. Contact WhatsApp for a custom quote."
      seoTitle="Cooking Class Bali | Private Villa Balinese & Indonesian Lessons | myCHEF"
      seoDescription="Cooking class in Bali at your villa — private Balinese & Indonesian lessons with a chef. Couples, kids, parties & weddings. Contact WhatsApp for a custom quote."
      canonicalUrl={CANONICAL}
      h1="Cooking Class Bali — Private Lessons in Your Villa Kitchen"
      subtitle="Balinese, Indonesian and multi-cuisine cooking classes with a private chef — learn, cook and eat at home in Bali"
      heroImage={HERO}
      heroImageAlt="Private chef teaching a cooking class in a Bali villa kitchen"
      ogImage={`https://mychef.id${HERO}`}
      keywords={[
        'cooking class bali',
        'cooking class in bali',
        'private cooking class bali',
        'balinese cooking class',
        'indonesian cooking class',
        'in villa cooking class bali',
        'cooking class ubud',
        'cooking class seminyak',
        'cooking class canggu',
        'best cooking class bali',
        'cooking lessons in bali',
        'cookery classes in bali',
        'cooking class for couples',
        'cooking class for beginners',
      ]}
      highlights={['Private Villa Kitchen', 'Balinese & Indonesian', 'All Skill Levels', 'Contact for Quote']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      ctaText="WhatsApp About a Cooking Class"
      ctaSubtext="Tell us your villa, group size and cuisine — we reply with options and availability."
      extraJsonLd={[
        breadcrumbSchema('Cooking Class Bali', CANONICAL, 'Experiences', 'https://mychef.id/experiences'),
        faqPageSchema(FAQS.map((f) => ({ question: f.question, answer: f.answer }))),
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Cooking Class Bali — Private Villa Lessons',
          description:
            'Private cooking class in Bali at your villa: Balinese, Indonesian and multi-cuisine hands-on lessons with a professional chef. Couples, families, parties and wedding groups. Contact for custom quote.',
          provider: providerRef,
          areaServed: { '@type': 'Place', name: 'Bali, Indonesia' },
          serviceType: 'Private in-villa cooking class',
          image: `https://mychef.id${HERO}`,
          url: CANONICAL,
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: 'Private Balinese & Indonesian Cooking Class at Your Bali Villa',
          description:
            'Hands-on private cooking class taught by a myCHEF chef in your villa kitchen. Learn spice pastes, sambals, Indonesian classics or custom cuisines, then eat what you cook.',
          provider: providerRef,
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'onsite',
            location: { '@type': 'Place', name: 'Guest villa kitchen, Bali' },
          },
        },
      ]}
    />
  )
}
