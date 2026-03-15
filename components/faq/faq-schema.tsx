import type { FAQItem } from '@/lib/faq-data'

interface FAQSchemaProps {
  faqs: Array<{
    category: string
    questions: FAQItem[]
  }>
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const allQuestions = faqs.flatMap((category) =>
    category.questions.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer.replace(/<[^>]*>/g, ''),
      },
    }))
  )

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allQuestions,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}
