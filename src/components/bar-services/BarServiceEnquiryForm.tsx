import { useState } from 'react'
import type { FormEvent } from 'react'
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
    <section id="enquiry-form" className="py-16 md:py-24 bg-stone-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-8">
          Get a written quote
        </h2>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Name *</label>
            <input
              required
              type="text"
              className="w-full border rounded px-3 py-2"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Venue / company *</label>
            <input
              required
              type="text"
              className="w-full border rounded px-3 py-2"
              value={formData.venue}
              onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Venue type *</label>
            <select
              required
              className="w-full border rounded px-3 py-2"
              value={formData.venueType}
              onChange={(e) => setFormData({ ...formData, venueType: e.target.value })}
            >
              <option value="">Select venue type</option>
              {VENUE_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Services needed *</label>
            <div className="flex flex-wrap gap-2">
              {BAR_SERVICES.map((s) => (
                <button
                  key={s.slug}
                  type="button"
                  onClick={() => handleServiceToggle(s.slug)}
                  className={`px-3 py-1 rounded-full border text-sm ${
                    formData.services.includes(s.slug)
                      ? 'bg-amber-500 border-amber-500 text-black'
                      : 'bg-white border-gray-300 text-gray-700'
                  }`}
                >
                  {s.eyebrow}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">WhatsApp / phone *</label>
            <input
              required
              type="tel"
              className="w-full border rounded px-3 py-2"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email *</label>
            <input
              required
              type="email"
              className="w-full border rounded px-3 py-2"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              rows={4}
              className="w-full border rounded px-3 py-2"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Preferred reply channel</label>
            <select
              className="w-full border rounded px-3 py-2"
              value={formData.preferredChannel}
              onChange={(e) => setFormData({ ...formData, preferredChannel: e.target.value })}
            >
              <option>WhatsApp</option>
              <option>Email</option>
            </select>
          </div>
          {status === 'sent' && (
            <div className="p-4 bg-green-50 text-green-800 rounded">
              Thank you — your enquiry has been sent. We will reply within four business hours.
            </div>
          )}
          {status === 'error' && (
            <div className="p-4 bg-red-50 text-red-800 rounded">
              Something went wrong. Please email us directly at{' '}
              <a href="mailto:bali@mychef.id" className="underline">bali@mychef.id</a>.
            </div>
          )}
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full px-6 py-3 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-black font-medium rounded"
          >
            {status === 'sending' ? 'Sending...' : 'Request a Quote'}
          </button>
        </form>
      </div>
    </section>
  )
}
