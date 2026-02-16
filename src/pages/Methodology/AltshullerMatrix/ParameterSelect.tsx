import { useTranslation } from "react-i18next";
import styles from "./AltshullerMatrix.module.css";

export interface MatrixParameter {
  id: number;
  name: string;
  desc?: string;
}

interface ParameterSelectProps {
  labelKey: string;
  id: string;
  value: number | null;
  onChange: (n: number) => void;
  parameters: MatrixParameter[];
  matrix: Record<string, number[]>;
  improveParam: number | null;
  isWorsening: boolean;
}

export const ParameterSelect = ({
  labelKey,
  id,
  value,
  onChange,
  parameters,
  matrix,
  improveParam,
  isWorsening,
}: ParameterSelectProps) => {
  const { t } = useTranslation("altshuller/contradictions");

  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {t(`altshuller.labels.${labelKey}`)}
      </label>
      <select
        id={id}
        className={styles.select}
        value={value || ""}
        onChange={(e) => onChange(Number(e.target.value))}
      >
        <option value="">-- {t("altshuller.labels.select")} --</option>
        {parameters.map((p) => {
          const key = `${improveParam}-${p.id}`;
          const hasData = matrix[key]?.length > 0;
          const isPhysical = improveParam === p.id;
          const isDisabled = !!(
            isWorsening &&
            improveParam &&
            !hasData &&
            !isPhysical
          );

          return (
            <option key={p.id} value={p.id} disabled={isDisabled}>
              {p.name} {isDisabled ? `(${t("altshuller.labels.noData")})` : ""}
            </option>
          );
        })}
      </select>
    </div>
  );
};
