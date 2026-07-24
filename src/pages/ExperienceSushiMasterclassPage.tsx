import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { ChefHat, Fish, UtensilsCrossed, Clock, Users, Wine } from 'lucide-react'
import type { PageSection } from '@/components/PremiumPage'

const WA_LINK = 'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27m%20interested%20in%20the%20private%20sushi%20masterclass%20in%20Bali.%20Can%20you%20share%20availability%20and%20pricing%3F'
const CANONICAL = 'https://mychef.id/experience/sushi-masterclass'

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Sushi Masterclass Bali',
    title: 'Learn the Art of Sushi in the Privacy of Your Bali Villa',
    body: `<p>Bali is a place people come to slow down, to taste more carefully, and to share moments that feel far removed from ordinary life. A private sushi masterclass fits that rhythm perfectly. Instead of sitting in a restaurant and watching a chef work behind a counter, you stand beside one — rolling, slicing, seasoning, and understanding why each step matters.</p>

    <p>Our myCHEF sushi masterclasses are designed for guests who want more than a meal. They want the story behind it. Under the guidance of an experienced chef, you learn how to season sushi rice until it is glossy and just warm, how to handle a filleting knife with confidence, how to balance wasabi and soy, and how to present nigiri and maki that look as considered as they taste.</p>

    <p>Every class takes place in your villa. We bring the fish, the tools, the bamboo mats, and the quiet patience required to teach properly. By the end of the session you will not only have eaten exceptional sushi — you will know how to make it. For couples, families, and small groups looking for a memorable experience in Bali, this is one of the most intimate ways to spend an afternoon.</p>`,
  },
  {
    id: 'what-to-expect',
    type: 'content' as const,
    subtitle: 'The Experience',
    title: 'What Happens During a Private Sushi Masterclass',
    image: '/generated/mychef-experience-bali-luna-hero-v4.webp',
    imageAlt: 'Private chef teaching a sushi masterclass at a Bali villa',
    body: `<p>The class begins when your chef arrives at your villa with everything needed for the lesson. There is no need to shop, prep, or rearrange the kitchen. We set up a clean station at your counter or island, lay out the ingredients in the order they will be used, and talk through the plan for the session before anyone picks up a knife.</p>

    <p>We start with the rice because great sushi starts there. You will learn the ratio of rice to vinegar, how to fan and fold the grains without crushing them, and why temperature matters more than most home cooks realise. Once the rice is resting, we move to the fish. Your chef demonstrates how to assess freshness, how to slice for nigiri against the grain, and how to portion maki fillings so every roll is balanced.</p>

    <p>After the demonstration, it is your turn. With the chef beside you, you shape your first pieces of nigiri, roll your first maki, and learn how to cut a roll cleanly without squeezing the filling out. The afternoon becomes hands-on quickly, but it never feels rushed. Questions are welcome throughout. We keep the group small so everyone gets direct guidance and finishes the class with a plate of sushi they made themselves.</p>

    <p>The experience ends with a relaxed tasting at your villa table. You eat what you have prepared, often alongside a few extra pieces finished by the chef, with sake, wine, or tea available depending on your preference. It is a complete experience — educational, delicious, and entirely private.</p>`,
  },
  {
    id: 'curriculum',
    type: 'content' as const,
    subtitle: 'What You Will Learn',
    title: 'A Practical Sushi Curriculum for Home Cooks',
    image: '/generated/luna-ingredients.webp',
    imageAlt: 'Fresh ingredients prepared for a private sushi making class in Bali',
    body: `<p>The curriculum is built around the skills you can actually use again. We do not overload the session with theory; every topic is connected to something you will make with your own hands. By the end of the masterclass you will have covered the core techniques of traditional and contemporary sushi.</p>

    <p><strong>Sushi rice fundamentals:</strong> Washing, soaking, cooking, seasoning, and cooling. You will understand why seasoned rice vinegar is added in stages, why a wooden bowl is used, and how to keep the rice at the right temperature while you work.</p>

    <p><strong>Knife skills and fish handling:</strong> How to hold a sashimi knife, how to slice cleanly, and how to recognise the difference between cuts meant for nigiri, sashimi, and maki. We also cover safe handling, storage, and the simple signs that tell you fish is at its best.</p>

    <p><strong>Nigiri technique:</strong> The three-motion shaping method, how much rice to use, how to apply wasabi, and how to place the topping so it adheres without being compressed. You will practise with several proteins and vegetables.</p>

    <p><strong>Maki and uramaki rolling:</strong> How to spread rice evenly on nori, how to position fillings, how to roll with a bamboo mat, and how to cut six or eight even pieces. We also show a few simple decorative rolls for guests who want to push further.</p>

    <p><strong>Garnish, plating, and service:</strong> Pickled ginger, wasabi, soy sauce etiquette, and how to arrange sushi on a plate so it looks like a restaurant presentation. We finish with guidance on how to recreate the experience back home, including a short ingredient-shopping checklist.</p>`,
  },
  {
    id: 'features',
    type: 'features' as const,
    subtitle: 'What Is Included',
    title: 'Everything You Need for a Private Sushi Class',
    features: [
      {
        icon: ChefHat,
        title: 'Expert Chef Instructor',
        desc: 'A trained chef with experience in Japanese technique leads the class, answers questions, and corrects your form in real time.',
      },
      {
        icon: Fish,
        title: 'Fresh Fish & Produce',
        desc: 'All seafood, vegetables, nori, and sushi rice are sourced on the day of your class and transported chilled to your villa.',
      },
      {
        icon: UtensilsCrossed,
        title: 'Professional Tools',
        desc: 'We bring bamboo mats, sashimi knives, rice paddles, and bowls so you can learn on proper equipment.',
      },
      {
        icon: Clock,
        title: 'Flexible Timing',
        desc: 'Classes are typically two to three hours and can be scheduled for lunch, afternoon, or early evening to suit your villa day.',
      },
      {
        icon: Users,
        title: 'Small Group Setting',
        desc: 'Designed for couples, families, or groups of up to six guests so everyone receives hands-on attention.',
      },
      {
        icon: Wine,
        title: 'Tasting & Pairing',
        desc: 'Enjoy the sushi you make with recommended sake, wine, or tea. Beverages can be arranged to match your preferences.',
      },
    ],
  },
  {
    id: 'who-is-it-for',
    type: 'content' as const,
    subtitle: 'Who Should Book',
    title: 'A Sushi Masterclass for Couples, Families & Friends',
    image: '/generated/mychef-experience-bali-luna-table.webp',
    imageAlt: 'Guests enjoying a private dining experience at a Bali villa table',
    body: `<p>This experience works for almost any small group that enjoys food and wants to do something together that does not feel like a standard activity. Couples on a romantic Bali trip often book it as a memorable way to spend an afternoon before a private dinner. Families use it as a hands-on activity that keeps both adults and older children engaged. Groups of friends treat it as a relaxed prelude to a villa party or a sunset evening.</p>

    <p>You do not need any prior cooking experience. The class is designed for home cooks and complete beginners. If you already cook regularly, the chef will adjust the pace and introduce more advanced techniques, knife details, or presentation tips. If you are travelling with mixed skill levels, we manage the group so everyone finishes at the same place: with a plate of sushi they are proud of.</p>

    <p>Because the class takes place in your villa, it also suits guests who prefer privacy, families with young children who need flexibility, or anyone celebrating a special occasion. We can adapt the menu for dietary requirements, including vegetarian, pescatarian, and gluten-free guests. Simply let us know when you book.</p>

    <p>If you are interested in other interactive culinary experiences, our <a href="/in-villa-service/mixology" class="text-[#7E6410] hover:underline font-medium">mixology class</a> and <a href="/blog/bali-villa-cooking-class-private-chef" class="text-[#7E6410] hover:underline font-medium">Bali villa cooking class</a> follow a similar private, chef-led format.</p>`,
  },
  {
    id: 'pricing',
    type: 'content' as const,
    subtitle: 'Investment',
    title: 'Sushi Masterclass Pricing',
    body: `<p>Pricing for a private sushi masterclass depends on the number of guests, the length of the class, the ingredients selected, and any beverage pairings you would like to add. Because these details change with each booking, we do not publish a fixed rate online. Instead, we quote every class individually once we understand your group and preferences.</p>

    <p><strong>Starting from [PRICE REQUIRES CONFIRMATION] per person</strong> for a standard two-hour class with a curated selection of fish and vegetables. Larger groups, premium seafood upgrades, extended sessions, or added wine and sake pairings will adjust the final investment.</p>

    <p><strong>What is included in your quoted price:</strong></p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;margin-bottom:0.5rem;">
      <li>Chef instructor and assistant for the full session</li>
      <li>All ingredients, including fresh fish, vegetables, sushi rice, nori, and seasonings</li>
      <li>Use of professional sushi tools during the class</li>
      <li>Hands-on instruction in rice, knife work, nigiri, and maki</li>
      <li>Tasting of everything prepared during the session</li>
      <li>Kitchen clean-down and packing away of equipment</li>
    </ul>

    <p>Beverages are typically quoted separately so you can choose exactly what you would like. For a full overview of how we structure private experiences, see our <a href="/fine-dining" class="text-[#7E6410] hover:underline font-medium">fine dining page</a> or <a href="/pricing" class="text-[#7E6410] hover:underline font-medium">pricing page</a>. To receive a personalised quote for your villa date, <a href="${WA_LINK}" class="text-[#7E6410] hover:underline font-medium">message us on WhatsApp</a> — we reply within the hour.</p>`,
  },
  {
    id: 'faq',
    type: 'faq' as const,
    subtitle: 'Common Questions',
    title: 'Sushi Masterclass FAQ',
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Reserve Your Class',
    title: 'Ready to Roll Your Own Sushi in Bali?',
    body: 'Tell us your villa location, group size, and preferred date. We will confirm chef availability and send a custom quote within the hour.',
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
  { question: 'Do I need any cooking experience to join the sushi masterclass?', answer: 'No experience is required. The class is designed for beginners and home cooks. Your chef adjusts the pace to your group and provides hands-on guidance throughout.' },
  { question: 'Where does the sushi masterclass take place?', answer: 'The class takes place in your Bali villa, hotel suite, or private residence. We bring all ingredients and equipment, so you only need a counter or island to work at.' },
  { question: 'How long does a private sushi class last?', answer: 'Most classes run between two and three hours, including setup, instruction, hands-on rolling, and the final tasting. Shorter or longer sessions can be arranged on request.' },
  { question: 'What ingredients will we use?', answer: 'We use fresh fish and seafood sourced on the day, along with seasonal vegetables, sushi rice, nori, and traditional seasonings. The exact selection depends on availability and your preferences.' },
  { question: 'Can vegetarians or guests with allergies join?', answer: 'Yes. We can adapt the class for vegetarians, pescatarians, gluten-free guests, and most allergies. Let us know your requirements when you book so we can plan the menu accordingly.' },
  { question: 'How many people can join a private sushi masterclass?', answer: 'The experience is best for couples, families, or small groups of up to six guests. Larger groups can be accommodated with advance notice and additional chefs.' },
  { question: 'What should I wear or bring?', answer: 'Wear comfortable clothing and closed shoes. We provide aprons and all tools. You do not need to bring anything except your appetite and curiosity.' },
  { question: 'How far in advance should I book?', answer: 'We recommend booking at least one week in advance, especially during peak season from July to August and December. Last-minute bookings are sometimes possible depending on chef availability.' },
]

const RELATED_PAGES = [
  { label: 'Fine Dining Bali', href: '/fine-dining', desc: 'Private chef fine dining experiences across Bali villas and estates.' },
  { label: 'Chef\'s Table Bali', href: '/fine-dining/chefs-table', desc: 'An intimate 7-course counter dining experience led by Adriano.' },
  { label: 'Private Chef Bali', href: '/fine-dining/private-chef-bali', desc: 'Full overview of private chef services for any occasion in Bali.' },
  { label: 'Mixology Class', href: '/in-villa-service/mixology', desc: 'Learn cocktails and bartending techniques in your villa.' },
  { label: 'Villa Cooking Class', href: '/blog/bali-villa-cooking-class-private-chef', desc: 'A broader private cooking class experience in your Bali villa.' },
  { label: 'Villa Parties', href: '/events/villa-parties', desc: 'Catering and chef services for private villa parties and celebrations.' },
  { label: 'Pricing', href: '/pricing', desc: 'Transparent pricing for all myCHEF packages and experiences.' },
]

export default function ExperienceSushiMasterclassPage() {
  return (
    <PremiumPage
      slug="experience/sushi-masterclass"
      title="Sushi Masterclass Bali | Private In-Villa Sushi Experience"
      description="Book a private sushi masterclass in Bali. Learn nigiri, maki, and sushi rice in your villa with a myCHEF instructor. Personalised pricing. WhatsApp us."
      seoTitle="Sushi Masterclass Bali | Private In-Villa Sushi Experience — myCHEF"
      seoDescription="Book a private sushi masterclass in Bali. Learn nigiri, maki, and sushi rice in your villa with a myCHEF instructor. Personalised pricing. WhatsApp us."
      canonicalUrl={CANONICAL}
      h1="Sushi Masterclass Bali"
      subtitle="Learn the Art of Sushi with a Private Chef in Your Villa"
      heroImage="/generated/mychef-finedining-bali-chefs-hero.webp"
      heroImageAlt="Private sushi masterclass chef preparing fresh sushi in a Bali villa kitchen"
      ogImage="https://mychef.id/generated/mychef-finedining-bali-chefs-hero.webp"
      keywords={[
        'sushi masterclass bali',
        'private sushi class bali',
        'sushi making class bali',
        'in villa sushi masterclass bali',
        'private chef sushi experience bali',
        'japanese cooking class bali',
        'sushi class for couples bali',
        'bali villa cooking experience',
      ]}
      highlights={['Private Villa Class', 'Hands-On Instruction', 'Fresh Ingredients', 'All Skill Levels']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema('Sushi Masterclass Bali', CANONICAL),
        faqPageSchema(FAQS),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Sushi Masterclass Bali | Private In-Villa Sushi Experience',
          description:
            'Book a private sushi masterclass in Bali. Learn nigiri, maki, and sushi rice in your villa with a myCHEF instructor. Personalised pricing.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: {
            '@type': 'Organization',
            name: 'myCHEF.id',
            logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' },
          },
          datePublished: '2026-07-24',
          dateModified: '2026-07-24',
          image: 'https://mychef.id/generated/mychef-finedining-bali-chefs-hero.webp',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': CANONICAL,
          },
          url: CANONICAL,
          wordCount: 1600,
          keywords:
            'sushi masterclass bali, private sushi class bali, sushi making class bali, in villa sushi masterclass bali, private chef sushi experience bali',
          about: {
            '@type': 'Service',
            name: 'Sushi Masterclass Bali — Private In-Villa Experience',
            provider: { '@type': 'Organization', name: 'myCHEF', url: 'https://mychef.id' },
            areaServed: { '@type': 'Place', name: 'Bali, Indonesia' },
            offers: {
              '@type': 'Offer',
              priceCurrency: 'IDR',
              price: '[PRICE REQUIRES CONFIRMATION]',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: '[PRICE REQUIRES CONFIRMATION]',
                priceCurrency: 'IDR',
                unitText: 'per person',
                description: 'Starting price per person; confirmed on enquiry',
              },
            },
          },
        },
      ]}
      ctaText="Book Your Sushi Masterclass"
      ctaSubtext="Tell us your group size and villa — we will reply within the hour with a bespoke quote."
    />
  )
}
