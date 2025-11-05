# Scripts de Utilidad - Skywalking.dev Website

## Scripts Disponibles

### 1. convert-og-image.js

**Propósito:** Convierte el archivo SVG fuente a PNG optimizado para Open Graph.

**Uso:**
```bash
# Desde la raíz del proyecto
npm run og-image

# O directamente
node scripts/convert-og-image.js
```

**Entrada:**
- `/public/og-image.svg` (SVG vectorial editable)

**Salida:**
- `/public/og-image.png` (PNG 1200x630, optimizado)

**Configuración:**
- Resolución: 1200 x 630 px
- Calidad: 100%
- Compresión: Level 9
- Formato: PNG 8-bit

**Dependencias:**
- `sharp` (instalado en package.json)

**Cuando usar:**
- Después de editar `og-image.svg`
- Para actualizar la imagen de social sharing
- Antes de deployar cambios de brand

---

## Agregar Nuevos Scripts

### Estructura recomendada:

```javascript
const fs = require('fs');
const path = require('path');

// Script description
console.log('Starting script...');

try {
  // Main logic

  console.log('✓ Script completed successfully!');
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}
```

### Agregar al package.json:

```json
"scripts": {
  "script-name": "node scripts/script-name.js"
}
```

---

## Mantenimiento

**Owner:** Aurora (Product Designer) + Pixel (Frontend Specialist)

**Última actualización:** 2025-11-05
