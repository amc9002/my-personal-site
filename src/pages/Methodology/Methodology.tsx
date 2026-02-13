import { useTranslation } from "react-i18next";
import MethodologyStep from "./MethodologyStep/MethodologyStep";
import styles from "./Methodology.module.css";
import AnalysisSchema from "./AnalysisSchema";

const Methodology = () => {
  const { t } = useTranslation("methodology");

  return (
    <div className={styles.methodologyPage}>
      <header className={styles.header}>
        <h1>{t("methodology.title")}</h1>
        <p>{t("methodology.description")}</p>
      </header>

      <div className={styles.container}>
        {/* КРОК 01 */}
        <MethodologyStep
          index={0}
          title={t("methodology.steps.0.title")}
          text={t("methodology.steps.0.text")}
          details={t("methodology.steps.0.details")}
        >
          <AnalysisSchema />
        </MethodologyStep>

        {/* КРОК 02 */}
        <MethodologyStep
          index={1}
          title={t("methodology.steps.1.title")}
          text={t("methodology.steps.1.text")}
          details={t("methodology.steps.1.details")}
        >
          <div className={styles.placeholder}>🚧 Fishbone System Operator</div>
        </MethodologyStep>
      </div>
    </div>
  );
};
// Пакуль гэта пустая старонка

export default Methodology;
