import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation("common");
  const navItems = [
    { path: "/", label: t("nav.home") },
    { path: "/how-i-think", label: t("nav.howIThink") },
    { path: "/about", label: t("nav.about") },
    { path: "/projects", label: t("nav.projects") },
    { path: "/contact", label: t("nav.contact") },
  ];

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerContent}>
        <NavLink to="/" className={styles.logo}>
          Andrej Cieraškoŭ
        </NavLink>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              // Калі спасылка актыўная, React Router дадасць клас active
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              {item.label}
            </NavLink>
          ))}
          <nav className={styles.nav}>
            {/* Цыкл map па пунктах меню */}
            <div className={styles.langSection}>
              <LanguageSwitcher />
            </div>
          </nav>
        </nav>
      </div>
    </header>
  );
};
