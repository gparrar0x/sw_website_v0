import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { faqData } from '@/lib/faq-data'
import { FAQSchema } from '@/components/faq/faq-schema'
import { FAQCTA } from '@/components/faq/faq-cta'
import { FAQClientWrapper } from '@/components/faq/faq-client-wrapper'

export const metadata: Metadata = {
  title: 'FAQ - Automatización con IA | Skywalking.dev',
  description:
    'Preguntas frecuentes sobre automatización empresarial con IA. Descubre nuestro proceso, pricing, ROI, tecnología (n8n, Claude, GPT-4) y cómo trabajamos con empresas en LATAM.',
  keywords: [
    'automatización empresarial',
    'inteligencia artificial',
    'n8n',
    'workflow automation',
    'ROI automatización',
    'Claude AI',
    'GPT-4',
    'low-code',
    'no-code',
    'agencia automatización Argentina',
  ],
  openGraph: {
    title: 'FAQ - Automatización con IA | Skywalking.dev',
    description:
      '30+ preguntas respondidas sobre automatización empresarial con IA. Precios, ROI, proceso, tecnología y más.',
    type: 'website',
    locale: 'es_AR',
    siteName: 'Skywalking.dev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ - Automatización con IA | Skywalking.dev',
    description:
      '30+ preguntas sobre automatización con IA, n8n, Claude, pricing y ROI. Transparencia brutal.',
  },
  alternates: {
    canonical: 'https://skywalking.dev/faq',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const totalQuestions = faqData.reduce((acc, cat) => acc + cat.faqs.length, 0)

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Structured Data — server-rendered */}
      <FAQSchema
        faqs={faqData.map((cat) => ({
          category: cat.title,
          questions: cat.faqs,
        }))}
      />

      {/* Header */}
      <header className="border-b border-white/10">
        <div className="container mx-auto px-6 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
        </div>
      </header>

      {/* Hero Section — server-rendered with keyword H1 */}
      <section className="container mx-auto px-6 py-16 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
            Preguntas Frecuentes sobre Automatización con IA
          </h1>
          <p className="text-xl text-[#B4C3CD] text-pretty max-w-3xl mx-auto">
            Todo lo que necesitas saber sobre automatización empresarial, nuestro proceso, pricing y tecnología.{' '}
            <strong className="text-white">{totalQuestions} preguntas respondidas</strong> con transparencia brutal.
          </p>
        </div>

        {/* Client-side interactive wrapper for search/filter */}
        <FAQClientWrapper data={faqData} />

        {/* CTA Section */}
        <FAQCTA />
      </section>
    </div>
  )
}
