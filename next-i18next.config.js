import { resolve } from "path";

const i18n = {
  i18n: {
    locales: ["pt-BR", "en"],
    defaultLocale: "pt-BR",
    localePath: resolve("./public/locales"),
    reloadOnPrerender: process.env.NODE_ENV === "development",
  },
};

export default i18n;
