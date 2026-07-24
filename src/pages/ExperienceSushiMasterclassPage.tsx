import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema, serviceSchema } from '@/components/SeoHead'
import { ChefHat, Fish, UtensilsCrossed, Clock, Users, Wine } from 'lucide-react'
import type { PageSection } from '@/components/PremiumPage'

const WA_LINK = 'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27m%20interested%20in%20a%20private%20sushi%20masterclass%20at%20my%20Bali%20villa.%20Please%20send%20availability%20and%20pricing.'
const CANONICAL = 'https://mychef.id/experiences/sushi-masterclass'

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Sushi Masterclass Bali',
    title: 'Private Sushi Masterclass in Bali — Roll, Slice, Eat',
    image: '/generated/mychef-sushi-masterclass-chef-hands-bali-landscape.webp',
    imageAlt: 'Sushi making class Bali with a chef teaching in a private villa kitchen',
    body: `<p>Great sushi looks effortless. It isn't — and that's exactly what makes learning it so satisfying. A myCHEF private sushi masterclass brings a sushi-trained chef to your Bali villa with everything you need: fish sourced fresh that day, proper knives, bamboo mats, and the patience to teach you why seasoned rice, a clean cut and the right pressure turn simple ingredients into something extraordinary.</p>

    <p>Two to three hours later, you're sitting at your own table eating nigiri and maki you made with your own hands. No restaurant, no crowd, no commute — just your group, your villa and a skill you take home.</p>

    <p><a href="${WA_LINK}" class="text-[#7E6410] hover:underline font-medium">Reserve My Sushi Masterclass — WhatsApp +62 896-7407-2020</a>. Tell us your villa, group size and date — we reply within the hour.</p>`,
  },
  {
    id: 'concept',
    type: 'content' as const,
    subtitle: 'A Private Sushi Class, in Your Villa',
    title: 'Learn Sushi Without the Classroom',
    image: '/generated/mychef-sushi-masterclass-instruction-bali-landscape.webp',
    imageAlt: 'Private chef teaching a sushi masterclass at a Bali villa',
    body: `<p>Bali has cooking schools aplenty, but a dedicated sushi masterclass — private, hands-on, in your own villa — is a different league: no shared classroom, no fixed menu, no travel. Ours is built for couples, families and small groups who want more than a meal: the story and the technique behind it.</p>

    <p>You'll learn to season sushi rice until it's glossy and just warm, handle a sashimi knife with confidence, shape nigiri with the three-motion method, and roll maki that cuts cleanly into even pieces. Beginners are the norm, not the exception — the chef adjusts pace and depth to your group, and nobody leaves without a plate they're proud of.</p>`,
  },
  {
    id: 'experience',
    type: 'content' as const,
    subtitle: 'What Happens During the Masterclass',
    title: 'From Rice to Tasting in One Session',
    body: `<p><strong>1. Setup at your villa.</strong> The chef arrives with fish, rice, nori, tools and boards, and builds a clean station at your kitchen counter or island. Nothing for you to shop or prep.</p>

    <p><strong>2. Rice first.</strong> Washing, soaking, seasoning and fanning — the foundation everything else depends on.</p>

    <p><strong>3. Fish and knife work.</strong> How to judge freshness, slice against the grain for nigiri, and portion fillings for balanced rolls.</p>

    <p><strong>4. Your turn.</strong> Nigiri shaping, maki and hand rolls, with the chef beside you correcting form in real time.</p>

    <p><strong>5. The tasting.</strong> You eat everything you made — plus a few pieces finished by the chef — with sake, wine or tea if you'd like it.</p>`,
  },
  {
    id: 'curriculum',
    type: 'content' as const,
    subtitle: 'What You\'ll Learn',
    title: 'A Practical Sushi Curriculum',
    image: '/generated/mychef-sushi-masterclass-ingredients-bali-portrait.webp',
    imageAlt: 'Fresh ingredients prepared for a private sushi making class in Bali',
    body: `<ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;margin-bottom:0.5rem;">
      <li><strong>Sushi rice fundamentals</strong> — ratios, seasoning in stages, temperature control</li>
      <li><strong>Knife skills and fish handling</strong> — clean cuts, safe storage, freshness checks</li>
      <li><strong>Nigiri technique</strong> — rice portioning, wasabi placement, the three-motion shape</li>
      <li><strong>Maki and hand rolls</strong> — even spreading, filling balance, clean cutting</li>
      <li><strong>Plating and etiquette</strong> — ginger, wasabi, soy, and how to present sushi like a restaurant</li>
      <li><strong>A take-home checklist</strong> — what to buy and how to recreate the experience back home</li>
    </ul>`,
  },
  {
    id: 'features',
    type: 'features' as const,
    subtitle: 'What\'s Included',
    title: 'Everything You Need for a Sushi Masterclass',
    features: [
      {
        icon: ChefHat,
        title: 'Sushi-Trained Chef',
        desc: 'A chef instructor with Japanese technique, guiding your group from rice to plating.',
      },
      {
        icon: Fish,
        title: 'Fresh Fish & Produce',
        desc: 'All seafood, vegetables, sushi rice, nori and seasonings sourced fresh on the day.',
      },
      {
        icon: UtensilsCrossed,
        title: 'Professional Tools',
        desc: 'Sashimi knives, bamboo mats, rice paddles, bowls and aprons brought to your villa.',
      },
      {
        icon: Clock,
        title: 'Flexible Timing',
        desc: 'Classes run two to three hours; lunch, afternoon or early-evening slots available.',
      },
      {
        icon: Users,
        title: 'Small Group Setting',
        desc: 'Ideal for 2–6 guests so everyone gets hands-on guidance.',
      },
      {
        icon: Wine,
        title: 'Tasting & Pairing',
        desc: 'Enjoy the sushi you make with sake, wine or tea. Beverages quoted separately.',
      },
    ],
  },
  {
    id: 'pricing',
    type: 'content' as const,
    subtitle: 'Sushi Masterclass Pricing',
    title: 'From IDR 700K Per Person ++',
    body: `<p>Private in-villa classes at myCHEF start from <strong>IDR 700K per person ++</strong> (11% government tax + 10% service charge), with the final quote depending on your group size, the fish selection and any sake or wine pairing you add. Every quote is itemised and confirmed before you commit.</p>

    <p>Classes suit 2–6 guests best so everyone gets direct, hands-on guidance; larger groups can be arranged with advance notice and additional chefs. Beverages are quoted separately so you choose exactly what you want.</p>

    <p><a href="${WA_LINK}" class="text-[#7E6410] hover:underline font-medium">Reserve My Sushi Masterclass — WhatsApp +62 896-7407-2020</a>. See our <a href="/pricing" class="text-[#7E6410] hover:underline font-medium">full pricing guide</a>.</p>`,
  },
  {
    id: 'who-is-it-for',
    type: 'content' as const,
    subtitle: 'Private Sushi Masterclass Bali',
    title: 'For Couples, Families & Small Groups',
    image: '/generated/mychef-sushi-masterclass-guests-dining-bali-landscape.webp',
    imageAlt: 'Guests enjoying a private dining experience at a Bali villa table',
    body: `<p>This experience works for almost any small group that enjoys food and wants to do something together. Couples on a romantic Bali trip often book it as a memorable afternoon before a private dinner. Families use it as a hands-on activity that keeps both adults and older children engaged. Groups of friends treat it as a relaxed prelude to a villa party.</p>

    <p>Want to keep cooking? See our <a href="/experiences/private-cooking-class" class="text-[#7E6410] hover:underline font-medium">private cooking classes in more cuisines</a>, or browse <a href="/experiences" class="text-[#7E6410] hover:underline font-medium">all private experiences</a>. Pair the evening with <a href="/in-villa-service/mixology" class="text-[#7E6410] hover:underline font-medium">add a cocktail class to the same evening</a>. For a full dinner, see <a href="/fine-dining" class="text-[#7E6410] hover:underline font-medium">private chef fine dining</a>.</p>`,
  },
  {
    id: 'faq',
    type: 'faq' as const,
    subtitle: 'Private Sushi Masterclass Bali — FAQ',
    title: 'Common Questions',
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Reserve Your Class',
    title: 'Ready to Roll Your Own Sushi in Bali?',
    body: 'Tell us your villa, group size and preferred date — we will confirm chef availability and send your itemised quote within the hour.',
    primaryAction: {
      label: 'Reserve My Sushi Masterclass',
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
  { question: 'How much does a private sushi masterclass in Bali cost?', answer: 'Private in-villa classes start from IDR 700K per person ++. The final quote depends on group size, fish selection and beverage pairings — always itemised upfront.' },
  { question: 'How many people can join?', answer: 'Two to six guests is ideal. Larger groups are possible with advance notice and additional chefs.' },
  { question: 'How long does the class take?', answer: 'Two to three hours, including setup, instruction, hands-on rolling and the final tasting. Lunch, afternoon and early-evening slots are all possible.' },
  { question: 'Do I need any cooking experience?', answer: 'None at all. The class is designed for beginners and home cooks; confident cooks get deeper technique and presentation detail.' },
  { question: 'What\'s included in the price?', answer: 'The chef instructor, all fresh ingredients, professional tools and aprons, hands-on instruction, the tasting, and full clean-down. Beverages are quoted separately.' },
  { question: 'Can vegetarians, pescatarians or gluten-free guests join?', answer: 'Yes. The menu adapts — vegetable rolls, tamari instead of soy, and allergy-aware prep — when you tell us at booking.' },
  { question: 'What does our villa need?', answer: 'A kitchen counter or island to work at. We bring everything else.' },
  { question: 'How far in advance should I book?', answer: 'At least a week is recommended, more in July–August and December. Last-minute requests are sometimes possible — ask.' },
  { question: 'What deposit is required?', answer: 'A deposit confirms your chef and date [BUSINESS CONFIRMATION REQUIRED: deposit level — crawl for this URL is silent; live pages elsewhere show 50%]; the balance is due before the class.' },
]

const RELATED_PAGES = [
  { label: 'Private Cooking Class', href: '/experiences/private-cooking-class', desc: 'Private cooking classes in more cuisines at your villa.' },
  { label: 'Fine Dining Bali', href: '/fine-dining', desc: 'Private chef fine dining experiences across Bali villas.' },
  { label: 'Mixology Service', href: '/in-villa-service/mixology', desc: 'Custom cocktail menu design for your villa.' },
  { label: 'Pricing', href: '/pricing', desc: 'Transparent pricing for all myCHEF experiences.' },
]

export default function ExperienceSushiMasterclassPage() {
  return (
    <PremiumPage
      slug="experiences/sushi-masterclass"
      title="Sushi Masterclass Bali | Private Villa Sushi Class | myCHEF"
      description="Book a private sushi masterclass at your Bali villa — maki, nigiri & hand rolls with a sushi chef. Fish, tools & ingredients included. WhatsApp myCHEF."
      seoTitle="Sushi Masterclass Bali | Private Villa Sushi Class | myCHEF"
      seoDescription="Book a private sushi masterclass at your Bali villa — maki, nigiri & hand rolls with a sushi chef. Fish, tools & ingredients included. WhatsApp myCHEF."
      canonicalUrl={CANONICAL}
      h1="Private Sushi Masterclass in Bali — Roll, Slice, Eat"
      subtitle="Learn the Art of Sushi with a Private Chef in Your Villa"
      heroImage="/generated/mychef-sushi-masterclass-chef-hands-bali-landscape.webp"
      heroImageAlt="Sushi making class Bali chef preparing fresh sushi in a private villa kitchen"
      ogImage="https://mychef.id/generated/mychef-sushi-masterclass-chef-hands-bali-landscape.webp"
      keywords={[
        'private sushi masterclass bali',
        'sushi masterclass bali',
        'sushi making class bali',
        'private sushi class bali',
        'sushi chef experience villa bali',
      ]}
      highlights={['Private Villa Class', 'Hands-On Instruction', 'Fresh Ingredients', 'All Skill Levels']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema('Sushi Masterclass Bali', CANONICAL, 'Experiences', 'https://mychef.id/experiences'),
        faqPageSchema(FAQS),
        serviceSchema(
          'Private Sushi Masterclass Bali',
          'A private sushi masterclass at your Bali villa: learn maki, nigiri and hand rolls with a sushi chef. Fresh fish, professional tools and tasting included. Classes from IDR 700K per person ++, 2–3 hours, ideal for 2–6 guests.',
          CANONICAL
        ),
      ]}
      ctaText="Reserve Your Sushi Masterclass"
      ctaSubtext="Tell us your group size and villa — we will reply within the hour with a bespoke quote."
    />
  )
}
