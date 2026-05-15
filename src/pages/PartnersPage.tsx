import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowRight,
  Award,
  Building2,
  Camera,
  FileText,
  Mail,
  MessageCircle,
  Send,
  ShieldCheck,
  Star,
} from 'lucide-react'
import BestPartnerBadge from '@/components/BestPartnerBadge'
import SeoHead, { breadcrumbSchema, faqPageSchema, localBusinessSchema } from '@/components/SeoHead'
import FAQAccordion from '@/components/catering/FAQAccordion'

gsap.registerPlugin(ScrollTrigger)

const WA = '6282237565997'
const PRESS_EMAIL = 'press@mychef.id'

const heroStats = ['50+ staff', '560+ villas', '12,000+ guests']

const pressStats = [
  'Served 12,000+ guests',
  'Featured in [Bali-based lifestyle media placeholder]',
  '8 years in Bali',
]

const pressResources = [
  {
    icon: FileText,
    title: 'Media kit available',
    desc: 'Brand story, service overview, founder background, and approved boilerplate for quick editorial use.',
  },
  {
    icon: Camera,
    title: 'Photo + b-roll placeholders',
    desc: 'Use our placeholder process media while final press imagery and behind-the-scenes footage are prepared.',
  },
  {
    icon: Mail,
    title: 'Fast press contact',
    desc: 'Email press@mychef.id for interview requests, quote approvals, and publication timelines.',
  },
]

const partnerBenefits = [
  {
    icon: Star,
    title: 'Priority booking windows',
    desc: 'Certified partners get first access to peak-date chef availability for villas, retreats, and event stays.',
  },
  {
    icon: Award,
    title: 'Partner commission structure',
    desc: 'A clear partner reward model that makes referrals easy to track across recurring guest bookings.',
  },
  {
    icon: FileText,
    title: 'Branded guest menus',
    desc: 'Co-branded menus and service collateral that help your villa present dining as part of the stay experience.',
  },
  {
    icon: ShieldCheck,
    title: 'Certified execution',
    desc: 'Michelin-trained leadership, vetted teams, and SOP-led service designed for luxury villa operations.',
  },
]

const partnerSupport = [
  'Dedicated account support for villa managers',
  'Preferred coordination for arrivals, celebrations, and retreat stays',
  'Guest-ready menu recommendations tailored to your property profile',
  'Certification story and badge assets for your marketing touchpoints',
]

const logoGroups = [
  {
    title: 'Press logo placeholders',
    items: ['Lifestyle Media Placeholder', 'Travel Editor Placeholder', 'Luxury Bali Guide Placeholder'],
  },
  {
    title: 'Partner villa placeholders',
    items: ['Seminyak Villa Portfolio', 'Uluwatu Retreat Partner', 'Canggu Boutique Stay'],
  },
]

const testimonials = [
  {
    quote:
      'We have partnered with myCHEF for 3 years across our 12-villa portfolio. The consistency, professionalism, and guest satisfaction scores speak for themselves.',
    name: 'James Richardson',
    detail: 'GM, Luxury Villa Collection, Canggu',
  },
  {
    quote:
      'Finding reliable culinary talent in Bali was our biggest challenge. myCHEF solved it completely with fast communication and a level of polish guests remember.',
    name: 'Sarah Chen',
    detail: 'Operations Director, Boutique Hotel Group, Seminyak',
  },
  {
    quote:
      'Their chefs understood our wellness philosophy immediately. Reviews for food quality improved within the first month and have stayed there.',
    name: 'Michael Torres',
    detail: 'Founder, Ubud Wellness Retreat',
  },
]

const faqs = [
  {
    q: 'Who should use this page?',
    a: 'Two groups: press who need a quick brand and founder overview, and villa managers who want to explore the myCHEF Certified Partner programme.',
  },
  {
    q: 'What does the Certified Partner programme include?',
    a: 'Priority booking access, partner commissions, branded menus, operational support, and a dedicated myCHEF point of contact for guest dining coordination.',
  },
  {
    q: 'Can journalists request founder commentary?',
    a: 'Yes. Press can request Adriano commentary, company background, service facts, and approved images by emailing press@mychef.id.',
  },
  {
    q: 'What types of properties do you work with?',
    a: 'Luxury villas, boutique hotels, wellness retreats, estates, and hospitality groups across Bali that want stronger guest dining and reliable staffing execution.',
  },
]

export default function PartnersPage() {
  const pageRef = useRef<HTMLDivElement>(null)
  const [partnerForm, setPartnerForm] = useState({ name: '', email: '', property: '', type: '', size: '', notes: '' })
  const pressMailto = `mailto:${PRESS_EMAIL}?subject=${encodeURIComponent('myCHEF press inquiry')}`
  const partnerWhatsapp = `https://wa.me/${WA}?text=${encodeURIComponent("Hi myCHEF, I'd like to discuss the Certified Partner programme.")}`

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!partnerForm.name || !partnerForm.email) return

    const text = encodeURIComponent(
      `Hi myCHEF, I would like to discuss the Certified Partner programme.\n\nName: ${partnerForm.name}\nEmail: ${partnerForm.email}\nProperty: ${partnerForm.property || '—'}\nProperty Type: ${partnerForm.type || '—'}\nRooms / Villas: ${partnerForm.size || '—'}\n\n${partnerForm.notes || ''}`.trim(),
    )

    window.open(`https://wa.me/${WA}?text=${text}`, '_blank', 'noopener,noreferrer')
  }

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 })
    tl.fromTo('.part-hero-label', { y: 20 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' })
    tl.fromTo('.part-hero-title', { y: 30 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.4')
    tl.fromTo('.part-hero-sub', { y: 20 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.5')
  }, [])

  useGSAP(() => {
    document.querySelectorAll('.part-reveal').forEach((el) => {
      gsap.fromTo(
        el,
        { y: 50 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 82%', once: true },
        },
      )
    })
  }, { scope: pageRef })

  return (
    <main ref={pageRef} className="bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Press & Partners | myCHEF Bali"
        description="Press kit details and Certified Partner programme information for villa managers looking to work with myCHEF in Bali."
        canonical="https://mychef.id/partners"
        ogImage="https://mychef.id/partners-hero.webp"
        jsonLd={[localBusinessSchema, breadcrumbSchema('Press & Partners', 'https://mychef.id/partners'), faqPageSchema(faqs.map(f => ({ question: f.q, answer: f.a })))]}
      />

      <section className="relative overflow-hidden border-b border-[#E8E3D8]">
        <div className="absolute inset-0">
          <img src="/generated/partner-platform-hero.webp" alt="myCHEF Bali partner programme" className="w-full h-full object-cover opacity-20" loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,250,248,0.86),rgba(250,250,248,0.98))]" />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 py-24 md:py-32">
          <p className="part-hero-label text-[#C5A028] text-xs uppercase tracking-[0.35em] font-semibold mb-5">Press & Partners</p>
          <h1 className="part-hero-title font-playfair text-4xl md:text-6xl leading-[1.05] max-w-[900px] mb-6">
            Partner With Bali&apos;s Premier Private Chef Service
          </h1>
          <p className="part-hero-sub text-[#4A4745] text-base md:text-lg max-w-[760px] mb-8 leading-relaxed">
            myCHEF.id helps journalists cover the Bali private dining story and helps villa managers unlock a stronger guest experience through the Certified Partner programme. Founded by Adriano, Michelin-trained in Milan, and trusted across Bali for private chef, catering, events, and staffing.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {heroStats.map((stat) => (
              <span key={stat} className="inline-flex items-center rounded-full border border-[#C5A028]/30 bg-white/90 px-4 py-2 text-sm text-[#1A1A1A]">
                {stat}
              </span>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            <div className="bg-white/92 border border-[#E8E3D8] rounded-[28px] p-7 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
              <div className="inline-flex items-center gap-2 text-[#C5A028] text-xs uppercase tracking-[0.3em] font-semibold mb-4">
                <FileText className="w-4 h-4" /> Press & Media
              </div>
              <h2 className="font-playfair text-3xl mb-3">Need the myCHEF story fast?</h2>
              <p className="text-[#4A4745] text-sm leading-relaxed mb-6">
                Request our media kit, founder background, approved brand details, and interview availability for Bali hospitality, villa dining, and luxury travel coverage.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#press-media" className="inline-flex items-center justify-center rounded-full bg-[#C5A028] px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#050505] hover:bg-[#D5AF35] transition-colors">
                  Explore Press Info
                </a>
                <a href={pressMailto} className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1A1A1A]/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] hover:border-[#C5A028] transition-colors">
                  <Mail className="w-4 h-4" /> Email Press Desk
                </a>
              </div>
            </div>

            <div className="bg-[#111111] text-white rounded-[28px] p-7 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
              <div className="inline-flex items-center gap-2 text-[#C5A028] text-xs uppercase tracking-[0.3em] font-semibold mb-4">
                <Building2 className="w-4 h-4" /> Villa Partners
              </div>
              <h2 className="font-playfair text-3xl mb-3">Want to become a Certified Partner?</h2>
              <p className="text-white/72 text-sm leading-relaxed mb-6">
                Designed for villa managers who want reliable chef availability, partner rewards, and dining assets that feel premium from enquiry to guest table.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/certified-partner" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#050505] hover:bg-[#F1ECE0] transition-colors">
                  View Partner Programme
                </Link>
                <a href={partnerWhatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white hover:border-[#C5A028] hover:text-[#C5A028] transition-colors">
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="press-media" className="part-reveal py-20 md:py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
          <div>
            <p className="text-[#C5A028] text-xs uppercase tracking-[0.35em] font-semibold mb-4">Press & Media</p>
            <h2 className="font-playfair text-3xl md:text-5xl leading-[1.08] mb-5">A quick media brief for journalists, editors, and Bali storytellers.</h2>
            <p className="text-[#4A4745] text-base leading-relaxed mb-6 max-w-[720px]">
              myCHEF has served 12,000+ guests across Bali villas, events, and private dining experiences. Our press kit covers the brand story, Adriano&apos;s Michelin-trained Milan background, company milestones, and placeholder visual assets until the final press library is released.
            </p>
            <p className="text-[#1A1A1A] text-sm md:text-base font-medium mb-8">
              {pressStats.join(' · ')}
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a href={pressMailto} className="inline-flex items-center gap-2 rounded-full bg-[#111111] px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white hover:bg-[#2A2A2A] transition-colors">
                <Mail className="w-4 h-4" /> Contact {PRESS_EMAIL}
              </a>
              <a href={partnerWhatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#1A1A1A]/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] hover:border-[#C5A028] transition-colors">
                <MessageCircle className="w-4 h-4" /> Request a Quick Quote
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            {pressResources.map((item) => (
              <div key={item.title} className="rounded-[24px] border border-[#E8E3D8] bg-white p-6">
                <item.icon className="w-5 h-5 text-[#C5A028] mb-4" />
                <h3 className="font-playfair text-2xl mb-2">{item.title}</h3>
                <p className="text-sm text-[#4A4745] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="part-reveal py-16 px-6 md:px-10 lg:px-16 border-y border-[#E8E3D8] bg-white/60">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-8">
          {logoGroups.map((group) => (
            <div key={group.title}>
              <p className="text-[#8A8785] text-xs uppercase tracking-[0.3em] font-semibold mb-4">{group.title}</p>
              <div className="grid sm:grid-cols-3 gap-3">
                {group.items.map((item) => (
                  <div key={item} className="rounded-2xl border border-dashed border-[#C5A028]/40 bg-[#FAFAF8] px-4 py-8 text-center text-xs uppercase tracking-[0.22em] text-[#6B6560]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="villa-partners" className="part-reveal py-20 md:py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          <div className="bg-[#111111] text-white rounded-[28px] p-8 md:p-10">
            <p className="text-[#C5A028] text-xs uppercase tracking-[0.35em] font-semibold mb-4">Certified Partner Programme</p>
            <h2 className="font-playfair text-3xl md:text-5xl leading-[1.08] mb-5">Built for villa managers who want the dining side handled properly.</h2>
            <p className="text-white/72 text-sm md:text-base leading-relaxed mb-8">
              The programme gives your property a cleaner operational handoff, stronger guest-facing presentation, and direct access to the myCHEF team for booking, menus, and event support.
            </p>
            <div className="mb-8">
              <BestPartnerBadge variant="dark" width={260} />
            </div>
            <ul className="space-y-3 mb-8">
              {partnerSupport.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/78">
                  <ShieldCheck className="w-4 h-4 text-[#C5A028] mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link to="/certified-partner" className="inline-flex items-center gap-2 rounded-full bg-[#C5A028] px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#050505] hover:bg-[#D5AF35] transition-colors">
                Certified Partner Details <ArrowRight className="w-4 h-4" />
              </Link>
              <a href={partnerWhatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white hover:border-[#C5A028] hover:text-[#C5A028] transition-colors">
                <MessageCircle className="w-4 h-4" /> Partnership WhatsApp
              </a>
            </div>
          </div>

          <div>
            <p className="text-[#C5A028] text-xs uppercase tracking-[0.35em] font-semibold mb-4">Partner Benefits</p>
            <h3 className="font-playfair text-3xl md:text-4xl mb-6">Why properties join the network</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {partnerBenefits.map((benefit) => (
                <div key={benefit.title} className="rounded-[24px] border border-[#E8E3D8] bg-white p-6">
                  <benefit.icon className="w-5 h-5 text-[#C5A028] mb-4" />
                  <h4 className="font-playfair text-2xl mb-2">{benefit.title}</h4>
                  <p className="text-sm text-[#4A4745] leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="part-reveal py-20 md:py-24 px-6 md:px-10 lg:px-16 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#C5A028] text-xs uppercase tracking-[0.35em] font-semibold mb-4">Partner Stories</p>
            <h2 className="font-playfair text-3xl md:text-5xl mb-4">What hospitality partners say</h2>
            <p className="text-sm md:text-base text-[#4A4745] max-w-[720px] mx-auto">
              Social proof for villa managers still matters here, so we kept the strongest reassurance content from the original page and reframed it around partnership outcomes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="rounded-[24px] border border-[#E8E3D8] bg-[#FAFAF8] p-6 md:p-8">
                <p className="font-playfair italic text-lg leading-relaxed mb-5">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="w-10 h-px bg-[#C5A028] mb-4" />
                <p className="text-sm font-medium">{testimonial.name}</p>
                <p className="text-xs text-[#8A8785]">{testimonial.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="part-reveal py-20 md:py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-[800px] mx-auto text-center mb-10">
          <p className="text-[#C5A028] text-xs uppercase tracking-[0.35em] font-semibold mb-4">Questions</p>
          <h2 className="font-playfair text-3xl md:text-5xl mb-4">Common press and partner questions</h2>
        </div>
        <div className="max-w-[800px] mx-auto">
          <FAQAccordion items={faqs} defaultOpenCount={4} />
        </div>
      </section>

      <section id="partner-form" className="part-reveal py-20 md:py-24 px-6 md:px-10 lg:px-16 bg-white border-y border-[#E8E3D8]">
        <div className="max-w-[700px] mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#C5A028] text-xs uppercase tracking-[0.35em] font-semibold mb-4">Partnership Inquiry</p>
            <h2 className="font-playfair text-3xl md:text-5xl mb-4">Tell us about your property</h2>
            <p className="text-sm md:text-base text-[#4A4745]">
              Share the basics and we&apos;ll continue the conversation on WhatsApp with your details pre-filled.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handlePartnerSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="partner-name" className="sr-only">Your name</label>
                <input id="partner-name" required value={partnerForm.name} onChange={(e) => setPartnerForm((current) => ({ ...current, name: e.target.value }))} type="text" placeholder="Your Name *" className="w-full rounded-2xl border border-[#1A1A1A]/15 bg-[#FAFAF8] px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#6B6560] outline-none focus:border-[#C5A028]" />
              </div>
              <div>
                <label htmlFor="partner-email" className="sr-only">Email</label>
                <input id="partner-email" required value={partnerForm.email} onChange={(e) => setPartnerForm((current) => ({ ...current, email: e.target.value }))} type="email" placeholder="Email *" className="w-full rounded-2xl border border-[#1A1A1A]/15 bg-[#FAFAF8] px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#6B6560] outline-none focus:border-[#C5A028]" />
              </div>
            </div>
            <div>
              <label htmlFor="partner-property" className="sr-only">Property or villa name</label>
              <input id="partner-property" value={partnerForm.property} onChange={(e) => setPartnerForm((current) => ({ ...current, property: e.target.value }))} type="text" placeholder="Property / Villa Name" className="w-full rounded-2xl border border-[#1A1A1A]/15 bg-[#FAFAF8] px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#6B6560] outline-none focus:border-[#C5A028]" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="partner-type" className="sr-only">Property type</label>
                <select id="partner-type" value={partnerForm.type} onChange={(e) => setPartnerForm((current) => ({ ...current, type: e.target.value }))} className="w-full rounded-2xl border border-[#1A1A1A]/15 bg-[#FAFAF8] px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#C5A028]">
                  <option value="">Property Type</option>
                  <option>Luxury Villa</option>
                  <option>Boutique Hotel</option>
                  <option>Wellness Retreat</option>
                  <option>Private Estate</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="partner-size" className="sr-only">Number of rooms or villas</label>
                <input id="partner-size" value={partnerForm.size} onChange={(e) => setPartnerForm((current) => ({ ...current, size: e.target.value }))} type="text" placeholder="Number of Rooms / Villas" className="w-full rounded-2xl border border-[#1A1A1A]/15 bg-[#FAFAF8] px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#6B6560] outline-none focus:border-[#C5A028]" />
              </div>
            </div>
            <div>
              <label htmlFor="partner-notes" className="sr-only">Partnership details</label>
              <textarea id="partner-notes" value={partnerForm.notes} onChange={(e) => setPartnerForm((current) => ({ ...current, notes: e.target.value }))} placeholder="Tell us what type of guests you host, what support you want, and any timing constraints..." rows={5} className="w-full resize-none rounded-2xl border border-[#1A1A1A]/15 bg-[#FAFAF8] px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#6B6560] outline-none focus:border-[#C5A028]" />
            </div>
            <button type="submit" className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-[#C5A028] px-6 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#050505] transition-colors hover:bg-[#D5AF35]">
              <Send className="w-4 h-4" /> Send Partnership Request
            </button>
            <p className="text-center text-xs text-[#8A8785]">This opens WhatsApp with your details pre-filled for the myCHEF team.</p>
          </form>
        </div>
      </section>

      <section className="part-reveal py-20 md:py-24 px-6 md:px-10 lg:px-16 bg-[#111111] text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <p className="text-[#C5A028] text-xs uppercase tracking-[0.35em] font-semibold mb-4">Let&apos;s Talk</p>
          <h2 className="font-playfair text-3xl md:text-5xl mb-5">WhatsApp is the fastest way to start a partnership conversation.</h2>
          <p className="text-white/72 text-base leading-relaxed mb-8 max-w-[680px] mx-auto">
            Whether you&apos;re writing a feature, managing a villa portfolio, or building a new hospitality partnership, message the team and we&apos;ll route you fast.
          </p>
          <a href={partnerWhatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#C5A028] px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#050505] hover:bg-[#D5AF35] transition-colors">
            <MessageCircle className="w-4 h-4" /> WhatsApp Partnership Inquiries
          </a>
        </div>
      </section>
    </main>
  )
}
