# Implementation Notes: alicecantonweddings.com Homepage Replication

## Overview

This document summarizes the key implementation considerations when replicating the Alice Cantón Weddings homepage in Astro, based on the reference site spec.

## Critical Differences: Reference Site vs. Astro Target

### Technology

- **Reference**: WordPress (server-rendered, form backend included)
- **Target**: Astro 5 (static site generator, no server-side logic)

**Impact**: Form submission will require external service (Formspree, Netlify Forms, etc.)

### Language Support

- **Reference**: Spanish only
- **Target**: Bilingual (ES + EN with `/en/` routes)

**Impact**: All content must be duplicated in English; navigation must include language toggle.

### Typography

- **Reference Uses**: Cinzel (headings), Halant (body)
- **Target Available**: Playfair Display (headings), Lato (body)

**Decision Needed**: Use Cinzel/Halant (close font match) or adapt with Playfair Display + Lato (project tokens)?

Recommendation: Use Cinzel/Halant if possible via Google Fonts (imported in `src/styles/global.css`), then fall back to Playfair Display + Lato.

### Color Tokens

- **Reference Heading Color**: `rgb(108, 105, 117)` (#6C6975 — muted purple-gray)
- **Target Project Charcoal**: `#2C2C2C` (darker, more saturated)

**Decision Needed**: Should headings use reference color or project charcoal?

Recommendation: Use reference color (#6C6975) for authenticity; document that this differs from project token.

- **Reference Accent Gold**: `rgb(229, 170, 69)` (#E5AA45 — warm, slightly orange-tinted)
- **Target Project Gold**: `#C9A96E` (cooler, more muted)

**Decision Needed**: Quote text and accents should match reference (#E5AA45) for visual fidelity.

---

## Page Structure Summary

### Nine Major Sections

1. **Header/Navigation** (sticky) — Logo, nav items (INICIO, NOSOTROS, SERVICIOS, etc.)
2. **Hero** — Full-viewport beach photo with circular "A" logo overlay
3. **Intro** — Value proposition text + 4 service keyword cards
4. **Services** — Three service cards with descriptions (Coordinación Total, Boda Destino, del Día)
5. **Story** — "Nuestra Historia / Since 2014" with about text and bouquet photo
6. **Testimonial Header** — "Mi Trabajo" with large gold quote from When Harry Met Sally
7. **Testimonials** — Gallery grid of wedding portfolio images
8. **Reviews** — Three customer review cards with circular profile photos
9. **Contact Form** — "Platiquemos" contact form + footer info
10. **Footer** — Link navigation organized by category

### Content Organization in Astro

Based on CLAUDE.md project structure:

- **Page wrapper**: `src/pages/index.astro` (Spanish root), `src/pages/en/index.astro` (English)
- **Page component**: `src/components/pages/HomePage.astro` (contains bilingual content object)
- **Shared components**: Header, Footer, SectionCTA, Hero, ContactForm (all language-aware via `getLang()`)
- **Translations**: Page-specific content defined inline in HomePage.astro; UI strings in `src/i18n/translations.ts`

---

## Key Design Elements to Replicate

### 1. Circular "A" Logo Overlay (Hero Section)

The hero has a circular graphic with:

- Outer ring: Text "WEDDINGS & EVENTS" around circumference (curved)
- Center: Large gold script "A"
- Rings: Multiple concentric circles (decorative)

**Implementation Options**:

- SVG graphic (recommended for scalability)
- CSS circles with clip-path
- PNG/JPEG image (less flexible)

**Recommendation**: Create as SVG asset (`src/assets/logo-circular.svg`) and include in hero section.

### 2. Sticky Header

Navigation should remain fixed at top during scroll.

**CSS Implementation**:

```css
header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: white;
  /* ... */
}
```

### 3. Hero Parallax Effect

Background image appears to move slower than viewport scroll (parallax).

**Implementation Options**:

- CSS: `background-attachment: fixed` (simplest, good browser support)
- JavaScript library: Rellax.js, Lenis, or similar
- CSS `transform: translateZ()` with `perspective`

**Recommendation**: Use `background-attachment: fixed` for simplicity in static Astro site.

### 4. Gallery/Masonry Layout

Testimonials section shows grid of wedding photos in varied sizes (masonry effect).

**Implementation**:

- CSS Grid with variable row-span: `grid-auto-rows: masonry`
- OR: CSS Columns with `column-count: 3+`
- OR: JavaScript library (Masonry, Isotope)

**Recommendation**: CSS Grid with variable sizes (no JS required).

### 5. Form Submission

Reference uses WordPress form handler; Astro version needs external service.

**Options**:

- Netlify Forms (recommended for Netlify hosting)
- Formspree (standalone, works anywhere)
- Basin, FreeForm.io, or other form service

**Recommendation**: Use Netlify Forms if deployed to Netlify; configure `<form netlify>` in ContactForm component.

---

## Spacing & Layout Dimensions

### Section Padding

- Top/Bottom: 60–80px per section
- Left/Right: Responsive (max-width container ~1200px, then margin auto)

### Hero Height

- Desktop: ~900px (full viewport or close)
- Mobile: ~500-600px (reduced)

### Component Spacing

- Gap between grid items: 30–40px
- Button padding: 15–20px vertical, 40–50px horizontal

---

## Color Palette Implementation

Update `src/styles/global.css` with reference colors:

```css
@theme {
  /* Existing tokens */
  colors.cream: #faf7f2;
  colors.rose: #e8d5c4;

  /* NEW tokens from reference */
  colors.heading-gray: #6c6975; /* NOT charcoal #2C2C2C */
  colors.body-gray: #a4a4a4;
  colors.accent-gold: #e5aa45; /* warmer than project gold #C9A96E */
  colors.nav-text: #a3a3a3;
  colors.button-bg: #333333;
}
```

Then use in components:

```html
<h1 class="text-heading-gray">Wedding Planner en Mérida Yucatán</h1>
<p class="text-body-gray">La organización...</p>
```

---

## Font Import

Add to `src/styles/global.css` (or update existing Google Fonts import):

```css
@import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Halant:wght@400;600&display=swap");
```

Then in `@theme` or Tailwind config:

```css
@theme {
  fontfamily.heading: "Cinzel", serif;
  fontfamily.body: "Halant", sans-serif;
}
```

Or via Tailwind utility classes:

```html
<h1 class="font-heading">Wedding Planner en Mérida Yucatán</h1>
<p class="font-body">La organización...</p>
```

---

## Image Sources

All images in the reference site are high-quality wedding photography. For the Astro implementation:

1. **Hero Image**: Sourced engagement/couple photo on beach
2. **Service Images**: Three wedding venue/decoration photos (hacienda, banquet, ceremony)
3. **Story Image**: Bridal bouquet close-up
4. **Testimonial Gallery**: 10+ wedding portfolio images
5. **Testimonial Profiles**: Circular headshots for three reviewers (or placeholder avatars)

**Note**: Copyright/licensing of reference images not included in this spec. Ensure sourced images are licensed for use.

---

## Bilingual Structure (Astro Only)

The target Astro site is bilingual. Map reference content to both locales:

### Spanish (Default / Root)

- Route: `/`
- Content: From reference site (verbatim)

### English

- Route: `/en`
- Content: English translations of reference content

### Navigation Toggle

Add language switcher in Header component:

```html
<a href="/{lang === 'es' ? 'en' : ''}/"> {lang === 'es' ? 'EN' : 'ES'} </a>
```

---

## Testing Checklist

- [ ] Hero section displays properly at multiple viewport sizes
- [ ] Sticky header stays fixed during scroll
- [ ] Gallery/testimonial images display correctly
- [ ] Contact form submits (test with form service)
- [ ] All text content is visible and readable (check color contrast)
- [ ] Typography matches reference (Cinzel headings, Halant body)
- [ ] Button hover states work
- [ ] Images load with correct aspect ratios
- [ ] Circular logo "A" renders cleanly (SVG quality)
- [ ] Language switcher toggles all content correctly (bilingual test)
- [ ] Mobile layout stacks properly (2-col → 1-col)

---

## Files Created

- `docs/home-reference-spec.md` — Full technical specification
- `screenshots/reference/README.md` — Screenshot documentation

## Reference Screenshots

Visual documentation of each page section is available in `screenshots/reference/` showing:

- Full hero section with navigation
- Intro + service cards
- Service descriptions
- Story section
- Testimonial header + gallery
- Review cards
- Contact form
- Footer

---

## Next Steps

1. **Review Spec**: Thoroughly read `home-reference-spec.md` for complete details
2. **Decide on Fonts**: Confirm Cinzel/Halant availability; decide fallback strategy
3. **Color Token Update**: Add reference colors to project tokens
4. **Create Components**: Build HomePage.astro with bilingual content structure
5. **Image Sourcing**: Gather or create wedding photography assets
6. **Form Integration**: Configure Netlify Forms or alternative
7. **Test Bilingual**: Ensure `/en/` routes work correctly
8. **QA**: Test on desktop and mobile; compare with reference site
