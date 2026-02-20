import React from "react";
import { useTranslation } from "react-i18next";
import SolutionSection from "./SolutionSection/SolutionSection";
// Імпартуем тып рашэння, каб не пісаць яго нанова
import { type SolutionData } from "./SolutionSection/SolutionSection";
import styles from "./ProjectSection.module.css";

// Апісваем толькі тое, што ўнікальна для самога праекта
export interface ProjectCase {
  id: number;
  title: string;
  problem: {
    image: string;
    description: string;
  };
  solutions: SolutionData[]; // Выкарыстоўваем гатовы тып
}

interface ProjectSectionProps {
  project: ProjectCase;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ project }) => {
  const { t } = useTranslation("projects");

  console.log("Project Data:", project);

  return (
    <div className={styles.projectWrapper}>
      {/* Секцыя Праблемы */}
      <section className={styles.problemBlock}>
        <div className={styles.problemHeader}>
          <span className={styles.badge}>{t("labels.problem")}</span>
          <h2>{project.title}</h2>
        </div>

        <div className={styles.descriptionWrapper}>
          {/* Малюнак павінен ісці ПЕРАД тэкстам для float */}
          <div className={styles.problemImage}>
            <img src={project.problem.image} alt="Problem view" />
          </div>
          <div className={styles.problemText}>
            <p>{project.problem.description}</p>
          </div>
          {/* Ачыстка флоата, каб спіс рашэнняў не палез наверх */}
          <div className={styles.clearfix}></div>
        </div>
      </section>

      {/* Спіс рашэнняў праз мап */}
      <div className={styles.solutionsList}>
        {project.solutions.map((sol) => (
          <SolutionSection key={sol.id} data={sol} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
