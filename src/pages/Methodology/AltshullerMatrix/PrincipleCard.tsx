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
  if (!data || typeof data !== "object" || !data.title) {
    return null;
  }

  return (
    // 3. Цяпер выкарыстоўваем return для адмалёўкі JSX
    <div className={styles.principleCard}>
      {/* Тут толькі нумар і загаловак */}
      <div className={styles.cardHeader}>
        <span className={styles.idBadge}>№{id}</span>
        <h5 className={styles.cardTitle}>
          {data.title || t("altshuller.labels.noTitle")}
        </h5>
      </div>

      {/* Апісанне і прыклад павінны быць ТУТ — па-за хэдэрам */}
      <div className={styles.cardContent}>
        {data.desc && data.desc !== "..." && (
          <p className={styles.cardDesc}>{data.desc}</p>
        )}

        {data.example && data.example !== "..." && (
          <div className={styles.cardExample}>
            <strong>{t("altshuller.labels.exampleLabel")}</strong>{" "}
            {data.example}
          </div>
        )}
      </div>
    </div>
  );
};
