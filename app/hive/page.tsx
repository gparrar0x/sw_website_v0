import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Github,
  Calendar,
  Mail,
  MessageSquare,
  Search,
  GitBranch,
  Zap,
  Code2,
  Video,
  Globe,
  Shield,
  Database,
  Server,
  Package,
  ChevronRight,
} from 'lucide-react'
import { TerminalAnimation } from './terminal-animation'
import { CopyButton } from './copy-button'

// ─────────────────────────────────────────────
// Metadata
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Hive — Plugin Claude Code | 40+ Skills + 9 Agentes IA',
  description:
    'Plugin open source para Claude Code con 50+ skills de desarrollo. Agentes IA especializados, slash commands para Gmail, Slack, GitHub, Vercel, Supabase. Licencia MIT.',
  creator: 'Skywalking.dev',
  authors: [{ name: 'Skywalking.dev', url: 'https://skywalking.dev' }],
  openGraph: {
    title: 'Hive — Claude Code Plugin | 40+ AI Skills & 9 Specialist Agents',
    description:
      'Open source plugin for Claude Code, Cursor, and Gemini CLI. Slash commands for Gmail, Slack, Supabase, Vercel, GitHub. 50+ skills, 9 specialist agents, one repo.',
    url: 'https://skywalking.dev/hive',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hive — Plugin Claude Code | 40+ Skills + 9 Agentes IA',
    description:
      'Plugin open source para Claude Code con 50+ skills de desarrollo. Agentes IA especializados, slash commands para Gmail, Slack, GitHub, Vercel, Supabase. Licencia MIT.',
  },
  alternates: {
    canonical: 'https://skywalking.dev/hive',
  },
}

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────

const SCHEMA_SOFTWARE = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Hive',
  description: 'Plugin open source para Claude Code con 50+ skills y 9 agentes IA especializados',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Windows, MacOS, Linux',
  offers: { '@type': 'Offer', priceCurrency: 'USD', price: '0' },
  url: 'https://skywalking.dev/hive',
  author: { '@type': 'Organization', name: 'Skywalking.dev', url: 'https://skywalking.dev' },
}

const SCHEMA_FAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es Hive?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Plugin open source para Claude Code con 50+ skills y 9 agentes especializados en desarrollo, automatización e IA.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hive es open source bajo licencia MIT. Completamente gratuito.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Funciona con Cursor y Gemini CLI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, compatible con Claude Code, Cursor, Gemini CLI y Codex.',
      },
    },
  ],
}

const GITHUB_URL = 'https://github.com/Skywalking-dev/hive'
const CALENDLY_URL =
  '#contact?utm_source=github&utm_medium=hive&utm_campaign=oss-launch'

const SKILL_CATEGORIES = [
  {
    label: 'Media y Sentidos',
    icon: Video,
    skills: ['Generar imágenes', 'Procesar audio', 'Procesar video', 'Perplexity'],
  },
  {
    label: 'Google',
    icon: Globe,
    skills: ['Gmail', 'Google Docs', 'Google Drive', 'Google Calendar', 'Google Workspace'],
  },
  {
    label: 'Comunicación',
    icon: MessageSquare,
    skills: ['Slack', 'WhatsApp'],
  },
  {
    label: 'Infraestructura',
    icon: Server,
    skills: ['Supabase', 'Vercel'],
  },
  {
    label: 'Flujo de desarrollo',
    icon: GitBranch,
    skills: ['/shape', '/refine', '/dev', '/push_it', '/ship_it', '/pr-review', '/capture'],
  },
  {
    label: 'Herramientas dev',
    icon: Code2,
    skills: ['Test & Debug', 'GitHub CLI', 'Adversarial Review', 'Frontend Design'],
  },
  {
    label: 'Marketing y Contenido',
    icon: Search,
    skills: ['Copywriting', 'Social Content', 'Content Strategy', 'Cold Email', 'SEO'],
  },
  {
    label: 'Finanzas',
    icon: Server,
    skills: ['Binance', 'Gate.io', 'Financial Advisor'],
  },
] as const

const AGENTS = [
  { name: 'Aurora', focus: 'Identidad de marca, sistemas de diseño, specs UI', initials: 'AU' },
  { name: 'Pixel', focus: 'Next.js/React — rápido, accesible, producción', initials: 'PX' },
  { name: 'Kokoro', focus: 'FastAPI, bases de datos, auth, backend', initials: 'KK' },
  { name: 'Sentinela', focus: 'QA, Playwright E2E, regresión', initials: 'SE' },
  { name: 'Hermes', focus: 'Vercel, CI/CD, edge functions, monitoreo', initials: 'HM' },
  { name: 'Flux', focus: 'Workflows n8n, automatización, integraciones', initials: 'FL' },
  { name: 'Oraculo', focus: 'Investigación web, análisis competitivo', initials: 'OR' },
  { name: 'Pregon', focus: 'Estrategia de contenido, redes sociales, email', initials: 'PR' },
  { name: 'Lumen', focus: 'SEO técnico, Core Web Vitals, schema', initials: 'LU' },
] as const

const INSTALL_CODE = `git clone https://github.com/Skywalking-dev/hive.git
cd hive
uv sync
cp .env.example .env`

const PLUGIN_CODE = `claude plugin install ./hive`

const SYNC_CODE = `uv run hive setup   # Cursor, Gemini CLI, Codex`

// ─────────────────────────────────────────────
// Sub-components (server-safe)
// ─────────────────────────────────────────────

function GithubStarsBadge() {
  return (
    <Image
      src="https://img.shields.io/github/stars/Skywalking-dev/hive?style=social"
      alt="GitHub stars for Skywalking/hive"
      width={100}
      height={20}
      unoptimized
      data-testid="github-stars-badge"
      className="inline-block align-middle"
    />
  )
}

function CodeBlock({
  code,
  testId,
  copyTestId,
}: {
  code: string
  testId: string
  copyTestId: string
}) {
  return (
    <div
      data-testid={testId}
      className="relative rounded-lg border font-mono text-sm overflow-hidden"
      style={{
        background: 'rgba(12, 26, 39, 0.9)',
        borderColor: 'rgba(95, 115, 130, 0.3)',
      }}
    >
      <CopyButton text={code} testId={copyTestId} />
      <pre className="px-5 py-5 overflow-x-auto">
        <code style={{ color: '#EFEEE9' }}>{code}</code>
      </pre>
    </div>
  )
}

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────

export default function HivePage() {
  return (
    <main
      className="min-h-screen"
      style={{ background: 'var(--sky-black)' }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_SOFTWARE) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_FAQ) }}
      />
      {/* ── HERO ─────────────────────────────── */}
      <section
        data-testid="hero-container"
        className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-24 pb-16 text-center overflow-hidden"
      >
        {/* Subtle gradient orb — adapted from existing site pattern */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at center, rgba(212, 175, 55, 0.08) 0%, rgba(212, 175, 55, 0.03) 50%, transparent 100%)',
            filter: 'blur(60px)',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 w-full max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium"
            style={{
              background: 'rgba(212, 175, 55, 0.08)',
              borderColor: 'rgba(212, 175, 55, 0.25)',
              color: 'var(--sky-gold)',
            }}
            data-testid="hero-badge"
          >
            <Package size={14} aria-hidden="true" />
            Open source · Licencia MIT
          </div>

          {/* Terminal */}
          <div className="w-full max-w-3xl mx-auto">
            <noscript>
              <p className="text-sm font-mono" style={{ color: 'var(--sky-blue)' }}>
                Slash commands: /gmail inbox --unread · /slack read · /perplexity · /shape · /ship_it · /google-docs get
              </p>
            </noscript>
            <TerminalAnimation />
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1
              data-testid="hero-headline-primary"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance"
              style={{ color: 'var(--sky-white)', fontFamily: 'var(--font-heading)' }}
            >
              Aumenta tu workspace con{' '}
              <span
                style={{
                  background: `linear-gradient(135deg, var(--sky-gold), var(--sky-orange))`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                IA.
              </span>
            </h1>

            <p
              data-testid="hero-headline-secondary"
              className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
              style={{ color: 'var(--sky-blue)' }}
            >
              50+ skills. 9 agentes. Un solo plugin.
              <br className="hidden sm:block" />
              Compatible con Claude Code, Cursor, Gemini CLI y Codex.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <Link
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="cta-github"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-md font-semibold text-base border-2 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{
                borderColor: 'var(--sky-gold)',
                color: 'var(--sky-gold)',
                background: 'transparent',
              }}
              aria-label="Ver Hive en GitHub"
            >
              <Github size={18} aria-hidden="true" />
              Ver en GitHub
              <GithubStarsBadge />
            </Link>

            <div className="flex flex-col items-center gap-1">
              <Link
                href={CALENDLY_URL}
                data-testid="cta-demo"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-base transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{
                  background: 'rgba(232, 131, 58, 0.15)',
                  border: '1px solid rgba(232, 131, 58, 0.4)',
                  color: 'var(--sky-orange)',
                }}
                aria-label="Agendar llamada con Skywalking"
              >
                <Calendar size={18} aria-hidden="true" />
                Agendar llamada
              </Link>
              <span className="text-xs" style={{ color: 'var(--sky-blue)' }}>
                Quieres esto configurado para tu equipo?
              </span>
            </div>
          </div>

          {/* Social proof */}
          <p className="text-sm" style={{ color: 'var(--sky-blue)' }}>
            En producción en Skywalking — el estudio que lo construyó, desde Patagonia, Argentina.
          </p>
        </div>
      </section>

      {/* ── SKILLS GRID ──────────────────────── */}
      <section
        data-testid="skills-section"
        className="px-6 py-24"
        style={{ background: 'rgba(95, 115, 130, 0.04)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--sky-white)' }}>
              Todo lo que tu stack necesita.
            </h2>
            <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--sky-blue)' }}>
              Los skills son archivos Markdown que le enseñan a tu IA a usar una herramienta. Agrega una key, obtén un comando. Sin configuración extra.
            </p>
          </div>

          <div className="space-y-12">
            {SKILL_CATEGORIES.map((cat) => {
              const Icon = cat.icon
              return (
                <div
                  key={cat.label}
                  data-testid={`skills-category-${cat.label.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                >
                  {/* Category header */}
                  <div className="flex items-center gap-2 mb-6">
                    <Icon
                      size={16}
                      style={{ color: 'var(--sky-gold)' }}
                      aria-hidden="true"
                    />
                    <span
                      className="text-sm font-semibold tracking-wide uppercase"
                      style={{ color: 'var(--sky-gold)' }}
                    >
                      {cat.label}
                    </span>
                    <div
                      className="flex-1 h-px ml-2"
                      style={{ background: 'rgba(95, 115, 130, 0.2)' }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Skills grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {cat.skills.map((skill) => {
                      const skillSlug = skill.toLowerCase().replace(/\//g, '').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
                      return (
                        <div
                          key={skill}
                          data-testid={`skill-card-${skillSlug}`}
                          className="group flex items-center gap-3 px-4 py-3 rounded-lg border transition-all duration-200 cursor-default"
                          style={{
                            background: 'rgba(12, 26, 39, 0.8)',
                            borderColor: 'rgba(95, 115, 130, 0.2)',
                          }}
                          role="listitem"
                          aria-label={`${cat.label} skill: ${skill}`}
                        >
                          <div
                            data-testid={`skill-icon-${skillSlug}`}
                            className="w-2 h-2 rounded-full flex-shrink-0 transition-colors duration-200"
                            style={{ background: 'var(--sky-gold)' }}
                            aria-hidden="true"
                          />
                          <span
                            className="text-sm font-medium font-mono transition-colors duration-200"
                            style={{ color: 'var(--sky-white)' }}
                          >
                            {skill}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom link */}
          <div className="text-center mt-12">
            <Link
              href={`${GITHUB_URL}#creating-skills`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{ color: 'var(--sky-gold)' }}
            >
              No ves tu herramienta? Crea un skill en 10 minutos.
              <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── AGENTS CAROUSEL ──────────────────── */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--sky-white)' }}>
              Un equipo completo, on demand.
            </h2>
            <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--sky-blue)' }}>
              Los agentes son especialistas con conocimiento profundo de su dominio. Delega una tarea, recibe el resultado. Cada agente sabe lo suyo — tú no tienes que saberlo.
            </p>
          </div>

          {/* Horizontal scroll carousel */}
          <div
            data-testid="agents-carousel"
            className="overflow-x-auto pb-4 -mx-6 px-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            role="list"
            aria-label="Hive specialist agents"
          >
            <div className="flex gap-4" style={{ width: 'max-content' }}>
              {AGENTS.map((agent) => {
                const slug = agent.name.toLowerCase()
                return (
                  <div
                    key={agent.name}
                    data-testid={`agent-card-${slug}`}
                    className="group flex flex-col gap-3 p-5 rounded-lg border transition-all duration-200 cursor-default"
                    style={{
                      width: '220px',
                      background: 'rgba(12, 26, 39, 0.8)',
                      borderColor: 'rgba(95, 115, 130, 0.2)',
                    }}
                    role="listitem"
                    aria-label={`${agent.name}: ${agent.focus}`}
                  >
                    {/* Avatar */}
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 text-base font-bold font-mono transition-colors duration-200"
                      style={{
                        background: 'rgba(212, 175, 55, 0.12)',
                        color: 'var(--sky-gold)',
                        border: '1px solid rgba(212, 175, 55, 0.25)',
                      }}
                      aria-hidden="true"
                    >
                      {agent.initials}
                    </div>

                    {/* Info */}
                    <div className="space-y-1 flex-1">
                      <p className="text-sm font-semibold" style={{ color: 'var(--sky-white)' }}>
                        {agent.name}
                      </p>
                      <p className="text-xs leading-relaxed" style={{ color: 'var(--sky-blue)' }}>
                        {agent.focus}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div
                      className="text-xs font-mono transition-colors duration-200"
                      style={{ color: 'var(--sky-blue)' }}
                      aria-hidden="true"
                    >
                      →
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK START ──────────────────────── */}
      <section
        data-testid="quickstart-section"
        className="px-6 py-24"
        style={{ background: 'rgba(95, 115, 130, 0.04)' }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--sky-white)' }}>
              Funcionando en menos de 2 minutos.
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--sky-blue)' }}>
              Clona, sincroniza, agrega las keys que necesites. Todo lo demás es opcional.
            </p>
          </div>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ background: 'var(--sky-gold)', color: 'var(--sky-black)' }}
                  aria-hidden="true"
                >
                  1
                </span>
                <span className="text-sm font-medium" style={{ color: 'var(--sky-white)' }}>Instalar</span>
              </div>
              <CodeBlock
                code={INSTALL_CODE}
                testId="quickstart-codeblock"
                copyTestId="quickstart-copy-button"
              />
            </div>

            {/* Step 2 */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ background: 'var(--sky-gold)', color: 'var(--sky-black)' }}
                  aria-hidden="true"
                >
                  2
                </span>
                <span className="text-sm font-medium" style={{ color: 'var(--sky-white)' }}>Usar como plugin de Claude Code</span>
              </div>
              <CodeBlock
                code={PLUGIN_CODE}
                testId="quickstart-codeblock-plugin"
                copyTestId="quickstart-copy-button-plugin"
              />
            </div>

            {/* Step 3 */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ background: 'var(--sky-gold)', color: 'var(--sky-black)' }}
                  aria-hidden="true"
                >
                  3
                </span>
                <span className="text-sm font-medium" style={{ color: 'var(--sky-white)' }}>Sincronizar con otros providers</span>
              </div>
              <CodeBlock
                code={SYNC_CODE}
                testId="quickstart-codeblock-sync"
                copyTestId="quickstart-copy-button-sync"
              />
            </div>

            {/* Zero-key note */}
            <div
              className="flex items-start gap-3 px-4 py-3 rounded-lg border text-sm"
              style={{
                background: 'rgba(37, 211, 102, 0.06)',
                borderColor: 'rgba(37, 211, 102, 0.2)',
                color: 'var(--sky-blue)',
              }}
              role="note"
            >
              <Shield size={16} style={{ color: '#25D366', flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
              <span>
                <strong style={{ color: 'var(--sky-white)' }}>Cero API keys requeridas.</strong>{' '}
                Solo agregá credenciales para las integraciones que uses.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILL PACKS ──────────────────────── */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--sky-white)' }}>
              Core + packs opcionales.
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--sky-blue)' }}>
              Empieza con los skills que necesitas. Suma packs a medida que crece tu workflow.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Core */}
            <div
              className="p-6 rounded-lg border space-y-4"
              style={{
                background: 'rgba(12, 26, 39, 0.8)',
                borderColor: 'rgba(212, 175, 55, 0.3)',
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(212, 175, 55, 0.12)' }}
                >
                  <Package size={18} style={{ color: 'var(--sky-gold)' }} aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold" style={{ color: 'var(--sky-white)' }}>Core Pack</p>
                  <p className="text-xs" style={{ color: 'var(--sky-blue)' }}>Siempre instalado</p>
                </div>
              </div>
              <ul className="space-y-2">
                {['/shape', '/refine', '/dev', '/ship_it', '/pr-review', '/capture'].map(s => (
                  <li key={s} className="flex items-center gap-2 text-sm font-mono" style={{ color: 'var(--sky-white)' }}>
                    <span style={{ color: 'var(--sky-gold)' }}>›</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Optional packs */}
            <div className="space-y-4">
              {[
                { name: 'Google Pack', icon: Globe, skills: ['Gmail', 'Docs', 'Drive', 'Calendar'] },
                { name: 'Comms Pack', icon: MessageSquare, skills: ['Slack', 'WhatsApp'] },
                { name: 'Infra Pack', icon: Database, skills: ['Supabase', 'Vercel'] },
              ].map(pack => {
                const Icon = pack.icon
                return (
                  <div
                    key={pack.name}
                    className="flex items-center gap-4 p-4 rounded-lg border"
                    style={{
                      background: 'rgba(12, 26, 39, 0.6)',
                      borderColor: 'rgba(95, 115, 130, 0.2)',
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(95, 115, 130, 0.12)' }}
                    >
                      <Icon size={16} style={{ color: 'var(--sky-blue)' }} aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold" style={{ color: 'var(--sky-white)' }}>{pack.name}</p>
                      <p className="text-xs truncate" style={{ color: 'var(--sky-blue)' }}>
                        {pack.skills.join(' · ')}
                      </p>
                    </div>
                    <span className="ml-auto text-xs px-2 py-1 rounded" style={{ background: 'rgba(95, 115, 130, 0.12)', color: 'var(--sky-blue)' }}>
                      opcional
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────── */}
      <section
        data-testid="final-cta-section"
        className="px-6 py-24 text-center"
        style={{ background: 'rgba(95, 115, 130, 0.04)' }}
      >
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance" style={{ color: 'var(--sky-white)' }}>
            Open source. Licencia MIT. Sin vendor lock-in.
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--sky-blue)' }}>
            Hive es mantenido por Skywalking. Da star al repo para seguir las actualizaciones. Si quieres que lo configuremos para tu equipo, agenda una llamada.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="final-cta-github"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-md font-semibold text-base border-2 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 w-full sm:w-auto justify-center"
              style={{
                borderColor: 'var(--sky-gold)',
                color: 'var(--sky-gold)',
                background: 'transparent',
              }}
              aria-label="Ver Hive en GitHub"
            >
              <Github size={18} aria-hidden="true" />
              Ver en GitHub
              <GithubStarsBadge />
            </Link>

            <Link
              href={CALENDLY_URL}
              data-testid="final-cta-calendly"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-base transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 w-full sm:w-auto justify-center"
              style={{
                background: 'rgba(232, 131, 58, 0.15)',
                border: '1px solid rgba(232, 131, 58, 0.4)',
                color: 'var(--sky-orange)',
              }}
              aria-label="Agendar llamada con Skywalking sobre Hive"
            >
              <Calendar size={18} aria-hidden="true" />
              Agendar llamada
            </Link>
          </div>

          {/* Footer note */}
          <p className="text-sm pt-4" style={{ color: 'var(--sky-blue)' }}>
            Hecho con amor en Patagonia, Argentina.{' '}
            <Link
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-[var(--sky-gold)] transition-colors duration-150"
              style={{ color: 'var(--sky-blue)' }}
            >
              skywalking-dev/hive
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}
