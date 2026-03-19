'use client'

import Link from 'next/link'
import { MessageCircle, Calendar } from 'lucide-react'
import { cn } from '@/lib/utils'

export function FAQCTA() {
  return (
    <div className="mt-20 bg-gradient-to-br from-[#0A0E27] to-[#1a1f3a] rounded-3xl p-12 text-center relative overflow-hidden">
      {/* Decorative orb */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl" />

      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-white mb-4">
          No encontraste lo que buscabas?
        </h2>
        <p className="text-xl text-[#B4C3CD] mb-8 max-w-2xl mx-auto">
          Hablemos. Nuestro equipo está listo para responder tus preguntas específicas y diseñar una solución a medida.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contacto"
            className={cn(
              "inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold",
              "border-2 border-[#D4AF37] text-white",
              "hover:bg-[#D4AF37] hover:text-black",
              "transition-all duration-300",
              "shadow-lg hover:shadow-xl hover:scale-105"
            )}
          >
            <Calendar className="w-5 h-5" />
            Agendar Reunión
          </Link>

          <a
            href="https://wa.me/5491151234567?text=Hola%2C%20tengo%20una%20pregunta%20sobre%20automatizaci%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold",
              "bg-[#25D366] text-black",
              "hover:bg-[#25D366]/90",
              "transition-all duration-300",
              "shadow-lg hover:shadow-xl hover:scale-105"
            )}
          >
            <MessageCircle className="w-5 h-5" />
            Escribinos por WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
