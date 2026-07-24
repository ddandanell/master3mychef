import { BarServiceImageSection } from './BarServiceImageSection'
import { BarServiceSectionHeader } from './BarServiceSectionHeader'
import type { BarService } from '@/data/bar-services'

interface Props {
  deliverables: BarService['deliverables']
  image?: { src: string; alt: string }
  imagePosition?: 'left' | 'right'
}

export function BarServiceDeliverables({ deliverables, image, imagePosition = 'right' }: Props) {
  const content = (
    <>
      <BarServiceSectionHeader
        eyebrow="What you get"
        title="What we deliver"
        variant="dark"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {deliverables.map((d, i) => (
          <div
            key={i}
            className="group relative p-6 rounded-xl bg-[#1A1A1A]/60 border border-[#C5A028]/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C5A028]/50 hover:bg-[#1A1A1A]/80 hover:shadow-[0_8px_30px_rgba(197,160,40,0.08)]"
          >
            {/* Gold top accent */}
            <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#C5A028]/40 to-transparent" />
            <h3 className="text-lg font-semibold text-[#F5F2EB] mb-3">
              {d.title}
            </h3>
            <p
              className="text-[#F5F2EB]/65 text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: d.description }}
            />
          </div>
        ))}
      </div>
    </>
  )

  return (
    <section className="py-20 md:py-28 bg-[#0F0E0C]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {image ? (
          <BarServiceImageSection image={image} imagePosition={imagePosition} bgColor="stoneDark">
            {content}
          </BarServiceImageSection>
        ) : (
          content
        )}
      </div>
    </section>
  )
}
