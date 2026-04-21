import styles from "./style.module.scss";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>
          Entreprise BTP Île-de-France | Devis Gratuit - GAMAT Construction
          Rénovation
        </title>
        <meta
          name="description"
          content="Artisan BTP familial en Île-de-France (Val-d'Oise 95, Yvelines 78, Oise 60). Maçonnerie, toiture, rénovation complète, isolation. Devis gratuit sous 48h. ☎ 07 59 59 78 98"
        />
        <meta
          name="keywords"
          content="entreprise BTP Île-de-France, maçonnerie 95, rénovation Val-d'Oise, toiture Yvelines, construction Oise, devis gratuit bâtiment, artisan rénovation, GAMAT"
        />
        <meta name="author" content="GAMAT" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sasgamat.fr/" />

        <meta
          property="og:title"
          content="Entreprise BTP Île-de-France | Devis Gratuit - GAMAT"
        />
        <meta
          property="og:description"
          content="Artisan BTP familial en Île-de-France (95, 78, 60). Maçonnerie, toiture, rénovation complète. Devis gratuit sous 48h. ☎ 07 59 59 78 98"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sasgamat.fr/" />
        <meta
          property="og:image"
          content="https://sasgamat.fr/assets/logos/2.png"
        />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="GAMAT" />
      </Head>

      <div className={styles.homeContainer}>
        {/* HERO SECTION */}
        <section className={styles.heroSection}>
          <div className={styles.heroOverlay} />
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
            alt="Chantier GAMAT"
            className={styles.heroImage}
          />
          <div className={styles.heroContent}>
            <span className={styles.heroSubtitle}>
              Entreprise familiale de bâtiment
            </span>
            <h1 className={styles.heroTitle}>
              Bienvenue chez <span className={styles.highlight}>GAMAT</span>
            </h1>
            <p className={styles.heroDescription}>
              Spécialisés dans le bâtiment tout corps d&apos;état, nous
              accompagnons nos clients dans tous leurs projets de construction,
              rénovation ou aménagement. Un savoir-faire transmis de génération
              en génération.
            </p>
            <div className={styles.heroCta}>
              <button
                className={styles.ctaButton}
                onClick={() => router.push("/contact")}
              >
                Demander un devis
              </button>
              <button
                className={styles.ctaButtonSecondary}
                onClick={() => router.push("/les-realisations-gamat")}
              >
                Voir nos réalisations
              </button>
            </div>
          </div>
        </section>

        {/* VALEURS BANDEAU */}
        <section className={styles.valuesBanner}>
          <div className={styles.valuesContent}>
            <span>Proximité</span>
            <span className={styles.separator}>•</span>
            <span>Sérieux</span>
            <span className={styles.separator}>•</span>
            <span>Qualité</span>
            <span className={styles.separator}>•</span>
            <span>Respect des délais</span>
          </div>
        </section>

        {/* NOS MÉTIERS - APERÇU */}
        <section className={styles.servicesPreview}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Ce que nous faisons</span>
            <h2>Nos Métiers</h2>
            <div className={styles.sectionDivider}></div>
            <p>Tout corps d&apos;état pour vos projets</p>
          </div>
          <div className={styles.servicesPreviewGrid}>
            <div className={styles.servicePreviewCard}>
              <div className={styles.servicePreviewIcon}>🏗️</div>
              <h3>Gros Œuvre</h3>
              <p>
                Maçonnerie, couverture, charpente — les fondations solides de
                votre projet.
              </p>
            </div>
            <div className={styles.servicePreviewCard}>
              <div className={styles.servicePreviewIcon}>🔧</div>
              <h3>Second Œuvre</h3>
              <p>
                Menuiserie, plomberie, électricité — l&apos;aménagement de vos
                espaces.
              </p>
            </div>
            <div className={styles.servicePreviewCard}>
              <div className={styles.servicePreviewIcon}>✨</div>
              <h3>Finitions</h3>
              <p>
                Plâtrerie, peinture, isolation — les touches finales qui font la
                différence.
              </p>
            </div>
          </div>
          <div className={styles.servicesPreviewCta}>
            <button
              onClick={() => router.push("/gamat-construction-et-renovation")}
            >
              Découvrir toutes nos prestations
            </button>
          </div>
        </section>

        {/* CHIFFRES CLÉS */}
        <section className={styles.statsSection}>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>15+</span>
              <span className={styles.statLabel}>Années d&apos;expérience</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>Projets réalisés</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Clients satisfaits</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>9</span>
              <span className={styles.statLabel}>Corps de métier</span>
            </div>
          </div>
        </section>

        {/* NOTRE MÉTHODE */}
        <section className={styles.methodSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Comment nous travaillons</span>
            <h2>Notre Méthode</h2>
            <div className={styles.sectionDivider}></div>
            <p>Un accompagnement de A à Z</p>
          </div>
          <div className={styles.methodGrid}>
            <div className={styles.methodStep}>
              <span className={styles.methodNumber}>01</span>
              <h4>Écoute & Conseil</h4>
              <p>
                Nous étudions votre projet et vous conseillons sur les
                meilleures solutions.
              </p>
            </div>
            <div className={styles.methodStep}>
              <span className={styles.methodNumber}>02</span>
              <h4>Devis Détaillé</h4>
              <p>Un devis clair et transparent, sans surprise.</p>
            </div>
            <div className={styles.methodStep}>
              <span className={styles.methodNumber}>03</span>
              <h4>Réalisation</h4>
              <p>Nos équipes qualifiées réalisent vos travaux avec rigueur.</p>
            </div>
            <div className={styles.methodStep}>
              <span className={styles.methodNumber}>04</span>
              <h4>Livraison</h4>
              <p>Réception des travaux et satisfaction garantie.</p>
            </div>
          </div>
        </section>

        {/* RÉALISATIONS */}
        <section className={styles.realisationsSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTagLight}>
              La preuve par l&apos;image
            </span>
            <h2>Nos Réalisations</h2>
            <div className={styles.sectionDividerLight}></div>
            <p>Découvrez en images la qualité de nos travaux</p>
          </div>
          <div className={styles.realisationsGrid}>
            <div className={styles.realisationCard}>
              <img
                src="/assets/img/rea1/2.png"
                alt="Réalisation Butry-sur-Oise"
              />
              <div className={styles.realisationInfo}>
                <h4>Création séjour & cuisine 45m²</h4>
                <span className={styles.location}>Butry-sur-Oise (95)</span>
              </div>
            </div>
            <div className={styles.realisationCard}>
              <img src="/assets/img/rea2/4.png" alt="Réalisation Fleury" />
              <div className={styles.realisationInfo}>
                <h4>Rénovation toiture ~600m²</h4>
                <span className={styles.location}>Fleury (60)</span>
              </div>
            </div>
            <div className={styles.realisationCard}>
              <img src="/assets/img/rea3/2.png" alt="Réalisation Taverny" />
              <div className={styles.realisationInfo}>
                <h4>Rénovation 2 salles de bain</h4>
                <span className={styles.location}>Taverny (95)</span>
              </div>
            </div>
          </div>
          <div className={styles.realisationsCta}>
            <button onClick={() => router.push("/les-realisations-gamat")}>
              Voir toutes nos réalisations
            </button>
          </div>
        </section>

        {/* ZONE D'INTERVENTION */}
        <section className={styles.zoneSection}>
          <div className={styles.zoneContent}>
            <div className={styles.zoneText}>
              <span className={styles.sectionTag}>Où nous trouver</span>
              <h2>Zone d&apos;intervention</h2>
              <div className={styles.sectionDividerLeft}></div>
              <p>
                Nous intervenons principalement en{" "}
                <strong>Île-de-France</strong> (Val-d&apos;Oise, Yvelines, Oise)
                mais restons ouverts à des projets en dehors de ce secteur.
              </p>
              <ul>
                <li>Val-d&apos;Oise (95)</li>
                <li>Yvelines (78)</li>
                <li>Oise (60)</li>
                <li>Et toute l&apos;Île-de-France</li>
              </ul>
            </div>
            <div className={styles.zoneImage}>
              <img
                src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80"
                alt="Île-de-France"
              />
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <span className={styles.ctaTagline}>Prêt à démarrer ?</span>
            <h2>Créez votre maison de rêve</h2>
            <p>
              Confiez-nous votre projet, nous le réalisons avec passion et
              savoir-faire.
            </p>
            <button onClick={() => router.push("/contact")}>
              Contactez-nous
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
