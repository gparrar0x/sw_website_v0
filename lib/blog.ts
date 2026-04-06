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
}

export interface BlogPost {
  metadata: BlogPostMetadata
  content: string
  slug: string
}

const blogDirectory = path.join(process.cwd(), 'public/blog')

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      metadata: data as BlogPostMetadata,
      content,
      slug,
    }
  } catch {
    return null
  }
}

export function getAllBlogSlugs(): string[] {
  try {
    if (!fs.existsSync(blogDirectory)) {
      return []
    }
    const files = fs.readdirSync(blogDirectory)
    return files
      .filter((file) => file.endsWith('.md'))
      .map((file) => file.replace(/\.md$/, ''))
  } catch {
    return []
  }
}

export function getAllBlogPosts(): BlogPost[] {
  const slugs = getAllBlogSlugs()
  return slugs
    .map((slug) => getBlogPostBySlug(slug))
    .filter((p): p is BlogPost => p !== null)
    .sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime())
}
