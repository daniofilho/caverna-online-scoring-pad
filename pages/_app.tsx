import { appWithTranslation } from "next-i18next";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Router from "next/router";
import Script from "next/script";

import AppAnimator from "templates/Animator";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "styles/global";

import * as chakrauiTheme from "config/chackraui-color-theme";
import SEO from "config/seo";

Router.events.on("routeChangeStart", () => {
  const { body } = document;
  body.classList.add("loading-page");
});
Router.events.on("routeChangeComplete", () => {
  const { body } = document;
  body.classList.remove("loading-page");
});
Router.events.on("routeChangeError", () => {
  const { body } = document;
  body.classList.remove("loading-page");
});

const MyApp: React.FC<AppProps> = ({ Component, router, pageProps }) => (
  <>
    <DefaultSeo {...SEO()} />

    <ChakraProvider resetCSS={false} theme={chakrauiTheme.theme}>
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <AppAnimator key={router.route}>
          <Component {...pageProps} />
        </AppAnimator>
      </AnimatePresence>
    </ChakraProvider>

    <GlobalStyle />

    <ColorModeScript initialColorMode={chakrauiTheme.config.initialColorMode} />

    <Script
      async
      type="text/javascript"
      src="https://www.googletagmanager.com/gtag/js?id=G-JQQR4Z801Z"
    />
    <Script type="text/javascript" src="/scripts/ga.js" />
  </>
);

export default appWithTranslation(MyApp);
