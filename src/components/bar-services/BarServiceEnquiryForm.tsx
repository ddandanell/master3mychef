import { useState } from 'react'
import type { FormEvent } from 'react'
import { Send, MessageCircle, Mail, CheckCircle, AlertCircle } from 'lucide-react'
import { BAR_SERVICES } from '@/data/bar-services'

const VENUE_TYPES = ['Hotel', 'Restaurant', 'Villa', 'Beach club', 'Café', 'Event company', 'Other']

export function BarServiceEnquiryForm({ preselectedService }: { preselectedService?: string }) {
  const [formData, setFormData] = useState({
    name: '',
    venue: '',
    venueType: '',
    services: preselectedService ? [preselectedService] : [],
    phone: '',
    email: '',
    message: '',
    preferredChannel: 'WhatsApp',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleServiceToggle = (slug: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(slug)
        ? prev.services.filter((s) => s !== slug)
        : [...prev.services, slug],
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form: 'bar-services',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `Bar Services Enquiry from ${formData.name}`,
          message: formData.message,
          metadata: {
            Venue: formData.venue,
            'Venue type': formData.venueType,
            Services: formData.services.join(', '),
            'Preferred reply channel': formData.preferredChannel,
          },
        }),
      })

      if (!response.ok) throw new Error('Email request failed')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="enquiry-form" className="py-20 md:py-32 bg-[#0A0A0A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C5A028] mb-4 block">
            Get a written quote
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-[#F5F2EB] mb-4">
            Tell us about your bar project
          </h2>
          <p className="text-[#F5F2EB]/60 leading-relaxed">
            We reply within four business hours with tailored next steps, availability and pricing.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-[#0F0E0C] border border-[#C5A028]/20 rounded-2xl p-6 md:p-10 backdrop-blur-sm shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-[#F5F2EB]/80 mb-2">
                Name <span className="text-[#C5A028]">*</span>
              </label>
              <input
                required
                type="text"
                className="w-full bg-[#1A1A1A] border border-[#F5F2EB]/10 rounded-lg px-4 py-3 text-[#F5F2EB] placeholder:text-[#F5F2EB]/30 focus:border-[#C5A028]/50 focus:ring-1 focus:ring-[#C5A028]/30 outline-none transition-colors"
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#F5F2EB]/80 mb-2">
                Venue / company <span className="text-[#C5A028]">*</span>
              </label>
              <input
                required
                type="text"
                className="w-full bg-[#1A1A1A] border border-[#F5F2EB]/10 rounded-lg px-4 py-3 text-[#F5F2EB] placeholder:text-[#F5F2EB]/30 focus:border-[#C5A028]/50 focus:ring-1 focus:ring-[#C5A028]/30 outline-none transition-colors"
                placeholder="e.g. The Lawn Beach Club"
                value={formData.venue}
                onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-[#F5F2EB]/80 mb-2">
                WhatsApp / phone <span className="text-[#C5A028]">*</span>
              </label>
              <input
                required
                type="tel"
                className="w-full bg-[#1A1A1A] border border-[#F5F2EB]/10 rounded-lg px-4 py-3 text-[#F5F2EB] placeholder:text-[#F5F2EB]/30 focus:border-[#C5A028]/50 focus:ring-1 focus:ring-[#C5A028]/30 outline-none transition-colors"
                // Format hint only — must never look like a real number, or it
                // reads as a second business phone in the rendered HTML.
                placeholder="+62 8xx xxxx xxxx"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#F5F2EB]/80 mb-2">
                Email <span className="text-[#C5A028]">*</span>
              </label>
              <input
                required
                type="email"
                className="w-full bg-[#1A1A1A] border border-[#F5F2EB]/10 rounded-lg px-4 py-3 text-[#F5F2EB] placeholder:text-[#F5F2EB]/30 focus:border-[#C5A028]/50 focus:ring-1 focus:ring-[#C5A028]/30 outline-none transition-colors"
                placeholder="you@venue.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-[#F5F2EB]/80 mb-2">
                Venue type <span className="text-[#C5A028]">*</span>
              </label>
              <select
                required
                className="w-full bg-[#1A1A1A] border border-[#F5F2EB]/10 rounded-lg px-4 py-3 text-[#F5F2EB] focus:border-[#C5A028]/50 focus:ring-1 focus:ring-[#C5A028]/30 outline-none transition-colors appearance-none"
                value={formData.venueType}
                onChange={(e) => setFormData({ ...formData, venueType: e.target.value })}
              >
                <option value="">Select venue type</option>
                {VENUE_TYPES.map((t) => (
                  <option key={t} value={t} className="bg-[#1A1A1A]">
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#F5F2EB]/80 mb-2">
                Preferred reply channel
              </label>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, preferredChannel: 'WhatsApp' })}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border transition-all ${
                    formData.preferredChannel === 'WhatsApp'
                      ? 'bg-[#C5A028]/10 border-[#C5A028]/40 text-[#C5A028]'
                      : 'bg-[#1A1A1A] border-[#F5F2EB]/10 text-[#F5F2EB]/70 hover:border-[#C5A028]/30'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, preferredChannel: 'Email' })}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border transition-all ${
                    formData.preferredChannel === 'Email'
                      ? 'bg-[#C5A028]/10 border-[#C5A028]/40 text-[#C5A028]'
                      : 'bg-[#1A1A1A] border-[#F5F2EB]/10 text-[#F5F2EB]/70 hover:border-[#C5A028]/30'
                  }`}
                >
                  <Mail className="w-4 h-4" /> Email
                </button>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-[#F5F2EB]/80 mb-3">
              Services needed <span className="text-[#C5A028]">*</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {BAR_SERVICES.map((s) => (
                <button
                  key={s.slug}
                  type="button"
                  onClick={() => handleServiceToggle(s.slug)}
                  className={`px-4 py-2 rounded-full border text-sm transition-all ${
                    formData.services.includes(s.slug)
                      ? 'bg-[#C5A028] border-[#C5A028] text-[#0A0A0A] font-medium'
                      : 'bg-[#1A1A1A] border-[#F5F2EB]/10 text-[#F5F2EB]/70 hover:border-[#C5A028]/30'
                  }`}
                >
                  {s.eyebrow}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-[#F5F2EB]/80 mb-2">Message</label>
            <textarea
              rows={4}
              className="w-full bg-[#1A1A1A] border border-[#F5F2EB]/10 rounded-lg px-4 py-3 text-[#F5F2EB] placeholder:text-[#F5F2EB]/30 focus:border-[#C5A028]/50 focus:ring-1 focus:ring-[#C5A028]/30 outline-none transition-colors resize-none"
              placeholder="Tell us about your timeline, team size or biggest challenge..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          {status === 'sent' && (
            <div className="mb-6 p-4 bg-[#C5A028]/10 border border-[#C5A028]/20 rounded-lg flex items-start gap-3 text-[#C5A028]">
              <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Thank you — your enquiry has been sent.</p>
                <p className="text-sm text-[#C5A028]/80">We will reply within four business hours.</p>
              </div>
            </div>
          )}

          {status === 'error' && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-start gap-3 text-red-400">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Something went wrong.</p>
                <p className="text-sm text-red-400/80">
                  Please email us directly at{' '}
                  <a href="mailto:bali@mychef.id" className="underline hover:text-[#C5A028]">
                    bali@mychef.id
                  </a>.
                </p>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full inline-flex items-center justify-center gap-2 min-h-[56px] px-8 py-4 bg-[#C5A028] hover:bg-[#D4AF37] disabled:bg-[#C5A028]/50 text-[#0A0A0A] font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_10px_30px_rgba(197,160,40,0.3)]"
          >
            <Send className="w-5 h-5" />
            {status === 'sending' ? 'Sending...' : 'Request a written quote'}
          </button>
        </form>
      </div>
    </section>
  )
}
