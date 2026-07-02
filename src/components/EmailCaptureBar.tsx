import { useState, useEffect } from 'react'
import { MessageCircle, X, FileText } from 'lucide-react'

const WA_NUMBER = '62089674072020'
const WA_TEXT = "Hi, I'd like the free Bali Private Chef Price Guide please"
const STORAGE_KEY = 'priceguide_dismissed'

export default function EmailCaptureBar() {
  const [dismissed, setDismissed] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem(STORAGE_KEY) === 'true') {
      setDismissed(true)
    }
  }, [])

  const handleDismiss = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, 'true')
    }
    setDismissed(true)
  }

  if (dismissed) return null

  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT)}`

  return (
    <div
      className="relative w-full rounded-xl border border-[#C5A028]/30 bg-[#0a0a0a] px-5 py-5 shadow-lg"
      role="complementary"
      aria-label="Free price guide offer"
    >
      {/* Gold accent bar */}
      <div className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-[#C5A028]" aria-hidden="true" />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Content */}
        <div className="flex items-start gap-3 pl-3">
          <FileText className="mt-0.5 h-5 w-5 shrink-0 text-[#C5A028]" aria-hidden="true" />
          <div>
            <p className="text-sm font-semibold text-white">
              Free Bali Private Chef Price Guide
            </p>
            <p className="mt-0.5 text-xs text-white/60">
              Get real 2026 pricing for your villa — sent instantly via WhatsApp
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-3 pl-3 sm:pl-0">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#C5A028] px-4 py-2 text-xs font-semibold text-black transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A028] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            aria-label="Get the free Bali Private Chef Price Guide on WhatsApp"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Get Free Guide on WhatsApp
          </a>

          <button
            type="button"
            onClick={handleDismiss}
            className="flex h-7 w-7 items-center justify-center rounded-full text-white/55 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A028] focus-visible:ring-offset-1 focus-visible:ring-offset-black"
            aria-label="Dismiss this offer"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
