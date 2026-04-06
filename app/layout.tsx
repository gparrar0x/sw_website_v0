import type React from "react"
import "./globals.css"

import { Plus_Jakarta_Sans, Geist as V0_Font_Geist } from "next/font/google"

const geist = V0_Font_Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
})
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning>
      <body className={`${geist.variable} ${plusJakarta.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  )
}
