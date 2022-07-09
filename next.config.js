/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require("next-pwa");

const { i18n } = require("./next-i18next.config.js");

const moduleExports = {
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    swSrc: "service-worker.js",
  },

  i18n,
  optimizeFonts: false,

  images: {
    disableStaticImages: true, // corrige um bug no nextjs11 para permitir importar svg
  },
};

module.exports = withPWA(moduleExports);
