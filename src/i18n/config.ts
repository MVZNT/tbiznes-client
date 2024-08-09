// i18n.ts
import i18n from "i18next";
import {initReactI18next} from "react-i18next";

// language jsons
import uzTranslations from "./langs/uz.json";
import ruTranslations from "./langs/ru.json";

const storedLang = localStorage.getItem("lang");

i18n
    .use(initReactI18next)
    .init({
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        resources: {
            uz: {
                translation: uzTranslations,
            },
            ru: {
                translation: ruTranslations,
            },
        },
        fallbackLng: storedLang || "ru",
    });

export default i18n;