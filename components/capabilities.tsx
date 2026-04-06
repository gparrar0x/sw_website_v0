import { FileText, Mic, Monitor, Image, Search, Globe } from "lucide-react"
import { getTranslations } from "next-intl/server"

const capabilityKeys = [
  { key: "documents", icon: FileText },
  { key: "meetings", icon: Mic },
  { key: "monitoring", icon: Monitor },
  { key: "content", icon: Image },
  { key: "research", icon: Search },
  { key: "web", icon: Globe },
] as const

export async function Capabilities() {
  const t = await getTranslations("Capabilities")

  return (
    <section className="py-16 px-4 relative" data-testid="capabilities-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-balance">
            {t("title")}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto text-pretty">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilityKeys.map(({ key, icon: Icon }, index) => (
            <div
              key={key}
              className="relative bg-[#EFEEE9]/5 border border-[#EFEEE9]/10 rounded-2xl p-6 hover:bg-[#EFEEE9]/10 hover:border-[var(--sky-gold)]/20 transition-all duration-300 group"
              data-testid={`capability-${index}`}
            >
              <div className="space-y-3">
                <div className="w-12 h-12 bg-[#EFEEE9] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {t(`items.${key}.task`)}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t(`items.${key}.description`)}
                </p>
                <p className="text-[var(--sky-gold)] text-sm font-medium">
                  {t(`items.${key}.impact`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
