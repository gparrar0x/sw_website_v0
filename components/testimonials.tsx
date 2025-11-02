import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Skywalking transformó completamente nuestra operación. Lo que antes tomaba 40 horas semanales ahora se hace automáticamente.",
    author: "María González",
    role: "CEO",
    company: "TechStart",
    result: "40h ahorradas/semana",
  },
  {
    quote: "La automatización con IA nos permitió escalar sin contratar más personal. ROI en 3 meses.",
    author: "Carlos Ruiz",
    role: "CTO",
    company: "InnovaLab",
    result: "3x capacidad operativa",
  },
  {
    quote: "Implementaron un sistema que opera 24/7. Nuestros clientes reciben respuestas instantáneas incluso fuera de horario.",
    author: "Ana Martínez",
    role: "Gerente Comercial",
    company: "SalesFlow",
    result: "95% satisfacción cliente",
  },
]

export function Testimonials() {
  return (
    <section className="py-32 px-4 relative bg-[var(--sky-black)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-balance">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto text-pretty">
            Resultados reales de empresas que ya automatizan con IA
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-[var(--sky-white)] border-none p-8 relative hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-[var(--sky-gold)] opacity-20">
                <Quote className="w-12 h-12" />
              </div>

              <div className="space-y-6 relative z-10">
                {/* Quote */}
                <p className="text-lg text-black leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Result Badge */}
                <div className="inline-block px-4 py-2 bg-[var(--sky-gold)]/10 border border-[var(--sky-gold)]/30 rounded-full">
                  <span className="text-sm font-semibold text-[var(--sky-gold)]">
                    {testimonial.result}
                  </span>
                </div>

                {/* Author Info */}
                <div className="border-t border-black/10 pt-6">
                  <p className="font-semibold text-black text-lg">{testimonial.author}</p>
                  <p className="text-[var(--sky-warm)] text-sm">
                    {testimonial.role} en {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Footer */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            ¿Querés resultados como estos en tu empresa?
          </p>
          <button
            className="px-8 py-4 bg-[var(--sky-gold)] text-black hover:bg-[var(--sky-orange)] rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[var(--sky-gold)]/40"
            onClick={() => {
              document.getElementById('contacto')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              })
            }}
          >
            Hablemos de tu proyecto
          </button>
        </div>
      </div>
    </section>
  )
}
