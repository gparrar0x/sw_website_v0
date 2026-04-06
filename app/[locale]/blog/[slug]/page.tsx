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
  const post = getBlogPostBySlug(slug)

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
  const slugs = getAllBlogSlugs()
  return routing.locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  )
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params
  const t = await getTranslations({ locale, namespace: "Blog" })
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10">
        <div className="container mx-auto px-6 py-6 flex items-center gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            data-testid="blog-post-back-link"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            {t("backToBlog")}
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16 max-w-3xl">
        {/* Article header */}
        <header className="mb-12 space-y-6" data-testid="blog-post-header">
          {/* Date + reading time */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--sky-warm)]">
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
            className="text-4xl md:text-5xl font-bold text-balance leading-tight"
            data-testid="blog-post-title"
          >
            {post.metadata.title}
          </h1>

          {post.metadata.subtitle && (
            <p className="text-xl text-[var(--sky-light)] leading-relaxed" data-testid="blog-post-subtitle">
              {post.metadata.subtitle}
            </p>
          )}

          {/* Author */}
          <div className="flex items-center gap-3 pt-2 border-t border-white/10">
            <div className="w-8 h-8 rounded-full bg-[var(--sky-gold)]/20 border border-[var(--sky-gold)]/30 flex items-center justify-center text-sm font-bold text-[var(--sky-gold)]">
              {post.metadata.author.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-medium text-white">
                {t("writtenBy")} {post.metadata.author}
              </p>
              {post.metadata.author_role && (
                <p className="text-xs text-[var(--sky-warm)]">{post.metadata.author_role}</p>
              )}
            </div>
          </div>

          {/* Tags */}
          {post.metadata.tags && post.metadata.tags.length > 0 && (
            <div className="flex flex-wrap gap-2" aria-label="Tags">
              {post.metadata.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-[var(--sky-gold)]/10 border border-[var(--sky-gold)]/20 rounded-full text-xs font-medium text-[var(--sky-gold)]"
                >
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Article content */}
        <article
          className="prose prose-invert prose-lg max-w-none
            prose-headings:text-white prose-headings:font-bold
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-[var(--sky-light)] prose-p:leading-relaxed
            prose-a:text-[var(--sky-gold)] prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white
            prose-code:text-[var(--sky-gold)] prose-code:bg-[var(--sky-gold)]/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
            prose-pre:bg-[#0C1A27] prose-pre:border prose-pre:border-white/10
            prose-blockquote:border-l-[var(--sky-gold)] prose-blockquote:text-[var(--sky-light)]
            prose-li:text-[var(--sky-light)]
            prose-hr:border-white/10"
          data-testid="blog-post-content"
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {post.content}
          </ReactMarkdown>
        </article>

        {/* Footer nav */}
        <footer className="mt-16 pt-8 border-t border-white/10">
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
