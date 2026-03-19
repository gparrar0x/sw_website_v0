'use client'

import { FAQItem } from './faq-item'

export interface FAQ {
  question: string
  answer: string
}

interface FAQCategoryProps {
  title: string
  description?: string
  faqs: FAQ[]
  icon?: React.ReactNode
  categoryColor?: string
  id: string
}

export function FAQCategory({
  title,
  description,
  faqs,
  icon,
  categoryColor,
  id,
}: FAQCategoryProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 animate-fade-in"
    >
      {/* Category Header */}
      <div className="mb-8 flex items-start gap-4">
        {icon && (
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#5F7382]/10 flex items-center justify-center">
            {icon}
          </div>
        )}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-white mb-2">
            {title}
          </h2>
          {description && (
            <p className="text-[#B4C3CD] text-lg">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            categoryColor={categoryColor}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
