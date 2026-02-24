import React, { useState, useEffect, useRef } from "react";
import SolutionSection from "./SolutionSection/SolutionSection";
import AnalysisSection from "./AnalysisSection/AnalysisSection";
import { type ProjectCase } from "../../../types/project";
import styles from "./ProjectSection.module.css";

interface ProjectSectionProps {
  project: ProjectCase;
  labels: Record<string, string>;
  onBackToList: () => void;
  onNextProject?: () => void;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({
  project,
  labels,
  onBackToList,
  onNextProject,
}) => {
  const [visibleSolutionsCount, setVisibleSolutionsCount] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const lastSolutionRef = useRef<HTMLDivElement>(null);

  const totalSolutions = project.solutions?.length || 0;
  const progressPercent =
    totalSolutions > 0 ? (visibleSolutionsCount / totalSolutions) * 100 : 0;

  useEffect(() => {
    if (visibleSolutionsCount > 0) {
      lastSolutionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [visibleSolutionsCount]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    setIsExiting(true);
    setTimeout(() => {
      onBackToList();
    }, 400);
  };

  return (
    <div
      className={`${styles.projectWrapper} ${isExiting ? styles.fadeOut : ""}`}
    >
      <div className={styles.progressBarContainer}>
        <div
          className={styles.progressBar}
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <header className={styles.header}>
        <button className={styles.backButton} onClick={handleBack}>
          <span className={styles.arrow}>←</span>{" "}
          {labels.backToListShort || "Back"}
        </button>
        <h2 className={styles.title}>{project.title}</h2>
      </header>

      <section className={`${styles.problemBlock} ${styles.clearfix}`}>
        <div className={styles.badge}>{labels.problem || "Problem"}</div>
        <div className={styles.descriptionWrapper}>
          {project.problem?.image && (
            <div className={styles.problemImage}>
              <img src={project.problem.image} alt="Problem context" />
            </div>
          )}
          <div className={styles.problemText}>
            <p>{project.problem?.description}</p>
          </div>
        </div>
      </section>

      {project.analysis && (
        <div className={styles.analysisSection}>
          <AnalysisSection data={project.analysis} label={labels.analysis} />
        </div>
      )}

      <div className={styles.solutionsList}>
        {project.solutions.map((sol, index) => {
          const isVisible = index < visibleSolutionsCount;
          return (
            <div
              key={sol.id || index}
              ref={index === visibleSolutionsCount - 1 ? lastSolutionRef : null}
              className={`${styles.solutionItem} ${isVisible ? styles.show : ""}`}
            >
              <div className={styles.solutionInner}>
                <SolutionSection data={sol} labels={labels} />
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.controls}>
        <div className={styles.buttonGroup}>
          {visibleSolutionsCount < totalSolutions && (
            <button
              className={`${styles.primaryBtn} ${styles.pulse}`}
              onClick={() => setVisibleSolutionsCount((prev) => prev + 1)}
            >
              {labels.nextSolution} ({visibleSolutionsCount + 1}/
              {totalSolutions})
            </button>
          )}
          <button className={styles.nextProjectBtn} onClick={onNextProject}>
            {labels.nextProject} →
          </button>
          <button className={styles.secondaryBtn} onClick={handleBack}>
            ← {labels.backToListShort}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
