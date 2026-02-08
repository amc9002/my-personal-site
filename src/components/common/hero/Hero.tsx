// Hero.tsx
import styles from "./Hero.module.css";
import { useLocation } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <section
      className={`${styles.hero} ${!isHomePage ? styles.heroCompact : ""}`}
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
};

export default Hero;
