import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Article content sometimes ships with legacy <h1> tags. Page templates already
 *  render their own hero <h1>, so any h1 inside injected article HTML should be
 *  demoted to h2 to keep exactly one top-level heading per page. */
export function downgradeArticleH1(html?: string): string {
  if (!html) return ''
  return html.replace(/<h1([^>]*)>(.*?)<\/h1>/gi, '<h2$1>$2</h2>')
}
