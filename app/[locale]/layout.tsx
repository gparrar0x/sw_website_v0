import type React from "react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, getTranslations } from "next-intl/server"
import { routing } from "@/i18n/routing"
import { Header } from "@/components/header"
import { Analytics } from "@vercel/analytics/next"

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "Metadata" })

  return {
    metadataBase: new URL("https://skywalking.dev"),
    title: {
      default: t("title"),
      template: t("titleTemplate"),
    },
    description: t("description"),
    keywords: [
      "equipos con IA",
      "aumentar equipos inteligencia artificial",
      "escalar sin contratar",
      "agentes AI personalizados",
      "automatización empresarial",
      "transformación digital IA",
      "chatbots inteligentes",
      "consultoría IA argentina",
      "software con IA",
      "augment teams AI",
    ],
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_AR" : "en_US",
      url: `https://skywalking.dev/${locale}`,
      siteName: "Skywalking.dev",
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Skywalking.dev",
        },
      ],
      alternateLocale: locale === "es" ? ["en_US"] : ["es_AR"],
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
      images: ["/og-image.png"],
    },
    verification: {
      google: "zjhch1wCkBgH8UE--gFAgITii-LwC7Y8JeVfBHCsFcM",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `https://skywalking.dev/${locale}`,
      languages: {
        es: "https://skywalking.dev/es",
        en: "https://skywalking.dev/en",
        "x-default": "https://skywalking.dev/es",
      },
    },
    icons: {
      icon: [
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    },
    manifest: "/site.webmanifest",
    category: "Technology",
    authors: [{ name: "Skywalking.dev" }],
    creator: "Skywalking.dev",
    publisher: "Skywalking.dev",
  }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  // Validate locale
  if (!routing.locales.includes(locale as "es" | "en")) {
    notFound()
  }

  const messages = await getMessages()

  // Schema.org JSON-LD
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://skywalking.dev/#organization",
    name: "Skywalking.dev",
    url: "https://skywalking.dev",
    logo: "https://skywalking.dev/logo.png",
    foundingDate: "2024",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Martín de los Andes",
      addressRegion: "Neuquén",
      addressCountry: "AR",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "info@skywalking.dev",
        telephone: "+54-11-2162-5416",
        availableLanguage: ["es", "en"],
      },
    ],
    description: "Aumentamos equipos con IA para empresas en Argentina y LATAM",
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://skywalking.dev/#localbusiness",
    name: "Skywalking.dev",
    image: "https://skywalking.dev/logo.png",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Martín de los Andes",
      addressRegion: "Neuquén",
      postalCode: "8370",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-40.1579",
      longitude: "-71.3534",
    },
    url: "https://skywalking.dev",
    telephone: "+54-11-2162-5416",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    areaServed: [
      { "@type": "Country", name: "Argentina" },
      { "@type": "Country", name: "Chile" },
      { "@type": "Country", name: "Uruguay" },
    ],
  }

  const serviceSchemas =
    locale === "es"
      ? [
          {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Agentes AI Personalizados",
            provider: { "@id": "https://skywalking.dev/#organization" },
            areaServed: { "@type": "Country", name: "Argentina" },
            description:
              "Chatbots inteligentes, agentes de consulta a bases de datos y asistentes de conocimiento personalizados",
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Automatización de Procesos Empresariales",
            provider: { "@id": "https://skywalking.dev/#organization" },
            areaServed: { "@type": "Country", name: "Argentina" },
            description:
              "Integración WhatsApp, automatización de email/CRM, procesamiento de documentos y reportes en tiempo real",
          },
        ]
      : [
          {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Custom AI Agents",
            provider: { "@id": "https://skywalking.dev/#organization" },
            areaServed: { "@type": "Country", name: "Argentina" },
            description:
              "Intelligent chatbots, database query agents, and custom knowledge assistants",
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Business Process Automation",
            provider: { "@id": "https://skywalking.dev/#organization" },
            areaServed: { "@type": "Country", name: "Argentina" },
            description:
              "WhatsApp integration, email/CRM automation, document processing, and real-time reporting",
          },
        ]

  return (
    <NextIntlClientProvider messages={messages}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {serviceSchemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <a href="#main-content" className="skip-to-content">
        {locale === "es" ? "Saltar al contenido principal" : "Skip to main content"}
      </a>
      <Header />
      <div id="main-content">{children}</div>
      <Analytics />
    </NextIntlClientProvider>
  )
}
