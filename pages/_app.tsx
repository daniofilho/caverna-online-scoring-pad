import { appWithTranslation } from "next-i18next";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";
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
    <Head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />

      <meta id="HandheldFriendly" content="True" />
      <meta id="MobileOptimized" content="320" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
      />
      <meta
        httpEquiv="Cache-Control"
        content="no-cache, no-store, must-revalidate"
      />

      <link
        rel="shortcut icon"
        type="image/png"
        href="/images/logo/favicon.png"
      />
    </Head>

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

    {process.env.NEXT_PUBLIC_ENABLE_GA === "true" && (
      <>
        <Script
          async
          type="text/javascript"
          src="https://www.googletagmanager.com/gtag/js?id=PENDENTE"
        />
        <Script type="text/javascript" src="/scripts/ga.js" />
      </>
    )}
  </>
);

export default appWithTranslation(MyApp);
