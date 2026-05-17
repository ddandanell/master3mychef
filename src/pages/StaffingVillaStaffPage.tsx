import { useEffect, useRef } from 'react'
import { MessageCircle, Check, Phone, Calendar, Users, ShieldCheck, Award, ChefHat } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, {
  localBusinessSchema,
  breadcrumbSchema,
  serviceSchema,
  faqPageSchema,
  aggregateRatingSchema,
} from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import FAQAccordion from '@/components/catering/FAQAccordion'
import { Breadcrumb } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'
import PressStrip from '@/components/shared/PressStrip'

import OptimizedImage from '@/components/OptimizedImage'
gsap.registerPlugin(ScrollTrigger)

const SITE = 'https://mychef.id'
const WA_NUMBER = '6282237565997'
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  "Hi myCHEF, I'd like to recruit villa staff for my property in Bali.",
)}`

const PRICING_TIERS = [
  {
    title: 'Villa Manager',
    price: 'IDR 12,000,000',
    unit: '/month',
    features: ['Full villa oversight', 'Staff scheduling', 'Guest relations', 'Vendor management', 'Maintenance coordination', 'Monthly reporting'],
    bestFor: 'Medium to large villas, rental properties, guest-focused estates',
  },
  {
    title: 'Housekeeper',
    price: 'IDR 4,500,000',
    unit: '/month',
    features: ['Daily cleaning', 'Laundry & ironing', 'Room preparation', 'Inventory management', 'Supply ordering', 'Deep cleaning schedule'],
    bestFor: 'Villas, apartments, private residences',
    highlight: true,
  },
  {
    title: 'Full Villa Team',
    price: 'IDR 25,000,000',
    unit: '/month',
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
  { q: 'How long does villa staff recruitment take?', a: 'Typically 1–2 weeks from brief to placement. Interviews are scheduled within 3–5 days of shortlist approval.' },
  { q: 'What if the staff member is not the right fit?', a: 'We offer a 30-day replacement guarantee. If the match is not right, we restart the search at no additional cost.' },
  { q: 'Do you handle contracts and payroll for villa staff?', a: 'We prepare standard employment contracts and provide payroll guidance. For complex arrangements, we can recommend local payroll partners.' },
  { q: 'What roles can you fill for my villa?', a: 'Villa managers, housekeepers, hosts, gardeners, pool attendants, security guards, maintenance staff, and drivers.' },
  { q: 'Can you provide a full villa team?', a: 'Yes. Our Full Villa Team package includes a manager, housekeepers, garden and pool staff, and security personnel.' },
  { q: 'What areas do you cover for villa staff?', a: 'All Bali areas: Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran, Sanur, and surrounding regions.' },
  { q: 'Do you train the villa staff before placement?', a: 'We provide basic hospitality training and can arrange specialized training for guest-facing roles upon request.' },
  { q: 'What is your villa staff placement fee?', a: 'One month of the staff salary as a placement fee. This covers sourcing, interviews, contract, and 6 months of ongoing support.' },
]

export default function StaffingVillaStaffPage() {
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
        title="Villa Staff Placement Bali | Managers & Housekeepers — myCHEF"
        description="Recruit villa staff in Bali — managers, hosts, housekeepers, gardeners, pool, security. Vetted and trained. From IDR 4,500,000 per month."
        canonical={`${SITE}/staffing/villa-staff`}
        ogImage={`${SITE}/generated/hub-villa.webp`}
        jsonLd={[
          localBusinessSchema,
          serviceSchema(
            'Villa Staff Placement Bali',
            'Villa staff recruitment in Bali — managers, housekeepers, gardeners, pool attendants, and security. Vetted candidates and ongoing support.',
            `${SITE}/staffing/villa-staff`,
            'IDR',
          ),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          aggregateRatingSchema(4.9, 156),
          breadcrumbSchema('Villa Staff', `${SITE}/staffing/villa-staff`, 'Staffing', `${SITE}/staffing`),
        ]}
      />

      <Breadcrumb items={[
        { label: 'Staffing', href: '/staffing' },
        { label: 'Villa Staff' },
      ]} />

      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="/generated/hub-villa.webp" alt="Villa staff at a private Bali property" className="w-full h-full object-cover" width={1920} height={1080} decoding="async" fetchPriority="high" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 px-6 md:px-12 pb-20 md:pb-28 max-w-[1280px] mx-auto w-full">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[0.3em] mb-4">Staffing</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 max-w-[800px]">
            Villa Staff Placement in Bali
          </h1>
          <p className="text-white/[80%] text-lg md:text-xl max-w-[600px] mb-8">
            Recruit villa staff in Bali — managers, hosts, housekeepers, gardeners, 
            pool, security. Vetted and trained. From IDR 4,500,000 per month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="staffing-villa-staff-cta" className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
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
          <OptimizedImage src="/generated/hub-villa.webp" alt="Villa staff team at Bali property" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-5xl text-white mb-6">Recruit Your Villa Team</h2>
          <p className="text-white/[80%] text-lg mb-8">
            Tell us your property requirements and we will send matched candidate profiles within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="staffing-villa-staff-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
              <MessageCircle className="w-4 h-4" /> WhatsApp myCHEF
            </a>
            <a href="tel:+6282237565997" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
              <Phone className="w-4 h-4" /> Call Sofia
            </a>
          </div>
        </div>
      </section>

      <TaxFooter className="py-6" />
    </div>
  )
}
