# Visual Identity Assessment - Skywalking.dev

**Status:** Comprehensive audit completed | Date: 2026-03-13

---

## Executive Summary

Skywalking.dev's visual identity is **solid, coherent, and professionally executed**. The website successfully communicates a tech-forward automation agency with warm, premium aesthetics. Strengths: consistent design system, excellent token organization, strong visual hierarchy, deliberate color psychology. Gaps: typography feels generic, motion is underutilized, imagery lacks personality, landing page lacks narrative progression.

---

## 1. Color System

### Palette Assessment

**Base Foundation (Dark Mode Primary)**
- `--sky-black: #0C1A27` (Logo specification, unused on site)
- Hero gradient: `#0A0E27` → `#1a1f3a` (deep navy-blue, professional, slightly cold)
- Practical black fallback: `#000000`

**Assessment:** Palette is technically sound. Navy gradient establishes premium feel. However, it skews cool/corporate. Lacks warmth that differentiates from every other SaaS site.

**Action Colors (Well Used)**
- `--sky-gold: #D4AF37` — Primary CTA accent. Luxe, stands out cleanly on dark backgrounds. High contrast (6.1:1 vs black). **Good.**
- `--sky-orange: #E8833A` — Secondary hover state. Creates energy. Complements gold. **Good.**
- `--sky-green: #25D366` — WhatsApp button. Brand-correct, immediately recognizable. **Good.**

**Surfaces (Light Mode Cards)**
- `--sky-white: #EFEEE9` — Beige, warm. Avoids harsh white. Feels handcrafted. **Good.**
- `--sky-beige-warm: #E8E2CF` — Hover state for cards. Subtle shift. **Good.**

**Secondary Palette (Underutilized)**
- `--sky-blue: #5F7382` — Intended as "professional brand color" but rarely features. Used mainly as border/secondary button color.
- `--sky-light: #B4C3CD` — Subtle, but low contrast on beige (problem noted in manual-de-marca).
- `--sky-warm: #918778` — Earthy tone. Appears in prose/FAQ styling but not leveraged in primary UI.

**WCAG AA Compliance:** ✓ Verified in manual-de-marca. Key combos pass (11.2:1 black/beige, 18.5:1 beige/black). ⚠️ Flagged low-contrast pairs avoided correctly.

### Color Usage Audit

| Element | Color | Usage | Frequency |
|---------|-------|-------|-----------|
| Hero background | Gradient navy | Full bleed | High |
| Cards (Services, Why Us) | #EFEEE9 (beige) | Primary container | High |
| Card hover | #E8E2CF (warm beige) | Subtle shift | High |
| CTA buttons | #D4AF37 (gold) | Border style "Contactanos" | High |
| CTA hover | #E8833A (orange) | Fill on hover | High |
| Links/accents | Gold + orange | Text, icons | Medium |
| Footer/secondary | White/gray text | Low visual weight | Medium |
| Icons (black bg) | #EFEEE9 (beige) | Container icons | Medium |
| WhatsApp button | #25D366 | Floating action | Low |
| Text hierarchy | White/opacity cascade | On dark | High |

**Issue:** The site is heavily **beige-card-on-dark-bg biased**. Nearly every section repeats this pattern:
1. Dark navy background
2. Beige cards with black text
3. Gold accent button

Result: Consistent ✓ but visually repetitive ✗.

---

## 2. Typography

### Font Selection

**Current Stack:**
- Primary: `Inter` (Google Fonts) — Fallback to system-ui
- Imported but unused: `Geist`, `Geist Mono`, `Source Serif 4`

**Assessment:** Inter is generic. It's the default choice for every Bootstrap-style site. No visual distinction.

### Typographic Hierarchy

**Implemented:**
- H1: `5xl-7xl` (80-112px) — Bold, large. Hero title.
- H2: `4xl-5xl` (36-48px) — Bold. Section headers.
- H3: `2xl` (24px) — Bold. Card titles.
- Body: `base-xl` (16-20px) — Regular. Copy.
- Small: `xs-sm` (12-14px) — Muted text, labels.

**Issue:** No distinction between headings. All use same weight (bold) and font (Inter). Lacks personality. Markdown styles (in FAQ/presupuesto) use different scale (hardcoded px values), creating inconsistency.

### Line Height & Spacing

- Body: `line-height: 1.5-1.7` ✓
- Headings: `leading-tight` / `text-balance` ✓
- Letter spacing: Minimal (one `tracking-[0.3em]` on labels)

**Assessment:** Legible. Text-balance is modern. But lacks sophisticated typography variations (e.g., `text-3xl font-light` for subtitles).

---

## 3. Spacing & Layout System

### Grid System

**Declared:** 8px grid (implied by Tailwind v4)
**Reality:** Generous padding/margin using Tailwind classes (`px-4`, `py-32`, `gap-6`, `gap-8`)

**Breakdown:**
- Page-level: `px-4 md:px-6` (mobile responsive, good)
- Section vertical: `py-32` (128px between sections — generous, creates breathing room)
- Component gaps: `gap-6 / gap-8` (24-32px between cards)
- Internal padding: `p-8 / p-12` (32-48px inside cards — premium feeling)

**Assessment:** Spacing is **consistent and generous**. No crowding. Hierarchy clear. ✓

### Responsive Breakpoints

- Mobile first approach ✓
- `md:` breakpoint for tablet changes
- `lg:` rare, mostly `md:`
- Contact form uses `md:grid-cols-2` (good)
- Projects section: `md:grid-cols-2` for grid

**Assessment:** Pragmatic. Not exhaustive (no `sm:`, `xl:` overrides) but sufficient for 2024 traffic patterns.

---

## 4. Component Library (shadcn/ui)

### Used Components
- `Button` — Custom styling via `${classes}` pattern
- `Input` — Text fields in contact form
- `Card` — Service/why-us card containers

### Button Variants

**Primary CTA (Hero, Contact Form):**
```css
bg-[var(--sky-gold)] text-black hover:bg-[var(--sky-orange)]
border-2 border-[#D4AF37] text-black hover:bg-[#D4AF37] /* Form version */
```
Golden border, text on hover. Consistent. **Good.**

**Secondary/Ghost:**
Rare. Some gray hovers, some blue hovers. Inconsistent application.

### Card Styling

All cards: `bg-[#EFEEE9] border-none p-8 hover:bg-[#E8E2CF]`

Consistent application across:
- Services
- Why Us
- Target Audiences
- Contact form container

Hover effect: scale (transform) + color shift. Small but present. **Good.**

### Form Elements

**Contact form inputs:**
- `bg-white border border-gray-300` (different from design tokens)
- Placeholder: `text-gray-500`
- Styling is **disconnected from token system**. Using Tailwind defaults, not CSS variables.

**Issue:** Form doesn't follow design system (should use sky-white, sky-blue tokens).

---

## 5. Motion & Animation

### Animations Implemented

1. **Gradient orbs** (hero, contact, why-us sections)
   - `float` keyframe: 20s infinite, movement + scale
   - `blur(80px)` for softness
   - 3 orbs with staggered delays

2. **Typing cursor** (hero)
   - Pulsing dot animation
   - `pulse-cursor` keyframe: opacity + scale
   - Glow effect with box-shadow

3. **Card hovers**
   - Color transition (300ms)
   - Scale transform (105% on hover)
   - Shadow added on hover

4. **Button hovers**
   - Gold button: scale (105%) + shadow glow
   - Arrow icon: translate-x on group hover

5. **FAQ animations**
   - `fade-in` on scroll (not implemented client-side, just CSS)
   - Accordion open/close (via component state)

### Assessment

**Strengths:**
- Subtle, purposeful animations (not spammy)
- Staggered delays create sophistication
- Hover feedback clear

**Gaps:**
- Motion is **isolated to hover states**. No entrance animations on scroll.
- No page transition animations (Next.js could do this)
- FAQ items don't stagger on load (would feel luxe)
- Hero text doesn't have reveal animation (just typing cursor)

**Performance:** Light. CSS-only or inline keyframes. No JavaScript-heavy effects. ✓

---

## 6. Visual Hierarchy & Contrast

### Page Structure (Home)

1. **Hero section** — Full bleed navy, centered text, large heading, CTAs prominent
2. **Services section** — Beige cards, 3-column grid, icons, features lists
3. **Why Us section** — 3 large beige cards, horizontal layout, icons, descriptions
4. **Projects Preview** — 2x2 grid, image backgrounds, overlays, subtle text
5. **Contact form** — Large beige container, form fields, CTA
6. **Footer** — Dark, minimal, contact icons

**Assessment:** Clear hierarchy. Each section feels distinct (background color change helps). CTA prominence is good — gold button stands out on every background. **Good.**

### Typography Contrast

- White text on dark navy: 18.5:1 ✓ Excellent
- Black text on beige: 11.2:1 ✓ Excellent
- Gold on dark: 6.1:1 ✓ Passes AA
- Gray text (prose): Intentionally lower for secondary info

**Edge cases:**
- Footer links (white/40% → white/70% on hover): Subtle but readable ✓

---

## 7. Imagery & Iconography

### Hero Background

**Current:** `hero-background-building.png` (2.2MB PNG)
- Fullscreen image with dark overlay (40% black)
- Shows building/architecture metaphorically
- On mobile: Fallback to gradient (good performance choice)

**Assessment:** Image is large, reduces mobile performance. Metaphor is unclear (buildings ≠ automation). But composition works — doesn't dominate text.

### Project Images

Located: `/public/projects/`
- `micelio.webp` — SaaS interface mockup
- `fuego.webp` — Fire/forest visualization
- `austral.webp` — Construction interface
- `kronos.webp` — Calendar/time interface

**Assessment:** Real project screenshots > generic stock photos. Good. But small, lack context. Captions are minimal ("La plataforma", "El bosque habla").

### Icons

**Library:** Lucide Icons (outline style)
- Used in services, why-us, FAQ, footer
- Consistent size (~24px), stroke-width (2px)
- Black background, beige icons in cards

**Assessment:** Professional library choice. Consistent across site. No custom SVG icons (relies on lucide). Fine for utility, but lacks brand-specific iconography.

---

## 8. Visual Consistency Issues

### Inconsistencies Found

1. **Form styling** — Uses Tailwind defaults (`gray-300`, `gray-500`), not design tokens
2. **Markdown styles** (FAQ, presupuestos) — Hardcoded colors/sizes, disconnected from main system
3. **Text colors** — Hero: white. Cards: black. But some secondary text uses `gray-400`, `white/40%`, not unified scale
4. **Link colors** — FAQ markdown uses blue (#2563eb), footer uses white/gray. No unified link color in tokens.
5. **Button border radius** — Hero CTA: `rounded-xl` (12px). Form CTA: `no explicit radius` (defaults to 6px?). Inconsistent.
6. **Icon sizing** — Service icons: `h-7 w-7`. FAQ icons: `w-6 h-6`. Footer icons: `h-5 w-5`. No unified size.

### Repeat Patterns (Good)
- All cards: same styling, padding, hover effect
- All CTAs: gold/orange scheme
- All sections: dark bg, beige elements
- All headings: bold, white, text-balance

---

## 9. Brand Tone & Visual Language

### Current Aesthetic

**Primary:** Professional minimalism
- Clean layouts, generous spacing
- Dark navy creates tech/premium feel
- Beige cards feel warm, handcrafted (not cold corporate)
- Gold accents = premium positioning

**Secondary:** Forward-thinking
- Floating gradient orbs (modern, scientific)
- Smooth animations (not rigid)
- Rounded corners (friendly, not harsh)

**Tertiary:** Trustworthy
- Clear copy, no fluff
- Logos/projects shown (not theoretical)
- Contact CTA prominent (accessibility, transparency)

### Mood Alignment

Site targets "LATAM companies, 10-500 employees, growth-focused"

Current visual says: "We are professional, trustworthy, forward-thinking, but approachable"

**Assessment:** Tone matches audience well. Not overly playful, not sterile. ✓

---

## 10. Design System Maturity

### Tokens: Excellent
- `globals.css` defines 11 color variables + semantic tokens
- Spacing/sizing via Tailwind (no custom scale defined)
- Radius: `--radius: 0.75rem` (12px baseline)

### Documentation: Mature
- `/manual-de-marca/page.tsx` = comprehensive brand guide
- Color palette swatches, WCAG checks, component rules
- Usage examples (CTA hierarchy, contrast notes)

### Implementation: Partial
- Components mostly follow tokens (except forms)
- Some hardcoded values in markdown CSS
- Overall adherence ~85%

---

## 11. Responsive Design

### Mobile (< 640px)

- **Hero:** Text sizes reduce (`text-5xl` → `text-3xl`), works
- **Services grid:** 1 column ✓
- **Contact form:** Full width, 1 column ✓
- **Projects:** Full viewport height sections, readable

**Touch targets:** Buttons ~48px height ✓, spacing generous ✓

**Issue:** Hero background image removed on mobile (gradient fallback) — good for performance, but reduces visual richness.

### Tablet (640px - 1024px)

- **Services:** 3-column grid maintained ✓
- **Projects:** 2x2 grid ✓
- **Cards:** Padding maintained ✓

### Desktop (>1024px)

All layouts expand as intended. Max-width containers (`max-w-7xl`, `max-w-5xl`) prevent excessive line lengths.

**Assessment:** Responsive is solid. Mobile-first approach evident. ✓

---

## 12. Performance & Technical

### CSS Metrics

- **globals.css:** 507 lines (tokens + animations + markdown styles)
- **Animations:** CSS-only (no JS overhead) ✓
- **Hero gradient:** Hardcoded in JSX (`from-[#0A0E27] to-[#1a1f3a]`) instead of token
- **Images:** Mostly webp ✓, hero PNG is large (2.2MB, could optimize)

### Accessibility (Basic)

- Semantic HTML (sections, headers, etc.) ✓
- Alt text on images ✓
- WCAG AA contrast verified ✓
- Focus states? (Not visible in code audit) — **Gap**
- ARIA labels? (Minimal, mostly on icons) — **Gap**

---

## Summary: Strengths & Gaps

### Strengths
1. **Coherent color system** — Dark/beige/gold creates recognizable brand
2. **Generous spacing** — Premium feel, not cramped
3. **Consistent components** — Cards, buttons, hierarchy all unified
4. **Performance-conscious** — CSS animations, webp images
5. **Responsive** — Mobile-first, works across devices
6. **Accessible** — WCAG AA color contrasts verified

### Gaps
1. **Generic typography** — Inter feels like every other SaaS
2. **Underutilized motion** — Only hover states, no entrance animations
3. **Inconsistent form styling** — Disconnected from token system
4. **Repetitive layouts** — Beige-cards-on-dark pattern repeats too much
5. **Weak image strategy** — Hero image unclear metaphor, project images small
6. **No visual personality** — Professional but forgettable (looks like 50 other sites)
7. **Limited icon customization** — All lucide defaults, no brand-specific glyphs

---

## Next: Design Opportunities

See `MEJORAS_PROPUESTAS.md` for specific, actionable recommendations to elevate the visual identity while maintaining current strengths.
