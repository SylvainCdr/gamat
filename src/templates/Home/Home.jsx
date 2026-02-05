import styles from "./style.module.scss";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
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
            rénovation ou aménagement. Un savoir-faire transmis de génération en
            génération.
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

      {/* PRESTATIONS */}
      <section className={styles.servicesSection}>
        <div className={styles.sectionHeader}>
          <h2>Nos Prestations</h2>
          <p>Un savoir-faire complet pour tous vos projets</p>
        </div>

        {/* Gros Oeuvre */}
        <div className={styles.serviceCategory}>
          <h3 className={styles.categoryTitle}>Gros Œuvre</h3>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80"
                alt="Maçonnerie"
              />
              <div className={styles.serviceCardContent}>
                <h4>Maçonnerie</h4>
                <p>
                  Construction de murs, extensions, terrasses, dalles,
                  fondations. GAMAT vous garantit un travail solide et durable.
                </p>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <img
                src="https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80"
                alt="Couverture"
              />
              <div className={styles.serviceCardContent}>
                <h4>Couverture</h4>
                <p>
                  Réalisation et rénovation de toitures en tuiles, ardoises,
                  zinc. Étanchéité, fenêtres de toit, zinguerie.
                </p>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <img
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=600&q=80"
                alt="Charpente"
              />
              <div className={styles.serviceCardContent}>
                <h4>Charpente</h4>
                <p>
                  Conception et rénovation de charpentes traditionnelles ou
                  industrielles, en bois massif ou lamellé-collé.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Oeuvre */}
        <div className={styles.serviceCategory}>
          <h3 className={styles.categoryTitle}>Second Œuvre</h3>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <img
                src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=600&q=80"
                alt="Menuiserie"
              />
              <div className={styles.serviceCardContent}>
                <h4>Menuiserie</h4>
                <p>
                  Pose de portes, fenêtres, escaliers, parquets, aménagements
                  intérieurs sur mesure.
                </p>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <img
                src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80"
                alt="Plomberie"
              />
              <div className={styles.serviceCardContent}>
                <h4>Plomberie</h4>
                <p>
                  Création ou rénovation de salles de bain, cuisine, sanitaires.
                  Raccordements, évacuations, dépannage.
                </p>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80"
                alt="Électricité"
              />
              <div className={styles.serviceCardContent}>
                <h4>Électricité</h4>
                <p>
                  Installation électrique complète, mise aux normes, éclairage
                  intérieur/extérieur, domotique.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Finition & Confort */}
        <div className={styles.serviceCategory}>
          <h3 className={styles.categoryTitle}>Finition & Confort</h3>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <img
                src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80"
                alt="Plâtrerie"
              />
              <div className={styles.serviceCardContent}>
                <h4>Plâtrerie</h4>
                <p>
                  Cloisons, faux plafonds, enduits, création d&apos;espaces
                  fonctionnels et esthétiques.
                </p>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <img
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80"
                alt="Peinture"
              />
              <div className={styles.serviceCardContent}>
                <h4>Peinture</h4>
                <p>
                  Peinture intérieure et extérieure, finitions soignées,
                  harmonie des couleurs, protections adaptées.
                </p>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80"
                alt="Isolation"
              />
              <div className={styles.serviceCardContent}>
                <h4>Isolation</h4>
                <p>
                  Isolation thermique et acoustique des murs, combles, sols.
                  Améliorez votre confort et réduisez vos dépenses
                  d&apos;énergie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RÉALISATIONS */}
      <section className={styles.realisationsSection}>
        <div className={styles.sectionHeader}>
          <h2>Nos Réalisations</h2>
          <p>Découvrez en images la qualité de nos travaux</p>
        </div>
        <div className={styles.realisationsGrid}>
          <div className={styles.realisationCard}>
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
              alt="Réalisation Butry-sur-Oise"
            />
            <div className={styles.realisationInfo}>
              <h4>Création séjour & cuisine 45m²</h4>
              <span className={styles.location}>Butry-sur-Oise (95)</span>
            </div>
          </div>
          <div className={styles.realisationCard}>
            <img
              src="https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=800&q=80"
              alt="Réalisation Fleury"
            />
            <div className={styles.realisationInfo}>
              <h4>Rénovation toiture ~600m²</h4>
              <span className={styles.location}>Fleury (60)</span>
            </div>
          </div>
          <div className={styles.realisationCard}>
            <img
              src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80"
              alt="Réalisation Taverny"
            />
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
            <h2>Zone d&apos;intervention</h2>
            <p>
              Nous intervenons principalement en <strong>Île-de-France</strong>{" "}
              (Val-d&apos;Oise, Yvelines, Oise) mais restons ouverts à des
              projets en dehors de ce secteur.
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
  );
}
