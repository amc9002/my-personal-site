import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ParameterSelect, type MatrixParameter } from "./ParameterSelect";
import { PrincipleCard, type Principle } from "./PrincipleCard";
import styles from "./AltshullerMatrix.module.css";
// Гэта наш "мозг", ён цяпер агульны для ўсіх моў
import { ALTSHULLER_MATRIX } from "../../../data/altshullerMatrix";

const AltshullerMatrix = () => {
  const { t, ready } = useTranslation([
    "altshuller/contradictions",
    "altshuller/principles",
  ]);

  const [improveParam, setImproveParam] = useState<number | null>(null);
  const [worsenParam, setWorsenParam] = useState<number | null>(null);

  // Спіс параметраў застаецца ў i18n, бо іх ТРЭБА перакладаць
  const parameters = useMemo(
    () =>
      (t("altshuller.parameters", {
        ns: "altshuller/contradictions",
        returnObjects: true,
      }) as MatrixParameter[]) || [],
    [t],
  );

  // ВЫДАЛЕНА: стары useMemo для matrix, бо мы выкарыстоўваем ALTSHULLER_MATRIX

  const selectedIds = useMemo(() => {
    if (!improveParam || !worsenParam) return [];
    // Звяртаемся да нашай новай канстанты
    return ALTSHULLER_MATRIX[`${improveParam}-${worsenParam}`] || [];
  }, [improveParam, worsenParam]);

  if (!ready) return <div className={styles.loading}>Загрузка...</div>;

  return (
    <div className={styles.matrixContainer}>
      <div className={styles.selectionZone}>
        <ParameterSelect
          labelKey="improving"
          id="improve-select"
          value={improveParam}
          onChange={setImproveParam}
          parameters={parameters}
          matrix={ALTSHULLER_MATRIX} // Перадаем агульную матрыцу
          improveParam={improveParam}
          isWorsening={false}
        />
        <ParameterSelect
          labelKey="worsening"
          id="worsen-select"
          value={worsenParam}
          onChange={setWorsenParam}
          parameters={parameters}
          matrix={ALTSHULLER_MATRIX} // Перадаем агульную матрыцу
          improveParam={improveParam}
          isWorsening={true}
        />
      </div>

      {improveParam && worsenParam && (
        <div
          className={
            improveParam === worsenParam
              ? styles.physicalHint
              : styles.technicalHint
          }
        >
          {t(
            `altshuller.hints.${improveParam === worsenParam ? "physical" : "technical"}`,
            {
              ns: "altshuller/contradictions",
              p1: parameters.find((p) => p.id === improveParam)?.name,
              p2: parameters.find((p) => p.id === worsenParam)?.name,
            },
          )}
        </div>
      )}

      <div className={styles.results}>
        {selectedIds.length > 0 && (
          <div className={styles.principleGrid}>
            {selectedIds.map((id) => (
              <PrincipleCard
                key={id}
                id={id}
                data={
                  t(`${id}`, {
                    ns: "altshuller/principles",
                    returnObjects: true,
                  }) as Principle
                }
              />
            ))}
          </div>
        )}

        {/* Дадаем апрацоўку пустога выніку (для бландзінак) */}
        {improveParam && worsenParam && selectedIds.length === 0 && (
          <div className={styles.noResult}>
            {t("altshuller.hints.empty", { ns: "altshuller/contradictions" })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AltshullerMatrix;
