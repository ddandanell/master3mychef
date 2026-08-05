import { CalendarRange, ChefHat, MessageCircle, Martini, Presentation, TrendingUp, Users, Wallet } from 'lucide-react'
import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema } from '@/components/SeoHead'
import { Button } from '@/components/ui/button'

const JOB_POSTING_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: 'Private Chef & Hospitality Staff — Bali',
  description: 'myCHEF.id is hiring private chefs, bartenders, waiters and event coordinators for villa hospitality in Bali.',
  hiringOrganization: {
    '@type': 'Organization',
    name: 'myCHEF.id',
    url: 'https://mychef.id',
  },
  jobLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bali',
      addressCountry: 'ID',
    },
  },
  employmentType: 'CONTRACTOR',
}

const WA = 6289674072020

const ROLES = [
  {
    icon: ChefHat,
    title: 'Private Chef',
    desc: 'Cook refined breakfasts, lunches, family dinners, and premium villa menus while bringing calm confidence to the guest experience.',
    requirements: ['Professional kitchen experience', 'Strong hygiene and prep discipline', 'Warm guest communication'],
  },
  {
    icon: Martini,
    title: 'Bartender & Mixologist',
    desc: 'Create polished cocktail service for villa parties, sunset dinners, and event bars with speed, style, and consistency.',
    requirements: ['Classic cocktail knowledge', 'Clean bar setup and breakdown', 'Comfort working private events'],
  },
  {
    icon: Presentation,
    title: 'Event Coordinator',
    desc: 'Own timelines, staffing flow, vendor communication, and on-site execution so every event feels smooth and premium.',
    requirements: ['Excellent organisation', 'Client-facing confidence', 'Hospitality or events background'],
  },
  {
    icon: Users,
    title: 'Villa Host & Waiter',
    desc: 'Deliver graceful service, table setup, guest care, and villa-ready hospitality that feels polished without feeling stiff.',
    requirements: ['Professional appearance', 'Service mindset and teamwork', 'Attention to detail under pressure'],
  },
]

const WHY_WORK_WITH_US = [
  {
    icon: Wallet,
    title: 'Competitive Pay',
    desc: 'Strong rates, on-time payment, and opportunities to grow as responsibility and performance increase.',
  },
  {
    icon: CalendarRange,
    title: 'Flexible Scheduling',
    desc: 'Event-based, recurring, and long-term opportunities that can fit different lifestyles and career stages.',
  },
  {
    icon: TrendingUp,
    title: 'Professional Growth',
    desc: 'Work with a respected hospitality brand where training, standards, and real progression are built into the culture.',
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
  { question: 'Can this combine with other services?', answer: 'Yes — chef, catering, staff and transport can stack in one plan.' },
  { question: 'Do you clean up?', answer: 'Yes on serviced formats.' },
  { question: 'Kids welcome?', answer: 'Yes with adapted menus when needed. <a href="/kids-menus">Kids menus</a>.' },
  { question: 'Who is myCHEF?', answer: 'Bali villa hospitality company — chefs, catering, events and staffing. <a href="/about">About</a> · <a href="/why-mychef">Why myCHEF</a>.' },
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
  { label: 'About myCHEF', href: '/fine-dining/our-chefs', desc: 'Learn about the brand and Adriano’s standards.' },
  { label: 'Our Chefs', href: '/chefs', desc: 'See the caliber of team we are building.' },
  { label: 'Staffing', href: '/staffing', desc: 'The hospitality services we deliver to villas.' },
  { label: 'Contact', href: '/contact', desc: 'Speak directly with the team.' },
]

export default function JoinTeamPage() {
  const generalApplyLink = `https://wa.me/${WA}?text=${encodeURIComponent(
    "Hi, I'd like to apply to join the myCHEF team.",
  )}`

  const sections: PageSection[] = [
    {
      id: 'roles',
      type: 'custom',
      subtitle: 'Open roles',
      title: 'Where your hospitality talent could fit',
      body: 'We are always looking for talented, passionate hospitality professionals who want to work at villa and event level, not just behind the scenes.',
      render: (
        <div className="grid gap-6 md:grid-cols-2">
          {ROLES.map((role) => {
            const Icon = role.icon
            const roleLink = `https://wa.me/${WA}?text=${encodeURIComponent(
              `Hi, I'd like to apply for the ${role.title} role at myCHEF.`,
            )}`

            return (
              <article
                key={role.title}
                className="rounded-[28px] border border-black/5 bg-white p-7 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-[#C5A028]/10 p-4 text-[#C5A028]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-playfair text-3xl text-[#1A1916]">{role.title}</h3>
                </div>
                <p className="mt-5 text-sm leading-7 text-[#4A4745]">{role.desc}</p>
                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C5A028]">Requirements</p>
                  <ul className="mt-4 space-y-3 text-sm text-[#4A4745]">
                    {role.requirements.map((requirement) => (
                      <li key={requirement} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#C5A028]" />
                        <span>{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-7">
                  <Button asChild variant="whatsapp" className="w-full rounded-full uppercase tracking-[0.2em]">
                    <a href={roleLink} target="_blank" rel="noopener noreferrer" data-source="join-team-cta">
                      <MessageCircle className="h-4 w-4" />
                      Apply on WhatsApp
                    </a>
                  </Button>
                </div>
              </article>
            )
          })}
        </div>
      ),
    },
    {
      id: 'culture',
      type: 'content',
      subtitle: 'Why myCHEF',
      title: 'Work with a team that takes hospitality seriously',
      body: `<p>myCHEF is trusted by private villas, event hosts, and long-stay guests because the standards are real. We care about timing, polish, cleanliness, warmth, and how the guest feels in the room.</p>
      <p>If you want to work with a team that values professionalism and gives you room to grow, you will feel at home here.</p>`,
      image: '/generated/mychef-staffing-bali-staffing-kitchen.webp',
      imageAlt: 'myCHEF team training inside a Bali villa kitchen',
    },
    {
      id: 'why-work',
      type: 'features',
      subtitle: 'Why work with us',
      title: 'A stronger place to build your hospitality career',
      features: WHY_WORK_WITH_US,
      bg: 'accent',
    },
    {
      id: 'cta',
      type: 'cta',
      subtitle: 'Application',
      title: "Ready to join Bali's #1 private chef team?",
      body: 'Send us your CV, experience, and the role that fits you best. We are always excited to meet serious hospitality talent.',
      primaryAction: {
        label: 'Apply on WhatsApp',
        href: generalApplyLink,
        external: true,
      },
      secondaryAction: {
        label: 'See Staffing Team',
        href: '/staffing',
      },
    },
  ]

  return (
    <PremiumPage
      slug="join-our-team"
      title="Join Bali's #1 Private Chef Team"
      description="Join myCHEF — Bali's top private chef service. Roles for chefs, bartenders, villa service staff & coordinators. Apply via WhatsApp today."
      seoTitle="Chef Jobs Bali | Join the myCHEF Team — Apply via WhatsApp"
      seoDescription="Chef jobs in Bali with myCHEF. Roles for chefs, bartenders, waiters & coordinators. Join a fast-moving team trusted across 560+ events. Apply via WhatsApp."
      h1="Join Bali's #1 Private Chef Team"
      subtitle="We're always looking for talented, passionate hospitality professionals."
      heroImage="/generated/mychef-staffing-bali-staffing-hero.webp"
      heroImageAlt="myCHEF hospitality team ready for villa service in Bali"
      ogImage="https://mychef.id/generated/mychef-staffing-bali-staffing-hero.webp"
      keywords={['chef jobs bali', 'hospitality jobs bali', 'mychef careers']}
      highlights={['Competitive Pay', 'Flexible Scheduling', 'Professional Growth', 'Premium Villa Work']}
      sections={sections}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema('Join Our Team', 'https://mychef.id/join-our-team'),
        JOB_POSTING_SCHEMA,
      ]}
      ctaText="Apply on WhatsApp"
      ctaSubtext="Tell us your role, experience, and availability."
      canonicalUrl="https://mychef.id/join-our-team"
    />
  )
}
