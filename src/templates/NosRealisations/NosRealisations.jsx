import styles from "./style.module.scss";
import { useRouter } from "next/router";
import Head from "next/head";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function NosRealisations() {
  const router = useRouter();
  // 3 réalisations réelles
  const realisations = [
    {
      id: 1,
      title: "Création d'une salle de séjour et d'une cuisine 45m²",
      location: "BUTRY-SUR-OISE - 95",
      surface: "45 m²",
      description:
        "Rénovation complète avec ouverture des espaces, création d'une cuisine ouverte moderne et aménagement du séjour.",
      images: [
        "/assets/img/rea1/1.png",
        "/assets/img/rea1/2.png",
        "/assets/img/rea1/3.png",
        "/assets/img/rea1/4.png",
        "/assets/img/rea1/5.png",
        // "/assets/img/rea1/6.png",
      ],
    },
    {
      id: 2,
      title: "Rénovation totale de la couverture",
      location: "FLEURY - 60",
      surface: "~600 m²",
      description:
        "Réfection complète de la toiture avec remplacement des tuiles, traitement de la charpente, isolation des combles et zinguerie.",
      images: [
        "/assets/img/rea2/1.png",
        "/assets/img/rea2/2.png",
        "/assets/img/rea2/3.jpg",
        "/assets/img/rea2/4.png",
        "/assets/img/rea2/5.jpg",
      ],
    },
    {
      id: 3,
      title: "Rénovation totale de 2 salles de bain",
      location: "TAVERNY - 95",
      surface: "2 pièces",
      description:
        "Démolition, plomberie, carrelage, installation des équipements sanitaires et finitions. Création d'espaces modernes et fonctionnels.",
      images: [
        "/assets/img/rea3/1.png",
        "/assets/img/rea3/2.png",
        "/assets/img/rea3/4.png",
        "/assets/img/rea3/5.png",
      ],
    },
  ];

  // Slider settings for react-slick
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    pauseOnHover: true,
    adaptiveHeight: true,
  };

  return (
    <>
      <Head>
        <title>
          Nos Réalisations | GAMAT - Construction & Rénovation en Île-de-France
        </title>
        <meta
          name="description"
          content="Découvrez nos réalisations en construction et rénovation tout corps d'état en Île-de-France (95, 78, 60). Projets de qualité, du gros œuvre aux finitions. Demandez votre devis gratuit !"
        />
        <meta
          name="keywords"
          content="GAMAT, réalisations, projets, construction, rénovation, bâtiment, maçonnerie, couverture, charpente, menuiserie, plomberie, électricité, plâtrerie, peinture, isolation, Île-de-France, Val-d'Oise, Yvelines, Oise"
        />
        <meta name="author" content="GAMAT" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://sasgamat.fr/les-realisations-gamat"
        />
        <meta
          property="og:title"
          content="Nos Réalisations | GAMAT - Construction & Rénovation en Île-de-France"
        />
        <meta
          property="og:description"
          content="Découvrez nos chantiers réalisés en Île-de-France (95, 78, 60) : rénovation salle de bain, toiture, maçonnerie. Photos avant/après et témoignages clients."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://sasgamat.fr/les-realisations-gamat"
        />
        <meta
          property="og:image"
          content="https://sasgamat.fr/assets/logos/2.png"
        />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="GAMAT" />
      </Head>

      <div className={styles.realisationsContainer}>
        {/* HERO */}
        <section className={styles.heroSection}>
          <div className={styles.heroOverlay} />
          <img
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1920&q=80"
            alt="Nos réalisations GAMAT"
            className={styles.heroImage}
          />
          <div className={styles.heroContent}>
            <span className={styles.heroSubtitle}>
              La preuve par l&apos;image
            </span>
            <h1>Nos Réalisations</h1>
            <p>
              Découvrez en images la qualité de nos travaux, du gros œuvre aux
              finitions.
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className={styles.introSection}>
          <div className={styles.introContent}>
            <h2>Des projets réalisés avec passion</h2>
            <p>
              Chaque chantier est unique et mérite une attention particulière.
              Voici quelques exemples de nos réalisations en{" "}
              <strong>Val-d&apos;Oise (95)</strong>,<strong> Oise (60)</strong>{" "}
              et <strong>Yvelines (78)</strong>. Ces projets témoignent de notre
              savoir-faire et de notre engagement qualité.
            </p>
          </div>
        </section>

        {/* REALISATIONS SLIDERS */}
        <section className={styles.gallerySection}>
          <div className={styles.galleryGrid}>
            {realisations.map((realisation) => (
              <div key={realisation.id} className={styles.realisationCard}>
                <div className={styles.cardSliderWrapper}>
                  <Slider {...sliderSettings}>
                    {realisation.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={realisation.title + " image " + (i + 1)}
                        className={styles.sliderImage}
                      />
                    ))}
                  </Slider>
                </div>
                <div className={styles.cardContent}>
                  <span className={styles.cardLocation}>
                    {realisation.location}
                  </span>
                  <h3>{realisation.title}</h3>
                  <span className={styles.cardSurface}>
                    {realisation.surface}
                  </span>
                  <p>{realisation.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* STATS */}
        <section className={styles.statsSection}>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>Projets réalisés</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Clients satisfaits</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>15+</span>
              <span className={styles.statLabel}>Années d&apos;expérience</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>95/78/60</span>
              <span className={styles.statLabel}>Départements couverts</span>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className={styles.testimonialsSection}>
          <div className={styles.sectionHeader}>
            <h2>Ils nous ont fait confiance</h2>
            <p>Découvrez ce qu&apos;ils pensent de notre travail</p>
          </div>
          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonialCard}>
              <span className={styles.quoteIcon}>&ldquo;</span>
              <div className={styles.testimonialStars}>★★★★★</div>
              <p>
                Très bonne expérience avec des artisans très sérieux et pour une
                fois très professionnel qui tiennent leurs paroles et
                engagements !!!! Je recommande fortement !!!!
              </p>
              <div className={styles.testimonialFooter}>
                <div className={styles.testimonialAvatar}>TM</div>
                <div className={styles.testimonialMeta}>
                  <span className={styles.testimonialAuthor}>Thibaud M.</span>
                  <span className={styles.testimonialSource}>
                    <span className={styles.googleG}>
                      <span className={styles.gBlue}>G</span>
                      <span className={styles.gRed}>o</span>
                      <span className={styles.gYellow}>o</span>
                      <span className={styles.gBlue}>g</span>
                      <span className={styles.gGreen}>l</span>
                      <span className={styles.gRed}>e</span>
                    </span>
                    Avis vérifié
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <span className={styles.quoteIcon}>&ldquo;</span>
              <div className={styles.testimonialStars}>★★★★★</div>
              <p>
                Equipe très compétente et respectueuse. Du sérieux et de la
                minutie. A l&apos;écoute des besoins du client. Rendez-vous
                respecté pour l&apos;isolation de ma toiture. Très belle
                réactivité sur les nombreux échanges.
              </p>
              <div className={styles.testimonialFooter}>
                <div className={styles.testimonialAvatar}>CA</div>
                <div className={styles.testimonialMeta}>
                  <span className={styles.testimonialAuthor}>Cedric A.</span>
                  <span className={styles.testimonialSource}>
                    <span className={styles.googleG}>
                      <span className={styles.gBlue}>G</span>
                      <span className={styles.gRed}>o</span>
                      <span className={styles.gYellow}>o</span>
                      <span className={styles.gBlue}>g</span>
                      <span className={styles.gGreen}>l</span>
                      <span className={styles.gRed}>e</span>
                    </span>
                    Avis vérifié
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <span className={styles.quoteIcon}>&ldquo;</span>
              <div className={styles.testimonialStars}>★★★★★</div>
              <p>
                Merci à toute l&apos;équipe de GAMAT pour la rénovation de ma
                toiture, super pro et ponctuel. À bientôt pour les travaux de
                maçonnerie, changement de portail et rénovation de la façade.
                Super boulot, bravo !
              </p>
              <div className={styles.testimonialFooter}>
                <div className={styles.testimonialAvatar}>LV</div>
                <div className={styles.testimonialMeta}>
                  <span className={styles.testimonialAuthor}>Laurent V.</span>
                  <span className={styles.testimonialSource}>
                    <span className={styles.googleG}>
                      <span className={styles.gBlue}>G</span>
                      <span className={styles.gRed}>o</span>
                      <span className={styles.gYellow}>o</span>
                      <span className={styles.gBlue}>g</span>
                      <span className={styles.gGreen}>l</span>
                      <span className={styles.gRed}>e</span>
                    </span>
                    Avis vérifié
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Votre projet est le prochain ?</h2>
            <p>
              Contactez-nous pour discuter de votre projet et obtenir un devis
              gratuit.
            </p>
            <button onClick={() => router.push("/contact")}>
              Demander un devis
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
