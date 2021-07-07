import i18n from "i18next";

import { initReactI18next } from "react-i18next";

import translationAZ from "./locales/az/translationAZ.json";
import translationEN from "./locales/en/translationEN.json";
import translationRU from "./locales/ru/translationRU.json";

const resources = {
    az: {
        translation: translationAZ,
    },
    en: {
        translation: translationEN,
    },
    ru: {
        translation: translationRU,
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "az",

    keySeparator: false,

    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
