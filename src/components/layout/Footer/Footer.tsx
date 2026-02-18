import styles from "./Footer.module.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerContent}>
        {/* Верхні блок: асноўная інфармацыя */}
        <div className={styles.topRow}>
          <div className={styles.locationBlock}>
            <span className={styles.icon}>📍</span>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Olsztyn,Poland"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ольштын, Польшча
            </a>
          </div>

          <div className={styles.linksBlock}>
            <a
              href="https://github.com/andrej-cieraskou"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <span className={styles.divider}>/</span>
            <a
              href="https://linkedin.com/in/andrej-cieraskou"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Ніжні блок: дробны копірайт */}
        <div className={styles.bottomRow}>
          <p>© {currentYear} Andrej Cieraškoŭ. Усе правы абаронены.</p>
        </div>
      </div>
    </footer>
  );
};
