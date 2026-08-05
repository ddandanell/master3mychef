import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Check, Phone, Calendar, Users, ShieldCheck, Award, ChefHat } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
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

const WA_LINK = buildWhatsAppUrl({ serviceName: 'household staff in Bali', intent: 'availability and tailored quote' })

const briefJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://mychef.id/staffing/household-staff#service',
      name: 'Household Staff Placement Bali',
      serviceType: 'Household and estate staff recruitment',
      provider: {
        '@type': 'Organization',
        name: 'myCHEF',
        url: 'https://mychef.id',
        telephone: '+62 896-7407-2020',
      },
      areaServed: ['Bali'],
      description: 'Household staff recruitment for private residences in Bali — housekeepers, nannies, drivers and estate managers. Reference-checked candidates, contracts and payroll guidance, 30-day replacement guarantee.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long does household staff placement take?',
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
          name: 'What household roles can you fill?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Housekeepers, nannies, drivers, estate managers, personal assistants and heads of house for private residences.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you verify references for household staff?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Every candidate undergoes thorough reference checks, background verification and in-person interviews before placement.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you handle contracts and payroll for household staff?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — every household placement comes with a standard Indonesian employment contract and payroll guidance covering BPJS and THR employer obligations; complex arrangements are referred to trusted local payroll partners.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is your placement fee?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Placement fees are discussed once we understand the role and candidate requirements. We provide a written quote before any commitment.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.id/' },
        { '@type': 'ListItem', position: 2, name: 'Staffing', item: 'https://mychef.id/staffing' },
        { '@type': 'ListItem', position: 3, name: 'Household Staff', item: 'https://mychef.id/staffing/household-staff' },
      ],
    },
  ],
}

const PRICING_TIERS = [
  {
    title: 'Housekeeper',
    price: 'Tailored quote',
    unit: 'Based on schedule & duties',
    features: ['Daily cleaning', 'Laundry & ironing', 'Room tidying', 'Supply management', 'Deep cleaning', 'Organization'],
    bestFor: 'Private residences, apartments, small households',
  },
  {
    title: 'Nanny',
    price: 'Tailored quote',
    unit: 'Based on experience & hours',
    features: ['Childcare', 'Meal preparation', 'School runs', 'Activity planning', 'Bedtime routine', 'Child development'],
    bestFor: 'Families with children, working parents',
    highlight: true,
  },
  {
    title: 'Driver',
    price: 'Tailored quote',
    unit: 'Based on schedule & vehicle',
    features: ['Daily transport', 'Airport transfers', 'Vehicle maintenance', 'Errand running', 'Schedule management', 'Local knowledge'],
    bestFor: 'Residents, families, busy professionals',
  },
  {
    title: 'Estate Manager',
    price: 'Tailored quote',
    unit: 'Based on estate complexity',
    features: ['Full household oversight', 'Staff management', 'Vendor coordination', 'Budget management', 'Property maintenance', 'Guest relations'],
    bestFor: 'Large estates, multiple properties, complex households',
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
  { step: '01', title: 'Brief', desc: 'Household size, needs, schedule, staff requirements.', icon: Calendar },
  { step: '02', title: 'Shortlist', desc: '3–5 candidate profiles matched to your requirements.', icon: Users },
  { step: '03', title: 'Interviews', desc: 'In-person meetings with your top candidates.', icon: ChefHat },
  { step: '04', title: 'Placement', desc: 'Contract, onboarding, first week support.', icon: ShieldCheck },
  { step: '05', title: 'Support', desc: 'Monthly check-ins, feedback, ongoing guidance.', icon: Award },
]

const FAQS = [
  { q: 'How long does household staff placement take?', a: 'Typically one to two weeks from brief to placement. Interviews are scheduled within three to five days of shortlist approval.' },
  { q: 'What if the staff member is not the right fit?', a: 'We offer a 30-day replacement guarantee. If the match is not right, we restart the search at no additional cost.' },
  { q: 'Do you handle contracts and payroll for household staff?', a: 'Yes — every household placement comes with a standard Indonesian employment contract and payroll guidance covering BPJS and THR employer obligations; complex arrangements are referred to trusted local payroll partners.' },
  { q: 'What household roles can you fill?', a: 'Housekeepers, nannies, drivers, estate managers, personal assistants and heads of house for private residences.' },
  { q: 'Can you provide a full household team?', a: 'Yes. We recruit and coordinate complete household teams — housekeepers, nannies, drivers and an estate manager — for large residences and estates.' },
  { q: 'Do you verify references for household staff?', a: 'Yes. Every candidate undergoes thorough reference checks, background verification and in-person interviews before placement.' },
  { q: 'What areas do you cover?', a: 'All Bali areas — Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran, Sanur and surrounding regions.' },
  { q: 'What is your placement fee?', a: 'Placement fees are discussed once we understand the role and candidate requirements. We provide a written quote before any commitment.' },
  { q: 'What staffing services do you offer in Bali?', a: 'Day-rate in-villa staff and long-term placement of chefs, managers, butlers and household teams. <a href="/staffing">Staffing</a> · <a href="/in-villa-service">in-villa service</a>.' },
  { q: 'How fast is placement?', a: 'Often around 48 hours for roles with ready candidates; specialist searches take longer.' },
  { q: 'Replacement guarantee?', a: 'Placement programmes typically include a replacement window (e.g. 30 days) in writing.' },
  { q: 'Live-in vs live-out?', a: 'Live-in resides on property; live-out works set shifts. We help you choose.' },
  { q: 'Background checks?', a: 'Candidates are interviewed, reference-checked and supervised through myCHEF systems.' },
  { q: 'Can we hire staff without catering?', a: 'Yes for event staff. <a href="/in-villa-service">In-villa service</a>.' },
  { q: 'Hotel and restaurant staffing?', a: 'Yes — <a href="/staffing/hotels">hotel staffing</a> and B2B kitchen solutions.' },
  { q: 'Trial days?', a: 'Paid trials before long-term placement are common.' },
  { q: 'English-speaking staff?', a: 'Guest-facing roles are English-capable; we match language needs.' },
  { q: 'What info starts a search?', a: 'Role, location, live-in/out, languages, salary band, start date.' },
  { q: 'Backup if staff is sick?', a: 'Temporary cover can be arranged through the network.' },
  { q: 'How to start?', a: 'WhatsApp the brief or <a href="/contact">contact</a>.' },
]

export default function StaffingHouseholdPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.placement-reveal', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.placement-reveal', start: 'top 85%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title={getPageMeta('staffing-household-staff').title}
        description={getPageMeta('staffing-household-staff').description}
        canonical={getPageMeta('staffing-household-staff').canonical}
        ogImage={getPageMeta('staffing-household-staff').ogImage}
        jsonLd={briefJsonLd}
      />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/generated/mychef-staffing-bali-staffing-table.webp" alt="Household staff Bali serving at a private residence" className="w-full h-full object-cover" width={1920} height={1080} decoding="async" fetchPriority="high" loading="eager" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>
        <div className="relative z-10 px-6 md:px-12 py-12 md:py-20 max-w-[1280px] mx-auto w-full text-white">
          <Breadcrumb items={[
            { label: 'Staffing', href: '/staffing' },
            { label: 'Household Staff' },
          ]} theme="dark" className="px-0 pt-0 pb-8" />
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[0.3em] mb-4">Staffing</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 max-w-[800px]">
            Household Staff in Bali — Estate Operations
          </h1>
          <p className="text-white/[80%] text-lg md:text-xl max-w-[600px] mb-8">
            Running a large private residence takes a team you can trust inside your home. myCHEF recruits household staff for private residences and estates across Bali — housekeepers, nannies, drivers, personal assistants and estate managers — with thorough reference checks, proper contracts and a 30-day replacement guarantee. Salaries are tailored to the role, experience and schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="staffing-household-cta" className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-[#1A1A1A] font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
              <MessageCircle className="w-4 h-4" /> Hire Household Staff
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
          <SectionHeader eyebrow="Placement Tiers" title="Household Staff Options" subtitle="From housekeepers to estate managers — find the right staff for your residence." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
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
          { name: 'Resident', location: 'Canggu', quote: 'myCHEF found us a wonderful nanny for our two children within a week. She is caring, professional, and the kids adore her.', rating: 5 },
          { name: 'Family', location: 'Ubud', quote: 'We hired a housekeeper and driver through myCHEF. Both have been with us for over a year. The vetting process gave us real confidence.', rating: 5 },
          { name: 'Estate Owner', location: 'Uluwatu', quote: 'Our estate manager from myCHEF runs our property flawlessly. From staff coordination to vendor management, everything is handled.', rating: 5 },
        ]}
        title="What Clients Say"
        subtitle="Real reviews from household staff placements across Bali."
      />

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader eyebrow="Questions" title="Household Staff FAQ" />
          <FAQAccordion items={FAQS} defaultOpenCount={4} showToc ctaEvery={5} />
        </div>
      </section>

      <PressStrip />

      <section id="book" className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage src="/generated/mychef-staffing-bali-staffing-table.webp" alt="Household staff Bali team at a private residence" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-5xl text-white mb-6">Hire Your Household Team</h2>
          <p className="text-white/[80%] text-lg mb-8">
            Tell us your household's requirements and we will send matched candidate profiles within 48 hours — referenced, background-checked and ready to meet your family.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="staffing-household-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
              <MessageCircle className="w-4 h-4" /> WhatsApp myCHEF
            </a>
            <a href="https://wa.me/6289674072020" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
              <Phone className="w-4 h-4" /> Call Sofia
            </a>
          </div>
          <p className="text-white/[60%] text-sm mt-8 italic">
            Part of myCHEF <Link to="/staffing" className="text-[#C5A028] hover:underline">staffing & placement</Link>. Staffing a rental villa rather than a private home? See <Link to="/staffing/villa-staff" className="text-[#C5A028] hover:underline">villa staff placement</Link>. Need a chef for the household? See <Link to="/staffing/private-chef-placement" className="text-[#C5A028] hover:underline">private chef placement</Link> or our <Link to="/staffing/live-in-chef" className="text-[#C5A028] hover:underline">live-in chef</Link> service.
          </p>
        </div>
      </section>

      <TaxFooter className="py-6" />
      <ArticleContentSection downgradeFirstH1 />

      <StickyMobileCTA
        pageSource="staffing-household"
        serviceName="household staff in Bali"
        intent="household staff hiring and pricing"
      />
    </div>
  )
}