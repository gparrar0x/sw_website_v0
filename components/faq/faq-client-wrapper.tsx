'use client'

import { useState, useMemo } from 'react'
import { Sparkles, Wrench, DollarSign, Target, Shield } from 'lucide-react'
import type { FAQCategoryData } from '@/lib/faq-data'
import { FAQCategory } from '@/components/faq/faq-category'
import { FAQSearch } from '@/components/faq/faq-search'
import { FAQFilters, FAQFilter } from '@/components/faq/faq-filters'

const iconMap = {
  Sparkles: <Sparkles className="w-6 h-6 text-[#D4AF37]" />,
  Wrench: <Wrench className="w-6 h-6 text-[#5F7382]" />,
  DollarSign: <DollarSign className="w-6 h-6 text-[#D4AF37]" />,
  Target: <Target className="w-6 h-6 text-[#E8833A]" />,
  Shield: <Shield className="w-6 h-6 text-[#5F7382]" />,
} as const

const filterIconMap = {
  Sparkles: <Sparkles className="w-5 h-5" />,
  Wrench: <Wrench className="w-5 h-5" />,
  DollarSign: <DollarSign className="w-5 h-5" />,
  Target: <Target className="w-5 h-5" />,
  Shield: <Shield className="w-5 h-5" />,
} as const

const filterLabels: Record<string, string> = {
  general: 'General',
  servicios: 'Servicios',
  pricing: 'Precios & ROI',
  proceso: 'Proceso',
  tecnica: 'Técnica',
}

export function FAQClientWrapper({ data }: { data: FAQCategoryData[] }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  const filters: FAQFilter[] = data.map((cat) => ({
    id: cat.id,
    label: filterLabels[cat.id] || cat.title,
    icon: filterIconMap[cat.iconName],
  }))

  const filteredData = useMemo(() => {
    let result = data

    if (activeFilter) {
      result = result.filter((category) => category.id === activeFilter)
    }

    if (searchQuery) {
      result = result
        .map((category) => ({
          ...category,
          faqs: category.faqs.filter(
            (faq) =>
              faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
              faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
          ),
        }))
        .filter((category) => category.faqs.length > 0)
    }

    return result
  }, [data, searchQuery, activeFilter])

  return (
    <>
      {/* Search */}
      <div className="mb-12">
        <FAQSearch onSearch={setSearchQuery} />
      </div>

      {/* Filters */}
      <div className="mb-16">
        <FAQFilters
          filters={filters}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
      </div>

      {/* Results count */}
      {searchQuery && (
        <div className="mb-8 text-center">
          <p className="text-[#B4C3CD]">
            {filteredData.reduce((acc, cat) => acc + cat.faqs.length, 0)} resultados para "
            <span className="text-white font-semibold">{searchQuery}</span>"
          </p>
        </div>
      )}

      {/* FAQ Categories */}
      <div className="space-y-16">
        {filteredData.length > 0 ? (
          filteredData.map((category) => (
            <FAQCategory
              key={category.id}
              id={category.id}
              title={category.title}
              description={category.description}
              faqs={category.faqs}
              icon={iconMap[category.iconName]}
            />
          ))
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-[#918778] mb-4">
              No encontramos preguntas que coincidan con tu búsqueda.
            </p>
            <button
              onClick={() => {
                setSearchQuery('')
                setActiveFilter(null)
              }}
              className="text-[#D4AF37] hover:text-[#E8833A] transition-colors font-semibold"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </>
  )
}
