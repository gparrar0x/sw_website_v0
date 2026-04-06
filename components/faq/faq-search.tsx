'use client'

import { useState } from 'react'
import { Search, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FAQSearchProps {
  onSearch: (query: string) => void
  placeholder?: string
  ariaLabel?: string
  clearAriaLabel?: string
}

export function FAQSearch({
  onSearch,
  placeholder = "Buscar preguntas...",
  ariaLabel = "Buscar preguntas frecuentes",
  clearAriaLabel = "Limpiar búsqueda",
}: FAQSearchProps) {
  const [query, setQuery] = useState('')

  const handleSearch = (value: string) => {
    setQuery(value)
    onSearch(value)
  }

  const clearSearch = () => {
    setQuery('')
    onSearch('')
  }

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#5F7382]" aria-hidden="true" />
        <input
          type="search"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder={placeholder}
          aria-label={ariaLabel}
          className={cn(
            "w-full pl-12 pr-12 py-4 rounded-2xl",
            "bg-[#EFEEE9] border-2 border-transparent",
            "text-black placeholder:text-black/40",
            "focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20",
            "transition-all duration-300"
          )}
          data-testid="faq-search-input"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-black/5 rounded-lg transition-colors"
            aria-label={clearAriaLabel}
            data-testid="faq-search-clear"
          >
            <X className="w-5 h-5 text-[#918778]" />
          </button>
        )}
      </div>
    </div>
  )
}
