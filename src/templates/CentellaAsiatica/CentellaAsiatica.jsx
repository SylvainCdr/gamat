import Image from "next/image";
import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import styles from "./style.module.scss";

export default function CentellaAsiatica() {

  return (
    <>
  

      <div className={styles.centellaContainer}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.overlay} />
          <div className={styles.heroContent}>
            <h1>Centella Asiatica</h1>
            <p>
              Our flagship product — ethically sourced from Madagascar’s rich
              ecosystems and trusted worldwide for its purity and effectiveness.
            </p>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className={styles.introduction}>
          <div className={styles.introductionContent}>
            <div className={styles.text}>
              <h2>About the Plant</h2>
              <p>
                Also known as <strong>Gotu Kola</strong> or{" "}
                <strong>Tiger Grass</strong>, Centella Asiatica is a remarkable
                medicinal herb widely used in the pharmaceutical, cosmetic, and
                wellness industries. RAVINA Medicinals sources wild Centella
                Asiatica ethically from the <strong>Alaotra-Mangoro</strong> and{" "}
                <strong>Atsimo-Atsinanana</strong> regions of Madagascar — areas
                renowned for their natural biodiversity.
              </p>
              <p>
                Our Centella is available in <strong>dried leaves</strong> and{" "}
                <strong>powder form</strong>, harvested and processed following
                strict UEBT standards to ensure consistent quality and
                sustainability.
              </p>
            </div>
            <div className={styles.imageGrid}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/assets/image33.png"
                  alt="Centella Asiatica plant"
                  width={500}
                  height={350}
                />
              </div>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/assets/image44.png"
                  alt="Centella leaves"
                  width={500}
                  height={350}
                />
              </div>
            </div>
          </div>
        </section>

      
      </div>
    </>
  );
}
