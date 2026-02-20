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
      setLoading(true);
      try {
        // Загружаем файлы паралельна для хуткасці
        const [labelsRes, projectRes] = await Promise.all([
          fetch(`/locales/${i18n.language}/projects/labels.json`),
          fetch(`/locales/${i18n.language}/projects/${projectId}.json`)
        ]);

        if (!labelsRes.ok || !projectRes.ok) {
          throw new Error("Не ўдалося загрузіць даныя праекта");
        }

        const labelsJson: LabelsFile = await labelsRes.json();
        const projectJson = await projectRes.json();

        // У labels.json мы чакаем аб'ект labels
        setLabels(labelsJson.labels || {});
        
        if (projectJson && projectJson.id) {
          // Калі ў файле ёсць id, значыць гэта і ёсць наш праект
          setData(projectJson as ProjectCase);
        } else if (projectJson.cases && projectJson.cases.length > 0) {
          // Запасны варыянт, калі раптам дзесьці застаўся масіў
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
  }, [projectId, i18n.language]);

  return { data, labels, loading, error };
};