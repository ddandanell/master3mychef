import { Link } from 'react-router-dom'
import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema } from '@/components/SeoHead'
import { ArticleContentSection } from '@/components/shared'

const WA = 6289674072020

const SCENARIOS = [
  {
    title: 'Private dinners',
    href: '/fine-dining',
    desc: 'Romantic dinners, anniversaries and tasting-menu evenings at your villa. Plated, paced and styled like a restaurant — just yours.',
    eyebrow: 'Fine Dining',
  },
  {
    title: 'Villa events',
    href: '/events',
    desc: 'Birthdays, weddings, retreats and corporate moments that need polished coordination, staffing and production — not just food.',
    eyebrow: 'Events',
  },
  {
    title: 'Group catering',
    href: '/catering',
    desc: 'Family trips, larger villa stays, buffets, BBQs, breakfasts and relaxed shared meals, priced per person.',
    eyebrow: 'Catering',
  },
  {
    title: 'Ongoing staffing',
    href: '/staffing',
    desc: 'Long stays, private chef placement, villa staff and recurring hospitality support tailored to your property.',
    eyebrow: 'Staffing',
  },
]

const FAQS = [
  {
    question: 'What if I am choosing between fine dining and catering in Bali?',
    answer: 'Tell us guest count, formality and pacing. Headcount usually decides: intimate plated → <a href="/fine-dining">fine dining</a>; larger groups → <a href="/catering">catering</a> or <a href="/events">events</a>.',
  },
  {
    question: 'Can one WhatsApp message cover everything?',
    answer: 'Yes — that is the point of this page. Describe the moment; we translate it into service, menu and staffing.',
  },
  {
    question: 'Who answers these enquiries?',
    answer: 'The myCHEF concierge team. You get a specific recommendation from a person, not a generic bot reply.',
  },
  {
    question: 'What does the guidance cost?',
    answer: 'Nothing. Recommendations are free and come with a fixed quote if you book — no obligation.',
  },
  {
    question: 'When should I choose a daily private chef instead of one dinner?',
    answer: 'Multi-day villa stays, families and anyone tired of restaurant logistics. Day rates live on <a href="/private-chef-bali">private chef Bali</a>.',
  },
  {
    question: 'What is best for a romantic night for two?',
    answer: '<a href="/fine-dining/romantic-dinner">Romantic dinner</a> or a tasting path on <a href="/fine-dining">fine dining</a>. Proposals: <a href="/experiences/romantic-proposal-dinner">proposal package</a>.',
  },
  {
    question: 'What is best for kids and multi-gen families?',
    answer: 'Daily chef + <a href="/kids-menus">kids menus</a>, or three-course adults with early kids service. See <a href="/dining-styles">dining styles</a>.',
  },
  {
    question: 'What is best for a pool party?',
    answer: '<a href="/bbq-grill">BBQ grill</a>, <a href="/catering/bbq-catering">BBQ catering</a> or a cocktail party experience. Staff via <a href="/in-villa-service">in-villa service</a>.',
  },
  {
    question: 'What is best for a wedding in Bali?',
    answer: 'Full <a href="/events/weddings">wedding catering</a> with staffing — not a single daily chef. Packages: <a href="/bali-wedding-catering-packages">wedding packages</a>.',
  },
  {
    question: 'Do you recommend services for corporate retreats?',
    answer: 'Yes — multi-day meals and gala nights. <a href="/events/corporate-events">Corporate events</a> · <a href="/catering/retreat-catering">Retreat catering</a>.',
  },
  {
    question: 'How fast will I get a recommendation?',
    answer: 'Usually within 2 hours on WhatsApp once you share date, guests, area and vibe.',
  },
  {
    question: 'Will you push the most expensive option?',
    answer: 'No. We match format to headcount and occasion. Published starts on <a href="/pricing">pricing</a> keep the conversation honest.',
  },
  {
    question: 'Can you combine chef, bartender and transport?',
    answer: 'Yes — one quote can stack <a href="/private-chef-bali">chef</a>, <a href="/in-villa-service/bartenders">bartender</a> and <a href="/vip-transport-bali">VIP transport</a>.',
  },
  {
    question: 'What if I only know the occasion, not the menu?',
    answer: 'That is enough. We shortlist 1–2 formats and sample menus; you approve before any deposit.',
  },
  {
    question: 'Are recommendations available for all Bali areas?',
    answer: 'Yes island-wide. <a href="/locations">Locations →</a>',
  },
  {
    question: 'Where do I compare menu formats myself?',
    answer: '<a href="/dining-styles">Dining styles</a> and <a href="/services">services</a> if you want to browse first.',
  },
  {
    question: 'What deposit applies if I book after a recommendation?',
    answer: 'Typically 50% to confirm; balance the day before. <a href="/cancellation">Cancellation policy →</a>',
  },
  {
    question: 'Can villa managers use this page for guests?',
    answer: 'Yes — send guest date/headcount and we return options managers can forward. Partner paths also on <a href="/partner">partner</a>.',
  },
  {
    question: 'Is there a complete done-for-you villa package?',
    answer: 'Yes — <a href="/complete-villa-experience">complete villa experience</a> for transfers, chef, staff and events under one team.',
  },
  {
    question: 'How do I start?',
    answer: 'WhatsApp occasion + date + guests + villa area, or open <a href="/book">book</a> / <a href="/quote">quote</a> / <a href="/faq">FAQ</a>.',
  },
]

const RELATED_PAGES = [
  { label: 'Fine Dining', href: '/fine-dining', desc: 'Private dining for intimate villa evenings.' },
  { label: 'Catering', href: '/catering', desc: 'Chef service for families, groups, and daily meals.' },
  { label: 'Events', href: '/events', desc: 'Full-service celebrations and villa parties.' },
  { label: 'Staffing', href: '/staffing', desc: 'Longer-term hospitality and chef support.' },
  { label: 'Dining Styles', href: '/dining-styles', desc: 'Browse menus by format and occasion.' },
  { label: 'All Services', href: '/services', desc: 'Compare every myCHEF villa service.' },
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
      title: 'Start With the Moment',
      body: 'You should not need to learn our service categories before you can ask a question. Start with what you are planning — we will handle the fit. Prefer to browse first? <a href="/services">Compare all services</a> or <a href="/dining-styles">browse menus by style</a>.',
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
      title: 'An Honest Concierge, Not a Sales Funnel',
      body: `<p>Most guests do not arrive knowing whether they need fine dining, event catering, a daily chef or villa staffing. They know what they want the stay to <em>feel</em> like. That is where we start.</p>
      <p>Our concierge team listens first, then recommends based on your guest count, occasion, villa setup and the level of service you actually need — which sometimes means telling you a smaller (or different) service than the one you asked about. A three-course menu instead of a six-course tasting. A buffet instead of plated service for 30. The right fit, explained why.</p>`,
      image: '/generated/mychef-misc-bali-contact-concierge.webp',
      imageAlt: 'myCHEF concierge helping a guest choose the right Bali villa service',
    },
    {
      id: 'ask-us',
      type: 'custom',
      subtitle: 'What to send',
      title: 'Three Details That Get You an Answer in Minutes',
      body: 'Message us these three things and we can usually point you in the right direction in one reply. That is it — one WhatsApp message covers everything; you do not need to know our internal categories before you write.',
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
      id: 'not-right-fit',
      type: 'content',
      subtitle: 'Honest advice',
      title: "When We're Not the Right Fit",
      body: `<p>Honest recommendations include the ones that do not send you to us. A few examples of what we will tell you straight:</p>
      <ul>
        <li><strong>You want the cheapest possible feed for a very large casual crowd</strong> — we are a chef-led, per-person service from IDR 700K/person; a local warung-style caterer may suit a tight budget better. </li>
        <li><strong>You need services outside food and hospitality</strong> — photography, florists, DJs, event furniture. We can suggest trusted local vendors we have worked alongside. </li>
        <li><strong>Your dates are already fully booked with us</strong> — we will say so immediately rather than take a deposit we cannot honour.</li>
      </ul>
      <p>If another provider genuinely fits better, we would rather earn your trust for the next trip than a bad booking for this one.</p>`,
    },
    {
      id: 'cta',
      type: 'cta',
      subtitle: 'Tell us the moment',
      title: "Tell Us the Moment You're Planning",
      body: 'We will handle the fit — and we will be honest if the fit is not us. Prices on this site are estimates and exclude 11% government tax and 10% service charge, which are added to your final quote.',
      primaryAction: {
        label: 'Get Guided',
        href: marcoLink,
        external: true,
      },
      secondaryAction: {
        label: 'Speak to the concierge team',
        href: '/contact',
      },
    },
  ]

  return (
    <>
      <PremiumPage
        slug="recommended-services"
      title="Build Your Perfect Villa Experience"
      seoTitle="Build Your Perfect Villa Experience | myCHEF Bali"
      description="Tell myCHEF what you are hosting and get matched to the right service — guest count, mood and budget."
      h1="Not Sure What You Need? We’ll Help."
      subtitle="myCHEF works like a concierge: tell us the occasion, the guest count and the mood you want, and we will guide you to the right service quickly — with honest advice, not a sales script. 12,000+ guests served by a background-checked team, with same-day responses on WhatsApp."
      heroImage="/generated/mychef-experience-bali-aura-setup.webp"
      heroImageAlt="myCHEF concierge-style villa experience setup in Bali"
      ogImage="https://mychef.id/generated/mychef-experience-bali-aura-setup.webp"
      keywords={['build your villa experience bali', 'villa experience concierge bali', 'mychef concierge', 'service finder bali villa']}
      highlights={['Private Dinners', 'Villa Events', 'Group Catering', 'Ongoing Staffing']}
      sections={sections}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema('Recommended Services', 'https://mychef.id/recommended-services'),
        {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Build Your Perfect Villa Experience — myCHEF Concierge',
          description: "Tell myCHEF what you're hosting — occasion, guest count, mood — and get an honest recommendation for the right villa dining, event, catering or staffing service.",
          url: 'https://mychef.id/recommended-services',
          isPartOf: { '@type': 'WebSite', name: 'myCHEF', url: 'https://mychef.id' },
        },
      ]}
        ctaText="Get Guided"
        ctaSubtext="Tell us the moment you are planning. We will handle the fit."
        canonicalUrl="https://mychef.id/recommended-services"
      />
      <ArticleContentSection />
    </>
  )
}
