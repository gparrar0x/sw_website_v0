import { FileText, Mic, Monitor, Image, Search, Globe } from "lucide-react"

const capabilities = [
  {
    icon: FileText,
    task: "Lectura de documentos",
    description: "Facturas, contratos y reportes procesados sin operador de carga",
    impact: "500+ documentos/mes sin intervención manual",
  },
  {
    icon: Mic,
    task: "Transcripción de reuniones",
    description: "Reuniones de 90 minutos convertidas en actas procesables",
    impact: "De 90 min a resumen accionable en 3 min",
  },
  {
    icon: Monitor,
    task: "Monitoreo de competencia",
    description: "Precios, contenido y movimientos de mercado rastreados automáticamente",
    impact: "Actualización continua sin scraping manual",
  },
  {
    icon: Image,
    task: "Generación de contenido visual",
    description: "Assets de marca, mockups y material de marketing generados con IA",
    impact: "De briefing a entregable en minutos",
  },
  {
    icon: Search,
    task: "Investigación de mercado",
    description: "Análisis competitivo, tendencias y oportunidades con datos en tiempo real",
    impact: "Decisiones informadas sin semanas de research",
  },
  {
    icon: Globe,
    task: "Automatización web",
    description: "Tareas repetitivas en plataformas web ejecutadas sin intervención humana",
    impact: "Procesos manuales eliminados por completo",
  },
]

export function Capabilities() {
  return (
    <section className="py-16 px-4 relative" data-testid="capabilities-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-balance">
            Qué puede hacer tu empresa con IA
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto text-pretty">
            Capacidades concretas que eliminan trabajo manual y generan resultados medibles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon
            return (
              <div
                key={index}
                className="relative bg-[#EFEEE9]/5 border border-[#EFEEE9]/10 rounded-2xl p-6 hover:bg-[#EFEEE9]/10 hover:border-[var(--sky-gold)]/20 transition-all duration-300 group"
                data-testid={`capability-${index}`}
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-[#EFEEE9] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{cap.task}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{cap.description}</p>
                  <p className="text-[var(--sky-gold)] text-sm font-medium">{cap.impact}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
