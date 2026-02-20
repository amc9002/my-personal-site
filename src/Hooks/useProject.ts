import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { type ProjectCase } from "../pages/Projects/ProjectSection/ProjectSection";

export const useProject = (projectId: string) => {
  const [project, setProject] = useState<ProjectCase | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true);
      try {
        // Шлях фармуецца дынамічна: мова + ID праекта
        const response = await fetch(
          `/locales/${i18n.language}/projects/${projectId}.json`
        );
        
        if (!response.ok) {
          throw new Error(`Не ўдалося загрузіць праект: ${response.statusText}`);
        }
        
        const data = await response.json();
        setProject(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Памылка загрузкі");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [projectId, i18n.language]); // Перазагружаем, калі змяніўся ID або мова

  return { project, loading, error };
};