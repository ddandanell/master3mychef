import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Check, Phone, Calendar, Users, ShieldCheck, Award, ChefHat } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from '@/hooks/use-reduced-motion'
import SeoHead from '@/components/SeoHead'
import { getPageMeta } from '@/data/page-meta'
import SectionHeader from '@/components/catering/SectionHeader'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import FAQAccordion from '@/components/catering/FAQAccordion'
import { ArticleContentSection, Breadcrumb } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'
import PressStrip from '@/components/shared/PressStrip'

import OptimizedImage from '@/components/OptimizedImage'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
gsap.registerPlugin(ScrollTrigger)

const WA_LINK = buildWhatsAppUrl({ serviceName: 'villa staff in Bali', intent: 'availability and tailored quote' })

const briefJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://mychef.id/staffing/villa-staff#service',
      name: 'Hire Villa Staff Bali',
      serviceType: 'Long-term villa staff placement',
      provider: {
        '@type': 'Organization',
        name: 'myCHEF',
        url: 'https://mychef.id',
        telephone: '+62 896-7407-2020',
      },
      areaServed: 'Bali',
      description:
        'Long-term placement of villa managers, housekeepers, gardeners, pool staff and security for Bali villas and estates. Individual hires or full villa teams, with contracts, payroll guidance and a 30-day replacement guarantee.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long does villa staff recruitment take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Typically one to two weeks from brief to placement. Interviews are scheduled within three to five days of shortlist approval.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if the staff member is not the right fit?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We offer a 30-day replacement guarantee. If the match is not right, we restart the search at no additional cost.',
          },
        },
        {
          '@type': 'Question',
          name: 'What roles can you fill for my villa?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Villa managers, housekeepers, hosts, gardeners, pool attendants, security guards, maintenance staff and drivers — as individual hires or a full villa team.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you handle contracts and payroll for villa staff?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We handle the employment-contract paperwork and advise on payroll, BPJS and THR obligations; complex multi-property arrangements are referred to trusted payroll partners.',
          },
        },
        {
          '@type': 'Question',
          name: 'Live-in or live-out staff?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Both. Live-in arrangements are common for housekeepers and villa managers and are defined in the employment contract; live-out staff are placed from the local area around your property.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is your placement fee?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'One month of the staff member\'s salary, covering sourcing, interviews, background verification, contract preparation and six months of ongoing support.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.id/' },
        { '@type': 'ListItem', position: 2, name: 'Staffing', item: 'https://mychef.id/staffing' },
        { '@type': 'ListItem', position: 3, name: 'Villa Staff', item: 'https://mychef.id/staffing/villa-staff' },
      ],
    },
  ],
}

const PRICING_TIERS = [
  {
    title: 'Villa Manager',
    price: 'Tailored quote',
    unit: 'Based on villa size & experience',
    features: ['Full villa oversight', 'Staff scheduling', 'Guest relations', 'Vendor management', 'Maintenance coordination', 'Monthly reporting'],
    bestFor: 'Medium to large villas, rental properties, guest-focused estates',
  },
  {
    title: 'Housekeeper',
    price: 'Tailored quote',
    unit: 'Based on schedule & duties',
    features: ['Daily cleaning', 'Laundry & ironing', 'Room preparation', 'Inventory management', 'Supply ordering', 'Deep cleaning schedule'],
    bestFor: 'Villas, apartments, private residences',
    highlight: true,
  },
  {
    title: 'Full Villa Team',
    price: 'Tailored quote',
    unit: 'Based on team composition',
    features: ['Manager + housekeepers', 'Garden & pool staff', 'Security personnel', 'Full staff management', 'Training & onboarding', 'Replacement coverage'],
    bestFor: 'Large estates, private villas, high-occupancy properties',
  },
]

const WHAT_INCLUDED = [
  'Vetted candidate profiles',
  'In-person interviews',
  'Background verification',
  'Contract preparation',
  'Payroll guidance',
  'Replacement guarantee',
  'Ongoing support',
  'Performance reviews',
]

const HOW_IT_WORKS = [
  { step: '01', title: 'Brief', desc: 'Property size, guest profile, staff needs, schedule.', icon: Calendar },
  { step: '02', title: 'Shortlist', desc: '3–5 candidate profiles matched to your requirements.', icon: Users },
  { step: '03', title: 'Interviews', desc: 'In-person meetings with your top candidates.', icon: ChefHat },
  { step: '04', title: 'Placement', desc: 'Contract, onboarding, first week support.', icon: ShieldCheck },
  { step: '05', title: 'Support', desc: 'Monthly check-ins, feedback, ongoing guidance.', icon: Award },
]

const FAQS = [
  { q: 'How long does villa staff recruitment take?', a: 'Typically one to two weeks from brief to placement. Interviews are scheduled within three to five days of shortlist approval.' },
  { q: 'What if the staff member is not the right fit?', a: 'We offer a 30-day replacement guarantee. If the match is not right, we restart the search at no additional cost.' },
  { q: 'Do you handle contracts and payroll for villa staff?', a: 'Yes. We handle the employment-contract paperwork and advise on payroll, BPJS and THR obligations; complex multi-property arrangements are referred to trusted payroll partners.' },
  { q: 'What roles can you fill for my villa?', a: 'Villa managers, housekeepers, hosts, gardeners, pool attendants, security guards, maintenance staff and drivers.' },
  { q: 'Can you provide a full villa team?', a: 'Yes. Our Full Villa Team package includes a manager, housekeepers, garden and pool staff and security, tailored to your property size and occupancy.' },
  { q: 'Live-in or live-out staff?', a: 'Both. Live-in arrangements are common for housekeepers and villa managers and are defined in the employment contract; live-out staff are placed from the local area around your property.' },
  { q: 'Do you train villa staff before placement?', a: 'We provide basic hospitality training and can arrange specialised training for guest-facing roles on request.' },
  { q: 'What areas do you cover?', a: 'All Bali areas — Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran, Sanur and surrounding regions.' },
  { q: 'What is your placement fee?', a: 'Placement fees are discussed once we understand the role, team size and candidate requirements. We provide a written quote before any commitment.' },
]

export default function StaffingVillaStaffPage() {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      document.querySelectorAll('.placement-reveal').forEach(el => {
        (el as HTMLElement).style.opacity = '1'
      })
      return
    }

    const ctx = gsap.context(() => {
      gsap.fromTo('.placement-reveal', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.placement-reveal', start: 'top 85%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [prefersReducedMotion])

  return (
    <div ref={ref} className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title={getPageMeta('staffing-villa-staff').title}
        description={getPageMeta('staffing-villa-staff').description}
        canonical={getPageMeta('staffing-villa-staff').canonical}
        ogImage={getPageMeta('staffing-villa-staff').ogImage}
        jsonLd={briefJsonLd}
      />

      <Breadcrumb items={[
        { label: 'Staffing', href: '/staffing' },
        { label: 'Villa Staff' },
      ]} />

      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="/generated/mychef-misc-bali-hub-villa.webp" alt="Villa staff placement Bali team at a private Bali property" className="w-full h-full object-cover" width={1920} height={1080} decoding="async" fetchPriority="high" loading="eager" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 px-6 md:px-12 pb-20 md:pb-28 max-w-[1280px] mx-auto w-full">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[0.3em] mb-4">Staffing</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 max-w-[800px]">
            Hire Villa Staff in Bali — Long-Term Placement
          </h1>
          <p className="text-white/[80%] text-lg md:text-xl max-w-[600px] mb-8">
            A well-run villa runs on the people behind it. myCHEF recruits and places long-term villa staff across Bali — villa managers, housekeepers, hosts, gardeners, pool attendants and security — as individual hires or complete teams. Salaries and team packages are tailored to your property and requirements; profiles are delivered within 48 hours, and every placement carries a 30-day replacement guarantee.
          </p>
          <p className="text-white/[70%] text-base max-w-[600px] mb-8">
            Need staff for a single event or a guest's stay instead? That is our <Link to="/in-villa-service" className="underline hover:text-white">shift-based in-villa service</Link> — waiters, bartenders and butlers by the hour. This page is for permanent hires.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="staffing-villa-staff-cta" className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-[#1A1A1A] font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
            <a href="#book" className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">
              <Calendar className="w-4 h-4" /> Request Profiles
            </a>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="Placement Tiers" title="Villa Staff Options" subtitle="From housekeepers to full villa teams — find the right staff for your property." />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {PRICING_TIERS.map((tier) => (
              <div key={tier.title} className={`rounded-2xl p-8 ${tier.highlight ? 'bg-[#1A1A1A] text-white' : 'bg-white border border-[#E8E6E3]'}`}>
                <h3 className="font-playfair text-2xl mb-2">{tier.title}</h3>
                <p className={`text-3xl font-semibold mb-1 ${tier.highlight ? 'text-[#C5A028]' : 'text-[#1A1A1A]'}`}>{tier.price}</p>
                <p className={`text-sm mb-6 ${tier.highlight ? 'text-white/[60%]' : 'text-[#4A4745]'}`}>{tier.unit}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${tier.highlight ? 'text-[#C5A028]' : 'text-[#6B8E5A]'}`} />
                      <span className={tier.highlight ? 'text-white/[80%]' : 'text-[#4A4745]'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <p className={`text-xs ${tier.highlight ? 'text-white/[50%]' : 'text-[#8A8785]'}`}>Best for: {tier.bestFor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="Inclusions" title="What's Included" subtitle="Every placement includes full vetting and ongoing support." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {WHAT_INCLUDED.map((item) => (
              <div key={item} className="flex items-start gap-3 p-5 rounded-xl bg-[#FAFAF8] border border-[#E8E6E3]">
                <Check className="w-5 h-5 text-[#6B8E5A] mt-0.5 flex-shrink-0" />
                <span className="text-[#4A4745] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="Process" title="How It Works" subtitle="From brief to placement — five careful steps." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.step} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-[#C5A028]/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-[#C5A028]" />
                </div>
                <p className="font-cormorant text-[#C5A028] text-sm mb-2">{step.step}</p>
                <h4 className="font-medium mb-2">{step.title}</h4>
                <p className="text-sm text-[#4A4745]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialBlock
        testimonials={[
          { name: 'Villa Owner', location: 'Seminyak', quote: 'myCHEF found us a villa manager and two housekeepers within two weeks. The team is professional, reliable, and our guests consistently compliment the service.', rating: 5 },
          { name: 'Property Manager', location: 'Canggu', quote: 'We needed to replace our entire villa staff quickly. myCHEF delivered a full team — manager, housekeepers, gardener, and security — all vetted and ready.', rating: 5 },
          { name: 'Rental Villa Owner', location: 'Ubud', quote: 'The housekeeper myCHEF placed has been with us for over a year. She keeps our villa immaculate and our guests love her. Worth every rupiah.', rating: 5 },
        ]}
        title="What Clients Say"
        subtitle="Real reviews from villa staff placements across Bali."
      />

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader eyebrow="Questions" title="Villa Staff FAQ" />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      <PressStrip />

      <section id="book" className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage src="/generated/mychef-misc-bali-hub-villa.webp" alt="Villa staff placement Bali team serving at a private property" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-5xl text-white mb-6">Recruit Your Villa Team</h2>
          <p className="text-white/[80%] text-lg mb-8">
            Tell us your property requirements and we will send matched candidate profiles within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="staffing-villa-staff-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
              <MessageCircle className="w-4 h-4" /> WhatsApp myCHEF
            </a>
            <a href="tel:+6289674072020" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
              <Phone className="w-4 h-4" /> Call Sofia
            </a>
          </div>
          <p className="text-white/[70%] text-sm mt-8">
            Part of myCHEF <Link to="/staffing" className="underline hover:text-white">staffing & placement</Link>. Also hiring a chef? See <Link to="/staffing/private-chef-placement" className="underline hover:text-white">private chef placement</Link>. Staffing a private home rather than a rental villa? See <Link to="/staffing/household-staff" className="underline hover:text-white">household staff</Link>. Managing a portfolio? See <Link to="/staffing/for-villa-managers" className="underline hover:text-white">staffing for villa managers</Link>.
          </p>
        </div>
      </section>

      <TaxFooter className="py-6" />
      <ArticleContentSection />

      <StickyMobileCTA
        pageSource="staffing-villa-staff"
        serviceName="villa staff in Bali"
        intent="villa staff hiring and pricing"
      />
    </div>
  )
}