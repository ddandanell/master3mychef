import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const sections: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    title: 'Brunch Catering in Bali -- Private Chef Brunch for Villa Events and Group Stays',
    body: `Brunch is Bali at its best. Late morning, the villa is unhurried, the light is perfect, and a long, relaxed meal beside the pool is exactly the right pace. myCHEF provides professional private chef brunch catering for villa stays and events across Bali -- from a casual morning spread for a family on holiday to a curated brunch event for 50 guests.

Whether you are hosting a post-wedding brunch, a birthday morning celebration, a corporate team brunch, or simply want three days of exceptional morning meals during your villa holiday, our chefs design a brunch experience that fits the occasion.

We operate across Seminyak, Canggu, Uluwatu, Jimbaran, Sanur, Nusa Dua, Ubud, and Pererenan.`,
  },
  {
    id: 'what-we-do',
    type: 'content',
    title: 'What Our Private Brunch Service Includes',
    body: `**Menu Design** -- Your chef designs a brunch menu around your preferences, the season, and the occasion. We cover the full spectrum: continental spreads, cooked-to-order stations, chef's special plated brunch courses, and Balinese-inspired morning menus.

**Fresh Ingredient Sourcing** -- All ingredients purchased fresh from Bali's markets and premium suppliers on the morning of service.

**Setup and Service** -- The chef arrives 1.5--2 hours before brunch to prepare. For larger events, a service team manages the spread, clears plates, manages drinks, and keeps the table replenished throughout.

**Buffet or Plated** -- Brunch works both ways. For casual group stays, a generous buffet-style spread lets guests eat at their own pace. For occasions and events, we offer plated brunch courses served at the table by professional staff.

**Beverage Programme (optional)** -- Bottomless coffee, fresh juices, and a cocktail brunch option (Aperol spritz, bellinis, or a custom signature brunch cocktail by a mixologist) are available as add-ons.

**Full Cleanup** -- Everything is cleared and cleaned before the team departs.`,
  },
  {
    id: 'menu-ideas',
    type: 'content',
    title: 'Private Brunch Menu Ideas for Bali Villas',
    body: `**The Garden Spread** -- A generous shared brunch table: fresh tropical fruits, house-baked pastries (croissants, banana bread, coconut scones), house granola and yoghurt, a selection of cold-pressed juices, and made-to-order eggs any style. The classic villa holiday morning.

**The Bali Brunch** -- Indonesian-influenced morning: nasi goreng with a fried egg, jaffles with sambal and cheese, gado-gado salad, coconut chia pudding, and fresh kopi Bali. A genuine taste of Bali rather than a generic continental spread.

**The Celebration Brunch** -- For post-wedding brunches, birthday mornings, and group events. Passed canapés (mini eggs benedict, avocado blini), a centrepiece sharing board, a waffle or pancake station, bottomless bubbles, and fresh fruit dessert. Elegant but relaxed.

**The Healthy Brunch** -- Acai bowls, smoothie stations, grain bowls, poached eggs on sourdough with microgreens, and cold-pressed juice. Popular for wellness retreats, yoga groups, and guests who want a nutritious start. All plant-based on request.

**The Full Cook-Up** -- A proper British-style full breakfast cooked to order for each guest: quality eggs cooked exactly as requested, premium bacon and sausage, grilled tomatoes, mushrooms, baked beans, sourdough toast. Comforting and thorough.

**The Mezze Brunch** -- Middle Eastern and Mediterranean morning: hummus, labneh, fattoush salad, shakshuka, pita bread, olives, smoked salmon, and a soft cheese board. Particularly popular with European guests.`,
  },
  {
    id: 'occasions',
    type: 'content',
    title: 'When to Book a Private Brunch in Bali',
    body: `**Post-Wedding Brunch** -- The morning after a villa wedding, guests are still celebrating but in a gentler register. A relaxed brunch for 20--60 guests lets the wedding party reconvene without the formality of the previous evening. We specialise in the post-wedding brunch format and can coordinate with your wedding planner.

**Birthday Morning** -- Starting a birthday in Bali with a spectacular private brunch -- fresh pastries, a chef-designed centrepiece dish, and a custom dessert surprise -- sets the tone for the day. We design birthday brunches to suit any taste.

**Villa Holiday Daily Brunch** -- For multi-day villa stays, a private chef prepares a fresh brunch each morning. Guests eat at their own pace, the chef accommodates whatever anyone wants that morning, and the villa starts the day right.

**Hen Party Brunch** -- The hen party brunch is a Bali staple. We design a fun, celebratory spread with bottomless mimosas or Aperol spritz, a grazing board, and a menu of crowd-pleasing brunch dishes. We can add custom elements tied to the bride.

**Yoga Retreat Brunch** -- Post-practice brunch for wellness and yoga groups. Nutritious, plant-forward, anti-inflammatory. Fresh juices, smoothie bowls, grain dishes, and seasonal fruit. Works for groups of 8--30.

**Corporate Team Brunch** -- Start a team offsite or company retreat right. A professional brunch in a villa setting creates the right atmosphere for a productive day without the formality of a hotel meeting room.`,
  },
  {
    id: 'pricing',
    type: 'content',
    title: 'Brunch Catering Prices in Bali',
    body: `**Daily Villa Brunch (up to 8 guests)**: From IDR 700,000/person including chef, fresh ingredients, and basic service. Covers a generous spread or cooked-to-order breakfast.

**Occasion Brunch (8--20 guests)**: From IDR 700,000/person including chef, full spread, 2 service staff, setup, and cleanup.

**Celebration Brunch with Full Service (20--50 guests)**: From IDR 700,000/person including multiple stations, full service team, and cleanup. Beverage packages (cocktail brunch with mixologist) from IDR 200,000/person additional.

**Bespoke Large Group Brunch (50+ guests)**: Quoted on enquiry.

All pricing includes ingredients, chef, and light service. Alcohol and cocktail bar are additional. Minimum booking: 4 guests.`,
  },
  {
    id: 'cta',
    type: 'content',
    title: 'Book a Private Chef Brunch in Bali',
    body: `Tell us your villa location, date, guest count, occasion, and brunch style preference. We will confirm availability and send a menu proposal within 24 hours.`,
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
  { question: 'Can we add a mobile cocktail bar?', answer: 'Yes — complete packages from IDR 500,000++ per guest (min 10), not hourly hire. Stack with chef or catering. <a href="/in-villa-service/bartenders">Mobile bar packages →</a> · <a href="/experiences/private-cocktail-party">Cocktail party →</a>' },
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
  { question: 'Can this combine with other services?', answer: 'Yes — private chef, catering and a mobile cocktail bar stack in one plan. <a href="/in-villa-service/bartenders">Mobile bar →</a> · <a href="/catering">Catering →</a> · <a href="/private-chef-bali">Private chef →</a>' },
]

const relatedPages = [
  { label: 'Private Chef Bali', href: '/private-chef-bali', desc: 'Full daily private chef service' },
  { label: 'Daily Chef Service', href: '/private-chef-bali', desc: 'All-day chef hire for villa stays' },
  { label: 'Private Dining Bali', href: '/private-dining-indonesia', desc: 'In-villa dining for all occasions' },
  { label: 'Floating Breakfast Bali', href: '/catering/floating-breakfast', desc: 'Pool floating breakfast service' },
  { label: 'Grazing Table Bali', href: '/catering/grazing-tables', desc: 'Sharing boards and grazing setups' },
  { label: 'Mixologist Hire Bali', href: '/in-villa-service/mixology', desc: 'Cocktail bar for brunch events' },
]

export default function BrunchCateringBaliPage() {
  return (
    <PremiumPage
      slug="blog/brunch-catering-bali"
      title="Brunch Catering Bali -- Private Chef Brunch for Villa Events & Group Stays"
      seoTitle="Brunch Catering Bali -- Private Chef Villa Brunch | myCHEF"
      description="Private chef brunch catering for Bali villa events and stays. From casual daily morning spreads to celebration brunches for 50+ guests."
      seoDescription="Brunch catering in Bali for villa events and group stays. Private chef brunch from IDR 700K/person. Post-wedding, birthday and daily villa brunch options."
      h1="Brunch Catering Bali -- Private Chef Brunch for Villa Events & Group Stays"
      subtitle="From lazy poolside morning spreads to celebration brunches for 50 guests -- a private chef makes every morning in Bali exceptional."
      heroImage="/images/blog/brunch-catering-bali.jpg"
      heroImageAlt="Beautifully presented private chef brunch spread at a Bali villa pool with tropical fruits, pastries and fresh juices"
      ogImage="/images/blog/brunch-catering-bali.jpg"
      canonicalUrl="https://mychef.id/blog/brunch-catering-bali"
      keywords={[
        'brunch catering bali',
        'private chef brunch bali',
        'villa brunch bali',
        'brunch catering villa bali',
        'private brunch bali',
        'brunch chef bali',
        'event brunch bali',
        'birthday brunch bali',
        'post wedding brunch bali',
        'morning catering bali',
      ]}
      highlights={['Casual to Formal Formats', 'Cocktail Brunch Option', 'Up to 50+ Guests', 'From IDR 700K/person']}
      sections={sections}
      faqs={faqs}
      relatedPages={relatedPages}
      ctaText="Book a Villa Brunch"
      ctaSubtext="Tell us your occasion, guest count, and villa location -- we will send a brunch menu proposal within 24 hours."
      extraJsonLd={[
        breadcrumbSchema('Brunch Catering Bali', 'https://mychef.id/blog/brunch-catering-bali', 'Blog', 'https://mychef.id/journal'),
        faqPageSchema(faqs),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Brunch Catering Bali -- Private Chef Brunch for Villa Events & Group Stays',
          description:
            'Private chef brunch catering for Bali villas. Fresh menus, professional service, and cocktail brunch options for occasions and daily villa stays.',
          url: 'https://mychef.id/blog/brunch-catering-bali',
          datePublished: '2026-06-30',
          dateModified: '2026-06-30',
          author: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          image: 'https://mychef.id/images/blog/brunch-catering-bali.jpg',
        },
      ]}
    />
  )
}
