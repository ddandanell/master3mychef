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

const WA_LINK = 'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27m%20interested%20in%20a%20private%20cooking%20class%20in%20my%20Bali%20villa.%20Please%20send%20class%20options%20and%20pricing.'
const CANONICAL = 'https://mychef.id/experiences/private-cooking-class'

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Private Cooking Class Bali',
    title: 'Private Cooking Class in Bali — The Chef Comes to Your Villa',
    image: '/generated/mychef-cooking-class-chef-teaching-bali-landscape.webp',
    imageAlt: 'Private chef teaching a Balinese cooking class in a modern villa kitchen',
    body: `<p>A group cooking school means a crowded bench, a fixed menu and twenty strangers following the same simplified steps. A myCHEF private cooking class is the opposite: a professional chef in <em>your</em> villa kitchen, teaching the dishes <em>you</em> want to learn, at your pace — with ingredients sourced fresh that morning and a full sit-down meal at your own table when the cooking's done.</p>

    <p>Bali is one of the best places on earth to learn to cook: torch ginger, banana blossom, fresh coconut at every stage, spice pastes refined over generations. The way to understand it isn't watching a demonstration — it's standing beside a chef who explains why each ingredient matters.</p>

    <p><a href="${WA_LINK}" class="text-[#7E6410] hover:underline font-medium">Book a Private Cooking Class — WhatsApp +62 896-7407-2020</a>. Tell us your villa, class and group size — we reply within 2 hours.</p>`,
  },
  {
    id: 'kitchen',
    type: 'content' as const,
    subtitle: 'Not a Cooking School. Your Kitchen.',
    title: 'Learn Where You Are Staying',
    body: `<p>Everything happens where you're staying. No shuttle bus, no shared bench, no rushing to keep pace with strangers. Your chef brings any specialist equipment your villa kitchen lacks — mortar and pestle, spice grinder, skewers — and adapts the instruction to your group: complete beginners get foundations, confident cooks get technique. Either way, everyone cooks, nobody watches from the back.</p>`,
  },
  {
    id: 'classes',
    type: 'content' as const,
    subtitle: 'Choose Your Class',
    title: 'Five Hands-On Private Cooking Classes',
    image: '/generated/mychef-cooking-class-balinese-ingredients-bali-landscape.webp',
    imageAlt: 'Colourful Balinese ingredients and spice pastes prepared for a private villa cooking class',
    body: `<p>All classes are hands-on, private and held at your villa for 2–12 guests. Every class ends with the full meal you cooked, plus printed recipe cards and a digital booklet written for a standard home kitchen.</p>

    <p><strong>Balinese Heritage — 3 hours.</strong> The island's flavour logic, from scratch: <em>base gede</em> and <em>base wangi</em> spice pastes pounded in a stone mortar, <em>sate lilit</em> on lemongrass skewers, <em>lawar</em>, a slow-braised pork dish and a palm-sugar dessert.</p>

    <p><strong>Indonesian Archipelago — 2.5 hours.</strong> A tour of the country's greatest plates: rendang done with patience, nasi goreng on day-old rice, gado-gado with hand-ground peanut sauce, es cendol to finish.</p>

    <p><strong>Modern Indonesian Fusion — 3 hours.</strong> For confident cooks: sambal heat, coconut richness and tamarind acidity in refined plated presentations — sauce work, protein cookery, composition.</p>

    <p><strong>Seafood & Grill Masterclass — 2 hours.</strong> Whole fish, start to finish: cleaning, marinating, charcoal management, and a trio of Balinese sambals. Instantly transferable to your home grill.</p>

    <p><strong>Plant-Based Bali — 2.5 hours.</strong> Proper tempeh technique, young jackfruit, coconut curries and vegan sambal. No substitutions needed — Indonesian cuisine has always cooked this way.</p>

    <p>Want something else entirely? With a week's notice we'll build a bespoke class around it. Love Japanese food? There's a whole <a href="/experiences/sushi-masterclass" class="text-[#7E6410] hover:underline font-medium">dedicated private sushi masterclass</a> for that.</p>`,
  },
  {
    id: 'market-trip',
    type: 'content' as const,
    subtitle: 'The Sunrise Market Add-On',
    title: 'Optional Morning Market Trip with Your Chef',
    image: '/generated/luna-ingredients.webp',
    imageAlt: 'Fresh Balinese market ingredients and tropical produce selected for a private cooking class',
    body: `<p>For IDR 250K per person, the class starts before sunrise. Your chef collects you at 6am and walks you through the local <em>pasar</em> the professionals use — choosing shallots by variety, judging turmeric, spotting the day's best fish, meeting ingredients that rarely leave the island. By 8am you're back at the villa with a basket you understand and a menu taking shape. It adds roughly two hours and is the single best upgrade for anyone curious about food culture, not just technique.</p>`,
  },
  {
    id: 'features',
    type: 'features' as const,
    subtitle: 'What Every Class Includes',
    title: 'Every Private Cooking Class Bali Includes',
    features: [
      {
        icon: GraduationCap,
        title: 'Professional Instruction',
        desc: 'A trained chef adapts the class to your skill level, from foundations to advanced technique.',
      },
      {
        icon: Home,
        title: 'Your Villa Kitchen',
        desc: 'No transport, no shared benches, no strangers. The class happens in your own villa.',
      },
      {
        icon: Users,
        title: 'Groups 2–12',
        desc: 'From an intimate couple’s class to a twelve-person villa holiday.',
      },
      {
        icon: UtensilsCrossed,
        title: 'Eat What You Cook',
        desc: 'Each class ends with a full sit-down meal of the dishes you prepared.',
      },
      {
        icon: ChefHat,
        title: 'Recipe Cards & Booklet',
        desc: 'Take home printed recipe cards and a digital booklet for a standard home kitchen.',
      },
      {
        icon: ShoppingBasket,
        title: 'Fresh Ingredients',
        desc: 'All produce is sourced fresh for your class; we handle the market shopping.',
      },
    ],
  },
  {
    id: 'pricing',
    type: 'content' as const,
    subtitle: 'Private Cooking Class Pricing',
    title: 'From IDR 700K Per Person ++',
    body: `<p>Classes start from <strong>IDR 700K per person ++</strong> (11% government tax + 10% service charge), minimum two guests, up to twelve. The sunrise market trip adds IDR 250K per person. Bespoke menus, premium proteins and extra courses are quoted individually — always itemised, always confirmed before you commit.</p>

    <p>For a group of four, that's a private chef, a hands-on class, a full meal and recipes to take home — often less per person than a tasting-menu dinner out, with far more of the day in it.</p>

    <p><a href="${WA_LINK}" class="text-[#7E6410] hover:underline font-medium">Get My Class Quote — WhatsApp +62 896-7407-2020</a>. See our <a href="/pricing" class="text-[#7E6410] hover:underline font-medium">full pricing guide</a>.</p>`,
  },
  {
    id: 'occasions',
    type: 'content' as const,
    subtitle: 'Cooking Classes for Couples, Families & Groups',
    title: 'Who a Private Cooking Class Is For',
    image: '/generated/mychef-cooking-class-group-dining-bali-landscape.webp',
    imageAlt: 'Guests enjoying the meal they cooked during a private Balinese cooking class',
    body: `<p><strong>Couples and honeymoons</strong> book it as the anti-restaurant date. <strong>Friends and birthday groups</strong> make it the centrepiece of a villa afternoon that flows into a long dinner. <strong>Families</strong> get a family-friendly version of every class — children from around six take on age-appropriate tasks while adults handle knives and heat. Children who cook their own dinner tend to eat it without negotiation. Retreat hosts can <a href="/events/retreats" class="text-[#7E6410] hover:underline font-medium">add a class to a retreat programme</a>.</p>

    <p>Staying in Ubud? Our <a href="/private-chef/ubud" class="text-[#7E6410] hover:underline font-medium">private chef in Ubud — market country</a> team runs classes in the island's market heartland.</p>`,
  },
  {
    id: 'faq',
    type: 'faq' as const,
    subtitle: 'Private Cooking Class Bali — FAQ',
    title: 'Common Questions',
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Book Your Class',
    title: 'Ready to Cook Like a Local in Bali?',
    body: `Tell us your villa, your class, your group size and your date — we will confirm your chef and send an itemised quote within 2 hours. Also see our <a href="/experiences/sushi-masterclass" class="text-[#7E6410] hover:underline font-medium">dedicated private sushi masterclass</a>, <a href="/experiences/kids-birthday-chef-party" class="text-[#7E6410] hover:underline font-medium">kids</a> cooking parties and <a href="/experiences" class="text-[#7E6410] hover:underline font-medium">all private experiences</a>`,
    primaryAction: {
      label: 'Book a Cooking Class',
      href: WA_LINK,
      external: true,
    },
    secondaryAction: {
      label: 'Full Pricing Guide',
      href: '/pricing',
    },
  },
]

const FAQS = [
  { question: 'How much does a private cooking class at a Bali villa cost?', answer: 'From IDR 700K per person ++, including the chef, all ingredients, instruction, the meal and recipes. The optional sunrise market trip is IDR 250K per person.' },
  { question: 'How many people can join?', answer: 'Classes run for 2–12 guests. Larger groups or corporate sessions can be arranged with multiple chefs.' },
  { question: 'How long does a class take?', answer: 'Two to three hours depending on the class you choose, plus the meal. Add about two hours for the market trip.' },
  { question: 'Do I need cooking experience?', answer: 'None. Beginners get foundations; experienced cooks get deeper technique. Every class adapts to the group.' },
  { question: 'What does our villa kitchen need?', answer: 'A working stovetop, basic pots and a chopping board is enough — your chef brings professional knives and specialist equipment.' },
  { question: 'Can you handle dietary requirements?', answer: 'Yes — vegetarian, vegan (try the Plant-Based Bali class), gluten-free, halal and allergy requirements are planned into the menu in advance.' },
  { question: 'Can children join?', answer: 'Yes — every class has a family-friendly version. Children from around six participate in age-appropriate, supervised tasks.' },
  { question: 'How far in advance should we book?', answer: 'A few days is usually enough; a week or more for bespoke menus and peak season (July–August, December).' },
  { question: 'What deposit is required?', answer: 'A 50% deposit confirms your chef and date; the remaining 50% is due the day before the class.' },
]

const RELATED_PAGES = [
  { label: 'Private Sushi Masterclass', href: '/experiences/sushi-masterclass', desc: 'Dedicated private sushi masterclass at your villa.' },
  { label: 'Kids Cooking Parties', href: '/experiences/kids-birthday-chef-party', desc: 'Kids’ cooking birthday parties at your Bali villa.' },
  { label: 'All Private Experiences', href: '/experiences', desc: 'Browse the full private experiences collection.' },
  { label: 'Pricing', href: '/pricing', desc: 'Transparent pricing for all myCHEF services.' },
]

export default function ExperiencePrivateCookingClassPage() {
  return (
    <PremiumPage
      slug="experiences/private-cooking-class"
      title="Private Cooking Class Bali | Chef Comes to Your Villa"
      description="A private cooking class at your Bali villa — your chef, your kitchen, your cuisine. From IDR 700K/person, ingredients & recipes included. WhatsApp myCHEF."
      seoTitle="Private Cooking Class Bali | Chef Comes to Your Villa"
      seoDescription="A private cooking class at your Bali villa — your chef, your kitchen, your cuisine. From IDR 700K/person, ingredients & recipes included. WhatsApp myCHEF."
      canonicalUrl={CANONICAL}
      h1="Private Cooking Class in Bali — The Chef Comes to Your Villa"
      subtitle="Learn Balinese & Indonesian Cuisine with a Private Chef at Your Villa"
      heroImage="/generated/mychef-cooking-class-chef-teaching-bali-landscape.webp"
      heroImageAlt="Private chef teaching Balinese cooking at a luxury Bali villa"
      ogImage="https://mychef.id/generated/mychef-cooking-class-chef-teaching-bali-landscape.webp"
      keywords={[
        'private cooking class bali',
        'in villa cooking class bali',
        'cooking class at your villa bali',
        'balinese cooking class private',
        'chef cooking class bali',
      ]}
      highlights={['Five Class Formats', 'Market Add-On', 'All Skill Levels', 'From IDR 700K/person']}
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
          description: 'A private cooking class at your Bali villa: five hands-on class formats from Balinese heritage to plant-based, led by a professional chef in your kitchen. From IDR 700K per person ++, 2–12 guests, ingredients, meal and recipes included. Optional sunrise market trip IDR 250K per person.',
          provider: {
            '@type': 'LocalBusiness',
            name: 'myCHEF',
            url: 'https://mychef.id',
            telephone: '+62 896-7407-2020',
            areaServed: { '@type': 'Place', name: 'Bali, Indonesia' },
          },
          serviceType: 'Private in-villa cooking class',
          image: 'https://mychef.id/generated/mychef-cooking-class-chef-teaching-bali-landscape.webp',
          offers: {
            '@type': 'Offer',
            priceCurrency: 'IDR',
            price: '700000',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '700000',
              priceCurrency: 'IDR',
              unitText: 'per person, before 11% tax and 10% service charge',
            },
          },
          url: CANONICAL,
        },
      ]}
    />
  )
}
