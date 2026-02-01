import React from "react";
import styles from "./style.module.scss";

const images = [
  "loreal.png",
  "clarins.png",
  "nocibe.png",
  "derma.webp",
  "yves-rocher.png",
  "sephora.png",
  "guerlain.png",
  "vichy.png",

];

export default function CustomersSlider() {
  return (
    <div className={styles.slider}>
      <h1>They trust us (example)</h1>
      <div className={styles.slide_track}>
        {images.map((image, index) => (
          <div className={styles.slide} key={index}>
            <img src={`assets/customers/${image}`} alt="customers slider carousel" />
          </div>
        ))}
      </div>
    </div>
  );
}
