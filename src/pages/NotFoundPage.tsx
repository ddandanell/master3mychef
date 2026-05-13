import { Link } from 'react-router-dom'
import { ArrowLeft, Utensils } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden" style={{ background: '#050505' }}>
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(212,175,55,0.08) 0%, transparent 60%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(212,175,55,0.05) 0%, transparent 50%)' }} />
      </div>

      <div className="relative z-10 text-center max-w-lg">
        <Utensils className="w-10 h-10 text-[#D4AF37]/40 mx-auto mb-8" />
        <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>404</p>
        <h1
          className="text-5xl md:text-7xl mb-6 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif", color: '#FFFFFF' }}
        >
          Lost in<br /><span className="italic text-[#D4AF37]">Bali?</span>
        </h1>
        <div className="w-16 h-[1px] bg-[#D4AF37]/40 mx-auto mb-8" />
        <p className="mb-4 leading-relaxed text-white/60 text-lg">
          The page you are looking for does not exist.
        </p>
        <p className="mb-12 leading-relaxed text-white/40 text-sm">
          But we can still cook you something extraordinary.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[#D4AF37]/40 text-[#D4AF37] text-sm tracking-widest uppercase transition-all hover:bg-[#D4AF37]/10 hover:gap-5"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Quick links */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-xs text-white/30">
          <Link to="/fine-dining" className="hover:text-[#D4AF37] transition-colors">Fine Dining</Link>
          <span>&middot;</span>
          <Link to="/villa-chef" className="hover:text-[#6B8E5A] transition-colors">Catering</Link>
          <span>&middot;</span>
          <Link to="/events" className="hover:text-[#2C5F7C] transition-colors">Events</Link>
          <span>&middot;</span>
          <Link to="/contact" className="hover:text-white/60 transition-colors">Contact</Link>
        </div>
      </div>
    </div>
  )
}
