'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface FAQTOCProps {
  categories: Array<{
    id: string
    title: string
    icon?: React.ReactNode
  }>
}

export function FAQTOC({ categories }: FAQTOCProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-20% 0px -35% 0px',
        threshold: 0,
      }
    )

    categories.forEach((cat) => {
      const element = document.getElementById(cat.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [categories])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100 // Header height + padding
      const top = element.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <nav
      className="hidden xl:block fixed right-8 top-1/3 w-64 z-40"
      aria-label="FAQ Table of Contents"
    >
      <div className="bg-[#EFEEE9] rounded-2xl p-6 border border-[#5F7382]/20">
        <h3 className="text-sm font-semibold text-black mb-4 uppercase tracking-wide">
          En esta página
        </h3>
        <ul className="space-y-3">
          {categories.map((category) => (
            <li key={category.id}>
              <button
                onClick={() => scrollToSection(category.id)}
                className={cn(
                  "flex items-center gap-2 text-sm transition-colors w-full text-left",
                  activeSection === category.id
                    ? "text-[#E8833A] font-semibold"
                    : "text-[#918778] hover:text-black"
                )}
              >
                {category.icon && (
                  <span className="w-4 h-4 flex-shrink-0">{category.icon}</span>
                )}
                <span className="line-clamp-2">{category.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Scroll Progress Bar */}
      <div className="mt-4 bg-[#EFEEE9] rounded-full h-2 overflow-hidden">
        <div
          className="bg-gradient-to-r from-[#D4AF37] to-[#E8833A] h-full transition-all duration-300"
          style={{
            width: `${
              (categories.findIndex((c) => c.id === activeSection) + 1) /
              categories.length *
              100
            }%`,
          }}
        />
      </div>
    </nav>
  )
}
