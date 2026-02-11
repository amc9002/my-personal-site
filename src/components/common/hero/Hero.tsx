// Hero.tsx
import styles from "./Hero.module.css";
import { useLocation } from "react-router-dom";

interface HeroProps {
  label: string;
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ label, title, subtitle }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <section className={`${styles.hero} ${!isHomePage ? styles.heroCompact : ""}`}>
      <div className={styles.overlay}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.textSide}>
              <span className={styles.label}>{label}</span>
              <h1 className={styles.heroTitle}>{title}</h1>
              {isHomePage && <p className={styles.heroSubtitle}>{subtitle}</p>}
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
};

export default Hero;
