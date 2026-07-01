/**
 * Single source of truth for the business contact details.
 * Update here and it propagates everywhere (footer, CTAs, page content, i18n).
 */
export const CONTACT = {
  /** Display phone number */
  phone: "999 292 8921",
  /** Display email address */
  email: "planner@alicecantonweddings.com",
} as const;

/** `tel:` href derived from the phone (digits/`+` only) */
export const phoneHref = `tel:+52${CONTACT.phone.replace(/[^\d+]/g, "")}`;

/** `mailto:` href derived from the email */
export const emailHref = `mailto:${CONTACT.email}`;

/** E.164-style display format, for structured data read by international audiences */
export const phoneInternational = `+52 ${CONTACT.phone}`;

/** Postal address, structured for schema.org JSON-LD */
export const ADDRESS = {
  streetAddress: "Calle 59D #253 x 122 y 124c, Yucalpetén",
  addressLocality: "Mérida",
  addressRegion: "Yucatán",
  addressCountry: "MX",
} as const;

/** Social profiles, for schema.org `sameAs` */
export const SOCIAL = {
  facebook:
    "https://www.facebook.com/Alice-Canton-Weddings-Events-545462678924715/",
  instagram: "https://www.instagram.com/alicecantonweddings/",
} as const;

/**
 * Endpoint every contact form submits to: a Cloudflare Pages Function
 * (see functions/api/contact.ts) that sends the email via Cloudflare
 * Email Routing. Single source of truth so all forms use the same target.
 */
export const formEndpoint = "/api/contact";
