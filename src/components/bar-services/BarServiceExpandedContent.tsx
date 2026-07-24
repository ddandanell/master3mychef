import { Check } from 'lucide-react'
import OptimizedImage from '@/components/OptimizedImage'
import { BarServiceSectionHeader } from './BarServiceSectionHeader'
import type { BarService } from '@/data/bar-services'

type SectionKey = 'whyBali' | 'whoFor' | 'commonMistakes' | 'successKpis' | 'connections'

interface Props {
  sections: NonNullable<BarService['expandedSections']>
  images?: Partial<Record<SectionKey, { src: string; alt: string }>>
}

function getImagePosition(index: number): 'left' | 'right' {
  return index % 2 === 0 ? 'right' : 'left'
}

function ImageMask({
  image,
  position,
}: {
  image: { src: string; alt: string }
  position: 'left' | 'right'
}) {
  return (
    <div
      className={`relative group overflow-hidden rounded-2xl md:rounded-[2rem] ${
        position === 'left' ? 'md:-ml-8 lg:-ml-16' : 'md:-mr-8 lg:-mr-16'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0A0A]/40 via-[#C5A028]/10 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[#C5A028]/5 mix-blend-overlay z-10 pointer-events-none" />
      <OptimizedImage
        src={image.src}
        alt={image.alt}
        className="w-full h-72 sm:h-80 md:h-[28rem] lg:h-[32rem] object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 rounded-2xl md:rounded-[2rem] ring-1 ring-inset ring-[#C5A028]/15 z-20 pointer-events-none" />
    </div>
  )
}

export function BarServiceExpandedContent({ sections, images }: Props) {
  let visibleIndex = 0

  return (
    <div className="overflow-hidden">
      {sections.whyBali && (
        <section
          className={`py-20 md:py-28 ${visibleIndex % 2 === 0 ? 'bg-[#0A0A0A]' : 'bg-[#0F0E0C]'}`}
        >
          <ExpandedWhyBali
            section={sections.whyBali}
            image={(images as Record<string, { src: string; alt: string }> | undefined)?.whyBali}
            position={getImagePosition(visibleIndex++)}
          />
        </section>
      )}

      {sections.whoFor && (
        <section
          className={`py-20 md:py-28 ${visibleIndex % 2 === 0 ? 'bg-[#0A0A0A]' : 'bg-[#0F0E0C]'}`}
        >
          <ExpandedWhoFor
            section={sections.whoFor}
            image={(images as Record<string, { src: string; alt: string }> | undefined)?.whoFor}
            position={getImagePosition(visibleIndex++)}
          />
        </section>
      )}

      {sections.commonMistakes && (
        <section
          className={`py-20 md:py-28 ${visibleIndex % 2 === 0 ? 'bg-[#0A0A0A]' : 'bg-[#0F0E0C]'}`}
        >
          <ExpandedCommonMistakes
            section={sections.commonMistakes}
            image={(images as Record<string, { src: string; alt: string }> | undefined)?.commonMistakes}
            position={getImagePosition(visibleIndex++)}
          />
        </section>
      )}

      {sections.compliance && (
        <section
          className={`py-20 md:py-28 ${visibleIndex % 2 === 0 ? 'bg-[#0A0A0A]' : 'bg-[#0F0E0C]'}`}
        >
          <ExpandedCompliance section={sections.compliance} />
        </section>
      )}

      {sections.successKpis && (
        <section
          className={`py-20 md:py-28 ${visibleIndex % 2 === 0 ? 'bg-[#0A0A0A]' : 'bg-[#0F0E0C]'}`}
        >
          <ExpandedSuccessKpis
            section={sections.successKpis}
            image={(images as Record<string, { src: string; alt: string }> | undefined)?.successKpis}
            position={getImagePosition(visibleIndex++)}
          />
        </section>
      )}

      {sections.connections && (
        <section
          className={`py-20 md:py-28 ${visibleIndex % 2 === 0 ? 'bg-[#0A0A0A]' : 'bg-[#0F0E0C]'}`}
        >
          <ExpandedConnections
            section={sections.connections}
            image={(images as Record<string, { src: string; alt: string }> | undefined)?.connections}
            position={getImagePosition(visibleIndex++)}
          />
        </section>
      )}
    </div>
  )
}

function ExpandedWhyBali({
  section,
  image,
  position,
}: {
  section: { title: string; paragraphs: string[] }
  image?: { src: string; alt: string }
  position: 'left' | 'right'
}) {
  const content = (
    <>
      <BarServiceSectionHeader title={section.title} variant="dark" />
      <div className="max-w-3xl space-y-5 text-[#F5F2EB]/80 text-base md:text-lg leading-relaxed">
        {section.paragraphs.map((p, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
        ))}
      </div>
    </>
  )

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {image ? (
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className={`${position === 'left' ? 'md:order-2' : 'md:order-1'}`}>{content}</div>
          <div className={`${position === 'left' ? 'md:order-1' : 'md:order-2'}`}>
            <ImageMask image={image} position={position} />
          </div>
        </div>
      ) : (
        content
      )}
    </div>
  )
}

function ExpandedWhoFor({
  section,
  image,
  position,
}: {
  section: { title: string; items: { label: string; description: string }[] }
  image?: { src: string; alt: string }
  position: 'left' | 'right'
}) {
  const content = (
    <>
      <BarServiceSectionHeader title={section.title} variant="dark" />
      <div className="grid sm:grid-cols-2 gap-5">
        {section.items.map((item, i) => (
          <div
            key={i}
            className="p-6 rounded-xl bg-[#1A1A1A]/40 border border-[#F5F2EB]/10 backdrop-blur-sm transition-all duration-300 hover:border-[#C5A028]/30 hover:bg-[#1A1A1A]/60"
          >
            <h3 className="text-lg font-semibold text-[#F5F2EB] mb-2">{item.label}</h3>
            <p
              className="text-[#F5F2EB]/65 text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          </div>
        ))}
      </div>
    </>
  )

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {image ? (
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className={`${position === 'left' ? 'md:order-2' : 'md:order-1'}`}>{content}</div>
          <div className={`${position === 'left' ? 'md:order-1' : 'md:order-2'}`}>
            <ImageMask image={image} position={position} />
          </div>
        </div>
      ) : (
        content
      )}
    </div>
  )
}

function ExpandedCommonMistakes({
  section,
  image,
  position,
}: {
  section: { title: string; items: string[] }
  image?: { src: string; alt: string }
  position: 'left' | 'right'
}) {
  const content = (
    <>
      <BarServiceSectionHeader title={section.title} variant="dark" />
      <ul className="max-w-3xl space-y-4">
        {section.items.map((item, i) => (
          <li key={i} className="flex items-start gap-4">
            <span
              className="w-2 h-2 rounded-full mt-2.5 flex-shrink-0"
              style={{ backgroundColor: '#C5A028' }}
            />
            <span
              className="text-[#F5F2EB]/80 text-base md:text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          </li>
        ))}
      </ul>
    </>
  )

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {image ? (
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className={`${position === 'left' ? 'md:order-2' : 'md:order-1'}`}>{content}</div>
          <div className={`${position === 'left' ? 'md:order-1' : 'md:order-2'}`}>
            <ImageMask image={image} position={position} />
          </div>
        </div>
      ) : (
        content
      )}
    </div>
  )
}

function ExpandedCompliance({
  section,
}: {
  section: { title: string; paragraphs: string[] }
}) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-4xl mx-auto p-8 md:p-12 rounded-2xl border border-[#C5A028]/20 bg-gradient-to-br from-[#1A1A1A]/80 to-[#0F0E0C]/80 backdrop-blur-sm overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C5A028]/40 to-transparent" />
        <BarServiceSectionHeader title={section.title} variant="dark" align="center" />
        <div className="max-w-3xl mx-auto space-y-5 text-[#F5F2EB]/80 text-base md:text-lg leading-relaxed text-center">
          {section.paragraphs.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>
      </div>
    </div>
  )
}

function ExpandedSuccessKpis({
  section,
  image,
  position,
}: {
  section: { title: string; items: string[] }
  image?: { src: string; alt: string }
  position: 'left' | 'right'
}) {
  const content = (
    <>
      <BarServiceSectionHeader title={section.title} variant="dark" />
      <div className="grid sm:grid-cols-2 gap-4 max-w-4xl">
        {section.items.map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-4 p-5 rounded-xl bg-[#1A1A1A]/40 border border-[#F5F2EB]/10 backdrop-blur-sm"
          >
            <Check className="w-5 h-5 text-[#C5A028] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
            <span
              className="text-[#F5F2EB]/90 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          </div>
        ))}
      </div>
    </>
  )

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {image ? (
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className={`${position === 'left' ? 'md:order-2' : 'md:order-1'}`}>{content}</div>
          <div className={`${position === 'left' ? 'md:order-1' : 'md:order-2'}`}>
            <ImageMask image={image} position={position} />
          </div>
        </div>
      ) : (
        content
      )}
    </div>
  )
}

function ExpandedConnections({
  section,
  image,
  position,
}: {
  section: { title: string; paragraphs: string[] }
  image?: { src: string; alt: string }
  position: 'left' | 'right'
}) {
  const content = (
    <>
      <BarServiceSectionHeader title={section.title} variant="dark" />
      <div className="max-w-3xl space-y-5 text-[#F5F2EB]/80 text-base md:text-lg leading-relaxed">
        {section.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </>
  )

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {image ? (
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className={`${position === 'left' ? 'md:order-2' : 'md:order-1'}`}>{content}</div>
          <div className={`${position === 'left' ? 'md:order-1' : 'md:order-2'}`}>
            <ImageMask image={image} position={position} />
          </div>
        </div>
      ) : (
        content
      )}
    </div>
  )
}
