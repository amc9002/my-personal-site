//AboutMe.tsx - гэта галоўны кампанент старонкі "Пра мяне". Ён адказвае за агульную структуру старонкі, уключаючы загаловак, падзагаловак, кароткую біяграфію і асноўную частку з хроналогіяй жыцця. У гэтым кампаненце мы таксама атрымліваем масіў чаптэраў з файла перакладаў і перадаем яго ў кампанент AboutMeSection для адлюстравання кожнага этапу жыцця. У канцы старонкі дадаецца мяккая лінія з градыентам, якая служыць візуальным завяршэннем старонкі.
import React from "react";
import { useTranslation } from "react-i18next";
import AboutMeSection, {
  type IStoryChapter,
} from "./AboutMeSection/AboutMeSection";
import styles from "./AboutMe.module.css";

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
