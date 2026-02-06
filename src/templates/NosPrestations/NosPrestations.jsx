import styles from "./style.module.scss";
import { useRouter } from "next/router";
import Head from "next/head";

export default function NosPrestations() {
  const router = useRouter();

  const grosOeuvre = [
    {
      title: "Maçonnerie",
      description:
        "Construction de murs, extensions, terrasses, dalles, fondations… GAMAT vous garantit un travail solide et durable.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
      icon: "🧱",
    },
    {
      title: "Couverture",
      description:
        "Réalisation et rénovation de toitures en tuiles, ardoises, zinc. Étanchéité, pose de fenêtres de toit, zinguerie.",
      image:
        "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80",
      icon: "🏠",
    },
    {
      title: "Charpente",
      description:
        "Conception et rénovation de charpentes traditionnelles ou industrielles, en bois massif ou lamellé-collé.",
      image:
        "https://images.unsplash.com/uploads/14123892966835548e7bd/14369636?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "🪵",
    },
  ];

  const secondOeuvre = [
    {
      title: "Menuiserie",
      description:
        "Pose de portes, fenêtres, escaliers, parquets, aménagements intérieurs sur mesure.",
      image:
        "https://images.unsplash.com/photo-1561297331-a9c00b9c2c44?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FycGVudGVyfGVufDB8fDB8fHww",
      icon: "🚪",
    },
    {
      title: "Plomberie",
      description:
        "Création ou rénovation de salles de bain, cuisine, sanitaires. Raccordements, évacuations, dépannage.",
      image:
        "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80",
      icon: "🚿",
    },
    {
      title: "Électricité",
      description:
        "Installation électrique complète, mise aux normes, éclairage intérieur/extérieur, domotique.",
      image:
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80",
      icon: "⚡",
    },
  ];

  const finition = [
    {
      title: "Plâtrerie",
      description:
        "Cloisons, faux plafonds, enduits, création d'espaces fonctionnels et esthétiques.",
      image:
        "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80",
      icon: "🎨",
    },
    {
      title: "Peinture",
      description:
        "Peinture intérieure et extérieure, finitions soignées, harmonie des couleurs, protections adaptées.",
      image:
        "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80",
      icon: "🖌️",
    },
    {
      title: "Isolation",
      description:
        "Isolation thermique et acoustique des murs, combles, sols. Améliorez votre confort et réduisez vos dépenses d'énergie.",
      image:
        "https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?auto=format&fit=crop&w=600&q=80",
      icon: "🏡",
    },
  ];

  return (
    <>
      <Head>
        <title>Nos Prestations - GAMAT</title>
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
      </Head>

      <div className={styles.prestationsContainer}>
        {/* HERO */}
        <section className={styles.heroSection}>
          <div className={styles.heroOverlay} />
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80"
            alt="Nos prestations GAMAT"
            className={styles.heroImage}
          />
          <div className={styles.heroContent}>
            <span className={styles.heroSubtitle}>Tout corps d&apos;état</span>
            <h1>Nos Prestations</h1>
            <p>
              Un savoir-faire complet pour tous vos projets de construction et
              de rénovation.
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className={styles.introSection}>
          <div className={styles.introContent}>
            <h2>Une expertise complète à votre service</h2>
            <p>
              Chez <strong>GAMAT</strong>, nous maîtrisons l&apos;ensemble des
              corps de métier du bâtiment. Du gros œuvre aux finitions, notre
              équipe qualifiée vous accompagne à chaque étape de votre projet.
              Notre approche familiale garantit un suivi personnalisé et une
              qualité irréprochable.
            </p>
          </div>
        </section>

        {/* GROS OEUVRE */}
        <section className={styles.categorySection}>
          <div className={styles.categoryHeader}>
            <span className={styles.categoryNumber}>01</span>
            <h2>Gros Œuvre</h2>
            <p>Les fondations solides de votre projet</p>
          </div>
          <div className={styles.servicesGrid}>
            {grosOeuvre.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceImageWrapper}>
                  <img src={service.image} alt={service.title} />
                  <span className={styles.serviceIcon}>{service.icon}</span>
                </div>
                <div className={styles.serviceContent}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECOND OEUVRE */}
        <section className={styles.categorySection + " " + styles.altBg}>
          <div className={styles.categoryHeader}>
            <span className={styles.categoryNumber}>02</span>
            <h2>Second Œuvre</h2>
            <p>L&apos;aménagement de vos espaces</p>
          </div>
          <div className={styles.servicesGrid}>
            {secondOeuvre.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceImageWrapper}>
                  <img src={service.image} alt={service.title} />
                  <span className={styles.serviceIcon}>{service.icon}</span>
                </div>
                <div className={styles.serviceContent}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FINITION & CONFORT */}
        <section className={styles.categorySection}>
          <div className={styles.categoryHeader}>
            <span className={styles.categoryNumber}>03</span>
            <h2>Finition & Confort</h2>
            <p>Les touches finales qui font la différence</p>
          </div>
          <div className={styles.servicesGrid}>
            {finition.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceImageWrapper}>
                  <img src={service.image} alt={service.title} />
                  <span className={styles.serviceIcon}>{service.icon}</span>
                </div>
                <div className={styles.serviceContent}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* POURQUOI NOUS */}
        <section className={styles.whyUsSection}>
          <div className={styles.whyUsContent}>
            <h2>Pourquoi choisir GAMAT ?</h2>
            <div className={styles.whyUsGrid}>
              <div className={styles.whyUsItem}>
                <span className={styles.whyUsIcon}>👨‍👩‍👧‍👦</span>
                <h3>Entreprise familiale</h3>
                <p>Un savoir-faire transmis de génération en génération</p>
              </div>
              <div className={styles.whyUsItem}>
                <span className={styles.whyUsIcon}>✅</span>
                <h3>Travail soigné</h3>
                <p>Chaque chantier est réalisé avec rigueur et passion</p>
              </div>
              <div className={styles.whyUsItem}>
                <span className={styles.whyUsIcon}>🤝</span>
                <h3>Proximité</h3>
                <p>Un interlocuteur unique pour tout votre projet</p>
              </div>
              <div className={styles.whyUsItem}>
                <span className={styles.whyUsIcon}>⏱️</span>
                <h3>Respect des délais</h3>
                <p>Nous nous engageons sur les dates convenues</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Vous avez un projet ?</h2>
            <p>Contactez-nous pour obtenir un devis gratuit et personnalisé.</p>
            <button onClick={() => router.push("/contact")}>
              Demander un devis
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
