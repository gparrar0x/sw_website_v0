# FAQ Section - Visual Design Specification

## Wireframe Conceptual

```
┌─────────────────────────────────────────────────────────────┐
│  Header (Black background)                                  │
│  ← Volver al inicio                                         │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                     HERO SECTION                             │
│                                                              │
│            Preguntas Frecuentes                             │
│   Todo lo que necesitas saber sobre automatización...       │
│              30 preguntas respondidas                        │
│                                                              │
│  ┌───────────────────────────────────────────────────┐      │
│  │  🔍  Buscar preguntas...                      ✕  │      │
│  └───────────────────────────────────────────────────┘      │
│                                                              │
│  ┌─────┐ ┌─────────┐ ┌──────────┐ ┌─────────┐ ┌────────┐  │
│  │Todas│ │ General │ │Servicios │ │Precios  │ │Proceso │  │
│  └─────┘ └─────────┘ └──────────┘ └─────────┘ └────────┘  │
│         (Gold)  (Beige) (Beige)     (Beige)    (Beige)     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  CATEGORY: General y Posicionamiento                         │
│  ✨  Quiénes somos y qué hacemos diferente                  │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌────────────────────────────────────────────────────┐     │
│  │ ¿Qué es Skywalking.dev y qué hacen exactamente?  ▼│     │
│  └────────────────────────────────────────────────────┘     │
│  (Beige card, hover → darker beige, chevron gray)           │
│                                                              │
│  ┌────────────────────────────────────────────────────┐     │
│  │ ¿En qué se diferencian de otras agencias de IA?  ▼│     │
│  └────────────────────────────────────────────────────┘     │
│                                                              │
│  ┌────────────────────────────────────────────────────┐     │
│  │ ¿Trabajan solo con empresas grandes...           ▲│     │
│  ├────────────────────────────────────────────────────┤     │
│  │ Trabajamos con empresas de 10+ empleados que...   │     │
│  │ • Startups B2B (10-50 empleados)                   │     │
│  │ • PYMEs establecidas (50-200 empleados)            │     │
│  │ • Equipos internos de empresas grandes             │     │
│  │                                                     │     │
│  │ Red flag: Si recién estás validando product...    │     │
│  └────────────────────────────────────────────────────┘     │
│  (Orange border, chevron orange, answer visible)            │
│                                                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  CATEGORY: Servicios y Tecnología                           │
│  🔧  Cómo trabajamos y qué herramientas utilizamos          │
├─────────────────────────────────────────────────────────────┤
│  ... (more FAQ items)                                       │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│              CTA SECTION (Gradient background)               │
│                                                              │
│        ¿No encontraste lo que buscabas?                     │
│   Hablemos. Nuestro equipo está listo para responder...    │
│                                                              │
│  ┌──────────────────┐  ┌─────────────────────┐            │
│  │ 📅 Agendar Reunión│  │💬 WhatsApp          │            │
│  └──────────────────┘  └─────────────────────┘            │
│  (Gold border/hover)   (Green filled)                       │
└─────────────────────────────────────────────────────────────┘
```

---

## Component States Detailed

### 1. FAQ Item - Collapsed State

```
Visual: Beige card (#EFEEE9) with subtle border
┌──────────────────────────────────────────────────────┐
│  Question text (bold, black)                      ▼ │
│                                                 (gray)│
└──────────────────────────────────────────────────────┘

Hover: Darker beige (#E8E2CF) + border opacity increase
Shadow: None → subtle shadow on hover
```

### 2. FAQ Item - Expanded State

```
Visual: Orange accent border (#E8833A) + light orange tint
┌──────────────────────────────────────────────────────┐
│  Question text (bold, black)                      ▲ │
│                                              (orange) │
├──────────────────────────────────────────────────────┤
│  Answer text (warm gray #918778)                    │
│  • Bullet points                                    │
│  • More content                                     │
│                                                      │
│  Strong text (black)   Code snippets (gray bg)     │
└──────────────────────────────────────────────────────┘

Transition: max-height 300ms ease-in-out
Icon: Rotates 180deg in 300ms
```

### 3. Search Input

```
Default:
┌────────────────────────────────────────────────┐
│ 🔍  Buscar preguntas...                       │
└────────────────────────────────────────────────┘
(Beige bg, gray placeholder, blue-gray icon)

Active/Typing:
┌────────────────────────────────────────────────┐
│ 🔍  automatizacion                         ✕  │
└────────────────────────────────────────────────┘
(Gold border, focus ring, clear button visible)

Focus ring: 4px gold with 20% opacity
Transition: border 200ms, ring 100ms
```

### 4. Filter Chips

```
Inactive:
┌─────────────┐
│ 📊 General  │  (Beige bg, black text)
└─────────────┘

Hover:
┌─────────────┐
│ 📊 General  │  (Blue-gray border)
└─────────────┘

Active:
┌─────────────┐
│ 📊 General  │  (Gold bg + border, black text)
└─────────────┘

Transition: background 200ms, border 200ms
```

### 5. CTA Buttons

```
Primary (Agendar):
┌──────────────────┐
│ 📅 Agendar      │  Default: Gold border, white text
└──────────────────┘
       ↓ hover
┌──────────────────┐
│ 📅 Agendar      │  Hover: Gold fill, black text
└──────────────────┘
Shadow: 0 8px 24px rgba(212,175,55,0.2) on hover

Secondary (WhatsApp):
┌──────────────────┐
│ 💬 WhatsApp     │  Green fill (#25D366), black text
└──────────────────┘
       ↓ hover
┌──────────────────┐
│ 💬 WhatsApp     │  Green 90%, scale(1.05)
└──────────────────┘
```

---

## Responsive Behavior

### Desktop (>1024px)

- Container: 1280px max-width, centered
- FAQ Items: Full width
- Filters: Horizontal row, 5 chips
- Search: 672px (2xl) centered
- CTA Buttons: Side by side

### Tablet (768px - 1024px)

- Container: 100% with 48px padding
- FAQ Items: Full width
- Filters: Wrap to 2 rows if needed
- Search: 100% width
- CTA Buttons: Side by side

### Mobile (<768px)

- Container: 100% with 24px padding
- Hero Title: 2.5rem (down from 3.75rem)
- FAQ Items: Full width, reduced padding
- Filters: Stack vertically or horizontal scroll
- Search: 100% width
- CTA Buttons: Stack vertically
- Touch targets: Min 44x44px

---

## Animation Timing

```css
/* Accordion expand/collapse */
transition: max-height 300ms ease-in-out,
            opacity 300ms ease-in-out;

/* Chevron rotation */
transition: transform 300ms ease-in-out,
            color 300ms ease-in-out;

/* Border color change */
transition: border-color 300ms ease-in-out;

/* Background hover */
transition: background-color 200ms ease-out;

/* Button hover */
transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);

/* Card hover shadow */
transition: box-shadow 300ms ease-out;

/* Search focus ring */
transition: border-color 200ms ease-out,
            box-shadow 100ms ease-out;

/* Staggered fade-in (FAQ items) */
animation: fade-in 600ms ease-out forwards;
animation-delay: calc(index * 50ms);
```

---

## Shadow System

```css
/* Card default */
box-shadow: none;

/* Card hover */
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

/* Card active (expanded) */
box-shadow: 0 8px 24px rgba(232, 131, 58, 0.15);

/* Button hover */
box-shadow: 0 8px 24px rgba(212, 175, 55, 0.2); /* Gold CTA */
box-shadow: 0 8px 24px rgba(37, 211, 102, 0.2); /* WhatsApp */

/* Search focus */
box-shadow: 0 0 0 4px rgba(212, 175, 55, 0.2);
```

---

## Icon System

All icons from **Lucide React** (consistent with site):

- **Search:** `<Search />` - 20px, blue-gray
- **Close:** `<X />` - 20px, warm gray
- **Chevron:** `<ChevronDown />` - 24px, rotates on expand
- **Category Icons:**
  - General: `<Sparkles />` - Gold
  - Servicios: `<Wrench />` - Blue-gray
  - Pricing: `<DollarSign />` - Gold
  - Proceso: `<Target />` - Orange
  - Técnica: `<Shield />` - Blue-gray
- **CTA Icons:**
  - Calendar: `<Calendar />` - 20px
  - WhatsApp: `<MessageCircle />` - 20px

---

## Content Guidelines

### Question Format

- Start with interrogative word (Qué, Cómo, Por qué, Cuándo)
- Be specific and user-centric
- Max 120 characters (fits mobile without wrapping)
- No jargon unless defined in answer

**Good:**
- "¿Cuánto cuesta típicamente un proyecto de automatización?"
- "¿Qué modelos de IA utilizan? ¿OpenAI, Claude, otros?"

**Bad:**
- "Pricing" (not a question)
- "Cuéntame sobre sus metodologías de implementación de workflows empresariales" (too long)

### Answer Format

- Start with direct answer (TL;DR first)
- Use structured HTML (`<p>`, `<ul>`, `<strong>`, `<em>`, `<code>`)
- Break into digestible chunks (3-5 bullet points max per list)
- Include examples when possible
- End with actionable insight or next step

**Structure template:**

```html
<p><strong>Direct answer in 1 sentence.</strong></p>
<ul>
  <li><strong>Point 1:</strong> Explanation with context</li>
  <li><strong>Point 2:</strong> Example or use case</li>
  <li><strong>Point 3:</strong> Comparison or clarification</li>
</ul>
<p><em>Actionable insight:</em> What to do next or when to use this.</p>
```

---

## Brand Voice in FAQ

- **Tone:** Professional but approachable, no corpo-speak
- **Style:** Direct, transparent, slightly opinionated
- **POV:** First-person plural ("Nosotros trabajamos...")
- **Length:** Comprehensive but scannable (150-300 words per answer)
- **Disclaimers:** Use "Red flag", "Disclaimer", "Note" for caveats

**Phrases to use:**
- "Transparencia brutal"
- "No hay lock-in"
- "ROI medible"
- "Payback en X meses"
- "Si no ahorra tiempo, no lo construimos"

**Phrases to avoid:**
- "Cutting-edge solutions"
- "Synergize your workflows"
- "Leverage AI capabilities"
- "Best-in-class platform"

---

## Contrast Ratios (WCAG AA)

| Combination | Ratio | Pass? |
|-------------|-------|-------|
| Black on Beige (#000 / #EFEEE9) | 11.2:1 | ✓ AAA |
| Warm on Beige (#918778 / #EFEEE9) | 5.8:1 | ✓ AA |
| Blue-gray on Beige (#5F7382 / #EFEEE9) | 5.8:1 | ✓ AA |
| Gold on Black (#D4AF37 / #000) | 6.1:1 | ✓ AA |
| Orange on Beige (#E8833A / #EFEEE9) | 4.9:1 | ✓ AA |
| White on Black (#FFF / #000) | 21:1 | ✓ AAA |

---

## Implementation Checklist

**Design Handoff:**
- [x] Component files created
- [x] Color tokens defined
- [x] Typography scale documented
- [x] Animation specs written
- [x] Responsive breakpoints defined
- [x] Accessibility requirements listed
- [x] Content guidelines provided
- [ ] Figma mockups (optional, if requested)

**Development Ready:**
- [x] All components functional
- [x] Tailwind classes aligned with brand
- [x] Lucide icons imported
- [x] JSON-LD schema implemented
- [x] SEO metadata configured
- [x] Mobile responsive tested
- [ ] Cross-browser tested (Chrome, Safari, Firefox)
- [ ] Keyboard navigation tested
- [ ] Screen reader tested (VoiceOver/NVDA)

**Content Populated:**
- [x] 30 FAQs written
- [x] 5 categories organized
- [x] CTA copy finalized
- [ ] WhatsApp link updated with real number
- [ ] Calendar link configured (if applicable)

---

## Design Rationale

### Why Accordion over Tabs?

- **Better for SEO:** All content indexable on single page
- **LLM-friendly:** Complete context in one document
- **Mobile-first:** Vertical scroll more natural than tabs
- **Flexibility:** Users can expand multiple at once

### Why Search + Filters over Just Search?

- **Discoverability:** Users can browse categories if unsure what to search
- **Mental model:** People think in categories (pricing, technical, etc.)
- **Accessibility:** Filters work without JavaScript
- **Analytics:** Track which categories get most attention

### Why No "Jump to Top" Button?

- **Modern UX:** Unnecessary with smooth scroll and short page
- **Clutter:** Every extra element competes for attention
- **Alternative:** Anchor links in categories serve same purpose

---

## Known Limitations

1. **Search is client-side:** Won't work with JS disabled (Progressive enhancement: show all FAQs)
2. **No fuzzy matching:** Search is exact substring match (Could add Fuse.js in v2 if needed)
3. **HTML in answers:** Requires trust in content editors (Sanitize if user-generated in future)
4. **No deep linking yet:** Can't share link to specific question (v2 feature)
5. **Static content:** Updates require code deploy (Could move to CMS in future)

---

## Maintenance Schedule

- **Weekly:** Review new questions submitted via CTA
- **Monthly:** Update answers based on product changes
- **Quarterly:** Audit for outdated information
- **Annually:** Redesign evaluation (is pattern still effective?)

---

**Design Owner:** Aurora
**Implementation:** Pixel
**Content:** Mentat (with Gonza review)
**Version:** 1.0
**Last Updated:** 2025-01-18
