import {
  getSupportingLandingVisual,
  type SupportingLandingVisual,
} from '@/data/supportingLandingVisuals'

/**
 * Turns long HTML walls of H2/p/ul into mobile-friendly section cards
 * and injects mid-content images for supporting SEO landings.
 */
export function enhanceSupportingLandingHtml(html: string, slug: string): string {
  if (!html?.trim()) return html

  const visual = getSupportingLandingVisual(slug)
  // Always sectionize landings; inject images when we have a visual map.
  return sectionizeByH2(html, visual)
}

function sectionizeByH2(html: string, visual: SupportingLandingVisual | null): string {
  // Split on H2 while keeping delimiters
  const parts = html.split(/(?=<h2\b)/i)
  if (parts.length < 2) {
    return wrapLead(html)
  }

  const lead = parts[0]?.trim() ?? ''
  const sections: string[] = []
  if (lead) {
    sections.push(`<div class="supporting-lead">${lead}</div>`)
  }

  let h2Index = 0
  for (let i = 1; i < parts.length; i++) {
    const block = parts[i].trim()
    if (!block) continue
    sections.push(
      `<section class="supporting-section" data-section="${h2Index}">` +
        `<div class="supporting-section-inner">${block}</div>` +
        `</section>`,
    )

    if (visual) {
      for (const mid of visual.mid) {
        if (mid.afterH2Index === h2Index) {
          sections.push(imageFigure(mid.src, mid.alt))
        }
      }
    }
    h2Index += 1
  }

  return sections.join('\n')
}

function wrapLead(html: string): string {
  return `<div class="supporting-lead">${html}</div>`
}

function imageFigure(src: string, alt: string): string {
  return (
    `<figure class="supporting-figure">` +
    `<img src="${src}" alt="${escapeAttr(alt)}" width="1344" height="768" ` +
    `loading="lazy" decoding="async" class="supporting-figure-img" />` +
    `</figure>`
  )
}

function escapeAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}
