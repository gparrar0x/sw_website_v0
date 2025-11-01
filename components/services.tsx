import { Card } from "@/components/ui/card"
import { User, Users, Building, Building2 } from "lucide-react"

const services = [
  {
    icon: User,
    title: "Empresas Unipersonales",
    description: "Automatiza tareas repetitivas, libera tiempo para lo estratégico. Opera 24/7 sin contratar personal.",
  },
  {
    icon: Users,
    title: "Pequeñas Empresas",
    description: "Sistemas completos que operan sin parar: bots conversacionales, e-commerce, gestión de clientes.",
  },
  {
    icon: Building,
    title: "Medianas Empresas",
    description: "Escala operaciones sin crecimiento lineal de costos. Más output, menos esfuerzo manual.",
  },
  {
    icon: Building2,
    title: "Grandes Corporaciones",
    description: "Optimiza procesos existentes, integra sistemas legacy con IA moderna para máxima eficiencia.",
  },
]

export function Services() {
  return (
    <section className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-balance">A quién servimos</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto text-pretty">
            Soluciones de IA y automatización diseñadas para cada etapa de crecimiento empresarial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
