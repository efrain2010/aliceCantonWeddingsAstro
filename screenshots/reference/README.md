# Alice Cantón Weddings Homepage - Reference Screenshots

These screenshots document the reference homepage at https://alicecantonweddings.com/ captured on 2026-06-11.

## Screenshots Captured

The following sections of the homepage were captured and analyzed:

1. **Hero Section** — Full viewport with beach photo, circular "A" logo overlay, and sticky header navigation
2. **Intro Section** — Wedding planner value proposition text with service keyword cards (Planeación, Banquete, Música, Duración)
3. **Services Detail** — "Nuestros Servicios" section with three service cards (Coordinación Total, Boda Destino, del Día)
4. **Story Section** — "Nuestra Historia / Since 2014" with text and bouquet photo
5. **Testimonial Header** — "Mi Trabajo" with large gold quote from "When Harry Met Sally"
6. **Gallery Preview** — Masonry grid of wedding portfolio images
7. **Testimonial Cards** — Three customer testimonials (Jessi Rodriguez 2016, Yare Leal 2015, Martha & Sergio 2017) with circular profile photos
8. **Contact Form** — "Platiquemos" section with form fields (Nombre, Email, Teléfono, Mensaje) and submit button
9. **Footer** — Dark footer with navigation links and contact info

## Full Spec Document

Detailed implementation spec available at: `../../docs/home-reference-spec.md`

The spec includes:

- Section-by-section breakdown
- All text content verbatim in Spanish
- Computed CSS colors and typography values
- Layout patterns and spacing notes
- Design features and interactive elements
- Summary table of sections and colors

## Key Findings

### Typography

- **Headings**: Cinzel (serif), all-caps, `rgb(108, 105, 117)` (muted purple-gray)
- **Body**: Halant (sans-serif), 16px, 30px line-height, `rgb(164, 164, 164)` (gray)
- **Quotes/Accents**: Gold `rgb(229, 170, 69)` (warmer than project token #C9A96E)

### Color Palette

- **Primary BG**: White (#FFFFFF)
- **Accent**: Warm gold (#E5AA45)
- **Headings**: Muted purple-gray (#6C6975) — NOT charcoal #2C2C2C
- **Buttons**: Dark gray (#333333) bg, white text
- **Forms**: Light gray inputs (#F0F0F0)

### Layout

- Full-width hero with 900px+ height
- Sticky navigation header
- 2-3 column content sections with generous whitespace
- Masonry gallery with wedding photos
- Form section with cream background

### Design Notes

- Site is WordPress (not Astro) — form handling will differ
- All images are high-quality wedding photography
- Circular "A" logo overlay is custom design element
- Testimonial section uses blurred garden background with semi-transparent text cards
- Parallax effects likely on hero section
