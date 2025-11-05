'use client'

import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 p-6">
      <Link href="/" className="inline-block">
        <Image
          src="/logo.png"
          alt="Skywalking.dev - Automatización Empresarial con IA en Argentina"
          width={60}
          height={60}
          className="hover:scale-110 transition-transform duration-300"
          priority
        />
      </Link>
    </header>
  )
}

