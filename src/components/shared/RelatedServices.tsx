import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface RelatedService {
  title: string
  description: string
  path: string
  category: string
}

interface RelatedServicesProps {
  services: RelatedService[]
  title?: string
}

export default function RelatedServices({ services, title = 'Related Services' }: RelatedServicesProps) {
  return (
    <section className="py-16 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="font-playfair text-3xl md:text-4xl text-center mb-12 text-[#0D0C0A]">
          {title}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.path}
              to={service.path}
              className="group bg-white p-6 rounded-lg border border-[#E5E3DF] hover:border-[#C5A028] transition-all duration-300 hover:shadow-lg"
            >
              <div className="mb-3">
                <span className="text-xs uppercase tracking-[0.3em] text-[#9B8B7E] font-medium">
                  {service.category}
                </span>
              </div>
              
              <h3 className="font-playfair text-xl mb-2 text-[#0D0C0A] group-hover:text-[#C5A028] transition-colors">
                {service.title}
              </h3>
              
              <p className="text-sm text-[#4A4745] mb-4 line-clamp-2">
                {service.description}
              </p>
              
              <div className="flex items-center text-[#C5A028] text-sm font-medium group-hover:gap-2 transition-all">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
