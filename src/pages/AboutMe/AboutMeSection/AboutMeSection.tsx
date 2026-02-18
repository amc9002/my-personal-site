import React from "react";
import styles from "./AboutMeSection.module.css";

// Апісваем структуру адной "главы" вашай гісторыі
export interface IStoryChapter {
  id: string;
  period: string;
  title: string;
  content: string;
}

interface AboutMeSectionProps {
  // Цяпер мы прымаем масіў глаў story_chapters
  chapters: IStoryChapter[];
}

const AboutMeSection: React.FC<AboutMeSectionProps> = ({ chapters }) => {
  // Абарона: калі i18next яшчэ не загрузіў аб'екты, Array.isArray верне false
  if (!chapters || !Array.isArray(chapters)) {
    return null;
  }

  return (
    <div className={styles.timelineContainer}>
      {chapters.map((chapter, index) => (
        <section key={chapter.id || index} className={styles.chapterRow}>
          {/* Левая частка: Даты. Фіксаваная шырыня для выраўноўвання */}
          <div className={styles.periodColumn}>
            <span className={styles.periodText}>{chapter.period}</span>
          </div>

          {/* Цэнтральная частка: Вертыкальная лінія з маркернам (кропкай) */}
          <div className={styles.markerColumn}>
            <div className={styles.markerDot} />
            {/* Лінія не малюецца для апошняга элемента, каб не тырчэла знізу */}
            {index !== chapters.length - 1 && (
              <div className={styles.markerLine} />
            )}
          </div>

          {/* Правая частка: Тэкставы кантэнт */}
          <div className={styles.contentColumn}>
            <h3 className={styles.chapterTitle}>{chapter.title}</h3>
            <div className={styles.chapterCard}>
              <p className={styles.chapterText}>{chapter.content}</p>

              {/* Калі ў будучыні захочаце дадаць тэгі (напрыклад, .NET, TRIZ), 
                  іх можна будзе ўставіць тут */}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default AboutMeSection;
