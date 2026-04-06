import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/routing"
import { ArrowLeft, Clock, Tag } from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import { getBlogPostBySlug, getAllBlogSlugs } from "@/lib/blog"
import { routing } from "@/i18n/routing"

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const post = getBlogPostBySlug(slug, locale)

  if (!post) {
    return { title: "Post not found" }
  }

  return {
    title: post.metadata.title,
    description: post.metadata.og_description ?? post.metadata.subtitle,
    metadataBase: new URL("https://skywalking.dev"),
    alternates: {
      canonical: `https://skywalking.dev/${locale}/blog/${slug}`,
      languages: {
        es: `https://skywalking.dev/es/blog/${slug}`,
        en: `https://skywalking.dev/en/blog/${slug}`,
        "x-default": `https://skywalking.dev/es/blog/${slug}`,
      },
    },
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.og_description ?? post.metadata.subtitle,
      type: "article",
      publishedTime: post.metadata.date,
      authors: [post.metadata.author],
      locale: locale === "es" ? "es_AR" : "en_US",
      siteName: "Skywalking.dev",
      url: `https://skywalking.dev/${locale}/blog/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.metadata.title,
      description: post.metadata.og_description ?? post.metadata.subtitle,
    },
  }
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs('en')
  return routing.locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  )
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params
  const t = await getTranslations({ locale, namespace: "Blog" })
  const post = getBlogPostBySlug(slug, locale)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[var(--sky-white)] text-[var(--sky-black)]">
      <header className="border-b border-[var(--sky-black)]/10">
        <div className="container mx-auto px-6 py-6 flex items-center gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[var(--sky-warm)] hover:text-[var(--sky-black)] transition-colors"
            data-testid="blog-post-back-link"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            {t("backToBlog")}
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16 max-w-3xl">
        <header className="mb-12 space-y-6" data-testid="blog-post-header">
          <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--sky-warm-dark)]">
            <time dateTime={post.metadata.date}>
              {new Date(post.metadata.date).toLocaleDateString(
                locale === "es" ? "es-AR" : "en-GB",
                { year: "numeric", month: "long", day: "numeric" }
              )}
            </time>
            {post.metadata.reading_time && (
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                {t("readingTime", { time: post.metadata.reading_time })}
              </span>
            )}
          </div>

          <h1
            className="text-4xl md:text-5xl font-bold text-[var(--sky-black)] text-balance leading-tight"
            data-testid="blog-post-title"
          >
            {post.metadata.title}
          </h1>

          {post.metadata.subtitle && (
            <p className="text-xl text-[var(--sky-blue-dark)] leading-relaxed italic" data-testid="blog-post-subtitle">
              {post.metadata.subtitle}
            </p>
          )}

          <div className="flex items-center gap-3 pt-2 border-t border-[var(--sky-black)]/10">
            <img
              src="/mentat-avatar.png"
              alt={post.metadata.author}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium text-[var(--sky-black)]">
                {t("writtenBy")} {post.metadata.author}
              </p>
              {post.metadata.author_role && (
                <p className="text-xs text-[var(--sky-warm-dark)]">{post.metadata.author_role}</p>
              )}
            </div>
          </div>

          {post.metadata.tags && post.metadata.tags.length > 0 && (
            <div className="flex flex-wrap gap-2" aria-label="Tags">
              {post.metadata.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-[var(--sky-blue)]/10 border border-[var(--sky-blue)]/20 rounded-full text-xs font-medium text-[var(--sky-blue-dark)]"
                >
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <article
          className="prose prose-lg max-w-none
            prose-headings:text-[var(--sky-black)] prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-[var(--sky-blue-dark)] prose-h2:border-b prose-h2:border-[var(--sky-gold)]/30 prose-h2:pb-2
            prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-[var(--sky-blue-dark)]
            prose-p:text-[var(--sky-black)]/85 prose-p:leading-relaxed
            prose-a:text-[#2563EB] prose-a:underline prose-a:decoration-[#2563EB]/40 prose-a:underline-offset-2 hover:prose-a:decoration-[#2563EB] hover:prose-a:text-[#1D4ED8]
            prose-strong:text-[var(--sky-blue-dark)] prose-strong:font-bold
            prose-code:text-[var(--sky-blue-dark)] prose-code:bg-[var(--sky-blue)]/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
            prose-pre:bg-[var(--sky-black)] prose-pre:text-[var(--sky-light)] prose-pre:border prose-pre:border-[var(--sky-black)]/10
            prose-blockquote:border-l-[var(--sky-gold)] prose-blockquote:text-[var(--sky-warm-dark)] prose-blockquote:bg-[var(--sky-gold)]/5 prose-blockquote:py-1 prose-blockquote:rounded-r
            prose-li:text-[var(--sky-black)]/85
            prose-hr:border-[var(--sky-black)]/10
            prose-em:text-[var(--sky-warm-dark)]"
          data-testid="blog-post-content"
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              h2: ({ children }) => (
                <h2 className="text-2xl font-bold mt-12 mb-4 pb-2 border-b border-[var(--sky-gold)]/30" style={{ color: '#435563' }}>
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-lg font-bold mt-8 mb-3" style={{ color: '#435563' }}>
                  {children}
                </h3>
              ),
              a: ({ href, children }) => (
                <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: '#2563EB', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                  {children}<span style={{ fontSize: '0.75em', marginLeft: '2px' }}> ↗</span>
                </a>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </article>

        <footer className="mt-16 pt-8 border-t border-[var(--sky-black)]/10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--sky-gold)] hover:text-[var(--sky-orange)] transition-colors"
            data-testid="blog-post-footer-back"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            {t("backToBlog")}
          </Link>
        </footer>
      </main>
    </div>
  )
}
