// Path-specific: 308 /catering/ → /catering.
// GSC currently indexes both as separate pages (user canonical is /catering,
// Google-selected canonical is /catering/). Do NOT expand this into a
// sitewide trailing-slash rule — PostHog /ingest/e/ and /ingest/s/ must
// keep the trailing slash.
export const config = {
  matcher: '/catering/',
}

export default function middleware(request) {
  return Response.redirect(new URL('/catering', request.url), 308)
}
