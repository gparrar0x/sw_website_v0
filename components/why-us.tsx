import { Zap, Target, TrendingUp } from "lucide-react"
import { getTranslations } from "next-intl/server"

const reasonKeys = [
  { key: "speed", icon: Zap },
  { key: "simple", icon: Target },
  { key: "people", icon: TrendingUp },
] as const

export async function WhyUs() {
  const t = await getTranslations("WhyUs")

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#E8E2CF]/20 via-[#EFEEE9]/10 to-transparent rounded-full blur-3xl animate-float" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-balance">
            {t("title")}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto text-pretty">
            {t("subtitle")}
          </p>
        </div>

        <div className="space-y-6">
          {reasonKeys.map(({ key, icon: Icon }, index) => (
            <div
              key={key}
              className="relative bg-[#EFEEE9] border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row items-start gap-6 hover:border-[var(--sky-gold)]/30 transition-all duration-300 group overflow-hidden"
              data-testid={`why-us-reason-${index}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/5 to-black/10 pointer-events-none" />
              <div className="relative z-10 w-16 h-16 bg-black rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Icon className="h-8 w-8 text-[#EFEEE9]" />
              </div>
              <div className="relative z-10 space-y-2">
                <h3 className="text-2xl font-bold text-black">
                  {t(`reasons.${key}.title`)}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {t(`reasons.${key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
