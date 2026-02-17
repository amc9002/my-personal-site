import { useTranslation } from "react-i18next";
import styles from "./AltshullerMatrix.module.css";

export interface MatrixParameter {
  id: number;
  name: string;
  desc?: string;
}

// Вызначаем строгі тып для слоўніка параметраў
type ParametersData = Record<string, MatrixParameter>;

interface ParameterSelectProps {
  labelKey: string;
  id: string;
  value: number | null;
  onChange: (n: number) => void;
  // Пакідаем толькі Record, бо мы дакладна ведаем, што прыйдзе аб'ект
  parameters: ParametersData;
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

  // Цяпер нам не трэба as unknown, калі пропсы тыпізаваны правільна
  const paramsObject = parameters;

  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {t(`altshuller.labels.${labelKey}`)}
      </label>
      <select
        id={id}
        className={styles.select}
        // Ператвараем лік у радок для селекта, каб ён супаў з value ў option
        value={value?.toString() || ""}
        onChange={(e) => onChange(Number(e.target.value))}
      >
        <option value="">-- {t("altshuller.labels.select")} --</option>

        {Object.entries(paramsObject).map(([idStr, info]) => {
          const pId = Number(idStr);
          const key = `${improveParam}-${pId}`;
          const hasData = matrix[key] && matrix[key].length > 0;
          const isPhysical = improveParam === pId;

          const isDisabled = !!(
            isWorsening &&
            improveParam &&
            !hasData &&
            !isPhysical
          );

          return (
            <option key={idStr} value={idStr} disabled={isDisabled}>
              {idStr}. {info.name}{" "}
              {isDisabled ? `(${t("altshuller.labels.noData")})` : ""}
            </option>
          );
        })}
      </select>
    </div>
  );
};
