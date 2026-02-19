import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: "be", // Фіксуем мову для тэсту
    fallbackLng: "be",
    ns: ["common", "home", "philosophy", "metodology", "projects", "aboutMe"], // Усе твае прасторы імёнаў 
    defaultNS: "common",
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    interpolation: { escapeValue: false },
    debug: true, // Абавязкова для кансолі
  });

export default i18n;
