'use client'

import { cn } from '@/lib/utils'

export interface FAQFilter {
  id: string
  label: string
  icon?: React.ReactNode
}

interface FAQFiltersProps {
  filters: FAQFilter[]
  activeFilter: string | null
  onFilterChange: (filterId: string | null) => void
  allLabel?: string
}

export function FAQFilters({
  filters,
  activeFilter,
  onFilterChange,
  allLabel = "Todas",
}: FAQFiltersProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3" role="group" aria-label="Filtrar por categoría">
      <button
        onClick={() => onFilterChange(null)}
        aria-pressed={activeFilter === null}
        className={cn(
          "px-6 py-3 rounded-xl font-medium transition-all duration-300",
          "border-2",
          activeFilter === null
            ? "bg-[#D4AF37] border-[#D4AF37] text-black"
            : "bg-[#EFEEE9] border-[#EFEEE9] text-black hover:border-[#5F7382] hover:bg-[#E8E2CF]"
        )}
        data-testid="faq-filter-all"
      >
        {allLabel}
      </button>
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          aria-pressed={activeFilter === filter.id}
          className={cn(
            "px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2",
            "border-2",
            activeFilter === filter.id
              ? "bg-[#D4AF37] border-[#D4AF37] text-black"
              : "bg-[#EFEEE9] border-[#EFEEE9] text-black hover:border-[#5F7382] hover:bg-[#E8E2CF]"
          )}
          data-testid={`faq-filter-${filter.id}`}
        >
          {filter.icon && <span className="w-5 h-5" aria-hidden="true">{filter.icon}</span>}
          {filter.label}
        </button>
      ))}
    </div>
  )
}
