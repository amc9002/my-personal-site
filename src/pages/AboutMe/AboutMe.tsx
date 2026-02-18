import React from "react";
import { useTranslation } from "react-i18next";
import AboutMeSection, {
  type IStoryChapter,
} from "./AboutMeSection/AboutMeSection";
import styles from "./aboutMe.module.css";

const AboutMe: React.FC = () => {
  const { t } = useTranslation("aboutMe");

  // Атрымліваем масіў чаптэраў (сюды ў канец вы дадалі "Сям'ю" ў JSON)
  const storyChapters = t("story_chapters", {
    returnObjects: true,
  }) as IStoryChapter[];

  return (
    <div className={styles.pageWrapper}>
      <header className={styles.header}>
        <h1 className={styles.mainName}>{t("header.title")}</h1>

        {/* Выкарыстоўваем monospace шрыфт для падзагалоўка */}
        <span className={styles.jobSubtitle}>{t("header.subtitle")}</span>

        <div className={styles.introBio}>
          <p>{t("header.bio")}</p>
        </div>
      </header>

      <main className={styles.timelineMain}>
        {/* Спіс усіх этапаў, уключаючы сямейны блок у канцы */}
        <AboutMeSection chapters={storyChapters} />

        {/* Мяккая фінальная лінія з градыентам (тая самая "кропка") */}
        <div className={styles.pageEndLine} />
      </main>
    </div>
  );
};

export default AboutMe;
