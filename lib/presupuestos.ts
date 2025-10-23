import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface PresupuestoMetadata {
  titulo: string
  cliente: string
  fecha: string
  total: string
  contacto: string
}

export interface Presupuesto {
  metadata: PresupuestoMetadata
  content: string
  slug: string
}

const presupuestosDirectory = path.join(process.cwd(), 'public/presupuestos')

/**
 * Obtiene un presupuesto por su slug (nombre de archivo sin extensión)
 */
export function getPresupuestoBySlug(slug: string): Presupuesto | null {
  try {
    const fullPath = path.join(presupuestosDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const { data, content } = matter(fileContents)

    return {
      metadata: data as PresupuestoMetadata,
      content,
      slug
    }
  } catch (error) {
    console.error(`Error al leer presupuesto ${slug}:`, error)
    return null
  }
}

/**
 * Obtiene todos los slugs de presupuestos disponibles
 */
export function getAllPresupuestosSlugs(): string[] {
  try {
    if (!fs.existsSync(presupuestosDirectory)) {
      return []
    }

    const files = fs.readdirSync(presupuestosDirectory)
    return files
      .filter(file => file.endsWith('.md'))
      .map(file => file.replace(/\.md$/, ''))
  } catch (error) {
    console.error('Error al leer directorio de presupuestos:', error)
    return []
  }
}

/**
 * Obtiene todos los presupuestos
 */
export function getAllPresupuestos(): Presupuesto[] {
  const slugs = getAllPresupuestosSlugs()
  return slugs
    .map(slug => getPresupuestoBySlug(slug))
    .filter((p): p is Presupuesto => p !== null)
}
