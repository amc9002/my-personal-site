import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import LanguageSwitcher from "../../ui/LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import Hero from "../../common/hero/Hero";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation("common");

  const navItems = [
    { path: "/", label: t("nav.home") },
    { path: "/philosophy", label: t("nav.philosophy") },
    { path: "/methodology", label: t("nav.methodology") },
    { path: "/about", label: t("nav.about") },
    { path: "/projects", label: t("nav.projects") },
    { path: "/contact", label: t("nav.contact") },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className={styles.headerWrapper}>
        <div className={styles.headerContent}>
          <NavLink to="/" className={styles.logo} onClick={closeMenu}>
            Andrej Cieraškoŭ
          </NavLink>

          {/* Блок для мабільных: мова + бургер */}
          <div className={styles.mobileControls}>
            <div onClick={closeMenu}>
              <LanguageSwitcher />
            </div>
            <button
              className={styles.burger}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Навігацыя */}
          <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* Блок для дэсктопа: толькі мова */}
            <div className={styles.desktopLang}>
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      </header>

      <Hero label={t("hero.label")} title={t("hero.title")} subtitle={t("hero.subtitle")} />
    </>
  );
};