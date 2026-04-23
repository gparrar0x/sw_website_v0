# sw_website — Skywalking.dev

## Design Rule
- **Brand source of truth:** `@../docs/PRODUCT_IDENTITY.md` — logo, palette, typography, spacing, animation, assets.
- **Visual audit:** `@docs/VISUAL_IDENTITY.md` — current implementation + gaps.
- Any visual/UI change → Aurora designs first (layout, colours, spacing, typography).
- Pixel implements after, according to Aurora's spec.
- No UI commit without Aurora review.

## Stack
- Next.js 16 (App Router, Turbopack)
- Tailwind CSS v4.1 + CSS variables (design tokens in `globals.css`)
- shadcn/ui + Radix UI
- Vercel deploy
- Package manager: pnpm

## Design Tokens
Defined in `app/globals.css`, documented in `@../docs/PRODUCT_IDENTITY.md`.

**Do not hardcode colours** — always use CSS variables (`var(--sky-gold)`, etc.).

## Commands
```bash
pnpm dev              # localhost:3000
pnpm build            # prod build
pnpm start            # prod serve
pnpm lint             # biome/eslint
```

## Structure
```
sw_website/
├── app/              # App Router pages + globals.css
├── components/       # React components
├── public/           # served assets (logo, favicon, /projects/*.webp)
├── assets/           # source files (not served)
└── package.json
```

## Conventions
- Components in `/components/`, pages in `/app/`.
- Project images in `/public/projects/` (webp).
- Source assets in `/assets/` (not served).
- Logo + brand assets in `/public/` (served).
- Content hardcoded in components (no CMS).

## Deploy
Vercel auto-deploy from `main`. Domain: skywalking.dev.
