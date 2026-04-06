import { MetadataRoute } from 'next'
import { getAllBlogSlugs } from '@/lib/blog'

const baseUrl = 'https://skywalking.dev'
const locales = ['es', 'en']

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/hive', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/faq', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/manual-de-marca', priority: 0.5, changeFrequency: 'monthly' as const },
  ]

  // Get all blog slugs
  const blogSlugs = getAllBlogSlugs()
  const blogRoutes = blogSlugs.map((slug) => ({
    path: `/blog/${slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }))

  // Combine regular routes and blog routes
  const allRoutes = [...routes, ...blogRoutes]

  return locales.flatMap((locale) =>
    allRoutes.map(({ path, priority, changeFrequency }) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
      alternates: {
        languages: {
          es: `${baseUrl}/es${path}`,
          en: `${baseUrl}/en${path}`,
          'x-default': `${baseUrl}/es${path}`,
        },
      },
    }))
  )
}
