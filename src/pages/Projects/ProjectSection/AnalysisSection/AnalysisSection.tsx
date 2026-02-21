import React from "react";
import styles from "./AnalysisSection.module.css";
import { type AnalysisData } from "../../../../types/project";

interface Props {
  data: AnalysisData;
  label?: string;
}

const AnalysisSection: React.FC<Props> = ({ data, label }) => {
  return (
    <div className={styles.analysisWrapper}>
      <div className={styles.header}>
        <span className={styles.badge}>{label || "Engineering Insight"}</span>
      </div>

      <div className={`${styles.contentWrapper} ${styles.clearfix}`}>
        {/* Малюнак рэндэрыцца ТОЛЬКІ калі ён ёсць у даных */}
        {data.image && (
          <div className={styles.imageContainer}>
            <img src={data.image} alt="Physics Analysis" />
          </div>
        )}

        {/* Калі малюнка няма, гэты div (дзякуючы float або flex) расцягнецца на 100% */}
        <div className={styles.textContainer}>
          <p className={styles.deductionText}>{data.deduction}</p>

          <div className={styles.physicsChain}>
            {data.physicsChain.map((step, index) => (
              <React.Fragment key={index}>
                <span className={styles.chainStep}>{step}</span>
                {index < data.physicsChain.length - 1 && (
                  <span className={styles.arrow}>→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisSection;
