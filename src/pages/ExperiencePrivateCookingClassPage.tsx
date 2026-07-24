import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import {
  GraduationCap,
  Home,
  Users,
  UtensilsCrossed,
  ChefHat,
  ShoppingBasket,
} from 'lucide-react'
import type { PageSection } from '@/components/PremiumPage'

const WA_LINK = 'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27m%20interested%20in%20a%20private%20cooking%20class%20Bali%20at%20my%20villa.%20Can%20you%20help%20me%3F'
const CANONICAL = 'https://mychef.id/experiences/private-cooking-class'

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Private Cooking Class Bali',
    title: 'Learn Balinese & Indonesian Cuisine with a Private Chef at Your Villa',
    image: '/generated/private-cooking-class-bali-villa.webp',
    imageAlt: 'Private chef teaching a Balinese cooking class in a modern villa kitchen',
    body: `<p>Most visitors who want to learn Balinese cooking end up in a group tourist cooking school — a crowded kitchen, a fixed menu, and twenty strangers following the same simplified steps at the same pace. You leave with a few photos and a recipe card, but rarely with the confidence to recreate what you made once you are home.</p>

    <p>A <strong>private cooking class Bali</strong> experience with myCHEF is different entirely. A professional chef comes directly to your Bali villa, works in your kitchen with your group, and teaches the dishes you actually want to learn. The pace is yours. The questions are yours. The ingredients are selected for your class and sourced fresh that morning. When the lesson ends, you sit down at your own table and eat the meal you cooked together — no commute, no strangers, no rush.</p>

    <p>Bali is one of the most rewarding places in the world to learn to cook. The island's markets open before sunrise with produce you rarely see elsewhere: banana blossoms, torch ginger flower, shallot varieties, fresh coconut in every stage, and spice pastes refined across generations. The best way to understand Balinese cuisine is not from a demonstration bench, but standing beside a chef who can explain why each ingredient matters and how technique changes the result.</p>

    <p>Whether you are a complete beginner who has never held a chef's knife or an experienced home cook looking to deepen your understanding of Indonesian flavours, a private class adapts to you. The result is not just a meal. It is a skill you take home.</p>`,
  },
  {
    id: 'classes',
    type: 'content' as const,
    subtitle: 'Class Menu',
    title: 'Private Cooking Class Experiences at Your Villa',
    image: '/generated/mychef-experience-bali-luna-gallery-3.webp',
    imageAlt: 'Colourful Balinese ingredients and spice pastes prepared for a private villa cooking class',
    body: `<p>Every class is led by a trained myCHEF chef and held entirely at your villa. We bring the specialist equipment and any ingredients your kitchen does not stock. You bring curiosity and an appetite. All classes include hands-on instruction, a full sit-down meal of what you cooked, printed recipe cards, and a digital recipe booklet emailed after the session.</p>

    <p><strong>Balinese Heritage Class — 3 hours</strong><br/>
    The foundation of Balinese cooking is the spice paste. You learn to make <em>base gede</em> and <em>base wangi</em> by hand in a stone mortar, then build a complete meal: <em>sate lilit</em> on lemongrass skewers, <em>lawar</em>, a slow-braised pork dish, and a simple palm-sugar dessert. This class teaches the flavour logic of Bali — once you understand the pastes, you can improvise.</p>

    <p><strong>Indonesian Archipelago Class — 2.5 hours</strong><br/>
    A broader tour of the country's greatest dishes: <em>rendang</em> from West Sumatra made with proper layering and patience, <em>nasi goreng</em> built on day-old rice and kecap manis, <em>gado-gado</em> with hand-ground peanut sauce, and <em>es cendol</em> for dessert. Ideal for groups who want broad Indonesian literacy rather than deep Bali-specific technique.</p>

    <p><strong>Modern Indonesian Fusion — 3 hours</strong><br/>
    For confident home cooks who want to bring Indonesian flavours into contemporary plated cooking. Your chef demonstrates how sambal heat, coconut richness, tamarind acidity and pandan fragrance work in refined presentations, covering sauce reduction, protein cookery and plating composition.</p>

    <p><strong>Seafood & Grill Masterclass — 2 hours</strong><br/>
    Bali is surrounded by excellent seafood. This class focuses on whole fish: cleaning, marinating, charcoal grill management, and the construction of raw, cooked and roasted Balinese sambals. Highly practical and immediately transferable to home cooking.</p>

    <p><strong>Plant-Based Bali — 2.5 hours</strong><br/>
    Indonesian cuisine has a deep tradition of vegetable-forward cooking. This class explores proper tempeh technique, young jackfruit, coconut curries and vegan sambal — no substitutions required. Suitable for vegan and vegetarian groups, and eye-opening for omnivores.</p>

    <p>All classes are available for groups of 2–12 guests. Pricing starts from <strong>IDR 700,000 per person</strong>. Bespoke classes can be built around a specific dish or cuisine with one week's notice.</p>`,
  },
  {
    id: 'market-trip',
    type: 'content' as const,
    subtitle: 'Morning Market Add-On',
    title: 'Optional Sunrise Market Trip with Your Chef',
    image: '/generated/luna-ingredients.webp',
    imageAlt: 'Fresh Balinese market ingredients and tropical produce selected for a private cooking class',
    body: `<p>The optional market trip turns a cooking class into a full half-day immersion. Your chef collects you from your villa at 6am and takes you to the local <em>pasar</em> used by professional cooks and Balinese households — not the sanitised tourist version.</p>

    <p>Walking the market with a chef changes everything. You learn how to choose shallots by variety and freshness, how to judge turmeric and ginger, and how to identify good tropical fish. You will see ingredients rarely exported: <em>kecombrang</em> (torch ginger flower), <em>daun salam</em>, banana blossom, fresh tempeh still warm from a nearby producer. Your chef negotiates in Bahasa Indonesia and selects the exact produce for your class.</p>

    <p>By 8am you return to the villa with a basket of ingredients you now understand, a chef who has already begun planning the prep, and a much deeper connection to the food you are about to cook. The market trip is an optional add-on, priced at <strong>IDR 250,000 per person</strong>, and adds roughly two hours to the experience. It is recommended for anyone interested in food culture, not only cooking technique.</p>`,
  },
  {
    id: 'features',
    type: 'features' as const,
    subtitle: 'What You Get',
    title: 'Every Private Cooking Class Bali Includes',
    features: [
      {
        icon: GraduationCap,
        title: 'Professional Instruction',
        desc: 'Your class is led by a trained professional chef with real restaurant experience — not a tour guide reciting a script. You receive direct feedback and proper technique.',
      },
      {
        icon: Home,
        title: 'Your Villa Kitchen',
        desc: 'No transport, no shared benches, no strangers. The class happens in your own villa, at your pace, with your group.',
      },
      {
        icon: Users,
        title: 'Groups 2–12',
        desc: 'From an intimate couple\'s cooking date to a twelve-person villa holiday. Everyone participates; nobody watches from the back.',
      },
      {
        icon: UtensilsCrossed,
        title: 'Eat What You Cook',
        desc: 'Each class ends with a full sit-down meal of the dishes you prepared, served at your own villa table.',
      },
      {
        icon: ChefHat,
        title: 'Recipe Cards & Booklet',
        desc: 'Take home printed recipe cards and a digital booklet with ingredient lists and technique notes written for a standard home kitchen.',
      },
      {
        icon: ShoppingBasket,
        title: 'Fresh Ingredients',
        desc: 'All produce is sourced fresh for your class. We handle the market shopping so you can focus on learning.',
      },
    ],
  },
  {
    id: 'occasions',
    type: 'content' as const,
    subtitle: 'For Every Group',
    title: 'A Private Cooking Class for Couples, Families & Celebrations',
    image: '/generated/mychef-experience-bali-luna-table.webp',
    imageAlt: 'Guests enjoying the meal they cooked during a private Balinese cooking class',
    body: `<p>A private cooking class is one of the most memorable activities you can add to a Bali villa stay. It works across almost every occasion because it combines activity, learning and a shared meal in one private experience.</p>

    <p><strong>Couples and honeymoons:</strong> A two-person cooking class is a genuinely romantic alternative to another restaurant booking. You cook side by side, learn something together, and sit down to a meal you made with nobody else around. It is personal, playful, and a better story than a dinner reservation.</p>

    <p><strong>Friends and birthday groups:</strong> Add a cooking class as the centrepiece of your villa afternoon. A few hours of hands-on cooking with a chef ends in a long, celebratory dinner you prepared yourselves. No transport, no venue hunt, no split bills.</p>

    <p><strong>Family holidays:</strong> We offer a family-friendly version of every class. Children from around six years old take part in age-appropriate tasks — mixing, shaping sate lilit, decorating dessert — while parents handle knife work and high-heat cooking. Children who cook their own dinner tend to eat it without negotiation.</p>

    <p>At the end of every class, each guest receives printed recipe cards, a digital recipe booklet and a certificate of completion. The recipes are scaled and written for a standard home kitchen so you can recreate the dishes when you return home.</p>`,
  },
  {
    id: 'locations',
    type: 'content' as const,
    subtitle: 'Where We Teach',
    title: 'Private Cooking Classes Across Bali',
    body: `<p>We run private cooking classes at villas and estates across the island. Each region offers a slightly different atmosphere, and your chef adapts the menu and timing to what works locally.</p>

    <p><strong>Seminyak & Petitenget:</strong> Mature villa estates with well-equipped kitchens and quiet walled gardens. A convenient choice for couples and small groups who want a refined, contained experience close to restaurants and shops. See our <a href="/private-chef/seminyak" class="text-[#7E6410] hover:underline font-medium">Seminyak private chef page</a> for more villa dining options in the area.</p>

    <p><strong>Canggu & Berawa:</strong> Design-forward villas with open-plan kitchens and easygoing energy. Popular with groups who want a contemporary Bali experience. See our <a href="/private-chef/canggu" class="text-[#7E6410] hover:underline font-medium">Canggu private chef page</a>.</p>

    <p><strong>Ubud:</strong> Jungle and rice-terrace villas with cooler mornings and a strong connection to Balinese culture. The market trip add-on is especially powerful here because Ubud's morning markets are among the island's best. See our <a href="/private-chef/ubud" class="text-[#7E6410] hover:underline font-medium">Ubud private chef page</a>.</p>

    <p><strong>Uluwatu:</strong> Clifftop villas with dramatic sunset views. A cooking class here pairs beautifully with an evening meal on the terrace. See our <a href="/private-chef/uluwatu" class="text-[#7E6410] hover:underline font-medium">Uluwatu private chef page</a>.</p>

    <p>If your villa is outside these areas, <a href="https://wa.me/6289674072020" class="text-[#7E6410] hover:underline font-medium">message us on WhatsApp</a> and we will confirm availability and logistics.</p>`,
  },
  {
    id: 'pricing',
    type: 'content' as const,
    subtitle: 'Investment',
    title: 'Private Cooking Class Bali Pricing',
    body: `<p>Our private villa cooking classes start from <strong>IDR 700,000 per person</strong> for a standard 2.5 to 3-hour class, including the chef, all ingredients, hands-on instruction, the sit-down meal, recipe cards and the digital booklet. Classes require a minimum of two guests and can accommodate up to twelve.</p>

    <p><strong>What is included in the base price:</strong></p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;margin-bottom:0.5rem;">
      <li>Professional chef and any required assistant for the full class</li>
      <li>All premium ingredients sourced fresh for your session</li>
      <li>Specialist equipment brought by the chef if your villa lacks it</li>
      <li>Hands-on instruction adapted to your group's level</li>
      <li>Full meal of the dishes cooked, served at your villa table</li>
      <li>Printed recipe cards and digital recipe booklet</li>
    </ul>

    <p>The sunrise market trip is an optional add-on at <strong>IDR 250,000 per person</strong> and adds approximately two hours to the experience. Bespoke menus, premium proteins and additional courses can be arranged on request. For a tailored quote based on your group size, villa location and preferred class, <a href="https://wa.me/6289674072020" class="text-[#7E6410] hover:underline font-medium">message us on WhatsApp</a> — we reply within the hour.</p>`,
  },
  {
    id: 'upgrades',
    type: 'content' as const,
    subtitle: 'Make It a Full Day',
    title: 'Popular Upgrades for Your Cooking Class',
    body: `<p>Beyond the market trip, many guests add a wine or arak pairing to match the meal, a photographer to capture the cooking process, or a follow-on dinner where the chef serves additional courses after the class. For retreats and corporate groups, we can run multiple simultaneous stations or a friendly team cook-off.</p>

    <p>If you want to continue learning after your holiday, ask about our digital recipe collection and online technique videos. A <a href="/blog/bali-villa-cooking-class-private-chef" class="text-[#7E6410] hover:underline font-medium">private cooking class Bali</a> experience with myCHEF is designed to give you skills that travel home with you.</p>`,
  },
  {
    id: 'faq',
    type: 'faq' as const,
    subtitle: 'Common Questions',
    title: 'Private Cooking Class FAQ',
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Book Your Class',
    title: 'Ready to Cook Like a Local in Bali?',
    body: 'Tell us your villa, preferred class type, group size and date. We will confirm your chef and pricing within 2 hours.',
    primaryAction: {
      label: 'Book a Cooking Class',
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
  {
    question: 'Do I need cooking experience to join?',
    answer: 'No experience is required. Our chefs adapt the instruction to your group. If you have never held a chef\'s knife, we start there. If you are already confident, we go deeper into technique and flavour building.',
  },
  {
    question: 'What equipment does my villa need?',
    answer: 'A working stovetop, basic pots and pans, and a chopping board are enough. Your chef brings professional knives and any specialist equipment — mortar and pestle, spice grinder, skewers, thermometers — so the class can run in almost any villa kitchen.',
  },
  {
    question: 'Can I request a specific dish or regional cuisine?',
    answer: 'Yes. With one week\'s notice we can build a bespoke class around a specific dish, a regional Indonesian cuisine, or something you ate in Bali and want to recreate at home.',
  },
  {
    question: 'Is the morning market trip included?',
    answer: 'The market trip is an optional add-on at IDR 250,000 per person. It runs from approximately 6am to 8am before the class begins and adds about two hours to the total experience.',
  },
  {
    question: 'Can children participate?',
    answer: 'Yes. We offer a family-friendly version of every class. Children under eight participate in age-appropriate tasks supervised by a parent — mixing, shaping and decorating rather than knife work or high-heat cooking.',
  },
  {
    question: 'What do we receive at the end of the class?',
    answer: 'Every guest receives printed recipe cards for the dishes cooked, a digital recipe booklet emailed after the session with full ingredient lists and technique notes, and a certificate of completion.',
  },
  {
    question: 'How many people can join a class?',
    answer: 'Private classes are designed for 2 to 12 guests. For larger groups or corporate retreats, contact us and we can arrange multiple chefs or a longer session.',
  },
  {
    question: 'Where in Bali do you teach?',
    answer: 'We teach in villas across Seminyak, Canggu, Ubud, Uluwatu, Jimbaran, Nusa Dua, Sanur and surrounding areas. If your villa is outside these main regions, message us and we will confirm logistics.',
  },
  {
    question: 'Can dietary requirements be accommodated?',
    answer: 'Yes. We adapt classes for vegetarian, vegan, gluten-free, halal and allergy requirements. Tell us when you book so the menu is planned correctly from the start.',
  },
  {
    question: 'How far in advance should I book?',
    answer: 'We recommend booking at least one week ahead, and earlier during peak season. Last-minute bookings are sometimes possible depending on chef availability.',
  },
  {
    question: 'Is the price per person or per group?',
    answer: 'Classes are priced per person, with a minimum of two guests. The per-person rate includes the chef, ingredients, instruction, the meal, and take-home recipes.',
  },
]

const RELATED_PAGES = [
  { label: 'Private Chef Bali', href: '/fine-dining/private-chef-bali', desc: 'Full private chef dinner service at your Bali villa.' },
  { label: 'Romantic Dinner Bali', href: '/fine-dining/romantic-dinner', desc: 'Candlelit private chef dinner for couples in Bali villas.' },
  { label: 'Floating Breakfast Bali', href: '/catering/floating-breakfast', desc: 'The iconic Bali villa floating breakfast experience.' },
  { label: 'Pricing', href: '/pricing', desc: 'Transparent pricing for all myCHEF services and group sizes.' },
]

export default function ExperiencePrivateCookingClassPage() {
  return (
    <PremiumPage
      slug="experiences/private-cooking-class"
      title="Private Cooking Class Bali | Chef at Your Villa | myCHEF"
      description="Book a private Balinese and Indonesian cooking class at your Bali villa. A professional myCHEF chef teaches your group hands-on, then you eat what you cook. Groups 2–12."
      seoTitle="Private Cooking Class Bali | Chef at Your Villa | myCHEF"
      seoDescription="Book a private Balinese and Indonesian cooking class at your Bali villa. A professional myCHEF chef teaches your group hands-on, then you eat what you cook. Groups 2–12."
      canonicalUrl={CANONICAL}
      h1="Private Cooking Class Bali — Learn in Your Villa"
      subtitle="Learn Balinese & Indonesian Cuisine with a Private Chef at Your Villa"
      heroImage="/generated/private-cooking-class-bali-villa.webp"
      heroImageAlt="Private chef teaching Balinese cooking at a luxury Bali villa"
      ogImage="https://mychef.id/generated/private-cooking-class-bali-villa.webp"
      keywords={[
        'private cooking class Bali',
        'Bali cooking class villa',
        'private chef cooking class Bali',
        'in villa cooking class Bali',
        'Balinese cooking class private',
        'Indonesian cooking class Bali',
        'cooking class at villa Bali',
        'market tour cooking class Bali',
      ]}
      highlights={['Class Types', 'Market Trip', 'All Skill Levels', 'Pricing']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      ctaText="Book a Cooking Class"
      ctaSubtext="Tell us your villa, group size and preferred class — we reply within 2 hours."
      extraJsonLd={[
        breadcrumbSchema(
          'Private Cooking Class Bali',
          CANONICAL,
          'Experiences',
          'https://mychef.id/experiences'
        ),
        faqPageSchema(FAQS.map((f) => ({ question: f.question, answer: f.answer }))),
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Private Cooking Class Bali',
          description:
            'Private Balinese and Indonesian cooking classes at your Bali villa with a professional chef. Hands-on instruction, fresh ingredients, and a full meal for groups of 2–12.',
          provider: { '@type': 'Organization', name: 'myCHEF', url: 'https://mychef.id' },
          areaServed: { '@type': 'Place', name: 'Bali, Indonesia' },
          url: CANONICAL,
          image: 'https://mychef.id/generated/private-cooking-class-bali-villa.webp',
          offers: {
            '@type': 'Offer',
            priceCurrency: 'IDR',
            price: '700000',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '700000',
              priceCurrency: 'IDR',
              unitText: 'per person',
              description: 'Starting price per person, minimum 2 guests',
            },
          },
        },
      ]}
    />
  )
}
