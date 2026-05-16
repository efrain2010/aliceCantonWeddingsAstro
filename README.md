# Alice Cantón Wedding Planner

Bilingual (ES/EN) static website for Alice Cantón Wedding Planner, based in Mérida, Yucatán, México. Built with Astro 5.

## Stack

- **[Astro 5](https://astro.build)** — static site generator
- **[Tailwind CSS v4](https://tailwindcss.com)** — utility-first CSS via `@tailwindcss/vite`
- **[Vitest](https://vitest.dev)** — unit tests for i18n logic
- **Google Fonts** — Playfair Display + Lato

## Getting started

```bash
pnpm install
pnpm dev        # http://localhost:4321
```

## Commands

```bash
pnpm dev          # dev server
pnpm build        # static build → dist/
pnpm preview      # preview built output
pnpm test         # run tests once
pnpm test:watch   # run tests in watch mode
```

## Project structure

```
src/
├── components/
│   ├── pages/          # Page-level components (one per page, handles both ES + EN)
│   │   ├── HomePage.astro
│   │   ├── AboutPage.astro
│   │   ├── ServicesPage.astro
│   │   ├── VenuesPage.astro
│   │   ├── GalleryPage.astro
│   │   └── ContactPage.astro
│   ├── Header.astro    # Sticky nav + EN ↔ ES language switcher
│   ├── Footer.astro
│   ├── Hero.astro
│   ├── SectionCTA.astro
│   └── ...
├── i18n/
│   ├── translations.ts # All bilingual strings (UI + page content)
│   ├── index.ts        # getLang(), getPageKey(), routes, useTranslations()
│   └── __tests__/
├── layouts/
│   └── Layout.astro
├── pages/              # Thin routing wrappers only — no content here
│   ├── index.astro     → /
│   ├── nosotros.astro  → /nosotros
│   ├── ...
│   └── en/
│       ├── index.astro → /en
│       ├── about.astro → /en/about
│       └── ...
└── styles/
    └── global.css      # Tailwind @theme tokens
```

## i18n

Locale is auto-detected from the URL — no props needed:

| Spanish (default) | English |
|---|---|
| `/` | `/en` |
| `/nosotros` | `/en/about` |
| `/servicios` | `/en/services` |
| `/locaciones` | `/en/venues` |
| `/galeria` | `/en/gallery` |
| `/contacto` | `/en/contact` |

All translations live in `src/i18n/translations.ts`. Page components read them via `useTranslations(lang)`.

## Design tokens

| Token | Hex |
|---|---|
| `cream` | `#FAF7F2` |
| `gold` | `#C9A96E` |
| `charcoal` | `#2C2C2C` |
| `rose` | `#E8D5C4` |
