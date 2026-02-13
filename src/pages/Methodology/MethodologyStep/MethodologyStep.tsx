import type { MethodologyStepProps } from "../../../types/method";
import styles from "./MethodologyStep.module.css";

const MethodologyStep = ({
  index,
  title,
  text,
  details,
  children,
}: MethodologyStepProps & { details?: string }) => {
  return (
    <div className={styles.stepRow}>
      <div className={styles.stepMarker}>
        <div className={styles.dot} />
        <div className={styles.line} />
      </div>

      <div className={styles.stepContent}>
        <span className={styles.number}>0{index + 1}</span>
        <h3>{title}</h3>
        <p className={styles.introText}>{text}</p>

        {children && <div className={styles.media}>{children}</div>}

        {details && (
          <div className={styles.detailsBlock}>
            <p>{details}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MethodologyStep;
