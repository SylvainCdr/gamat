import styles from "./style.module.scss";
import Link from "next/link";


function Footer() {
  return (
    <div className={styles["footer-container"]}>
      <div className={styles["section-1"]}>
        <img
          src="/assets/ravina-logo.png"
          alt="Logo Ravina"
         
        />
        <p className={styles.slogan}>
  Ethical Sourcing of Premium Botanicals from Madagascar.
</p>

      </div>

      <div className={styles["section-2"]}>
        <h4>Sitemap </h4>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/centella-asiatica">
            <li>Centella Asiatica</li>
          </Link>
          <Link href="/our-products">
            <li>Our Products</li>
          </Link>
          <Link href="/about">
            <li>About us</li>
          </Link>
          <Link href="/sustainability">
            <li>Sustainability</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>

      <div className={styles["section-3"]}>
        <h4>Contact</h4>
        <ul>
          <li>
            <i className="fa-solid fa-envelope"></i>
            <Link href="contact@ravina.com">contact@ravina.com</Link>
          </li>
          <li>
            <i className="fa-solid fa-phone"></i>(+261) XX XX XX XX
          </li>
          <li>
            <i className="fa-solid fa-location-dot"></i> Talatamaty, Antananarivo, Madagascar
          </li>
          
        
        </ul>
      </div>
      <div className={styles["section-4"]}>
  <h4>Certifications</h4>
  <ul>
    <li>UEBT Member</li>
    <li>Ecocert Organic Certified</li>
    <li>Traceability Verified by FarmForce</li>
     <p className={styles.copyright}>© 2025 Ravina Medicinals | All rights reserved</p>
  </ul>
</div>

    </div>
  );
}

export default Footer;
