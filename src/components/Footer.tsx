import { Link } from 'react-router-dom'
import { Instagram, MessageCircle, LogIn, MapPin, Mail, ChefHat } from 'lucide-react'
import { PILLARS, LOCATIONS, PRIMARY_NAV, PRIMARY_CTA } from '../data/siteArchitecture'

export default function Footer() {
  const pillars = Object.values(PILLARS)
  const locations = Object.values(LOCATIONS)

  return (
    <footer className="relative bg-gradient-to-b from-[#0A0A0A] to-black text-white pt-20 pb-8 noise-pattern overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A028]/30 to-transparent" />
      
      <div className="max-w-[1200px] mx-auto px-6 relative">
        {/* Brand row - Enhanced with better visual hierarchy */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 mb-16 pb-12 border-b border-white/5">
          <div className="lg:max-w-md">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#C5A028]/10 rounded-lg">
                <ChefHat className="w-6 h-6 text-[#C5A028]" />
              </div>
              <h3 className="text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                my<span className="text-[#C5A028]">CHEF</span>
              </h3>
            </div>
            <p className="text-base text-white/70 leading-relaxed mb-6">
              Private chef, villa catering, and full-service events across Bali. Same-day WhatsApp confirmation.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/mychef.id"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/5 hover:bg-[#C5A028]/20 rounded-full transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white/70 hover:text-[#C5A028]" />
              </a>
              <a
                href="https://wa.me/6282237565997"
                target="_blank"
                rel="noopener noreferrer"
                data-source="footer-social"
                className="p-2.5 bg-white/5 hover:bg-[#C5A028]/20 rounded-full transition-all hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-white/70 hover:text-[#C5A028]" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#C5A028] mb-3 font-semibold">Contact Us</p>
              <a
                href="https://wa.me/6282237565997?text=Hi%20myCHEF"
                target="_blank"
                rel="noopener noreferrer"
                data-source="footer-top"
                className="inline-flex items-center gap-2.5 text-sm font-semibold bg-[#C5A028] text-black px-6 py-3.5 rounded-full hover:bg-[#D4B033] transition-all shadow-lg shadow-[#C5A028]/20 hover:shadow-xl hover:shadow-[#C5A028]/30 hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" /> +62 822-3756-5997
              </a>
            </div>
            <div className="space-y-2">
              <a 
                href="mailto:indonesia@mychef.id" 
                className="flex items-center gap-2 text-sm text-white/60 hover:text-[#C5A028] transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                indonesia@mychef.id
              </a>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <MapPin className="w-4 h-4" />
                Bali, Indonesia
              </div>
            </div>
          </div>
        </div>

        {/* Sitemap grid - Enhanced with better spacing and hover effects */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-10 py-12">
          {pillars.map((pillar) => (
            <div key={pillar.slug} className="group">
              <h4 className="text-xs uppercase tracking-[0.25em] text-[#C5A028] mb-5 font-bold group-hover:text-[#D4B033] transition-colors">
                {pillar.navLabel}
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to={pillar.url} 
                    className="text-sm text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all font-medium"
                  >
                    Overview
                  </Link>
                </li>
                {pillar.subPages.map((sub) => (
                  <li key={sub.slug}>
                    <Link 
                      to={`${pillar.url}/${sub.slug}`} 
                      className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all"
                    >
                      {sub.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="group">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C5A028] mb-5 font-bold group-hover:text-[#D4B033] transition-colors">Locations</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/locations" 
                  className="text-sm text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all font-medium"
                >
                  Bali Regions
                </Link>
              </li>
              {locations.map((loc) => (
                <li key={loc.slug}>
                  <Link 
                    to={`/locations/${loc.slug}`} 
                    className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {loc.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link 
                  to="/jakarta" 
                  className="text-sm text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all font-medium"
                >
                  Jakarta Expansion
                </Link>
              </li>
              <li>
                <Link 
                  to="/jakarta" 
                  className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all"
                >
                  Private Chef Jakarta
                </Link>
              </li>
              <li>
                <Link 
                  to="/private-chef-menteng" 
                  className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all"
                >
                  Chef in Menteng
                </Link>
              </li>
            </ul>
          </div>

          <div className="group">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C5A028] mb-5 font-bold group-hover:text-[#D4B033] transition-colors">Planning Guides</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/help" 
                  className="text-sm text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all font-medium"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link 
                  to="/help/pricing" 
                  className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all"
                >
                  Pricing Guide
                </Link>
              </li>
              <li>
                <Link 
                  to="/help/menu-guide" 
                  className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all"
                >
                  Menu Planning
                </Link>
              </li>
              <li>
                <Link 
                  to="/help/wedding-guide" 
                  className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all"
                >
                  Wedding Guide
                </Link>
              </li>
              <li>
                <Link 
                  to="/help/corporate-guide" 
                  className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all"
                >
                  Corporate Guide
                </Link>
              </li>
              <li>
                <Link 
                  to="/help/staffing-guide" 
                  className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all"
                >
                  Staffing Guide
                </Link>
              </li>
              <li>
                <Link 
                  to="/journal" 
                  className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all"
                >
                  myCHEF Journal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Secondary nav row - Enhanced with better visual separation */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 py-8 border-y border-white/5 text-sm text-white/50">
          {PRIMARY_NAV.filter((n) => !['Fine Dining', 'Events & Catering', 'Events', 'In-Villa Service', 'Staffing'].includes(n.label)).map((l) => (
            <Link 
              key={l.href} 
              to={l.href} 
              className="hover:text-[#C5A028] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#C5A028] hover:after:w-full after:transition-all"
            >
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
          <Link 
            to={PRIMARY_CTA.href} 
            className="px-4 py-1.5 bg-[#C5A028]/10 text-[#C5A028] font-semibold rounded-full hover:bg-[#C5A028] hover:text-black transition-all"
          >
            Book Now
          </Link>
        </div>

        {/* Staff login + legal - Enhanced layout */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-8">
          <Link
            to="/partner-platform"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/40 hover:text-[#C5A028] transition-all px-5 py-2.5 rounded-full border border-white/10 hover:border-[#C5A028]/30 hover:bg-white/5"
          >
            <LogIn className="w-4 h-4" /> Staff Login
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/40">
            <Link to="/terms" className="hover:text-[#C5A028] transition-colors">Terms of Service</Link>
            <span className="text-white/20">•</span>
            <Link to="/privacy" className="hover:text-[#C5A028] transition-colors">Privacy Policy</Link>
            <span className="text-white/20">•</span>
            <Link to="/cancellation" className="hover:text-[#C5A028] transition-colors">Cancellation Policy</Link>
          </div>
        </div>

        {/* Copyright - Enhanced with decorative element */}
        <div className="relative py-6">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#C5A028]/20 to-transparent" />
          <p className="text-xs text-white/30 text-center">
            &copy; {new Date().getFullYear()} myCHEF.id. All rights reserved.
          </p>
        </div>
      </div>
      
      {/* Bottom decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C5A028]/20 to-transparent" />
    </footer>
  )
}
