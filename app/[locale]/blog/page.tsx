import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/routing"
import { ArrowLeft, ArrowRight, Clock, Tag } from "lucide-react"
import { getAllBlogPosts } from "@/lib/blog"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "Blog" })

  return {
    title: t("title"),
    description: t("subtitle"),
    alternates: {
      canonical: `https://skywalking.dev/${locale}/blog`,
    },
  }
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "Blog" })
  const posts = getAllBlogPosts(locale)

  return (
    <div className="min-h-screen bg-[var(--sky-white)] text-[var(--sky-black)]">
      <header className="border-b border-[var(--sky-black)]/10">
        <div className="container mx-auto px-6 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[var(--sky-warm-dark)] hover:text-[var(--sky-black)] transition-colors"
            data-testid="blog-back-link"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            {t("backLink")}
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="mb-16 space-y-4" data-testid="blog-hero">
          <h1
            className="text-5xl md:text-6xl font-bold text-[var(--sky-black)] text-balance"
            data-testid="blog-title"
          >
            {t("title")}
          </h1>
          <p className="text-xl text-[var(--sky-warm-dark)] text-pretty">
            {t("subtitle")}
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-[var(--sky-warm-dark)]" data-testid="blog-empty">
            {t("noPostsFound")}
          </p>
        ) : (
          <div className="space-y-8" data-testid="blog-post-list">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group relative bg-white border border-[var(--sky-black)]/10 rounded-2xl p-8 hover:border-[var(--sky-gold)]/30 hover:shadow-lg transition-all duration-300"
                data-testid={`blog-post-${post.slug}`}
              >
                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-[var(--sky-warm-dark)]">
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

                <h2 className="text-2xl font-bold text-[var(--sky-black)] mb-2 group-hover:text-[var(--sky-blue-dark)] transition-colors">
                  {post.metadata.title}
                </h2>

                {post.metadata.subtitle && (
                  <p className="text-[var(--sky-warm-dark)] mb-4 leading-relaxed">
                    {post.metadata.subtitle}
                  </p>
                )}

                {post.metadata.tags && post.metadata.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6" aria-label="Tags">
                    {post.metadata.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-[var(--sky-blue)]/10 border border-[var(--sky-blue)]/20 rounded-full text-xs font-medium text-[var(--sky-blue)]"
                      >
                        <Tag className="w-3 h-3" aria-hidden="true" />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <p className="text-sm text-[var(--sky-warm-dark)]">
                    {t("by")} {post.metadata.author}
                    {post.metadata.author_role && (
                      <span className="text-[var(--sky-warm-dark)]/60"> · {post.metadata.author_role}</span>
                    )}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--sky-blue-dark)] hover:text-[var(--sky-orange)] transition-colors group/link"
                    data-testid={`blog-read-more-${post.slug}`}
                    aria-label={`Read ${post.metadata.title}`}
                  >
                    {t("readMore")}
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
