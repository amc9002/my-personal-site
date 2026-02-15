import { useTranslation } from "react-i18next";
import MethodologyStep from "./MethodologyStep/MethodologyStep";
import styles from "./Methodology.module.css";
import AnalysisSchema from "./AnalysisSchema";
import SynthesisSchema from "./SynthesisSchema";
import FishboneVertical from "./FishboneVertical";

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
          details={
            t("methodology.steps.0.details", {
              returnObjects: true,
            }) as string[]
          }
        >
          {/* Вернулі схему на месца */}
          <AnalysisSchema />
        </MethodologyStep>

        {/* КРОК 01.1: СІНТЭЗ (TO-BE / ІКВ) */}
        <MethodologyStep
          index={2}
          title={t("methodology.steps.1.title")}
          text={t("methodology.steps.1.text")}
          details={
            t("methodology.steps.1.details", {
              returnObjects: true,
            }) as string[]
          }
        >
          <SynthesisSchema />
        </MethodologyStep>

        {/* КРОК 02: FISHBONE */}
        <MethodologyStep
          index={3}
          title={t("methodology.steps.2.title")}
          text={t("methodology.steps.2.text")}
          details={
            t("methodology.steps.2.details", {
              returnObjects: true,
            }) as string[]
          }
        >
          <FishboneVertical />
        </MethodologyStep>
      </div>
    </div>
  );
};

export default Methodology;
