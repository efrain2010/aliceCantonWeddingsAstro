# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # dev server at http://localhost:4321
pnpm build        # static build → dist/
pnpm preview      # serve the built output
pnpm test         # run tests once (CI)
pnpm test:watch   # run tests in watch mode
```

Always use `pnpm` — never `npm` or `npx`.

## Tests

Vitest unit tests live in `src/i18n/__tests__/`. Two test files:

- `index.test.ts` — covers `getLang`, `getPageKey`, `routes`, and `useTranslations`; includes a round-trip test verifying the language switcher maps each `PageKey` correctly through both locales
- `translations.test.ts` — structural parity checks (both locales have the same keys and array lengths) + completeness checks (no empty strings)

Tests only cover `src/i18n/` because it contains the only pure TypeScript logic in the project. Astro components are not unit-tested here; use Playwright (`@astrojs/test-utils`) if rendered-page testing is needed.

## Architecture

**Astro 5 static site** — 12 pages total (6 Spanish + 6 English), Tailwind CSS v4 via `@tailwindcss/vite`, no JS framework.

### i18n

Locale is auto-detected from the URL path — no props needed:

- Spanish (default): `/`, `/nosotros`, `/servicios`, `/locaciones`, `/galeria`, `/contacto`
- English: `/en`, `/en/about`, `/en/services`, `/en/venues`, `/en/gallery`, `/en/contact`

All shared components (`Header`, `Footer`, `SectionCTA`, `ContactForm`) call `getLang(Astro.url.pathname)` internally to pick the right strings.

**Page content for both languages lives in `src/components/pages/`** — one file per page (e.g. `HomePage.astro`, `AboutPage.astro`). Each page component defines a `content = { es: {...}, en: {...} }[lang]` object with all text for both locales. `src/pages/` files are thin 3-line routing wrappers that just import and render the page component — do not add content there.

Translation dictionary for shared UI strings (nav labels, footer, CTA, form fields) is in `src/i18n/translations.ts`. Page-specific content (service cards, testimonials, FAQ items, venue descriptions) is defined inline in each page component in `src/components/pages/`.

Key i18n exports from `src/i18n/index.ts`:

- `getLang(pathname)` — returns `'es'` or `'en'`
- `getPageKey(pathname)` — maps URL to `PageKey` for active nav + language switcher
- `routes` — canonical URL for each locale/page combination
- `translations` — full bilingual dictionary

### Styling

Tailwind v4 with CSS-based config in `src/styles/global.css`. Custom tokens are defined with `@theme`:

| Token      | Hex       | Usage                     |
| ---------- | --------- | ------------------------- |
| `cream`    | `#FAF7F2` | page backgrounds          |
| `gold`     | `#C9A96E` | accents, borders, CTAs    |
| `charcoal` | `#2C2C2C` | body text, dark sections  |
| `rose`     | `#E8D5C4` | light section backgrounds |

Fonts: Playfair Display (headings, `font-serif`) + Lato (body, `font-sans`), loaded from Google Fonts.

No `tailwind.config.js` — all config is in the CSS file.

### Components

Reusable components in `src/components/`. All are locale-aware via URL detection. Page-level components live in `src/components/pages/`.

- `Header` — sticky nav + language switcher (EN ↔ ES), active item derived from `getPageKey()`
- `Footer` — 4-column grid, links use `routes[lang]` so URLs are always locale-correct
- `SectionCTA` — gold "Platiquemos / Let's Talk" band, reused on every page
- `HeroImage` — accepts `heroImage`, `title`, `fixImage`, `disableGreyscale`, `className` props; fixed height on mobile, full-screen on desktop
- `ContactForm` — locale-aware field labels/placeholders
- `ServiceCard`, `TestimonialCard`, `VenueCard` — purely presentational, no locale logic
- `GalleryGrid` — masonry photo grid; wraps each image in a `.gallery-trigger` button with a pre-optimized full-res URL so a `GalleryLightbox` on the same page can open it
- `GalleryLightbox` — modal carousel island (vanilla JS, no framework). Drop one per page, pair its `group` prop with the matching `GalleryGrid`'s `lightboxGroup`. Handles open/close animation, pinch/double-tap zoom on mobile, and decode-before-reveal loading
- `LoadingSpinner` — atom: animated spinner circle, `className` prop overrides size/color (default `h-12 w-12 border-white/25 border-t-white`). Use this instead of inlining a new spinner

### Reusable components & atomic design

Before writing new markup, check whether a piece of UI already exists in `src/components/` (or could be pulled out of a page component into one) rather than inlining it again. Default to **atomic design**: build small, single-purpose presentational pieces (e.g. `LoadingSpinner`, `ServiceCard`) — "atoms" — and compose larger sections (e.g. `GalleryLightbox`, `ContactForm`) — "molecules/organisms" — out of them, instead of one large component owning everything inline. When a new feature needs something generic (a spinner, a badge, a button style, an icon button), pull it into its own component in `src/components/` first, then use it from the feature component — don't duplicate the markup/CSS inline. This keeps visual primitives consistent and means a future style change happens in one place.

### Adding a new page

1. Create `src/components/pages/<Name>Page.astro` with a `content = { es: {...}, en: {...} }[lang]` object
2. Create `src/pages/<slug>.astro` and `src/pages/en/<slug>.astro` as thin wrappers importing the page component
3. Add the `PageKey` to `src/i18n/index.ts` (`PageKey` type + `routes` object + `getPageKey` mapping)
4. Add nav labels to `src/i18n/translations.ts` under `nav`
