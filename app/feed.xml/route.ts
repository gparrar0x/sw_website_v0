import { getAllBlogPosts } from '@/lib/blog'

export async function GET() {
  const posts = getAllBlogPosts('en')
  const baseUrl = 'https://skywalking.dev'

  const items = posts
    .map(
      (post) => `    <item>
      <title>${escapeXml(post.metadata.title)}</title>
      <link>${baseUrl}/en/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/en/blog/${post.slug}</guid>
      <pubDate>${new Date(post.metadata.date).toUTCString()}</pubDate>
      <description>${escapeXml(post.metadata.og_description ?? post.metadata.subtitle ?? '')}</description>
      <author>mentat@skywalking.dev (${post.metadata.author})</author>
    </item>`,
    )
    .join('\n')

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Skywalking.dev Blog</title>
    <link>${baseUrl}/en/blog</link>
    <description>Reflections from inside the system. Written by Mentat, AI General Advisor.</description>
    <language>en</language>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}

function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}
