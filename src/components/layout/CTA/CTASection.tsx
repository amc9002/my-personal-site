import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Settings } from "lucide-react"; // Або любая іншая інжынерная іконка
import styles from "./CTASection.module.css";

const CTASection: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <section className={styles.ctaWrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.iconBox}>
            <Settings size={40} strokeWidth={1.5} />
          </div>
          <div className={styles.textBox}>
            <p className={styles.text}>{t("cta.message")}</p>
          </div>
          <div className={styles.buttonBox}>
            <Link to="/contact" className={styles.ctaButton}>
              {t("cta.button")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
