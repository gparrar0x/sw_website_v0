'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Hero Background Image */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-0 overflow-hidden">
        <div className="absolute inset-0 hero-background" />
        {/* Overlay for text legibility */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        <div className="inline-block px-4 py-2 bg-[#EFEEE9]/10 border border-[#EFEEE9]/20 rounded-full mb-4">
          <span className="text-[#EFEEE9] text-sm font-medium">Skywalking.dev</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight text-balance">
          Ayudamos a empresas a escalar usando Inteligencia Artificial
          <span className="typing-cursor"></span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto text-pretty leading-relaxed">
          Te proveemos las herramientas para escalar tu negocio usando IA.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button
            size="lg"
            className="bg-[var(--sky-gold)] text-black hover:bg-[var(--sky-orange)] text-lg px-8 py-6 rounded-xl group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[var(--sky-gold)]/50 font-semibold"
            onClick={() => {
              document.getElementById('contacto')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              })
            }}
          >
            Contactanos
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
