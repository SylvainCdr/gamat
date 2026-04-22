import Head from "next/head";
import styles from "./style.module.scss";

export default function MentionsLegales() {
  return (
    <>
      <Head>
        <title>Mentions Légales — GAMAT</title>
        <meta
          name="description"
          content="Mentions légales de GAMAT, société par actions simplifiée unipersonnelle (SASU) spécialisée dans les travaux de charpente, couverture et rénovation en Île-de-France."
        />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://sasgamat.fr/mentions-legales" />
      </Head>

      <main className={styles.container}>
        <div className={styles.hero}>
          <h1>Mentions Légales</h1>
          <p>Dernière mise à jour : 22 avril 2026</p>
        </div>

        <div className={styles.content}>
          {/* Éditeur */}
          <section className={styles.section}>
            <h2>1. Éditeur du site</h2>
            <table className={styles.table}>
              <tbody>
                <tr>
                  <th>Raison sociale</th>
                  <td>GAMAT</td>
                </tr>
                <tr>
                  <th>Forme juridique</th>
                  <td>SASU — Société par Actions Simplifiée Unipersonnelle</td>
                </tr>
                <tr>
                  <th>Siège social</th>
                  <td>4 Rue Patouillard Demoriane, 95840 Villiers-Adam</td>
                </tr>
                <tr>
                  <th>SIREN</th>
                  <td>931 071 419</td>
                </tr>
                <tr>
                  <th>SIRET (siège)</th>
                  <td>931 071 419 00010</td>
                </tr>
                <tr>
                  <th>Numéro de TVA intracommunautaire</th>
                  <td>FR38931071419</td>
                </tr>
                <tr>
                  <th>Capital social</th>
                  <td>1 000,00 €</td>
                </tr>
                <tr>
                  <th>Inscription RCS</th>
                  <td>931 071 419 R.C.S. Pontoise (inscrit le 18/07/2024)</td>
                </tr>
                <tr>
                  <th>Date de création</th>
                  <td>09/07/2024</td>
                </tr>
                <tr>
                  <th>Code NAF / APE</th>
                  <td>43.91A — Travaux de charpente</td>
                </tr>
                <tr>
                  <th>Activité principale</th>
                  <td>
                    Tous travaux de charpente, couverture, zinguerie, maçonnerie
                    générale et étanchéité
                  </td>
                </tr>
                <tr>
                  <th>Téléphone</th>
                  <td>
                    <a href="tel:+33759597898">07 59 59 78 98</a>
                  </td>
                </tr>
                <tr>
                  <th>E-mail</th>
                  <td>
                    <a href="mailto:sasgamat@gmail.com">sasgamat@gmail.com</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Directeur de publication */}
          <section className={styles.section}>
            <h2>2. Directeur de la publication</h2>
            <p>Govin Ashley, Président de GAMAT.</p>
          </section>

          {/* Hébergement */}
          <section className={styles.section}>
            <h2>3. Hébergement</h2>
            <table className={styles.table}>
              <tbody>
                <tr>
                  <th>Hébergeur</th>
                  <td>Google LLC — Firebase Hosting</td>
                </tr>
                <tr>
                  <th>Adresse</th>
                  <td>
                    1600 Amphitheatre Parkway, Mountain View, CA 94043,
                    États-Unis
                  </td>
                </tr>
                <tr>
                  <th>Site web</th>
                  <td>
                    <a
                      href="https://firebase.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      firebase.google.com
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Propriété intellectuelle */}
          <section className={styles.section}>
            <h2>4. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, vidéos,
              logos) est la propriété exclusive de GAMAT ou de ses partenaires,
              et est protégé par les lois françaises et internationales
              relatives à la propriété intellectuelle. Toute reproduction,
              distribution ou utilisation sans autorisation écrite préalable est
              strictement interdite.
            </p>
          </section>

          {/* Données personnelles */}
          <section className={styles.section}>
            <h2>5. Données personnelles (RGPD)</h2>
            <p>
              Les informations recueillies via le formulaire de contact (nom,
              e-mail, téléphone, message) sont utilisées exclusivement pour
              répondre à vos demandes et ne sont jamais transmises à des tiers.
            </p>
            <p>
              Conformément au Règlement Général sur la Protection des Données
              (RGPD — UE 2016/679) et à la loi Informatique et Libertés, vous
              disposez d&apos;un droit d&apos;accès, de rectification,
              d&apos;effacement et d&apos;opposition sur vos données. Pour
              exercer ces droits, contactez-nous à{" "}
              <a href="mailto:sasgamat@gmail.com">sasgamat@gmail.com</a>.
            </p>
          </section>

          {/* Cookies */}
          <section className={styles.section}>
            <h2>6. Cookies</h2>
            <p>
              Ce site peut utiliser des cookies techniques nécessaires à son bon
              fonctionnement. Aucun cookie publicitaire ou de traçage tiers
              n&apos;est déposé sans votre consentement.
            </p>
          </section>

          {/* Liens externes */}
          <section className={styles.section}>
            <h2>7. Liens hypertextes</h2>
            <p>
              GAMAT ne peut être tenu responsable du contenu des sites externes
              vers lesquels des liens pourraient pointer depuis ce site.
            </p>
          </section>

          {/* Droit applicable */}
          <section className={styles.section}>
            <h2>8. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont régies par le droit français.
              En cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
