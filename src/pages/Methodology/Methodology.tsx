import { useTranslation } from "react-i18next";
import MethodologyStep from "./MethodologyStep/MethodologyStep";
import styles from "./Methodology.module.css";
import AnalysisSchema from "./AnalysisSchema";

const Methodology = () => {
  const { t } = useTranslation("methodology");

  return (
    <div className={styles.methodologyPage}>
      <header className={styles.header}>
        {/* Дадаем subtitle, калі ты яго ўнёс у JSON */}
        <span className={styles.subtitle}>{t("methodology.subtitle")}</span>
        <h1>{t("methodology.title")}</h1>
        <p className={styles.description}>{t("methodology.description")}</p>
      </header>

      <div className={styles.container}>
        {/* КРОК 01: АНАЛІЗ (AS-IS) */}
        <MethodologyStep
          index={1}
          title={t("methodology.steps.0.title")}
          text={t("methodology.steps.0.text")}
          details={t("methodology.steps.0.details")}
        >
          {/* Вернулі схему на месца */}
          <AnalysisSchema />
        </MethodologyStep>

        {/* КРОК 01.1: СІНТЭЗ (TO-BE / ІКВ) */}
        <MethodologyStep
          index={2}
          title={t("methodology.steps.1.title")}
          text={t("methodology.steps.1.text")}
          details={t("methodology.steps.1.details")}
        >
          {/* Пакуль тут будзе копія або заглушка для новай схемы */}
          <div className={styles.placeholder}>
            <h3>{t("methodology.steps.1.title")}</h3>
            <p>Тут будзе схема "ад адваротнага" (ІКВ)</p>
          </div>
        </MethodologyStep>

        {/* КРОК 02: FISHBONE */}
        <MethodologyStep
          index={3}
          title="Крок 02. Прычынна-выніковая сувязь"
          text="Пошук каранёвай прычыны праз Fishbone"
        >
          <div className={styles.placeholder}>🚧 Fishbone System Operator</div>
        </MethodologyStep>
      </div>
    </div>
  );
};

export default Methodology;
