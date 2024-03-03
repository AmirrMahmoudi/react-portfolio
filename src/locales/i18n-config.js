import i18n from "i18next";
import homeEN from "@/locales/en/home.json";
import homeFR from "@/locales/fr/home.json";
import homeFA from "@/locales/fa/home.json";

import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      fa: {
        home: homeFA,
      },
      en: {
        home: homeEN,
      },
      fr: {
        home: homeFR,
      },
    },
    fallbackLng: "en",
  });
