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
        <meta
          property="og:image"
          content="https://sasgamat.fr/assets/logos/2.png"
        />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="GAMAT" />

        {/* Favicon */}
        <link rel="icon" href="/assets/logos/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/logos/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/logos/favicon-16x16.png"
        />

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

        {/* Schema.org LocalBusiness - SEO local */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              name: "GAMAT",
              description:
                "Entreprise familiale de construction et rénovation tout corps d'état en Île-de-France. Maçonnerie, toiture, charpente, plomberie, électricité, isolation.",
              url: "https://sasgamat.fr",
              telephone: "+33759597898",
              email: "sasgamat@gmail.com",
              image: "https://sasgamat.fr/assets/logos/2.png",
              priceRange: "€€",
              address: {
                "@type": "PostalAddress",
                addressRegion: "Île-de-France",
                addressCountry: "FR",
              },
              areaServed: [
                { "@type": "AdministrativeArea", name: "Val-d'Oise (95)" },
                { "@type": "AdministrativeArea", name: "Yvelines (78)" },
                { "@type": "AdministrativeArea", name: "Oise (60)" },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Travaux BTP",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Maçonnerie" },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Couverture et toiture",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Charpente" },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Rénovation complète",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Plomberie" },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Électricité" },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Isolation thermique",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Peinture et finitions",
                    },
                  },
                ],
              },
              sameAs: [],
            }),
          }}
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
