import { useState } from "react"; // Дадалі для кантролю адкрыцця
import { useTranslation } from "react-i18next";
import styles from "./LanguageSwitcher.module.css";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false); // Стан: меню закрыта па змаўчанні
  const languages = ["be", "pl", "en", "ru"];

  // Функцыя для змены мовы + закрыцця меню
  const handleLangChange = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      {/* Кнопка-трыгер: паказвае толькі бягучую мову */}
      <button 
        className={styles.activeToggle} 
        onClick={() => setIsOpen(!isOpen)}
      >
        {i18n.language.toUpperCase()} {isOpen ? "▴" : "▾"}
      </button>

      {/* Спіс моў: з'яўляецца, толькі калі isOpen === true */}
      {isOpen && (
        <div className={styles.dropdown}>
          {languages.map((lng) => (
            <button
              key={lng}
              className={`${styles.langBtn} ${i18n.language === lng ? styles.active : ""}`}
              onClick={() => handleLangChange(lng)}
            >
              {lng.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;