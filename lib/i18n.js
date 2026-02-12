import { header as headerRu } from "./translations/ru/header.js";
import { footer as footerRu } from "./translations/ru/footer.js";
import { hero as heroRu } from "./translations/ru/hero.js";
import { opportunities as opportunitiesRu } from "./translations/ru/opportunities.js";
import { advantages as advantagesRu } from "./translations/ru/advantages.js";
import { types as typesRu } from "./translations/ru/types.js";
import { stages as stagesRu } from "./translations/ru/stages.js";
import { speech as speechRu } from "./translations/ru/Speech.js";
import { numbers as numbersRu } from "./translations/ru/numbers.js";
import { clients as clientsRu } from "./translations/ru/clients.js";
import { cases as casesRu } from "./translations/ru/cases.js";
import { reviews as reviewsRu } from "./translations/ru/reviews.js";

import { header as headerEn } from "./translations/en/header.js";
import { footer as footerEn } from "./translations/en/footer.js";
import { hero as heroEn } from "./translations/en/hero.js";
import { opportunities as opportunitiesEn } from "./translations/en/opportunities.js";
import { advantages as advantagesEn } from "./translations/en/advantages.js";
import { types as typesEn } from "./translations/en/types.js";
import { stages as stagesEn } from "./translations/en/stages.js";
import { speech as speechEn } from "./translations/en/Speech.js";
import { numbers as numbersEn } from "./translations/en/numbers.js";
import { clients as clientsEn } from "./translations/en/clients.js";
import { cases as casesEn } from "./translations/en/cases.js";
import { reviews as reviewsEn } from "./translations/en/reviews.js";

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

    stages: stagesRu,
    speech: speechRu,
    numbers: numbersRu,
    clients: clientsRu,
    cases: casesRu,
    reviews: reviewsRu,
    footer: footerRu,
  },
  en: {
    header: headerEn,
    hero: heroEn,
    phone: phone,
    opportunities: opportunitiesEn,
    advantages: advantagesEn,
    types: typesEn,

    stages: stagesEn,
    speech: speechEn,
    numbers: numbersEn,
    clients: clientsEn,
    cases: casesEn,
    reviews: reviewsEn,
    footer: footerEn,
  },
};

export const locales = ["ru", "en"];
export const defaultLocale = "ru";
