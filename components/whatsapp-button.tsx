"use client"

import { MessageCircle } from "lucide-react"
import { useTranslations } from "next-intl"

export function WhatsAppButton() {
  const t = useTranslations("WhatsAppButton")
  const whatsappNumber = "5491121625416"

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(t("message"))}`
    window.open(url, "_blank")
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 group"
      aria-label={t("ariaLabel")}
      data-testid="whatsapp-button"
    >
      <MessageCircle className="h-7 w-7 text-white" aria-hidden="true" />
      <span
        role="tooltip"
        className="absolute right-full mr-3 bg-[#EFEEE9] text-black px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
      >
        {t("tooltip")}
      </span>
    </button>
  )
}
