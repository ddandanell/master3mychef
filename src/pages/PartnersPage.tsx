import { useRef, useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star, Award, Shield, Users, Send, Check, ChevronDown } from 'lucide-react'
import BestPartnerBadge from '@/components/BestPartnerBadge'
import SeoHead, { breadcrumbSchema } from '@/components/SeoHead'

gsap.registerPlugin(ScrollTrigger)

const partnerBenefits = [
  { icon: <Award size={24} />, title: 'Certified Chef Placement', desc: 'Every chef we place in your property is certified, trained, and personally vetted. Background checks, culinary assessments, and hospitality training are standard.' },
  { icon: <Shield size={24} />, title: 'Insurance & Liability Coverage', desc: 'Full insurance coverage for all chef placements. Liability, food safety, and property protection included. Your peace of mind is guaranteed.' },
  { icon: <Users size={24} />, title: 'Dedicated Account Manager', desc: 'A single point of contact for your property. Your account manager coordinates all chef placements, handles scheduling, and ensures consistent quality.' },
  { icon: <Star size={24} />, title: 'Quality Control Systems', desc: 'Regular quality audits, guest feedback tracking, and performance reviews. We maintain the highest standards across every placement.' },
]

const certifications = [
  { name: 'HACCP Certified', desc: 'Hazard Analysis Critical Control Points food safety certification for all kitchen operations.' },
  { name: 'Bali Tourism Board Member', desc: 'Official member of the Bali Tourism Board, adhering to industry best practices.' },
  { name: 'Food Safety Level 3', desc: 'All chefs hold Level 3 Food Safety Certification as a minimum standard.' },
  { name: 'Insurance Coverage', desc: 'Comprehensive liability and property insurance covering all placements.' },
  { name: 'Vetted & Background Checked', desc: 'Every team member undergoes thorough background checks before joining.' },
  { name: '8+ Years Operating', desc: 'Established hospitality presence in Bali since 2017 with proven track record.' },
]

const partnerRegions = [
  'Seminyak', 'Canggu', 'Ubud', 'Uluwatu',
  'Sanur', 'Nusa Dua', 'Pererenan', 'Bingin',
]

const testimonials = [
  { quote: 'We have partnered with myCHEF for 3 years across our 12-villa portfolio. The consistency, professionalism, and guest satisfaction scores speak for themselves. Our guests regularly name the chef experience as the highlight of their stay.', name: 'James Richardson', detail: 'GM, Luxury Villa Collection, Canggu' },
  { quote: 'Finding reliable culinary talent in Bali was our biggest challenge. myCHEF solved it completely. Their certification system, quality control, and responsive management make them an invaluable partner.', name: 'Sarah Chen', detail: 'Operations Director, Boutique Hotel Group, Seminyak' },
  { quote: 'We partnered with myCHEF for our wellness retreat center. Their chefs understood our health-focused philosophy perfectly. Guest reviews for food went from 3.8 to 4.9 within the first month.', name: 'Michael Torres', detail: 'Founder, Ubud Wellness Retreat' },
]

const faqs = [
  { q: 'How does the partnership program work?', a: 'We begin with a discovery call to understand your property, guest profile, and culinary needs. We then create a custom partnership agreement covering chef placement schedules, menu standards, pricing structure, and quality control protocols. Your dedicated account manager handles everything ongoing.' },
  { q: 'What type of properties do you partner with?', a: 'We partner with luxury villas, boutique hotels, wellness retreats, yoga centers, and private estates across Bali. Our partners range from 4-bedroom villas to 50-room hotels. If you care about guest experience, we want to work with you.' },
  { q: 'How are chefs matched to properties?', a: 'We match based on cuisine requirements, guest demographics, property style, and chef specialization. A family-oriented villa gets a chef skilled in family dining. A wellness retreat gets a health-focused chef. Every match is deliberate.' },
  { q: 'What is the pricing structure?', a: 'Partners receive preferred pricing based on volume and commitment level. We offer flexible models: per-placement fees, monthly retainers, or annual partnerships. Contact Marco on WhatsApp for a tailored proposal.' },
  { q: 'How do you ensure quality across properties?', a: 'Quality control includes: regular site visits by our management team, guest feedback collection after every service, chef performance reviews, ongoing training programs, and immediate replacement if standards are not met.' },
  { q: 'What if a chef is unavailable?', a: 'We maintain a bench of certified backup chefs for every property. If your regular chef is unavailable due to illness or leave, we provide a fully briefed replacement who maintains the same standards your guests expect.' },
  { q: 'Do you provide training for in-house staff?', a: 'Yes. We offer culinary training, food safety certification, and hospitality coaching for in-house teams. Many of our partners use this to elevate their entire F&B operation.' },
]

const WA = '6282237565997'

export default function PartnersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const pageRef = useRef<HTMLDivElement>(null)
  const [partnerForm, setPartnerForm] = useState({ name: '', email: '', property: '', type: '', size: '', notes: '' })

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!partnerForm.name || !partnerForm.email) return
    const text = encodeURIComponent(
      `Hi Marco, I would like to apply for the myCHEF partner programme.\n\nName: ${partnerForm.name}\nEmail: ${partnerForm.email}\nProperty: ${partnerForm.property || '—'}\nProperty Type: ${partnerForm.type || '—'}\nRooms / Villas: ${partnerForm.size || '—'}\n\n${partnerForm.notes || ''}`.trim(),
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
      gsap.fromTo(el, { y: 50 }, {
        y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 82%', once: true },
      })
    })
  }, { scope: pageRef })

  return (
    <div ref={pageRef} className="bg-white">
      <SeoHead
        title="Villa Partner Programme — myCHEF for Bali Hospitality Partners"
        description="Trusted by 50+ luxury villas across Bali. Certified chef placement, insurance, dedicated account management. Join the myCHEF villa partner programme."
        canonical="https://mychef.id/partners"
        ogImage="https://mychef.id/generated/partner-platform-hero.webp"
        jsonLd={[breadcrumbSchema('Partners', 'https://mychef.id/partners')]}
      />
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/generated/hub-bali.webp" alt="Villa partnerships" className="w-full h-full object-cover" style={{ opacity: 0.35 }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.75) 50%, transparent 100%)' }} />
        </div>
        <div className="relative z-10 px-8 md:px-16 lg:px-20 py-24 max-w-[650px]">
          <p className="part-hero-label font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[4px] mb-4">Partners</p>
          <h1 className="part-hero-title font-playfair font-bold text-[#1A1A1A] text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-4">
            Villa Chef<br />Partnership Programme
          </h1>
          <p className="part-hero-sub font-inter text-[#4A4745] text-base mb-8 max-w-[480px]">
            Luxury villas, boutique hotels, and wellness retreats across Bali partner with myCHEF 
            to deliver exceptional culinary experiences to their guests. 8+ years. 50+ team members. 
            One trusted hospitality partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#partner-form" className="bg-[#2C5F7C] text-white font-inter font-semibold text-xs uppercase tracking-[2px] px-8 py-4 hover:bg-[#1E4A5E] transition-all text-center">
              Become a Partner
            </a>
            <a href="https://wa.me/6282237565997?text=Hi%20Marco%2C%20I%27m%20interested%20in%20becoming%20a%20myCHEF%20partner." target="_blank" rel="noopener noreferrer" className="border border-[#1A1A1A]/20 text-[#1A1A1A] font-inter text-xs uppercase tracking-[2px] px-8 py-[14px] hover:border-[#2C5F7C] hover:text-[#2C5F7C] transition-all text-center">
              Chat with Marco
            </a>
          </div>
        </div>
      </section>

      {/* Partner Logos + Best Partner badge */}
      <section className="part-reveal py-14 px-8 border-b border-[#E5E3E0]">
        <div className="max-w-container-lg mx-auto">
          <div className="flex justify-center mb-8">
            <BestPartnerBadge variant="dark" width={280} />
          </div>
          <p className="font-inter text-[#8A8785] text-xs uppercase tracking-[2px] text-center mb-6">Serving 50+ luxury villas across Bali</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partnerRegions.map((region) => (
              <span key={region} className="font-playfair text-[#8A8785] text-sm md:text-base opacity-60">{region}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="part-reveal py-20 md:py-28 px-8" style={{ backgroundColor: '#F8F7F5' }}>
        <div className="max-w-container-lg mx-auto">
          <div className="text-center mb-14">
            <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[4px] mb-4">Why Partner</p>
            <h2 className="font-playfair font-bold text-[#1A1A1A] text-3xl md:text-4xl mb-4">The Partner Advantage</h2>
            <p className="font-inter text-[#4A4745] text-sm max-w-[500px] mx-auto">Everything you need from a hospitality partner — professionalism, reliability, and exceptional quality.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerBenefits.map((b) => (
              <div key={b.title} className="bg-white p-8 border border-[#E5E3E0] flex gap-5">
                <div className="text-[#2C5F7C] flex-shrink-0 mt-1">{b.icon}</div>
                <div>
                  <h4 className="font-playfair font-semibold text-[#1A1A1A] text-lg mb-2">{b.title}</h4>
                  <p className="font-inter text-[#4A4745] text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="part-reveal py-20 md:py-28 px-8">
        <div className="max-w-container-lg mx-auto">
          <div className="text-center mb-14">
            <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[4px] mb-4">Certifications</p>
            <h2 className="font-playfair font-bold text-[#1A1A1A] text-3xl md:text-4xl mb-4">Our Standards</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((c) => (
              <div key={c.name} className="flex gap-4 items-start p-5 border border-[#E5E3E0]">
                <Check size={18} className="text-[#2C5F7C] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-playfair font-semibold text-[#1A1A1A] text-sm mb-1">{c.name}</h4>
                  <p className="font-inter text-[#4A4745] text-xs leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Villa Aerial */}
      <section className="part-reveal relative overflow-hidden">
        <img src="/generated/city-seminyak.webp" alt="Bali villas" className="w-full aspect-[21/9] object-cover" loading="lazy" />
        <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(26,26,26,0.4)' }}>
          <div className="text-center px-6">
            <p className="font-playfair font-bold text-white text-3xl md:text-5xl mb-4">500+ Villas Served</p>
            <p className="font-inter text-white/70 text-sm">Across every corner of Bali</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="part-reveal py-20 md:py-28 px-8" style={{ backgroundColor: '#F8F7F5' }}>
        <div className="max-w-container-lg mx-auto">
          <div className="text-center mb-12">
            <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[4px] mb-4">Partner Stories</p>
            <h2 className="font-playfair font-bold text-[#1A1A1A] text-3xl md:text-4xl">What Partners Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white p-6 md:p-8 border border-[#E5E3E0]">
                <p className="font-playfair italic text-[#1A1A1A] text-base leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                <div className="w-10 h-[1px] bg-[#2C5F7C] mb-4" />
                <p className="font-inter text-[#1A1A1A] text-sm font-medium">{t.name}</p>
                <p className="font-inter text-[#8A8785] text-xs">{t.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="part-reveal py-20 md:py-28 px-8">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-12">
            <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[4px] mb-4">Questions</p>
            <h2 className="font-playfair font-bold text-[#1A1A1A] text-3xl md:text-4xl">Frequently Asked</h2>
          </div>
          <div>
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-[#1A1A1A]/10">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between py-5 text-left group">
                  <span className="font-inter text-[#1A1A1A] text-sm pr-4 group-hover:text-[#2C5F7C] transition-colors">{faq.q}</span>
                  <ChevronDown size={16} className={`text-[#8A8785] flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all ${openFaq === i ? 'max-h-[500px] pb-5' : 'max-h-0'}`}>
                  <p className="font-inter text-[#4A4745] text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="partner-form" className="part-reveal py-20 md:py-28 px-8" style={{ backgroundColor: '#F8F7F5' }}>
        <div className="max-w-[600px] mx-auto">
          <div className="text-center mb-10">
            <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[4px] mb-4">Get Started</p>
            <h2 className="font-playfair font-bold text-[#1A1A1A] text-3xl md:text-4xl mb-4">Become a Partner</h2>
            <p className="font-inter text-[#4A4745] text-sm">Tell us about your property and we will design a partnership that elevates your guest experience.</p>
          </div>
          <form className="space-y-5" onSubmit={handlePartnerSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input required value={partnerForm.name} onChange={(e) => setPartnerForm((f) => ({ ...f, name: e.target.value }))} type="text" placeholder="Your Name *" className="w-full bg-white border border-[#1A1A1A]/15 px-4 py-3 font-inter text-sm text-[#1A1A1A] placeholder:text-[#6B6560] focus:border-[#2C5F7C]" />
              <input required value={partnerForm.email} onChange={(e) => setPartnerForm((f) => ({ ...f, email: e.target.value }))} type="email" placeholder="Email *" className="w-full bg-white border border-[#1A1A1A]/15 px-4 py-3 font-inter text-sm text-[#1A1A1A] placeholder:text-[#6B6560] focus:border-[#2C5F7C]" />
            </div>
            <input value={partnerForm.property} onChange={(e) => setPartnerForm((f) => ({ ...f, property: e.target.value }))} type="text" placeholder="Property / Villa Name" className="w-full bg-white border border-[#1A1A1A]/15 px-4 py-3 font-inter text-sm text-[#1A1A1A] placeholder:text-[#6B6560] focus:border-[#2C5F7C]" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <select value={partnerForm.type} onChange={(e) => setPartnerForm((f) => ({ ...f, type: e.target.value }))} className="w-full bg-white border border-[#1A1A1A]/15 px-4 py-3 font-inter text-sm text-[#1A1A1A] focus:border-[#2C5F7C]">
                <option value="">Property Type</option>
                <option>Luxury Villa</option>
                <option>Boutique Hotel</option>
                <option>Wellness Retreat</option>
                <option>Yoga Center</option>
                <option>Private Estate</option>
                <option>Other</option>
              </select>
              <input value={partnerForm.size} onChange={(e) => setPartnerForm((f) => ({ ...f, size: e.target.value }))} type="text" placeholder="Number of Rooms / Villas" className="w-full bg-white border border-[#1A1A1A]/15 px-4 py-3 font-inter text-sm text-[#1A1A1A] placeholder:text-[#6B6560] focus:border-[#2C5F7C]" />
            </div>
            <textarea value={partnerForm.notes} onChange={(e) => setPartnerForm((f) => ({ ...f, notes: e.target.value }))} placeholder="Tell us about your property, guest profile, and what you are looking for in a hospitality partner..." rows={4} className="w-full bg-white border border-[#1A1A1A]/15 px-4 py-3 font-inter text-sm text-[#1A1A1A] placeholder:text-[#6B6560] focus:border-[#2C5F7C] resize-none" />
            <button type="submit" className="w-full bg-[#2C5F7C] text-white font-inter font-semibold text-xs uppercase tracking-[2px] py-4 hover:bg-[#1E4A5E] transition-all flex items-center justify-center gap-2">
              <Send size={14} /> Send Partnership Request
            </button>
            <p className="text-xs text-[#8A8785] text-center mt-2">Opens WhatsApp with your details pre-filled to send to Marco.</p>
          </form>
        </div>
      </section>
    </div>
  )
}
