# Alice Cantón Weddings Homepage - Implementation Spec

**Reference Site**: https://alicecantonweddings.com/
**Language**: Spanish-first (site is bilingual in Astro target, but reference is Spanish only)
**Build**: WordPress (reference is WordPress; target is Astro)
**Last Updated**: 2024

---

## Page Overview

The homepage is a long-form, hero-to-footer wedding planner landing page with 8 main sections. Layout is full-width with contained content areas. Spanish is the primary language. The design emphasizes elegant wedding photography with complementary typography and a refined color palette.

### Typography Notes

- **Headings (H1/H2/H3)**: Cinzel font (serif), all-caps treatment, color `rgb(108, 105, 117)` (muted purple-gray, NOT the project's charcoal #2C2C2C)
- **Body Text**: Halant font (sans-serif), `rgb(164, 164, 164)` (muted gray), 16px, 30px line-height
- **Accent/Quotes**: Gold/warm tones in large text (`rgb(229, 170, 69)` observed in testimonial quote)

---

## Section 1: Header & Navigation (Sticky)

**Purpose**: Site branding and main navigation  
**Layout**: Horizontal fixed/sticky bar, full-width  
**Height**: ~80px  
**Background**: `rgb(255, 255, 255)` (white)  
**Text Color**: `rgb(163, 163, 163)` (light gray)

### Content

- **Logo/Brand**: "Alice Cantón" in gold script font, with tagline "WEDDINGS & EVENTS" in small caps below
- **Nav Items** (centered, pipe-separated):
  - INICIO
  - NOSOTROS
  - SERVICIOS
  - LOCACIONES
  - GALERÍA
  - CONTACTO
- **Language Switcher**: Not visible in Spanish version (site is Spanish-only; Astro version will add EN toggle)

### Details

- White background with light gray text
- Logo appears in gold/warm tone (approx. `#C9A96E` similar to project gold token)
- Navigation is uppercase, serif font
- Links are plain text with pipe separators (|)
- Sticky/fixed positioning as user scrolls (based on typical agency site pattern)

---

## Section 2: Hero Section

**Purpose**: Main brand statement with hero image and circular logo overlay  
**Layout**: Full-width, centered content  
**Height**: ~900px  
**Background**: Full-bleed image with semi-transparent overlay

### Content

**H1 Heading**: "Wedding Planner en Mérida Yucatán" (NOT visible in hero; appears below as subheading in next section based on page structure)

### Hero Image

- **Source**: Beach/ocean photo (engaged couple on beach at sunset)
- **Overlay**: Circular graphic with text "WEDDINGS & EVENTS" around the circumference, with large gold "A" (Alice's initial) in center
- **Object-fit**: `cover` (image fills viewport, aspect ratio maintained)
- **Parallax/Effects**: Subtle darkening/fade effect evident, possibly parallax scroll

### Typography on Hero

- Circular logo text is hand-drawn script style
- Gold accent color on the "A" (warm tone, approx. `#D4AF37` or similar)

---

## Section 3: Introduction / Value Proposition

**Purpose**: Hero description and wedding planning overview  
**Layout**: Mixed content - image left, text right  
**Background**: White (`rgb(255, 255, 255)`)  
**Text Color**: Body text gray `rgb(164, 164, 164)`

### Content

**H1**: "Wedding Planner en Mérida Yucatán"

**Body Text**:

> La organización de una boda requiere mucho tiempo y compromiso, parte del trabajo requiere conseguir proveedores, elegir decoración y podrían invertir muchas horas trabajando en los detalles para tener la boda de sus sueños. Afortunadamente, los novios no tienen que asumir toda esa responsabilidad. Mi trabajo como Wedding Planner es quitarles todo el peso de encima y asegurarme que todo vaya de acuerdo al plan, ustedes solo tienen que preocuparse por pasarla de lo mejor. Contratar un Wedding Planner te va a ayudar a que el proceso sea mucho más fácil y divertido.

### Sub-Navigation Cards (4 items in a row)

Located below the intro text; appears to be a feature/benefit section:

1. **Planeación** (Planning)
2. **Banquete** (Banquet)
3. **Música** (Music)
4. **Duración** (Duration)

Each card displays one service keyword; layout is likely 4-column grid (25% width each).

---

## Section 4: Services / "Nuestros Servicios" (Our Services)

**Purpose**: Detailed service offerings  
**Layout**: Text + imagery grid  
**Background**: White  
**Text Color**: Gray `rgb(164, 164, 164)` for body, purple-gray for headings

### Content

**H2**: "Nuestros Servicios" (centered, all-caps, Cinzel font)

#### Service 1: Coordinación Total (Full Coordination)

**H3**: "Coordinación Total"

**Description**:

> La planificación de la boda puede ser inmensamente estresante e implica mucho tiempo. ¡Déjenos manejar el trabajo por usted!
>
> El servicio de Coordinación Total le guiará a través de cada paso del proceso de planificación de la boda cubriendo todos los aspectos creativos, organizativos, técnicos y logísticos de tu gran día.
>
> Es ideal para parejas muy ocupadas que necesitan apoyo para la planeación de su boda.

#### Service 2: Coordinación Boda Destino (Destination Wedding Coordination)

**H3**: "Coordinación Boda Destino"

**Description**:

> Este servicio cubrirá cada paso del proceso de planificación incluyendo todos los aspectos creativos, organizativos, técnicos y logísticos de tu evento. Ideal para las parejas que quieren disfrutar de una boda en el estado de Yucatán y al rededores, además de encargarme del evento, montaje, logística y cronograma, les ayudaré a tener la mejor estncia en el estado sugiriendo lugares donde hospedarse y organizando la logistica para los novios y sus invitados.

#### Service 3: Coordinación del día (Day-of Coordination)

**H3**: "Coordinación del día"

**Description**:

> Este servicio es ideal si ya tienes todo listo para tu boda pero necesitas a alguien que coordine el día de tu evento. Montaje, logística, cronograma. Ustedes solo tienen que disfrutar.

### Layout Details

- Three service cards displayed horizontally (3-column layout)
- Each card paired with a background wedding image (venue, decoration, etc.)
- Images appear to be overlaid with semi-transparent dark color for contrast
- White text overlay on image backgrounds

---

## Section 5: "Nuestra Historia" (Our Story)

**Purpose**: Brand backstory and credibility  
**Layout**: Two-column (text left, image right)  
**Background**: White  
**H2 Color**: Purple-gray (Cinzel, all-caps)

### Content

**H2**: "Nuestra Historia"  
**H3**: "Since 2014" (in English, smaller, elegant serif)

**Body Text**:

> He tenido la oportunidad de ser parte del gran día de muchas parejas, todo comenzó con una plática entre amigas, decidimos unir nuestras habilidades y fortalezas y adentrarnos en la planeación de bodas, sin embargo, por azares del destino cada una tomó su camino. Personas que conocieron mi trabajo me siguieron contactando para ser su organizadora y decidí continuar por mi cuenta en este mundo que tanto me apasiona.
>
> [vertical separator/decoration]
>
> Estoy muy agradecida con todos los que han sido parte de este viaje y espero con muchas ansias poder seguir creciendo y trabajando en hacer los sueños realidad de muchas parejas.

### Image

- Right column: Wedding bouquet close-up photo (white flowers, green accents, soft focus bride hands)
- Image size: ~50% of section width, right-aligned

### CTA Button

**Text**: "Platiquemos" (Let's Chat)  
**Style**: Solid button, dark gray/charcoal background (`rgb(51, 51, 51)`), white text  
**Position**: Below text, left-aligned

---

## Section 6: "Mi Trabajo" (My Work) - Testimonial Header & Quote

**Purpose**: Social proof with testimonial quote; transition to gallery/reviews  
**Layout**: Full-width, centered content over background  
**Background**: Teal/dark green (`approx. rgb(108, 120, 120)` or similar muted teal)  
**Text Color**: Warm gold/bronze for quote

### Content

**H1**: "Mi Trabajo" (centered, all-caps, Cinzel)

**Quote** (very large, all-caps, warm gold color `rgb(229, 170, 69)`):

> Cuando te das cuenta que deseas pasar el resto de tu vida con una persona, quieres que el resto de tu vida empiece lo antes posible
>
> — When Harry met Sally

### Image Gallery Preview

Below the quote: Grid of wedding photos (appears to be 3-4 images across, 3 rows deep).

- Each image is a past wedding from portfolio
- Images appear to be 200-300px square or rectangular
- Layout is masonry-style or justified grid
- All images with `object-fit: cover`

### Button

**Text**: "Ver Galería" (See Gallery)  
Appears multiple times under or within the image grid, possibly overlaid on images.

---

## Section 7: Testimonials Section

**Purpose**: Customer reviews and social proof  
**Layout**: Full-width with testimonial cards on background  
**Background**: Green floral/garden photo background (blurred, appears to be bokeh effect)  
**Text Color**: White text on dark semi-transparent card backgrounds

### Header

**Quote/Title**:

> " Gracias por confiar en mí y permitirme ser parte de su historia de amor "
>
> **Su Especialista en Bodas** (Her Wedding Specialist)

### Testimonial Cards (3 cards visible)

#### Card 1: JESSI RODRIGUEZ (2016)

**Text**:

> Alice: La experiencia que tuve contigo fue muy grata e importante, gracias por aportar ideas para mejorar y descargarme el estrés. Eres creativa y muy apasionada en lo que haces. Ojalá todas se den la oportunidad de trabajar contigo.

**Photo**: Small circular profile photo (headshot), placed left of name/year

#### Card 2: YARE LEAL (2015)

**Text**:

> Alice es lo máximo! Super recomendable! El día de la boda me ayudó muchísimo, estuvo pendiente de mí en todo momento. Desde el inicio me dio todos los consejos que necesitaba para mi gran día, gracias por todo Alice!

**Photo**: Circular profile photo

#### Card 3: MARTHA & SERGIO (2017)

**Text**:

> Nuestra experiencia vivida en nuestra boda va resumida de esta manera: Nosotros no pensábamos contratar a una wedding planner porque queríamos ver todo nosotros, una amiga nos la recomendó y decidimos darle esa oportunidad, sino fuera por ella estaríamos como locos de un lado a otro, estamos plenamente agradecidos que ella que haya estado ahí. El servicio que brindó fue más que excelente y satisfactorio. Estamos muy agradecidos con su servicio y sobre todo profesionalismo. Muchos dirán que las wedding planner son un gasto innecesario pero creo que vale la pena invertir en una.

**Photo**: Circular profile photo

### Card Styling

- Dark semi-transparent background (dark gray/black with opacity)
- White text, readable over background image
- Circular profile photo thumbnail (approx. 80-100px diameter)
- Cards are stacked or arranged in 1-3 column layout
- Bottom section transitions to:

**H3** (all-caps, gold/bronze color):

> Tu día especial merece una organización especial.

---

## Section 8: Contact / CTA Section - "Platiquemos"

**Purpose**: Contact form and call-to-action  
**Layout**: Two-column (text left, form right) or full-width stacked  
**Background**: Cream/beige (`approx. #FAF7F2` or similar light neutral)  
**Text Color**: Gray for labels, darker for input text

### Header

**H2**: "Platiquemos" (centered or left-aligned, Cinzel all-caps)

**Intro Text**:

> Escríbeme, vamos a platicar sobre todo lo que te puedo ayudar y como podemos lograr que pases el mejor día de tu vida.

### Form Fields

**Layout**: Vertical stack (full-width single column or 2-column on desktop)

1. **Nombre** (Name) - Required field marked with red `*`
   - Input type: text
   - Placeholder or label: "Nombre"

2. **Email** - Required field
   - Input type: email
   - Placeholder or label: "Email"

3. **Teléfono** (Phone) - Required field
   - Input type: tel
   - Placeholder or label: "Teléfono"

4. **Mensaje** (Message) - Required field
   - Input type: textarea
   - Larger field for longer messages
   - Placeholder or label: "Mensaje"

**Required Field Note** (above form):

> Campos marcados con * son requeridos

### Submit Button

**Text**: "Enviar" (Send)  
**Style**: Dark gray/charcoal (`rgb(51, 51, 51)`) background, white text  
**Size**: Medium to large, full-width or auto-width

### Contact Info (Footer-like)

Below form or in left column:

- **Teléfono** (Phone): 999 292 8921
- **Correo** (Email): hola@alicecantonweddings.com

---

## Section 9: Footer

**Purpose**: Site-wide navigation, links, and legal  
**Layout**: 4-column grid  
**Background**: Dark charcoal/navy (approx. `rgb(51, 51, 51)` to `rgb(70, 70, 70)`)  
**Text Color**: Light gray/white

### Columns

#### Column 1: Branding

- Logo or site name
- Tagline (if present)

#### Column 2: Locaciones (Locations)

Link navigation:

- Bodas en Haciendas (Hacienda Weddings)
- Bodas en Bacalar (Bacalar Weddings)
- Bodas en la Playa (Beach Weddings)

#### Column 3: Servicios (Services)

Link navigation:

- Coordinación Total de la Boda (Full Wedding Coordination)
- Coordinación Boda Destino (Destination Wedding Coordination)
- Coordinación del Día (Day-of Coordination)

#### Column 4: Acerca / Info

Link navigation:

- Acerca de Nosotros (About Us)
- Other links as needed

### Footer Bottom

- Copyright text (not visible in provided content)
- Social media icons (not visible in provided content)

---

## Color Palette Summary

| Element                    | CSS Color                    | Hex Equivalent       | Notes                                                    |
| -------------------------- | ---------------------------- | -------------------- | -------------------------------------------------------- |
| Heading (H1/H2/H3)         | `rgb(108, 105, 117)`         | `#6C6975`            | Muted purple-gray (NOT charcoal #2C2C2C)                 |
| Body Text                  | `rgb(164, 164, 164)`         | `#A4A4A4`            | Muted gray (lighter than charcoal)                       |
| Accent/Gold (quotes, logo) | `rgb(229, 170, 69)`          | `#E5AA45`            | Warm bronze/gold (close to project's #C9A96E but warmer) |
| Navigation Background      | `rgb(255, 255, 255)`         | `#FFFFFF`            | White                                                    |
| Navigation Text            | `rgb(163, 163, 163)`         | `#A3A3A3`            | Light gray                                               |
| Buttons (primary)          | `rgb(51, 51, 51)`            | `#333333`            | Dark charcoal (button bg)                                |
| Button Text                | `rgb(247, 247, 247)`         | `#F7F7F7`            | Near-white                                               |
| Forms/Inputs BG            | `rgb(240, 240, 240)`         | `#F0F0F0`            | Light gray (input backgrounds)                           |
| Section BG (services)      | `rgb(255, 255, 255)`         | `#FFFFFF`            | White                                                    |
| Testimonial cards BG       | semi-transparent dark        | `rgba(0, 0, 0, 0.6)` | Dark with opacity over image                             |
| Testimonial text           | `rgb(255, 255, 255)`         | `#FFFFFF`            | White on dark card                                       |
| Hero/Teal section BG       | `approx. rgb(108, 120, 120)` | `#6C7878`            | Muted teal-gray                                          |
| Contact section BG         | `approx. rgb(250, 247, 242)` | `#FAF7F2`            | Cream (matches project token)                            |

---

## Typography Summary

| Element          | Font Family     | Font Size | Font Weight | Case          | Line Height | Color                |
| ---------------- | --------------- | --------- | ----------- | ------------- | ----------- | -------------------- |
| H1               | Cinzel          | 30px      | 400         | UPPERCASE     | Default     | `rgb(108, 105, 117)` |
| H2               | Cinzel          | ~28px     | 400         | UPPERCASE     | Default     | `rgb(108, 105, 117)` |
| H3               | Cinzel          | ~24px     | 400         | UPPERCASE     | Default     | `rgb(108, 105, 117)` |
| Body Paragraph   | Halant          | 16px      | 400         | sentence-case | 30px        | `rgb(164, 164, 164)` |
| Navigation       | Cinzel/Serif    | ~16px     | 400         | UPPERCASE     | Default     | `rgb(163, 163, 163)` |
| Logo/Brand       | Script (custom) | ~24px     | 400         | Title Case    | Default     | Gold accent          |
| Quote/Large Text | Cinzel or serif | ~36px+    | 400         | UPPERCASE     | Default     | `rgb(229, 170, 69)`  |
| Form Labels      | Halant          | 16px      | 400         | Sentence-case | Default     | `rgb(164, 164, 164)` |

---

## Layout Patterns & Spacing

### Hero Section

- Full viewport height (≈900px)
- Centered circular logo overlay
- Image covers entire section with parallax effect

### Content Sections

- Full-width container with internal max-width for text (likely 1200px or similar)
- Padding: ~60-80px top/bottom per section
- Column layouts: 2-col (50/50) or 3-col equal width for services
- Grid gap: Appears to be ~30-40px between items

### Image Treatment

- All images use `object-fit: cover`
- Wedding photos often have semi-transparent dark overlay for text readability
- Photos are full-width in hero, contained width in service/story sections
- Gallery images appear in justified or masonry grid

### Buttons

- Border-radius: ~4-8px (appears minimal/subtle)
- Padding: ~15-20px vertical, ~40-50px horizontal
- Font-weight: 400-600
- All-caps text

---

## Interactive Elements & Hover States

### Navigation Links

- Hover state not fully visible, but likely color change or underline

### Buttons

- Hover state likely includes background color shift or opacity change
- No visible animation delays

### Form Inputs

- Typical input styling: light gray background, border on focus
- Placeholder text color appears lighter than input text

### Gallery/Portfolio Links

- "Ver Galería" buttons overlaid on images
- Likely transparent-to-opaque on hover

---

## Notable Design Features

1. **Sticky Header**: Navigation bar remains visible at top during scroll
2. **Hero Overlay Logo**: Circular "A" with text around circumference creates elegant, custom branding
3. **Blurred Background Images**: Testimonial section uses garden/floral bokeh background for visual interest
4. **Semi-transparent Text Overlays**: Service cards and testimonials use dark cards over photos for readability
5. **Masonry Gallery**: Portfolio/testimonial gallery appears to use varied image sizes in justified layout
6. **Serif Headings**: All-caps Cinzel gives elegant, formal feel appropriate for luxury weddings
7. **Script Logo**: Custom hand-drawn script "A" creates personal, artisanal touch
8. **Warm Gold Accents**: Used sparingly for quotes and branding—creates luxury feel
9. **Whitespace**: Generous spacing between sections creates breathing room and elegance

---

## Responsive Considerations

_(Observed from single desktop viewport; mobile not tested)_

- Layout likely stacks from 2/3-column to single column on smaller screens
- Navigation may collapse to hamburger menu on mobile
- Form likely becomes full-width single column
- Hero height may reduce on smaller screens
- Typography sizes likely scale down proportionally

---

## Summary Table: Sections at a Glance

| #   | Section            | BG Color              | Key Text                             | Images                                      |
| --- | ------------------ | --------------------- | ------------------------------------ | ------------------------------------------- |
| 1   | Header/Nav         | White                 | "INICIO \| NOSOTROS \| SERVICIOS..." | Logo (gold script "A")                      |
| 2   | Hero               | Beach photo + overlay | "A" in circle                        | Full-width engagement photo + circular logo |
| 3   | Intro/Value        | White                 | "Wedding Planner en Mérida..."       | Couple on beach, service keyword cards      |
| 4   | Services           | White                 | "Nuestros Servicios" (3 cards)       | 3 wedding venue/decoration photos           |
| 5   | Story              | White                 | "Nuestra Historia / Since 2014"      | Bridal bouquet closeup                      |
| 6   | Testimonial Header | Teal                  | "Mi Trabajo" + quote                 | Gallery grid of wedding photos              |
| 7   | Reviews            | Garden/bokeh photo    | 3 testimonial cards (dark bg)        | 3 circular profile photos + background      |
| 8   | Contact Form       | Cream                 | "Platiquemos" + form                 | None (text-focused)                         |
| 9   | Footer             | Dark gray             | Footer nav links                     | Logo (if present)                           |

---

## Notes for Implementation

1. **Typography**: Reference site uses Cinzel (headings) and Halant (body), NOT the Astro project's Playfair Display + Lato. Explicitly map these or choose close substitutes if not available.

2. **Colors**: The reference site's accent gold (`rgb(229, 170, 69)`) is warmer than the project's token `#C9A96E`. Consider whether to match token exactly or adopt reference's warmer tone.

3. **Headings**: All headings appear in ALL-CAPS with elegant serif font. Maintain this style throughout.

4. **WordPress Origin**: Reference is WordPress; Astro implementation will be static/SSG, so form handling will differ (likely Formspree, Netlify Forms, or similar).

5. **Images**: All reference images are high-quality wedding photography. Placeholder wedding images or specific portfolio shots should be sourced for Astro version.

6. **Hero Overlay**: The circular "A" logo with text is a custom design element. Recreate using SVG or CSS for scalability.

7. **Parallax**: Hero section may use scroll-linked parallax; can be achieved with CSS `background-attachment: fixed` or JS libraries like Rellax.js.

8. **Sticky Navigation**: Implement with CSS `position: sticky` or JS scroll listener.

9. **Bilingual (Astro only)**: Reference site is Spanish-only. Astro version adds `/en/` routes with English translations. Navigation must toggle language and update all text accordingly.

---

## Screenshots Captured

All reference screenshots saved to `screenshots/reference/`:

- `01-hero.png` — Hero section with beach photo and circular logo
- `02-intro-section.png` — Intro text + service keyword cards
- `03-services-detail.png` — Services section with descriptions
- `04-testimonials.png` — Testimonial quote and gallery header
- `05-testimonials-cards.png` — Gallery grid of wedding photos
- `06-testimonials-text.png` — Testimonial review cards
- `07-cta-footer.png` — Contact form and footer info
- `08-footer.png` — Footer details
- `full-page-top.png` — Full hero section at high resolution
