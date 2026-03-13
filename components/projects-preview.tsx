const projects = [
  {
    name: "Kronos",
    hint: "Cada gramo cuenta.",
    description:
      "Monitoreo industrial de balanzas en tiempo real. Salud de dispositivos, alertas, diagnóstico remoto. Multi-sitio.",
    image: "/projects/kronos.webp",
    status: "En desarrollo",
  },
  {
    name: "Igni",
    hint: "Cuando el bosque habla, hay que escuchar.",
    description:
      "Sistema de alerta temprana de incendios forestales. Monitoreo en tiempo real para proteger la Patagonia.",
    image: "/projects/fuego.webp",
    status: "Activo",
  },
  {
    name: "Miicelio",
    hint: "La plataforma.",
    description:
      "SaaS para gestión empresarial con inteligencia artificial integrada. Todo lo que necesitás, en un solo lugar.",
    image: "/projects/miicel.webp",
    status: "En desarrollo",
  },
  {
    name: "Austral",
    hint: "Construir mejor.",
    description:
      "Plataforma para la industria de la construcción y materiales. Presupuestos, stock, proveedores.",
    image: "/projects/austral.webp",
    status: "En desarrollo",
  },
]

export function ProjectsPreview() {
  return (
    <section id="proyectos" className="py-16 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--sky-gold)]">
            En construcción
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Lo que estamos armando
          </h2>
        </div>

        <div className="space-y-4">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className={`group relative h-72 md:h-96 rounded-2xl overflow-hidden flex items-end`}
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${project.image})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500" />
              <div
                className={`absolute inset-0 ${
                  index % 2 === 0
                    ? "bg-gradient-to-r from-black/70 via-black/30 to-transparent"
                    : "bg-gradient-to-l from-black/70 via-black/30 to-transparent"
                }`}
              />

              {/* Content */}
              <div
                className={`relative z-10 w-full p-8 md:p-10 flex flex-col ${
                  index % 2 === 1 ? "items-end text-right" : ""
                }`}
              >
                <span className="text-xs uppercase tracking-[0.3em] text-[var(--sky-gold)] font-medium mb-2">
                  {project.status}
                </span>
                <h3 className="text-3xl md:text-5xl font-bold text-white group-hover:text-[var(--sky-gold)] transition-colors duration-500">
                  {project.name}
                </h3>
                <p className="text-sm text-white/50 mt-1 italic group-hover:text-white/70 transition-colors duration-500">
                  {project.hint}
                </p>
                <p className="text-base text-white/60 mt-3 max-w-lg leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
