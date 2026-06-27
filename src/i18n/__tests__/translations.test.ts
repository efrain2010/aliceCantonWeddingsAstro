import { describe, it, expect } from "vitest";
import { translations } from "../translations";

const es = translations.es;
const en = translations.en;

describe("translations structural parity", () => {
  it("nav has the same keys in both locales", () => {
    expect(Object.keys(en.nav).sort()).toEqual(Object.keys(es.nav).sort());
  });

  it("footer has the same keys in both locales", () => {
    expect(Object.keys(en.footer).sort()).toEqual(
      Object.keys(es.footer).sort(),
    );
  });

  it("cta has the same keys in both locales", () => {
    expect(Object.keys(en.cta).sort()).toEqual(Object.keys(es.cta).sort());
  });

  it("form has the same keys in both locales", () => {
    expect(Object.keys(en.form).sort()).toEqual(Object.keys(es.form).sort());
  });

  it("footer links and specialties arrays are the same length", () => {
    expect(en.footer.links.length).toBe(es.footer.links.length);
    expect(en.footer.specialties.length).toBe(es.footer.specialties.length);
  });

  it("footer links point to the same pageKeys in both locales", () => {
    en.footer.links.forEach((link, i) => {
      expect(link.pageKey).toBe(es.footer.links[i].pageKey);
    });
  });

  it("footer specialties point to the same pageKeys in both locales", () => {
    en.footer.specialties.forEach((s, i) => {
      expect(s.pageKey).toBe(es.footer.specialties[i].pageKey);
    });
  });

  it("pages namespace exists in both locales", () => {
    expect(Object.keys(en.pages).sort()).toEqual(Object.keys(es.pages).sort());
  });

  it("all page sections have the same keys in both locales", () => {
    const pageKeys = [
      "home",
      "about",
      "services",
      "venues",
      "gallery",
      "contact",
    ] as const;
    for (const key of pageKeys) {
      expect(
        Object.keys(en.pages[key]).sort(),
        `pages.${key} keys differ`,
      ).toEqual(Object.keys(es.pages[key]).sort());
    }
  });

  it("home service items, testimonials, categories arrays are the same length", () => {
    expect(en.pages.home.services.items.length).toBe(
      es.pages.home.services.items.length,
    );
    expect(en.pages.home.testimonials.items.length).toBe(
      es.pages.home.testimonials.items.length,
    );
    expect(en.pages.home.categories.length).toBe(
      es.pages.home.categories.length,
    );
  });

  it("about values items, process steps arrays are the same length", () => {
    expect(en.pages.about.values.items.length).toBe(
      es.pages.about.values.items.length,
    );
    expect(en.pages.about.process.steps.length).toBe(
      es.pages.about.process.steps.length,
    );
    expect(en.pages.about.venues.buttons.length).toBe(
      es.pages.about.venues.buttons.length,
    );
  });

  it("services values and packages arrays are the same length", () => {
    expect(en.pages.services.values.length).toBe(
      es.pages.services.values.length,
    );
    expect(en.pages.services.packages.length).toBe(
      es.pages.services.packages.length,
    );
  });

  it("venues items array is the same length", () => {
    expect(en.pages.venues.items.length).toBe(es.pages.venues.items.length);
  });

  it("gallery photos array is the same length", () => {
    expect(en.pages.gallery.photos.length).toBe(es.pages.gallery.photos.length);
  });

  it("contact faq items array is the same length", () => {
    expect(en.pages.contact.faq.items.length).toBe(
      es.pages.contact.faq.items.length,
    );
  });
});

describe("translations completeness", () => {
  function collectStrings(obj: unknown, path = ""): string[] {
    if (typeof obj === "string") return [path];
    if (Array.isArray(obj))
      return obj.flatMap((v, i) => collectStrings(v, `${path}[${i}]`));
    if (typeof obj === "object" && obj !== null) {
      return Object.entries(obj).flatMap(([k, v]) =>
        collectStrings(v, path ? `${path}.${k}` : k),
      );
    }
    return [];
  }

  // 'span' in gallery photos is intentionally '' (means no extra CSS grid spanning)
  const ALLOWED_EMPTY_KEYS = new Set(["span"]);

  it("no empty strings in Spanish translations", () => {
    function check(obj: unknown, path = "", key = "") {
      if (typeof obj === "string" && !ALLOWED_EMPTY_KEYS.has(key))
        expect(obj, `Empty string at es.${path}`).not.toBe("");
      else if (Array.isArray(obj))
        obj.forEach((v, i) => check(v, `${path}[${i}]`));
      else if (typeof obj === "object" && obj !== null)
        Object.entries(obj).forEach(([k, v]) =>
          check(v, path ? `${path}.${k}` : k, k),
        );
    }
    check(es);
  });

  it("no empty strings in English translations", () => {
    function check(obj: unknown, path = "", key = "") {
      if (typeof obj === "string" && !ALLOWED_EMPTY_KEYS.has(key))
        expect(obj, `Empty string at en.${path}`).not.toBe("");
      else if (Array.isArray(obj))
        obj.forEach((v, i) => check(v, `${path}[${i}]`));
      else if (typeof obj === "object" && obj !== null)
        Object.entries(obj).forEach(([k, v]) =>
          check(v, path ? `${path}.${k}` : k, k),
        );
    }
    check(en);
  });

  it("English and Spanish have the same number of translatable strings", () => {
    expect(collectStrings(en).length).toBe(collectStrings(es).length);
  });
});
