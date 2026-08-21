import { useEffect } from 'react'
import { collectFirstParty } from '@/lib/collect'
import { serviceAreaFromPath } from '@/lib/analytics'

const FILE_EXT = /\.(pdf|zip|docx?|xlsx?|pptx?|csv|mp4|mp3)(\?|$)/i

/**
 * GA4-style automatic collection we own: outbound links and file downloads.
 * WhatsApp/tel/mailto stay on the existing conversion trackers.
 */
export default function GaParityTracker(): null {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const origin = event.target as HTMLElement | null
      const anchor = origin?.closest('a') as HTMLAnchorElement | null
      if (!anchor?.href) return
      const href = anchor.href
      if (/wa\.me|wa\.link|whatsapp|^tel:|^mailto:/i.test(href)) return

      try {
        const url = new URL(href, window.location.href)
        const extra = {
          service_area: serviceAreaFromPath(window.location.pathname),
          metadata: { link_url: url.href.slice(0, 500), link_text: (anchor.textContent || '').trim().slice(0, 100) },
        }
        if (FILE_EXT.test(url.pathname)) {
          collectFirstParty('file_download', extra)
          return
        }
        if (url.hostname && url.hostname !== window.location.hostname) {
          collectFirstParty('outbound_click', extra)
        }
      } catch {
        /* ignore bad hrefs */
      }
    }

    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  return null
}
