import { useState } from 'react'
import { Calendar, Users, MapPin, Utensils, MessageSquare, Check } from 'lucide-react'

interface BookingFormProps {
  universe: 'luna' | 'sol' | 'aura'
  compact?: boolean
}

const CONFIG = {
  luna: {
    title: 'Reserve Your Fine Dining Experience',
    subtitle: 'Sofia will confirm your menu and date within the hour.',
    fields: [
      { name: 'date', label: 'Preferred Date', type: 'date', icon: Calendar },
      { name: 'guests', label: 'Number of Guests', type: 'number', icon: Users, placeholder: 'e.g. 8' },
      { name: 'villa', label: 'Villa Location', type: 'text', icon: MapPin, placeholder: 'Seminyak, Canggu, Ubud...' },
      { name: 'courses', label: 'Course Preference', type: 'select', icon: Utensils, options: ['5-Course Journey', '7-Course Experience', '11-Course Tasting', 'Bespoke Menu'] },
    ],
    whatsappName: 'Sofia',
    whatsappNumber: '6281234567890',
  },
  sol: {
    title: 'Book Your Private Villa Chef',
    subtitle: 'Daniel will match you with the perfect chef for your stay.',
    fields: [
      { name: 'checkin', label: 'Check-in Date', type: 'date', icon: Calendar },
      { name: 'checkout', label: 'Check-out Date', type: 'date', icon: Calendar },
      { name: 'guests', label: 'Number of Guests', type: 'number', icon: Users, placeholder: 'e.g. 6' },
      { name: 'villa', label: 'Villa Location', type: 'text', icon: MapPin, placeholder: 'Seminyak, Canggu, Ubud...' },
      { name: 'meals', label: 'Meal Plan', type: 'select', icon: Utensils, options: ['Breakfast Only', 'Half Board', 'Full Board', 'Custom'] },
    ],
    whatsappName: 'Daniel',
    whatsappNumber: '6281234567891',
  },
  aura: {
    title: 'Plan Your Event',
    subtitle: 'Olivia will design a proposal tailored to your occasion.',
    fields: [
      { name: 'eventType', label: 'Event Type', type: 'select', icon: Utensils, options: ['Wedding', 'Corporate Retreat', 'Birthday', 'Anniversary', 'Other'] },
      { name: 'date', label: 'Event Date', type: 'date', icon: Calendar },
      { name: 'guests', label: 'Number of Guests', type: 'number', icon: Users, placeholder: 'e.g. 50' },
      { name: 'villa', label: 'Villa Location', type: 'text', icon: MapPin, placeholder: 'Seminyak, Canggu, Ubud...' },
    ],
    whatsappName: 'Olivia',
    whatsappNumber: '6281234567892',
  },
}

export default function BookingForm({ universe, compact }: BookingFormProps) {
  const config = CONFIG[universe]
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState<Record<string, string>>({})

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = Object.entries(formData)
      .filter(([, v]) => v)
      .map(([k, v]) => `${k}: ${v}`)
      .join('\n')
    const fullMsg = `Hi ${config.whatsappName}, I'm interested in booking.\n\n${msg}`
    window.open(`https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(fullMsg)}`, '_blank')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-16 px-6">
        <div className="w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-black" />
        </div>
        <h3 className="text-2xl mb-3" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--u-text)' }}>
          Message Sent to {config.whatsappName}
        </h3>
        <p className="mb-6" style={{ color: 'var(--u-text-muted)' }}>
          She typically responds within the hour. Meanwhile, feel free to browse our menus.
        </p>
        <button
          onClick={() => { setSubmitted(false); setFormData({}) }}
          className="text-sm underline"
          style={{ color: 'var(--u-accent)' }}
        >
          Send another inquiry
        </button>
      </div>
    )
  }

  return (
    <div className={`${compact ? '' : 'py-16 md:py-24 px-6'}`}>
      {!compact && (
        <div className="text-center mb-12">
          <p className="u-label text-sm mb-3">Book Now</p>
          <h2 className="u-heading text-3xl md:text-4xl mb-3">{config.title}</h2>
          <p style={{ color: 'var(--u-text-muted)' }}>{config.subtitle}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-5">
        {config.fields.map((field) => (
          <div key={field.name}>
            <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--u-text-muted)', fontFamily: "'Cormorant Garamond', serif" }}>
              {field.label}
            </label>
            <div className="relative">
              <field.icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'var(--u-text-muted)' }} />
              {field.type === 'select' ? (
                <select
                  required
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border bg-transparent appearance-none outline-none focus:ring-2 transition-all"
                  style={{ borderColor: 'var(--u-border)', color: 'var(--u-text)' }}
                  value={formData[field.name] || ''}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                >
                  <option value="" disabled>Select {field.label}</option>
                  {field.options?.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  required={field.type !== 'select'}
                  placeholder={field.placeholder || ''}
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border bg-transparent outline-none focus:ring-2 transition-all"
                  style={{ borderColor: 'var(--u-border)', color: 'var(--u-text)' }}
                  value={formData[field.name] || ''}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                />
              )}
            </div>
          </div>
        ))}

        <div>
          <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--u-text-muted)', fontFamily: "'Cormorant Garamond', serif" }}>
            Special Requests
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-4 w-4 h-4" style={{ color: 'var(--u-text-muted)' }} />
            <textarea
              rows={3}
              placeholder="Dietary restrictions, allergies, special occasions..."
              className="w-full pl-11 pr-4 py-3.5 rounded-xl border bg-transparent outline-none focus:ring-2 transition-all resize-none"
              style={{ borderColor: 'var(--u-border)', color: 'var(--u-text)' }}
              value={formData.notes || ''}
              onChange={(e) => handleChange('notes', e.target.value)}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-4 rounded-xl text-black font-semibold tracking-widest uppercase text-sm transition-all hover:scale-[1.01] active:scale-[0.99]"
          style={{ background: 'var(--u-accent)' }}
        >
          Send to {config.whatsappName} via WhatsApp
        </button>
      </form>
    </div>
  )
}
