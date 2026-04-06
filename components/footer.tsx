import { Mail, MessageCircle, MapPin } from "lucide-react"
import { getTranslations } from "next-intl/server"

export async function Footer() {
  const t = await getTranslations("Footer")

  return (
    <footer className="border-t border-[#EFEEE9]/10 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#EFEEE9]">Skywalking.dev</h3>
            <p className="text-gray-400 leading-relaxed">
              {t("tagline")}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">{t("officesTitle")}</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-gray-400">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-[var(--sky-gold)]" aria-hidden="true" />
                <span>{t("office1")}</span>
              </div>
              <div className="flex items-start gap-2 text-gray-400">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-[var(--sky-gold)]" aria-hidden="true" />
                <span>{t("office2")}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white md:text-right">{t("contactTitle")}</h4>
            <div className="flex gap-4 md:justify-end">
              <a
                href="mailto:info@skywalking.dev"
                className="w-10 h-10 bg-[#EFEEE9]/10 hover:bg-[#EFEEE9]/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label={t("emailAriaLabel")}
              >
                <Mail className="h-5 w-5 text-[#EFEEE9]" aria-hidden="true" />
              </a>
              <a
                href="https://wa.me/541121625416"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#25D366]/20 hover:bg-[#25D366]/30 rounded-lg flex items-center justify-center transition-colors"
                aria-label={t("whatsappAriaLabel")}
              >
                <MessageCircle className="h-5 w-5 text-[#25D366]" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#EFEEE9]/10 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Skywalking.dev. {t("rights")}</p>
          <p>{t("slogan")}</p>
        </div>
      </div>
    </footer>
  )
}
