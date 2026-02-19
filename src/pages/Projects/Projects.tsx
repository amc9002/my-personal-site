import React from "react";
import { useTranslation } from "react-i18next";
import ProjectSection, {
  type ProjectCase,
} from "./ProjectSection/ProjectSection";
import styles from "./Projects.module.css";

const Projects: React.FC = () => {
  const { t } = useTranslation("projects");

  // Важна: i18next вяртае аб'ект/масіў толькі калі returnObjects: true
  const cases = t("cases", { returnObjects: true });

  // Калі backend яшчэ грузіць файл, cases можа быць радком "cases" альбо пустэчай
  const projectsList = Array.isArray(cases) ? (cases as ProjectCase[]) : [];

  return (
    <div className={styles.container}>
      {projectsList.map((project) => (
        <ProjectSection key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
