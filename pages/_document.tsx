import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

import { ServerStyleSheet } from "styled-components";

import seo from "config/seo";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<any> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): any {
    return (
      <Html lang="pt-BR">
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
            href="/images/favicon.png"
          />

          {/* Usado pelo next-pwa */}
          <meta name="application-name" content={seo().title} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content={seo().title} />
          <meta name="description" content={seo().description} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-config" content="/pwa/browserconfig.xml" />
          <meta name="msapplication-TileColor" content="#ddcabb" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#000000" />
          <link rel="apple-touch-icon" href="/pwa/touch-icon-iphone.png" />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/pwa/touch-icon-ipad.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/pwa/touch-icon-iphone-retina.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="167x167"
            href="/pwa/touch-icon-ipad-retina.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/pwa/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/pwa/favicon-16x16.png"
          />
          <link rel="manifest" href="/pwa/manifest.json" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content={process.env.NEXT_PUBLIC_SITE_URL} />
          <meta name="twitter:title" content={seo().title} />
          <meta name="twitter:description" content={seo().description} />
          <meta
            name="twitter:image"
            content={`${process.env.NEXT_PUBLIC_SITE_URL}}/pwa/android-chrome-192x192.png`}
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={seo().title} />
          <meta property="og:description" content={seo().description} />
          <meta property="og:site_name" content={seo().title} />
          <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL} />
          <meta
            property="og:image"
            content={`${process.env.NEXT_PUBLIC_SITE_URL}/pwa/apple-touch-icon.png`}
          />
          <link href="/pwa/apple_splash_2048.png" sizes="2048x2732" />
          <link href="/pwa/apple_splash_1668.png" sizes="1668x2224" />
          <link href="/pwa/apple_splash_1536.png" sizes="1536x2048" />
          <link href="/pwa/apple_splash_1125.png" sizes="1125x2436" />
          <link href="/pwa/apple_splash_1242.png" sizes="1242x2208" />
          <link href="/pwa/apple_splash_750.png" sizes="750x1334" />
          <link href="/pwa/apple_splash_640.png" sizes="640x1136" />

          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}