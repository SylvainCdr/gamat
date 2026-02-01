import styles from "./style.module.scss";
import Image from "next/image";
import router from "next/router";

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.hero}>
          <h1>About Ravina Medicinals</h1>
      </div>

      <div className={styles.intro}>
        <div className={styles.introContent}>
          {/* Company History */}

          <section className={styles.history}>
            <div className={styles.history1}>
              <h2>Our History</h2>
              <p>
                  Founded in Madagascar, <strong>Ravina Medicinals</strong> is a leading
                  exporter of medicinal plants, specializing in{" "}
                  <strong>Centella Asiatica</strong>. Our mission is to provide
                  the highest quality Centella Asiatica, rich in bioactive
                  molecules, to customers worldwide. We source our plants from
                  diverse regions across Madagascar, ensuring sustainable and
                  ethical harvesting practices while preserving the natural
                  ecosystem.
              </p>
            </div>
            <div className={styles.history2}>
              <img src="/assets/mg-map.svg" alt="" />
            </div>
          </section>

          {/* Values & Commitments */}
          <section className={styles.values}>
            <h2>Our Values & Commitments</h2>
            <p>
              At <strong>Ravina Medicinals</strong>, we believe in excellence,
              sustainability, and community empowerment. Our commitment extends
              beyond delivering premium Centella Asiatica — we actively support
              the local economy by collaborating with hundreds of harvesters
              across Madagascar. By promoting fair trade and ethical sourcing,
              we contribute to economic growth and environmental preservation.
            </p>
            <p>
              We take pride in our rigorous quality control, ensuring that every
              batch of Centella Asiatica meets the highest international
              standards. Our passion for natural health solutions drives us to
              maintain transparency and integrity in every step of our process.
            </p>
          </section>

          <section className={styles.illustrations}>
            <img
              src="https://images.unsplash.com/photo-1592997572749-3f3e7e9bf05b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fG1hZGFnYXNjYXJ8ZW58MHwwfDB8fHwy"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1504598578017-40d9b776f1bc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1649187642101-6317f194bc1d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </section>
        </div>
       

        {/* Meet the Team */}
        <section className={styles.team}>
          <span className={styles.teamSubtitle}>meet our</span>
          <h2>Team</h2>
          <p className={styles.teamIntro}>
            Our dedicated team combines environmental expertise, operational
            excellence, and deep field experience - working together to deliver
            the highest quality botanicals from Madagascar to the world.
          </p>
          <span className={styles.bgWatermark}>team</span>

          <div className={styles.teamCards}>
            <div className={styles.teamCard}>
              <img src="/assets/team1.png" alt="Ravina leadership team" />
              <div className={styles.teamCardContent}>
                <h3>Leadership</h3>
                <p>Guiding our vision forward</p>
              </div>
            </div>

            <div className={styles.teamCard}>
              <img src="/assets/team4.jpg" alt="Ravina team working together" />
              <div className={styles.teamCardContent}>
                <h3>Field Operations</h3>
                <p>Working with local communities</p>
              </div>
            </div>
            <div className={styles.teamCard}>
              <img src="/assets/team3.jpg" alt="Ravina quality control team" />
              <div className={styles.teamCardContent}>
                <h3>Quality Control</h3>
                <p>Ensuring excellence at every step</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
