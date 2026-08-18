import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const sections: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    title: 'Fine Dining at Home in Bali -- Restaurant Quality Delivered to Your Villa',
    body: `The finest meal you eat in Bali may not be in a restaurant. It may be on your villa's terrace at sunset, with no other tables around you, a chef you hired working quietly in the kitchen and dishes arriving that match anything the island's best restaurants have produced.

Fine dining at home in Bali -- what the private chef world calls in-villa fine dining -- is the idea that restaurant-quality food, technique, and presentation can be delivered in a private setting. That the experience of a three-star meal does not require a formal dining room and 20 other tables. That the food itself, prepared by a chef with the right skills, is the thing.

myCHEF makes this possible. We match Bali villa guests with chefs whose training and background produces food at the level of the island's best restaurants -- and we deliver that experience entirely to you, in your space, on your terms.

**Short answer for “top villa fine dining experiences”:** prioritise in-villa tasting dinners with HACCP-certified chefs, fixed ++ quotes, and full cleanup — not restaurant private rooms and not unvetted freelancers. myCHEF’s ranked formats below are the commercial options guests actually book.`,
  },
  {
    id: 'top-experiences',
    type: 'content',
    title: 'Top Villa Fine Dining Experiences (Ranked by Occasion)',
    body: `1. **Intimate dinner for two** — candlelit five-course service in your villa. Best for anniversaries and date nights. → [Romantic dinner](/fine-dining/romantic-dinner)
2. **Progressive tasting (6–11 courses)** — the evening is the event. → [Tasting menu](/fine-dining/tasting-menu) · [Fine dining hub](/fine-dining)
3. **Chef’s table** — interactive plating and conversation with the kitchen. → [Chef’s table](/fine-dining/chefs-table)
4. **Honeymoon multi-night dining** — one signature tasting + daily chef support. → [Honeymoon chef](/honeymoon-chef)
5. **Proposal dinner production** — timed courses, privacy, optional styling. → [Proposal dinner](/experiences/romantic-proposal-dinner)

Use these criteria when comparing any provider: food safety certification, written all-in price, backup chef cover, dietary control, and whether cleanup is included.`,
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

**Interactive Chef's Table** -- The chef cooks in front of you, explains the dishes, and turns the dinner into an experience as well as a meal. A counter or open kitchen setup allows guests to engage directly with the cooking. See our [Chef's Table Bali](/fine-dining/chefs-table) page for this format.

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
- **4-course set menu, 4--8 guests:** From IDR 700,000--1,200,000 per person
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
  { question: 'What are the top villa fine dining experiences in Bali?', answer: 'The strongest villa formats are: (1) five-course romantic dinner for two, (2) progressive tasting menu for 4–8, (3) interactive chef’s table, (4) Wagyu or seafood tasting with wine pairing, (5) multi-night fine dining during a honeymoon stay. Rank them by privacy, chef credentials (HACCP), written pricing, and cleanup — not by Instagram alone. Explore <a href="/fine-dining">fine dining</a>, <a href="/fine-dining/romantic-dinner">romantic dinner</a>, <a href="/fine-dining/chefs-table">chef’s table</a>, and <a href="/honeymoon-chef">honeymoon chef</a>.' },
  { question: 'How do I book this with myCHEF in Bali?', answer: 'WhatsApp date, guest count, villa area and your goal. Or use <a href="/book">book</a> / <a href="/quote">quote</a>.' },
  { question: 'Where can I see prices?', answer: 'Published tables on <a href="/pricing">pricing</a> and <a href="/private-chef-bali">private chef</a> day rates.' },
  { question: 'Is service available island-wide?', answer: 'Yes across major villa regions. <a href="/locations">Locations</a>.' },
  { question: 'Can you handle dietary requirements?', answer: 'Yes when briefed early — no extra charge for standard adaptations.' },
  { question: 'What is included vs extra?', answer: 'Quotes list inclusions; premium ingredients, alcohol and extra staff are itemised when needed.' },
  { question: 'Deposit and cancellation?', answer: 'Usually 50% deposit; refund tiers on <a href="/cancellation">cancellation</a>.' },
  { question: 'How fast is a proposal?', answer: 'Often within 2–24 hours of a complete brief.' },
  { question: 'Can this combine with other services?', answer: 'Yes — private chef, catering and a mobile cocktail bar stack in one plan. <a href="/in-villa-service/bartenders">Mobile bar →</a> · <a href="/catering">Catering →</a> · <a href="/private-chef-bali">Private chef →</a>' },
  { question: 'Do you clean up?', answer: 'Yes on serviced formats.' },
  { question: 'Kids welcome?', answer: 'Yes with adapted menus when needed. <a href="/kids-menus">Kids menus</a>.' },
  { question: 'Who is myCHEF?', answer: 'Bali villa hospitality company — chefs, catering, events and staffing. <a href="/chefs">About</a> · <a href="/why-mychef">Why myCHEF</a>.' },
  { question: 'More questions?', answer: 'See the central <a href="/faq">FAQ</a>.' },
  { question: 'What deposit do you require?', answer: 'A 50% deposit confirms your booking and locks the date. The balance is typically due the day before service. Full terms: <a href="/cancellation">cancellation policy</a>.' },
  { question: 'What does "++" mean on prices?', answer: '"++" means 11% government tax and 10% service charge are added to the listed price. Written quotes show the all-in total before you pay.' },
  { question: 'Which areas of Bali do you cover?', answer: 'Island-wide villa coverage including Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran, Sanur, Berawa and Pererenan. Browse <a href="/locations">locations</a>.' },
  { question: 'How far in advance should I book?', answer: 'A few days for most dinners; one to two weeks for larger events; longer for peak season and weddings. Last-minute is often possible — ask on WhatsApp.' },
  { question: 'Can you accommodate allergies and special diets?', answer: 'Yes — vegan, vegetarian, gluten-free, nut-free, shellfish allergy, pregnancy-safe and halal-sensitive menus when briefed in advance, at no extra charge. Guide: <a href="/blog/food-allergies-dietary-requirements-private-chef-bali">food allergies</a>.' },
  { question: 'Do you clean up after service?', answer: 'Yes on serviced chef, catering and fine-dining formats — kitchen and service areas restored before we leave.' },
  { question: 'How do I get a quote?', answer: 'WhatsApp date, guest count, villa area and what you want. Or use <a href="/quote">quote</a> / <a href="/book">book</a> / <a href="/faq">FAQ</a>.' },
  { question: 'What if a chef or staff member cannot make it?', answer: 'We send a verified replacement of equivalent role or refund that service. Details: <a href="/why-mychef">why myCHEF</a>.' },
]

const relatedPages = [
  { label: 'Luxury Dining Bali', href: '/blog/luxury-dining-bali', desc: 'Ultra-premium in-villa chef experiences' },
  { label: 'Private Tasting Menu Bali', href: '/blog/tasting-menu-bali', desc: '7--11 course multi-course chef\'s dinner' },
  { label: 'Chef\'s Table Bali', href: '/fine-dining/chefs-table', desc: 'Interactive dining at the chef\'s counter' },
  { label: 'Private Dining Bali', href: '/private-dining-indonesia', desc: 'Complete in-villa dining experiences' },
  { label: 'Romantic Dinner Bali', href: '/fine-dining/romantic-dinner', desc: 'Private romantic dinner for two' },
  { label: 'Private Chef Cost Bali', href: '/blog/private-chef-cost-bali', desc: 'Complete pricing guide for private chef services' },
]

export default function FineDiningAtHomeBaliPage() {
  return (
    <PremiumPage
      slug="blog/fine-dining-at-home-bali"
      title="Top Villa Fine Dining Experiences Bali | Fine Dining at Home | myCHEF"
      seoTitle="Top Villa Fine Dining Experiences Bali | Fine Dining at Home | myCHEF"
      description="Top villa fine dining experiences in Bali ranked by occasion — romantic, tasting, chef’s table, honeymoon. HACCP-certified private chefs at your villa."
      seoDescription="Top villa fine dining experiences in Bali: romantic dinners, tasting menus, chef’s table. HACCP-certified private chefs, fixed ++ quotes, full cleanup."
      h1="Top Villa Fine Dining Experiences in Bali"
      subtitle="Restaurant-quality food. Your villa. Your menu. No other tables. Ranked formats below."
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
