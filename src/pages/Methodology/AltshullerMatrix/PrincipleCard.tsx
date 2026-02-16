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

export const PrincipleCard = ({ id, data }: PrincipleCardProps) => (
  <div className={styles.principleCard}>
    <div className={styles.cardHeader}>
      <span className={styles.idBadge}>№{id}</span>
      <h5 className={styles.cardTitle}>{data.title}</h5>
    </div>
    <p className={styles.cardDesc}>{data.desc}</p>
    {data.example && (
      <div className={styles.cardExample}>
        <strong>Прыклад:</strong> {data.example}
      </div>
    )}
  </div>
);
