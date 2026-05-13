import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { ArrowRight, ChevronDown } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

/* ═══════════════════════════════════════════════════════════════
   LUXURY GATEWAY HOMEPAGE — "The Cover Page"
   Single full-screen hero image. Centered logo. Scroll reveals
   three editorial pathways. No gimmicks. Restraint = luxury.
   ═══════════════════════════════════════════════════════════════ */

function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 })
    tl.fromTo('.hero-logo', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' })
    tl.fromTo('.hero-line', { scaleX: 0 }, { scaleX: 1, duration: 1, ease: 'power3.out' }, '-=0.5')
    tl.fromTo('.hero-tagline', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.6')
    tl.fromTo('.hero-location', { opacity: 0 }, { opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.4')
    tl.fromTo('.hero-nav', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.3')
    tl.fromTo('.hero-scroll', { opacity: 0 }, { opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.2')
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative h-[100dvh] w-full overflow-hidden bg-[#050505]"
    >
      {/* Background Image — single, full-bleed, cinematic */}
      <div className="absolute inset-0">
        <img
          src="/hero-home.jpg"
          alt="Luxury private dining at a Bali villa"
          className="w-full h-full object-cover"
          style={{ opacity: 0.6 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(5,5,5,0.2) 0%, rgba(5,5,5,0.5) 100%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-48"
          style={{
            background: 'linear-gradient(to top, rgba(5,5,5,0.7) 0%, rgba(5,5,5,0) 100%)',
          }}
        />
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <h1
          className="hero-logo font-playfair font-bold text-white tracking-[6px] md:tracking-[10px] mb-6"
          style={{
            fontSize: 'clamp(32px, 6vw, 64px)',
            opacity: 0,
            textShadow: '0 2px 40px rgba(0,0,0,0.4)',
          }}
        >
          myCHEF
        </h1>

        <div
          className="hero-line w-16 md:w-24 h-[1px] mb-6"
          style={{
            backgroundColor: '#D4AF37',
            transformOrigin: 'center',
            transform: 'scaleX(0)',
          }}
        />

        <p
          className="hero-tagline font-cormorant text-white/80 text-lg md:text-xl lg:text-2xl font-light tracking-[2px] mb-4"
          style={{ opacity: 0 }}
        >
          Private Chef Experiences
        </p>

        <p
          className="hero-location font-inter text-white/40 text-xs md:text-sm uppercase tracking-[4px]"
          style={{ opacity: 0 }}
        >
          Bali, Indonesia
        </p>
      </div>

      {/* Bottom Navigation */}
      <div
        className="hero-nav absolute bottom-20 left-0 right-0 z-10 flex items-center justify-center gap-8 md:gap-12 px-6"
        style={{ opacity: 0 }}
      >
        <Link to="/Italian-fine-dining-villa" className="font-inter text-white/60 hover:text-[#D4AF37] text-xs md:text-sm uppercase tracking-[3px] transition-colors duration-500">
          Fine Dining
        </Link>
        <span className="w-[1px] h-3 bg-white/20" />
        <Link to="/Catering-villa" className="font-inter text-white/60 hover:text-[#D4AF37] text-xs md:text-sm uppercase tracking-[3px] transition-colors duration-500">
          Villa Catering
        </Link>
        <span className="w-[1px] h-3 bg-white/20" />
        <Link to="/Events-services-villa" className="font-inter text-white/60 hover:text-[#D4AF37] text-xs md:text-sm uppercase tracking-[3px] transition-colors duration-500">
          Events
        </Link>
        <span className="w-[1px] h-3 bg-white/20" />
        <Link to="/contact" className="font-inter text-white/60 hover:text-[#D4AF37] text-xs md:text-sm uppercase tracking-[3px] transition-colors duration-500">
          Contact
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2" style={{ opacity: 0 }}>
        <div className="w-[1px] h-6 bg-white/30 animate-pulse" />
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   PATHWAYS — Three premium entry points
   All white background. Consistent styling. Clean transitions.
   ═══════════════════════════════════════════════════════════════ */
function PathwaysSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const pathways = [
    {
      image: '/pathway-fine-dining.jpg',
      label: 'Italian Fine Dining Villa',
      tag: 'INTIMATE DINNERS',
      accent: '#D4AF37',
      description: 'Michelin-inspired multi-course menus served in the privacy of your villa. Handcrafted by our executive chef, with seasonal menus that change every two months.',
      price: 'From IDR 2.2M per guest',
      link: '/Italian-fine-dining-villa',
    },
    {
      image: '/pathway-catering.jpg',
      label: 'Villa Catering',
      tag: 'DAILY CHEF SERVICE',
      accent: '#D4AF37',
      description: 'Your private chef for the duration of your stay. Breakfast, lunch, dinner — all prepared fresh in your villa. From four days to several months.',
      price: 'From IDR 600,000 per hour',
      link: '/Catering-villa',
    },
    {
      image: '/pathway-events.jpg',
      label: 'Events Services Villa',
      tag: 'FULL-SCALE EVENTS',
      accent: '#2C5F7C',
      description: 'Weddings, celebrations, corporate retreats — fully managed with chefs, bartenders, waiters, and complete event coordination.',
      price: 'Custom quoted',
      link: '/Events-services-villa',
    },
  ]

  useGSAP(() => {
    gsap.fromTo('.pathway-item', { y: 80, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.25,
      scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', once: true },
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} style={{ backgroundColor: '#FFFFFF' }} className="pt-20 md:pt-28">
      {/* Section header */}
      <div className="text-center mb-16 md:mb-20 px-6">
        <p className="font-cormorant text-[#9A8E84] text-sm uppercase tracking-[4px] mb-4">Choose Your Experience</p>
        <h2 className="font-playfair font-bold text-[#1A1A1A] text-3xl md:text-4xl lg:text-5xl mb-4">
          Three Ways to Dine Extraordinarily
        </h2>
        <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mb-4" />
        <p className="font-inter text-[#6B5B4E] text-sm max-w-[500px] mx-auto">
          Each experience is designed for a different moment. Select the one that matches your occasion.
        </p>
      </div>
      {pathways.map((p, i) => (
        <div key={p.label}>
          <div
            className="pathway-item relative flex items-center"
            style={{ opacity: 0, minHeight: '70vh' }}
          >
            <div className="flex flex-col md:flex-row w-full max-w-container-lg mx-auto px-6 md:px-12">
              {/* Image — order alternates */}
              <div className={`md:w-1/2 ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.label}
                    className="w-full aspect-[4/3] md:aspect-square object-cover hover:scale-[1.02] transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Text */}
              <div className={`md:w-1/2 flex items-center ${i % 2 === 1 ? 'md:order-1 md:pr-16' : 'md:pl-16'} py-12 md:py-0`}>
                <div className="max-w-[420px]">
                  <p
                    className="font-cormorant font-semibold text-xs uppercase tracking-[4px] mb-4"
                    style={{ color: p.accent }}
                  >
                    {p.tag}
                  </p>
                  <h2 className="font-playfair font-bold text-[#1A1A1A] text-3xl md:text-4xl lg:text-[42px] mb-4" style={{ lineHeight: 1.1 }}>
                    {p.label}
                  </h2>
                  <div className="w-12 h-[1px] mb-5" style={{ backgroundColor: p.accent }} />
                  <p className="font-inter text-[#4A4745] text-[15px] leading-relaxed mb-3">
                    {p.description}
                  </p>
                  <p className="font-cormorant italic text-[#1A1A1A]/50 text-base mb-8">
                    {p.price}
                  </p>
                  <Link
                    to={p.link}
                    className="inline-flex items-center gap-3 font-inter text-xs uppercase tracking-[2px] text-[#1A1A1A] hover:gap-5 group transition-all duration-300"
                  >
                    <span>Explore</span>
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Subtle divider between pathways (not after last one) */}
          {i < pathways.length - 1 && (
            <div className="flex justify-center py-4">
              <div className="w-16 h-[1px] bg-[#1A1A1A]/10" />
            </div>
          )}
        </div>
      ))}
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   TESTIMONIAL — Single powerful quote
   ═══════════════════════════════════════════════════════════════ */
function TestimonialSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo('.testimonial-content', { y: 50, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-24 md:py-32 lg:py-40" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="testimonial-content max-w-[800px] mx-auto px-8 text-center" style={{ opacity: 0 }}>
        <p className="font-cormorant text-[#D4AF37] text-lg mb-8">&ldquo;</p>
        <blockquote className="font-playfair text-white text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-8">
          We celebrated our anniversary with myCHEF and it was hands down the best meal we&apos;ve ever had — anywhere in the world.
        </blockquote>
        <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mb-6" />
        <p className="font-inter text-white/50 text-sm uppercase tracking-[3px]">
          Sarah &amp; James, London
        </p>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   PROCESS — Three steps, minimal
   ═══════════════════════════════════════════════════════════════ */
function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const steps = [
    { num: '01', title: 'Choose', desc: 'Select the experience that matches your occasion.' },
    { num: '02', title: 'Connect', desc: 'Share your dates, guest count, and preferences. We handle the rest.' },
    { num: '03', title: 'Savor', desc: 'Your chef arrives, prepares, serves, and cleans. You simply enjoy.' },
  ]

  useGSAP(() => {
    gsap.fromTo('.process-header', { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
    })
    gsap.fromTo('.process-step-item', { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.2,
      scrollTrigger: { trigger: '.process-grid', start: 'top 80%', once: true },
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-24 md:py-32" style={{ backgroundColor: '#F5F3EF' }}>
      <div className="max-w-container-lg mx-auto px-8 md:px-16">
        <div className="process-header text-center mb-16 md:mb-20" style={{ opacity: 0 }}>
          <p className="font-cormorant text-xs uppercase tracking-[4px] text-[#9A8E84] mb-4">How It Works</p>
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-[#1A1A1A]">Three Simple Steps</h2>
        </div>
        <div className="process-grid grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step) => (
            <div key={step.num} className="process-step-item text-center md:text-left" style={{ opacity: 0 }}>
              <p className="font-playfair text-5xl md:text-6xl font-bold text-[#D4AF37] opacity-20 mb-4">{step.num}</p>
              <h4 className="font-playfair font-semibold text-xl text-[#1A1A1A] mb-3">{step.title}</h4>
              <p className="font-inter text-sm text-[#6B5B4E] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   HOMEPAGE SEO FAQ — Large searchable FAQ for Google
   ═══════════════════════════════════════════════════════════════ */
function HomeFaqSection() {
  const [open, setOpen] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo('.faq-item', { y: 30, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', stagger: 0.1,
      scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
    })
  }, { scope: ref })

  const faqs = [
    { q: 'What is myCHEF.id?', a: 'myCHEF.id is Bali\'s leading private chef and hospitality platform. With 50+ team members and 8+ years of operation, we provide fine dining experiences, villa catering, and full-service event hospitality across Bali. Our team of certified chefs, bartenders, and service professionals delivers restaurant-quality experiences in the privacy of your villa.' },
    { q: 'How much does a private chef cost in Bali?', a: 'Private chef pricing depends on the service. Fine dining experiences start from IDR 2.2M per guest. Villa catering starts from IDR 600,000 per hour. Event services are custom-quoted based on guest count and requirements. Contact us on WhatsApp for a personalized quote.' },
    { q: 'Which areas of Bali do you serve?', a: 'We serve all major villa areas across Bali including Seminyak, Canggu, Ubud, Uluwatu, Jimbaran, Nusa Dua, Sanur, and surrounding areas. Our team travels to your villa with all necessary equipment and ingredients.' },
    { q: 'What services does myCHEF offer?', a: 'We offer three main services: Italian Fine Dining Villa (Michelin-inspired private dining), Villa Catering (daily chef service for your stay), and Events Services (full-service event hospitality including weddings, corporate events, and celebrations). We also partner with luxury hotels and villas across Bali.' },
    { q: 'How far in advance should I book?', a: 'Fine dining: 2 weeks recommended. Villa catering: 1-2 weeks. Events: 2-3 months for weddings, 3-4 weeks for smaller events. Last-minute bookings are sometimes possible — contact us on WhatsApp and we will do our best.' },
    { q: 'Do you provide staff for events?', a: 'Yes. Our events team includes professional chefs, bartenders, waiters, event coordinators, and support staff. We provide everything from intimate dinner service for 10 guests to full-scale events for 200+ guests.' },
    { q: 'Can you accommodate dietary restrictions?', a: 'Absolutely. All our chefs are experienced in handling dietary requirements including vegetarian, vegan, gluten-free, dairy-free, nut allergies, halal, kosher, and more. Every menu is built from scratch around your needs.' },
    { q: 'What makes myCHEF different from other private chef services?', a: 'Scale and experience. With 50+ team members, 8+ years in Bali, 500+ villas served, and a 4.9 rating, we are the most established private chef platform in Bali. We are not a freelancer marketplace — we are a professional hospitality company with certified staff, quality control systems, and insurance coverage.' },
    { q: 'Do you offer yacht events in Bali?', a: 'Yes. We provide full catering and hospitality services for yacht events in Bali. Our team can board your vessel with everything needed for an extraordinary dining experience at sea — from intimate dinners to celebration events.' },
    { q: 'Can hotels and villas partner with myCHEF?', a: 'Yes. We partner with luxury villas, boutique hotels, wellness retreats, and private estates across Bali. Our partnership program includes certified chef placement, quality control systems, insurance coverage, and dedicated account management. Visit our Partners page to learn more.' },
  ]

  return (
    <section ref={ref} className="py-20 md:py-28 px-8" style={{ backgroundColor: '#F8F7F5' }}>
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-12">
          <p className="font-cormorant text-[#D4AF37] text-sm uppercase tracking-[4px] mb-4">FAQ</p>
          <h2 className="font-playfair font-bold text-[#1A1A1A] text-3xl md:text-4xl mb-4">
            Everything About Private Chefs in Bali
          </h2>
          <p className="font-inter text-[#6B5B4E] text-sm">
            The most common questions we receive — answered in detail.
          </p>
        </div>
        <div>
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item border-b border-[#1A1A1A]/10" style={{ opacity: 0 }}>
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between py-5 text-left group">
                <span className="font-inter text-[#1A1A1A] text-sm pr-4 group-hover:text-[#D4AF37] transition-colors">{faq.q}</span>
                <ChevronDown size={16} className={`text-[#9A8E84] flex-shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all ${open === i ? 'max-h-[500px] pb-5' : 'max-h-0'}`}>
                <p className="font-inter text-[#6B5B4E] text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   CTA BANNER
   ═══════════════════════════════════════════════════════════════ */
function CTABannerSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo('.cta-content', { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-20 md:py-24" style={{ backgroundColor: '#050505' }}>
      <div className="cta-content max-w-[700px] mx-auto px-8 text-center" style={{ opacity: 0 }}>
        <h2 className="font-playfair font-bold text-2xl md:text-3xl lg:text-4xl text-[#F5F3EF] mb-4">
          Ready to Experience Something Extraordinary?
        </h2>
        <p className="font-inter text-sm text-white/40 mb-10">
          Available across Bali: Seminyak, Canggu, Ubud, Uluwatu, Sanur, Nusa Dua
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact" className="w-full sm:w-auto bg-[#D4AF37] text-[#050505] font-inter font-semibold text-xs uppercase tracking-[2px] px-10 py-4 hover:bg-[#E8C84B] transition-all duration-300 text-center">
            Contact Us
          </Link>
          <a href="https://wa.me/6282237565997?text=Hi%20myCHEF%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20services." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto border border-white/20 text-white/60 font-inter text-xs uppercase tracking-[2px] px-10 py-[14px] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 text-center">
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   MAIN HOME PAGE
   ═══════════════════════════════════════════════════════════════ */
/* ═══════════════════════════════════════════════════════════════
   PARTNER LOGOS STRIP
   ═══════════════════════════════════════════════════════════════ */
function PartnerLogosSection() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo('.partner-logo-item', { opacity: 0 }, {
      opacity: 1, duration: 0.6, ease: 'power2.out', stagger: 0.1,
      scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
    })
  }, { scope: ref })

  const partners = [
    'The Edge Bali', 'Alila Villas', 'Amanusa', 'Bvlgari Resort',
    'COMO Shambhala', 'Four Seasons', 'Mandapa', 'Viceroy Bali',
  ]

  return (
    <section ref={ref} className="py-12 px-8 border-b border-[#E5E3E0]" style={{ backgroundColor: '#F8F7F5' }}>
      <div className="max-w-container-lg mx-auto">
        <p className="font-inter text-[#9A8E84] text-xs uppercase tracking-[2px] text-center mb-6">Trusted by Bali&apos;s leading properties</p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {partners.map((p) => (
            <span key={p} className="partner-logo-item font-playfair text-[#8A8785] text-sm md:text-base opacity-0">{p}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   MAIN HOME PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <PathwaysSection />
      <PartnerLogosSection />
      <TestimonialSection />
      <ProcessSection />
      <HomeFaqSection />
      <CTABannerSection />
    </div>
  )
}
