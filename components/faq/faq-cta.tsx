'use client'

import { Link } from '@/i18n/routing'
import { MessageCircle, Calendar } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'

export function FAQCTA() {
  const t = useTranslations('FAQCTA')

  return (
    <div className="mt-20 bg-gradient-to-br from-[#0A0E27] to-[#1a1f3a] rounded-3xl p-12 text-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl" />

      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-white mb-4" data-testid="faq-cta-title">
          {t('title')}
        </h2>
        <p className="text-xl text-[#B4C3CD] mb-8 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/#contacto"
            className={cn(
              "inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold",
              "border-2 border-[#D4AF37] text-white",
              "hover:bg-[#D4AF37] hover:text-black",
              "transition-all duration-300",
              "shadow-lg hover:shadow-xl hover:scale-105"
            )}
            data-testid="faq-cta-schedule"
          >
            <Calendar className="w-5 h-5" aria-hidden="true" />
            {t('scheduleButton')}
          </Link>

          <a
            href="https://wa.me/5491151234567?text=Hola%2C%20tengo%20una%20pregunta%20sobre%20automatizaci%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('whatsappAriaLabel')}
            className={cn(
              "inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold",
              "bg-[#25D366] text-black",
              "hover:bg-[#25D366]/90",
              "transition-all duration-300",
              "shadow-lg hover:shadow-xl hover:scale-105"
            )}
            data-testid="faq-cta-whatsapp"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            {t('whatsappButton')}
          </a>
        </div>
      </div>
    </div>
  )
}
