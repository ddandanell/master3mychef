import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import {
  ChefHat,
  UtensilsCrossed,
  Sparkles,
  Heart,
  Clock,
  Shield,
} from 'lucide-react'
import type { PageSection } from '@/components/PremiumPage'
import { ARTICLE_CONTENT } from '@/data/content/articleContent'

const WA_LINK = 'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27m%20planning%20a%20kids%20birthday%20chef%20party%20in%20Bali.%20Please%20send%20menus%2C%20pricing%20and%20availability.'
const CANONICAL = 'https://mychef.id/experiences/kids-birthday-chef-party'

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Kids Birthday Chef Party Bali',
    title: 'Kids Birthday Chef Party in Bali — They Cook, You Relax',
    image: '/generated/mychef-kids-party-children-cooking-bali-landscape.webp',
    imageAlt: 'Colourful kids birthday party Bali setup at a villa with a private chef cooking station',
    body: `<p>Here's a radical idea for your child's Bali birthday: the food <em>is</em> the entertainment. A myCHEF kids birthday chef party brings a private chef and full party team to your villa, where the birthday child becomes head chef for the day — rolling pizza dough by the pool, building sliders, decorating dessert with their friends — while you actually enjoy the party you planned.</p>

    <p>No cooking for a dozen picky eaters. No venue hire, no commute, no dishes. Just a hands-on activity, a meal the kids made themselves, and a villa left spotless.</p>

    <p><a href="${WA_LINK}" class="text-[#7E6410] hover:underline font-medium">Plan a Kids Chef Party — WhatsApp +62 896-7407-2020</a>. Tell us your villa, date and number of children — we reply within the hour.</p>`,
  },
  {
    id: 'concept',
    type: 'content' as const,
    subtitle: 'The Party Where the Kids Do the Cooking',
    title: 'A Hands-On Food Experience for Children',
    body: `<p>Standard kids' catering means food appears and children ignore it. A chef party flips that: every child takes part — choosing, building, decorating, cooking — guided by a chef who makes it safe, structured and genuinely fun. The result is the rare party activity that works for ages 3 to 12 and feeds everyone.</p>`,
  },
  {
    id: 'how-it-works',
    type: 'content' as const,
    subtitle: 'How the Party Runs',
    title: 'From Setup to Cleanup',
    body: `<p><strong>1. We arrive 2–3 hours early.</strong> Portable cooking equipment, prepped ingredients in child-friendly portions, a shaded station by the pool or in the open kitchen — with hot equipment positioned away from small hands.</p>

    <p><strong>2. The cooking activity.</strong> Depending on your menu, children roll and top their own pizzas, assemble sliders, choose pasta shapes and sauces, or decorate desserts. The chef demonstrates, helps the little ones, and makes sure every child finishes with a plate they're proud of.</p>

    <p><strong>3. Meal and cake moment.</strong> Children eat what they cooked; cake is timed perfectly; the kitchen resets between courses so the party never feels chaotic.</p>

    <p><strong>4. Full cleanup.</strong> Cooking area wiped down, leftovers packed, villa returned in order. The party runs about 2–2.5 hours.</p>`,
  },
  {
    id: 'menus',
    type: 'content' as const,
    subtitle: 'Six Chef-Party Menus',
    title: 'Interactive Menus Children Actually Want to Eat',
    image: '/generated/mychef-kids-party-kids-hands-cooking-bali-landscape.webp',
    imageAlt: 'Children enjoying a hands-on chef party menu at a Bali villa',
    body: `<p>Every menu is designed for ages 3–12, portioned for children, nut-free as standard, and mild enough for cautious eaters. Prices are per child, minimum six children:</p>

    <table class="w-full text-left border-collapse my-4">
      <thead>
        <tr class="border-b border-stone-700">
          <th class="py-2 pr-4">Menu</th>
          <th class="py-2 pr-4">Per child</th>
          <th class="py-2">What the kids make and eat</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b border-stone-800">
          <td class="py-2 pr-4 font-semibold">Indonesian Kids</td>
          <td class="py-2 pr-4">IDR 250K</td>
          <td class="py-2">Mini chicken soto, mild nasi goreng, mini chicken satay, prawn crackers, pisang goreng with honey</td>
        </tr>
        <tr class="border-b border-stone-800">
          <td class="py-2 pr-4 font-semibold">Pasta Lovers</td>
          <td class="py-2 pr-4">IDR 260K</td>
          <td class="py-2">Choose-your-own pasta shape, sauce and protein; star-shaped brownie with vanilla ice cream</td>
        </tr>
        <tr class="border-b border-stone-800">
          <td class="py-2 pr-4 font-semibold">Mini Pizza Party</td>
          <td class="py-2 pr-4">IDR 275K</td>
          <td class="py-2">Roll and top personal pizzas — chicken, mozzarella, sweetcorn, capsicum; fruit skewers with chocolate dip</td>
        </tr>
        <tr class="border-b border-stone-800">
          <td class="py-2 pr-4 font-semibold">Burger Bar</td>
          <td class="py-2 pr-4">IDR 285K</td>
          <td class="py-2">Build-your-own sliders with a toppings bar; self-serve ice cream sundae station</td>
        </tr>
        <tr class="border-b border-stone-800">
          <td class="py-2 pr-4 font-semibold">Chicken & Chips</td>
          <td class="py-2 pr-4">IDR 295K</td>
          <td class="py-2">Mini chicken and sweetcorn soup, buttermilk tenders, hand-cut sweet potato fries, Bali banana split</td>
        </tr>
        <tr>
          <td class="py-2 pr-4 font-semibold">Seafood Adventure</td>
          <td class="py-2 pr-4">IDR 350K</td>
          <td class="py-2">Crispy baked snapper fingers, chunky wedges, tropical fruit platter with coconut yoghurt</td>
        </tr>
      </tbody>
    </table>

    <p>Add-ons — extra protein, fresh juice, chef hats and aprons, birthday cake slices — run IDR 5K–50K per child. For full ingredient and allergen detail, see the <a href="/kids-menus" class="text-[#7E6410] hover:underline font-medium">full kids</a> menu collection.</p>`,
  },
  {
    id: 'seo-content',
    type: 'content' as const,
    title: "Kids Birthday Chef Party in Bali — They Cook, You Relax",
    body: ARTICLE_CONTENT['/experiences/kids-birthday-chef-party'],
  },
  {
    id: 'features',
    type: 'features' as const,
    subtitle: 'Safety, Allergies & Peace of Mind',
    title: 'Why Parents Book a Chef Party with myCHEF',
    features: [
      {
        icon: Shield,
        title: 'Nut-Free as Standard',
        desc: 'Every menu is nut-free. Gluten-free, dairy-free, egg-free and halal adaptations at no extra charge with advance notice.',
      },
      {
        icon: ChefHat,
        title: 'Allergen-Trained Chefs',
        desc: 'Separate prep practices and ingredient-by-ingredient reviews for severe allergies.',
      },
      {
        icon: Heart,
        title: 'Cooked Safe, Always',
        desc: 'Poultry and beef patties well-done; snapper to at least 63°C. Sauces mild by default.',
      },
      {
        icon: UtensilsCrossed,
        title: 'Adult Food Available',
        desc: 'Add a separate adult menu, a grazing table for the parents, a BBQ, or a cocktail bar for the adults.',
      },
      {
        icon: Clock,
        title: 'Timed Around the Party',
        desc: 'Cooking activity, meal, cake moment and cleanup planned around your schedule.',
      },
      {
        icon: Sparkles,
        title: 'Full Villa Cleanup',
        desc: 'The team resets the kitchen and dining area before leaving.',
      },
    ],
  },
  {
    id: 'parents',
    type: 'content' as const,
    subtitle: 'What the Parents Get',
    title: 'You Do Not Have to Eat from the Kids Menu',
    body: `<p>You don't have to eat from the kids' menu. Add a separate adult menu, <a href="/catering/grazing-tables" class="text-[#7E6410] hover:underline font-medium">a grazing table for the parents</a>, a BBQ, or <a href="/in-villa-service/bartenders" class="text-[#7E6410] hover:underline font-medium">a cocktail bar for the adults</a>. We also coordinate the extras — a custom cake from a trusted Bali designer, themed décor through villa party stylists, kids' entertainers, a photographer — each quoted separately and timed so nothing clashes with the cooking or the cake.</p>`,
  },
  {
    id: 'pricing',
    type: 'content' as const,
    subtitle: 'Pricing & Add-Ons',
    title: 'Kids Birthday Party Bali Pricing',
    body: `<p>The maths is simple: per-child menu price × number of children (minimum six), plus any add-ons. Ten children on the Mini Pizza Party menu, for example, is IDR 2.75M ++ (11% government tax + 10% service charge) — chef, staff, ingredients, activity, meal and cleanup included. Adult menus, cakes, décor, entertainment and photography are itemised in your quote. Parties of 20+ children are welcome with advance notice — we add chefs and staff as the group grows.</p>

    <p><a href="${WA_LINK}" class="text-[#7E6410] hover:underline font-medium">Get My Kids Party Quote — WhatsApp +62 896-7407-2020</a></p>`,
  },
  {
    id: 'faq',
    type: 'faq' as const,
    subtitle: 'Kids Birthday Chef Party — FAQ',
    title: 'Common Questions',
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Plan the Party',
    title: 'Ready to Plan a Kids Birthday Chef Party?',
    body: `Tell us your villa, date, number of children and the menu they would love — we will reply within the hour with a plan and an itemised quote. Planning for mixed ages? See <a href="/events/birthdays" class="text-[#7E6410] hover:underline font-medium">birthday catering for adults and mixed-age groups</a>. Holidaying with the kids? <a href="/experiences/private-cooking-class" class="text-[#7E6410] hover:underline font-medium">a family cooking class for the holiday</a> makes a great second act. See our <a href="/pricing" class="text-[#7E6410] hover:underline font-medium">full pricing guide</a>.`,
    primaryAction: {
      label: 'Plan a Kids Chef Party',
      href: WA_LINK,
      external: true,
    },
    secondaryAction: {
      label: 'View Kids Menus',
      href: '/kids-menus',
    },
  },
]

const FAQS = [
  { question: 'How much does a kids chef party cost in Bali?', answer: 'Menus run IDR 250K–350K per child (minimum six children), including the chef, service staff, all ingredients, the cooking activity, the meal and cleanup. Add-ons are IDR 5K–50K per child.' },
  { question: 'What ages is it for?', answer: 'Designed for ages 3–12. Younger children take part with a little help; older children get the full hands-on experience.' },
  { question: 'How many children can join?', answer: 'Six minimum. We regularly run parties of 20 or more with additional chefs and staff — just give us notice.' },
  { question: 'How long does the party last?', answer: 'The party itself runs about 2–2.5 hours; our team arrives 2–3 hours before to set up.' },
  { question: 'Can you handle allergies and dietary needs?', answer: 'Yes — nut-free as standard, with gluten-free, dairy-free, egg-free and halal adaptations at no extra charge when confirmed in advance. Severe allergies get an ingredient-by-ingredient review.' },
  { question: 'Do parents need to cook or supervise?', answer: 'No — the chef and team run the entire food experience. Watch, take photos, relax.' },
  { question: 'Can you feed the adults too?', answer: 'Yes — a separate adult menu, grazing table, BBQ or cocktail service can run alongside the kids\' party.' },
  { question: 'What does our villa need?', answer: 'A shaded area or open kitchen for the station — we bring all cooking equipment. Villa suitability is confirmed when you book.' },
  { question: 'How far in advance should we book?', answer: 'At least 14 days — earlier for school holidays, themed décor or custom cakes. Last-minute is sometimes possible; ask.' },
  { question: 'What deposit is required?', answer: 'A 50% deposit confirms your date and team; the balance is due before the party.' },
]

const RELATED_PAGES = [
  { label: "Kids' Menus", href: '/kids-menus', desc: 'Full collection of interactive kids menus with ingredients, allergens, and prices.' },
  { label: 'Birthday Events', href: '/events/birthdays', desc: 'Birthday catering for adults and mixed-age groups.' },
  { label: 'Family Cooking Class', href: '/experiences/private-cooking-class', desc: 'A private cooking class for the whole family at your villa.' },
  { label: 'Pricing', href: '/pricing', desc: 'Transparent pricing for all myCHEF packages and event types.' },
]

export default function ExperienceKidsBirthdayChefPartyPage() {
  return (
    <PremiumPage
      slug="experiences/kids-birthday-chef-party"
      title="Kids Birthday Party Bali | Chef-Led Cooking Party | myCHEF"
      description="Kids cooking birthday parties at your Bali villa: pizza making, cupcakes, mocktails, chef hats, entertainment & cleanup. WhatsApp myCHEF."
      seoTitle="Kids Birthday Party Bali | Chef-Led Cooking Party | myCHEF"
      seoDescription="Kids cooking birthday parties at your Bali villa: pizza making, cupcakes, mocktails, chef hats, entertainment & cleanup. WhatsApp myCHEF."
      canonicalUrl={CANONICAL}
      h1="Kids Birthday Chef Party in Bali — They Cook, You Relax"
      subtitle="A Hands-On Private Chef Party Experience for Children at Your Villa"
      heroImage="/generated/mychef-kids-party-children-cooking-bali-landscape.webp"
      heroImageAlt="Children enjoying an interactive kids birthday party Bali chef party at a villa"
      ogImage="https://mychef.id/generated/mychef-kids-party-children-cooking-bali-landscape.webp"
      keywords={[
        'kids birthday chef party bali',
        'kids cooking party bali',
        'kids chef party bali',
        'pizza party bali kids',
        'kids birthday villa bali',
      ]}
      highlights={['6 Interactive Menus', 'Nut-Free as Standard', 'Ages 3–12', 'From IDR 250K/child']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema(
          'Kids Birthday Chef Party Bali',
          CANONICAL,
          'Experiences',
          'https://mychef.id/experiences'
        ),
        faqPageSchema(FAQS.map((f) => ({ question: f.question, answer: f.answer }))),
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Kids Birthday Chef Party Bali',
          provider: {
            '@type': 'LocalBusiness',
            name: 'myCHEF',
            url: 'https://mychef.id',
            telephone: '+62 896-7407-2020',
            areaServed: { '@type': 'Place', name: 'Bali, Indonesia' },
          },
          serviceType: 'Chef-led kids birthday cooking party',
          description: 'A kids birthday chef party at your Bali villa: children cook with a private chef across six interactive menus from IDR 250K per child (min. 6 children). Nut-free as standard, ages 3–12, full setup and cleanup included.',
          offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'IDR',
            lowPrice: '250000',
            highPrice: '350000',
            offerCount: '6',
          },
          url: CANONICAL,
        },
      ]}
      ctaText="Plan a Kids Chef Party"
      ctaSubtext="Tell us your villa, date, and number of children — we reply within the hour with a custom plan."
    />
  )
}
