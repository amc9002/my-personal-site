// Hero.tsx
import styles from "./Hero.module.css";
import heroImg from "../../../../assets/hero-background.png";

// import myPhoto from "../../../../assets/my-photo.png"; // Дадай сваё фота ў assets

const Hero = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <section
    className={styles.hero}
    style={{ backgroundImage: `url(${heroImg})` }}
  >
    <div className={styles.overlay}>
      <div className={styles.heroContent}>
        <div className={styles.textSide}>
          <h1 className={styles.heroTitle}>{title}</h1>
          <p className={styles.heroSubtitle}>{subtitle}</p>
        </div>
        {/* <div className={styles.photoSide}>
          <img src={myPhoto} alt="Andrej Cieraškoŭ" className={styles.photo} />
        </div> */}
      </div>
    </div>
  </section>
);

export default Hero;
