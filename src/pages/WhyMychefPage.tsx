import { Link } from 'react-router-dom'
import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { ArticleContentSection } from '@/components/shared'

const WA = 6289674072020

const TRUST_PILLARS = [
  {
    emoji: '🎓',
    title: 'Milan-trained leadership',
    desc: 'Adriano trained under a Michelin-starred chef in Milan, and his standards set the floor for every dish. The team includes eight named chefs, each with a published speciality, from live-fire BBQ to wellness retreat menus.',
    link: { label: 'meet the chef team', href: '/chefs' },
  },
  {
    emoji: '👥',
    title: 'A real team, not a contact list',
    desc: '50+ local chefs, servers, bartenders and event staff — employed, vetted, background-checked and trained in-house. When you book myCHEF, you book a company that answers for the evening.',
  },
  {
    emoji: '⚡',
    title: 'Speed you can plan around',
    desc: 'WhatsApp enquiries answered within 2 hours; itemised proposals within 24 hours; same-day confirmation where possible. Bali trips move fast — so do we.',
  },
  {
    emoji: '🏡',
    title: 'Built for villas, not restaurants',
    desc: 'Villa kitchens vary wildly, timings slip, weather changes plans. Menus flex for dietary needs, kids and last-minute requests without drama — and the kitchen is left spotless, every time.',
  },
  {
    emoji: '🛡️',
    title: 'Guarantees in writing',
    desc: 'Chef replacement guarantee — if your chef can\'t make it, a verified replacement arrives within 2 hours or you receive a 100% refund. Transparent terms — a 50% deposit confirms your booking, prices always quoted ++ (11% government tax + 10% service charge), groceries at cost with receipts.',
    link: { label: 'transparent pricing', href: '/pricing' },
  },
]

const STATS = [
  { value: '560+', label: 'Villas' },
  { value: '12,000+', label: 'Guests' },
  { value: '4.9/5', label: 'Rating' },
  { value: '98%', label: 'Repeat/Referred' },
]

const FAQS = [
  {
    question: 'Is myCHEF a company or a marketplace?',
    answer: 'A company. Every chef and server is part of our in-house team — we do not broker strangers from a marketplace. Meet the team on <a href="/chefs">our chefs</a>.',
  },
  {
    question: 'What happens if something goes wrong on the day?',
    answer: 'We fix it on the spot. If a chef is unavailable, a replacement of equivalent calibre arrives within 2 hours — same menu brief, same standard — or you receive a 100% refund.',
  },
  {
    question: 'Why do guests book myCHEF again in Bali?',
    answer: 'About 98% of bookings are repeat or referred. The pattern in <a href="/reviews">reviews</a>: fast replies, calm service, food that exceeds the villa setting, kitchens left cleaner than found.',
  },
  {
    question: 'Do you only do fine dining?',
    answer: 'No — the same organisation runs poolside BBQs, family dinners, retreat meal plans, catering and weddings for up to ~200 guests. Browse <a href="/services">all services</a>, <a href="/private-chef-bali">private chef</a> and <a href="/catering">catering</a>.',
  },
  {
    question: 'How is myCHEF different from hiring a freelance private chef in Bali?',
    answer: 'You get a chef + systems: named specialists, backup cover, grocery receipts at cost on daily hire, supervised staff, fixed quotes and a replacement-or-refund promise — not one person juggling shopping, cooking, service and cleanup alone.',
  },
  {
    question: 'Are your prices published or do I have to enquire first?',
    answer: 'Day rates and many menu starts are published — private chef from IDR 1,000,000++/day and dining-style collections with open starting prices. Full tables on <a href="/pricing">pricing</a>.',
  },
  {
    question: 'What does "++" mean on myCHEF prices?',
    answer: '11% government tax + 10% service charge. Every written quote states the all-in total before you pay a deposit.',
  },
  {
    question: 'How fast do you reply on WhatsApp?',
    answer: 'Usually within 2 hours during operating hours. Menu proposals typically follow within 24 hours once we have date, guests and villa area.',
  },
  {
    question: 'What deposit and cancellation policy apply?',
    answer: '50% deposit locks the booking; balance due the day before. Full refund 14+ days out, 50% at 7–13 days, none under 7 days. <a href="/cancellation">Cancellation policy →</a>',
  },
  {
    question: 'Do you clean the villa kitchen after service?',
    answer: 'Yes on serviced chef, fine dining and catering formats — dishes, stations and counters restored before we leave.',
  },
  {
    question: 'Can you handle allergies and mixed dietary needs?',
    answer: 'Yes, at no extra charge when briefed in advance — vegan, gluten-free, nut-free, shellfish allergy, pregnancy-safe, halal-sensitive and kids plates. <a href="/blog/food-allergies-dietary-requirements-private-chef-bali">Allergy guide →</a>',
  },
  {
    question: 'Which areas of Bali do you cover?',
    answer: 'Island-wide villa coverage including Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran, Sanur and more. <a href="/locations">Locations →</a>',
  },
  {
    question: 'Can I request a specific chef?',
    answer: 'Yes for multi-day stays and many dinners. Otherwise we match by cuisine and occasion from our head-chef roster. <a href="/chefs">Meet the chefs →</a>',
  },
  {
    question: 'Do you work with villa managers and wedding planners?',
    answer: 'Daily. Share contacts early so access, power, parking and noise rules are locked before deposit.',
  },
  {
    question: 'Is myCHEF only for luxury villas?',
    answer: 'We specialise in villa hospitality, but formats range from daily family chef service to fine dining and large events — choose on budget and occasion, not just villa tier.',
  },
  {
    question: 'Can you staff waiters and bartenders without food?',
    answer: 'Yes via <a href="/in-villa-service">in-villa service</a>. Long-term placements sit under <a href="/staffing">staffing</a>.',
  },
  {
    question: 'How do I verify you are a real company in Bali?',
    answer: 'Public chef profiles, published pricing, cancellation policy, NAP on site, Google Business Profile and hundreds of dated guest reviews. Start at <a href="/about">about</a> and <a href="/reviews">reviews</a>.',
  },
  {
    question: 'What if my plans change mid-stay?',
    answer: 'Menu and meal-count changes are normal on multi-day chef hire. Event date changes follow the cancellation tiers; we always re-quote in writing before extra charges.',
  },
  {
    question: 'Do you offer monthly or live-in chef arrangements?',
    answer: 'Yes — weekly/monthly discounts on <a href="/private-chef-bali">private chef day rates</a>, plus <a href="/staffing/live-in-chef">live-in chef</a> placement for longer households.',
  },
  {
    question: 'How do I start with myCHEF?',
    answer: 'WhatsApp date, guest count, villa area and what you want (daily chef, dinner, BBQ, wedding). Or <a href="/book">book</a> / <a href="/quote">quote</a> / <a href="/faq">FAQ</a>.',
  },
]

const RELATED_PAGES = [
  { label: 'read dated guest reviews', href: '/reviews', desc: 'Read dated, located reviews from Bali villa guests.' },
  { label: 'meet the chef team', href: '/chefs', desc: 'Meet Adriano and the named chef team.' },
  { label: 'transparent pricing', href: '/pricing', desc: 'Full price tables published online.' },
  { label: 'all services', href: '/services', desc: 'Private chef, catering, events and staffing.' },
  { label: 'common questions', href: '/faq', desc: 'Answers to booking, menus and dietary requests.' },
  { label: 'Private Chef in Bali', href: '/', desc: 'Start with the myCHEF homepage.' },
]

export default function WhyMychefPage() {
  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(
    "Hi myCHEF, I'd like to book for my villa in Bali. Can you help me?",
  )}`

  const sections: PageSection[] = [
    {
      id: 'stats',
      type: 'custom',
      bg: 'dark',
      render: (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-white/5 px-6 py-7 text-center backdrop-blur-sm"
            >
              <div className="font-playfair text-4xl text-[#C5A028] md:text-5xl">{stat.value}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.35em] text-white/[65%]">{stat.label}</div>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 'pillars',
      type: 'custom',
      subtitle: 'Why myCHEF',
      title: 'Five Pillars — With Evidence',
      body: 'Premium villa service is not just about food. It is about speed, standards, calm communication, and a team that makes your stay easier from the first message to the last plate.',
      render: (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {TRUST_PILLARS.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-[28px] border border-black/5 bg-white p-7 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5"
            >
              <div className="text-3xl leading-none">{pillar.emoji}</div>
              <h3 className="mt-5 font-playfair text-2xl leading-tight text-[#1A1916]">{pillar.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#4A4745]">{pillar.desc}</p>
              {pillar.link && (
                <Link
                  to={pillar.link.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-[2px] text-[#8B6F1A] hover:text-[#C5A028] transition-colors"
                >
                  {pillar.link.label}
                  <span aria-hidden="true">→</span>
                </Link>
              )}
            </article>
          ))}
        </div>
      ),
    },
    {
      id: 'comparison',
      type: 'custom',
      subtitle: 'Compare',
      title: 'myCHEF vs the Alternatives',
      body: 'See how a dedicated Bali villa chef company compares to a freelance chef or a marketplace listing.',
      render: (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left border-collapse">
            <thead>
              <tr className="border-b border-black/10">
                <th className="py-4 pr-4 font-playfair text-lg text-[#1A1916]">What matters</th>
                <th className="py-4 px-4 font-semibold text-[#4A4745]">Freelance chef</th>
                <th className="py-4 px-4 font-semibold text-[#4A4745]">Marketplace</th>
                <th className="py-4 pl-4 font-semibold text-[#1A1916]">myCHEF</th>
              </tr>
            </thead>
            <tbody className="text-sm text-[#4A4745]">
              <tr className="border-b border-black/5">
                <td className="py-4 pr-4 font-medium text-[#1A1916]">Named, vetted chef team</td>
                <td className="py-4 px-4">One person</td>
                <td className="py-4 px-4">Rotating listings</td>
                <td className="py-4 pl-4 font-medium text-[#1A1916]">8 named chefs, 50+ staff</td>
              </tr>
              <tr className="border-b border-black/5">
                <td className="py-4 pr-4 font-medium text-[#1A1916]">Illness/no-show backup</td>
                <td className="py-4 px-4">None</td>
                <td className="py-4 px-4">Rebook & hope</td>
                <td className="py-4 pl-4 font-medium text-[#1A1916]">Replacement in 2h or full refund</td>
              </tr>
              <tr className="border-b border-black/5">
                <td className="py-4 pr-4 font-medium text-[#1A1916]">Published prices</td>
                <td className="py-4 px-4">Rarely</td>
                <td className="py-4 px-4">Estimates</td>
                <td className="py-4 pl-4 font-medium text-[#1A1916]">Full tables online</td>
              </tr>
              <tr className="border-b border-black/5">
                <td className="py-4 pr-4 font-medium text-[#1A1916]">Staffing (waiters, bar, sommelier)</td>
                <td className="py-4 px-4">No</td>
                <td className="py-4 px-4">No</td>
                <td className="py-4 pl-4 font-medium text-[#1A1916]">Waiters from IDR 250K/hr · cocktail packages from IDR 500K++/guest</td>
              </tr>
              <tr className="border-b border-black/5">
                <td className="py-4 pr-4 font-medium text-[#1A1916]">Track record</td>
                <td className="py-4 px-4">Word of mouth</td>
                <td className="py-4 px-4">Platform reviews</td>
                <td className="py-4 pl-4 font-medium text-[#1A1916]">560+ events, 12,000+ guests</td>
              </tr>
              <tr>
                <td className="py-4 pr-4 font-medium text-[#1A1916]">Dietary & kids' menus</td>
                <td className="py-4 px-4">Varies</td>
                <td className="py-4 px-4">Varies</td>
                <td className="py-4 pl-4 font-medium text-[#1A1916]">Included, no extra charge</td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    {
      id: 'testimonials',
      type: 'testimonials',
      subtitle: 'What guests say',
      title: 'Why guests book once, then book again',
      testimonials: [
        {
          name: 'Harper',
          location: 'Uluwatu, January 2026',
          text: 'Our wedding dinner for 42. Dinner landed exactly on schedule, the waiters were warm and calm, and our parents are still talking about the lamb and truffle jus.',
          rating: 5,
        },
        {
          name: 'Amelia',
          location: 'Canggu, April 2025',
          text: 'The chef worked around two coeliacs and a nut allergy without reducing the ambition of the menu at all. We booked again before we left.',
          rating: 5,
        },
      ],
    },
    {
      id: 'cta',
      type: 'cta',
      subtitle: 'Final step',
      title: 'The Easiest Booking of Your Bali Stay',
      body: 'One WhatsApp message with your date, villa and guest count. A clear quote within 24 hours. Nothing else to manage.',
      primaryAction: {
        label: 'Chat on WhatsApp',
        href: waLink,
        external: true,
      },
      secondaryAction: {
        label: 'Email bali@mychef.id',
        href: 'mailto:bali@mychef.id',
      },
    },
  ]

  return (
    <>
      <PremiumPage
        slug="why-mychef"
      title="Why Bali Villas Choose myCHEF"
      description="Why 560+ Bali villas choose myCHEF: Milan-trained leadership, a 50+ local team, chef-replacement guarantee and transparent pricing. See the evidence."
      seoTitle="Why myCHEF | The Private Chef Company 560+ Bali Villas Trust"
      seoDescription="Why 560+ Bali villas choose myCHEF: Milan-trained leadership, a 50+ local team, chef-replacement guarantee and transparent pricing. See the evidence."
      h1="Why Bali Villas Choose myCHEF"
      subtitle="Anyone can say they're the best private chef service in Bali. We'd rather show you the evidence: named chefs, published prices, guarantees in writing, and a repeat-booking rate that does the talking."
      heroImage="/generated/mychef-location-bali-hub-bali.webp"
      heroImageAlt="Luxury myCHEF dinner setup inside a Bali villa"
      ogImage="https://mychef.id/generated/mychef-location-bali-hub-bali.webp"
      keywords={['best private chef service bali', 'why mychef', 'trusted private chef bali', 'top rated private chef bali', 'mychef vs other chefs']}
      highlights={['560+ Events Served', '12,000+ Guests Hosted', '500+ Villa Bookings', '98% Repeat or Referred']}
      sections={sections}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Why Bali Villas Choose myCHEF',
          url: 'https://mychef.id/why-mychef',
          about: { '@id': 'https://mychef.id/#business' },
          description: 'The evidence behind myCHEF: Milan-trained leadership, a 50+ Indonesian hospitality team, guarantees in writing and 12,000+ guests served.',
        },
      ]}
        ctaText="Chat on WhatsApp"
        ctaSubtext="We reply quickly and confirm fast."
        canonicalUrl="https://mychef.id/why-mychef"
      />
      <ArticleContentSection />
    </>
  )
}
