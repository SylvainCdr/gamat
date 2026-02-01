import styles from "./style.module.scss";
import CustomersSlider from "@/components/customersSlider/customersSlider";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.homeContainer}>
      {/* HERO SECTION */}

      <div className={styles.hero1}>
        {/* // video hero background */}
        <video autoPlay loop muted className={styles.videoBackground}>
          <source src="/assets/gotuVid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className={styles.hero}>
          <div className={styles.overlay} />
          <div className={styles.content}>
            <div className={styles.contentLeft}>
              <h1 className={styles.title}>
                Supplier of Centella asiatica & Medicinal Plants from Madagascar
              </h1>
              <p className={styles.description}>
                Ravina Medicinals is one of the leading suppliers and exporters
                of raw botanicals and natural ingredients from Madagascar. We
                provide responsibly sourced Centella asiatica and medicinal
                plants for the cosmetics, pharmaceutical, and nutraceutical
                industries.
              </p>
              <button
                className={styles.ctaButton}
                onClick={() => router.push("/centella-asiatica")}
              >
                Discover Our Supply Chains
              </button>
            </div>
            <div className={styles.contentRight}>
              <img src="assets/mg2.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* PARTNERS */}
      {/* <CustomersSlider /> */}
    </div>
  );
}
