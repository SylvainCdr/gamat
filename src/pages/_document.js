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
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        ></link>

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        {/* Google Fonts - Poppins & Droid Serif */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Google Tag Manager */}
      </Head>
      <body>
        {/* Google Tag Manager (noscript) */}

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
