import { Card } from "@/components/ui/card"
import { User, Users, Building, Building2, Bot, Zap, Code } from "lucide-react"

const targetAudiences = [
  {
    icon: User,
    title: "Empresas Unipersonales",
    description: "Automatiza tareas repetitivas, libera tiempo para lo estratégico",
  },
  {
    icon: Users,
    title: "Pequeñas Empresas",
    description: "Opera 24/7 sin contratar equipo completo (bots, e-commerce, gestión)",
  },
  {
    icon: Building,
    title: "Medianas Empresas",
    description: "Escala operaciones sin crecimiento lineal de costos",
  },
  {
    icon: Building2,
    title: "Grandes Corporaciones",
    description: "Optimiza procesos existentes, integra sistemas legacy con IA moderna",
  },
]

const solutions = [
  {
    icon: Bot,
    title: "Agentes AI Personalizados",
    subtitle: "Asistentes inteligentes que entienden tu negocio",
    features: [
      "Chatbots que atienden clientes 24/7",
      "Agentes que consultan tu base de datos",
      "Asistentes que gestionan conocimiento interno",
    ],
  },
  {
    icon: Zap,
    title: "Automatización de Procesos Complejos",
    subtitle: "Flujos inteligentes que conectan todos tus sistemas",
    features: [
      "Integración entre WhatsApp, email, CRM, y más",
      "Procesamiento automático de documentos",
      "Generación de reportes en tiempo real",
    ],
  },
  {
    icon: Code,
    title: "Transformación Digital y Software a Medida",
    subtitle: "De procesos manuales a sistemas inteligentes personalizados",
    features: [
      "Desarrollo de software específico para tu negocio",
      "Análisis y mapeo de procesos actuales",
      "Diseño de arquitectura automatizada",
      "Implementación por fases (2 semanas c/u)",
      "Capacitación y transferencia de conocimiento",
    ],
  },
]

export function Services() {
  return (
    <>
      {/* Nuestra Solución */}
      <section className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-balance">Nuestra Solución</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto text-pretty">
              Resultado común: Más output, menos esfuerzo manual, ROI medible en semanas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <Card
                  key={index}
                  className="bg-[#EFEEE9] border-none p-8 hover:bg-[#E8E2CF] transition-all duration-300 group hover:scale-105 hover:shadow-lg flex flex-col"
                >
                  <div className="space-y-4 flex-grow">
                    <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="h-7 w-7 text-[#EFEEE9]" />
                    </div>
                    <h3 className="text-2xl font-bold text-black">{solution.title}</h3>
                    <p className="text-gray-700 font-medium">{solution.subtitle}</p>
                    <ul className="space-y-2 text-gray-700 leading-relaxed">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-black mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* A quién servimos */}
      <section className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-balance">A quién servimos</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto text-pretty">
              Soluciones diseñadas para empresas LATAM en crecimiento (10-500 empleados)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {targetAudiences.map((audience, index) => {
              const Icon = audience.icon
              return (
                <Card
                  key={index}
                  className="bg-[#EFEEE9] border-none p-8 hover:bg-[#E8E2CF] transition-all duration-300 group hover:scale-105 hover:shadow-lg cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="h-7 w-7 text-[#EFEEE9]" />
                    </div>
                    <h3 className="text-2xl font-bold text-black">{audience.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{audience.description}</p>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
