import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import projectsRegistry from "../../data/projects-registry.json";
import styles from "./Projects.module.css";
import { useProject } from "../../hooks/useProject";
import ProjectSection from "./ProjectSection/ProjectSection";

// Ствараем часовы інтэрфейс, каб TypeScript разумеў структуру твайго JSON
interface ExtendedProjectCase {
  labels?: Record<string, string>;
  actions?: {
    showSolution?: string;
    nextCase?: string;
    toList?: string;
  };
}

const ProjectLoader: React.FC<{
  projectId: string;
  onBack: () => void;
  onNext: (id: string) => void;
}> = ({ projectId, onBack, onNext }) => {
  const { data, loading, error } = useProject(projectId);

  // Бяром толькі той файл, які ў цябе рэальна існуе
  const { t } = useTranslation("projects/labels");

  const handleNext = () => {
    const currentIndex = projectsRegistry.findIndex((p) => p.id === projectId);
    const nextIndex = (currentIndex + 1) % projectsRegistry.length;
    onNext(projectsRegistry[nextIndex].id);
  };

  // Калі ідзе загрузка — паказваем ТОЛЬКІ лоадэр.
  // Гэта прыбярэ мільгаценне старых дадзеных.
  if (loading) {
    return (
      <div className={styles.loaderContainer}>
        <div className={styles.loader}>Загрузка...</div>
      </div>
    );
  }
  if (error) return <div className={styles.error}>Памылка: {error}</div>;
  if (!data) return null;

  const projectData = data as unknown as ExtendedProjectCase;

  const allLabels = {
    ...(projectData?.labels || {}),
    nextSolution:
      projectData?.actions?.showSolution ||
      t("projects/labels:actions.showSolution"),
    nextProject:
      projectData?.actions?.nextCase || t("projects/labels:actions.nextCase"),
    backToListShort:
      projectData?.actions?.toList || t("projects/labels:actions.toList"),
  };

  return data ? (
    <ProjectSection
      key={projectId}
      project={data}
      labels={allLabels}
      onBackToList={onBack}
      onNextProject={handleNext}
    />
  ) : null;
};

const Projects: React.FC = () => {
  const { t } = useTranslation(["projects/catalog", "common"]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className={styles.container}>
      {!selectedId ? (
        <div className={styles.projectsList}>
          {projectsRegistry.map((entry) => {
            const projectNumber = entry.id.replace(/\D/g, "");
            return (
              <div
                key={entry.id}
                className={styles.projectRow}
                onClick={() => setSelectedId(entry.id)}
              >
                <div className={styles.projectMain}>
                  <span className={styles.rowNumber}>{projectNumber}</span>
                  <h3 className={styles.rowTitle}>
                    {t("projects/catalog:" + projectNumber)}
                  </h3>
                </div>
                <div className={styles.rowAction}>
                  {t("common:actions.viewCase").toUpperCase()} →
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <ProjectLoader
          key={selectedId}
          projectId={selectedId}
          onBack={() => setSelectedId(null)}
          onNext={(id) => setSelectedId(id)}
        />
      )}
    </div>
  );
};

export default Projects;
