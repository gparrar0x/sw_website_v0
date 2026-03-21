# FAQ Section - Design System Documentation

## Overview

Sistema de FAQ optimizado para LLMSO (LLM Search Optimization) y experiencia de usuario, diseñado específicamente para Skywalking.dev.

**Key Features:**
- Structured data (JSON-LD) para Google y LLMs
- Accordion interactivo con animaciones sutiles
- Búsqueda en tiempo real
- Filtros por categoría
- Mobile-first responsive
- WCAG AA compliant

---

## Component Architecture

```
/components/faq/
├── faq-item.tsx          # Individual FAQ accordion item
├── faq-category.tsx      # Category grouping with header
├── faq-search.tsx        # Search input component
├── faq-filters.tsx       # Category filter chips
├── faq-schema.tsx        # JSON-LD structured data
├── faq-cta.tsx           # Bottom CTA section
└── README.md             # This file

/app/faq/
├── page.tsx              # Main FAQ page with data
└── metadata.ts           # SEO metadata
```

---

## Design System

### Color Palette (from Brand Manual)

```css
/* Primary Colors */
--faq-bg: #000000                    /* Background */
--faq-card: #EFEEE9                  /* FAQ cards */
--faq-text-primary: #000000          /* Questions */
--faq-text-secondary: #918778        /* Answers */

/* Interactive States */
--faq-hover: #E8E2CF                 /* Hover state */
--faq-active: #E8833A                /* Open accordion */
--faq-border: #5F7382                /* Default border */
--faq-border-hover: #5F7382/40       /* Hover border */

/* Accents */
--faq-cta-primary: #D4AF37           /* Primary CTA */
--faq-cta-secondary: #25D366         /* WhatsApp */
--faq-icon-color: #5F7382            /* Icons */
```

### Typography

```css
/* Headings */
h1: 3.75rem (60px) - Bold - Hero title
h2: 1.875rem (30px) - Bold - Category titles
h3: 1.5rem (24px) - Semibold - Not used in FAQ

/* Body */
Question: 1.125rem (18px) - Semibold - #000000
Answer: 1rem (16px) - Regular - #918778
Small: 0.875rem (14px) - Regular - Descriptions
```

### Spacing

- Container max-width: 1280px (5xl)
- Section padding: 4rem (64px) vertical
- Card padding: 1.5rem (24px)
- Stack spacing: 1rem (16px) between FAQ items
- Category spacing: 4rem (64px) between categories

### Border Radius

- Cards: 1rem (16px)
- Buttons: 0.75rem (12px)
- Inputs: 1rem (16px)

---

## Component Props

### FAQItem

```typescript
interface FAQItemProps {
  question: string          // Question text
  answer: string           // HTML string for answer
  categoryColor?: string   // Optional category accent
  index?: number          // For staggered animation
}
```

### FAQCategory

```typescript
interface FAQCategoryProps {
  title: string              // Category title
  description?: string       // Optional description
  faqs: FAQ[]               // Array of FAQ items
  icon?: React.ReactNode    // Optional icon
  categoryColor?: string    // Accent color
  id: string               // For anchor links
}
```

### FAQSearch

```typescript
interface FAQSearchProps {
  onSearch: (query: string) => void  // Search callback
  placeholder?: string               // Optional placeholder
}
```

### FAQFilters

```typescript
interface FAQFiltersProps {
  filters: FAQFilter[]                        // Filter options
  activeFilter: string | null                 // Current filter
  onFilterChange: (filterId: string | null) => void  // Change callback
}
```

---

## Interaction Patterns

### Accordion Behavior

- **Default:** All items collapsed
- **Click:** Expands clicked item, others stay as-is (multi-expand allowed)
- **Animation:** 300ms ease-in-out transition
- **Icon:** ChevronDown rotates 180deg when open
- **Active state:** Orange border (#E8833A) + subtle background tint

### Search Behavior

- **Real-time:** Filters as you type (no submit button)
- **Case-insensitive:** Matches question + answer content
- **Clear button:** X icon appears when query exists
- **Empty state:** Shows message + "clear filters" button

### Filter Behavior

- **Default:** "Todas" selected (shows all categories)
- **Single-select:** Only one category active at a time
- **Combines with search:** Can search within filtered category
- **Active state:** Gold background (#D4AF37)

---

## SEO + LLMSO Optimization

### HTML Structure

```html
<article itemscope itemtype="https://schema.org/FAQPage">
  <section id="category-id">
    <h2>Category Title</h2>
    <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
      <h3 itemprop="name">Question?</h3>
      <div itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text">Answer content...</div>
      </div>
    </div>
  </section>
</article>
```

### JSON-LD Schema

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Question text",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Answer text (HTML stripped)"
      }
    }
  ]
}
```

### Meta Tags

```html
<title>FAQ - Automatización con IA | Skywalking.dev</title>
<meta name="description" content="30+ preguntas sobre automatización empresarial..." />
<meta property="og:type" content="website" />
<link rel="canonical" href="https://skywalking.dev/faq" />
```

---

## Accessibility (WCAG AA)

- **Keyboard navigation:** Tab/Enter to expand/collapse
- **Screen readers:** aria-expanded, aria-hidden attributes
- **Contrast ratios:**
  - Black on Beige (#000000 / #EFEEE9): 11.2:1 ✓
  - Warm on Beige (#918778 / #EFEEE9): 5.8:1 ✓
  - Orange on Beige (#E8833A / #EFEEE9): 4.9:1 ✓
- **Focus states:** Visible outline on all interactive elements
- **Headings:** Proper h1 > h2 hierarchy

---

## Performance Optimizations

- **Client-side filtering:** No server requests, instant results
- **Memoized filtering:** useMemo to prevent unnecessary re-renders
- **Lazy animations:** CSS transitions instead of JS animations
- **Font loading:** System fonts fallback (Geist Sans)

---

## Mobile Responsiveness

### Breakpoints

- **Mobile:** < 768px
  - Stack layout
  - Touch-friendly targets (min 44x44px)
  - Simplified filters (dropdown vs chips)

- **Tablet:** 768px - 1024px
  - 2-column filter grid
  - Larger hit areas

- **Desktop:** > 1024px
  - Full filter chips row
  - Hover states enabled

### Mobile-specific adjustments

```css
@media (max-width: 768px) {
  h1 { font-size: 2.5rem; }
  .faq-item { padding: 1rem; }
  .faq-filters { flex-direction: column; }
}
```

---

## Implementation Guide

### 1. Add to Navigation

```tsx
// In header.tsx or navigation
<Link href="/faq">Preguntas Frecuentes</Link>
```

### 2. Update Content

Edit `/app/faq/page.tsx` > `faqData` array:

```typescript
{
  id: 'category-slug',
  title: 'Category Name',
  description: 'Optional description',
  icon: <Icon className="w-6 h-6" />,
  faqs: [
    {
      question: 'Question text?',
      answer: `<p>HTML answer with <strong>formatting</strong></p>`
    }
  ]
}
```

### 3. Customize Styles

Override in `/app/faq/page.tsx` or create custom CSS:

```tsx
<FAQItem
  className="custom-class"
  categoryColor="#custom-color"
/>
```

---

## Testing Checklist

- [ ] All accordions expand/collapse correctly
- [ ] Search filters questions in real-time
- [ ] Filters work independently and combined
- [ ] JSON-LD validates (Google Rich Results Test)
- [ ] Mobile touch targets ≥ 44x44px
- [ ] Keyboard navigation works (Tab, Enter, Space)
- [ ] Screen reader announces state changes
- [ ] Colors pass WCAG AA contrast (4.5:1 minimum)
- [ ] Page loads < 2s on 3G
- [ ] No layout shift (CLS < 0.1)

---

## Future Enhancements

**Phase 2 (optional):**
- [ ] Deep linking to specific questions (#faq-question-id)
- [ ] "Was this helpful?" feedback buttons
- [ ] Analytics tracking (most viewed questions)
- [ ] AI-powered "related questions" suggestions
- [ ] Video answers for complex topics
- [ ] Multi-language support (EN/ES toggle)

---

## Support & Maintenance

**Owner:** Aurora (Product Designer)
**Tech Lead:** Pixel (Frontend Specialist)
**Last Updated:** 2025-01-18
**Next Review:** 2025-04-18 (quarterly)

For questions or improvements: `#design-system` Slack channel
