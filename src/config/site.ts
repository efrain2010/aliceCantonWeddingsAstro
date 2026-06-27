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
export const phoneHref = `tel:${CONTACT.phone.replace(/[^\d+]/g, "")}`;

/** `mailto:` href derived from the email */
export const emailHref = `mailto:${CONTACT.email}`;

/**
 * Endpoint every contact form submits to (Formspree).
 * Single source of truth so all forms use the same technology + email.
 */
export const formEndpoint = `https://formspree.io/f/${CONTACT.email}`;
