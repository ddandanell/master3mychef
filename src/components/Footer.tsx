import { Link } from 'react-router-dom'
import { Instagram, MessageCircle } from 'lucide-react'

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
              {['About Us', 'Our Chefs', 'Testimonials', 'Contact'].map((l) => (
                <li key={l}>
                  <Link to="/contact" className="text-sm text-white/60 hover:text-[#D4AF37] transition-colors">
                    {l}
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
              <li>WhatsApp: +62 812 3456 7890</li>
              <li>Email: hello@mychef.id</li>
              <li>Bali, Indonesia</li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-white/60 hover:text-[#D4AF37] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-[#D4AF37] transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} myCHEF.id. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <Link to="/" className="hover:text-white/60 transition-colors">Privacy</Link>
            <Link to="/" className="hover:text-white/60 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
