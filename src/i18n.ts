import i18n, { type InitOptions } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const opts: InitOptions = {
  fallbackLng: {
    en: ["ru-RU"],
    default: ["ru-RU"],
  },
  keySeparator: false,
  load: "currentOnly",
  debug: true,
};

void i18n
  // load translation using http -> see /public/locales
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init(opts);

i18n.on("languageChanged", (lng) => {
  document.documentElement.setAttribute("lang", lng.split("-")[0]);
});

export default i18n;
