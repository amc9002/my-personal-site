import { useTranslation } from "react-i18next";
import MethodologyStep from "./MethodologyStep/MethodologyStep";
import styles from "./Methodology.module.css";
import AnalysisSchema from "./AnalysisSchema";
import SynthesisSchema from "./SynthesisSchema";
import FishboneVertical from "./FishboneVertical";
import SystemOperator from "./SystemOperator/SystemOperator"; // Правер, каб файл называўся SystemOperator.tsx

const Methodology = () => {
  const { t } = useTranslation("methodology");

  // Функцыя для бяспечнага атрымання масіва радкоў з i18next
  const getDetails = (index: number): string[] => {
    const details = t(`methodology.steps.${index}.details`, {
      returnObjects: true,
    });
    // Яўна прыводзім да масіва радкоў, каб TS не лаяўся
    return Array.isArray(details) ? (details as string[]) : [];
  };

  return (
    <div className={styles.methodologyPage}>
      <header className={styles.header}>
        <span className={styles.subtitle}>{t("methodology.subtitle")}</span>
        <h1>{t("methodology.title")}</h1>
        <p className={styles.description}>{t("methodology.description")}</p>
      </header>

      <div className={styles.container}>
        {/* КРОК 01: АНАЛІЗ */}
        <MethodologyStep
          index={1}
          title={t("methodology.steps.0.title")}
          text={t("methodology.steps.0.text")}
          details={getDetails(0)}
        >
          <AnalysisSchema />
        </MethodologyStep>

        {/* КРОК 01.1: СІНТЭЗ */}
        <MethodologyStep
          index={2}
          title={t("methodology.steps.1.title")}
          text={t("methodology.steps.1.text")}
          details={getDetails(1)}
        >
          <SynthesisSchema />
        </MethodologyStep>

        {/* КРОК 02: FISHBONE */}
        <MethodologyStep
          index={3}
          title={t("methodology.steps.2.title")}
          text={t("methodology.steps.2.text")}
          details={getDetails(2)}
        >
          <FishboneVertical />
        </MethodologyStep>

        {/* КРОК 03: СІСТЭМНЫ АПЕРАТАР */}
        <MethodologyStep
          index={4}
          title={t("methodology.steps.3.title")}
          text={t("methodology.steps.3.text")}
          details={getDetails(3)}
        >
          <SystemOperator title={t("methodology.steps.3.focusTitle")} />
        </MethodologyStep>

        {/* КРОК 04: АЛЬТШУЛЕР */}
        <MethodologyStep
          index={5}
          title={t("methodology.steps.4.title")}
          text={t("methodology.steps.4.text")}
          details={getDetails(4)}
        >
          <div className={styles.placeholderBox}>
            <p
              style={{
                fontStyle: "italic",
                color: "#666",
                textAlign: "center",
                padding: "20px",
              }}
            >
              {t("methodology.steps.4.text")}
            </p>
          </div>
        </MethodologyStep>
      </div>

      <footer
        className={styles.footer}
        style={{ marginTop: "40px", textAlign: "center", padding: "20px" }}
      >
        <p>
          <strong>{t("methodology.conclusion")}</strong>
        </p>
      </footer>
    </div>
  );
};

export default Methodology;
