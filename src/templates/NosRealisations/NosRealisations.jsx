import styles from "./style.module.scss";
import { useRouter } from "next/router";
import Head from "next/head";
import { useState } from "react";

export default function NosRealisations() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState("all");

  const realisations = [
    {
      id: 1,
      title: "Création d'une salle de séjour et d'une cuisine 45m²",
      location: "Butry-sur-Oise (95)",
      category: "renovation",
      description:
        "Rénovation complète avec ouverture des espaces, création d'une cuisine ouverte moderne et aménagement du séjour. Travaux de maçonnerie, plâtrerie, électricité et peinture.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      surface: "45 m²",
    },
    {
      id: 2,
      title: "Rénovation totale de la couverture",
      location: "Fleury (60)",
      category: "toiture",
      description:
        "Réfection complète de la toiture avec remplacement des tuiles, traitement de la charpente, isolation des combles et zinguerie.",
      image:
        "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=800&q=80",
      surface: "~600 m²",
    },
    {
      id: 3,
      title: "Rénovation totale de 2 salles de bain",
      location: "Taverny (95)",
      category: "salle-de-bain",
      description:
        "Démolition, plomberie, carrelage, installation des équipements sanitaires et finitions. Création d'espaces modernes et fonctionnels.",
      image:
        "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80",
      surface: "2 pièces",
    },
    {
      id: 4,
      title: "Extension maison individuelle",
      location: "L'Isle-Adam (95)",
      category: "renovation",
      description:
        "Construction d'une extension de 30m² avec dalle, maçonnerie, toiture et finitions complètes.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      surface: "30 m²",
    },
    {
      id: 5,
      title: "Réfection toiture ardoise",
      location: "Méry-sur-Oise (95)",
      category: "toiture",
      description:
        "Remplacement complet de la couverture en ardoise, révision charpente et isolation.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
      surface: "120 m²",
    },
    {
      id: 6,
      title: "Création salle de bain PMR",
      location: "Auvers-sur-Oise (95)",
      category: "salle-de-bain",
      description:
        "Aménagement d'une salle de bain accessible aux personnes à mobilité réduite avec douche à l'italienne.",
      image:
        "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80",
      surface: "8 m²",
    },
  ];

  const filters = [
    { key: "all", label: "Tous les projets" },
    { key: "renovation", label: "Rénovation" },
    { key: "toiture", label: "Toiture" },
    { key: "salle-de-bain", label: "Salle de bain" },
  ];

  const filteredRealisations =
    activeFilter === "all"
      ? realisations
      : realisations.filter((r) => r.category === activeFilter);

  return (
    <>
      <Head>
        <title>
          Nos Réalisations | GAMAT - Construction & Rénovation en Île-de-France
        </title>
        <meta
          name="description"
          content="Découvrez les réalisations GAMAT en Île-de-France : rénovations, toitures, salles de bain. Projets à Butry-sur-Oise, Fleury, Taverny et environs."
        />
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

        {/* FILTERS */}
        <section className={styles.filterSection}>
          <div className={styles.filterButtons}>
            {filters.map((filter) => (
              <button
                key={filter.key}
                className={`${styles.filterBtn} ${activeFilter === filter.key ? styles.active : ""}`}
                onClick={() => setActiveFilter(filter.key)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        <section className={styles.gallerySection}>
          <div className={styles.galleryGrid}>
            {filteredRealisations.map((realisation) => (
              <div key={realisation.id} className={styles.realisationCard}>
                <div className={styles.cardImageWrapper}>
                  <img src={realisation.image} alt={realisation.title} />
                  <span className={styles.cardSurface}>
                    {realisation.surface}
                  </span>
                </div>
                <div className={styles.cardContent}>
                  <span className={styles.cardLocation}>
                    {realisation.location}
                  </span>
                  <h3>{realisation.title}</h3>
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
              <div className={styles.testimonialStars}>★★★★★</div>
              <p>
                &ldquo;Travail impeccable, équipe sérieuse et respectueuse des
                délais. Je recommande vivement GAMAT pour tous vos
                travaux.&rdquo;
              </p>
              <span className={styles.testimonialAuthor}>
                — M. Dupont, Taverny
              </span>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialStars}>★★★★★</div>
              <p>
                &ldquo;Rénovation complète de notre toiture réalisée avec
                professionnalisme. Le résultat est parfait.&rdquo;
              </p>
              <span className={styles.testimonialAuthor}>
                — Mme Martin, Fleury
              </span>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialStars}>★★★★★</div>
              <p>
                &ldquo;Entreprise familiale à l&apos;écoute. Notre salle de bain
                est magnifique, merci pour votre travail !&rdquo;
              </p>
              <span className={styles.testimonialAuthor}>
                — M. Bernard, Butry-sur-Oise
              </span>
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
