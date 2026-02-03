import { header as headerRu } from "./translations/ru/header.js";
import { header as headerEn } from "./translations/en/header.js";

export const translations = {
  ru: {
    header: headerRu,
  },
  en: {
    header: headerEn,
  },
};

export const locales = ["ru", "en"];
export const defaultLocale = "ru";
