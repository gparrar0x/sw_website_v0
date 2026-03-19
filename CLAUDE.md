# sw_website — Skywalking.dev

## Design Rule
- **Brand source of truth: `../../docs/PRODUCT_IDENTITY.md`** — logo, palette, typography, spacing, animation, assets
- **Visual audit: `docs/VISUAL_IDENTITY.md`** — current implementation assessment + gaps
- Cualquier cambio visual/UI → Aurora diseña primero (layout, colores, spacing, tipografía)
- Pixel implementa después según spec de Aurora
- No se commitea UI sin review de Aurora

## Stack
- Next.js 16 (App Router, Turbopack)
- Tailwind CSS v4.1 + CSS variables (design tokens en `globals.css`)
- shadcn/ui + Radix UI
- Vercel deploy

## Design Tokens
Design tokens are defined in `globals.css` and documented in `../../docs/PRODUCT_IDENTITY.md`.
Do NOT hardcode colors — always use CSS variables (`var(--sky-gold)`, etc.).

## Convenciones
- Componentes en `/components/`, páginas en `/app/`
- Imágenes de proyecto en `/public/projects/` (webp)
- Assets fuente en `/assets/` (source files, not served)
- Logo + brand assets en `/public/` (served)
- Contenido hardcoded en componentes (no CMS)
