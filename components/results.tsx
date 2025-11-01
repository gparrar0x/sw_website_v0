import { Rocket, FileCheck, Layers, Clock } from "lucide-react"

const metrics = [
  {
    icon: Rocket,
    value: "8",
    label: "Proyectos activos en producción",
  },
  {
    icon: FileCheck,
    value: "100%",
    label: "Cobertura PRD completa",
  },
  {
    icon: Layers,
    value: "4",
    label: "Verticales de industria (Health, Food, Automation, FinTech)",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Operación automatizada continua",
  },
]

export function Results() {
  return (
    <section className="py-32 px-4 relative">
      {/* Subtle gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#EFEEE9]/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-balance">
            Portfolio probado en producción
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto text-pretty">
            Soluciones reales, funcionando hoy en empresas de múltiples sectores.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center space-y-4 p-6 rounded-2xl bg-[#EFEEE9]/5 border border-[#EFEEE9]/10 hover:bg-[#EFEEE9]/10 transition-colors"
            >
              <div className="w-16 h-16 bg-[#EFEEE9] rounded-xl flex items-center justify-center mx-auto">
                <metric.icon className="h-8 w-8 text-black" />
              </div>
              <div className="text-5xl font-bold text-[#EFEEE9]">{metric.value}</div>
              <p className="text-gray-400 text-lg leading-relaxed">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
