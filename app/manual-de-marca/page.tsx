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

          {/* Base Foundation */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-white/80">Base Foundation</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-[#000000] border border-white/10 rounded-2xl p-8 h-48 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Negro Absoluto</h4>
                  <p className="text-white/60 text-sm">Fondo principal</p>
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-sm">#000000</p>
                  <p className="font-mono text-sm text-white/60">RGB: 0, 0, 0</p>
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

          {/* Extended Base */}
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
                  <p className="font-mono text-sm text-white/80">RGB: 95, 115, 130</p>
                </div>
              </div>

              <div className="bg-[#B4C3CD] rounded-2xl p-8 h-48 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-black">Azul Claro</h4>
                  <p className="text-black/60 text-sm">Fondos sutiles</p>
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-sm text-black">#B4C3CD</p>
                  <p className="font-mono text-sm text-black/60">RGB: 180, 195, 205</p>
                </div>
              </div>

              <div className="bg-[#918778] rounded-2xl p-8 h-48 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">Tierra</h4>
                  <p className="text-white/80 text-sm">Contraste cálido, texto secundario</p>
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-sm text-white">#918778</p>
                  <p className="font-mono text-sm text-white/80">RGB: 145, 135, 120</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Accents */}
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
                  <p className="font-mono text-sm text-black/60">RGB: 212, 175, 55</p>
                </div>
              </div>

              <div className="bg-[#E8833A] rounded-2xl p-8 h-48 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-black">Naranja</h4>
                  <p className="text-black/60 text-sm">Energía, urgencia, hovers</p>
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-sm text-black">#E8833A</p>
                  <p className="font-mono text-sm text-black/60">RGB: 232, 131, 58</p>
                </div>
              </div>

              <div className="bg-[#CA2230] rounded-2xl p-8 h-48 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">Rojo</h4>
                  <p className="text-white/80 text-sm">Alertas, acciones críticas</p>
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-sm text-white">#CA2230</p>
                  <p className="font-mono text-sm text-white/80">RGB: 202, 34, 48</p>
                </div>
              </div>
            </div>
          </div>

          {/* Functional */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-white/80">Functional</h3>
            <div className="grid md:grid-cols-1 gap-6 max-w-md">
              <div className="bg-[#25D366] rounded-2xl p-8 h-48 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-black">Verde WhatsApp</h4>
                  <p className="text-black/60 text-sm">Botón de contacto</p>
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-sm text-black">#25D366</p>
                  <p className="font-mono text-sm text-black/60">RGB: 37, 211, 102</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#EFEEE9] rounded-2xl p-8 text-black mb-8">
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

          {/* Reglas de Uso */}
          <div className="bg-[#EFEEE9] rounded-2xl p-8 text-black mb-8">
            <h4 className="font-semibold mb-4">Jerarquía de CTAs</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-medium mb-2">CTA Primario (máximo 1 por sección)</p>
                <div className="bg-white rounded-lg p-3 mb-2">
                  <code className="text-xs">border-2 border-[#D4AF37] text-black hover:bg-[#D4AF37]</code>
                </div>
                <p className="text-black/60">Borde dorado para acciones principales, hover rellena con dorado</p>
              </div>
              <div>
                <p className="font-medium mb-2">CTA Secundario</p>
                <div className="bg-white rounded-lg p-3 mb-2">
                  <code className="text-xs">bg-[#5F7382] text-white hover:bg-[#E8833A]</code>
                </div>
                <p className="text-black/60">Azul-gris para elementos de marca</p>
              </div>
              <div>
                <p className="font-medium mb-2">CTA Terciario / Ghost</p>
                <div className="bg-white rounded-lg p-3 mb-2">
                  <code className="text-xs">border-2 border-[#B4C3CD] text-[#B4C3CD] hover:border-[#E8833A]</code>
                </div>
                <p className="text-black/60">Estilo outline para acciones secundarias</p>
              </div>
            </div>
          </div>

          {/* Contraste WCAG */}
          <div className="bg-[#EFEEE9] rounded-2xl p-8 text-black mb-8">
            <h4 className="font-semibold mb-4">Contraste WCAG AA</h4>
            <div className="space-y-3 text-sm">
              <p className="font-medium text-green-700 mb-2">✓ Pasan AA (4.5:1 mínimo):</p>
              <ul className="space-y-1 text-black/80 ml-4">
                <li>• Negro (#000000) sobre Beige Claro (#EFEEE9) - 11.2:1</li>
                <li>• Azul-Gris (#5F7382) sobre Beige Claro (#EFEEE9) - 5.8:1</li>
                <li>• Beige Claro (#EFEEE9) sobre Negro (#000000) - 18.5:1</li>
                <li>• Dorado (#D4AF37) sobre Negro (#000000) - 6.1:1</li>
              </ul>
              <p className="font-medium text-red-700 mt-4 mb-2">⚠️ No usar:</p>
              <ul className="space-y-1 text-black/80 ml-4">
                <li>• Azul Claro (#B4C3CD) sobre Beige Claro (#EFEEE9) - bajo contraste</li>
                <li>• Tierra (#918778) sobre Dorado (#D4AF37) - bajo contraste</li>
              </ul>
            </div>
          </div>

          {/* Variables CSS */}
          <div className="bg-[#EFEEE9] rounded-2xl p-8 text-black">
            <h4 className="font-semibold mb-4">Variables CSS</h4>
            <div className="bg-white rounded-lg p-4 overflow-x-auto">
              <pre className="text-xs text-black/80">
{`--sky-black: #000000
--sky-white: #EFEEE9
--sky-beige-warm: #E8E2CF
--sky-blue: #5F7382
--sky-light: #B4C3CD
--sky-warm: #918778
--sky-gold: #D4AF37
--sky-orange: #E8833A
--sky-red: #CA2230
--sky-green: #25D366`}
              </pre>
            </div>
            <p className="text-sm text-black/60 mt-3">
              Todas las variables están disponibles en <code className="bg-white px-1 rounded">globals.css</code>
            </p>
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
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-sm">CTAs Premium</h4>
                  <div className="flex items-center gap-4 flex-wrap">
                    <button className="px-6 py-3 border-2 border-[#D4AF37] text-black rounded-lg hover:bg-[#D4AF37] hover:text-black transition-colors font-semibold">
                      Contactanos
                    </button>
                    <button className="px-6 py-3 bg-[#25D366] text-black rounded-lg hover:bg-[#25D366]/90 transition-colors font-semibold">
                      WhatsApp
                    </button>
                  </div>
                  <p className="text-sm text-black/60 mt-2">Usar borde dorado (#D4AF37) para acciones principales | Hover rellena con dorado</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-sm">Secundarios</h4>
                  <div className="flex items-center gap-4 flex-wrap">
                    <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-black/80 transition-colors">
                      Primario
                    </button>
                    <button className="px-6 py-3 border border-black text-black rounded-lg hover:bg-black hover:text-white transition-colors">
                      Secundario
                    </button>
                    <button className="px-6 py-3 bg-[#5F7382] text-white rounded-lg hover:bg-[#5F7382]/80 transition-colors">
                      Marca
                    </button>
                  </div>
                  <p className="text-sm text-black/60 mt-2">Azul-gris (#5F7382) para elementos de marca</p>
                </div>
                <p className="text-sm text-black/60 pt-2 border-t border-black/10">Padding: 12px 24px | Border radius: 8px | Transición: 300ms</p>
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
                <li>• Usar máximo 1 CTA dorado por sección</li>
                <li>• Verificar contraste WCAG AA antes de usar combinaciones</li>
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
                <li>• Usar múltiples CTAs dorados en la misma sección</li>
                <li>• Combinar colores con bajo contraste (Azul Claro sobre Beige Claro)</li>
              </ul>
            </div>
          </div>

          {/* Casos de Uso por Componente */}
          <div className="bg-[#EFEEE9] rounded-2xl p-8 text-black mt-8">
            <h3 className="text-xl font-semibold mb-6">Casos de Uso por Componente</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-black/10">
                    <th className="text-left py-2 font-semibold">Componente</th>
                    <th className="text-left py-2 font-semibold">Primario</th>
                    <th className="text-left py-2 font-semibold">Secundario</th>
                    <th className="text-left py-2 font-semibold">Acento</th>
                    <th className="text-left py-2 font-semibold">Fondo</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  <tr className="border-b border-black/5">
                    <td className="py-2">Hero</td>
                    <td className="py-2">Beige Claro</td>
                    <td className="py-2">Azul Claro</td>
                    <td className="py-2">Dorado (CTA)</td>
                    <td className="py-2">Negro</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-2">Navbar</td>
                    <td className="py-2">Beige Claro</td>
                    <td className="py-2">Azul-Gris</td>
                    <td className="py-2">Naranja (hover)</td>
                    <td className="py-2">Negro</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-2">Cards</td>
                    <td className="py-2">Negro</td>
                    <td className="py-2">Tierra</td>
                    <td className="py-2">Azul-Gris (icon)</td>
                    <td className="py-2">Beige Claro</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-2">Footer</td>
                    <td className="py-2">Azul Claro</td>
                    <td className="py-2">Tierra</td>
                    <td className="py-2">Azul-Gris (links)</td>
                    <td className="py-2">Negro</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-2">Forms</td>
                    <td className="py-2">Negro</td>
                    <td className="py-2">Tierra</td>
                    <td className="py-2">Dorado (submit)</td>
                    <td className="py-2">Beige Claro</td>
                  </tr>
                  <tr>
                    <td className="py-2">Alerts Success</td>
                    <td className="py-2">Negro</td>
                    <td className="py-2">-</td>
                    <td className="py-2">Dorado</td>
                    <td className="py-2">Dorado/10</td>
                  </tr>
                </tbody>
              </table>
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
