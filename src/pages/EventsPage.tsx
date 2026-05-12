import { useRef, useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { Star, Send, Check, ChevronDown, Wine, Users, ChefHat, Music, Flower2, GlassWater } from 'lucide-react'
import GoldArc from '../components/GoldArc'

gsap.registerPlugin(ScrollTrigger)

/* ═══════════════════════════════════════════════════════════════
   EVENTS PAGE — Events Services Villa
   Rich content: weddings, corporate, packages, staff, FAQ,
   testimonials, complete event services. Professional, capable.
   ═══════════════════════════════════════════════════════════════ */

const eventTypes = [
  { title: 'Weddings', desc: 'From intimate villa ceremonies to grand celebrations for 200+ guests. Full catering, cocktail service, staffing, and event coordination.', icon: <Flower2 size={24} /> },
  { title: 'Corporate Events', desc: 'Retreats, networking dinners, product launches, and company celebrations. Professional execution that reflects your brand.', icon: <Users size={24} /> },
  { title: 'Private Parties', desc: 'Birthdays, anniversaries, reunions, and milestone celebrations. Custom menus, themed decor, and entertainment coordination.', icon: <Wine size={24} /> },
  { title: 'Wellness Retreats', desc: 'Healthy, nourishing meals for retreat groups. Vegan, raw, Ayurvedic, and cleanse-focused menus designed for wellness.', icon: <ChefHat size={24} /> },
  { title: 'Villa Celebrations', desc: 'Special occasions in Bali villas — engagement parties, baby showers, graduation dinners. We make every moment memorable.', icon: <GlassWater size={24} /> },
  { title: 'Destination Events', desc: 'Full-service event planning for international guests. We coordinate everything from airport transfers to the final toast.', icon: <Music size={24} /> },
]

const staffingItems = [
  { title: 'Private Chefs', desc: 'Executive chefs, sous chefs, and specialist cooks for any cuisine style or dietary requirement.' },
  { title: 'Bartenders', desc: 'Professional mixologists crafting signature cocktails, classic drinks, and mocktails for your event.' },
  { title: 'Waiters & Servers', desc: 'Experienced front-of-house team trained in fine dining service. Attentive, professional, discreet.' },
  { title: 'Glassware & Barware', desc: 'Premium crystal glassware, cocktail shakers, bar tools, and specialty drinkware for any event style.' },
  { title: 'Tables & Chairs', desc: 'Elegant table setups with premium linens, fine china, and comfortable seating arrangements.' },
  { title: 'Sound Systems', desc: 'Professional audio equipment for speeches, music, and ambient sound throughout your event.' },
  { title: 'Decor & Florals', desc: 'Stunning floral arrangements, table centerpieces, and event styling to match your vision.' },
  { title: 'Live Cooking Stations', desc: 'Interactive food stations where guests watch our chefs prepare fresh dishes to order.' },
]

const packages = [
  {
    name: 'Intimate Gathering',
    guests: '10-30 guests',
    price: 'From IDR 35M',
    features: [
      'Private chef + 1 sous chef',
      'Multi-course menu (appetizer, mains, dessert)',
      'Cocktail hour with 2 signature drinks',
      '2 service staff',
      'Table setup with linens and glassware',
      'Complete cleanup',
    ],
  },
  {
    name: 'Villa Celebration',
    guests: '30-80 guests',
    price: 'From IDR 85M',
    features: [
      'Head chef + 2 sous chefs',
      'Premium multi-course menu',
      'Full cocktail bar with 4 signature drinks',
      '4 service staff + 2 bartenders',
      'Complete tableware and decor setup',
      'Sound system for music and speeches',
      'Event coordinator on-site',
      'Complete cleanup and breakdown',
    ],
  },
  {
    name: 'Grand Event',
    guests: '80-200+ guests',
    price: 'Custom Quote',
    features: [
      'Full culinary team (head chef + 4+ chefs)',
      'Custom-designed menu for your event',
      'Premium open bar with full cocktail menu',
      '8+ service staff + 4 bartenders',
      'Complete event design and styling',
      'Professional sound and lighting',
      'Dedicated event manager',
      'Pre-event planning and coordination',
      'Live cooking stations available',
      'Full breakdown and villa restoration',
    ],
  },
]

const planningSteps = [
  { title: 'Inquiry', desc: 'Tell us about your event — date, guest count, venue, and vision. We respond within 2 hours.' },
  { title: 'Discovery Call', desc: 'A detailed video call to understand every aspect of your event. We ask the right questions.' },
  { title: 'Custom Proposal', desc: 'A detailed proposal with menu options, staffing plan, timeline, and transparent pricing.' },
  { title: 'Planning & Prep', desc: 'We coordinate everything — menu finalization, staff allocation, equipment, decor, timeline.' },
  { title: 'The Event', desc: 'Our team arrives, sets up, executes flawlessly, and leaves your venue spotless. You enjoy the celebration.' },
]

const testimonials = [
  {
    quote: 'Our villa wedding for 65 guests was absolutely perfect. The food was incredible, the staff was invisible but always there when needed, and the bartenders made the best cocktails our guests had ever had. myCHEF handled everything.',
    name: 'Priya & Raj',
    detail: 'Villa Wedding, Uluwatu, 65 guests',
    rating: 5,
  },
  {
    quote: 'We hosted a 3-day corporate retreat for 40 senior managers. Every meal was different, every dietary restriction was handled perfectly, and the team was incredibly professional. Our CEO was impressed.',
    name: 'David Thompson',
    detail: 'Corporate Retreat, Nusa Dua, 40 guests',
    rating: 5,
  },
  {
    quote: 'We planned our 40th birthday party with 3 weeks notice. myCHEF delivered a full BBQ setup, live cooking station, cocktail bar, and the most incredible food. Our guests are still talking about it.',
    name: 'Isabella Martinez',
    detail: 'Milestone Birthday, Seminyak, 30 guests',
    rating: 5,
  },
  {
    quote: 'The 7-day wellness retreat would not have been the same without myCHEF. Chef David designed a plant-forward menu that had even the meat-eaters asking for recipes. Professional, reliable, and genuinely passionate.',
    name: 'Sarah Chen',
    detail: 'Wellness Retreat, Ubud, 25 guests',
    rating: 5,
  },
]

const faqs = [
  {
    question: 'How far in advance should I book an event?',
    answer: 'For weddings and large events (50+ guests), we recommend booking 2-3 months in advance. For smaller villa celebrations (10-30 guests), 3-4 weeks is usually sufficient. For last-minute events, contact us on WhatsApp — we have handled events with 1 week notice and delivered flawlessly.',
  },
  {
    question: 'What is included in the event package?',
    answer: 'Our event packages include everything food and hospitality-related: menu design and customization, all ingredients, chef team, service staff, bartenders, glassware, tableware, linens, setup, service throughout the event, and complete cleanup. Additional services like decor, sound systems, floral arrangements, and live stations can be added.',
  },
  {
    question: 'How does pricing work for events?',
    answer: 'Every event is custom-quoted based on guest count, menu complexity, service style, staffing needs, and duration. We provide transparent, itemized proposals so you know exactly what you are paying for. There are no hidden fees. Contact us for a detailed quote.',
  },
  {
    question: 'Can you handle dietary restrictions for large groups?',
    answer: 'Absolutely. We have extensive experience managing multiple dietary requirements at once — vegan, gluten-free, nut allergies, halal, kosher, and more. We create delicious alternatives for every restriction so no guest feels excluded.',
  },
  {
    question: 'Do you provide bartenders and drinks?',
    answer: 'Yes. Our professional bartenders craft signature cocktails, serve premium spirits and wines, and create beautiful mocktails. We can design a custom cocktail menu for your event or provide a full open bar. Alcohol can be included in the package or sourced separately.',
  },
  {
    question: 'What areas of Bali do you serve for events?',
    answer: 'We serve all major villa areas across Bali — Seminyak, Canggu, Uluwatu, Jimbaran, Nusa Dua, Sanur, Ubud, and beyond. Our team travels with all equipment and supplies. We have experience with cliff-front villas, beachfront venues, jungle retreats, and luxury estates.',
  },
  {
    question: 'How many staff do you provide?',
    answer: 'Staffing scales with your guest count. A typical 30-guest event has 2 chefs, 4 service staff, and 2 bartenders. A 100-guest wedding has 4+ chefs, 8+ service staff, 4 bartenders, and a dedicated event manager. We ensure the right staff-to-guest ratio for flawless service.',
  },
  {
    question: 'Can you also help with event decor and setup?',
    answer: 'Yes. We partner with Bali\'s best florists, decorators, and rental companies. We can coordinate table styling, floral arrangements, lighting, furniture rental, and themed decor. Our event manager oversees everything so you only deal with one contact.',
  },
  {
    question: 'What happens if something goes wrong on the day?',
    answer: 'Our event manager is on-site throughout your event with a contingency plan. We bring backup equipment, extra ingredients, and additional staff capacity. In 8+ years of events across Bali, we have never missed a beat. Your event is in experienced hands.',
  },
  {
    question: 'Why should I choose myCHEF over a restaurant for my event?',
    answer: 'A restaurant gives you a pre-set menu, limited space, and standard service. We give you a fully custom experience in your own villa — personalized menus, private setting, dedicated staff, and complete flexibility. Your guests get restaurant-quality food with villa-level comfort and exclusivity.',
  },
]

export default function EventsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 })
    tl.fromTo('.evt-hero-label', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' })
    tl.fromTo('.evt-hero-title', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.4')
    tl.fromTo('.evt-hero-sub', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.5')
    tl.fromTo('.evt-hero-cta', { opacity: 0 }, { opacity: 1, duration: 0.6 }, '-=0.2')
  }, [])

  useGSAP(() => {
    document.querySelectorAll('.evt-reveal').forEach((el) => {
      gsap.fromTo(el, { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 82%', once: true },
      })
    })
  }, { scope: pageRef })

  return (
    <div ref={pageRef} style={{ backgroundColor: '#F5F3EF' }}>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero-events.jpg" alt="Event services" className="w-full h-full object-cover" style={{ opacity: 0.35 }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(245,243,239,0.9) 0%, rgba(245,243,239,0.7) 40%, transparent 100%)' }} />
        </div>
        <div className="relative z-10 px-8 md:px-16 lg:px-20 py-24 max-w-[650px]">
          <p className="evt-hero-label font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[4px] mb-4" style={{ opacity: 0 }}>Events Services</p>
          <h1 className="evt-hero-title font-playfair font-bold text-[#1A1A1A] text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-4" style={{ opacity: 0 }}>
            Every Detail Handled.<br />Every Moment Perfect.
          </h1>
          <p className="evt-hero-sub font-inter text-[#4A4745] text-base mb-8 max-w-[480px]" style={{ opacity: 0 }}>
            Weddings, corporate events, celebrations, and retreats — fully managed by our 
            hospitality team of 50+ professionals. From intimate gatherings to grand villa events.
          </p>
          <div className="evt-hero-cta flex flex-col sm:flex-row gap-4" style={{ opacity: 0 }}>
            <a href="#inquire" className="bg-[#2C5F7C] text-white font-inter font-semibold text-xs uppercase tracking-[2px] px-8 py-4 hover:bg-[#1E4A5E] transition-all text-center">
              Plan Your Event
            </a>
            <Link to="/contact" className="border border-[#1A1A1A]/20 text-[#1A1A1A] font-inter text-xs uppercase tracking-[2px] px-8 py-[14px] hover:border-[#2C5F7C] hover:text-[#2C5F7C] transition-all text-center">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ TRUST SIGNALS ═══ */}
      <section className="evt-reveal py-14 px-8 border-b border-[#1A1A1A]/5" style={{ opacity: 0 }}>
        <div className="max-w-container-lg mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><p className="font-playfair font-bold text-[#2C5F7C] text-3xl md:text-4xl mb-2">8+</p><p className="font-inter text-[#4A4745] text-xs uppercase tracking-[2px]">Years in Bali</p></div>
            <div><p className="font-playfair font-bold text-[#2C5F7C] text-3xl md:text-4xl mb-2">50+</p><p className="font-inter text-[#4A4745] text-xs uppercase tracking-[2px]">Team Members</p></div>
            <div><p className="font-playfair font-bold text-[#2C5F7C] text-3xl md:text-4xl mb-2">200+</p><p className="font-inter text-[#4A4745] text-xs uppercase tracking-[2px]">Events Delivered</p></div>
            <div><p className="font-playfair font-bold text-[#2C5F7C] text-3xl md:text-4xl mb-2">4.9</p><p className="font-inter text-[#4A4745] text-xs uppercase tracking-[2px]">Client Rating</p></div>
          </div>
        </div>
      </section>

      {/* ═══ EVENT TYPES ═══ */}
      <section className="evt-reveal py-20 md:py-28 px-8" style={{ opacity: 0 }}>
        <div className="max-w-container-lg mx-auto">
          <div className="text-center mb-14">
            <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[4px] mb-4">What We Do</p>
            <h2 className="font-playfair font-bold text-[#1A1A1A] text-3xl md:text-4xl mb-4">Events We Bring to Life</h2>
            <p className="font-inter text-[#4A4745] text-sm max-w-[500px] mx-auto">
              Every event is unique. Here is how we can help make yours extraordinary.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventTypes.map((et) => (
              <div key={et.title} className="bg-white p-6 border border-[#E5E3E0] hover:border-[#2C5F7C]/30 transition-all">
                <div className="text-[#2C5F7C] mb-3">{et.icon}</div>
                <h4 className="font-playfair font-semibold text-[#1A1A1A] text-base mb-2">{et.title}</h4>
                <p className="font-inter text-[#4A4745] text-sm leading-relaxed">{et.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WEDDINGS ═══ */}
      <section className="evt-reveal py-20 md:py-28 px-8" style={{ backgroundColor: '#FFFFFF', opacity: 0 }}>
        <div className="max-w-container-lg mx-auto">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
            <div className="md:w-1/2">
              <img src="/wedding-reception.jpg" alt="Bali villa wedding" className="w-full aspect-[4/3] object-cover" loading="lazy" />
            </div>
            <div className="md:w-1/2">
              <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[4px] mb-4">Weddings</p>
              <h2 className="font-playfair font-bold text-[#1A1A1A] text-3xl md:text-4xl mb-6 leading-[1.1]">
                Your Dream Wedding,<br />in a Bali Villa
              </h2>
              <GoldArc className="mb-6" />
              <div className="space-y-4 font-inter text-[#4A4745] text-sm leading-relaxed">
                <p>We have catered over 200 weddings across Bali&apos;s most beautiful villas — from cliff-front ceremonies in Uluwatu to garden celebrations in Ubud. Every wedding is unique, and we treat it that way.</p>
                <p>Our wedding service includes: custom menu design (multi-course dining, cocktail hour, late-night snacks), full bar service with signature cocktails, complete staffing (chefs, bartenders, servers, event manager), elegant table setup with premium linens and glassware, and coordination with your wedding planner.</p>
                <p>Whether it is an intimate ceremony for 20 or a grand celebration for 200, our team delivers flawless execution so you can focus on saying &ldquo;I do.&rdquo;</p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-2"><Check size={14} className="text-[#2C5F7C]" /><span className="font-inter text-[#4A4745] text-xs">Multi-course menus</span></div>
                <div className="flex items-center gap-2"><Check size={14} className="text-[#2C5F7C]" /><span className="font-inter text-[#4A4745] text-xs">Signature cocktails</span></div>
                <div className="flex items-center gap-2"><Check size={14} className="text-[#2C5F7C]" /><span className="font-inter text-[#4A4745] text-xs">Full staffing team</span></div>
                <div className="flex items-center gap-2"><Check size={14} className="text-[#2C5F7C]" /><span className="font-inter text-[#4A4745] text-xs">Elegant table setup</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CORPORATE EVENTS ═══ */}
      <section className="evt-reveal py-20 md:py-28 px-8" style={{ opacity: 0 }}>
        <div className="max-w-container-lg mx-auto">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
            <div className="md:w-1/2 order-2 md:order-1">
              <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[4px] mb-4">Corporate Events</p>
              <h2 className="font-playfair font-bold text-[#1A1A1A] text-3xl md:text-4xl mb-6 leading-[1.1]">
                Impress Your Team.<br />Elevate Your Brand.
              </h2>
              <GoldArc className="mb-6" />
              <div className="space-y-4 font-inter text-[#4A4745] text-sm leading-relaxed">
                <p>Corporate retreats, networking dinners, product launches, and company celebrations — we understand that your event reflects your brand. Our corporate event service is designed to impress.</p>
                <p>We provide: tailored menus designed around your schedule, dietary accommodation for all participants, professional service staff trained for corporate environments, cocktail receptions and networking hours, presentation-friendly dining formats, and detailed invoicing for expense management.</p>
                <p>From a 12-person leadership dinner to a 100-person company retreat, we deliver the professionalism your event demands.</p>
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <img src="/corporate-event.jpg" alt="Corporate event" className="w-full aspect-[4/3] object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PACKAGES ═══ */}
      <section className="evt-reveal py-20 md:py-28 px-8" style={{ backgroundColor: '#FFFFFF', opacity: 0 }}>
        <div className="max-w-container-lg mx-auto">
          <div className="text-center mb-14">
            <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[4px] mb-4">Packages</p>
            <h2 className="font-playfair font-bold text-[#1A1A1A] text-3xl md:text-4xl mb-4">Complete Event Packages</h2>
            <p className="font-inter text-[#4A4745] text-sm max-w-[500px] mx-auto">
              Three tiers designed for different event sizes. Every package is customizable.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.name} className="border border-[#E5E3E0] p-6 md:p-8 hover:border-[#2C5F7C]/30 transition-all">
                <p className="font-cormorant text-[#2C5F7C] text-xs uppercase tracking-[3px] mb-2">{pkg.guests}</p>
                <h3 className="font-playfair font-semibold text-[#1A1A1A] text-xl mb-1">{pkg.name}</h3>
                <p className="font-playfair font-bold text-[#2C5F7C] text-2xl mb-4">{pkg.price}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check size={14} className="text-[#2C5F7C] mt-1 flex-shrink-0" />
                      <span className="font-inter text-[#4A4745] text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#inquire" className="font-inter text-xs uppercase tracking-[2px] text-[#2C5F7C] hover:text-[#1E4A5E] transition-colors">
                  Get This Package
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STAFFING & RENTALS ═══ */}
      <section className="evt-reveal py-20 md:py-28 px-8" style={{ backgroundColor: '#1A1A1A', opacity: 0 }}>
        <div className="max-w-container-lg mx-auto">
          <div className="text-center mb-14">
            <p className="font-cormorant text-[#D4AF37] text-sm uppercase tracking-[4px] mb-4">Our Team</p>
            <h2 className="font-playfair font-bold text-[#F5F3EF] text-3xl md:text-4xl mb-4">Everything Your Event Needs</h2>
            <p className="font-inter text-[#9A9590] text-sm max-w-[500px] mx-auto">
              A team of 50+ hospitality professionals. One coordinated crew.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {staffingItems.map((s) => (
              <div key={s.title} className="border border-[#F5F3EF]/10 p-5 hover:border-[#D4AF37]/30 transition-all">
                <h4 className="font-playfair font-semibold text-[#F5F3EF] text-sm mb-1">{s.title}</h4>
                <p className="font-inter text-[#9A9590] text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PLANNING PROCESS ═══ */}
      <section className="evt-reveal py-20 md:py-28 px-8" style={{ opacity: 0 }}>
        <div className="max-w-container-lg mx-auto">
          <div className="text-center mb-14">
            <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[4px] mb-4">Our Process</p>
            <h2 className="font-playfair font-bold text-[#1A1A1A] text-3xl md:text-4xl mb-4">From First Message to Final Toast</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {planningSteps.map((step, i) => (
              <div key={step.title} className="text-center">
                <div className="w-10 h-10 rounded-full bg-[#2C5F7C] flex items-center justify-center mx-auto mb-4">
                  <span className="font-playfair text-white text-sm font-bold">{i + 1}</span>
                </div>
                <h4 className="font-playfair font-semibold text-[#1A1A1A] text-sm mb-2">{step.title}</h4>
                <p className="font-inter text-[#4A4745] text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="evt-reveal py-20 md:py-28 px-8" style={{ backgroundColor: '#FFFFFF', opacity: 0 }}>
        <div className="max-w-container-lg mx-auto">
          <div className="text-center mb-12">
            <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[4px] mb-4">Client Stories</p>
            <h2 className="font-playfair font-bold text-[#1A1A1A] text-3xl md:text-4xl">What Event Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="border border-[#E5E3E0] p-6 md:p-8 bg-white">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-[#D4AF37] fill-[#D4AF37]" />
                  ))}
                </div>
                <p className="font-playfair italic text-[#1A1A1A] text-base leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                <p className="font-inter text-[#1A1A1A] text-sm font-medium">{t.name}</p>
                <p className="font-inter text-[#8A8785] text-xs">{t.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="evt-reveal py-20 md:py-28 px-8" style={{ opacity: 0 }}>
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-12">
            <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[4px] mb-4">Questions</p>
            <h2 className="font-playfair font-bold text-[#1A1A1A] text-3xl md:text-4xl">Frequently Asked</h2>
          </div>
          <div>
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-[#1A1A1A]/10">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between py-5 text-left group">
                  <span className="font-inter text-[#1A1A1A] text-sm pr-4 group-hover:text-[#2C5F7C] transition-colors">{faq.question}</span>
                  <ChevronDown size={16} className={`text-[#8A8785] flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all ${openFaq === i ? 'max-h-[500px] pb-5' : 'max-h-0'}`}>
                  <p className="font-inter text-[#4A4745] text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INQUIRY FORM ═══ */}
      <section id="inquire" className="evt-reveal py-20 md:py-28 px-8" style={{ backgroundColor: '#FFFFFF', opacity: 0 }}>
        <div className="max-w-[700px] mx-auto">
          <div className="text-center mb-10">
            <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[4px] mb-4">Get Started</p>
            <h2 className="font-playfair font-bold text-[#1A1A1A] text-3xl md:text-4xl mb-4">Plan Your Event</h2>
            <p className="font-inter text-[#4A4745] text-sm">Tell us about your event and we will create a custom proposal within 24 hours.</p>
          </div>
          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input type="text" placeholder="Your Name *" className="w-full bg-transparent border border-[#1A1A1A]/15 px-4 py-3 font-inter text-sm text-[#1A1A1A] placeholder:text-[#8A8785] focus:border-[#2C5F7C] focus:outline-none" />
              <input type="email" placeholder="Email *" className="w-full bg-transparent border border-[#1A1A1A]/15 px-4 py-3 font-inter text-sm text-[#1A1A1A] placeholder:text-[#8A8785] focus:border-[#2C5F7C] focus:outline-none" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input type="tel" placeholder="Phone / WhatsApp" className="w-full bg-transparent border border-[#1A1A1A]/15 px-4 py-3 font-inter text-sm text-[#1A1A1A] placeholder:text-[#8A8785] focus:border-[#2C5F7C] focus:outline-none" />
              <input type="text" placeholder="Event Date" className="w-full bg-transparent border border-[#1A1A1A]/15 px-4 py-3 font-inter text-sm text-[#1A1A1A] placeholder:text-[#8A8785] focus:border-[#2C5F7C] focus:outline-none" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <select className="w-full bg-transparent border border-[#1A1A1A]/15 px-4 py-3 font-inter text-sm text-[#8A8785] focus:border-[#2C5F7C] focus:outline-none">
                <option value="">Event Type</option>
                <option>Wedding</option>
                <option>Corporate Event</option>
                <option>Private Party</option>
                <option>Birthday</option>
                <option>Retreat</option>
                <option>Other</option>
              </select>
              <select className="w-full bg-transparent border border-[#1A1A1A]/15 px-4 py-3 font-inter text-sm text-[#8A8785] focus:border-[#2C5F7C] focus:outline-none">
                <option value="">Guest Count</option>
                <option>10-30</option>
                <option>31-60</option>
                <option>61-100</option>
                <option>100+</option>
              </select>
              <select className="w-full bg-transparent border border-[#1A1A1A]/15 px-4 py-3 font-inter text-sm text-[#8A8785] focus:border-[#2C5F7C] focus:outline-none">
                <option value="">Villa Location</option>
                <option>Seminyak</option>
                <option>Canggu</option>
                <option>Uluwatu</option>
                <option>Ubud</option>
                <option>Nusa Dua</option>
                <option>Other</option>
              </select>
            </div>
            <textarea placeholder="Tell us about your event, vision, dietary requirements, and any questions..." rows={4} className="w-full bg-transparent border border-[#1A1A1A]/15 px-4 py-3 font-inter text-sm text-[#1A1A1A] placeholder:text-[#8A8785] focus:border-[#2C5F7C] focus:outline-none resize-none" />
            <button type="submit" className="w-full bg-[#2C5F7C] text-white font-inter font-semibold text-xs uppercase tracking-[2px] py-4 hover:bg-[#1E4A5E] transition-all flex items-center justify-center gap-2">
              <Send size={14} /> Request a Proposal
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
