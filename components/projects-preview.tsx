import Image from "next/image"
import { getTranslations } from "next-intl/server"

const projectKeys = [
  { name: "EterHabitats", imageKey: "eterhabitats", image: "/projects/eterhabitats.webp" },
  { name: "Kronos", imageKey: "kronos", image: "/projects/kronos.webp" },
  { name: "Igni", imageKey: "igni", image: "/projects/fuego.webp" },
  { name: "Micelio", imageKey: "micelio", image: "/projects/micelio.webp" },
  { name: "Austral", imageKey: "austral", image: "/projects/austral.webp" },
] as const

const statusMap = {
  eterhabitats: "Active",
  kronos: "Dev",
  igni: "Active",
  micelio: "Dev",
  austral: "Dev",
} as const

export async function ProjectsPreview() {
  const t = await getTranslations("ProjectsPreview")

  return (
    <section id="proyectos" className="py-16 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--sky-gold)]">
            {t("label")}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {t("title")}
          </h2>
        </div>

        <div className="space-y-4">
          {projectKeys.map((project, index) => {
            const isDev = statusMap[project.imageKey] === "Dev"
            const status = isDev ? t("statusDev") : t("statusActive")

            return (
              <div
                key={project.name}
                className="group relative h-72 md:h-96 rounded-2xl overflow-hidden flex items-end"
                data-testid={`project-card-${project.imageKey}`}
              >
                <Image
                  src={project.image}
                  alt={`${project.name} — ${t(`projects.${project.imageKey}.description`)}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 1152px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500" />
                <div
                  className={`absolute inset-0 ${
                    index % 2 === 0
                      ? "bg-gradient-to-r from-black/70 via-black/30 to-transparent"
                      : "bg-gradient-to-l from-black/70 via-black/30 to-transparent"
                  }`}
                />

                <div
                  className={`relative z-10 w-full p-8 md:p-10 flex flex-col ${
                    index % 2 === 1 ? "items-end text-right" : ""
                  }`}
                >
                  <span className="text-xs uppercase tracking-[0.3em] text-[var(--sky-gold)] font-medium mb-2">
                    {status}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-bold text-white group-hover:text-[var(--sky-gold)] transition-colors duration-500">
                    {project.name}
                  </h3>
                  <p className="text-sm text-white/70 mt-1 italic group-hover:text-white/80 transition-colors duration-500">
                    {t(`projects.${project.imageKey}.hint`)}
                  </p>
                  <p className="text-base text-white/75 mt-3 max-w-lg leading-relaxed">
                    {t(`projects.${project.imageKey}.description`)}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
