import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

// If this object gets too big, move this to an external file
// const resources = {
//   en: {
//     translation: {
//       "Welcome to React": "Welcome to React and react-i18next",
//     },
//   },
//   fr: {
//     translation: {
//       "Welcome to React": "Bienvenue à React et react-i18next",
//     },
//   },
// };

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: "en",
    // debug: true,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    detection: {
      order: ["querystring", "navigator"],
    },
  });

export default i18n;
