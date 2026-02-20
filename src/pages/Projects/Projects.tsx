import React from "react";
// Імпартуем наш рэестр (спіс праектаў)
import projectsRegistry from "../../data/projects-registry.json";
import ProjectSection from "./ProjectSection/ProjectSection";
import { useProject } from "../../hooks/useProject";
import styles from "./Projects.module.css";

/**
 * Кампанент ProjectLoader — гэта "інтэлектуальная пракладка".
 * Ён атрымлівае ID, ідзе за данымі праз хук і, калі ўсё гатова,
 * паказвае нам ужо знаёмы ProjectSection.
 */
const ProjectLoader: React.FC<{ projectId: string }> = ({ projectId }) => {
  // Выкарыстоўваем наш новы хук
  const { data, labels, loading, error } = useProject(projectId);

  // Пакуль ідзе загрузка
  if (loading)
    return <div className={styles.loader}>Загрузка праекта {projectId}...</div>;

  // Калі здарылася памылка (напрыклад, не знайшлі файл для гэтай мовы)
  if (error) return <div className={styles.error}>Памылка: {error}</div>;

  // Калі даныя ёсць — паказваем секцыю праекта
  return data ? <ProjectSection project={data} labels={labels} /> : null;
};

const Projects: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Праходзім па рэестры і для кожнага запісу ствараем Loader.
         Цяпер нам не важна, колькі там праектаў — кожны загрузіцца сам.
      */}
      {projectsRegistry.map((entry) => (
        <ProjectLoader key={entry.id} projectId={entry.id} />
      ))}
    </div>
  );
};

export default Projects;
