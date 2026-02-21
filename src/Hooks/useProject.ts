import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { type LabelsFile, type ProjectCase } from "../types/project";

export const useProject = (projectId: string) => {
  const [data, setData] = useState<ProjectCase | null>(null);
  const [labels, setLabels] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { i18n } = useTranslation();

useEffect(() => {
    const fetchProjectData = async () => {
      // 1. Уключаем лоадар ТОЛЬКІ калі ў нас яшчэ зусім няма даных.
      // Калі мы проста мяняем мову, data ўжо ёсць, таму старонка не знікне.
      if (!data) {
        setLoading(true);
      }

      try {
        const [labelsRes, projectRes] = await Promise.all([
          fetch(`/locales/${i18n.language}/projects/labels.json`),
          fetch(`/locales/${i18n.language}/projects/${projectId}.json`)
        ]);

        if (!labelsRes.ok || !projectRes.ok) {
          throw new Error("Не ўдалося загрузіць даныя праекта");
        }

        const labelsJson: LabelsFile = await labelsRes.json();
        const projectJson = await projectRes.json();

        setLabels(labelsJson.labels || {});
        
        if (projectJson && projectJson.id) {
          setData(projectJson as ProjectCase);
        } else if (projectJson.cases && projectJson.cases.length > 0) {
          setData(projectJson.cases[0]);
        }
        
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error");
      } finally {
        setLoading(false);
      }
    };

    fetchProjectData();

    // 2. Гэты магічны радок ніжэй супакойвае "палец" ESLint.
    // Мы кажам яму: "Я ведаю, што я раблю, не трэба сюды дадаваць 'data'".
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectId, i18n.language]);

  return { data, labels, loading, error };
};