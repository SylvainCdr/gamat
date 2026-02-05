import styles from "./style.module.scss";
import Link from "next/link";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Section Logo & Description */}
        <div className={styles.footerBrand}>
          <h3 className={styles.logo}>GAMAT</h3>
          <p className={styles.slogan}>
            Entreprise familiale de bâtiment, tout corps d&apos;état.
          </p>
          <p className={styles.tagline}>Proximité • Sérieux • Qualité</p>
        </div>

        {/* Navigation */}
        <div className={styles.footerNav}>
          <h4>Navigation</h4>
          <ul>
            <li>
              <Link href="/">Accueil</Link>
            </li>
            <li>
              <Link href="/gamat-construction-et-renovation">
                Nos Prestations
              </Link>
            </li>
            <li>
              <Link href="/les-realisations-gamat">Nos Réalisations</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className={styles.footerServices}>
          <h4>Nos Métiers</h4>
          <ul>
            <li>Maçonnerie</li>
            <li>Couverture & Charpente</li>
            <li>Plomberie & Électricité</li>
            <li>Peinture & Isolation</li>
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.footerContact}>
          <h4>Contact</h4>
          <ul>
            <li>
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+33XXXXXXXXX">XX XX XX XX XX</a>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:contact@gamat.fr">contact@gamat.fr</a>
            </li>
            <li>
              <i className="fa-solid fa-location-dot"></i>
              Île-de-France (95, 78, 60)
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.footerBottom}>
        <p>© 2026 GAMAT — Tous droits réservés</p>
        <div className={styles.socialLinks}>
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
