import { header as headerRu } from "./translations/ru/header.js";
import { footer as footerRu } from "./translations/ru/footer.js";
import { hero as heroRu } from "./translations/ru/hero.js";
import { opportunities as opportunitiesRu } from "./translations/ru/opportunities.js";
import { advantages as advantagesRu } from "./translations/ru/advantages.js";
import { types as typesRu } from "./translations/ru/types.js";

import { header as headerEn } from "./translations/en/header.js";
import { footer as footerEn } from "./translations/en/footer.js";
import { hero as heroEn } from "./translations/en/hero.js";
import { opportunities as opportunitiesEn } from "./translations/en/opportunities.js";
import { advantages as advantagesEn } from "./translations/en/advantages.js";
import { types as typesEn } from "./translations/en/types.js";

const phone = {
  phone: "+7-777-33-55-776",
  validPhone: "+77773355776",
};

export const translations = {
  ru: {
    header: headerRu,
    hero: heroRu,
    phone: phone,
    opportunities: opportunitiesRu,
    advantages: advantagesRu,
    types: typesRu,
    footer: footerRu,
  },
  en: {
    header: headerEn,
    hero: heroEn,
    phone: phone,
    opportunities: opportunitiesEn,
    advantages: advantagesEn,
    types: typesEn,
    footer: footerEn,
  },
};

export const locales = ["ru", "en"];
export const defaultLocale = "ru";
