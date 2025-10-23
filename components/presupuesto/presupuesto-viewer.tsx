'use client'

import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import Link from 'next/link'

interface PresupuestoMetadata {
  titulo: string
  cliente: string
  fecha: string
  total: string
  contacto: string
}

interface PresupuestoViewerProps {
  content: string
  metadata: PresupuestoMetadata
}

export default function PresupuestoViewer({ content, metadata }: PresupuestoViewerProps) {
  // Calcular validez (15 días desde la fecha)
  const fechaPropuesta = new Date(metadata.fecha)
  const fechaVencimiento = new Date(fechaPropuesta)
  fechaVencimiento.setDate(fechaVencimiento.getDate() + 15)
  const hoy = new Date()
  const esValido = hoy <= fechaVencimiento

  // Formatear fecha de vencimiento
  const fechaVencimientoStr = fechaVencimiento.toLocaleDateString('es-AR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#E8E2CF' }}>
      {/* Navigation Header */}
      <header style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '1.5rem' }}>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.875rem',
              color: 'rgba(0, 0, 0, 0.6)',
              textDecoration: 'none',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#000000'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0, 0, 0, 0.6)'}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            Volver al inicio
          </Link>
        </div>
      </header>

      {/* Header con metadata */}
      <div className="max-w-4xl px-6" style={{ margin: '0 auto', maxWidth: '56rem', paddingTop: '2rem', paddingBottom: '6rem' }}>
        <div className="rounded-lg shadow-sm" style={{ backgroundColor: '#EFEEE9', padding: '2.5rem', marginBottom: '2rem' }}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{metadata.titulo}</h1>
              <p className="text-lg text-gray-600 mt-1">{metadata.cliente}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Fecha: {metadata.fecha}</p>
              <p className="text-xl font-bold text-blue-600 mt-1">{metadata.total}</p>
            </div>
          </div>
          <div className="border-t mt-4" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.5rem' }}>
            <p className="text-sm text-gray-600">{metadata.contacto}</p>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
              fontWeight: '600',
              backgroundColor: esValido ? '#dcfce7' : '#fee2e2',
              color: esValido ? '#166534' : '#991b1b'
            }}>
              <span style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: esValido ? '#22c55e' : '#ef4444'
              }}></span>
              {esValido ? `Válido hasta ${fechaVencimientoStr}` : `Vencido el ${fechaVencimientoStr}`}
            </div>
          </div>
        </div>

        {/* Contenido markdown */}
        <div className="rounded-lg shadow-sm" style={{ backgroundColor: '#EFEEE9', padding: '2.5rem' }}>
          <article className="markdown-content">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {content}
            </ReactMarkdown>
          </article>
        </div>

        {/* Footer con contacto */}
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <p className="text-sm text-gray-600">
            Para cualquier consulta sobre esta propuesta, contáctanos en{' '}
            <a href="mailto:info@skywalking.dev" className="text-blue-600 hover:underline">
              info@skywalking.dev
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
