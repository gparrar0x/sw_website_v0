import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"

import { Inter, Geist as V0_Font_Geist, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const _geist = V0_Font_Geist({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://skywalking.dev'),

  // Basic SEO
  title: {
    default: 'Skywalking.dev - Automatización Empresarial con IA',
    template: '%s | Skywalking.dev'
  },
  description: 'Ayudamos a empresas a escalar usando Inteligencia Artificial. Herramientas y soluciones de IA para hacer crecer tu negocio en Argentina y LATAM.',
  keywords: [
    'escalar negocio con IA',
    'inteligencia artificial para empresas',
    'herramientas IA empresariales',
    'agentes AI personalizados',
    'automatización n8n',
    'transformación digital',
    'chatbots inteligentes',
    'consultoría IA argentina',
    'software con IA',
    'crecimiento empresarial IA'
  ],

  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://skywalking.dev',
    siteName: 'Skywalking.dev',
    title: 'Automatización Empresarial con IA | Skywalking.dev',
    description: 'Agencia especializada en automatización de procesos con IA. ROI medible en semanas, no meses. PyMEs en Argentina y LATAM.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Skywalking.dev - Automatización Empresarial con IA'
      }
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Skywalking.dev - Automatización Empresarial con IA',
    description: 'Transformamos procesos manuales en sistemas inteligentes 24/7. ROI medible en semanas.',
    images: ['/og-image.png'],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Canonical
  alternates: {
    canonical: 'https://skywalking.dev',
  },

  // Additional
  category: 'Technology',
  authors: [{ name: 'Skywalking.dev' }],
  creator: 'Skywalking.dev',
  publisher: 'Skywalking.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Schema.org JSON-LD - Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://skywalking.dev/#organization",
    "name": "Skywalking.dev",
    "url": "https://skywalking.dev",
    "logo": "https://skywalking.dev/logo.png",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Martín de los Andes",
      "addressRegion": "Neuquén",
      "addressCountry": "AR"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "sales",
        "email": "info@skywalking.dev",
        "telephone": "+54-11-2162-5416",
        "availableLanguage": ["es", "en"]
      }
    ],
    "description": "Agencia de automatización empresarial con IA en Argentina y LATAM"
  }

  // Schema.org JSON-LD - LocalBusiness
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://skywalking.dev/#localbusiness",
    "name": "Skywalking.dev",
    "image": "https://skywalking.dev/logo.png",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Martín de los Andes",
      "addressRegion": "Neuquén",
      "postalCode": "8370",
      "addressCountry": "AR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-40.1579",
      "longitude": "-71.3534"
    },
    "url": "https://skywalking.dev",
    "telephone": "+54-11-2162-5416",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "Argentina"
      },
      {
        "@type": "Country",
        "name": "Chile"
      },
      {
        "@type": "Country",
        "name": "Uruguay"
      }
    ]
  }

  // Schema.org JSON-LD - Services
  const serviceSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Agentes AI Personalizados",
      "provider": {
        "@id": "https://skywalking.dev/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Argentina"
      },
      "description": "Chatbots inteligentes, agentes de consulta a bases de datos y asistentes de conocimiento personalizados"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Automatización de Procesos Empresariales",
      "provider": {
        "@id": "https://skywalking.dev/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Argentina"
      },
      "description": "Integración WhatsApp, automatización de email/CRM, procesamiento de documentos y reportes en tiempo real"
    }
  ]

  return (
    <html lang="es">
      <head>
        {/* JSON-LD Schemas */}
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
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
