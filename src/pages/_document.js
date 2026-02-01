// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        {/* Meta Tags for SEO */}

        <meta name="description" content="Ravina" />
        <meta
          name="keywords"
          content="Ravinea, centella asiatica, herbal supplier, madagascar"
        />
        <meta name="author" content="Ravina" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Ravina - Centella Asiatica" />
        <meta property="og:description" content="Ravina - Centella Asiatica" />
        {/* <meta property="og:url" content="https://www.diviniti.tech" /> */}
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="Ravina" />

        {/* Favicon */}
        <link rel="icon" href="" />

        {/*  External Stylesheets */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        />
        <link
          href="https://fonts.cdnfonts.com/css/quicksand"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <link href="https://fonts.cdnfonts.com/css/roboto" rel="stylesheet" />

        <link href="https://fonts.cdnfonts.com/css/poppins" rel="stylesheet" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Head>
      <body>
        {/* Google Tag Manager (noscript) */}

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
