import { Link } from 'react-router-dom'
import { Instagram } from 'lucide-react'

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-20 pb-10">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              my<span className="text-[#D4AF37]">CHEF</span>
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Extraordinary food, without leaving your villa. Private chefs and event hospitality across Bali.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Services
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Fine Dining', path: '/fine-dining' },
                { label: 'Villa Chef', path: '/villa-chef' },
                { label: 'Events', path: '/events' },
                { label: 'Partners', path: '/partners' },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-white/60 hover:text-[#D4AF37] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Contact', path: '/contact' },
                { label: 'Privacy Policy', path: '/privacy' },
                { label: 'Terms & Payment', path: '/terms' },
                { label: 'Cancellation', path: '/cancellation' },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-white/60 hover:text-[#D4AF37] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>WhatsApp: +62 822-3756-5997</li>
              <li>Email: indonesia@mychef.id</li>
              <li>Bali, Indonesia</li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="https://instagram.com/mychef.id" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#D4AF37] transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/mychef.id" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#D4AF37] transition-colors" aria-label="Facebook">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="https://wa.me/6282237565997" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#25D366] transition-colors" aria-label="WhatsApp">
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} myCHEF.id. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <Link to="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white/60 transition-colors">Terms & Payment</Link>
            <Link to="/cancellation" className="hover:text-white/60 transition-colors">Cancellation</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
