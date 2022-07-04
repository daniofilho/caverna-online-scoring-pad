const path = require("path");

const i18n = {
  i18n: {
    localeDetection: false,
    locales: ["pt-BR", "en"],
    defaultLocale: "pt-BR",
    localePath: path.resolve("./public/static/locales"),
    reloadOnPrerender: process.env.NODE_ENV === "development",
  },
};

module.exports = i18n;
