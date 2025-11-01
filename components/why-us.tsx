import { Zap, Target, TrendingUp } from "lucide-react"

const reasons = [
  {
    icon: Zap,
    title: "Velocidad sobre perfección",
    description: "Implementaciones incrementales con ROI medible en semanas, no meses. Menos código, más valor.",
  },
  {
    icon: Target,
    title: "Arquitectura probada",
    description: "Patrones reutilizables validados en producción. Google Sheets como DB = zero-cost + client-editable.",
  },
  {
    icon: TrendingUp,
    title: "Escala sin headcount",
    description: "Multiplica capacidades operativas sin contratar más personal. Opera 24/7 automáticamente.",
  },
]

export function WhyUs() {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Large animated gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#E8E2CF]/20 via-[#EFEEE9]/10 to-transparent rounded-full blur-3xl animate-float" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-balance">Por qué Skywalking</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto text-pretty">
            Tecnología que potencia personas, no las reemplaza. Resultados medibles, arquitectura probada.
          </p>
        </div>

        <div className="space-y-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-[#EFEEE9] rounded-2xl p-8 flex flex-col md:flex-row items-start gap-6 hover:bg-[#E8E2CF] transition-colors group"
            >
              <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <reason.icon className="h-8 w-8 text-[#EFEEE9]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-black">{reason.title}</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
