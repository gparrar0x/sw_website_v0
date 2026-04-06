'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const t = useTranslations("Hero")

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Hero Background Image */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-0 overflow-hidden">
        <Image
          src="/hero-background-building.webp"
          alt={t("imageAlt")}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%] hidden md:block"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E27] to-[#1a1f3a] md:hidden" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        <div
          className={`inline-block px-4 py-2 bg-[#EFEEE9]/10 border border-[#EFEEE9]/20 rounded-full mb-4 transition-all duration-800 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          style={{ transitionDelay: '200ms' }}
          data-testid="hero-badge"
        >
          <span className="text-[#EFEEE9] text-sm font-medium">{t("badge")}</span>
        </div>

        <h1
          className={`text-5xl md:text-7xl font-bold text-white leading-tight text-balance transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}
          style={{ transitionDelay: '400ms' }}
          data-testid="hero-heading"
        >
          {t("heading")}{' '}
          <span className="bg-gradient-to-r from-[var(--sky-gold)] to-[var(--sky-orange)] bg-clip-text text-transparent">
            {t("headingHighlight")}
          </span>
        </h1>

        <p
          className={`text-xl md:text-2xl text-white/90 max-w-3xl mx-auto text-pretty leading-relaxed transition-all duration-800 ${mounted ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '600ms' }}
          data-testid="hero-subtitle"
        >
          {t("subtitle")}
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 transition-all duration-800 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          style={{ transitionDelay: '800ms' }}
        >
          <Button
            size="lg"
            className="bg-[var(--sky-gold)] text-black hover:bg-[var(--sky-orange)] text-lg px-8 py-6 rounded-xl group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[var(--sky-gold)]/50 font-semibold"
            onClick={() => {
              document.getElementById('contacto')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              })
            }}
            data-testid="hero-cta-button"
          >
            {t("cta")}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  )
}
