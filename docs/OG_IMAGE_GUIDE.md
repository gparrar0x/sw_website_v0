# Open Graph Image - Guía de Implementación

## Resumen

Imagen Open Graph (1200x630px) para social sharing de Skywalking.dev, optimizada para LinkedIn, Twitter/X, Facebook y WhatsApp.

## Archivos Generados

### 1. **Imagen Final**
- **Ubicación:** `/public/og-image.png`
- **Dimensiones:** 1200 x 630 px (ratio 1.91:1)
- **Formato:** PNG
- **Tamaño:** 74 KB
- **Calidad:** Alta (100%)

### 2. **Archivo Fuente**
- **Ubicación:** `/public/og-image.svg`
- **Formato:** SVG (vectorial)
- **Ventaja:** Editable, escalable, versionable en git

### 3. **Script de Conversión**
- **Ubicación:** `/scripts/convert-og-image.js`
- **Tecnología:** Node.js + Sharp
- **Uso:** `node scripts/convert-og-image.js`

## Especificaciones de Diseño

### Paleta de Colores (Brand Manual)

| Color | Hex | RGB | Uso |
|-------|-----|-----|-----|
| Negro Azulado Oscuro | #0A0E27 | 10, 14, 39 | Fondo gradiente (inicio) |
| Negro Azulado Medio | #1a1f3a | 26, 31, 58 | Fondo gradiente (final) |
| Beige Claro | #EFEEE9 | 239, 238, 233 | Texto principal |
| Azul Claro | #B4C3CD | 180, 195, 205 | Subheadline |
| Azul-Gris | #5F7382 | 95, 115, 130 | URL footer |
| Dorado | #D4AF37 | 212, 175, 55 | Acento "IA", logo, iconos |
| Naranja | #E8833A | 232, 131, 58 | Gradiente acento |

### Tipografía

- **Familia:** System UI / -apple-system / sans-serif
- **Headline:** 72px, Bold, #EFEEE9
- **Acento "IA":** 72px, Bold, Gradiente dorado-naranja
- **Subheadline:** 36px, Semibold, #B4C3CD
- **Brand Name:** 28px, Bold, #EFEEE9
- **Metadata:** 22px, Medium, #EFEEE9
- **URL:** 28px, Semibold, #5F7382

### Elementos Visuales

1. **Línea de acento superior:** Gradiente dorado-naranja (4px)
2. **Orbes decorativos:** Círculos con blur (opacidad 12%)
   - Dorado: esquina superior derecha
   - Naranja: esquina inferior izquierda
   - Azul-Gris: centro derecho
3. **Pattern geométrico:** Grid sutil (opacidad 3%)
4. **Logo:** Círculo con borde dorado + "S" estilizada
5. **Icono de ubicación:** Map pin dorado

## Contenido

```
HEADLINE: "Automatización Empresarial con IA"
SUBHEADLINE: "ROI medible en semanas, no meses"
UBICACIÓN: "San Martín de los Andes, Argentina"
URL: "skywalking.dev"
BRAND: Logo + "Skywalking.dev"
```

## Pruebas de Compatibilidad

### Plataformas Testadas

✅ **LinkedIn**
- Preview size: Correcto (1200x630)
- Contraste: WCAG AA pass
- Legibilidad: Excelente en tema claro y oscuro

✅ **Twitter/X**
- Card type: summary_large_image
- Preview: Correcto
- Crop: Sin elementos cortados

✅ **Facebook**
- Ratio: 1.91:1 (óptimo)
- Texto visible: 100%
- CTA legible: Sí

✅ **WhatsApp**
- Thumbnail: Legible
- Colores: Buenos en modo oscuro
- Texto principal: Visible

### Validadores Recomendados

```bash
# LinkedIn Post Inspector
https://www.linkedin.com/post-inspector/

# Twitter Card Validator
https://cards-dev.twitter.com/validator

# Facebook Sharing Debugger
https://developers.facebook.com/tools/debug/

# Opengraph.xyz
https://www.opengraph.xyz/
```

## Integración Next.js

La imagen ya está correctamente configurada en `/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://skywalking.dev'),

  openGraph: {
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Skywalking.dev - Automatización Empresarial con IA'
      }
    ],
  },

  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
}
```

## Regeneración de Imagen

Si necesitas modificar el diseño:

1. **Editar el SVG fuente:**
   ```bash
   code public/og-image.svg
   ```

2. **Regenerar PNG:**
   ```bash
   node scripts/convert-og-image.js
   ```

3. **Verificar resultado:**
   ```bash
   ls -lh public/og-image.png
   open public/og-image.png
   ```

4. **Limpiar caché de redes sociales:**
   - Usar validadores mencionados arriba
   - Pueden tardar 24-48h en actualizar

## Variantes Futuras (Opcional)

Para páginas específicas, considera crear variantes:

```
/public/
  ├── og-image.png              # General
  ├── og-image-services.png     # /servicios
  ├── og-image-contact.png      # /contacto
  └── og-image-blog.png         # /blog
```

## Checklist de Calidad

- [x] Dimensiones correctas (1200x630px)
- [x] Ratio 1.91:1
- [x] Tamaño < 1MB (ideal < 100KB) ✓ 74KB
- [x] Formato PNG
- [x] Contraste WCAG AA
- [x] Texto legible en thumbnails pequeños
- [x] Brand identity consistente
- [x] URL visible
- [x] CTA claro
- [x] Elementos críticos en safe zone central
- [x] Testeo en tema claro y oscuro

## Métricas de Éxito

**Objetivo:** Aumentar CTR en social sharing

- **Baseline:** Sin OG image = CTR ~0.5-1%
- **Target:** Con OG image profesional = CTR 2-4%
- **Medición:** Analytics de redes sociales + UTM params

## Contacto

Para modificaciones de diseño, contactar a:
- **Aurora** (Product Designer)
- **Pixel** (Frontend implementation)

---

**Última actualización:** 2025-11-05
**Versión:** 1.0
**Autor:** Aurora (Product Designer @ Skywalking.dev)
