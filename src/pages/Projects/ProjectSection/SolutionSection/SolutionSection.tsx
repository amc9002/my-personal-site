import React from "react";
import styles from "./SolutionSection.module.css";
import type { SolutionData } from "../../../../types/project";

export interface SolutionProps {
  data: SolutionData;
  labels: Record<string, string>;
}

const SolutionSection: React.FC<SolutionProps> = ({ data, labels }) => {
  return (
    <div className={styles.solutionWrapper}>
      <div className={styles.headerBlock}>
        <h3 className={styles.solutionTitle}>{data.title}</h3>
        <p className={styles.ideaText}>{data.idea}</p>
      </div>

      <div className={styles.imageBlock}>
        <img src={data.image} alt={data.title} loading="lazy" />
      </div>

      <div className={styles.trizBox}>
        <strong>{labels?.triz || "TRIZ"}:</strong> {data.triz}
      </div>

      <div className={styles.detailsGrid}>
        {/* Левая калонка: Эфект */}
        <div className={styles.column}>
          <h4>{labels.economy}</h4> {/* Вынікі і метрыкі (выпраўлена тут) */}
          {data.effect.map((eff, idx) => (
            <div key={idx} className={styles.effectItem}>
              {Array.isArray(eff.metrics) ? (
                eff.metrics.map((text, i) => (
                  <div key={i} className={styles.metricRow}>
                    {text}
                  </div>
                ))
              ) : (
                <div className={styles.metricRow}>{eff.metrics}</div>
              )}

              {eff.financial && (
                <div className={styles.financial}>{eff.financial}</div>
              )}
            </div>
          ))}
        </div>

        {/* Правая калонка: Аналіз і Рызыкі (выпраўлена тут) */}
        <div className={styles.column}>
          <h4>{labels.analysis}</h4>
          <p className={styles.conclusionText}>{data.conclusion}</p>

          {data.conclusionSolutions && data.conclusionSolutions.length > 0 && (
            <>
              <div className={styles.subSolutionsTitle}>
                {labels.riskMitigation} {/* Дадаем загаловак для падрашэнняў */}
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
