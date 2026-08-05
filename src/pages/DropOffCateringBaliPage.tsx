import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const sections: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    title: 'Drop-Off Catering in Bali -- Ready-to-Serve Villa Food Delivered',
    body: `Drop-off catering is the simplest way to get professional-quality food to your villa without the full kitchen team. myCHEF prepares everything in our professional kitchen -- fresh, portioned, and ready to serve -- then delivers directly to your villa at the agreed time. No chef on-site, no service staff, no logistical coordination beyond opening the door.

It is the right format when you want excellent food without the full-service footprint: a birthday picnic, a poolside lunch for six, a laid-back family dinner, or an informal gathering where you want to handle the hosting yourselves.

We cover all major villa areas across Bali: Canggu, Seminyak, Uluwatu, Jimbaran, Nusa Dua, Sanur, Ubud, and Pererenan.`,
  },
  {
    id: 'what-included',
    type: 'content',
    title: 'What Drop-Off Catering Includes',
    body: `**Full Professional Preparation** -- Every dish is prepared from scratch in a licensed kitchen using fresh market ingredients. Nothing is mass-produced or reheated from frozen. The quality is the same as our on-site catering service; the difference is delivery format rather than kitchen standard.

**Portioned and Labelled** -- Food arrives portioned for your guest count, clearly labelled by dish, with any allergen information noted. You open the containers and serve. That is it.

**Service Instructions Included** -- Where dishes benefit from a finishing step -- a squeeze of lime, a scattering of herbs, a last minute heat -- we include simple instructions so the food arrives as intended.

**Sustainable Packaging** -- We use recyclable containers where available. Chafing dishes or insulated carriers can be provided for larger orders that need to stay warm for an extended period.

**Flexible Timing** -- Delivery is scheduled to your meal time. For morning deliveries, we adjust production timing so food is at its best when you want to eat, not when it is convenient for us to deliver.`,
  },
  {
    id: 'menu-formats',
    type: 'content',
    title: 'Drop-Off Menu Formats',
    body: `**Casual Indonesian Feast** -- A spread of classic Balinese and Indonesian dishes delivered ready to share: nasi goreng, mie goreng, satay with peanut sauce, gado-gado, sambal, tempeh, and fresh tropical fruit. Perfect for groups who want an authentic local spread without restaurant prices. From IDR 700,000/person.

**Western Comfort** -- Pasta in sauce, roast chicken pieces, potato salad, green salad, freshly baked focaccia, and a simple dessert. Familiar food done properly, great for families with children or groups who have been eating Indonesian food all week and want something different. From IDR 700,000/person.

**Grazing and Sharing Platters** -- A collection of boards and platters designed for continuous grazing: cheese, charcuterie, vegetables and dips, bread, bruschetta, pickles, and seasonal fruit. Social food that works from arrival drinks through to late evening without formal plating. From IDR 700,000/person.

**Healthy and Nutritional** -- Grain bowls, roasted vegetables, plant-based proteins, fresh salads with made-from-scratch dressings, and house-prepared overnight oats or smoothie bowls for breakfast delivery. Good for wellness-oriented stays or groups watching what they eat. From IDR 700,000/person.

**Single-Course Additions** -- A fresh salad, a dessert tray, a soup, or a fruit platter added onto a meal you are partly preparing yourself. Drop-off catering does not have to be the whole meal; it can fill the gaps.`,
  },
  {
    id: 'occasions',
    type: 'content',
    title: 'When Drop-Off Catering Is the Right Choice',
    body: `**Casual Villa Lunches** -- Lunch is often the meal where a full chef team feels like too much. A delivered spread of Indonesian or Western food lands at noon, you eat by the pool, and the kitchen stays clean. Effortless for guests; no prep or clearing for the host.

**Poolside Parties and Picnics** -- Grazing platters delivered to the pool deck or garden for a birthday afternoon, a farewell gathering, or a sunset snack session. No formal setup, no service staff, just excellent food in the right place at the right time.

**Family Dinner for Larger Groups** -- When you are 12 or 15 people and do not want the cost of a full kitchen team, drop-off catering gives you restaurant-quality food at a fraction of the full-service price. Divide into serving dishes you already have in the villa and dinner is done.

**Breakfast Delivery** -- A freshly prepared breakfast delivered to your villa at 8am: avocado toast, granola bowls, smoothie bowls, fresh fruit, pastries, and eggs done multiple ways. No villa kitchen required, no morning chaos. Ideal for large groups on the first day when everyone is tired from travel.

**After-Activity Meals** -- Post-surf, post-yoga, post-sightseeing. You know when you will be back; we time the delivery to meet you. A solid meal waiting on the kitchen counter when you walk in is worth considerably more than the cost of it.`,
  },
  {
    id: 'vs-full-service',
    type: 'content',
    title: 'Drop-Off Catering vs Full Chef Service -- Which Is Right for You?',
    body: `The decision is mostly about occasion and budget rather than food quality.

**Choose drop-off catering if:**
- You want good food without the overhead of a full kitchen team
- The occasion is casual or informal
- Your villa has limited kitchen space for an external team to work
- You are comfortable portioning and serving yourselves
- Budget is a priority and the full-service premium is not justified by the occasion

**Choose full chef service if:**
- The occasion warrants presentation and plated service
- You want the experience of watching a chef work
- Your guest count is large enough that managing drop-off service becomes its own job
- You are hosting a formal dinner, celebration, or event where the food service is part of the entertainment
- You have dietary requirements complex enough that real-time kitchen adaptation adds value

For most villa stays, the ideal approach is a combination: drop-off for weekday lunches and casual evenings, full chef service for the main occasion dinner. We make it easy to mix both formats within the same booking.`,
  },
  {
    id: 'cta',
    type: 'content',
    title: 'Plan Your Drop-Off Catering',
    body: `Tell us your villa location, the date and time you need delivery, your guest count, and any dietary requirements. We will send a menu proposal and price within a few hours. Minimum order applies; delivery charges vary by area.`,
  },
]

const faqs = [
  { question: 'How much does catering in Bali cost?', answer: 'Many villa formats start around IDR 700K++ per person. See <a href="/catering">catering</a> and <a href="/pricing">pricing</a>.' },
  { question: 'What formats do you offer?', answer: 'BBQ, buffet, plated, drop-off, grazing, floating breakfast, retreat and corporate — all under <a href="/catering">catering</a>.' },
  { question: 'Is catering the same as private chef hire?', answer: 'No. Catering is usually one event; multi-day stays use <a href="/private-chef-bali">private chef</a>.' },
  { question: 'Do prices include staff and cleanup?', answer: 'Serviced packages include chef/staff and cleanup; drop-off does not keep staff on site.' },
  { question: 'Can you cook in an Airbnb villa?', answer: 'Yes with a workable kitchen — share the listing when booking.' },
  { question: 'Minimum guest counts?', answer: 'Vary by format (drop-off lower, buffet higher). We route you correctly.' },
  { question: 'Can menus be customised?', answer: 'Yes — proteins, spice, diets locked before shopping.' },
  { question: 'Travel fees?', answer: 'Remote areas may add a fee quoted upfront.' },
  { question: 'Can we add bartenders?', answer: 'Yes — <a href="/in-villa-service/bartenders">bartenders</a>.' },
  { question: 'Kids and allergies?', answer: 'Yes — <a href="/kids-menus">kids menus</a> and allergy protocols.' },
  { question: 'How do I book catering?', answer: 'WhatsApp date, guests, area and format — or <a href="/quote">quote</a>.' },
  { question: 'Rain plan?', answer: 'Covered setups and indoor pivots planned ahead.' },
  { question: 'How do I book this with myCHEF in Bali?', answer: 'WhatsApp date, guest count, villa area and your goal. Or use <a href="/book">book</a> / <a href="/quote">quote</a>.' },
  { question: 'Where can I see prices?', answer: 'Published tables on <a href="/pricing">pricing</a> and <a href="/private-chef-bali">private chef</a> day rates.' },
  { question: 'Is service available island-wide?', answer: 'Yes across major villa regions. <a href="/locations">Locations</a>.' },
  { question: 'Can you handle dietary requirements?', answer: 'Yes when briefed early — no extra charge for standard adaptations.' },
  { question: 'What is included vs extra?', answer: 'Quotes list inclusions; premium ingredients, alcohol and extra staff are itemised when needed.' },
  { question: 'Deposit and cancellation?', answer: 'Usually 50% deposit; refund tiers on <a href="/cancellation">cancellation</a>.' },
  { question: 'How fast is a proposal?', answer: 'Often within 2–24 hours of a complete brief.' },
  { question: 'Can this combine with other services?', answer: 'Yes — chef, catering, staff and transport can stack in one plan.' },
]

const relatedPages = [
  { label: 'Full Chef Service Bali', href: '/', desc: 'On-site private chef with full service' },
  { label: 'Villa Catering Bali', href: '/catering', desc: 'Complete catering formats for Bali villas' },
  { label: 'Grazing Table Bali', href: '/catering/grazing-tables', desc: 'Sharing platters and grazing boards' },
  { label: 'Brunch Catering Bali', href: '/catering', desc: 'Private chef brunch for villa stays' },
  { label: 'Buffet vs Plated Service', href: '/catering', desc: 'Choosing the right catering format' },
  { label: 'Floating Breakfast Bali', href: '/catering/floating-breakfast', desc: 'In-pool breakfast experience' },
]

export default function DropOffCateringBaliPage() {
  return (
    <PremiumPage
      slug="blog/drop-off-catering-bali"
      title="Drop-Off Catering Bali -- Ready-to-Serve Villa Food Delivered | myCHEF"
      seoTitle="Drop-Off Catering Bali -- Fresh Villa Food Delivered Ready to Serve"
      description="Drop-off catering for Bali villas. Professional kitchen preparation, delivered to your villa ready to serve. Indonesian feasts, Western comfort, grazing."
      seoDescription="Drop-off catering in Bali for villa stays. Fresh food prepared and delivered ready to serve. From IDR 700K/person. All areas: Canggu, Seminyak, Ubud, Uluwatu."
      h1="Drop-Off Catering in Bali: What to Know Before You Order"
      subtitle="A practical guide to chef-prepared food delivered to your Bali villa — formats, timing, and how to decide if drop-off is right for your stay."
      heroImage="/images/blog/drop-off-catering-bali.jpg"
      heroImageAlt="Fresh Indonesian catering spread delivered to a Bali villa ready to serve by the pool"
      ogImage="/images/blog/drop-off-catering-bali.jpg"
      canonicalUrl="https://mychef.id/blog/drop-off-catering-bali"
      keywords={[
        'drop off catering bali',
        'delivery catering bali',
        'villa food delivery bali',
        'catering delivery bali',
        'drop off food bali',
        'ready to serve catering bali',
        'villa catering delivery bali',
        'no staff catering bali',
        'simple catering bali',
        'food delivery villa bali',
      ]}
      highlights={['Fresh Daily Preparation', 'All Villa Areas', 'From IDR 700K/person', 'No Staff Required']}
      sections={sections}
      faqs={faqs}
      relatedPages={relatedPages}
      ctaText="Plan Your Drop-Off Menu"
      ctaSubtext="Send us your villa, date, guest count, and dietary needs -- we will send a menu proposal within a few hours."
      extraJsonLd={[
        breadcrumbSchema('Drop-Off Catering Bali', 'https://mychef.id/blog/drop-off-catering-bali', 'Blog', 'https://mychef.id/journal'),
        faqPageSchema(faqs),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Drop-Off Catering in Bali -- Ready-to-Serve Villa Food Delivered',
          description: 'Drop-off catering for Bali villas. Fresh food prepared professionally and delivered ready to serve.',
          url: 'https://mychef.id/blog/drop-off-catering-bali',
          datePublished: '2026-06-30',
          dateModified: '2026-06-30',
          author: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          image: 'https://mychef.id/images/blog/drop-off-catering-bali.jpg',
        },
      ]}
    />
  )
}
