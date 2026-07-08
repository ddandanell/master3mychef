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
  {
    question: 'What kind of people thrive at myCHEF?',
    answer: 'People who care about standards, timing, personal presentation, and genuine hospitality. Skill matters, but attitude matters just as much.',
  },
  {
    question: 'Do I need to live in one specific part of Bali?',
    answer: 'No. We serve villas and events across Bali, and we schedule teams based on role, location, and availability.',
  },
  {
    question: 'Can I apply even if there is no public job post?',
    answer: 'Yes. This page is designed for that. We are always open to meeting talented hospitality professionals who fit the brand.',
  },
  {
    question: 'How do I apply?',
    answer: 'Send us a WhatsApp message with your role, experience, CV, and a short introduction. We review applications personally.',
  },
]

const RELATED_PAGES = [
  { label: 'About myCHEF', href: '/about', desc: 'Learn about the brand and Adriano’s standards.' },
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
      seoDescription="Chef jobs in Bali with myCHEF. Roles for chefs, bartenders, waiters & coordinators. Join a fast-moving team trusted by 560+ villas. Apply via WhatsApp."
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
