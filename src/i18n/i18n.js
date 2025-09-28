import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import your translation files (JSON)
import en from "./locales/en.json";
import ar from "./locales/ar.json";

// i18n configuration
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en }, // English translations
    ar: { translation: ar }, // arabic translations
  },
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language if translation is missing
  interpolation: {
    escapeValue: false, // React already escapes values, so no need to escape
  },
});

export default i18n;
