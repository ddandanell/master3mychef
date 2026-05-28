import { Link } from 'react-router-dom'
import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema } from '@/components/SeoHead'

const WA = '6282237565997'

const SCENARIOS = [
  {
    title: 'I want a private dinner for 2–6 people',
    href: '/fine-dining',
    desc: 'Choose this if you want a romantic dinner, anniversary meal, or tasting-menu style evening at the villa.',
    eyebrow: 'Fine Dining',
  },
  {
    title: "I'm hosting a villa party or event",
    href: '/events',
    desc: 'Best for birthdays, weddings, retreats, corporate moments, and any celebration that needs polished coordination.',
    eyebrow: 'Events',
  },
  {
    title: 'I need catering for a group',
    href: '/catering',
    desc: 'Ideal for family trips, larger villa stays, buffet spreads, BBQs, breakfasts, and relaxed shared meals.',
    eyebrow: 'Catering',
  },
  {
    title: 'I want ongoing staff for my villa',
    href: '/staffing',
    desc: 'For long stays, private chef placement, villa staff, and recurring hospitality support tailored to your property.',
    eyebrow: 'Staffing',
  },
]

const FAQS = [
  {
    question: 'What if I am choosing between fine dining and catering?',
    answer: 'Tell us the guest count, style of meal, and how formal you want it to feel. We will quickly recommend the right fit and explain why.',
  },
  {
    question: 'Can one WhatsApp message cover everything?',
    answer: 'Yes. That is the point of this page. You do not need to know our internal categories before you contact us.',
  },
  {
    question: 'Who answers these enquiries?',
    answer: 'Marco and the myCHEF concierge team route you to the right service quickly, so you get advice rather than a generic sales reply.',
  },
]

const RELATED_PAGES = [
  { label: 'Fine Dining', href: '/fine-dining', desc: 'Private dining for intimate villa evenings.' },
  { label: 'Catering', href: '/catering', desc: 'Chef service for families, groups, and daily meals.' },
  { label: 'Events', href: '/events', desc: 'Full-service celebrations and villa parties.' },
  { label: 'Staffing', href: '/staffing', desc: 'Longer-term hospitality and chef support.' },
  { label: 'Contact', href: '/contact', desc: 'Speak to the full concierge team directly.' },
]

export default function RecommendedServicesPage() {
  const marcoLink = `https://wa.me/${WA}?text=${encodeURIComponent(
    "Hi Marco, I'm not sure which myCHEF service is right for my villa. Can you help?",
  )}`

  const sections: PageSection[] = [
    {
      id: 'scenarios',
      type: 'custom',
      subtitle: 'Start here',
      title: 'Build Your Perfect Villa Experience',
      body: 'Start with the moment you are planning, not with our internal menu names. We will point you in the right direction fast.',
      render: (
        <div className="grid gap-6 md:grid-cols-2">
          {SCENARIOS.map((scenario) => (
            <Link
              key={scenario.title}
              to={scenario.href}
              className="group rounded-[28px] border border-black/5 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-[#C5A028]/40 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
            >
              <p className="font-cormorant text-sm uppercase tracking-[0.35em] text-[#C5A028]">
                {scenario.eyebrow}
              </p>
              <h3 className="mt-4 font-playfair text-3xl leading-tight text-[#1A1916]">
                {scenario.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#4A4745]">{scenario.desc}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#1A1916] transition-colors group-hover:text-[#C5A028]">
                Explore this service
                <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      ),
    },
    {
      id: 'concierge-approach',
      type: 'content',
      subtitle: 'The myCHEF way',
      title: 'A concierge approach, not a confusing booking maze',
      body: `<p>Most guests do not arrive knowing whether they need fine dining, event catering, daily chef service, or villa staffing. They just know what they want the stay to feel like. That is where we start.</p>
      <p>myCHEF listens first, then recommends the right service based on guest count, occasion, villa setup, and the level of service you actually need. It is faster, simpler, and far more useful than guessing alone.</p>`,
      image: '/generated/mychef-misc-bali-contact-concierge.webp',
      imageAlt: 'myCHEF concierge helping a guest choose the right Bali villa service',
    },
    {
      id: 'ask-us',
      type: 'custom',
      subtitle: 'What to send',
      title: 'Three details that help us guide you quickly',
      body: 'If you message us with these three things, we can usually point you in the right direction in minutes.',
      render: (
        <div className="grid gap-4 md:grid-cols-3">
          {[
            'Your villa area and preferred date',
            'How many guests you are hosting',
            'The mood: intimate dinner, group catering, party, or long-stay staffing',
          ].map((item, index) => (
            <div key={item} className="rounded-3xl border border-[#C5A028]/15 bg-[#C5A028]/5 px-6 py-7">
              <div className="text-sm uppercase tracking-[0.35em] text-[#C5A028]">0{index + 1}</div>
              <p className="mt-4 text-base leading-7 text-[#1A1916]">{item}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 'cta',
      type: 'cta',
      subtitle: 'Or just ask us',
      title: 'Marco can point you to the right service in one chat',
      body: 'Tell Marco what you are planning at the villa and he will steer you toward the best myCHEF option without sending you in circles.',
      primaryAction: {
        label: 'Chat with Marco',
        href: marcoLink,
        external: true,
      },
      secondaryAction: {
        label: 'See Contact Team',
        href: '/contact',
      },
    },
  ]

  return (
    <PremiumPage
      slug="recommended-services"
      title="Build Your Perfect Villa Experience"
      description="Not sure what you need? Let the myCHEF concierge team guide you to the right Bali villa service — fine dining, events, catering, or staffing."
      h1="Not Sure What You Need? We'll Help."
      subtitle="myCHEF works like a concierge: tell us the occasion, the guest count, and the vibe you want, and we will guide you to the right service quickly."
      heroImage="/generated/mychef-experience-bali-aura-setup.webp"
      heroImageAlt="myCHEF concierge-style villa experience setup in Bali"
      ogImage="https://mychef.id/generated/mychef-experience-bali-aura-setup.webp"
      keywords={['mychef concierge bali', 'villa experience bali', 'private chef bali help']}
      highlights={['Private Dinners', 'Villa Events', 'Group Catering', 'Ongoing Staffing']}
      sections={sections}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema('Recommended Services', 'https://mychef.id/recommended-services'),
      ]}
      ctaText="Get Guided"
      ctaSubtext="Tell us the moment you are planning. We will handle the fit."
    />
  )
}
