import { useLocation } from 'react-router-dom'
import { ARTICLE_CONTENT } from '@/data/content/articleContent'

interface Props {
  className?: string
  invert?: boolean
  /** When false, preserves any <h1> tags inside the article content.
   *  Default is true: every <h1> in the article body is rendered as <h2>
   *  so the page keeps exactly one top-level heading (the hero <h1>).
   *  Only set to false if this component is the sole source of the page h1. */
  downgradeFirstH1?: boolean
}

export function ArticleContentSection({ className = '', invert = false, downgradeFirstH1 = true }: Props) {
  const { pathname } = useLocation()
  const path = pathname.replace(/\/$/, '') || '/'
  const html = ARTICLE_CONTENT[path] || ARTICLE_CONTENT[`${path}/`]

  if (!html) return null

  const renderedHtml = downgradeFirstH1
    ? html.replace(/<h1([^>]*)>(.*?)<\/h1>/gi, '<h2$1>$2</h2>')
    : html

  // Styling lives in src/index.css under .article-prose. Tailwind `prose-*`
  // utilities were used here previously but are inert: @tailwindcss/typography
  // is not a dependency of this project, so the injected HTML rendered
  // unstyled. Do not reintroduce prose-* classes without installing the plugin.
  const baseClasses = invert ? 'article-prose article-prose-invert' : 'article-prose'

  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div
          className={baseClasses}
          dangerouslySetInnerHTML={{ __html: renderedHtml }}
        />
      </div>
    </section>
  )
}
