import { translations } from "./translations";

export { translations };
export type Lang = keyof typeof translations;
export type PageKey =
  "home" | "about" | "services" | "venues" | "gallery" | "contact";

export const routes: Record<Lang, Record<PageKey, string>> = {
  es: {
    home: "/",
    about: "/nosotros",
    services: "/servicios",
    venues: "/locaciones",
    gallery: "/galeria",
    contact: "/contacto",
  },
  en: {
    home: "/en",
    about: "/en/about",
    services: "/en/services",
    venues: "/en/venues",
    gallery: "/en/gallery",
    contact: "/en/contact",
  },
};

export function getLang(pathname: string): Lang {
  return pathname.startsWith("/en") ? "en" : "es";
}

export function getPageKey(pathname: string): PageKey {
  const p = pathname.replace(/\/$/, "");
  if (p === "/" || p === "/en" || p === "") return "home";
  if (p === "/nosotros" || p === "/en/about") return "about";
  if (p === "/servicios" || p === "/en/services") return "services";
  if (p === "/locaciones" || p === "/en/venues") return "venues";
  if (p === "/galeria" || p === "/en/gallery") return "gallery";
  if (p === "/contacto" || p === "/en/contact") return "contact";
  return "home";
}

export function useTranslations(lang: Lang) {
  return translations[lang];
}
