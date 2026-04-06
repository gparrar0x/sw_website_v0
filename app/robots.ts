import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/*/*/presupuesto/', // Private budget pages
        ],
      },
    ],
    sitemap: 'https://skywalking.dev/sitemap.xml',
  }
}
