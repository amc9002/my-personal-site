import { useState } from "react";
import styles from "./SystemOperator.module.css";
import focus1 from "../../../assets/methodology/focus1_woBg.png";
import focus2 from "../../../assets/methodology/focus2_woBg.png";
import focus3 from "../../../assets/methodology/focus3_woBg.png";
import focus4 from "../../../assets/methodology/focus4_woBg.png";
import focus5 from "../../../assets/methodology/focus5_woBg.png";

interface SystemOperatorProps {
  title?: string;
}

const FOCUS_LEVELS = [
  { id: 1, src: focus1, label: "Focus 1: Contact zone" },
  { id: 2, src: focus2, label: "Focus 2: Assembly" },
  { id: 3, src: focus3, label: "Focus 3: Machine" },
  { id: 4, src: focus4, label: "Focus 4: Workshop" },
  { id: 5, src: focus5, label: "Focus 5: Plant, Infrastructure" },
];

const SystemOperator = ({ title }: SystemOperatorProps) => {
  const [activeLevel, setActiveLevel] = useState(2);

  return (
    <div className={styles.operatorContainer}>
      <div className={styles.viewer}>
        <img
          key={activeLevel}
          src={FOCUS_LEVELS[activeLevel].src}
          alt={FOCUS_LEVELS[activeLevel].label}
          className={styles.mainImage}
        />
        <div className={styles.labelOverlay}>
          {FOCUS_LEVELS[activeLevel].label}
        </div>
      </div>

      <div className={styles.controlsWrapper}>
        {/* Выкарыстоўваем пропс title, які прыйшоў з JSON праз Methodology */}
        {title && <h4 className={styles.focusTitle}>{title}</h4>}

        <div className={styles.controls}>
          {FOCUS_LEVELS.map((level, index) => (
            <div key={level.id} className={styles.btnGroup}>
              <button
                className={
                  activeLevel === index ? styles.activeBtn : styles.btn
                }
                onClick={() => setActiveLevel(index)}
              >
                {index + 1}
              </button>
              {index < FOCUS_LEVELS.length - 1 && (
                <span className={styles.stepArrow}>→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SystemOperator;
