import { MessageCircle } from 'lucide-react'
import { useLocation } from 'react-router-dom'

const WHATSAPP_NUMBER = '628113803488'
const WHATSAPP_MESSAGE = "Hi myCHEF! I'd like to enquire about your services."

function getPageSource(pathname: string) {
  const normalized = pathname.replace(/^\/+|\/+$/g, '')
  return normalized ? normalized.replace(/\//g, '_') : 'home'
}

export default function WhatsAppButton() {
  const location = useLocation()
  const source = getPageSource(location.pathname)
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <div className="fixed bottom-6 right-6 z-50 hidden items-center md:flex">
      <div className="group relative flex items-center">
        <div className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full border border-[#C5A028]/30 bg-black/90 px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-all duration-200 sm:block sm:translate-x-2 sm:group-hover:translate-x-0 sm:group-hover:opacity-100 sm:group-focus-within:translate-x-0 sm:group-focus-within:opacity-100">
          Chat with us on WhatsApp
        </div>

        <a
          href={waUrl}
          data-source={`${source}--floating-button`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A028] focus-visible:ring-offset-2 focus-visible:ring-offset-black active:scale-95"
          style={{ backgroundColor: '#25D366' }}
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </div>
    </div>
  )
}
