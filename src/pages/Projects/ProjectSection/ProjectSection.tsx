import React from "react";
import { useTranslation } from "react-i18next";
import SolutionSection from "./SolutionSection/SolutionSection";
// Імпартуем нашы цэнтралізаваныя тыпы
import { type ProjectCase } from "../../../types/project";
import styles from "./ProjectSection.module.css";
import AnalysisSection from "./AnalysisSection/AnalysisSection";

/**
 * Дадаем labels у інтэрфейс пропсаў.
 * Цяпер TypeScript будзе ведаць, што гэты кампанент чакае слоўнік радкоў.
 */
interface ProjectSectionProps {
  project: ProjectCase;
  labels: Record<string, string>; // Гэта выправіць памылку на вашым скрыншоце
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ project, labels }) => {
  const { t } = useTranslation("projects");

  return (
    <div className={styles.projectWrapper}>
      <section className={styles.problemBlock}>
        <div className={styles.problemHeader}>
          {/* Цяпер мы прыярытэтна бярэм лэйбл з праекта, 
            а калі яго там няма — з агульнага перакладу 
          */}
          <span className={styles.badge}>
            {labels.problem || t("labels.problem")}
          </span>
          <h2>{project.title}</h2>
        </div>

        <div className={styles.descriptionWrapper}>
          <div className={styles.problemImage}>
            <img src={project.problem.image} alt="Problem view" />
          </div>
          <div className={styles.problemText}>
            <p>{project.problem.description}</p>
          </div>
          <div className={styles.clearfix}></div>
        </div>
      </section>

      {/* Калі ў праекце ёсць аналіз — паказваем яго як асобную секцыю */}
      {project.analysis && (
        <AnalysisSection data={project.analysis} label={labels.analysis} />
      )}

      <div className={styles.solutionsList}>
        {project.solutions.map((sol) => (
          /* Перадаем labels далей у рашэнні, 
             каб там таксама выкарыстоўваліся правільныя загалоўкі 
          */
          <SolutionSection key={sol.id} data={sol} labels={labels} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
