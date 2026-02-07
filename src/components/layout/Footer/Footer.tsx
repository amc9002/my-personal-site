import styles from "./Footer.module.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerContent}>
        <p>© {currentYear} Andrej Cieraškoŭ</p>
        <div className={styles.links}>
          <a href="https://github.com" className={styles.footerLink}>
            GitHub
          </a>
          <a href="https://linkedin.com" className={styles.footerLink}>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};
