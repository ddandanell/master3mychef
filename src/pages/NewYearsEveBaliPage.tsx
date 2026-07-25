import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { Sparkles, Star, Users, Heart } from 'lucide-react'

const SECTIONS = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: "New Year's Eve Bali",
    title: 'Why a Private Villa Chef Beats Every Other NYE Option in Bali',
    body: `<p>New Year's Eve in Bali is one of the most anticipated nights in Southeast Asia. But for every extraordinary private villa celebration, there are hundreds of guests trapped in over-capacity beach clubs, waiting an hour for overpriced cocktails in Kuta, or sitting at a restaurant "NYE package" that cost three times the usual rate and delivered half the experience.</p>

    <p>The private villa chef option exists precisely to sidestep that. Your group stays at your villa. Your pool is open. Your sound system plays whatever you choose. Your chef arrives early, transforms your outdoor kitchen and dining area into a fully operational fine-dining operation, and delivers a bespoke tasting menu timed around your evening — not around a restaurant's turn schedule.</p>

    <p>Midnight happens when you want it to happen. Champagne is poured exactly at the countdown. Petit fours arrive while you're still at the table. There are no queues, no strangers crowding the dance floor, no mandatory early finish time because the next seating is waiting.</p>

    <p>For couples, it's the most intimate New Year's Eve possible — just the two of you, a candlelit table by the pool, a chef who disappears between courses. For groups of 10, 15, or 20, it's a private party with food that a restaurant at that price point genuinely couldn't match. For families with children, it's the only format that actually works — kids can eat earlier, parents eat later, the chef accommodates both without complaint.</p>

    <p>myCHEF has delivered New Year's Eve private chef dinners across Seminyak, Canggu, Ubud, Uluwatu, and beyond. It is the single most-booked date on our calendar. The chefs who do it well know how to time the evening, manage the midnight moment, and leave you with a memory that outlasts the hangover.</p>`,
  },
  {
    id: 'why-mychef',
    type: 'content' as const,
    subtitle: 'Why myCHEF',
    title: "New Year's Eve Is Our Most Important Night — And We Treat It That Way",
    body: `<p>myCHEF has served more than 560 villas across Bali, and New Year's Eve is the single most-booked date on our calendar. The chefs who handle NYE are selected specifically for their experience with multi-course timing, midnight countdown coordination, and peak-night execution under pressure. This is not a standard dinner — it is a once-a-year event, and our team approaches it with the seriousness it deserves.</p>

    <p>We serve NYE celebrations across all major Bali villa areas — Seminyak, Canggu, Uluwatu, Ubud, Nusa Dua, and Jimbaran — from intimate couples dinners to villa parties of 30+. Every booking receives a dedicated chef, full table setup, and a service team that manages the evening from the first canapé to the final petit four at midnight.</p>`,
  },
  {
    id: 'packages',
    type: 'features' as const,
    subtitle: 'NYE Packages',
    title: "New Year's Eve Chef Packages",
    features: [
      {
        icon: Sparkles,
        title: 'Classic NYE Tasting Menu',
        desc: '5-course menu with champagne pairing — from canapés through to a celebration dessert. Designed for groups of 2–8. Includes amuse-bouche, two starters, main, and petit fours. IDR 950,000 per person.',
      },
      {
        icon: Star,
        title: 'Grand Celebration',
        desc: '7-course fine dining experience with vintage champagne, butler service, and full table setup. The most immersive NYE experience myCHEF offers. For groups wanting the full luxury experience. IDR 1,500,000 per person.',
      },
      {
        icon: Users,
        title: 'Group Feast Package',
        desc: 'Family-style 3-course feast designed for 10+ guests. Sharing platters, abundant servings, multiple protein options, and communal dessert. Perfect for large villa groups celebrating together. IDR 700,000 per person.',
      },
      {
        icon: Heart,
        title: 'Couples NYE',
        desc: 'The most intimate NYE option: a 5-course dinner for two with rose petal setup, candlelight, and midnight champagne poured at the countdown. A complete evening for two people. IDR 2,500,000 total.',
      },
    ],
  },
  {
    id: 'menu',
    type: 'content' as const,
    subtitle: 'NYE Menu Design',
    title: "What Makes a Great New Year's Eve Menu",
    body: `<p>New Year's Eve is not an ordinary dinner. The menu should feel celebratory from the first bite — ingredients that signal occasion, presentation that matches the evening, and a midnight moment that the table will remember.</p>

    <p><strong>Luxury ingredients:</strong> NYE menus at myCHEF typically feature premium proteins and seasonal produce. Think Jimbaran prawns served as a chilled amuse-bouche, a rich local prawn bisque with coconut cream and lemongrass, pan-seared wagyu striploin with truffle jus, or Balinese smoked duck breast with tamarind glaze. These are not restaurant staples — they are ingredients sourced specifically for the occasion and prepared fresh at your villa.</p>

    <p><strong>A sample progression:</strong></p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;">
      <li><strong>Amuse-bouche:</strong> Coconut-poached prawn with pickled watermelon and chilli oil</li>
      <li><strong>Starter:</strong> Local prawn bisque, crème fraîche, chive oil</li>
      <li><strong>Intermezzo:</strong> Lychee and ginger sorbet</li>
      <li><strong>Main:</strong> Wagyu striploin, truffle potato, roasted garlic jus, wilted spinach</li>
      <li><strong>Midnight moment:</strong> Champagne poured at the countdown, warm petit fours — dark chocolate truffles, salted caramel tarts, passion fruit bonbons</li>
    </ul>

    <p><strong>Indonesian luxury twists:</strong> The best NYE menus in Bali honour the island's ingredients without becoming a traditional warung. Balinese smoked duck (bebek betutu) reimagined as a plated course. Rendang-spiced short rib alongside a Western sauce. A coconut panna cotta with palm sugar caramel for dessert. These touches make the menu feel specific to where you are — not a generic European fine-dining template transplanted to a tropical villa.</p>

    <p><strong>Dietary accommodations:</strong> NYE menus are fully bespoke. Vegan, vegetarian, gluten-free, and nut-free variants are built into the menu from the start — not treated as afterthoughts. Share your requirements when booking and the chef designs around them.</p>`,
  },
  {
    id: 'why-early',
    type: 'content' as const,
    subtitle: 'Book Early',
    title: 'Why NYE Bookings Fill Before December',
    body: `<p>New Year's Eve is the single most-requested date on the myCHEF calendar — by a significant margin. We receive more NYE enquiries than any other individual date, and we can only accept a limited number of bookings because each dinner requires a dedicated chef for a full evening.</p>

    <p>The practical reality: top private chefs in Bali start receiving NYE enquiries from September. By late October, the most experienced chefs — those with fine-dining hotel backgrounds, fluency in multi-course timing, and a track record of peak-night execution — are fully committed. What remains in November and December is the second tier.</p>

    <p><strong>Why supply is so tight:</strong></p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;">
      <li>A single NYE booking occupies a chef for 8–10 hours (setup through cleanup)</li>
      <li>Premium champagne and imported ingredients require 3–4 weeks lead time to source reliably in Bali</li>
      <li>Villa availability peaks in late December — if you haven't confirmed your villa, that affects your chef booking too</li>
      <li>Dietary accommodations for large groups require advance menu planning that can't be rushed</li>
    </ul>

    <p>If you are reading this and it is September or later: message us now. Do not wait until December to enquire. We will confirm availability, hold a date, and give you time to finalise your group size and menu preferences without pressure. The couples and families who have the best NYE experiences at Bali villas are invariably those who booked early.</p>`,
  },
  {
    id: 'logistics',
    type: 'content' as const,
    subtitle: 'Evening Flow',
    title: "How Your New Year's Eve Unfolds",
    body: `<p>A myCHEF NYE dinner is a managed experience, not just a meal delivery. Here is how a typical Grand Celebration evening flows:</p>

    <p><strong>4:00 PM — Chef arrives.</strong> Full kitchen equipment, ingredients, and table décor are transported to the villa. The chef takes 30 minutes to inspect the kitchen setup, confirm equipment, and begin mise en place.</p>

    <p><strong>6:00 PM — Setup complete.</strong> Table is dressed: linens, candles, glassware, name cards if applicable. Champagne is on ice. The kitchen is operational.</p>

    <p><strong>7:00 PM — Canapés.</strong> A round of canapés is served poolside or in the living area as guests arrive and gather. This is the social, pre-dinner window — relaxed, unhurried.</p>

    <p><strong>8:00 PM — First course at the table.</strong> Courses follow at 15–20 minute intervals, timed by the chef. No rushing; no waiting. The evening is paced to feel luxurious, not rushed.</p>

    <p><strong>11:58 PM — Midnight moment.</strong> Champagne is poured and ready. The chef and service team coordinate the countdown. At midnight, glasses are raised, champagne flows, and a course of warm petit fours is served immediately after.</p>

    <p><strong>12:30 AM — Wind down.</strong> Final course and coffee or digestifs. The table transitions naturally from dinner to celebration.</p>

    <p><strong>2:00 AM — Chef departs.</strong> Kitchen is cleaned and returned to normal. The villa is yours.</p>

    <p><strong>What's included:</strong> full menu ingredients, table setup, service staff, all kitchen equipment, chef transport. <strong>Not included:</strong> alcohol (client-supplied; we can recommend Bali wine importers and champagne sources). A 25% festive surcharge applies on December 31 and is quoted upfront.</p>`,
  },
  {
    id: 'process',
    type: 'content' as const,
    subtitle: 'How It Works',
    title: "Booking Your New Year's Eve Chef in Three Steps",
    body: `<p><strong>Step 1 — Enquire early:</strong> Message us on WhatsApp with your villa, group size, and preferred menu style. NYE chefs book from September — the earlier you enquire, the better your chance of securing a top-tier chef.</p>

    <p><strong>Step 2 — Design your menu:</strong> We work with you to build a bespoke tasting menu or feast package, confirm champagne service timing, and lock in the team. A 25% festive surcharge is quoted upfront — no surprises.</p>

    <p><strong>Step 3 — Celebrate:</strong> The chef arrives at 4 PM, sets up the kitchen and dining area, and paces the evening from canapés through to the midnight countdown. Champagne is poured at exactly 11:58 PM. You ring in the New Year; we handle every detail.</p>`,
  },
  {
    id: 'faq',
    type: 'faq' as const,
    title: 'NYE Questions',
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Reserve Your Date',
    title: "Secure Your New Year's Eve Chef Now",
    body: 'NYE dates fill before December. Message us to check availability and hold your preferred chef.',
    primaryAction: {
      label: 'Reserve Your NYE Chef',
      href: 'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27d%20like%20to%20book%20a%20private%20chef%20for%20New%20Year%27s%20Eve%20at%20my%20Bali%20villa.',
      external: true,
    },
    secondaryAction: {
      label: 'Get a Quote',
      href: '/quote',
    },
  },
]

const FAQS = [
  {
    question: "When should I book for New Year's Eve?",
    answer: 'By October at the latest. Peak season chefs are fully booked before December. The best chefs — those with fine-dining backgrounds and multi-course timing experience — commit to NYE bookings from September. Enquire early to secure your preferred chef and menu.',
  },
  {
    question: 'Do you serve alcohol on NYE?',
    answer: 'We provide full table service throughout the evening. Alcohol is client-supplied; we can recommend Bali wine importers and champagne sources if you need guidance on what to order and where to source it.',
  },
  {
    question: 'Can you do midnight champagne service?',
    answer: 'Yes — coordinated countdown, champagne on ice, poured at midnight. The midnight moment is a standard part of all NYE packages. The chef and service team manage the timing so it happens exactly at midnight.',
  },
  {
    question: "What's the minimum group size for NYE?",
    answer: 'No minimum. We do intimate dinners for 2 through to villa parties of 30+. The Couples NYE package is designed specifically for two people; the Group Feast Package scales for large villa groups.',
  },
  {
    question: 'Is there a NYE surcharge?',
    answer: 'Yes, a 25% festive surcharge applies on December 31. This reflects the premium on chef availability and the extended service hours (typically 4pm to 2am). The surcharge is quoted upfront — no surprises.',
  },
  {
    question: 'What if I want a specific dish or cuisine?',
    answer: 'NYE menus are fully bespoke. Share your preferences — favourite ingredients, cuisines, dietary requirements, dishes you love — and the chef designs the menu around them. There is no fixed template.',
  },
  {
    question: 'Can I book a NYE chef for a group of 30 or more?',
    answer: 'Yes — our Group Feast Package is designed for large villa groups. For 30+ guests, we deploy a multi-chef team and a dedicated service coordinator. We recommend booking at least 6–8 weeks in advance for groups of this size.',
  },
  {
    question: 'What happens if my villa does not have a full kitchen?',
    answer: 'We bring portable induction burners, prep tables, and all necessary equipment. Most Bali villas have adequate kitchen space, but if yours is limited, we simply supplement with our own production kit. No problem.',
  },
  {
    question: 'Can I request a specific chef I have used before?',
    answer: 'Yes, subject to availability. If you have a preferred chef from a previous booking, let us know when you enquire and we will check their NYE schedule. We cannot guarantee specific chefs for same-week bookings, but early requests are almost always accommodated.',
  },
]

const RELATED_PAGES = [
  { label: 'Proposal Dinner Bali', href: '/proposal-dinner', desc: 'Plan the perfect proposal dinner at your Bali villa with a private chef.' },
  { label: 'Anniversary Dinner Bali', href: '/events/anniversaries', desc: 'Private chef anniversary dinner experiences at Bali villas.' },
  { label: 'Fine Dining Bali', href: '/', desc: 'Full-service fine dining with a private chef at your Bali villa.' },
  { label: 'Festive Season Menu', href: '/blog/festive-season-menu-bali', desc: 'Festive menus for Christmas and New Year celebrations at Bali villas.' },
  { label: 'Pricing', href: '/pricing', desc: 'Full pricing for all private chef packages and group sizes.' },
  { label: 'Honeymoon Chef Bali', href: '/honeymoon-chef', desc: 'Private chef honeymoon experiences — romantic, bespoke, unforgettable.' },
]

export default function NewYearsEveBaliPage() {
  return (
    <PremiumPage
      slug="blog/new-years-eve-bali-private-chef"
      title="New Year's Eve Bali: Private Chef Villa Dinner"
      description="Book a private chef for New Year's Eve at your Bali villa. Tasting menus, midnight champagne, bespoke celebrations. Groups 2–30. Book early — sells out fast."
      seoTitle="New Year's Eve Bali | Private Chef Villa Dinner | myCHEF"
      seoDescription="Book a private chef for New Year's Eve at your Bali villa. Tasting menus, midnight champagne, bespoke celebrations. Groups 2–30. Book early — sells out fast."
      canonicalUrl="https://mychef.id/blog/new-years-eve-bali-private-chef"
      h1="New Year's Eve Bali: Private Chef Villa Dinner"
      subtitle="Ring in the New Year with a Private Chef at Your Bali Villa"
      heroImage="/generated/mychef-experience-bali-luna-gallery-1.webp"
      heroImageAlt="New Year's Eve celebration dinner at a Bali villa — private chef setup by myCHEF"
      ogImage="https://mychef.id/generated/mychef-experience-bali-luna-gallery-1.webp"
      keywords={['new years eve bali', 'nye bali private chef', 'new year dinner bali villa', 'new years eve dinner bali', 'bali new years eve celebration']}
      highlights={['Packages', 'Menus', 'Planning', 'FAQ']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema('New Year\'s Eve Bali Private Chef', 'https://mychef.id/blog/new-years-eve-bali-private-chef', 'Blog', 'https://mychef.id/blog'),
        faqPageSchema(FAQS.map(f => ({ question: f.question, answer: f.answer }))),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: "New Year\'s Eve Bali: Private Chef Villa Dinner",
          description: "Book a private chef for New Year\'s Eve at your Bali villa. Tasting menus, midnight champagne, bespoke celebrations. Groups 2–30.",
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF.id', logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' } },
          datePublished: '2026-06-29',
          dateModified: new Date().toISOString().split('T')[0],
          image: 'https://mychef.id/generated/mychef-experience-bali-luna-gallery-1.webp',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://mychef.id/blog/new-years-eve-bali-private-chef' },
          url: 'https://mychef.id/blog/new-years-eve-bali-private-chef',
          wordCount: 1700,
          keywords: 'new years eve bali, nye bali private chef, new year dinner bali villa, new years eve dinner bali',
        },
      ]}
      ctaText="Reserve Your NYE Chef"
      ctaSubtext="NYE dates fill by October. Message us now to secure your preferred chef and menu."
    />
  )
}
