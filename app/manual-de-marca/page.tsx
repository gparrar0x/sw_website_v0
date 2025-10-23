import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function BrandManual() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="container mx-auto px-6 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-6 py-16 max-w-5xl">
        {/* Title */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">Manual de Marca</h1>
          <p className="text-xl text-white/60 text-pretty">
            Guía completa de identidad visual y comunicación de Skywalking.dev
          </p>
        </div>

        {/* Color Palette */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Paleta de Colores</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Primary Black */}
            <div className="bg-[#000000] border border-white/10 rounded-2xl p-8 h-48 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">Negro Absoluto</h3>
                <p className="text-white/60 text-sm">Fondo principal</p>
              </div>
              <div className="space-y-1">
                <p className="font-mono text-sm">#000000</p>
                <p className="font-mono text-sm text-white/60">RGB: 0, 0, 0</p>
              </div>
            </div>

            {/* Light Beige */}
            <div className="bg-[#EFEEE9] rounded-2xl p-8 h-48 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-black">Beige Claro</h3>
                <p className="text-black/60 text-sm">Tarjetas y superficies</p>
              </div>
              <div className="space-y-1">
                <p className="font-mono text-sm text-black">#EFEEE9</p>
                <p className="font-mono text-sm text-black/60">RGB: 239, 238, 233</p>
              </div>
            </div>

            {/* Warm Beige */}
            <div className="bg-[#E8E2CF] rounded-2xl p-8 h-48 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-black">Beige Cálido</h3>
                <p className="text-black/60 text-sm">Acentos y hover</p>
              </div>
              <div className="space-y-1">
                <p className="font-mono text-sm text-black">#E8E2CF</p>
                <p className="font-mono text-sm text-black/60">RGB: 232, 226, 207</p>
              </div>
            </div>

            {/* WhatsApp Green */}
            <div className="bg-[#25D366] rounded-2xl p-8 h-48 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-black">Verde WhatsApp</h3>
                <p className="text-black/60 text-sm">Botón de contacto</p>
              </div>
              <div className="space-y-1">
                <p className="font-mono text-sm text-black">#25D366</p>
                <p className="font-mono text-sm text-black/60">RGB: 37, 211, 102</p>
              </div>
            </div>
          </div>

          <div className="bg-[#EFEEE9] rounded-2xl p-8 text-black">
            <h4 className="font-semibold mb-4">Sistema de Texto Dual</h4>
            <div className="space-y-3 text-sm">
              <p>
                <strong>Fondos oscuros:</strong> Texto blanco (#FFFFFF) con opacidades variables (100%, 80%, 60%)
              </p>
              <p>
                <strong>Fondos claros:</strong> Texto negro (#000000) con opacidades variables (100%, 80%, 60%)
              </p>
            </div>
          </div>
        </section>

        {/* Typography */}
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

            <div className="border-t border-black/10 pt-8">
              <h4 className="font-semibold mb-4">Jerarquía Tipográfica</h4>
              <div className="space-y-3 text-sm">
                <p>
                  <strong>H1:</strong> 3.75rem (60px) - Bold - Títulos hero
                </p>
                <p>
                  <strong>H2:</strong> 1.875rem (30px) - Bold - Títulos de sección
                </p>
                <p>
                  <strong>H3:</strong> 1.5rem (24px) - Semibold - Subtítulos
                </p>
                <p>
                  <strong>Body:</strong> 1rem (16px) - Regular - Texto principal
                </p>
                <p>
                  <strong>Small:</strong> 0.875rem (14px) - Regular - Texto secundario
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Style */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Estilo Visual</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#EFEEE9] rounded-2xl p-8 text-black">
              <h3 className="text-xl font-semibold mb-4">Minimalismo</h3>
              <ul className="space-y-2 text-sm text-black/80">
                <li>• Espacios generosos entre elementos</li>
                <li>• Diseño limpio sin saturación visual</li>
                <li>• Enfoque en contenido y funcionalidad</li>
                <li>• Uso estratégico del espacio en blanco</li>
              </ul>
            </div>

            <div className="bg-[#EFEEE9] rounded-2xl p-8 text-black">
              <h3 className="text-xl font-semibold mb-4">Elementos Artísticos</h3>
              <ul className="space-y-2 text-sm text-black/80">
                <li>• Orbes con gradientes suaves</li>
                <li>• Animaciones sutiles y fluidas</li>
                <li>• Transiciones suaves (300-500ms)</li>
                <li>• Efectos de hover minimalistas</li>
              </ul>
            </div>

            <div className="bg-[#EFEEE9] rounded-2xl p-8 text-black">
              <h3 className="text-xl font-semibold mb-4">Bordes y Radios</h3>
              <ul className="space-y-2 text-sm text-black/80">
                <li>• Bordes redondeados: 16px (1rem)</li>
                <li>• Botones: 8px (0.5rem)</li>
                <li>• Bordes sutiles: 1px con opacidad 10%</li>
                <li>• Sin sombras duras</li>
              </ul>
            </div>

            <div className="bg-[#EFEEE9] rounded-2xl p-8 text-black">
              <h3 className="text-xl font-semibold mb-4">Iconografía</h3>
              <ul className="space-y-2 text-sm text-black/80">
                <li>• Estilo: Lucide Icons (outline)</li>
                <li>• Tamaño estándar: 24px</li>
                <li>• Stroke width: 2px</li>
                <li>• Consistencia en todo el sitio</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tone of Voice */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Tono de Comunicación</h2>

          <div className="bg-[#EFEEE9] rounded-2xl p-8 text-black space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Profesional pero Cercano</h3>
              <p className="text-black/80">
                Comunicamos con autoridad técnica sin perder la calidez humana. Somos expertos accesibles, no gurús
                inalcanzables.
              </p>
            </div>

            <div className="border-t border-black/10 pt-6">
              <h3 className="text-xl font-semibold mb-3">Enfocado en Valor</h3>
              <p className="text-black/80">
                Cada mensaje destaca beneficios concretos: ahorro de tiempo, reducción de errores, escalabilidad.
                Hablamos de resultados, no solo de tecnología.
              </p>
            </div>

            <div className="border-t border-black/10 pt-6">
              <h3 className="text-xl font-semibold mb-3">Claro y Directo</h3>
              <p className="text-black/80">
                Evitamos jerga innecesaria. Explicamos conceptos complejos de forma simple. Nuestros CTAs son claros y
                accionables.
              </p>
            </div>

            <div className="border-t border-black/10 pt-6">
              <h4 className="font-semibold mb-3">Palabras Clave</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Automatización",
                  "Eficiencia",
                  "Innovación",
                  "Transformación",
                  "Inteligente",
                  "Escalable",
                  "Confiable",
                  "Resultados",
                ].map((word) => (
                  <span key={word} className="px-3 py-1 bg-black text-white rounded-full text-sm">
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Components */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Componentes</h2>

          <div className="space-y-6">
            {/* Buttons */}
            <div className="bg-[#EFEEE9] rounded-2xl p-8 text-black">
              <h3 className="text-xl font-semibold mb-6">Botones</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 flex-wrap">
                  <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-black/80 transition-colors">
                    Primario
                  </button>
                  <button className="px-6 py-3 border border-black text-black rounded-lg hover:bg-black hover:text-white transition-colors">
                    Secundario
                  </button>
                </div>
                <p className="text-sm text-black/60">Padding: 12px 24px | Border radius: 8px | Transición: 300ms</p>
              </div>
            </div>

            {/* Cards */}
            <div className="bg-[#EFEEE9] rounded-2xl p-8 text-black">
              <h3 className="text-xl font-semibold mb-6">Tarjetas</h3>
              <div className="bg-white rounded-2xl p-6 border border-black/10">
                <h4 className="font-semibold mb-2">Título de Tarjeta</h4>
                <p className="text-black/60 text-sm">Contenido de ejemplo con padding generoso y bordes redondeados.</p>
              </div>
              <p className="text-sm text-black/60 mt-4">Background: #EFEEE9 | Border radius: 16px | Padding: 32px</p>
            </div>

            {/* Forms */}
            <div className="bg-[#EFEEE9] rounded-2xl p-8 text-black">
              <h3 className="text-xl font-semibold mb-6">Formularios</h3>
              <input
                type="text"
                placeholder="Ejemplo de input"
                className="w-full px-4 py-3 bg-white border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 text-black placeholder:text-black/40"
              />
              <p className="text-sm text-black/60 mt-4">
                Background: blanco | Border: 1px negro/10% | Focus: ring negro/20%
              </p>
            </div>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Guías de Uso</h2>

          <div className="bg-[#EFEEE9] rounded-2xl p-8 text-black space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <span className="text-green-600">✓</span> Hacer
              </h3>
              <ul className="space-y-2 text-sm text-black/80 ml-6">
                <li>• Mantener espacios generosos entre elementos</li>
                <li>• Usar la paleta de colores establecida</li>
                <li>• Priorizar la legibilidad y claridad</li>
                <li>• Aplicar animaciones sutiles y con propósito</li>
                <li>• Mantener consistencia en toda la experiencia</li>
              </ul>
            </div>

            <div className="border-t border-black/10 pt-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <span className="text-red-600">✗</span> No Hacer
              </h3>
              <ul className="space-y-2 text-sm text-black/80 ml-6">
                <li>• Saturar el diseño con demasiados elementos</li>
                <li>• Usar colores fuera de la paleta establecida</li>
                <li>• Aplicar sombras duras o efectos excesivos</li>
                <li>• Mezclar múltiples estilos tipográficos</li>
                <li>• Crear animaciones distractoras o lentas</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Inspirations */}
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
      </div>
    </div>
  )
}
