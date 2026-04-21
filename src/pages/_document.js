// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        {/* Meta Tags for SEO */}
        <meta
          name="description"
          content="GAMAT - Entreprise familiale de construction et rénovation tout corps d'état en Île-de-France (95, 78, 60). Qualité, proximité, respect des délais. Demandez votre devis gratuit !"
        />
        <meta
          name="keywords"
          content="GAMAT, construction, rénovation, bâtiment, maçonnerie, couverture, charpente, menuiserie, plomberie, électricité, plâtrerie, peinture, isolation, Île-de-France, Val-d'Oise, Yvelines, Oise, entreprise familiale, devis gratuit"
        />
        <meta name="author" content="GAMAT" />
        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="GAMAT - Construction & Rénovation en Île-de-France"
        />
        <meta
          property="og:description"
          content="Entreprise familiale spécialisée dans le bâtiment tout corps d'état : construction, rénovation, aménagement. Découvrez nos réalisations et demandez un devis gratuit !"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/logos/2.png" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="GAMAT" />

        {/* Favicon */}
        <link rel="icon" href="/assets/logos/favicon.ico" />

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

        {/* Google Search Console */}
        <meta
          name="google-site-verification"
          content="jZpo6N_pZlnzson2XHCOkAQAkMc2bAglG2w3H6XOVhY"
        />

        {/* Google Analytics GA4 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SKNYZ9PD1R"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SKNYZ9PD1R', { page_path: window.location.pathname });
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
