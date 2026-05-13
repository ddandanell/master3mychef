import { Link } from 'react-router-dom'
import { Instagram, MessageCircle } from 'lucide-react'

// Aggressively simple footer.
// One row of meaningful links, contact strip, legal strip.
// No 4-column layouts, no "company" / "services" sections — the top nav already covers that.

const FOOTER_LINKS: { label: string; to?: string; href?: string; external?: boolean }[] = [
  { label: 'Partner Platform', to: '/partner-platform' },
  { label: 'About', to: '/about' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Terms', to: '/terms' },
  { label: 'Privacy', to: '/privacy' },
  { label: 'Instagram', href: 'https://instagram.com/mychef.id', external: true },
  { label: 'WhatsApp', href: 'https://wa.me/6282237565997', external: true },
  { label: 'Contact', to: '/contact' },
]

// Secondary discovery row — distributes PageRank from the footer into the city
// silo + the menu + the Bali hub. SEO audit flagged the footer as routing 0
// internal links into the geo silo before this.
const FOOTER_DISCOVERY: { label: string; to: string }[] = [
  { label: 'Seminyak', to: '/seminyak' },
  { label: 'Canggu', to: '/canggu' },
  { label: 'Ubud', to: '/ubud' },
  { label: 'Uluwatu', to: '/uluwatu' },
  { label: 'Sanur', to: '/sanur' },
  { label: 'All Bali areas', to: '/guide/private-chef-bali' },
  { label: 'Sample menus', to: '/menus' },
  { label: 'Staffing', to: '/staffing' },
  { label: 'Corporate Events', to: '/corporate-events' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-14 pb-8">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              my<span className="text-[#D4AF37]">CHEF</span>
            </h3>
            <p className="text-sm text-white/55 max-w-xs">
              Private chef, villa catering, and full-service events across Bali. Same-day WhatsApp confirmation.
            </p>
          </div>

          {/* Primary contact */}
          <div className="flex flex-col gap-2 text-sm">
            <a
              href="https://wa.me/6282237565997?text=Hi%20myCHEF"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[2px] font-semibold bg-[#25D366] text-white px-4 py-2.5 rounded-full hover:bg-[#1ea855] transition-colors self-start"
            >
              <MessageCircle className="w-3.5 h-3.5" /> +62 822-3756-5997
            </a>
            <a href="mailto:indonesia@mychef.id" className="text-white/55 hover:text-[#D4AF37] transition-colors">
              indonesia@mychef.id
            </a>
          </div>
        </div>

        {/* Discovery row — cities, menus, Bali hub. Routes PageRank into the geo silo. */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 py-5 border-t border-white/10 text-xs text-white/60">
          {FOOTER_DISCOVERY.map((l) => (
            <Link key={l.to} to={l.to} className="hover:text-[#D4AF37] transition-colors uppercase tracking-[0.15em]">
              {l.label}
            </Link>
          ))}
        </div>

        {/* Primary row — About / FAQ / Terms / Privacy / Instagram / WhatsApp / Contact */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 py-5 border-t border-white/10 text-sm text-white/60">
          {FOOTER_LINKS.map((l) =>
            l.external ? (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4AF37] transition-colors inline-flex items-center gap-1.5"
              >
                {l.label === 'Instagram' && <Instagram className="w-3.5 h-3.5" />}
                {l.label === 'WhatsApp' && <MessageCircle className="w-3.5 h-3.5" />}
                {l.label}
              </a>
            ) : (
              <Link key={l.label} to={l.to!} className="hover:text-[#D4AF37] transition-colors">
                {l.label}
              </Link>
            ),
          )}
        </div>

        <p className="text-xs text-white/60 text-center mt-6">
          &copy; {new Date().getFullYear()} myCHEF.id. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
