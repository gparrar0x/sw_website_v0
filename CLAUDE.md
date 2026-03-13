# sw_website — Skywalking.dev

## Design Rule
- Cualquier cambio visual/UI → Aurora diseña primero (layout, colores, spacing, tipografía)
- Pixel implementa después según spec de Aurora
- No se commitea UI sin review de Aurora

## Stack
- Next.js 16 (App Router, Turbopack)
- Tailwind CSS v4.1 + CSS variables (design tokens en `globals.css`)
- shadcn/ui + Radix UI
- Vercel deploy

## Design Tokens
- `--sky-black: #0C1A27` / `--sky-blue: #5F7382` / `--sky-white: #EFEEE9`
- `--sky-gold: #D4AF37` (CTAs) / `--sky-orange: #E8833A` (hover)
- Fonts: Inter (body), Source Serif 4 (alt)
- Cards: bg `#EFEEE9`, hover `#E8E2CF`
- Background: gradient `#0A0E27` → `#1a1f3a`

## Convenciones
- Componentes en `/components/`, páginas en `/app/`
- Imágenes de proyecto en `/public/projects/` (webp)
- Assets fuente en `/assets/`
- Contenido hardcoded en componentes (no CMS)
