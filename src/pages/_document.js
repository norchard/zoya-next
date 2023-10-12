import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="stylesheet" href="https://use.typekit.net/ecb4qte.css" />
      <Script
        src="../node_modules/tw-elements/dist/js/tw-elements.umd.min.js"
        strategy="beforeInteractive"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
