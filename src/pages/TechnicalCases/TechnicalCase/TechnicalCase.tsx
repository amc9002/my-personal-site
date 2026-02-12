import React, { useState } from 'react';
import { parseText } from "../../../utils/parseText";
import styles from './TechnicalCase.module.css';
import { type CaseItem } from '../../../types/case';

const TechnicalCase: React.FC<CaseItem> = (props) => {
  // 2. Спрашчаем стан да звычайнага пераключальніка
  const [isOpen, setIsOpen] = useState(false);

  // 1. Ахоўны экран: калі fetch яшчэ ідзе, props могуць быць пустымі
  if (!props || !props.preview) {
    return null; 
  }

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className={styles.casesSection}>
      <div className={styles.container}>
        <div className={`${styles.caseCard} ${isOpen ? styles.isOpen : ''}`}>
          
          {/* --- ШАПКА КЕЙСА --- */}
          <div className={styles.previewBox}>
            <div className={styles.imageSide}>
              <img src={props.previewImage} alt={props.title} className={styles.mainImg} />
            </div>
            
            <div className={styles.infoSide}>
              <span className={styles.caseId}>{props.id}</span>
              <h2 className={styles.caseTitle}>{props.title}</h2>
              <div className={styles.shortDesc}>
                {/* Цяпер тут не будзе памылкі, бо ёсць праверка вышэй */}
                {parseText(props.preview.summary)}
              </div>
              <button 
                className={styles.actionBtn} 
                onClick={handleToggle}
              >
                {isOpen ? 'Згарнуць разбор' : 'Паглядзець разбор рашэння'}
              </button>
            </div>
          </div>

          {/* --- РАЗГОРНУТЫ РАЗБОР --- */}
          {isOpen && (
            <div className={styles.fullContent}>
              <div className={styles.divider}></div>
              
              {props.analysis?.map((step, idx) => (
                <div key={idx} className={styles.analysisBlock} data-type={step.type}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <div className={styles.stepGrid}>
                    <div className={styles.stepText}>
                      {parseText(step.text)}
                    </div>
                    {step.image && (
                      <div className={styles.stepImageWrapper}>
                        <img src={step.image} alt={step.title} />
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              <div className={styles.footerActions}>
                 <button className={styles.closeLink} onClick={() => setIsOpen(false)}>
                   Згарнуць кейс ↑
                 </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TechnicalCase;