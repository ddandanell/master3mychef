import { useEffect, useId, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Calendar, MessageSquare, Check, Phone } from 'lucide-react'

interface Field {
  name: string
  label: string
  type: 'text' | 'number' | 'date' | 'select' | 'textarea'
  icon?: typeof Calendar
  placeholder?: string
  options?: string[]
  required?: boolean
  waLabel?: string
  rows?: number
}

interface BookingFormCateringProps {
  title: string
  subtitle?: string
  fields: Field[]
  packageOptions?: string[]
  whatsappName?: string
  accent?: string
  submitLabel?: string
  submitLabelBuilder?: (formData: Record<string, string>) => string
  messageIntro?: string
}

const WA_NUMBER = 491635080236

function getFieldHint(field: Field) {
  if (field.placeholder) return field.placeholder
  if (field.type === 'select') return `Choose ${field.label.toLowerCase()}.`
  if (field.type === 'date') return 'Select your preferred service date.'
  if (field.type === 'number') return 'Enter the expected quantity as a number.'
  if (field.type === 'textarea') return `Add any extra details for ${field.label.toLowerCase()}.`
  return `Enter ${field.label.toLowerCase()}.`
}

function validateField(field: Field, value: string) {
  if (field.required && !value.trim()) {
    return `Please enter ${field.label.toLowerCase()}.`
  }

  return ''
}

export default function BookingFormCatering({
  title,
  subtitle = 'We will confirm availability and pricing within the hour.',
  fields,
  packageOptions,
  whatsappName = 'myCHEF',
  accent = '#6B8E5A',
  submitLabel,
  submitLabelBuilder,
  messageIntro,
}: BookingFormCateringProps) {
  const formId = useId()
  const location = useLocation()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [errors, setErrors] = useState<Record<string, string>>({})

  const selectedPackage = useMemo(() => {
    const value = new URLSearchParams(location.search).get('package')?.trim()
    if (!value || !packageOptions?.includes(value)) return ''
    return value
  }, [location.search, packageOptions])

  const fieldsByName = useMemo(
    () => Object.fromEntries(fields.map((field) => [field.name, field] as const)),
    [fields],
  )

  useEffect(() => {
    if (!selectedPackage) return

    setFormData((prev) => (prev.package === selectedPackage ? prev : { ...prev, package: selectedPackage }))
    setErrors((prev) => {
      if (!prev.package) return prev
      const next = { ...prev }
      delete next.package
      return next
    })
  }, [selectedPackage])

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))

    const field = fieldsByName[name]
    if (!field) return

    const nextError = validateField(field, value)
    setErrors((prev) => {
      if (!prev[name] && !nextError) return prev
      const next = { ...prev }
      if (nextError) next[name] = nextError
      else delete next[name]
      return next
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const nextErrors = Object.fromEntries(
      fields
        .map((field) => [field.name, validateField(field, formData[field.name] || '')] as const)
        .filter(([, error]) => Boolean(error)),
    )

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    const lines = fields
      .map((field) => {
        const value = formData[field.name]?.trim()
        if (!value) return null
        return `${field.waLabel ?? field.label}: ${value}`
      })
      .filter((line): line is string => Boolean(line))
    const intro = messageIntro ?? `Hi ${whatsappName}, I'd like help with ${title.toLowerCase()}.`
    const msg = [intro, lines.join('\n')].filter(Boolean).join('\n\n')
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="border border-[#E8E6E3] bg-white px-6 py-16 text-center rounded-2xl">
        <div
          className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full"
          style={{ background: accent }}
        >
          <Check className="h-8 w-8 text-white" />
        </div>
        <h3 className="mb-3 text-2xl text-[#1A1A1A]" style={{ fontFamily: "'Playfair Display', serif" }}>
          Message Sent
        </h3>
        <p className="mb-6 text-[#4A4745]">
          {whatsappName} typically responds within the hour. Meanwhile, feel free to browse our packages.
        </p>
        <a
          href={`https://wa.me/${WA_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          data-source="booking-form-catering-cta"
          className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#C5A028] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#D4B43A]"
        >
          <Phone className="h-4 w-4" /> Open WhatsApp
        </a>
      </div>
    )
  }

  const resolvedSubmitLabel = submitLabelBuilder ? submitLabelBuilder(formData) : submitLabel ?? 'Send via WhatsApp'

  const renderField = (field: Field) => {
    const Icon = field.icon
    const value = formData[field.name] || ''
    const fieldError = errors[field.name]
    const fieldId = `${formId}-${field.name}`
    const hintId = `${fieldId}-hint`
    const errorId = `${fieldId}-error`
    const hint = getFieldHint(field)
    const describedBy = [hintId, fieldError ? errorId : null].filter(Boolean).join(' ')

    return (
      <div key={field.name}>
        <label htmlFor={fieldId} className="mb-2 block text-sm font-medium text-[#1A1A1A]">
          {field.label}
          {field.required && <span className="ml-1 text-red-500">*</span>}
        </label>
        <div className="relative">
          {Icon && <Icon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#4A4745]/50" aria-hidden="true" />}
          {field.type === 'select' ? (
            <select
              id={fieldId}
              value={value}
              onChange={(e) => handleChange(field.name, e.target.value)}
              required={field.required}
              aria-invalid={fieldError ? 'true' : undefined}
              aria-describedby={describedBy}
              className={`w-full rounded-xl border bg-white px-3 py-3 text-sm text-[#1A1A1A] transition-colors focus:border-[#6B8E5A] focus:outline-none ${fieldError ? 'border-red-500' : 'border-[#E8E6E3]'} ${Icon ? 'pl-10' : ''}`}
            >
              <option value="">Select {field.label.toLowerCase()}</option>
              {(field.options || packageOptions || []).map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          ) : field.type === 'textarea' ? (
            <textarea
              id={fieldId}
              value={value}
              onChange={(e) => handleChange(field.name, e.target.value)}
              placeholder={field.placeholder}
              required={field.required}
              rows={field.rows ?? 3}
              aria-invalid={fieldError ? 'true' : undefined}
              aria-describedby={describedBy}
              className={`w-full resize-none rounded-xl border bg-white px-3 py-3 text-sm text-[#1A1A1A] transition-colors focus:border-[#6B8E5A] focus:outline-none ${fieldError ? 'border-red-500' : 'border-[#E8E6E3]'}`}
            />
          ) : (
            <input
              id={fieldId}
              type={field.type}
              value={value}
              onChange={(e) => handleChange(field.name, e.target.value)}
              placeholder={field.placeholder}
              required={field.required}
              aria-invalid={fieldError ? 'true' : undefined}
              aria-describedby={describedBy}
              className={`w-full rounded-xl border bg-white px-3 py-3 text-sm text-[#1A1A1A] transition-colors focus:border-[#6B8E5A] focus:outline-none ${fieldError ? 'border-red-500' : 'border-[#E8E6E3]'} ${Icon ? 'pl-10' : ''}`}
            />
          )}
        </div>
        <p id={hintId} className="mt-2 text-xs text-[#4A4745]/70">
          {hint} {field.required ? 'Required field.' : 'Optional field.'}
        </p>
        {fieldError && (
          <p id={errorId} role="alert" className="mt-2 text-xs text-red-600">
            {fieldError}
          </p>
        )}
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-[#E8E6E3] bg-white p-6 md:p-8" noValidate>
      <h3 className="mb-2 text-xl text-[#1A1A1A] md:text-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
        {title}
      </h3>
      {subtitle && <p className="mb-6 text-sm text-[#4A4745]">{subtitle}</p>}

      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map(renderField)}
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
        style={{ background: accent }}
      >
        <MessageSquare className="h-4 w-4" /> {resolvedSubmitLabel}
      </button>
      <p className="mt-3 text-center text-xs text-[#4A4745]/60">
        No payment required now. We will confirm availability first.
      </p>
    </form>
  )
}
