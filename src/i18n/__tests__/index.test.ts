import { describe, it, expect } from "vitest";
import {
  getLang,
  getPageKey,
  routes,
  useTranslations,
  type PageKey,
} from "../index";

describe("getLang", () => {
  it("returns en for /en and all /en/* paths", () => {
    expect(getLang("/en")).toBe("en");
    expect(getLang("/en/about")).toBe("en");
    expect(getLang("/en/services")).toBe("en");
    expect(getLang("/en/venues")).toBe("en");
    expect(getLang("/en/gallery")).toBe("en");
    expect(getLang("/en/contact")).toBe("en");
  });

  it("returns es for root and all Spanish paths", () => {
    expect(getLang("/")).toBe("es");
    expect(getLang("/nosotros")).toBe("es");
    expect(getLang("/servicios")).toBe("es");
    expect(getLang("/locaciones")).toBe("es");
    expect(getLang("/galeria")).toBe("es");
    expect(getLang("/contacto")).toBe("es");
  });
});

describe("getPageKey", () => {
  it("maps Spanish URLs correctly", () => {
    expect(getPageKey("/")).toBe("home");
    expect(getPageKey("/nosotros")).toBe("about");
    expect(getPageKey("/servicios")).toBe("services");
    expect(getPageKey("/locaciones")).toBe("venues");
    expect(getPageKey("/galeria")).toBe("gallery");
    expect(getPageKey("/contacto")).toBe("contact");
  });

  it("maps English URLs correctly", () => {
    expect(getPageKey("/en")).toBe("home");
    expect(getPageKey("/en/about")).toBe("about");
    expect(getPageKey("/en/services")).toBe("services");
    expect(getPageKey("/en/venues")).toBe("venues");
    expect(getPageKey("/en/gallery")).toBe("gallery");
    expect(getPageKey("/en/contact")).toBe("contact");
  });

  it("strips trailing slashes", () => {
    expect(getPageKey("/nosotros/")).toBe("about");
    expect(getPageKey("/en/about/")).toBe("about");
    expect(getPageKey("/en/")).toBe("home");
  });

  it("defaults to home for unknown paths", () => {
    expect(getPageKey("/unknown")).toBe("home");
    expect(getPageKey("")).toBe("home");
  });
});

describe("routes", () => {
  const pageKeys: PageKey[] = [
    "home",
    "about",
    "services",
    "venues",
    "gallery",
    "contact",
  ];

  it("defines all page keys for both locales", () => {
    for (const key of pageKeys) {
      expect(routes.es[key]).toBeDefined();
      expect(routes.en[key]).toBeDefined();
    }
  });

  it("Spanish home is /", () => {
    expect(routes.es.home).toBe("/");
  });

  it("all English routes start with /en", () => {
    for (const url of Object.values(routes.en)) {
      expect(url).toMatch(/^\/en/);
    }
  });

  it("Spanish routes do not start with /en", () => {
    for (const url of Object.values(routes.es)) {
      expect(url).not.toMatch(/^\/en/);
    }
  });

  it("language switcher round-trips correctly", () => {
    for (const key of pageKeys) {
      // Going es → en → back to es via getPageKey should resolve to the same key
      const enUrl = routes.en[key];
      expect(getPageKey(enUrl)).toBe(key);

      const esUrl = routes.es[key];
      expect(getPageKey(esUrl)).toBe(key);
    }
  });
});

describe("useTranslations", () => {
  it("returns Spanish nav labels for es", () => {
    const t = useTranslations("es");
    expect(t.nav.home).toBe("Inicio");
    expect(t.nav.about).toBe("Nosotros");
    expect(t.nav.contact).toBe("Contacto");
  });

  it("returns English nav labels for en", () => {
    const t = useTranslations("en");
    expect(t.nav.home).toBe("Home");
    expect(t.nav.about).toBe("About");
    expect(t.nav.contact).toBe("Contact");
  });

  it("Spanish CTA title is Platiquemos", () => {
    expect(useTranslations("es").cta.title).toBe("Platiquemos");
  });

  it("English CTA title is Let's Talk", () => {
    expect(useTranslations("en").cta.title).toBe("Let's Talk");
  });
});
