import Head from "next/head";
import styles from "./style.module.scss";

export default function Contact() {
  return (
    <>
      <Head>
        <title>
          Contact RAVINA Medicinals - Premium Centella Asiatica Supplier
          Madagascar
        </title>
        <meta
          name="description"
          content="Contact RAVINA Medicinals for premium Centella Asiatica, essential oils and spices from Madagascar. UEBT certified supplier with HPLC laboratory analysis."
        />
      </Head>

      <div className={styles.contactContainer}>
        {/* Left Column - Image */}
        <div className={styles.leftCol}>
          <img
            className={styles.logo}
            src="/assets/logo-white.png"
            alt="RAVINA Medicinals"
          />
        </div>

        {/* Right Column - Form & Info */}
        <div className={styles.rightCol}>
          <h1>Contact Us</h1>
          <p className={styles.introText}>
            Ready to source premium Centella Asiatica and natural extracts from
            Madagascar? Send us your requirements and we will provide detailed
            specifications and quotations.
          </p>

          <form className={styles.contactForm}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  required
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Company name"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  placeholder="Your country"
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="interest">Products of Interest</label>
              <select id="interest" name="interest">
                <option value="">Select a product category</option>
                <option value="centella">Centella Asiatica</option>
                <option value="essential-oils">Essential Oils</option>
                <option value="spices">Spices and Aromatics</option>
                <option value="multiple">Multiple Products</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Describe your requirements, quantities needed..."
                required
              ></textarea>
            </div>

            <button type="submit" className={styles.submitButton}>
              <span>Send Inquiry</span>
              <span className={styles.buttonIcon}>&#10148;</span>
            </button>
          </form>

          {/* Contact Information */}
          <div className={styles.contactInfo}>
            <div className={styles.contactGrid}>
              <div className={styles.contactItem}>
                <div className={styles.contactLabel}>Email</div>
                <div className={styles.contactValue}>
                  <a href="mailto:contact@ravina-medicinals.com">
                    contact@ravina-medicinals.com
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactLabel}>Phone</div>
                <div className={styles.contactValue}>+261 34 XX XX XX XX</div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactLabel}>Location</div>
                <div className={styles.contactValue}>
                  Antananarivo, Madagascar
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactLabel}>Business Hours</div>
                <div className={styles.contactValue}>
                  Mon - Fri: 8:00 - 17:00
                </div>
              </div>
            </div>

            {/* <div className={styles.certRow}>
              <div className={styles.certBadge}>
                <span className={styles.certIcon}>UEBT</span>
                <span>Certified</span>
              </div>
              <div className={styles.certBadge}>
                <span className={styles.certIcon}>HPLC</span>
                <span>Laboratory</span>
              </div>
              <div className={styles.certBadge}>
                <span className={styles.certIcon}>ISO</span>
                <span>Quality</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
