import { Link } from 'react-router-dom'
import { Instagram, MessageCircle, LogIn, MapPin, Mail, Phone } from 'lucide-react'
import { PILLARS, LOCATIONS, PRIMARY_NAV, PRIMARY_CTA } from '../data/siteArchitecture'

export default function Footer() {
  const pillars = Object.values(PILLARS)
  const locations = Object.values(LOCATIONS)

  return (
    <footer className="bg-[#0A0A0A] text-white pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Brand row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div>
            <h3 className="text-2xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              my<span className="text-[#C5A028]">CHEF</span>
            </h3>
            <p className="text-sm text-white/55 max-w-xs">
              Private chef, villa catering, and full-service events across Bali. Same-day WhatsApp confirmation.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <a
              href="https://wa.me/6282237565997?text=Hi%20myCHEF"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[2px] font-semibold bg-white text-black px-4 py-2.5 rounded-full hover:bg-[#C5A028] hover:text-black transition-colors self-start"
            >
              <MessageCircle className="w-3.5 h-3.5" /> +62 822-3756-5997
            </a>
            <a href="mailto:indonesia@mychef.id" className="text-white/55 hover:text-[#C5A028] transition-colors">
              indonesia@mychef.id
            </a>
          </div>
        </div>

        {/* Sitemap grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 py-10 border-t border-white/10">
          {pillars.map((pillar) => (
            <div key={pillar.slug}>
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A028] mb-4 font-semibold">
                {pillar.navLabel}
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link to={pillar.url} className="text-sm text-white/70 hover:text-white transition-colors">
                    Overview
                  </Link>
                </li>
                {pillar.subPages.map((sub) => (
                  <li key={sub.slug}>
                    <Link to={`${pillar.url}/${sub.slug}`} className="text-sm text-white/50 hover:text-white transition-colors">
                      {sub.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A028] mb-4 font-semibold">Locations</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/locations" className="text-sm text-white/70 hover:text-white transition-colors">
                  All Locations
                </Link>
              </li>
              {locations.map((loc) => (
                <li key={loc.slug}>
                  <Link to={`/locations/${loc.slug}`} className="text-sm text-white/50 hover:text-white transition-colors">
                    {loc.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Secondary nav row */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 py-6 border-t border-white/10 text-sm text-white/60">
          {PRIMARY_NAV.filter((n) => !['Fine Dining', 'Events & Catering', 'Events', 'In-Villa Service', 'Staffing'].includes(n.label)).map((l) => (
            <Link key={l.href} to={l.href} className="hover:text-[#C5A028] transition-colors">
              {l.label}
            </Link>
          ))}
          <Link to="/services" className="hover:text-[#C5A028] transition-colors">Services</Link>
          <Link to="/pricing" className="hover:text-[#C5A028] transition-colors">Pricing</Link>
          <Link to="/calculator" className="hover:text-[#C5A028] transition-colors">Price Calculator</Link>
          <Link to="/faq" className="hover:text-[#C5A028] transition-colors">FAQ</Link>
          <Link to="/reviews" className="hover:text-[#C5A028] transition-colors">Reviews</Link>
          <Link to="/why-mychef" className="hover:text-[#C5A028] transition-colors">Why myCHEF</Link>
          <Link to="/press" className="hover:text-[#C5A028] transition-colors">Press</Link>
          <Link to="/join-our-team" className="hover:text-[#C5A028] transition-colors">Join the Team</Link>
          <Link to="/partner-platform" className="hover:text-[#C5A028] transition-colors">Partner Platform</Link>
          <Link to="/journal" className="hover:text-[#C5A028] transition-colors">Journal</Link>
          <Link to="/blog" className="hover:text-[#C5A028] transition-colors">Blog & Guides</Link>
          <Link to={PRIMARY_CTA.href} className="text-[#C5A028] font-semibold hover:text-white transition-colors">
            {PRIMARY_CTA.label}
          </Link>
        </div>

        {/* Contact row */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 py-6 border-t border-white/10 text-sm text-white/60">
          <a href="tel:+6282237565997" className="inline-flex items-center gap-1.5 hover:text-[#C5A028] transition-colors">
            <Phone className="w-3.5 h-3.5" /> +62 822-3756-5997
          </a>
          <a href="mailto:indonesia@mychef.id" className="inline-flex items-center gap-1.5 hover:text-[#C5A028] transition-colors">
            <Mail className="w-3.5 h-3.5" /> indonesia@mychef.id
          </a>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" /> Bali, Indonesia
          </span>
          <a
            href="https://instagram.com/mychef.id"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-[#C5A028] transition-colors"
          >
            <Instagram className="w-3.5 h-3.5" /> Instagram
          </a>
          <a
            href="https://wa.me/6282237565997"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-[#C5A028] transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
          </a>
        </div>

        {/* Staff login + legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-t border-white/10">
          <Link
            to="/partner-platform"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-white/40 hover:text-[#C5A028] transition-colors px-4 py-2 rounded-full border border-white/10"
          >
            <LogIn className="w-3.5 h-3.5" /> Staff Login
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-white/40">
            <Link to="/terms" className="hover:text-[#C5A028] transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-[#C5A028] transition-colors">Privacy</Link>
            <Link to="/cancellation" className="hover:text-[#C5A028] transition-colors">Cancellation</Link>
          </div>
        </div>

        <p className="text-xs text-white/30 text-center mt-4">
          &copy; {new Date().getFullYear()} myCHEF.id. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
