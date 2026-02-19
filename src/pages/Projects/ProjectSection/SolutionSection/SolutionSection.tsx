import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./SolutionSection.module.css";

export interface Effect {
  metrics: string;
  financial: string;
}

export interface SolutionData {
  id: number;
  title: string;
  image: string;
  idea: string;
  triz: string;
  conclusion: string;
  conclusionSolutions: string[];
  effect: Effect[];
}

export interface SolutionProps {
  data: SolutionData;
}

const SolutionSection: React.FC<SolutionProps> = ({ data }) => {
  const { t } = useTranslation("projects");

  return (
    <div className={styles.solutionWrapper}>
      {/* 1. Назва і Ідэя */}
      <div className={styles.headerBlock}>
        <h3 className={styles.solutionTitle}>{data.title}</h3>
        <p className={styles.ideaText}>{data.idea}</p>
      </div>

      {/* 2. Малюнак */}
      <div className={styles.imageBlock}>
        <img src={data.image} alt={data.title} loading="lazy" />
      </div>

      {/* 3. Метад TRIZ пад малюнкам */}
      <div className={styles.trizBox}>
        <strong>TRIZ:</strong> {data.triz}
      </div>

      {/* 4. Дзве калонкі */}
      <div className={styles.detailsGrid}>
        {/* Левая: Эфект */}
        <div className={styles.column}>
          <h4>{t("labels.economy")}</h4>
          {data.effect.map((eff, idx) => (
            <div key={idx} className={styles.effectItem}>
              <div>
                <strong>{eff.metrics}</strong>
              </div>
              <div className={styles.financial}>{eff.financial}</div>
            </div>
          ))}
        </div>

        {/* Правая: Рызыкі і спосабы пераадолення */}
        <div className={styles.column}>
          <h4>{t("labels.analysis")}</h4>
          <p className={styles.conclusionText}>{data.conclusion}</p>

          {data.conclusionSolutions.length > 0 && (
            <>
              <div className={styles.subSolutionsTitle}>
                {t("labels.riskMitigation")}{" "}
                {/* Трэба дадаць у JSON: "Спосабы пераадолення:" */}
              </div>
              <ul className={styles.subSolutions}>
                {data.conclusionSolutions.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;
