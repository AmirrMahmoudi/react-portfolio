import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import homeEN from "@/locales/en/home.json";
import homeFR from "@/locales/fr/home.json";
import homeFA from "@/locales/fa/home.json";
i18n.use(initReactI18next).init({
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
