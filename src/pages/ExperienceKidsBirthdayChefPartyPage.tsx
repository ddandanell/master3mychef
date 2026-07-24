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

const WA_LINK = 'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27m%20planning%20a%20kids%20birthday%20party%20Bali%20chef%20party%20and%20would%20love%20to%20discuss%20menus%2C%20pricing%2C%20and%20availability.'
const CANONICAL = 'https://mychef.id/experiences/kids-birthday-chef-party'

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Kids Birthday Party Bali',
    title: 'A Private Chef Birthday Party Designed Around Children',
    image: '/generated/kids-birthday-party-bali-chef.webp',
    imageAlt: 'Colourful kids birthday party Bali setup at a villa with a private chef cooking station',
    body: `<p>A <strong>kids birthday party Bali</strong> chef party is not a restaurant meal squeezed into a villa. It is a private, hands-on food experience where a myCHEF chef arrives at your property with everything needed to cook, serve, and clean up — while the children watch, build, and eat food they actually want. Parents get to host without hovering over a stove, and the birthday child gets an activity and a meal rolled into one moment.</p>

    <p>The best children's parties in Bali happen at private villas. There is space for a pizza-making station by the pool, a build-your-own burger bar under a gazebo, or a pasta station where every child chooses their own shape and sauce. Our team sets up the cooking area, prepares ingredients in child-friendly portions, and guides the activity so it is safe, fun, and genuinely delicious. While the children are busy becoming junior chefs, our service staff keep drinks topped up, manage timing, and reset the space.</p>

    <p>What makes this different from a standard kids menu is the interaction. Children are not just served — they take part. The birthday child is the head chef for the day, the friends get involved, and the food becomes part of the entertainment. For parents, it removes the stress of cooking for a dozen picky eaters. For children, it turns lunch or dinner into the highlight of the party.</p>`,
  },
  {
    id: 'what-to-expect',
    type: 'content' as const,
    subtitle: 'What to Expect',
    title: 'How a Kids Birthday Chef Party Works',
    body: `<p>When you book a kids birthday party Bali chef party with myCHEF, the experience is structured so that the food activity fits naturally into the flow of the celebration. We arrive two to three hours before the children sit down, set up the cooking station, prep all ingredients, and brief the parents on the schedule. The party itself usually runs for two to two-and-a-half hours.</p>

    <p><strong>Arrival and setup:</strong> Our chef and service team bring portable cooking equipment, prep containers, serving platters, and all ingredients. We choose a location that is safe for children — typically a shaded poolside pavilion, terrace, or open kitchen area — and keep hot equipment away from small hands.</p>

    <p><strong>The cooking activity:</strong> Depending on the menu chosen, children roll pizza dough, assemble sliders, choose pasta shapes and sauces, or decorate their own desserts. The chef demonstrates each step, helps younger children, and makes sure every child finishes with a plate they are proud of.</p>

    <p><strong>Service and timing:</strong> While the children eat, our team serves parents and any adult guests with a separate adult-friendly menu if requested. Cake is coordinated for the right moment, and the kitchen is reset between courses so the villa never feels chaotic.</p>

    <p><strong>Cleanup:</strong> Before we leave, the cooking area is wiped down, leftovers are packed or cleared, and the villa is returned in good order. Parents do not need to face a mountain of dishes after the party.</p>`,
  },
  {
    id: 'menus',
    type: 'content' as const,
    subtitle: 'The Menus',
    title: 'Six Chef Party Menus Children Actually Want to Eat',
    image: '/generated/mychef-families-bali-kids-menus.webp',
    imageAlt: 'Children enjoying a hands-on chef party menu at a Bali villa',
    body: `<p>Every kids birthday party Bali chef party is built around one of our six interactive kids menus. Each menu is designed for children aged 3–12, portioned correctly, nut-free as standard, halal adaptable, and mild enough that even cautious eaters enjoy the meal.</p>

    <p><strong>Mini Pizza Party — IDR 275,000 per child:</strong> Children roll and top their own 15cm personal pizzas with free-range chicken, mozzarella stars, sweetcorn, cherry tomatoes, and capsicum. The chef bakes each one to order. Finished with fresh fruit skewers and chocolate dipping sauce.</p>

    <p><strong>Chicken & Chips — IDR 295,000 per child:</strong> A mini chicken and sweet corn soup starter, followed by crispy buttermilk chicken tenders with hand-cut sweet potato fries. The meal ends with a Bali banana split. This is the safest choice for groups with mixed tastes.</p>

    <p><strong>Pasta Lovers — IDR 260,000 per child:</strong> Children choose their pasta shape, sauce, and protein. Options include mild tomato, creamy Alfredo, or nut-free basil pesto with grilled chicken or extra vegetables. Dessert is a warm star-shaped brownie with vanilla ice cream.</p>

    <p><strong>Burger Bar — IDR 285,000 per child:</strong> A build-your-own slider station with mini beef or chicken patties, brioche buns, and a toppings bar. Children make two sliders each and finish with a self-serve ice cream sundae bar.</p>

    <p><strong>Seafood Adventure — IDR 350,000 per child:</strong> Crispy baked snapper fingers with chunky potato wedges and tartare sauce, followed by a tropical fruit platter with coconut yoghurt. A gentle introduction to seafood for curious young eaters.</p>

    <p><strong>Indonesian Kids — IDR 250,000 per child:</strong> A mild taste of Bali with mini chicken soto, nasi goreng without chilli, mini chicken satay, cucumber, prawn crackers, and warm pisang goreng with honey. This menu works beautifully for families who want a local flavour.</p>

    <p>All menus require a minimum of six children. For full ingredient lists, allergen details, and add-ons, see our <a href="/kids-menus" class="text-[#7E6410] hover:underline font-medium">dedicated kids menus page</a>.</p>`,
  },
  {
    id: 'features',
    type: 'features' as const,
    subtitle: 'What Makes It Special',
    title: 'Why Parents Book a Chef Party with myCHEF',
    features: [
      {
        icon: ChefHat,
        title: 'Interactive Chef Activity',
        desc: 'The food becomes part of the entertainment. Children cook with the chef, build their own plates, and stay engaged throughout the party.',
      },
      {
        icon: Shield,
        title: 'Safety-First Setup',
        desc: 'Hot equipment is positioned away from children, ingredients are prepped in child-safe portions, and the team keeps the cooking area supervised at all times.',
      },
      {
        icon: Heart,
        title: 'Nut-Free as Standard',
        desc: 'Every kids menu is nut-free. Gluten-free, dairy-free, and halal adaptations are available at no extra charge when confirmed in advance.',
      },
      {
        icon: UtensilsCrossed,
        title: 'Adult Food Available',
        desc: 'Parents and adult guests do not have to eat from the kids menu. We can prepare a separate adult menu, grazing table, or BBQ alongside the children’s activity.',
      },
      {
        icon: Clock,
        title: 'Timed Around the Party',
        desc: 'We plan the cooking activity, meal, cake moment, and cleanup around your schedule so the party flows without gaps or rushed transitions.',
      },
      {
        icon: Sparkles,
        title: 'Full Villa Cleanup',
        desc: 'The team resets the kitchen and dining area before leaving. Parents can focus on the children instead of washing dishes after the last guest goes home.',
      },
    ],
  },
  {
    id: 'safety',
    type: 'content' as const,
    subtitle: 'Allergies & Dietary Needs',
    title: 'Keeping Every Child Safe and Happy',
    image: '/generated/mychef-events-bali-birthdays-table.webp',
    imageAlt: 'Family-friendly birthday table setup with fresh food and safe portions at a Bali villa',
    body: `<p>Food safety at children's parties is non-negotiable. Every kids birthday party Bali chef party menu is nut-free as standard. We also adapt each menu for gluten-free, dairy-free, egg-free, and halal requirements when you tell us during the booking process. There is no additional charge for these adjustments.</p>

    <p>Our chefs are trained in allergen management and use separate prep practices to avoid cross-contamination. Chicken, beef, and seafood are all cooked to safe internal temperatures — well-done for poultry and beef patties, and at least 63°C for snapper. We prepare sauces mild by default and serve any chilli or sambal on the side for adults or adventurous children.</p>

    <p>If a child has a severe allergy, we ask for details at least one week before the event so the menu can be reviewed ingredient by ingredient. We also label all dishes clearly on the day and brief parents on what each course contains.</p>`,
  },
  {
    id: 'add-ons',
    type: 'content' as const,
    subtitle: 'Make It a Full Party',
    title: 'Add-Ons for the Celebration',
    body: `<p>The chef party is the centrepiece, but most parents want a few extra pieces to make the day feel complete. These are the add-ons we coordinate most often alongside a kids birthday party Bali chef party.</p>

    <p><strong>Birthday cake:</strong> We do not bake cakes ourselves, but we coordinate with trusted Bali cake designers and time the cake moment into the party. A cake slice add-on is available on each kids menu, or you can arrange a full custom cake through our recommended suppliers.</p>

    <p><strong>Themed décor and balloons:</strong> We work with your decorator or refer you to villa party stylists in Seminyak, Canggu, and Uluwatu. Popular themes include tropical, unicorn, surfer, and Lego-inspired setups. Decor pricing depends on the property and design.</p>

    <p><strong>Kids entertainment:</strong> From face painters and balloon artists to magicians and pool games, we coordinate timing so the entertainment does not clash with the food activity or cake.</p>

    <p><strong>Photographer:</strong> A party photographer for one to two hours captures the cooking activity, cake moment, and group shots. This is especially popular for milestone birthdays where parents want professional memories.</p>

    <p><strong>Adult grazing and beverages:</strong> A separate grazing board, cocktail bar, or BBQ for parents keeps adult guests comfortable while the children are occupied. See our <a href="/events/birthdays" class="text-[#7E6410] hover:underline font-medium">birthday events page</a> for adult-focused formats.</p>`,
  },
  {
    id: 'pricing',
    type: 'content' as const,
    subtitle: 'Investment',
    title: 'Kids Birthday Party Bali Pricing',
    body: `<p>Kids birthday party Bali chef party menus are priced per child, with a minimum booking of six children. The menu prices are fixed and transparent:</p>

    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;margin-bottom:0.5rem;">
      <li>Indonesian Kids — IDR 250,000 per child</li>
      <li>Pasta Lovers — IDR 260,000 per child</li>
      <li>Mini Pizza Party — IDR 275,000 per child</li>
      <li>Burger Bar — IDR 285,000 per child</li>
      <li>Chicken & Chips — IDR 295,000 per child</li>
      <li>Seafood Adventure — IDR 350,000 per child</li>
    </ul>

    <p>Menu add-ons such as extra protein, fresh juice, chef hats and aprons, or birthday cake slices range from IDR 5,000 to IDR 50,000 per child. The base price includes the chef, service staff, all ingredients, the interactive cooking activity, and cleanup.</p>

    <p>For a complete party package that includes themed décor, entertainment, a custom cake, and photography, total pricing depends on guest count, location, and the level of production. Message us on WhatsApp with your villa, date, and party size and we will reply within the hour with an itemised quote.</p>`,
  },
  {
    id: 'faq',
    type: 'faq' as const,
    subtitle: 'Common Questions',
    title: 'Kids Birthday Chef Party FAQ',
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Start Planning',
    title: 'Ready to Plan a Kids Birthday Chef Party?',
    body: 'Tell us your villa location, party date, number of children, and preferred menu — we will respond within the hour with a custom plan and quote.',
    primaryAction: {
      label: 'Plan a Kids Birthday Chef Party',
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
  {
    question: 'What age group is the kids birthday party Bali suitable for?',
    answer: 'The experience is designed for children aged 3–12. Younger children can take part with help from parents or our team, while older children enjoy the full hands-on cooking activity.',
  },
  {
    question: 'How many children can take part?',
    answer: 'We require a minimum of six children per booking. We regularly cater parties of 20 or more children with advance notice, adding chefs and service staff as the group grows.',
  },
  {
    question: 'Can you handle food allergies?',
    answer: 'Yes. All kids menus are nut-free as standard. We also adapt for gluten-free, dairy-free, egg-free, and halal requirements at no extra charge when confirmed in advance.',
  },
  {
    question: 'Do parents need to cook or supervise?',
    answer: 'No. Our chef and service team manage the entire food experience. Parents are welcome to watch and take photos, but you do not need to cook or clean.',
  },
  {
    question: 'Can you also feed the adult guests?',
    answer: 'Yes. We can prepare a separate adult menu, grazing table, BBQ, or cocktail service alongside the kids chef party so parents enjoy the celebration too.',
  },
  {
    question: 'How far in advance should we book?',
    answer: 'We recommend booking at least 14 days in advance, especially if you want themed décor, entertainment, or a custom cake. Last-minute bookings may be possible depending on availability.',
  },
  {
    question: 'What is included in the price?',
    answer: 'The per-child price includes the chef, service staff, all ingredients, the interactive cooking activity, and cleanup. Add-ons such as cake, entertainment, photography, and décor are quoted separately.',
  },
  {
    question: 'Which areas of Bali do you cover?',
    answer: 'We cover Seminyak, Canggu, Uluwatu, Ubud, Jimbaran, Nusa Dua, Sanur, and surrounding villa areas across Bali.',
  },
  {
    question: 'Can we choose more than one menu?',
    answer: 'Yes. For mixed-age groups or parties with varied tastes, we can combine menus or create a custom tasting station format. Let us know your preferences when you enquire.',
  },
  {
    question: 'Do you provide party decorations?',
    answer: 'We coordinate with trusted Bali party stylists for themed décor, balloons, and table styling. Decor is quoted separately based on your chosen theme and villa.',
  },
  {
    question: 'Can the party be indoors?',
    answer: 'Yes. We can set up in a covered pavilion, indoor kitchen, or air-conditioned dining room if the weather or villa layout suits an indoor party better.',
  },
]

const RELATED_PAGES = [
  { label: "Kids' Menus", href: '/kids-menus', desc: 'Full collection of interactive kids menus with ingredients, allergens, and prices.' },
  { label: 'Birthday Events', href: '/events/birthdays', desc: 'Villa birthday party formats including BBQ, fine dining, and kids parties.' },
  { label: 'Private Chef Bali', href: '/fine-dining/private-chef-bali', desc: 'Overview of private chef services across Bali.' },
  { label: 'Pricing', href: '/pricing', desc: 'Transparent pricing for all myCHEF packages and event types.' },
]

export default function ExperienceKidsBirthdayChefPartyPage() {
  return (
    <PremiumPage
      slug="experiences/kids-birthday-chef-party"
      title="Kids Birthday Party Bali | Private Chef Party | myCHEF"
      description="Plan a kids birthday party in Bali with a private chef cooking party at your villa. Six interactive menus, nut-free, halal adaptable. WhatsApp myCHEF."
      seoTitle="Kids Birthday Party Bali | Private Chef Party | myCHEF"
      seoDescription="Plan a kids birthday party in Bali with a private chef cooking party at your villa. Six interactive menus, nut-free, halal adaptable. WhatsApp myCHEF."
      canonicalUrl={CANONICAL}
      h1="Kids Birthday Party Bali — Private Chef Party at Your Villa"
      subtitle="A Hands-On Private Chef Party Experience for Children at Your Villa"
      heroImage="/generated/kids-birthday-party-bali-chef.webp"
      heroImageAlt="Children enjoying an interactive kids birthday party Bali chef party at a villa"
      ogImage="https://mychef.id/generated/kids-birthday-party-bali-chef.webp"
      keywords={[
        'kids birthday party Bali',
        'kids birthday chef party Bali',
        'private chef kids birthday Bali',
        'kids cooking party Bali',
        'children birthday chef party Bali villa',
        'kids birthday catering Bali',
        'Bali kids party chef',
      ]}
      highlights={['6 Interactive Menus', 'Nut-Free as Standard', 'Ages 3–12', 'From IDR 250K/child']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema(
          'Kids Birthday Party Bali',
          CANONICAL,
          'Experiences',
          'https://mychef.id/experiences'
        ),
        faqPageSchema(FAQS.map((f) => ({ question: f.question, answer: f.answer }))),
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Kids Birthday Party Bali',
          description:
            'Private chef kids birthday party experience in Bali with interactive cooking menus for children aged 3–12. Nut-free, halal adaptable, villa-based service.',
          provider: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          areaServed: { '@type': 'Place', name: 'Bali, Indonesia' },
          offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'IDR',
            lowPrice: '250000',
            highPrice: '350000',
            offerCount: '6',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              priceCurrency: 'IDR',
              unitText: 'per child',
              description: 'Menu prices per child, minimum 6 children',
            },
          },
        },
      ]}
      ctaText="Plan a Kids Birthday Chef Party"
      ctaSubtext="Tell us your villa, date, and number of children — we reply within the hour with a custom plan."
    />
  )
}
