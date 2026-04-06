import { notFound } from 'next/navigation'
import { getPresupuestoBySlug, getAllPresupuestosSlugs } from '@/lib/presupuestos'
import PresupuestoViewer from '@/components/presupuesto/presupuesto-viewer'
import ExportPDFButton from '@/components/presupuesto/export-pdf-button'
import type { Metadata } from 'next'
import { routing } from '@/i18n/routing'

interface PageProps {
  params: Promise<{ locale: string; cliente: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { cliente } = await params
  const presupuesto = getPresupuestoBySlug(cliente)

  if (!presupuesto) {
    return {
      title: 'Presupuesto no encontrado',
    }
  }

  return {
    title: `${presupuesto.metadata.titulo} - Skywalking.dev`,
    description: `Presupuesto para ${presupuesto.metadata.cliente}`,
    robots: 'noindex, nofollow',
  }
}

export async function generateStaticParams() {
  const slugs = getAllPresupuestosSlugs()
  return routing.locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, cliente: slug }))
  )
}

export default async function PresupuestoPage({ params }: PageProps) {
  const { cliente } = await params
  const presupuesto = getPresupuestoBySlug(cliente)

  if (!presupuesto) {
    notFound()
  }

  return (
    <>
      <div id="presupuesto-content" style={{ paddingTop: '0px' }}>
        <PresupuestoViewer
          content={presupuesto.content}
          metadata={presupuesto.metadata}
        />
      </div>
      <ExportPDFButton
        filename={`presupuesto-${cliente}-${presupuesto.metadata.fecha}`}
        elementId="presupuesto-content"
      />
    </>
  )
}
