import { notFound } from 'next/navigation'
import { getPresupuestoBySlug, getAllPresupuestosSlugs } from '@/lib/presupuestos'
import PresupuestoViewer from '@/components/presupuesto/presupuesto-viewer'
import ExportPDFButton from '@/components/presupuesto/export-pdf-button'
import { Metadata } from 'next'

interface PageProps {
  params: Promise<{ cliente: string }>
}

// Generar metadata dinámico para SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { cliente } = await params
  const presupuesto = getPresupuestoBySlug(cliente)

  if (!presupuesto) {
    return {
      title: 'Presupuesto no encontrado'
    }
  }

  return {
    title: `${presupuesto.metadata.titulo} - Skywalking.dev`,
    description: `Presupuesto para ${presupuesto.metadata.cliente}`,
    robots: 'noindex, nofollow' // Los presupuestos no deben indexarse en Google
  }
}

// Generar rutas estáticas en build time
export async function generateStaticParams() {
  const slugs = getAllPresupuestosSlugs()
  return slugs.map((slug) => ({
    cliente: slug
  }))
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
