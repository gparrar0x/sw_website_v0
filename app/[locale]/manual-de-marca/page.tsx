import { Link } from "@/i18n/routing"
import { ArrowLeft } from "lucide-react"

export default function BrandManual() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10">
        <div className="container mx-auto px-6 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Volver al inicio
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16 max-w-5xl">
        {/* Title */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">Manual de Marca</h1>
          <p className="text-xl text-white/70 text-pretty">
            Guía completa de identidad visual y comunicación de Skywalking.dev
          </p>
        </div>

        {/* Color Palette */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Paleta de Colores</h2>

          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-white/80">Base Foundation</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-[#000000] border border-white/10 rounded-2xl p-8 h-48 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Negro Absoluto</h4>
                  <p className="text-white/70 text-sm">Fondo principal</p>
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-sm">#000000</p>
                  <p className="font-mono text-sm text-white/70">RGB: 0, 0, 0</p>
                </div>
              </div>

              <div className="bg-[#0A0E27] rounded-2xl p-8 h-48 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">Negro Azulado Oscuro</h4>
                  <p className="text-white/80 text-sm">Gradiente hero (inicio)</p>
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-sm text-white">#0A0E27</p>
                  <p className="font-mono text-sm text-white/80">RGB: 10, 14, 39</p>
                </div>
              </div>

              <div className="bg-[#1a1f3a] rounded-2xl p-8 h-48 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">Negro Azulado Medio</h4>
                  <p className="text-white/80 text-sm">Gradiente hero (final)</p>
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-sm text-white">#1a1f3a</p>
                  <p className="font-mono text-sm text-white/80">RGB: 26, 31, 58</p>
                </div>
              </div>

              <div className="bg-[#EFEEE9] rounded-2xl p-8 h-48 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-black">Beige Claro</h4>
                  <p className="text-black/60 text-sm">Tarjetas y superficies</p>
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-sm text-black">#EFEEE9</p>
                  <p className="font-mono text-sm text-black/60">RGB: 239, 238, 233</p>
                </div>
              </div>

              <div className="bg-[#E8E2CF] rounded-2xl p-8 h-48 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-black">Beige Cálido</h4>
                  <p className="text-black/60 text-sm">Acentos y hover</p>
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-sm text-black">#E8E2CF</p>
                  <p className="font-mono text-sm text-black/60">RGB: 232, 226, 207</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-white/80">Extended Base</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#5F7382] rounded-2xl p-8 h-48 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">Azul-Gris</h4>
                  <p className="text-white/80 text-sm">Color marca profesional</p>
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-sm text-white">#5F7382</p>
                </div>
              </div>
              <div className="bg-[#B4C3CD] rounded-2xl p-8 h-48 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-black">Azul Claro</h4>
                  <p className="text-black/60 text-sm">Fondos sutiles</p>
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-sm text-black">#B4C3CD</p>
                </div>
              </div>
              <div className="bg-[#918778] rounded-2xl p-8 h-48 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">Tierra</h4>
                  <p className="text-white/80 text-sm">Contraste cálido, texto secundario</p>
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-sm text-white">#918778</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-white/80">Action Accents</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#D4AF37] rounded-2xl p-8 h-48 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-black">Dorado</h4>
                  <p className="text-black/60 text-sm">Premium, CTAs primarios</p>
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-sm text-black">#D4AF37</p>
                </div>
              </div>
              <div className="bg-[#E8833A] rounded-2xl p-8 h-48 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-black">Naranja</h4>
                  <p className="text-black/60 text-sm">Energía, urgencia, hovers</p>
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-sm text-black">#E8833A</p>
                </div>
              </div>
              <div className="bg-[#CA2230] rounded-2xl p-8 h-48 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">Rojo</h4>
                  <p className="text-white/80 text-sm">Alertas, acciones críticas</p>
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-sm text-white">#CA2230</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Tipografía</h2>
          <div className="bg-[#EFEEE9] rounded-2xl p-8 text-black space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Geist Sans</h3>
              <p className="text-black/60 mb-6">Tipografía principal para títulos y cuerpo de texto</p>
              <div className="space-y-4">
                <div>
                  <p className="text-5xl font-bold mb-2">Aa Bb Cc</p>
                  <p className="text-sm text-black/60">Bold - Títulos principales</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold mb-2">Aa Bb Cc</p>
                  <p className="text-sm text-black/60">Semibold - Subtítulos</p>
                </div>
                <div>
                  <p className="text-lg mb-2">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm</p>
                  <p className="text-sm text-black/60">Regular - Cuerpo de texto</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Referencias de Inspiración</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Cursor", aspect: "Minimalismo técnico y claridad" },
              { name: "Starlink", aspect: "Elegancia espacial y modernidad" },
              { name: "Linear", aspect: "Diseño limpio y funcional" },
              { name: "Aerolab", aspect: "Creatividad y profesionalismo" },
            ].map((ref) => (
              <div key={ref.name} className="bg-[#EFEEE9] rounded-2xl p-6 text-black">
                <h3 className="text-lg font-semibold mb-2">{ref.name}</h3>
                <p className="text-sm text-black/60">{ref.aspect}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
