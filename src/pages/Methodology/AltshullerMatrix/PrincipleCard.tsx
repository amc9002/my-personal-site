import { useTranslation } from "react-i18next"; // 1. Імпартуем хук
import styles from "./AltshullerMatrix.module.css";

export interface Principle {
  title: string;
  desc: string;
  example: string;
}

interface PrincipleCardProps {
  id: number;
  data: Principle;
}

export const PrincipleCard = ({ id, data }: PrincipleCardProps) => {
  const { t } = useTranslation("altshuller/contradictions"); // 2. Ініцыялізуем функцыю перакладу

  return (
    // 3. Цяпер выкарыстоўваем return для адмалёўкі JSX
    <div className={styles.principleCard}>
      <div className={styles.cardHeader}>
        <span className={styles.idBadge}>№{id}</span>
        <h5 className={styles.cardTitle}>{data.title}</h5>
      </div>
      <p className={styles.cardDesc}>{data.desc}</p>
      {data.example && (
        <div className={styles.cardExample}>
          {/* 4. Выклікаем t() як функцыю ў фігурных дужках */}
          <strong>{t("altshuller.labels.exampleLabel")}</strong> {data.example}
        </div>
      )}
    </div>
  );
};
