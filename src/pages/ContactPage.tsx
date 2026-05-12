import { useState } from 'react'
import { MessageCircle, Mail, Phone, MapPin, Check, ArrowRight } from 'lucide-react'

const DEPARTMENTS = [
  { id: 'luna', name: 'Fine Dining', contact: 'Sofia', number: '6281234567890', desc: 'Menu questions, reservations, dietary needs', color: '#D4AF37' },
  { id: 'sol', name: 'Villa Chef', contact: 'Daniel', number: '6281234567891', desc: 'Daily chef bookings, meal plans, villa stays', color: '#6B8E5A' },
  { id: 'aura', name: 'Events', contact: 'Olivia', number: '6281234567892', desc: 'Weddings, corporate events, celebrations', color: '#2C5F7C' },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `Hi myCHEF, I'm ${form.name}. ${form.message}`
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(msg)}`, '_blank')
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--u-bg)', color: 'var(--u-text)' }}>
      {/* Hero */}
      <section className="relative py-32 md:py-40 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="u-label text-sm mb-4">Contact</p>
          <h1 className="u-heading text-5xl md:text-6xl mb-6">
            Let's <span className="italic">Talk</span>
          </h1>
          <p className="text-lg mb-4" style={{ color: 'var(--u-text-muted)' }}>
            We respond within the hour. Usually much faster.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium" style={{ background: 'rgba(212,175,55,0.1)', color: '#D4AF37' }}>
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            WhatsApp online now
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DEPARTMENTS.map((dept) => (
              <a
                key={dept.id}
                href={`https://wa.me/${dept.number}?text=${encodeURIComponent(`Hi ${dept.contact}, I'd like to learn more about ${dept.name}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 rounded-2xl border transition-all hover:shadow-lg"
                style={{ borderColor: 'var(--u-border)', background: 'var(--u-surface)' }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>{dept.name}</h3>
                  <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" style={{ color: dept.color }} />
                </div>
                <p className="text-sm mb-4" style={{ color: 'var(--u-text-muted)' }}>{dept.desc}</p>
                <div className="flex items-center gap-2 text-sm font-medium" style={{ color: dept.color }}>
                  Chat with {dept.contact} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {/* Info */}
            <div>
              <p className="u-label text-sm mb-4">Direct Contact</p>
              <h2 className="u-heading text-3xl md:text-4xl mb-8">Other Ways to Reach Us</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(212,175,55,0.1)' }}>
                    <MessageCircle className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="font-medium mb-1" style={{ color: 'var(--u-text)' }}>WhatsApp</p>
                    <p className="text-sm" style={{ color: 'var(--u-text-muted)' }}>+62 812 3456 7890</p>
                    <p className="text-xs mt-1" style={{ color: 'var(--u-text-muted)' }}>Fastest response — typically within minutes</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(212,175,55,0.1)' }}>
                    <Mail className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="font-medium mb-1" style={{ color: 'var(--u-text)' }}>Email</p>
                    <p className="text-sm" style={{ color: 'var(--u-text-muted)' }}>hello@mychef.id</p>
                    <p className="text-xs mt-1" style={{ color: 'var(--u-text-muted)' }}>For detailed proposals and corporate inquiries</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(212,175,55,0.1)' }}>
                    <Phone className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="font-medium mb-1" style={{ color: 'var(--u-text)' }}>Phone</p>
                    <p className="text-sm" style={{ color: 'var(--u-text-muted)' }}>+62 812 3456 7890</p>
                    <p className="text-xs mt-1" style={{ color: 'var(--u-text-muted)' }}>Available 8am–10pm Bali time</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(212,175,55,0.1)' }}>
                    <MapPin className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="font-medium mb-1" style={{ color: 'var(--u-text)' }}>Location</p>
                    <p className="text-sm" style={{ color: 'var(--u-text-muted)' }}>Bali, Indonesia</p>
                    <p className="text-xs mt-1" style={{ color: 'var(--u-text-muted)' }}>Serving all of Bali: Seminyak, Canggu, Ubud, Uluwatu, Sanur</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-8 rounded-2xl border" style={{ borderColor: 'var(--u-border)', background: 'var(--u-surface)' }}>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Message Sent</h3>
                  <p style={{ color: 'var(--u-text-muted)' }}>We'll be in touch within the hour.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--u-text-muted)', fontFamily: "'Cormorant Garamond', serif" }}>Name</label>
                    <input
                      required
                      className="w-full px-4 py-3.5 rounded-xl border bg-transparent outline-none focus:ring-2"
                      style={{ borderColor: 'var(--u-border)', color: 'var(--u-text)' }}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--u-text-muted)', fontFamily: "'Cormorant Garamond', serif" }}>Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3.5 rounded-xl border bg-transparent outline-none focus:ring-2"
                      style={{ borderColor: 'var(--u-border)', color: 'var(--u-text)' }}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--u-text-muted)', fontFamily: "'Cormorant Garamond', serif" }}>Message</label>
                    <textarea
                      rows={4}
                      required
                      className="w-full px-4 py-3.5 rounded-xl border bg-transparent outline-none focus:ring-2 resize-none"
                      style={{ borderColor: 'var(--u-border)', color: 'var(--u-text)' }}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-black font-semibold tracking-widest uppercase text-sm transition-all hover:scale-[1.01] active:scale-[0.99]"
                    style={{ background: 'var(--u-accent)' }}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
