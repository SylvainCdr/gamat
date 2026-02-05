import Head from "next/head";
import styles from "./style.module.scss";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici on pourrait intégrer l'envoi du formulaire
    alert("Merci pour votre message ! Nous vous recontacterons rapidement.");
  };

  return (
    <>
      <Head>
        <title>
          Contact & Devis | GAMAT - Construction & Rénovation en Île-de-France
        </title>
        <meta
          name="description"
          content="Contactez GAMAT pour un devis gratuit. Entreprise de construction et rénovation en Île-de-France (95, 78, 60). Réponse rapide garantie."
        />
      </Head>

      <div className={styles.contactContainer}>
        {/* HERO */}
        <section className={styles.heroSection}>
          <div className={styles.heroOverlay} />
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80"
            alt="Contactez GAMAT"
            className={styles.heroImage}
          />
          <div className={styles.heroContent}>
            <span className={styles.heroSubtitle}>Parlons de votre projet</span>
            <h1>Contactez-nous</h1>
            <p>Obtenez un devis gratuit et personnalisé pour vos travaux.</p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className={styles.mainSection}>
          <div className={styles.mainContent}>
            {/* LEFT - FORM */}
            <div className={styles.formWrapper}>
              <h2>Demande de devis</h2>
              <p className={styles.formIntro}>
                Remplissez le formulaire ci-dessous et nous vous recontacterons
                dans les plus brefs délais.
              </p>

              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Nom complet *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="votre@email.fr"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Téléphone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="06 00 00 00 00"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="location">Localisation du projet *</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      placeholder="Ville, département"
                      value={formData.location}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="projectType">Type de projet *</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Sélectionnez un type de projet</option>
                    <option value="renovation">Rénovation</option>
                    <option value="construction">Construction neuve</option>
                    <option value="toiture">Toiture / Couverture</option>
                    <option value="salle-de-bain">Salle de bain</option>
                    <option value="cuisine">Cuisine</option>
                    <option value="extension">Extension</option>
                    <option value="isolation">Isolation</option>
                    <option value="peinture">Peinture / Finitions</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Décrivez votre projet *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Décrivez-nous votre projet : nature des travaux, surface concernée, délais souhaités..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Envoyer ma demande
                </button>
              </form>
            </div>

            {/* RIGHT - INFO */}
            <div className={styles.infoWrapper}>
              <div className={styles.infoCard}>
                <h3>Coordonnées</h3>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>📞</span>
                  <div>
                    <strong>Téléphone</strong>
                    <a href="tel:+33600000000">06 00 00 00 00</a>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>✉️</span>
                  <div>
                    <strong>Email</strong>
                    <a href="mailto:contact@gamat.fr">contact@gamat.fr</a>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>📍</span>
                  <div>
                    <strong>Zone d&apos;intervention</strong>
                    <p>
                      Île-de-France
                      <br />
                      Val-d&apos;Oise (95), Yvelines (78), Oise (60)
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.infoCard}>
                <h3>Horaires</h3>
                <div className={styles.scheduleItem}>
                  <span>Lundi - Vendredi</span>
                  <span>8h00 - 18h00</span>
                </div>
                <div className={styles.scheduleItem}>
                  <span>Samedi</span>
                  <span>Sur rendez-vous</span>
                </div>
                <div className={styles.scheduleItem}>
                  <span>Dimanche</span>
                  <span>Fermé</span>
                </div>
              </div>

              <div className={styles.infoCard + " " + styles.ctaCard}>
                <h3>Besoin d&apos;une réponse rapide ?</h3>
                <p>Appelez-nous directement pour discuter de votre projet.</p>
                <a href="tel:+33600000000" className={styles.callBtn}>
                  📞 Appeler maintenant
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* MAP SECTION */}
        <section className={styles.mapSection}>
          <div className={styles.mapHeader}>
            <h2>Nous trouver</h2>
            <p>
              Nous intervenons principalement en Île-de-France, mais restons
              ouverts à des projets en dehors de ce secteur.
            </p>
          </div>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.1053462786836!2d2.231493076078023!3d49.06563218610039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e65d000e2ce7c1%3A0x736e41218f127c8f!2sGAMAT!5e0!3m2!1sfr!2sfr!4v1770298984399!5m2!1sfr!2sfr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation GAMAT"
            ></iframe>
          </div>
        </section>

        {/* REASSURANCE */}
        <section className={styles.reassuranceSection}>
          <div className={styles.reassuranceGrid}>
            <div className={styles.reassuranceItem}>
              <span className={styles.reassuranceIcon}>✅</span>
              <h4>Devis gratuit</h4>
              <p>Sans engagement</p>
            </div>
            <div className={styles.reassuranceItem}>
              <span className={styles.reassuranceIcon}>⚡</span>
              <h4>Réponse rapide</h4>
              <p>Sous 24-48h</p>
            </div>
            <div className={styles.reassuranceItem}>
              <span className={styles.reassuranceIcon}>🤝</span>
              <h4>Conseil personnalisé</h4>
              <p>À votre écoute</p>
            </div>
            <div className={styles.reassuranceItem}>
              <span className={styles.reassuranceIcon}>🏆</span>
              <h4>Qualité garantie</h4>
              <p>Travail soigné</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
