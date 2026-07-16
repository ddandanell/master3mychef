import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const sections: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    title: 'Pool Party Catering in Bali -- Private Chef and Full Catering for Villa Pool Parties',
    body: `Bali pool parties run from small group afternoons to 100-guest villa celebrations. Whatever the scale, the food is always critical -- and catering a pool party is genuinely different from catering a dinner. Guests are moving around, eating while standing or lounging, drinking throughout the afternoon, and grazing rather than sitting for courses.

myCHEF provides professional pool party catering across Bali's villa areas. We design menus specifically for the pool party format -- food that travels well, holds up in heat, looks good on a pass-around tray, and keeps a crowd fed without anyone needing to sit down at a table. From a private chef for a birthday afternoon to a full service team for a 60-guest celebration, we have the experience and the staffing to make it work.

We cover all Bali villa areas: Seminyak, Canggu, Uluwatu, Jimbaran, Sanur, Nusa Dua, Ubud, and Pererenan.`,
  },
  {
    id: 'what-we-offer',
    type: 'content',
    title: 'What myCHEF Pool Party Catering Includes',
    body: `**Menu Design for the Pool Party Format** -- We design food that works in a pool party environment. Finger food, sliders, wraps, skewers, sushi rolls, antipasto boards, and fresh salads. No unwieldy plates, no food that degrades in heat, no items that are impossible to eat standing up.

**Chef and Kitchen Team** -- A lead chef manages all food preparation and coordinates with the service team throughout the event. For larger groups (30+), we provide a second chef to maintain output and quality.

**Service Staff** -- Waiters circulate with trays, maintain the grazing table, manage replenishment, and clear as they go. Professional, attentive, unobtrusive. For parties of 20+, a dedicated service team means the host never has to manage logistics.

**Grazing and Sharing Stations** -- We set up a central grazing station with a chef-designed spread: artisan boards, dips, fresh salads, and sharing dishes. This anchors the food experience without requiring formal seating.

**Barbecue and Live Cook Stations** -- For groups who want the live cooking element, a BBQ station or live wok station creates a focal point and delivers fresh, hot food continuously throughout the afternoon.

**Full Cleanup** -- Everything cleared and cleaned before the team departs. The villa is left exactly as found.`,
  },
  {
    id: 'menu-formats',
    type: 'content',
    title: 'Pool Party Menu Formats',
    body: `**The Classic Pass-Around**
Waiters circulate with trays of finger food throughout the afternoon. Think: crispy spring rolls, beef skewers with peanut sauce, fresh tuna rolls, prawn cocktail cups, watermelon and feta bites, mini lobster sliders. Guests eat without interrupting what they are doing. Light, continuous, social.

**The Grazing Table**
A generous central table anchored by sharing boards, dips, crudites, artisan bread, charcuterie, fresh fruits, and salad bowls. Guests return to graze throughout the afternoon. Easy to maintain and replenish. Works for any group size.

**The BBQ Pool Party**
A live BBQ station staffed by a chef -- premium satay, whole fish on the grill, lamb chops, corn, grilled vegetables. Guests queue at the station when they want something hot and freshly cooked. Social, impressive, and one of the most popular formats for Bali villa parties.

**The Mezze and Dips Spread**
Mediterranean-inspired: hummus, baba ganoush, tzatziki, labneh, flatbreads, olives, slow-roasted vegetables, falafel, stuffed vine leaves. Suitable for vegetarian and mixed groups. Pairs well with rosé and sparkling wine.

**The Asian Street Food Station**
Live cook stations: a nasi goreng wok, a satay grill, a fresh roll station, and a cold noodle salad bar. The most "Bali" option and reliably popular with international guests.

**The Premium Platter Event**
For birthday parties and milestone celebrations: premium sharing platters elevated beyond standard party food -- whole roasted chicken, king prawns, carved meats, artisan cheeses, and spectacular centrepiece dishes.`,
  },
  {
    id: 'occasions',
    type: 'content',
    title: 'Pool Party Occasions We Cater',
    body: `**Birthday Pool Parties** -- The Bali villa birthday is a signature experience. myCHEF designs a menu and service setup that lets the host spend the afternoon celebrating rather than managing catering logistics. We can incorporate birthday cake service and custom dessert moments.

**Hen Parties** -- Bali hen parties are a serious category. Fun, festive, high-energy. We design menus and service formats specifically for hen party dynamics: grazing tables, cocktail food, afternoon bottomless options, and a service team that keeps the energy up.

**Group Holiday Parties** -- Large villa holiday groups -- 15, 20, or 30 people -- pool party format. Relaxed, social, continuous food service without the formality of a sit-down dinner.

**End-of-Trip Celebrations** -- The send-off party on the last afternoon in Bali. A premium pool party with great food and service is how you close out the best holiday of the year.

**Corporate Events** -- Team offsites and incentive trips in Bali increasingly use the pool party format for informal evening and afternoon events. Professional enough for a corporate context, relaxed enough to actually enjoy.

**Full Moon and Themed Parties** -- We cater to themed events with menus adapted to the theme -- Asian fusion for a tropical night, Mediterranean for a white party, Indonesian street food for a local-flavour event.`,
  },
  {
    id: 'pricing',
    type: 'content',
    title: 'Pool Party Catering Prices in Bali',
    body: `**Small Pool Party (up to 15 guests)**: From IDR 700,000/person -- includes chef, finger food menu (3--4 items), grazing spread, and basic service.

**Mid-Size Pool Party (15--30 guests)**: From IDR 700,000/person -- includes chef, second chef, finger food rotation, grazing table, and 2 service staff.

**Large Pool Party (30--60 guests)**: From IDR 700,000/person -- full service team, multiple food stations, BBQ or live cook option, dedicated service management. Quoted in full on enquiry.

**Premium Birthday or Celebration Party (any size)**: From IDR 700,000/person -- elevated menu, centrepiece dishes, dessert service, full service team, and event coordination support.

All pricing includes chef, ingredients, and service staff. Alcohol and cocktail bar are additional. Add a mixologist for IDR 1,500,000 flat (client supplies alcohol). Minimum booking: 8 guests.`,
  },
  {
    id: 'cta',
    type: 'content',
    title: 'Book Pool Party Catering in Bali',
    body: `Tell us your villa location, date, guest count, party type, and approximate budget. We will design a menu and service format and send a proposal within 24 hours.`,
  },
]

const faqs = [
  {
    question: 'What food formats work best for a pool party in Bali?',
    answer:
      'Finger food and grazing tables are the most practical -- food guests can eat while moving around, in the sun and heat, without cutlery or plates. Pass-around trays of small bites, a central grazing board, and a live BBQ or wok station are the most popular combinations. We avoid heavy or unwieldy items and design specifically for the pool party environment.',
  },
  {
    question: 'How many service staff do we need for a Bali pool party?',
    answer:
      'As a general guide: 1 service staff per 15--20 guests for casual passing, 1 per 10--15 guests for more active service. For a 30-guest party we typically provide 2 waiters plus a chef. For 60 guests, a team of 4--5 (chef, sous chef, 2--3 waiters) is standard. We confirm the right staffing level when we send your proposal.',
  },
  {
    question: 'Can we add a cocktail bar or mixologist to the pool party package?',
    answer:
      "Yes. A mixologist managing a dedicated cocktail station is one of the most popular add-ons for Bali pool parties. We provide the mixologist and all bar equipment; the client supplies alcohol. The mixologist designs a custom cocktail menu for the occasion -- typically 2--3 signature drinks plus classics. It's priced at IDR 1,500,000 flat on top of the catering package.",
  },
  {
    question: 'Can pool party catering accommodate dietary requirements across a large group?',
    answer:
      'Yes. Pool party menus are well-suited to dietary accommodation because the format is naturally varied -- there are multiple items on offer and guests select what they want. We label everything clearly, ensure vegan, gluten-free, and halal options are always available in the spread, and brief the service team on what is in each dish.',
  },
  {
    question: 'What is the minimum booking size for pool party catering?',
    answer:
      "Minimum 8 guests. For groups under 8, a private chef dinner is usually a better format and more cost-effective. Contact us if you're unsure -- we'll suggest the right format for your group size and occasion.",
  },
]

const relatedPages = [
  { label: 'Villa Party Catering', href: '/blog/villa-party-catering-bali', desc: 'Full-service villa event catering' },
  { label: 'Brunch Catering Bali', href: '/blog/brunch-catering-bali', desc: 'Private chef morning brunches' },
  { label: 'Grazing Table Bali', href: '/blog/grazing-table-bali', desc: 'Artisan sharing boards for events' },
  { label: 'Mixologist Hire Bali', href: '/blog/mixologist-hire-bali', desc: 'Cocktail bar for pool parties' },
  { label: 'Large Group Catering', href: '/blog/large-group-catering-bali', desc: 'Catering for 30+ guests' },
  { label: 'Barbeque Catering Bali', href: '/blog/bali-bbq-catering-villa-guide', desc: 'BBQ catering for villa events' },
]

export default function PoolPartyCateringBaliPage() {
  return (
    <PremiumPage
      slug="blog/pool-party-catering-bali"
      title="Pool Party Catering Bali -- Private Chef and Full Service for Villa Pool Parties"
      seoTitle="Pool Party Catering Bali -- Private Chef & Full Service for Villa Pool Parties"
      description="Professional pool party catering for Bali villas. Finger food, grazing tables, live BBQ stations, and full service teams for 8--100 guests. All villa areas covered."
      seoDescription="Pool party catering in Bali for 8--100 guests. Private chef, finger food, grazing tables, BBQ stations, and cocktail bar add-on. From IDR 700K/person. All villa areas."
      h1="Pool Party Catering Bali -- Private Chef and Full Service for Villa Pool Parties"
      subtitle="From small group afternoon parties to 60-guest celebrations -- professional catering designed specifically for the Bali villa pool party format."
      heroImage="/images/blog/pool-party-catering-bali.jpg"
      heroImageAlt="Beautifully catered pool party at a Bali villa with a grazing spread, tropical cocktails and staff serving finger food to guests"
      ogImage="/images/blog/pool-party-catering-bali.jpg"
      canonicalUrl="https://mychef.id/blog/pool-party-catering-bali"
      keywords={[
        'pool party catering bali',
        'villa pool party bali',
        'pool party food bali',
        'pool party chef bali',
        'catering for pool party bali',
        'bali villa pool party catering',
        'birthday pool party bali',
        'pool party catering service bali',
        'bali pool party food',
        'villa party catering bali',
      ]}
      highlights={['8 to 100 Guests', 'Live BBQ Stations', 'Cocktail Bar Add-on', 'From IDR 700K/person']}
      sections={sections}
      faqs={faqs}
      relatedPages={relatedPages}
      ctaText="Book Pool Party Catering"
      ctaSubtext="Tell us your villa, guest count, and party type -- we will design a menu and send a proposal within 24 hours."
      extraJsonLd={[
        breadcrumbSchema('Pool Party Catering Bali', 'https://mychef.id/blog/pool-party-catering-bali', 'Blog', 'https://mychef.id/journal'),
        faqPageSchema(faqs),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Pool Party Catering Bali -- Private Chef and Full Service for Villa Pool Parties',
          description:
            'Professional pool party catering in Bali. Finger food, grazing tables, live BBQ, and full service for 8--100 guests at Bali villas.',
          url: 'https://mychef.id/blog/pool-party-catering-bali',
          datePublished: '2026-06-30',
          dateModified: '2026-06-30',
          author: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          image: 'https://mychef.id/images/blog/pool-party-catering-bali.jpg',
        },
      ]}
    />
  )
}
