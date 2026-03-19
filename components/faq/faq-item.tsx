'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FAQItemProps {
  question: string
  answer: string
  categoryColor?: string
  index?: number
}

export function FAQItem({ question, answer, categoryColor, index = 0 }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={cn(
        "group border border-[#5F7382]/20 rounded-2xl transition-all duration-300",
        "hover:border-[#5F7382]/40 hover:shadow-lg",
        isOpen && "border-[#E8833A] shadow-xl"
      )}
      style={{
        animationDelay: `${index * 50}ms`,
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full px-6 py-5 flex items-start justify-between text-left transition-colors duration-300",
          "rounded-2xl",
          isOpen ? "bg-[#E8833A]/5" : "bg-[#EFEEE9] hover:bg-[#E8E2CF]"
        )}
        aria-expanded={isOpen}
      >
        <span className="flex-1 font-semibold text-black text-lg pr-4">
          {question}
        </span>
        <ChevronDown
          className={cn(
            "w-6 h-6 transition-all duration-300 flex-shrink-0",
            isOpen ? "rotate-180 text-[#E8833A]" : "text-[#5F7382]"
          )}
          aria-hidden="true"
        />
      </button>

      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 pb-6 pt-2">
          <div
            className="prose prose-sm max-w-none text-[#918778]"
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        </div>
      </div>
    </div>
  )
}
