import { header as headerRu } from "./translations/ru/header.js";
import { footer as footerRu } from "./translations/ru/footer.js";
import { hero as heroRu } from "./translations/ru/hero.js";

import { header as headerEn } from "./translations/en/header.js";
import { footer as footerEn } from "./translations/en/footer.js";
import { hero as heroEn } from "./translations/en/hero.js";

const phone = {
  phone: "+7-777-33-55-776",
  validPhone: "+77773355776",
};

export const translations = {
  ru: {
    header: headerRu,
    hero: heroRu,
    phone: phone,
    footer: footerRu,
  },
  en: {
    header: headerEn,
    hero: heroEn,
    phone: phone,
    footer: footerEn,
  },
};

export const locales = ["ru", "en"];
export const defaultLocale = "ru";
