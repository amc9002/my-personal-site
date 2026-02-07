import { useTranslation } from "react-i18next";
import styles from "./LanguageSwitcher.module.css";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const languages = ["be", "pl", "en", "ru"];

  return (
    <>
      {languages.map((lng) => (
        <button
          key={lng}
          className={`${styles.langBtn} ${i18n.language === lng ? styles.active : ""}`}
          onClick={() => i18n.changeLanguage(lng)}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </>
  );
};

export default LanguageSwitcher;
