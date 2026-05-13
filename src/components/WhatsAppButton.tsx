import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { useUniverse } from '@/contexts/UniverseContext'

interface Contact {
  name: string
  number: string
  role: string
  photo?: string
  message: string
}

const CONTACTS: Record<string, Contact> = {
  luna: {
    name: 'Sofia',
    number: '6282237565997',
    role: 'Fine Dining Concierge',
    message: 'Hi Sofia, I\'m interested in a fine dining experience at my villa. Can you share current menu options?',
  },
  sol: {
    name: 'Daniel',
    number: '6282237565997',
    role: 'Villa Chef Coordinator',
    message: 'Hi Daniel, we\'re staying at a villa and would love to explore private chef options.',
  },
  aura: {
    name: 'Olivia',
    number: '6282237565997',
    role: 'Events Manager',
    message: 'Hi Olivia, I\'m planning an event and would love your help with the details.',
  },
  hub: {
    name: 'myCHEF',
    number: '6282237565997',
    role: 'General Inquiry',
    message: 'Hi, I\'d like to learn more about myCHEF services.',
  },
}

export default function WhatsAppButton() {
  const { universe } = useUniverse()
  const [open, setOpen] = useState(false)

  const contact = CONTACTS[universe] || CONTACTS.hub
  const waUrl = `https://wa.me/${contact.number}?text=${encodeURIComponent(contact.message)}`

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div
          className="mb-2 rounded-2xl p-4 shadow-2xl max-w-[280px]"
          style={{ background: 'var(--u-surface)', border: '1px solid var(--u-border)' }}
        >
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="text-sm font-semibold" style={{ color: 'var(--u-text)' }}>
                Chat with {contact.name}
              </p>
              <p className="text-xs" style={{ color: 'var(--u-text-muted)' }}>
                {contact.role} — Response within the hour
              </p>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close chat" className="p-1 rounded-full hover:bg-black/5">
              <X className="w-4 h-4" style={{ color: 'var(--u-text-muted)' }} />
            </button>
          </div>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-white text-sm font-medium transition-transform hover:scale-[1.02] active:scale-[0.98]"
            style={{ background: '#25D366' }}
          >
            <MessageCircle className="w-4 h-4" />
            Start Chat
          </a>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95 whatsapp-pulse"
        style={{ background: '#25D366' }}
        aria-label="Open WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </button>
    </div>
  )
}
