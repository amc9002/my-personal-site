import { useTranslation } from "react-i18next";
import styles from "./Footer.module.css";
import { CONTACT_LINKS } from "../../../data/contactData";

export const Footer = () => {
  const { t } = useTranslation("common"); // ці "footer"
  const currentYear = new Date().getFullYear();

  // Адфільтруем толькі GitHub і LinkedIn для футара
  const footerLinks = CONTACT_LINKS.filter((link) =>
    ["GitHub", "LinkedIn"].includes(link.label),
  );

  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerContent}>
        <div className={styles.topRow}>
          {/* Лакалізаваная лакацыя */}
          <div className={styles.locationBlock}>
            <span className={styles.icon}>📍</span>
            <a
              href="https://www.google.com/maps/search/Olsztyn,+Poland"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footer.location")}
            </a>
          </div>

          {/* Дынамічныя спасылкі */}
          <div className={styles.linksBlock}>
            {footerLinks.map((link, index) => (
              <span key={link.label}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
                {index < footerLinks.length - 1 && (
                  <span className={styles.divider}>/</span>
                )}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.copyright}>
            © {currentYear} Andrej Cieraškoŭ. {t("footer.rights")}.
          </div>

          {/* Твой стэк */}
          <div className={styles.stackInfo}>
            {t("footer.builtWith")} <strong> React + TypeScript + Vite</strong>
          </div>
        </div>
      </div>
    </footer>
  );
};
