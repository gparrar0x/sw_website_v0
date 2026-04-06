'use client'

import Image from "next/image"
import { Link, usePathname, useRouter } from "@/i18n/routing"
import { useTranslations, useLocale } from "next-intl"
import { useTransition } from "react"

export function Header() {
  const t = useTranslations("Header")
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const otherLocale = locale === "es" ? "en" : "es"

  const handleLocaleSwitch = () => {
    startTransition(() => {
      router.replace(pathname, { locale: otherLocale })
    })
  }

  return (
    <header className="fixed top-0 left-0 z-50 p-6 w-full flex items-center justify-between pointer-events-none">
      <Link href="/" className="inline-block pointer-events-auto">
        <Image
          src="/logo-3d.png"
          alt={t("logoAlt")}
          width={40}
          height={40}
          className="rounded-full hover:scale-110 transition-transform duration-300 shadow-md"
          style={{ clipPath: "circle(45%)" }}
          priority
        />
      </Link>

      <nav className="flex items-center gap-3 pointer-events-auto">
        <Link
          href="/blog"
          className="px-3 py-1.5 text-xs font-semibold rounded-lg text-[var(--sky-white)]/70 hover:text-[var(--sky-gold)] transition-colors duration-200"
        >
          Blog
        </Link>
        <button
          onClick={handleLocaleSwitch}
          disabled={isPending}
          className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-[var(--sky-gold)]/30 text-[var(--sky-gold)] bg-black/40 hover:bg-[var(--sky-gold)]/10 transition-all duration-200 backdrop-blur-sm disabled:opacity-50"
          aria-label={t("switchLanguage")}
          data-testid="header-locale-switcher"
        >
          {otherLocale.toUpperCase()}
        </button>
      </nav>
    </header>
  )
}
