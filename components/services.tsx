import { Card } from "@/components/ui/card"
import { User, Users, Building, Building2, Bot, Zap, Code } from "lucide-react"
import { getTranslations } from "next-intl/server"

export async function Services() {
  const t = await getTranslations("Services")

  const targetAudiences = [
    { icon: User, key: "solo" },
    { icon: Users, key: "small" },
    { icon: Building, key: "medium" },
    { icon: Building2, key: "large" },
  ] as const

  const solutions = [
    { icon: Bot, key: "agents" },
    { icon: Zap, key: "automation" },
    { icon: Code, key: "software" },
  ] as const

  return (
    <>
      {/* Nuestras Soluciones */}
      <section className="py-16 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-balance">
              {t("solutionsTitle")}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto text-pretty">
              {t("solutionsSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {solutions.map(({ icon: Icon, key }, index) => (
              <Card
                key={key}
                className="relative bg-[#EFEEE9] border border-white/10 p-8 hover:border-[var(--sky-gold)]/30 transition-all duration-300 group hover:shadow-lg flex flex-col overflow-hidden"
                data-testid={`service-card-${key}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/5 to-black/10 pointer-events-none" />
                <div className="relative z-10 space-y-4 flex-grow">
                  <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="h-7 w-7 text-[#EFEEE9]" />
                  </div>
                  <h3 className="text-2xl font-bold text-black">
                    {t(`solutions.${key}.title`)}
                  </h3>
                  <p className="text-gray-700 font-medium">
                    {t(`solutions.${key}.subtitle`)}
                  </p>
                  <ul className="space-y-2 text-gray-700 leading-relaxed">
                    {(t.raw(`solutions.${key}.features`) as string[]).map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-black mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* A quién servimos */}
      <section className="py-16 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-balance">
              {t("audienceTitle")}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto text-pretty">
              {t("audienceSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {targetAudiences.map(({ icon: Icon, key }) => (
              <Card
                key={key}
                className="relative bg-[#EFEEE9] border border-white/10 p-8 hover:border-[var(--sky-gold)]/30 transition-all duration-300 group hover:shadow-lg overflow-hidden"
                data-testid={`audience-card-${key}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/5 to-black/10 pointer-events-none" />
                <div className="relative z-10 space-y-4">
                  <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="h-7 w-7 text-[#EFEEE9]" />
                  </div>
                  <h3 className="text-2xl font-bold text-black">
                    {t(`audiences.${key}.title`)}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t(`audiences.${key}.description`)}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
