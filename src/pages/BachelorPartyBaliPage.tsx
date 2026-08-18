import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { Flame, UtensilsCrossed, Star, Pizza } from 'lucide-react'

const SECTIONS = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Why Bali for Your Bucks Night',
    title: 'The World\'s Best Bachelor Party Destination — And Why a Villa Chef Makes It',
    body: `<p>Bali has built a well-deserved reputation as the bachelor party capital of Southeast Asia. The combination of warm weather year-round, luxury villas with private pools available at a fraction of European costs, a party culture that genuinely accommodates groups, and a food scene that ranges from world-class to brilliantly casual has made Bali the default choice for Australian, British, Singaporean, and European groom squads. Hundreds of bucks nights happen here every single week.</p>

    <p>But most groups get the food wrong. They spend three nights restaurant-hopping — booking tables at places that weren't designed for large groups, dealing with slow service when 15 lads need feeding at the same time, spending more than they planned on bad cocktails, and breaking the momentum of the evening every time someone has to wrangle an Uber to the next spot.</p>

    <p>A private chef at your villa changes everything. Your group has full access to a private pool, outdoor areas, and the sound system from the moment you arrive. The chef sets up at the villa — a proper BBQ station, a grill, a bar setup — and the food comes to you. There are no minimums to hit, no dress codes, no noise curfews, no strangers at the next table. You eat when you want, as much as you want, in your own space.</p>

    <p>The cost comparison is also compelling. A restaurant-hopping night for 15 people in Bali — including transport, drinks markups, multiple cover charges — will typically cost more per head than a full chef-served villa dinner with bar service. And the villa experience is simply better: more food, better quality, zero friction, no waiting for a table.</p>

    <p>myCHEF handles groups of 8–40 for bachelor parties across all major Bali villa areas — Seminyak, Canggu, Uluwatu, Ubud, Nusa Dua, and beyond. We bring the chef, the service staff, the setup, and the energy. You bring the lads.</p>`,
  },
  {
    id: 'why-mychef',
    type: 'content' as const,
    subtitle: 'Why myCHEF',
    title: 'Bachelor Parties Are What We Do Best',
    body: `<p>myCHEF has served more than 560 villas across Bali, and bachelor parties are one of our most frequent bookings. We know what a bucks night needs: abundant food, a grill that keeps running, and a team that understands the energy of the evening. Our chefs have handled groups from 8 to 40 lads across every major villa area in Bali — Seminyak, Canggu, Uluwatu, Ubud, Nusa Dua, and Jimbaran.</p>

    <p>We arrive with everything we need: the grill, the prep tables, the bar setup, and the service staff. You do not need to lift a finger. The result is a night that flows from arrival to midnight without a single restaurant booking, Uber wait, or dress code.</p>`,
  },
  {
    id: 'packages',
    type: 'features' as const,
    subtitle: 'Packages',
    title: 'Choose Your Bucks Night Package',
    features: [
      {
        icon: Flame,
        title: 'Epic BBQ Night',
        desc: 'Whole beast BBQ centrepiece, full satay station, sharing platters, cold beer service, and grill-side service from a dedicated chef. The classic bucks night format — standing, social, maximum meat. IDR 700,000/person. Minimum 10 guests.',
      },
      {
        icon: UtensilsCrossed,
        title: 'Feast & Drinks Package',
        desc: '5-course banquet served seated around the villa table, plus a cocktail welcome on arrival. Coursed service from dedicated staff. Built for groups who want the party to feel like a proper occasion before the night kicks off. IDR 700,000/person.',
      },
      {
        icon: Star,
        title: 'Premium Chef Experience',
        desc: 'Full tasting menu, in-villa bar service with a dedicated bartender, and a butler throughout the evening. The full myCHEF luxury treatment for groups who want to celebrate properly. Chef + bar + service all included. IDR 900,000/person.',
      },
      {
        icon: Pizza,
        title: 'Casual Pack',
        desc: 'Shared plates, grill station, unlimited nasi goreng and mie goreng from a live wok station, bottomless rice and sides. Perfect for larger groups keeping costs lean without sacrificing quality or quantity. IDR 700,000/person.',
      },
    ],
  },
  {
    id: 'menu',
    type: 'content' as const,
    subtitle: 'Menu Ideas',
    title: 'What to Eat at a Bali Bachelor Party',
    body: `<p>The best bachelor party menus are designed for grazing, sharing, and going back for thirds. Forget individual plates and plated courses — the right format for a bucks night is abundance: multiple dishes in the middle of the table, a grill station running throughout the evening, and late-night snack options for when the night extends past midnight.</p>

    <p><strong>BBQ Stations</strong> are the centrepiece of most bucks night setups. A whole beast (pig or lamb) slow-cooked and carved tableside, alongside prawn skewers coming straight off the grill and chicken satay with peanut sauce. The drama of a live grill station elevates the evening and gives the chef a stage to work with.</p>

    <p><strong>Indonesian Street Food Classics</strong> translate perfectly to group settings. Sate lilit — the traditional Balinese minced fish and coconut satay — on lemongrass skewers. Babi guling sliders (Balinese suckling pig, shredded, on fresh buns with sambal). A live nasi goreng wok station where guests can watch the chef stir-fry their own portion. Loaded nachos with Indonesian sambal and local cheese for a crowd-pleasing fusion option.</p>

    <p><strong>Sharing Platters</strong> keep the table full throughout the evening — Indonesian-spiced chicken wings, tuna tartare with wonton chips, crispy pork belly bites with kecap manis dipping sauce, and seasonal vegetable skewers for balance.</p>

    <p><strong>Late-Night Snack Trays</strong> can be arranged for groups staying up past midnight — cheese boards, sliders, fried snacks, and fresh fruit to keep the energy going without a formal sit-down.</p>

    <p>Every package can be tailored for dietary requirements, spice tolerance, and group preferences. Tell us your group when you book and we'll send a custom menu proposal within 2 hours.</p>`,
  },
  {
    id: 'add-ons',
    type: 'content' as const,
    subtitle: 'Add-Ons',
    title: 'Upgrade Your Bachelor Party Package',
    body: `<p>The core packages cover the food. These add-ons let you build the full experience around it.</p>

    <p><strong>Mobile cocktail bar (from IDR 500,000++ per guest, min 10):</strong> We bring a complete mobile bar to the villa — team, four cocktails, glassware, ice, setup and cleanup. BYO or free-flow spirits options. Not hourly bartender hire. The single most popular add-on for bachelor parties. Full tables: <a href="/in-villa-service/bartenders">mobile cocktail bar packages</a> · occasion plan: <a href="/experiences/private-cocktail-party">private cocktail party</a>. Stack multi-day meals with <a href="/private-chef-bali">private chef</a> if the squad stays the week.</p>

    <p><strong>Private mixology warm-up:</strong> Before free-flow starts, book a craft session for signature serves and zero-proof options. See <a href="/in-villa-service/mixology">private mixology</a>. Minimum guests and pricing confirmed on quote.</p>

    <p><strong>Midnight Snack Drop:</strong> A tray of late-night party food delivered to the villa at midnight — sliders, fried snacks, cheese, and fresh items to extend the evening. Quoted as an add-on on your proposal (not a food-menu per-person package). Ordered at booking; the chef prepares and delivers without disrupting the night.</p>

    <p><strong>Fire Pit Setup:</strong> A dedicated fire pit area arranged for the villa's outdoor space, with seating and lighting. Creates a natural gathering point for the post-dinner part of the evening. Availability depends on villa layout — ask us at booking.</p>

    <p><strong>Butler Service:</strong> A dedicated butler assigned to your group for the evening — handling requests, coordinating service, and ensuring every guest is looked after. Included in the Premium Chef Experience package; available as an add-on for other packages. Quote on request.</p>

    <p>All add-ons are confirmed at booking. We do not accept add-on requests less than 48 hours before the event date.</p>`,
  },
  {
    id: 'logistics',
    type: 'content' as const,
    subtitle: 'How It Works',
    title: 'Booking and Logistics',
    body: `<p>Booking a myCHEF bachelor party package is straightforward. Message us on WhatsApp with your villa address, guest count, proposed date, and any dietary requirements. We'll confirm availability and send a custom package proposal within 2 hours during business hours.</p>

    <p><strong>On the day:</strong> The chef and service team arrive at your villa 3 hours before service is scheduled to begin. Setup — including the BBQ station, bar area, serving tables, and all equipment — is completed before your first guests arrive. You don't need to prepare anything or be at the villa during setup.</p>

    <p><strong>During service:</strong> The chef runs the grill and kitchen; service staff handle food delivery, plate clearance, and any table setup. If you've booked the bartender add-on, bar service begins when guests arrive. Service continues through the agreed end time, with late-night snack add-ons delivered at the arranged time.</p>

    <p><strong>After the event:</strong> Full cleanup is included. The team clears, cleans, and returns the villa to the state it was in before they arrived. Equipment is removed. You don't deal with any of it.</p>

    <p><strong>What to tell us when you book:</strong> Villa address and area, confirmed guest count (approximate is fine), any dietary requirements or allergies in the group, preferred service start time, and which add-ons you're interested in. That's all we need to get started.</p>`,
  },
  {
    id: 'process',
    type: 'content' as const,
    subtitle: 'How It Works',
    title: 'Booking Your Bucks Night in Three Steps',
    body: `<p><strong>Step 1 — Send your brief:</strong> Message us on WhatsApp with your villa address, group size, date, and any dietary requirements. We confirm availability and send a custom package proposal within 2 hours.</p>

    <p><strong>Step 2 — Lock it in:</strong> Choose your package and any add-ons — bartender, cocktail masterclass, midnight snack drop. One confirmation and the chef, equipment, and team are reserved.</p>

    <p><strong>Step 3 — Enjoy the night:</strong> The team arrives 3 hours before service, sets up the BBQ, bar, and dining area, and runs the evening from the first canapé to final clean-up. You focus on the lads; we focus on the food.</p>`,
  },
  {
    id: 'faq',
    type: 'faq' as const,
    subtitle: 'Questions',
    title: 'Frequently Asked',
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Get a Custom Package',
    title: 'Plan Your Bali Bachelor Party',
    body: 'Tell us your villa, group size, and date — we\'ll send a custom package within 2 hours.',
    primaryAction: { label: 'Message Us on WhatsApp', href: 'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27m%20planning%20a%20bachelor%20party%20at%20a%20Bali%20villa%20and%20need%20catering.', external: true },
    secondaryAction: { label: 'Get a Quote', href: '/quote' },
  },
]

const FAQS = [
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

const RELATED_PAGES = [
  { label: 'Mobile Cocktail Bar', href: '/in-villa-service/bartenders', desc: 'Free-flow packages from IDR 500K++ per guest — we come to the villa.' },
  { label: 'Private Cocktail Party', href: '/experiences/private-cocktail-party', desc: 'Full night plan with the same mobile bar packages.' },
  { label: 'BBQ Catering Bali', href: '/catering/bbq-catering', desc: 'Live grill packages for bucks nights.' },
  { label: 'Private Chef Bali', href: '/private-chef-bali', desc: 'Multi-day chef hire if the squad stays the week.' },
  { label: 'Villa Parties', href: '/events/villa-parties', desc: 'Hen parties, villa celebrations and private group events.' },
  { label: 'Pricing', href: '/pricing', desc: 'Chef, catering and mobile bar price tables.' },
]

export default function BachelorPartyBaliPage() {
  return (
    <PremiumPage
      slug="blog/bachelor-party-bali-private-chef"
      title="Bachelor Party Bali: Private Chef & Catering"
      description="Epic food for your bachelor party at a Bali villa. BBQ setups, cocktail service, epic grazing tables, themed menus. Groups 8–40. Message us on WhatsApp."
      seoTitle="Bachelor Party Bali | Private Chef & Villa Catering | myCHEF"
      seoDescription="Epic food for your bachelor party at a Bali villa. BBQ setups, cocktail service, epic grazing tables, themed menus. Groups 8–40. Message us on WhatsApp."
      canonicalUrl="https://mychef.id/blog/bachelor-party-bali-private-chef"
      h1="Bachelor Party Bali: Private Chef & Catering"
      subtitle="Epic Food & Drink for Your Bucks Night at a Bali Villa"
      heroImage="/generated/mychef-experience-bali-luna-gallery-1.webp"
      heroImageAlt="Bachelor party BBQ setup at a Bali villa with private chef service by myCHEF"
      ogImage="https://mychef.id/generated/mychef-experience-bali-luna-gallery-1.webp"
      keywords={[
        'bachelor party bali',
        'bucks night bali chef',
        'bachelor party catering bali',
        'mobile bar bachelor party bali',
        'bali villa bachelor party food',
        'private chef bachelor party bali',
      ]}
      highlights={['BBQ Catering', 'Mobile Bar', 'Private Chef', 'FAQ']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema('Bachelor Party Bali', 'https://mychef.id/blog/bachelor-party-bali-private-chef', 'Journal', 'https://mychef.id/journal'),
        faqPageSchema(FAQS.map(f => ({ question: f.question, answer: f.answer }))),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Bachelor Party Bali: Private Chef & Catering',
          description: 'Epic food for your bachelor party at a Bali villa. BBQ setups, cocktail service, grazing tables, themed menus for groups 8–40.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF.id', logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' } },
          datePublished: '2026-06-29',
          dateModified: new Date().toISOString().split('T')[0],
          image: 'https://mychef.id/generated/mychef-experience-bali-luna-gallery-1.webp',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://mychef.id/blog/bachelor-party-bali-private-chef' },
          url: 'https://mychef.id/blog/bachelor-party-bali-private-chef',
          wordCount: 1700,
          keywords: 'bachelor party bali, bucks night bali chef, bachelor party catering bali, bali villa bachelor party food, private chef bachelor party bali',
        },
      ]}
      ctaText="Plan Your Bali Bucks Night"
      ctaSubtext="Tell us your villa, group size, and date — we'll send a custom package within 2 hours."
    />
  )
}
