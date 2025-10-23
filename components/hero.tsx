'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react"

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cursorRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const title = titleRef.current
    const cursor = cursorRef.current
    if (!title || !cursor) return

    const text = 'Transformamos procesos manuales en sistemas inteligentes 24/7'

    // Clear title and prepare cursor
    const textSpan = title.querySelector('.typing-text') as HTMLSpanElement
    if (textSpan) {
      textSpan.textContent = ''
    }

    let i = 0
    let timerId: NodeJS.Timeout

    const typeWriter = () => {
      if (i < text.length && textSpan) {
        textSpan.textContent += text.charAt(i)
        i++
        timerId = setTimeout(typeWriter, 45)
      }
    }

    // Start typing after a delay
    const startTimer = setTimeout(typeWriter, 1000)

    return () => {
      clearTimeout(startTimer)
      if (timerId) clearTimeout(timerId)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Hero Background with Animated Orbs */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-0 overflow-hidden">
        <div className="gradient-orb orb-1" />
        <div className="gradient-orb orb-2" />
        <div className="gradient-orb orb-3" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        <div className="inline-block px-4 py-2 bg-[#EFEEE9]/10 border border-[#EFEEE9]/20 rounded-full mb-4">
          <span className="text-[#EFEEE9] text-sm font-medium">Skywalking.dev</span>
        </div>

        <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold text-white leading-tight text-balance">
          <span className="typing-text">Elevamos tu negocio con automatización inteligente</span>
          <span ref={cursorRef} className="typing-cursor"></span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto text-pretty leading-relaxed">
          Automatización empresarial con IA para empresas LATAM que buscan eficiencia, innovación y transformación
          digital.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button size="lg" className="bg-[#EFEEE9] text-black hover:bg-[#E8E2CF] text-lg px-8 py-6 rounded-xl group">
            Contactanos
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
