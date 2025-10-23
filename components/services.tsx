import { Card } from "@/components/ui/card"
import { Bot, Workflow, Zap, BarChart3, Building2, Users } from "lucide-react"

const services = [
  {
    icon: Bot,
    title: "Agentes de IA",
    description: "Asistentes inteligentes que automatizan tareas repetitivas y responden consultas 24/7.",
  },
  {
    icon: Workflow,
    title: "Automatización de Procesos",
    description: "Conectamos tus herramientas y eliminamos trabajo manual entre sistemas.",
  },
  {
    icon: Zap,
    title: "Integración Inteligente",
    description: "Sincronizamos datos en tiempo real entre todas tus plataformas empresariales.",
  },
  {
    icon: BarChart3,
    title: "Análisis Predictivo",
    description: "Transformamos datos en insights accionables con modelos de IA avanzados.",
  },
  {
    icon: Building2,
    title: "Soluciones a Medida para PyMEs",
    description:
      "Desarrollamos sistemas personalizados que se adaptan al tamaño y necesidades específicas de tu empresa.",
  },
  {
    icon: Users,
    title: "Acompañamiento en Transformación Digital",
    description: "Te guiamos paso a paso en la adopción de tecnología, capacitando a tu equipo en el proceso.",
  },
]

export function Services() {
  return (
    <section className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-balance">Servicios que impulsan tu negocio</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto text-pretty">
            Soluciones de automatización diseñadas para escalar tu operación sin contratar más personal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="bg-[#EFEEE9] border-none p-8 hover:bg-[#E8E2CF] transition-colors duration-300 group"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="h-7 w-7 text-[#EFEEE9]" />
                  </div>
                  <h3 className="text-2xl font-bold text-black">{service.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{service.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
