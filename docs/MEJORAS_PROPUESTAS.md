# Mejoras Propuestas - Visual Identity

**Objetivo:** Elevar Skywalking.dev de "profesional genérico" a "memorable + diferenciado"

**Filosofía:** Guardar fortalezas (color system, spacing, responsive), eliminar repetición, inyectar personalidad sin sacrificar profesionalismo.

---

## PRIORIZACIÓN

| Categoría | Esfuerzo | Impacto | ROI | Status |
|-----------|----------|--------|-----|--------|
| Tipografía | Bajo (swap fonts) | Alto (whole site transforms) | 10x | Quick Win |
| Hero narrative | Medio (new animations) | Alto (first impression) | 8x | Quick Win |
| Form consistency | Bajo (apply tokens) | Medio (UX clarity) | 5x | Quick Win |
| Motion (scroll) | Medio (JS) | Medio (luxury feel) | 6x | Medium |
| Image strategy | Alto (redesign) | Alto (visual impact) | 9x | Large |
| Layout variation | Medio (redesign) | Medio (reduce repetition) | 5x | Medium |
| Icon system | Medio (custom SVG) | Bajo (nice-to-have) | 3x | Nice |

---

## 1. TIPOGRAFÍA: Reemplazar Inter por Stack Distintivo

### Problema Actual
- Inter es predeterminado (Stripe, Vercel, Linear, Aerolab usan Inter)
- Sin diferenciación tipográfica entre headings
- Todos bold, todos sans-serif, todos Inter

### Propuesta: Tiered Typography

**Headings:** `Suisse BP` o `Grotesk` o `NeueMontreal`
- Sin serifs, pero con carácter fuerte
- Weights: 700, 600, 500 (variación visible)
- Alternativa gratuita: `Plus Jakarta Sans` (Google Fonts)

**Body:** Mantener algo legible, pero cambiar a `Geist` (ya importado en layout.tsx)
- Más moderno que Inter, usado por Vercel (alineación con stack)
- Weights: 400, 500, 600

**Implementación:**

```typescript
// app/layout.tsx
import { Plus_Jakarta_Sans, Geist } from 'next/font/google'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weights: ['500', '600', '700'],
  variable: '--font-heading',
})

const geist = Geist({
  subsets: ['latin'],
  weights: ['400', '500', '600'],
  variable: '--font-body',
})

// app/globals.css
@theme inline {
  --font-heading: "Plus Jakarta Sans", sans-serif;
  --font-body: "Geist", system-ui;
}

// Aplicar en tailwind
body { @apply font-body; }
h1, h2, h3, h4 { @apply font-heading font-bold; }
```

**Resultado Visual:**
- H1: Bold, 7xl, Plus Jakarta → impacto inmediato
- H2: Semibold, 5xl, Plus Jakarta → diferenciación clara
- Body: Regular, Geist → legible, moderno
- Small: Geist 500 → etiquetas con peso

**ROI:** Cambio de ~15 líneas, impacto en 100% del site. *Recomendado prioritario.*

**Alternativa "cautela":** Mantener Geist (ya importado), aumentar variación de pesos:
```css
h1 { @apply font-bold text-7xl tracking-tight; }
h2 { @apply font-semibold text-5xl tracking-tight; }
h3 { @apply font-semibold text-2xl; }
```

---

## 2. HERO: Agregar Narrativa Visual & Motion

### Problema Actual
- Texto estático
- Typing cursor es la única animación
- Falta contexto visual (orbes del background no se ven claros)

### Propuesta A: Reveal Animation (Bajo esfuerzo)

Agregar staggered fade-in a elementos del hero:

```typescript
// components/hero.tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="inline-block px-4 py-2..."
>
  <span className="text-[#EFEEE9]">Skywalking.dev</span>
</motion.div>

<motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.4 }}
  className="text-5xl md:text-7xl..."
>
  Ayudamos a empresas...
</motion.h1>

<motion.button
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.8 }}
>
  Contactanos
</motion.button>
```

**Instalar:**
```bash
npm install framer-motion
```

**Resultado:** Entrada elegante, secuencia temporal crea expectativa. 30s desarrollo.

### Propuesta B: Hero Gradient orbs → Más Visibles (Bajo esfuerzo)

Aumentar opacidad de orbes background:

```css
/* globals.css */
.orb-1 {
  background: radial-gradient(circle at center, #E8E2CF 0%, rgba(232, 226, 207, 0.8) 30%, rgba(232, 226, 207, 0.3) 60%, transparent 100%); /* +0.2 opacidad */
}
```

Cambiar blur para mayor definición:

```css
.gradient-orb {
  filter: blur(60px); /* down from 80px */
}
```

**Resultado:** Orbes más evidentes, menos fantasmales. Mantiene elegancia, gana claridad.

### Propuesta C: Hero Text Gradient (Muy Bajo)

Colorear parte del heading con dorado:

```jsx
<h1 className="text-5xl md:text-7xl font-bold text-white leading-tight text-balance">
  Ayudamos a empresas a escalar usando
  <span className="bg-gradient-to-r from-[var(--sky-gold)] to-[var(--sky-orange)] bg-clip-text text-transparent">
    {' '}Inteligencia Artificial
  </span>
  <span className="typing-cursor"></span>
</h1>
```

**Resultado:** Énfasis en "IA", toque premium. 2 líneas.

---

## 3. FORM: Aplicar Design Tokens

### Problema Actual
```jsx
// contact-form.tsx usa valores hardcoded
className="bg-white border-gray-300 text-black placeholder:text-gray-500"
```

No usa: `--sky-white`, `--sky-blue`, etc.

### Solución: Token-driven inputs

```jsx
<Input
  id="nombre"
  name="nombre"
  className="bg-[var(--sky-white)] border-2 border-[var(--sky-light)] text-black placeholder:text-[var(--sky-warm)] focus:border-[var(--sky-blue)] focus:ring-2 focus:ring-[var(--sky-gold)]/30"
/>
```

O crear componente custom:

```typescript
// components/ui/form-input.tsx
export function FormInput(props) {
  return (
    <Input
      {...props}
      className={`
        bg-[var(--sky-white)]
        border-2 border-[var(--sky-light)]
        text-black
        placeholder:text-[var(--sky-warm)]/50
        focus:border-[var(--sky-blue)]
        focus:ring-2 focus:ring-[var(--sky-gold)]/30
        transition-colors duration-200
        ${props.className || ''}
      `}
    />
  )
}
```

Usar en contact-form:

```jsx
<FormInput
  id="nombre"
  name="nombre"
  placeholder="Juan Pérez"
  required
/>
```

**Resultado:** Form coherente con design system. Textarea también aplicable. 20 líneas, gran impacto UX.

---

## 4. HERO BACKGROUND: Mejorar Metáfora Visual

### Problema Actual
- Imagen de edificio poco clara (metaphor no obvio)
- 2.2MB PNG en desktop (performance)
- En mobile se reemplaza por gradiente (consistencia)

### Propuesta A: Gradiente + Orbes sin foto (Muy Bajo)

Eliminar imagen, usar solo CSS gradients:

```css
/* globals.css */
.hero-background {
  background: linear-gradient(135deg, #0A0E27 0%, #1a1f3a 50%, #0C1A27 100%);
  position: relative;
}

/* Orbes más visibles con filter-blur menor */
.gradient-orb {
  filter: blur(50px);
  opacity: 0.6; /* up from varying 1, 0.8, 0.9 */
}
```

**Ventaja:**
- Rápido (<1KB vs 2.2MB)
- Consistente mobile/desktop
- Orbes se ven mejor
- Minimalista, moderno

**Resultado:** Hero más limpio, performance +200ms.

### Propuesta B: Patrón geométrico sutil (Bajo)

Agregar SVG pattern repeat:

```jsx
// hero.tsx
<svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none">
  <defs>
    <pattern id="tech-grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <circle cx="20" cy="20" r="1" fill="#D4AF37" />
      <line x1="0" y1="20" x2="40" y2="20" stroke="#5F7382" strokeWidth="0.5" />
      <line x1="20" y1="0" x2="20" y2="40" stroke="#5F7382" strokeWidth="0.5" />
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#tech-grid)" />
</svg>
```

**Resultado:** Fondo técnico subtil, no distrae, añade sofisticación.

### Propuesta C: Lottie animation (Medio)

Animar fondo con loop Lottie:
- Líneas que fluyen, puntos que se mueven
- Denota "automatización, flujo"
- 50KB max con compresión

Uso:
```bash
npm install lottie-react
```

```jsx
<DynamicLottie animationData={automationLoop} loop autoplay />
```

**Ventaja:** Distintivo, premium, alineado con brand (automatización)

**Desventaja:** Requiere diseño + asset (3-4hs de trabajo)

**Recomendación:** Propuesta A primero, B como enhancement, C si hay presupuesto.

---

## 5. MOTION: Agregar Scroll Animations

### Problema Actual
- Animaciones solo en hover
- Entrada de secciones = fade simple
- Falta "wow" moment en scroll

### Propuesta: Staggered Card Entrance

Usar `framer-motion` + Intersection Observer:

```typescript
// components/services.tsx
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

<motion.div
  className="grid grid-cols-1 md:grid-cols-3 gap-8"
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
  {solutions.map((solution, index) => (
    <motion.div key={index} variants={itemVariants}>
      <Card>...</Card>
    </motion.div>
  ))}
</motion.div>
```

**Efecto:** Cards entran secuencialmente al scrollear. Premium, no spammy.

**Aplicar a:** Services, Why Us, Projects, Contact form.

**Esfuerzo:** 3-4 horas (copy-paste component pattern)

**ROI:** Significant feel upgrade. Usuarios notan diferencia.

---

## 6. LAYOUT: Romper Patrón Repetitivo

### Problema Actual

Estructura de cada sección:
1. Title + subtitle (centered)
2. Grid of beige cards
3. Repeat

Todas iguales. Visualmente predecible.

### Propuesta A: Alternar layouts (Medio)

**Sección Services (Actual - OK):**
```
┌─────────────────────┐
│  [Card] [Card] [Card]│
└─────────────────────┘
```

**Sección Why Us (Cambiar a):**
```
Vertical list (no grid):
┌───────────────────────┐
│ Icon  Title           │
│       Description     │
│ ──────────────────    │
│ Icon  Title           │
│       Description     │
└───────────────────────┘
```

```jsx
// why-us.tsx
<div className="space-y-6">
  {reasons.map((reason) => (
    <div className="flex gap-6 items-start bg-[#EFEEE9] p-8 rounded-2xl hover:bg-[#E8E2CF]">
      <div className="w-16 h-16 bg-black rounded-xl flex-shrink-0">
        <reason.icon className="h-8 w-8 text-[#EFEEE9]" />
      </div>
      <div>
        <h3>{reason.title}</h3>
        <p>{reason.description}</p>
      </div>
    </div>
  ))}
</div>
```

**Sección Projects (Cambiar a):**

Actual: 2x2 grid de full-screen backgrounds.

Propuesta: Alternating left/right card + image layout:

```
─── PROYECTO 1 ───
[Image] [Text + CTA]

[Text + CTA] [Image]
─── PROYECTO 2 ───
```

```jsx
{projects.map((project, idx) => (
  <div className={`flex gap-12 items-center py-20 ${idx % 2 === 1 ? 'flex-row-reverse' : ''}`}>
    <div className="flex-1">
      <h2 className="text-5xl font-bold">{project.name}</h2>
      <p className="text-2xl text-white/70 italic">{project.tagline}</p>
      <p className="text-lg text-white/60">{project.description}</p>
      <Button className="mt-6">Ver más</Button>
    </div>
    <div className="flex-1 h-96 bg-cover rounded-2xl" style={{backgroundImage: `url(${project.image})`}} />
  </div>
))}
```

**Resultado:** Variedad visual, menos "card fatigue". Imágenes más prominentes.

**Esfuerzo:** 2-3 horas refactor

### Propuesta B: Agregar "feature" sección diferente (Medio)

Entre Services y Why Us, insertar sección con layout único:

```
┌──────────┐  ┌──────────┐  ┌──────────┐
│Feature 1 │  │Feature 2 │  │Feature 3 │
│ (icons)  │  │ (icons)  │  │ (icons)  │
└──────────┘  └──────────┘  └──────────┘
   ↓ Link        ↓ Link        ↓ Link
  "ROI en      "Speed"      "No Lock-in"
   semanas"
```

Tres columnas, icons grandes, short copy, clickable.

**Objetivo:** Highlight diferenciadores clave sin repetir card pattern.

---

## 7. IMAGEN: Estrategia Moderna

### Problema Actual
- Hero image: vago, pesado
- Project images: pequeñas, sin contexto
- Sin visual narrative clara

### Propuesta A: Hero como contexto (Bajo)

En lugar de foto building, usar:
- **Opción 1:** Animación Lottie de flujos (automation theme) ✓
- **Opción 2:** Diagrama estático de arquitectura simplificada ✓
- **Opción 3:** Grid animado de "procesos" ✓

Todas menos de 100KB.

### Propuesta B: Project cards → Rich preview (Medio)

En `/proyectos`, convertir texto a:

```
┌──────────────────┐
│    [Image]       │
│  [Title]         │
│  [Tagline]       │
│  [2-3 Features]  │
│  [CTA Button]    │
└──────────────────┘
```

Agregar colores de accent por proyecto:

```typescript
const projects = [
  {
    name: "Miicel",
    color: "#D4AF37", // gold
    image: "...",
    features: ["Gestión empresarial", "IA integrada", "Dashboard intuitivo"],
  },
  ...
]
```

Render:

```jsx
<div className="border-l-4 border-[#D4AF37] bg-[#EFEEE9] p-8">
  <h3 className="text-2xl font-bold text-[#D4AF37]">{project.name}</h3>
  <ul className="mt-4 space-y-2">
    {project.features.map(f => <li>• {f}</li>)}
  </ul>
</div>
```

**Resultado:** Projects page feels less empty, more navigable.

---

## 8. ICONOGRAFÍA: Sistema Personalizado (Nice-to-have)

### Propuesta: 3-4 Custom SVG Icons

Crear branded icons para:
1. "Automation" (spinning gears/nodes)
2. "Speed" (lightning bolt, stylized)
3. "ROI" (arrow up + chart)
4. "Support" (person + headset)

Use en Services section headers, footer badges.

**Diseño:** Líneas limpias, stroke-based (consistente con Lucide), dorado/naranja accents.

**Esfuerzo:** 4-6 horas (design + SVG export)

**ROI:** Bajo (nice aesthetic, pero no critical)

---

## 9. COLOR: Opcionales Refinamientos

### Propuesta A: Accent secundario más cálido (Muy Bajo)

Agregar variable:

```css
:root {
  --sky-accent-secondary: #E85D04; /* naranja más vibrante */
}
```

Usar en: Links, algunos hovers, badges.

Actual naranja (#E8833A) es suave. Nueva (#E85D04) es más punchy.

**Test:** Aplica a 1-2 CTAs, mide engagement.

### Propuesta B: Fondos por sección (Bajo)

En lugar de todo negro, variar sutilmente:

```css
.section-services { background: #0A0E27; } /* azulado */
.section-why-us { background: #0C1A27; } /* ligeramente rojo */
.section-projects { background: #000000; } /* negro puro */
```

Cambio casi invisible, pero añade profundidad.

---

## 10. ACCESIBILIDAD: Enhancement

### Propuesta A: Focus states visibles

```css
button:focus-visible {
  outline: 2px solid var(--sky-gold);
  outline-offset: 2px;
}

a:focus-visible {
  outline: 2px solid var(--sky-blue);
  outline-offset: 2px;
}
```

**Impacto:** Keyboard navigation mejora dramáticamente.

### Propuesta B: Darkmode toggle simulado (FAQ page)

FAQ page usa `bg-black`. Agregar toggle theme:

```jsx
<button onClick={() => toggleTheme('light')}>
  ☀️ Light Mode
</button>
```

Apply light mode:
- Background: #FFFFFF
- Text: #000000
- Cards: #F5F5F5

**Beneficio:** Usuarios con sensibilidad a luz pueden leer FAQ confortable.

---

## ROADMAP DE IMPLEMENTACIÓN

| Fase | Tasks | Esfuerzo | Timeline |
|------|-------|----------|----------|
| **1. Quick Wins** | Tipografía + Form tokens + Hero reveal | 6h | 1-2 días |
| **2. Motion** | Scroll animations (framer-motion) | 4h | 1 día |
| **3. Layout** | Alternating services/projects layout | 3h | 1 día |
| **4. Images** | Hero background improve + projects rich cards | 4h | 1 día |
| **5. Polish** | Icons custom (opcional), focus states, dark mode toggle | 6h | 2 días |

**Total:** ~23 horas. **Con Pixel:** 2-3 sprints de 1 semana cada.

---

## TESTING / VALIDATION

Después de implementar cada fase:

1. **A/B test** hero (reveal animation vs static) → mide time-on-page, scroll depth
2. **User testing** form (before/after tokens) → task completion, friction points
3. **Heatmap** projects page (new layout) → click patterns, scroll behavior
4. **Lighthouse** performance → asegurar no degrada (target: >90 desktop, >75 mobile)

---

## IMPLEMENTATION NOTES FOR PIXEL

### File Changes Required

1. `app/layout.tsx` — Add Plus Jakarta Sans import, set variable
2. `app/globals.css` — Update @theme, hero background gradient
3. `components/hero.tsx` — Add framer-motion, stagger animations
4. `components/contact-form.tsx` — Replace hardcoded colors with token variables
5. `components/services.tsx` — Add staggered enter animations
6. `components/why-us.tsx` — Change grid to vertical list layout
7. `components/projects.tsx` — Alternate left/right layout
8. `components/ui/form-input.tsx` — New component with token styling
9. `app/proyectos/page.tsx` — Rich project cards with colors + features

### Zero Breaking Changes

All changes are additive/refactor. Existing functionality preserved. Routing, data, API calls unaffected.

### Performance Checklist

- [ ] Lighthouse score maintained >85 desktop
- [ ] Mobile performance >70
- [ ] No CLS (layout shift) regressions
- [ ] Images optimized (<100KB each)
- [ ] Framer-motion bundle impact checked (`next/bundle-analyzer`)

---

## SUMMARY: Expected Impact

| Metric | Before | After | Delta |
|--------|--------|-------|-------|
| Visual distinctiveness | 3/10 | 7/10 | +4 |
| Animation polish | 4/10 | 8/10 | +4 |
| Form UX clarity | 6/10 | 8/10 | +2 |
| Layout variety | 3/10 | 6/10 | +3 |
| Performance | 8/10 | 9/10 | +1 |
| Time-on-page (est.) | 2:30 | 3:45 | +50% |
| CTA engagement (est.) | 8% | 12% | +50% |

**Overall impression shift:** "Professional SaaS" → "Professional SaaS con personalidad y atención al detalle"

---

**Completado por:** Aurora (Product Designer)
**Fecha:** 2026-03-13
**Siguiente paso:** `/refine` con Pixel para priorizar + sprint plan
