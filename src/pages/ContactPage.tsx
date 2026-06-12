import { useState } from 'react'
import { MessageCircle, Mail, MapPin, Phone, ArrowRight } from 'lucide-react'
import SeoHead, { localBusinessSchema, breadcrumbSchema, aggregateRatingSchema, faqPageSchema } from '@/components/SeoHead'
import { getPageMeta } from '@/data/page-meta'
import SectionHeader from '@/components/catering/SectionHeader'
import FAQAccordion from '@/components/catering/FAQAccordion'
import { ContactRiskReversal } from '@/components/shared'

const WA = 491635080236

interface Concierge {
  id: 'sofia' | 'daniel' | 'olivia' | 'marco'
  name: string
  role: string
  area: string
  desc: string
  portrait: string
  accent: string
  /** Pre-filled WhatsApp message text for this concierge. */
  message: string
}

const FAQS = [
  { q: 'How do I contact myCHEF?', a: 'The fastest way is WhatsApp at +49 163 5080236. You can also email indonesia@mychef.id or call the same number. We usually reply within minutes on WhatsApp.' },
  { q: 'Who is Sofia and what does she handle?', a: 'Sofia is our Fine Dining Concierge. She handles tasting-menu reservations, dietary preferences, wine pairings, and fine-dining experiences at your villa.' },
  { q: 'How quickly will myCHEF respond?', a: 'We typically reply within minutes on WhatsApp. For email enquiries, expect a response within a few hours during business hours.' },
  { q: 'Can I call instead of using WhatsApp?', a: 'Yes. You can call +49 163 5080236 directly. Our lines are open daily from 08:00 to 22:00 WITA.' },
  { q: 'What information should I include in my first message?', a: 'Let us know your name, the service you are interested in, your villa or location in Bali, group size, and preferred date. The more detail, the faster we can help.' },
  { q: 'Do you have an office I can visit in Bali?', a: 'Yes. Our office is at Jl. Tukad Barito Timur III No.16, Denpasar Selatan, Bali. We serve all of Bali including Seminyak, Canggu, Ubud, Uluwatu, and Sanur.' },
  { q: 'Can I email myCHEF instead?', a: 'Absolutely. Send detailed proposals or longer enquiries to indonesia@mychef.id and we will route them to the right concierge.' },
  { q: 'What are your business hours?', a: 'We are open daily from 08:00 to 22:00 WITA (Bali time). WhatsApp messages outside these hours are answered first thing the next morning.' },
]

const CONCIERGES: Concierge[] = [
  {
    id: 'sofia',
    name: 'Sofia',
    role: 'Fine Dining Concierge',
    area: 'Fine Dining',
    desc: 'Menus, dietary preferences, wine pairings, and reservations for our two tasting experiences in your villa.',
    portrait: '/generated/portrait-sofia.webp',
    accent: '#C5A028',
    message: "Hi myCHEF, I'd like to book a fine dining experience at my villa.",
  },
  {
    id: 'daniel',
    name: 'Daniel',
    role: 'Villa Chef Coordinator',
    area: 'Catering',
    desc: 'Daily chef bookings, meal plans, weekly stays, and matching the right chef to your kitchen.',
    portrait: '/generated/portrait-daniel.webp',
    accent: '#6B8E5A',
    message: "Hi Daniel, I'd like to book a private chef for my villa.",
  },
  {
    id: 'olivia',
    name: 'Olivia',
    role: 'Events Manager',
    area: 'Events',
    desc: 'Weddings, corporate events, retreats, and celebrations from intimate dinners to 200-guest receptions.',
    portrait: '/generated/portrait-olivia.webp',
    accent: '#2C5F7C',
    message: "Hi Olivia, I'd like to plan an event in Bali.",
  },
  {
    id: 'marco',
    name: 'Marco',
    role: 'Partnerships & Staffing',
    area: 'Partners & Staffing',
    desc: 'Villa partner program, long-term chef staffing, and corporate hospitality arrangements.',
    portrait: '/generated/portrait-marco.webp',
    accent: '#8B4513',
    message: "Hi Marco, I'd like to talk about a partnership / staffing arrangement.",
  },
]

const SERVICE_OPTIONS = [
  'Fine Dining',
  'Catering',
  'Events',
  'Partners & Staffing',
  'Not sure yet',
] as const

const INITIAL_FORM = {
  service: '',
  name: '',
  whatsapp: '',
  email: '',
  company: '',
  dates: '',
  location: '',
  guests: '',
  duration: '',
  dietary: '',
  message: '',
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState(INITIAL_FORM)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const lines = [
      ['Service Needed', form.service],
      ['Name', form.name],
      ['WhatsApp', form.whatsapp],
      ['Email', form.email],
      ['Company / Planner', form.company],
      ['Preferred Date(s)', form.dates],
      ['Villa / Venue', form.location],
      ['Group Size', form.guests],
      ['Stay Length / Event Duration', form.duration],
      ['Dietary / Cuisine Notes', form.dietary],
      ['Planning Notes', form.message],
    ]
      .filter(([, value]) => value.trim())
      .map(([label, value]) => `${label}: ${value}`)

    const text = encodeURIComponent(`Hi myCHEF,\n\nI need help with a booking inquiry.\n\n${lines.join('\n')}`)
    window.open(`https://wa.me/${WA}?text=${text}`, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title={getPageMeta('contact').title}
        description={getPageMeta('contact').description}
        canonical={getPageMeta('contact').canonical}
        ogImage={getPageMeta('contact').ogImage}
        jsonLd={[localBusinessSchema, aggregateRatingSchema(4.9, 560), breadcrumbSchema('Contact', getPageMeta('contact').canonical), faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a })))]}
      />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[68vh] flex items-end overflow-hidden">
        <img
          src="/generated/mychef-misc-bali-contact-hero.webp"
          alt="Luxury Bali villa terrace at golden hour with a concierge desk"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.88))', backdropFilter: 'blur(2px)' }}
        />
        <div className="relative z-10 px-6 md:px-12 pb-16 md:pb-24 pt-32 max-w-[1280px] mx-auto w-full text-white">
          <p
            className="text-[#C5A028] text-xs md:text-sm tracking-[0.35em] uppercase mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Contact
          </p>
          <h1
            className="text-[2.5rem] md:text-7xl lg:text-8xl leading-[1.05] mb-7 max-w-[900px]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            We&rsquo;ll reply within 1 hour on WhatsApp.
          </h1>
          <p className="text-base md:text-xl text-white/[75%] mb-10 max-w-[640px] leading-relaxed">
            Choose the right concierge below or send one quick WhatsApp message and we will route your booking request instantly.
          </p>
          <div className="flex items-center gap-3 text-[#C5A028] text-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-[#C5A028] animate-pulse" />
            <span style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '0.15em' }}>WhatsApp online now</span>
          </div>
        </div>
      </section>

      {/* ── RISK REVERSAL ─────────────────────────────────────────────── */}
      <ContactRiskReversal />

      {/* ── THE FOUR INDONESIAN LEADERS ───────────────────────────────── */}
      <section className="px-6 md:px-12 py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-end mb-12">
            <div>
              <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[0.35em] mb-4">Concierges</p>
              <h2 className="font-playfair text-4xl md:text-5xl leading-tight">The four leaders of myCHEF</h2>
            </div>
            <p className="text-[#4A4745] text-lg">
              Each of our four service areas has a dedicated Indonesian lead. You speak to a real person —
              one who knows the villa scene, the kitchens, and the people behind every booking.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONCIERGES.map((c) => {
              const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(c.message)}`
              return (
                <a
                  key={c.id}
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-source="contact-chef-card"
                  className="group block bg-white border border-[#E5E3E0] rounded-2xl overflow-hidden hover:border-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={c.portrait}
                      alt={`${c.name} — ${c.role}`}
                      width={480}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      style={{ objectPosition: 'center 18%' }}
                      loading="lazy"
                      decoding="async"
                    />
                    <div
                      className="absolute inset-x-0 bottom-0 h-20"
                      style={{ background: 'linear-gradient(to top, rgba(255,255,255,0.85), rgba(255,255,255,0))' }}
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-[10px] uppercase tracking-[0.25em] mb-1.5" style={{ color: c.accent, fontFamily: "'Cormorant Garamond', serif" }}>
                      {c.area}
                    </p>
                    <h3 className="font-playfair text-2xl mb-1">{c.name}</h3>
                    <p className="text-xs text-[#8A8785] uppercase tracking-wider mb-3">{c.role}</p>
                    <p className="text-sm text-[#4A4745] mb-4 min-h-[60px]">{c.desc}</p>
                    <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#1A1A1A] group-hover:text-[#C5A028] transition-colors">
                      <MessageCircle className="w-3.5 h-3.5" /> Chat on WhatsApp
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── DIRECT CONTACT STRIP ──────────────────────────────────────── */}
      <section className="bg-white px-6 md:px-12 py-16 md:py-20 border-y border-[#E5E3E0]">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <ContactItem icon={MessageCircle} label="WhatsApp" value="+49 163 5080236" href={`https://wa.me/${WA}`} hint="Fastest — typically within minutes" dataSource="contact-info-whatsapp" />
          <ContactItem icon={Mail} label="Email" value="indonesia@mychef.id" href="mailto:indonesia@mychef.id" hint="For detailed proposals" />
          <ContactItem icon={Phone} label="Phone" value="+49 163 5080236" href="tel:+491635080236" hint="08:00 – 22:00 WITA, daily" />
          <ContactItem icon={MapPin} label="Office" value="Jl. Tukad Barito Timur III No.16, Denpasar Selatan, Bali" hint="Serving all of Bali — Seminyak, Canggu, Ubud, Uluwatu, Sanur" />
        </div>
      </section>

      {/* ── GENERAL FORM ─────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left — concierge portrait */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#0A0A0A] order-2 md:order-1">
            <img
              src="/generated/mychef-misc-bali-contact-concierge.webp"
              alt="myCHEF concierge replying to a guest enquiry from the Bali office"
              width={800}
              height={1000}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              decoding="async" />
            {/* Soft gradient bottom so any future caption reads cleanly */}
            <div
              className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
              style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0) 0%, rgba(10,10,10,0.55) 100%)' }}
            />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-xs uppercase tracking-[0.3em] text-[#C5A028] mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Concierge Desk</p>
              <p className="text-sm text-white/[85%]">Bali, 08:00 – 22:00 WITA</p>
            </div>
          </div>

          {/* Right — form */}
          <div className="order-1 md:order-2">
            <div className="mb-6 rounded-2xl border border-[#E5E3E0] bg-white p-6 shadow-sm">
              <p className="text-sm text-[#4A4745] mb-4">Prefer to just message us? →</p>
              <a
                href={`https://wa.me/${WA}?text=${encodeURIComponent("Hi myCHEF, I'd like help with a booking in Bali.")}`}
                target="_blank"
                rel="noopener noreferrer"
                data-source="contact-quick-message"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C5A028] px-6 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-black transition-colors hover:bg-[#D4B43A] focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp myCHEF — Reply in 1 Hour
              </a>
              <p className="mt-3 text-xs text-[#8A8785] text-center">Fastest option for availability, menus, and pricing.</p>
            </div>

            <div className="mb-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-[#E5E3E0]" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#8A8785]">Form as secondary option</span>
              <div className="h-px flex-1 bg-[#E5E3E0]" />
            </div>

            <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[0.35em] mb-4">Need to send more detail?</p>
            <h2 className="font-playfair text-3xl md:text-4xl leading-tight mb-4">Send a detailed note</h2>
            <p className="text-[#4A4745] mb-8">
              We route it to the right person and reply on WhatsApp — usually within the hour.
            </p>

            {submitted ? (
              <div className="bg-[#FAFAF8] border border-[#E5E3E0] rounded-2xl p-8">
                <p className="font-playfair text-2xl mb-2">Message ready in WhatsApp.</p>
                <p className="text-sm text-[#4A4745] mb-6">Open WhatsApp on your device to hit send. We will reply shortly.</p>
                <button
                  type="button"
                  onClick={() => { setSubmitted(false); setForm(INITIAL_FORM) }}
                  className="text-xs uppercase tracking-[0.2em] text-[#8A8785] hover:text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1"
                >
                  Send another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 bg-[#FAFAF8] border border-[#E5E3E0] rounded-2xl p-7">
                <div className="grid md:grid-cols-2 gap-5">
                  <Field
                    label="Service Needed"
                    value={form.service}
                    onChange={(v) => setForm((f) => ({ ...f, service: v }))}
                    type="select"
                    options={SERVICE_OPTIONS}
                    required
                  />
                  <Field label="Name" value={form.name} onChange={(v) => setForm((f) => ({ ...f, name: v }))} required />
                  <Field label="WhatsApp" value={form.whatsapp} onChange={(v) => setForm((f) => ({ ...f, whatsapp: v }))} required />
                  <Field label="Email" value={form.email} onChange={(v) => setForm((f) => ({ ...f, email: v }))} type="email" />
                  <Field label="Company / Planner" value={form.company} onChange={(v) => setForm((f) => ({ ...f, company: v }))} />
                  <Field label="Preferred Date(s)" value={form.dates} onChange={(v) => setForm((f) => ({ ...f, dates: v }))} />
                  <Field label="Villa / Venue" value={form.location} onChange={(v) => setForm((f) => ({ ...f, location: v }))} />
                  <Field label="Group Size" value={form.guests} onChange={(v) => setForm((f) => ({ ...f, guests: v }))} />
                  <Field
                    label="Stay Length / Event Duration"
                    value={form.duration}
                    onChange={(v) => setForm((f) => ({ ...f, duration: v }))}
                  />
                  <div className="md:col-span-2">
                    <Field
                      label="Dietary / Cuisine Notes"
                      value={form.dietary}
                      onChange={(v) => setForm((f) => ({ ...f, dietary: v }))}
                      multiline
                      rows={3}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Field
                      label="Planning Notes"
                      value={form.message}
                      onChange={(v) => setForm((f) => ({ ...f, message: v }))}
                      multiline
                      rows={5}
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#C5A028] text-black text-xs uppercase tracking-[0.25em] font-semibold px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                >
                  Send Details via WhatsApp
                </button>
                <p className="text-xs text-[#8A8785] text-center">Opens WhatsApp with your note pre-filled.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAF8]">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader eyebrow="Questions" title="Contact FAQ" />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>
    </main>
  )
}

function ContactItem({ icon: Icon, label, value, href, hint, dataSource }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; href?: string; hint?: string; dataSource?: string }) {
  const content = (
    <div className="flex flex-col items-start gap-2">
      <div className="flex items-center gap-2 text-[#C5A028]">
        <Icon className="w-4 h-4" />
        <p className="text-xs uppercase tracking-[0.25em] font-medium" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{label}</p>
      </div>
      <p className="text-sm font-medium text-[#1A1A1A]">{value}</p>
      {hint && <p className="text-xs text-[#8A8785]">{hint}</p>}
    </div>
  )

  return href ? (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" data-source={dataSource} className="hover:[&_p:nth-child(2)]:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
      {content}
    </a>
  ) : (
    <div>{content}</div>
  )
}

function Field({
  label,
  value,
  onChange,
  type = 'text',
  multiline = false,
  required = false,
  options,
  rows = 5,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  type?: 'text' | 'email' | 'select'
  multiline?: boolean
  required?: boolean
  options?: readonly string[]
  rows?: number
}) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.2em] mb-2 text-[#4A4745]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{label}</span>
      {type === 'select' ? (
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className="w-full bg-transparent border-2 border-[#E5E3E0] rounded-xl px-4 py-3 text-sm focus:border-[#C5A028] focus:outline-none focus:ring-2 focus:ring-[#C5A028]/30"
        >
          <option value="">Select {label.toLowerCase()}</option>
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          rows={rows}
          className="w-full bg-transparent border-2 border-[#E5E3E0] rounded-xl px-4 py-3 text-sm focus:border-[#C5A028] focus:outline-none focus:ring-2 focus:ring-[#C5A028]/30 resize-none"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className="w-full bg-transparent border-2 border-[#E5E3E0] rounded-xl px-4 py-3 text-sm focus:border-[#C5A028] focus:outline-none focus:ring-2 focus:ring-[#C5A028]/30"
        />
      )}
    </label>
  )
}
