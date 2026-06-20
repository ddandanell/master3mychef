import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema } from '@/components/SeoHead'

const WA = 491635080236

const TRUST_PILLARS = [
  {
    emoji: '🎓',
    title: 'Michelin-Trained Leadership',
    desc: 'Adriano trained in Milan. Every menu reflects fine-dining discipline from prep to plating.',
  },
  {
    emoji: '🇮🇩',
    title: '50+ Local Professionals',
    desc: 'Indonesian chefs, bartenders, and hosts who know Bali intimately and serve with genuine warmth.',
  },
  {
    emoji: '⚡',
    title: 'Same-Day Confirmation',
    desc: 'WhatsApp inquiry to confirmed booking within 1 hour, with clear next steps and zero chasing.',
  },
  {
    emoji: '🏡',
    title: 'We Come to You',
    desc: 'Your villa, your pool, your terrace. We bring the experience, set up beautifully, and clean up after.',
  },
  {
    emoji: '💯',
    title: 'No-Stress Guarantee',
    desc: 'If anything is not right, we fix it. No questions, no excuses, just calm and professional recovery.',
  },
]

const STATS = [
  { value: '560+', label: 'Villas' },
  { value: '12,000+', label: 'Guests' },
  { value: '500+', label: 'Events' },
  { value: '5-Star', label: 'Average' },
]

const FAQS = [
  {
    question: 'How quickly can myCHEF confirm a booking?',
    answer: 'Most villa enquiries sent by WhatsApp are answered within minutes and confirmed within the hour once we have your date, villa area, and guest count.',
  },
  {
    question: 'What does myCHEF handle on the day?',
    answer: 'We handle menu planning, prep, shopping, cooking, service, setup, and cleanup. You get the experience without the kitchen stress.',
  },
  {
    question: 'Who leads the culinary standard at myCHEF?',
    answer: 'myCHEF was founded by Adriano, Michelin-trained in Milan. His standards shape the menus, service rhythm, and execution across the team.',
  },
  {
    question: 'Why do villas keep booking myCHEF?',
    answer: 'Because we combine refined food with villa practicality: fast response, local staff, smooth communication, and a team that respects the home it works in.',
  },
]

const RELATED_PAGES = [
  { label: 'About myCHEF', href: '/about', desc: 'Meet Adriano and the story behind the brand.' },
  { label: 'Fine Dining', href: '/fine-dining', desc: 'Private tasting menus for special evenings.' },
  { label: 'Catering', href: '/catering', desc: 'Relaxed chef service for groups and families.' },
  { label: 'Events', href: '/events', desc: 'Villa parties, weddings, and celebrations.' },
  { label: 'Staffing', href: '/staffing', desc: 'Ongoing chefs and hospitality staff for villas.' },
  { label: 'Contact', href: '/contact', desc: 'Speak with the myCHEF concierge team.' },
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
      title: 'Five trust pillars behind every booking',
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
            </article>
          ))}
        </div>
      ),
    },
    {
      id: 'villa-system',
      type: 'content',
      subtitle: 'Villa-first service',
      title: 'Restaurant discipline, adapted to real Bali villas',
      body: `<p>Restaurants control the room. Villas do not. Kitchens vary wildly, timings shift, weather changes, and every guest group arrives with different expectations. myCHEF is built for that reality.</p>
      <ul>
        <li><strong>Menus that flex:</strong> romantic dinners, family-style sharing, children, dietary needs, and last-minute requests handled without drama.</li>
        <li><strong>Hosts who stay relaxed:</strong> we arrive prepared, communicate clearly, and leave the kitchen spotless.</li>
        <li><strong>Service that feels premium:</strong> elegant plating when you want it, warm approachable hospitality when you need it, and the right tempo for your villa.</li>
      </ul>`,
      image: '/generated/luna-experience-collage.webp',
      imageAlt: 'myCHEF team preparing an in-villa dining experience in Bali',
    },
    {
      id: 'testimonials',
      type: 'testimonials',
      subtitle: 'Guest confidence',
      title: 'Why guests book once, then book again',
      testimonials: [
        {
          name: 'Emma & Louis',
          location: 'Melbourne',
          text: 'The biggest surprise was how easy it all felt. One WhatsApp message, a beautiful menu, a polished team, and our villa looked untouched when they left.',
          rating: 5,
        },
        {
          name: 'Darren P.',
          location: 'Hong Kong',
          text: 'You can feel the fine-dining discipline, but it never becomes stiff. It felt luxurious, personal, and incredibly well run.',
          rating: 5,
        },
        {
          name: 'Villa Manager, Uluwatu',
          location: 'Bali',
          text: 'myCHEF is the easiest team to recommend to our guests. Fast confirmation, no surprises, and consistently polished execution.',
          rating: 5,
        },
      ],
    },
    {
      id: 'cta',
      type: 'cta',
      subtitle: 'Final step',
      title: 'Want the easiest booking of your Bali stay?',
      body: 'Message us on WhatsApp with your date, villa, and guest count. We will guide the menu, confirm fast, and take care of everything on-site.',
      primaryAction: {
        label: 'Chat on WhatsApp',
        href: waLink,
        external: true,
      },
      secondaryAction: {
        label: 'Explore Fine Dining',
        href: '/fine-dining',
      },
    },
  ]

  return (
    <PremiumPage
      slug="why-mychef"
      title="Why 560+ Villas Choose myCHEF"
      description="Why 560+ Bali villas choose myCHEF: Michelin-trained leadership, 50+ local professionals, same-day confirmation and a no-stress guarantee."
      seoTitle="Best Private Chef Service Bali | Why myCHEF? — 560+ Villas"
      seoDescription="Why 560+ Bali villas trust myCHEF: Michelin-trained leadership, 50+ local staff, same-day confirmation & no-stress guarantee. See the full difference."
      h1="Why 560+ Villas Choose myCHEF"
      subtitle="Michelin-trained leadership, 50+ local professionals, and calm villa-ready execution for dinners, events, and multi-day stays across Bali."
      heroImage="/generated/mychef-location-bali-hub-bali.webp"
      heroImageAlt="Luxury myCHEF dinner setup inside a Bali villa"
      ogImage="https://mychef.id/generated/mychef-location-bali-hub-bali.webp"
      keywords={['why mychef', 'trusted private chef bali', 'villa chef bali']}
      highlights={['Michelin-Trained in Milan', '50+ Local Professionals', 'Same-Day Confirmation', 'No-Stress Guarantee']}
      sections={sections}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema('Why myCHEF', 'https://mychef.id/why-mychef'),
      ]}
      ctaText="Chat on WhatsApp"
      ctaSubtext="We reply quickly and confirm fast."
    />
  )
}
