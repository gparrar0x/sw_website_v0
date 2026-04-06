import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/routing"
import { ArrowLeft } from "lucide-react"
import { faqData } from "@/lib/faq-data"
import { FAQSchema } from "@/components/faq/faq-schema"
import { FAQCTA } from "@/components/faq/faq-cta"
import { FAQClientWrapper } from "@/components/faq/faq-client-wrapper"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "FAQPage" })

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    keywords: [
      "automatización empresarial",
      "inteligencia artificial",
      "n8n",
      "workflow automation",
      "ROI automatización",
      "Claude AI",
      "GPT-4",
      "low-code",
      "no-code",
      "agencia automatización Argentina",
    ],
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      type: "website",
      locale: locale === "es" ? "es_AR" : "en_US",
      siteName: "Skywalking.dev",
    },
    twitter: {
      card: "summary_large_image",
      title: t("metaTitle"),
      description: t("metaDescription"),
    },
    alternates: {
      canonical: `https://skywalking.dev/${locale}/faq`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

export default async function FAQPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "FAQPage" })
  const totalQuestions = faqData.reduce((acc, cat) => acc + cat.faqs.length, 0)

  return (
    <div className="min-h-screen bg-black text-white">
      <FAQSchema
        faqs={faqData.map((cat) => ({
          category: cat.title,
          questions: cat.faqs,
        }))}
      />

      <header className="border-b border-white/10">
        <div className="container mx-auto px-6 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            data-testid="faq-back-link"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            {t("backLink")}
          </Link>
        </div>
      </header>

      <main>
        <section className="container mx-auto px-6 py-16 max-w-5xl">
          <div className="text-center mb-12" data-testid="faq-hero">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance" data-testid="faq-title">
              {t("title")}
            </h1>
            <p className="text-xl text-[#B4C3CD] text-pretty max-w-3xl mx-auto">
              {t("subtitlePart1")}{" "}
              <strong className="text-white">
                {totalQuestions} {t("subtitleQuestionsCount", { count: totalQuestions })}
              </strong>{" "}
              {t("subtitlePart2")}
            </p>
          </div>

          <FAQClientWrapper data={faqData} />

          <FAQCTA />
        </section>
      </main>
    </div>
  )
}
