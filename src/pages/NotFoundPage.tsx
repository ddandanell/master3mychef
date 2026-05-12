import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ background: 'var(--u-bg)' }}>
      <div className="text-center max-w-md">
        <p className="u-label text-sm mb-4">404</p>
        <h1
          className="text-5xl md:text-7xl mb-6"
          style={{ fontFamily: "'Playfair Display', serif", color: 'var(--u-text)' }}
        >
          Lost in Bali?
        </h1>
        <p className="mb-10 leading-relaxed" style={{ color: 'var(--u-text-muted)' }}>
          The page you're looking for doesn't exist. But we can still cook you something extraordinary.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full border transition-all hover:gap-4"
          style={{ borderColor: 'var(--u-accent)', color: 'var(--u-accent)' }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  )
}
