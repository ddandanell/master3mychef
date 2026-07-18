import { Check } from 'lucide-react'
import { BarServiceImageSection } from './BarServiceImageSection'
import { BarServiceSectionHeader } from './BarServiceSectionHeader'
import type { BarService } from '@/data/bar-services'

type SectionKey = 'whyBali' | 'whoFor' | 'commonMistakes' | 'successKpis' | 'connections'

interface Props {
  sections: NonNullable<BarService['expandedSections']>
  images?: Partial<Record<SectionKey, { src: string; alt: string }>>
}

const SECTION_ORDER: Array<keyof NonNullable<BarService['expandedSections']>> = [
  'whyBali',
  'whoFor',
  'commonMistakes',
  'compliance',
  'successKpis',
  'connections',
]

function getImagePosition(index: number): 'left' | 'right' {
  return index % 2 === 0 ? 'right' : 'left'
}

export function BarServiceExpandedContent({ sections, images }: Props) {
  const renderSection = (
    key: keyof NonNullable<BarService['expandedSections']>,
    index: number,
    children: React.ReactNode
  ) => {
    const image = (images as Record<string, { src: string; alt: string }> | undefined)?.[key]
    const position = getImagePosition(index)

    return (
      <div key={key}>
        {image ? (
          <BarServiceImageSection image={image} imagePosition={position}>
            {children}
          </BarServiceImageSection>
        ) : (
          children
        )}
      </div>
    )
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 space-y-16 md:space-y-24">
        {sections.whyBali &&
          renderSection(
            'whyBali',
            SECTION_ORDER.indexOf('whyBali'),
            <>
              <BarServiceSectionHeader title={sections.whyBali.title} />
              <div className="max-w-3xl space-y-4 text-[#4A4745]">
                {sections.whyBali.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </>
          )}

        {sections.whoFor &&
          renderSection(
            'whoFor',
            SECTION_ORDER.indexOf('whoFor'),
            <>
              <BarServiceSectionHeader title={sections.whoFor.title} />
              <div className="grid md:grid-cols-2 gap-6">
                {sections.whoFor.items.map((item, i) => (
                  <div key={i} className="bg-stone-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.label}
                    </h3>
                    <p className="text-[#4A4745]">{item.description}</p>
                  </div>
                ))}
              </div>
            </>
          )}

        {sections.commonMistakes &&
          renderSection(
            'commonMistakes',
            SECTION_ORDER.indexOf('commonMistakes'),
            <>
              <BarServiceSectionHeader title={sections.commonMistakes.title} />
              <ul className="max-w-3xl space-y-3 text-[#4A4745]">
                {sections.commonMistakes.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: '#C5A028' }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

        {sections.compliance &&
          renderSection(
            'compliance',
            SECTION_ORDER.indexOf('compliance'),
            <div className="border border-amber-200 bg-amber-50/50 rounded-lg p-6 md:p-8">
              <BarServiceSectionHeader title={sections.compliance.title} />
              <div className="max-w-3xl space-y-4 text-[#4A4745]">
                {sections.compliance.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          )}

        {sections.successKpis &&
          renderSection(
            'successKpis',
            SECTION_ORDER.indexOf('successKpis'),
            <>
              <BarServiceSectionHeader title={sections.successKpis.title} />
              <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
                {sections.successKpis.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4745]">{item}</span>
                  </div>
                ))}
              </div>
            </>
          )}

        {sections.connections &&
          renderSection(
            'connections',
            SECTION_ORDER.indexOf('connections'),
            <>
              <BarServiceSectionHeader title={sections.connections.title} />
              <div className="max-w-3xl space-y-4 text-[#4A4745]">
                {sections.connections.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </>
          )}
      </div>
    </section>
  )
}
