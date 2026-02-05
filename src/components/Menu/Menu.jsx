import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredMenuItem, setHoveredMenuItem] = useState(null);
  const menuOverlayRef = useRef(null);
  const pageContentRef = useRef(null);

  // Menu items with corresponding background images
  const menuItems = [
    {
      name: "Accueil",
      href: "/",
      bgImage:
        "https://images.unsplash.com/photo-1610056868457-e61d6f9eeb86?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Nos Prestations",
      href: "/gamat-construction-et-renovation",
      bgImage:
        "https://images.unsplash.com/photo-1595844730298-b960ff98fee0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Réalisations",
      href: "/les-realisations-gamat",
      bgImage: "/assets/img/roof.avif",
    },
    {
      name: "Contact",
      href: "/contact",
      bgImage:
        "https://images.unsplash.com/photo-1649297711202-27e7535bd6fa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGhhbmRzaGFrZXxlbnwwfDB8MHx8fDI%3D",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemHover = (index) => {
    setHoveredMenuItem(index);
  };

  const handleMenuItemLeave = () => {
    setHoveredMenuItem(null);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
    setHoveredMenuItem(null);
  };

  return (
    <div className={styles.container}>
      {/* Menu Overlay */}
      <div
        className={`${styles.menuOverlay} ${isMenuOpen ? styles.menuOpen : ""}`}
      >
        {/* Background Images Container */}
        <div className={styles.menuBgContainer}>
          {/* Default background */}
          <div
            className={`${styles.menuBgImg} ${
              hoveredMenuItem === null ? styles.active : ""
            }`}
          >
            {/* <img
              src="https://images.unsplash.com/photo-1558437753-21dc69d8ebed?q=80&w=2940&auto=format&fit=crop"
              alt="RAVINA Madagascar"
            /> */}
            <video autoPlay loop muted className={styles.videoBackground}>
              <source src="/assets/video/video2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Menu item backgrounds */}
          {menuItems.map((item, index) => (
            <div
              key={`bg-${index}`}
              className={`${styles.menuBgImg} ${
                hoveredMenuItem === index ? styles.active : ""
              }`}
            >
              <img src={item.bgImage} alt={item.name} />
            </div>
          ))}
        </div>

        {/* Menu Content */}
        <div className={styles.menuContent}>
          <div className={styles.menuLinks}>
            {/* Close Button */}
            <button
              className={styles.closeButton}
              onClick={toggleMenu}
              aria-label="Fermer le menu"
            >
              <span></span>
              <span></span>
            </button>

            {/* Main Menu */}
            <div className={styles.menuMain}>
              <ul>
                {menuItems.map((item, index) => (
                  <li
                    key={item.name}
                    onMouseEnter={() => handleMenuItemHover(index)}
                    onMouseLeave={handleMenuItemLeave}
                  >
                    <Link
                      href={item.href}
                      onClick={handleMenuItemClick}
                      data-text-anim
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links
            <div className={styles.menuSocials}>
              <p>Follow RAVINA Medicinals</p>
              <ul>
                <li>
                  <a href="#" target="_blank">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    Facebook
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>

      {/* Header */}
      <nav className={styles.navbar}>
        <div className={styles.menuBar}>
          {/* Logo */}
          <div className={styles.logoWrapper}>
            <Link href="/">
              <Image
                src="/assets/logos/22.png"
                alt="RAVINA Medicinals - Premium Centella Asiatica from Madagascar"
                width={150}
                height={30}
              />
            </Link>
          </div>

          {/* Menu Toggle Button */}
          <div
            className={`${styles.menuToggle} ${isMenuOpen ? styles.open : ""}`}
            onClick={toggleMenu}
            id="menu-toggle"
          >
            <span className={styles.toggleLineTop}></span>
            <span className={styles.toggleLineBottom}></span>
          </div>

          {/* CTA Button */}
          <Link href="/contact" className={`${styles.navbarBtn} ${styles.btn}`}>
            <span className={styles.btnTxt}>NOUS CONTACTER</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="14"
              fill="none"
            >
              <path
                fill="currentColor"
                d="m17.76 6.857-5.727-5.688a.821.821 0 0 0-1.147.01.81.81 0 0 0-.01 1.139l4.33 4.3H.819a.821.821 0 0 0-.578.238.81.81 0 0 0 .578 1.388h14.389l-4.33 4.3a.813.813 0 0 0-.19.892.813.813 0 0 0 .765.505.824.824 0 0 0 .581-.248l5.727-5.688a.81.81 0 0 0 0-1.148Z"
              />
            </svg>
          </Link>
        </div>
      </nav>
    </div>
  );
}
