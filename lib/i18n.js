import { header as headerRu } from "./translations/ru/header.js";
import { header as headerEn } from "./translations/en/header.js";

const phone = {
  phone: "+7-777-33-55-776",
  validPhone: "+77773355776",
};

export const translations = {
  ru: {
    header: headerRu,
    phone: phone,
  },
  en: {
    header: headerEn,
    phone: phone,
  },
};

export const locales = ["ru", "en"];
export const defaultLocale = "ru";
