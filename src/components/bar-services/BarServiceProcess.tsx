import { BarServiceImageSection } from './BarServiceImageSection'
import { BarServiceSectionHeader } from './BarServiceSectionHeader'
import type { BarService } from '@/data/bar-services'

interface Props {
  process: BarService['process']
  image?: { src: string; alt: string }
  imagePosition?: 'left' | 'right'
}

export function BarServiceProcess({ process, image, imagePosition = 'right' }: Props) {
  const content = (
    <>
      <BarServiceSectionHeader eyebrow="How it works" title="Our process" variant="dark" />

      {/* Mobile: vertical timeline */}
      <div className="md:hidden relative pl-10">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-[#C5A028]/60 via-[#C5A028]/20 to-transparent" />
        <div className="space-y-10">
          {process.map((step) => (
            <div key={step.step} className="relative">
              <span className="absolute -left-10 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#0F0E0C] border border-[#C5A028]/40 text-[#C5A028] text-xs font-playfair font-bold">
                {step.step}
              </span>
              <h3 className="text-lg font-semibold text-[#F5F2EB] mb-2">{step.title}</h3>
              <p
                className="text-[#F5F2EB]/60 text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: step.description }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: numbered grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {process.map((step, i) => (
          <div key={step.step} className="relative group">
            <span className="block text-6xl lg:text-7xl font-playfair text-[#C5A028]/15 leading-none mb-4 transition-colors group-hover:text-[#C5A028]/25">
              {String(step.step).padStart(2, '0')}
            </span>
            <h3 className="text-xl font-semibold text-[#F5F2EB] mb-3">{step.title}</h3>
            <p
              className="text-[#F5F2EB]/60 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: step.description }}
            />
            {i < process.length - 1 && (
              <div className="hidden lg:block absolute top-8 -right-4 w-8 h-px bg-gradient-to-r from-[#C5A028]/30 to-transparent" />
            )}
          </div>
        ))}
      </div>
    </>
  )

  return (
    <section className="py-20 md:py-28 bg-[#0A0A0A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {image ? (
          <BarServiceImageSection image={image} imagePosition={imagePosition} bgColor="charcoal">
            {content}
          </BarServiceImageSection>
        ) : (
          content
        )}
      </div>
    </section>
  )
}
