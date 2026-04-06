import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  // Match all pathnames except for:
  // - API routes
  // - Static files (with extension)
  // - _next internals
  matcher: ['/((?!api|_next/static|_next/image|favicon|.*\\..*).*)'],
}
