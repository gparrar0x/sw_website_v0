import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface BlogPostMetadata {
  title: string
  subtitle?: string
  author: string
  author_role?: string
  date: string
  tags?: string[]
  reading_time?: string
  og_description?: string
  draft?: boolean
}

export interface BlogPost {
  metadata: BlogPostMetadata
  content: string
  slug: string
}

function blogDir(locale: string): string {
  return path.join(process.cwd(), 'public/blog', locale)
}

function fallbackLocale(locale: string): string {
  return locale === 'es' ? 'en' : 'es'
}

export function getBlogPostBySlug(slug: string, locale = 'en'): BlogPost | null {
  for (const loc of [locale, fallbackLocale(locale)]) {
    try {
      const fullPath = path.join(blogDir(loc), `${slug}.md`)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      return { metadata: data as BlogPostMetadata, content, slug }
    } catch {
      continue
    }
  }
  return null
}

export function getAllBlogSlugs(locale = 'en'): string[] {
  const slugs = new Set<string>()
  for (const loc of [locale, fallbackLocale(locale)]) {
    try {
      const dir = blogDir(loc)
      if (!fs.existsSync(dir)) continue
      for (const file of fs.readdirSync(dir)) {
        if (file.endsWith('.md')) slugs.add(file.replace(/\.md$/, ''))
      }
    } catch {
      continue
    }
  }
  return Array.from(slugs)
}

export function getAllBlogPosts(locale = 'en'): BlogPost[] {
  const slugs = getAllBlogSlugs(locale)
  return slugs
    .map((slug) => getBlogPostBySlug(slug, locale))
    .filter((p): p is BlogPost => p !== null && !p.metadata.draft)
    .sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime())
}
