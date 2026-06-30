import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const sections: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    title: 'Fine Dining at Home in Bali -- Restaurant Quality Delivered to Your Villa',
    body: `The finest meal you eat in Bali may not be in a restaurant. It may be on your villa's terrace at sunset, with no other tables around you, a chef you hired working quietly in the kitchen and dishes arriving that match anything the island's best restaurants have produced.

Fine dining at home in Bali -- what the private chef world calls in-villa fine dining -- is the idea that restaurant-quality food, technique, and presentation can be delivered in a private setting. That the experience of a three-star meal does not require a formal dining room and 20 other tables. That the food itself, prepared by a chef with the right skills, is the thing.

myCHEF makes this possible. We match Bali villa guests with chefs whose training and background produces food at the level of the island's best restaurants -- and we deliver that experience entirely to you, in your space, on your terms.`,
  },
  {
    id: 'what-fine-dining-at-home',
    type: 'content',
    title: 'What Fine Dining at Home in Bali Looks Like',
    body: `Fine dining at home through myCHEF is not a simplified version of restaurant dining. It is a direct equivalent -- with advantages that no restaurant can offer.

**The same techniques, the same plating standards** -- Our fine dining chefs bring the same skills they use in professional kitchens: precision sauce work, proper knife cuts, classical plating, the judgment that comes from years of cooking at the highest level. The food looks, tastes, and is presented the way it would be in a restaurant kitchen.

**Ingredients sourced for you specifically** -- A restaurant kitchen cooks the same menu for 40 covers. A private chef shops specifically for your group, on the day of your dinner, from the best available produce. The fish is the finest specimen at the Jimbaran market that morning. The vegetables are sourced from the farm that supplies the best Bali restaurants.

**Completely your menu** -- In a restaurant, you choose from what they offer. In a private fine dining experience, the chef designs a menu around your preferences: the flavours you love, the ingredients you prefer, the occasion you are celebrating. If you want a menu that is 70% Indonesian and 30% European, you get exactly that.

**No noise, no waiting, no shared space** -- Fine dining in Bali's best restaurants is genuinely good. It is also crowded, loud, reservation-constrained, and divided by a room of strangers. Fine dining at home is quieter. More focused. Entirely yours.

**The service comes with the food** -- Our private dining service includes table service (server included for groups of 4+), setup, and breakdown. You arrive at a table that is already set; you leave it for us to clear.`,
  },
  {
    id: 'menu-formats',
    type: 'content',
    title: 'Menu Formats for Fine Dining at Home',
    body: `**Set Menu (3--4 courses)** -- A structured meal with a starter, one or two mains, and a dessert. The most common format for private fine dining for groups of 2--8. The chef designs the full set menu based on your briefing and the day's best ingredients. This is the closest equivalent to an a la carte restaurant dinner -- but better.

**Progressive Tasting Menu (6--11 courses)** -- For occasions where the dinner is the event, not simply the meal. A sequence of small courses that builds through the evening, each designed in relation to the others. The chef's fullest expression of what is possible in your villa kitchen. See our [Private Tasting Menu](/blog/tasting-menu-bali) page for more detail.

**Interactive Chef's Table** -- The chef cooks in front of you, explains the dishes, and turns the dinner into an experience as well as a meal. A counter or open kitchen setup allows guests to engage directly with the cooking. See our [Chef's Table Bali](/blog/chefs-table-bali) page for this format.

**Sharing Plates Fine Dining** -- High-quality dishes designed to be shared across the table rather than plated individually. The informality of sharing format combined with fine dining ingredient quality and technique. Works particularly well for groups of 6--12 who want excellent food with a relaxed rather than formal atmosphere.`,
  },
  {
    id: 'cuisines',
    type: 'content',
    title: 'Fine Dining Cuisine Options',
    body: `**Contemporary European** -- Classical French and Italian technique combined with modern European influences. Butter-based sauces, precision-cooked proteins, composed plates with multiple components. The format that most guests associate with fine dining.

**Modern Balinese and Indonesian** -- Taking the extraordinary flavours of Balinese cooking -- the base genep spice paste, the fresh aromatics, the sambal depth -- and applying fine dining technique and presentation. This is the most genuinely unique culinary experience available in Bali: food that is entirely of this place, cooked at the highest technical level.

**Japanese and Omakase** -- Sashimi-grade fish sourced from specialist suppliers, Japanese knife work, dashi-based cooking. Our Japanese-trained chefs offer omakase experiences that rival Bali's best Japanese restaurants.

**Fusion and Creative** -- Chefs who work at the intersection of European, Asian, and Indonesian traditions. Contemporary menus that draw on multiple culinary languages and produce something that belongs entirely to Bali's cosmopolitan food scene.

**Plant-Based Fine Dining** -- A growing specialty. Bali's produce is exceptional for plant-based cooking at fine dining level. Our vegan fine dining option is not a compromise: it is as technically ambitious and ingredient-driven as any other format.`,
  },
  {
    id: 'pricing',
    type: 'content',
    title: 'Fine Dining at Home Pricing',
    body: `Fine dining at home pricing depends on the menu format, chef level, group size, and ingredient specification.

**Indicative ranges (chef service, ingredients billed separately):**

- **3-course private fine dining, 2--4 guests:** From IDR 800,000--1,500,000 per person
- **4-course set menu, 4--8 guests:** From IDR 600,000--1,200,000 per person
- **6-course progressive menu:** From IDR 1,000,000--1,800,000 per person
- **Full tasting menu (9--11 courses) with beverage pairing:** From IDR 1,800,000--3,500,000 per person

Ingredients are billed at transparent market cost. We provide a full quote inclusive of all costs before confirmation.

For large groups (10+), group pricing applies and the per-person cost typically decreases.`,
  },
  {
    id: 'how-it-works',
    type: 'content',
    title: 'How to Book Fine Dining at Home in Bali',
    body: `**1. Tell us your occasion** -- Send us a message via WhatsApp or the enquiry form with your date, villa area, group size, and the kind of experience you want. The more we know, the better we can match you with the right chef and format.

**2. We match you with a chef** -- Based on your brief, we identify the chef or chefs whose background and style fits what you are looking for. We send you a profile and a proposed menu outline.

**3. Menu consultation** -- The chef or our culinary team conducts a brief consultation to refine the menu: confirming dietary requirements, discussing specific preferences, and agreeing on the direction of the evening.

**4. Confirmation and sourcing** -- Once confirmed, we handle all ingredient sourcing. Market shopping happens the morning of your dinner.

**5. The dinner** -- The chef arrives at the agreed time, sets up, cooks, and serves. You arrive at a table that is ready. We handle everything from setup to cleanup.`,
  },
]

const faqs = [
  {
    question: 'Is fine dining at home actually comparable to Bali\'s best restaurants?',
    answer:
      "For food quality, yes -- and in several ways better. The ingredients are sourced specifically for your group on the day, the menu is designed around your preferences, and the chef's undivided attention goes entirely to your table. What's different is the atmosphere: you get privacy and intimacy that no restaurant can provide, rather than the ambience of a formal dining room.",
  },
  {
    question: 'What is the minimum group size for fine dining at home?',
    answer:
      'We can accommodate groups as small as 2 for a romantic private dinner. Fine dining at home is particularly well suited to groups of 4--12, where the intimacy of a private setting and the quality of the food combine most effectively.',
  },
  {
    question: 'Do you provide the tableware and glassware?',
    answer:
      "For standard private dining, we work with what is available at the villa -- most Bali luxury villas have excellent tableware. For premium experiences, we can arrange additional polished glassware, white-glove service, and table styling. Please request this when enquiring.",
  },
  {
    question: 'Can the chef accommodate multiple different dietary requirements within one group?',
    answer:
      'Yes, this is standard practice in private dining. If some guests eat everything, some are vegan, and one is gluten-intolerant, the chef designs appropriate versions of each course for each guest. There is no lesser experience for restricted guests -- the dietary adaptation is built into the menu design.',
  },
  {
    question: 'How far in advance do I need to book?',
    answer:
      'For a fine dining experience, we recommend 48--72 hours minimum. This allows time for chef assignment, menu design, and ingredient sourcing. For more ambitious requests -- specific ingredients, imported wine pairing, multiple dietary variations -- 5--7 days is ideal.',
  },
  {
    question: 'Does the chef clean up after the dinner?',
    answer:
      "Yes. Cleanup is part of the service. The kitchen is returned to how it was found, the dining area is cleared, and we remove all our equipment. You simply enjoy the dinner.",
  },
]

const relatedPages = [
  { label: 'Luxury Dining Bali', href: '/blog/luxury-dining-bali', desc: 'Ultra-premium in-villa chef experiences' },
  { label: 'Private Tasting Menu Bali', href: '/blog/tasting-menu-bali', desc: '7--11 course multi-course chef\'s dinner' },
  { label: 'Chef\'s Table Bali', href: '/blog/chefs-table-bali', desc: 'Interactive dining at the chef\'s counter' },
  { label: 'Private Dining Bali', href: '/blog/private-dining-bali', desc: 'Complete in-villa dining experiences' },
  { label: 'Romantic Dinner Bali', href: '/blog/romantic-dinner-bali-private-chef', desc: 'Private romantic dinner for two' },
  { label: 'Private Chef Cost Bali', href: '/blog/private-chef-cost-bali', desc: 'Complete pricing guide for private chef services' },
]

export default function FineDiningAtHomeBaliPage() {
  return (
    <PremiumPage
      slug="blog/fine-dining-at-home-bali"
      title="Fine Dining at Home Bali -- Restaurant Quality Delivered to Your Villa | myCHEF"
      seoTitle="Fine Dining at Home Bali -- Restaurant Quality Delivered to Your Villa"
      description="Fine dining at home in Bali -- restaurant-quality menus, plating, and service delivered to your villa by professional private chefs. All areas covered."
      seoDescription="Fine dining at home in Bali. Restaurant-quality menus, chef service, and table setup delivered to your villa. 3-course set menus to 11-course tasting menus. All Bali areas."
      h1="Fine Dining at Home in Bali -- Restaurant Quality Delivered to Your Villa"
      subtitle="Restaurant-quality food. Your villa. Your menu. No other tables."
      heroImage="/images/blog/fine-dining-at-home-bali.jpg"
      heroImageAlt="Private chef plating a beautifully composed fine dining course at a luxury villa in Bali"
      ogImage="/images/blog/fine-dining-at-home-bali.jpg"
      canonicalUrl="https://mychef.id/blog/fine-dining-at-home-bali"
      keywords={[
        'fine dining at home bali',
        'fine dining bali villa',
        'in-villa fine dining bali',
        'restaurant quality chef bali',
        'private fine dining bali',
        'home fine dining bali',
        'private chef fine dining',
        'villa fine dining bali',
        'gourmet dinner at home bali',
        'in-home dining bali',
      ]}
      highlights={['Restaurant-Quality Menus', 'Bespoke for Your Group', 'Full Table Service', 'All Bali Areas']}
      sections={sections}
      faqs={faqs}
      relatedPages={relatedPages}
      ctaText="Book Fine Dining at Your Villa"
      ctaSubtext="Tell us your date, group size, villa area, and the type of dining experience you want. We will match you with the right chef and send a full menu proposal."
      extraJsonLd={[
        breadcrumbSchema('Fine Dining at Home Bali', 'https://mychef.id/blog/fine-dining-at-home-bali', 'Blog', 'https://mychef.id/journal'),
        faqPageSchema(faqs),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Fine Dining at Home in Bali -- Restaurant Quality Delivered to Your Villa',
          description: 'Fine dining at home in Bali. Restaurant-quality menus delivered to your villa by professional private chefs.',
          url: 'https://mychef.id/blog/fine-dining-at-home-bali',
          datePublished: '2026-06-30',
          dateModified: '2026-06-30',
          author: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          image: 'https://mychef.id/images/blog/fine-dining-at-home-bali.jpg',
        },
      ]}
    />
  )
}
