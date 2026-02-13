import { useTranslation } from "react-i18next";
import Section from "../../components/common/section/Section"; // Шлях да твайго ўніверсальнага кампанента
import styles from "./Philosophy.module.css"; // Калі патрэбныя спецыфічныя стылі для гэтай старонкі
import ThroughKhaotic from "../../assets/Through_khaotic.png"; // Калі патрэбна фонавая выява для раздзелаў
import ParadoxalDecision from "../../assets/Paradoxal_decision.png"; // Калі патрэбна фонавая выява для раздзелаў
import SystematicInnovation from "../../assets/Systematic_innovation.png"; // Калі патрэбна фонавая выява для раздзелаў
import ToolsNotEssence from "../../assets/Tools_NotEssence.png"; // Калі патрэбна фонавая выява для раздзелаў
import WhenItsNeeded from "../../assets/WhenItsNeeded.png"; // Калі патрэбна фонавая выява для раздзелаў
import SolutionForBusiness from "../../assets/SolutionForBusiness.png"; // Калі патрэбна фонавая выява для раздзелаў  


const Philosophy = () => {
  const { t } = useTranslation("philosophy");

  const getArray = (key: string): string[] => {
    const res = t(key, { returnObjects: true });
    return Array.isArray(res) ? (res as string[]) : [];
  };

  return (
    <>
      <Section
        index={0}
        title={t("introduction.title")}
        items={getArray("introduction.text")}
        bgImage={ThroughKhaotic}
        cardWidth="650px"
        cardPosition={{ bottom: '10%', right: '20%' }}
      />
      <Section
        index={1}
        title={t("detailVsSystem.title")}
        items={getArray("detailVsSystem.text")}
        bgImage={ParadoxalDecision}
        bgPosition="center 85%"
        cardWidth="650px"
        cardPosition={{ bottom: '10%', right: '20%' }}
      />
      <Section
        index={2}
        title={t("TrizEngineering.title")}
        description={t("TrizEngineering.text")}
        items={getArray("TrizEngineering.points")}
        footer={t("TrizEngineering.footer")}
        bgImage={SystematicInnovation}
        link={t("TrizEngineering.link")}
        linkText={t("TrizEngineering.linktext")}
        cardWidth="750px"
        cardPosition={{ bottom: '10%', right: '20%' }}
      />
      <Section
        index={3}
        title={t("toolsAreNotThePoint.title")}
        description={t("toolsAreNotThePoint.text")}
        items={getArray("toolsAreNotThePoint.responsibilities")}
        bgImage={ToolsNotEssence}
        bgPosition="center 65%"
        cardWidth="650px"
        cardPosition={{ bottom: '10%', right: '20%' }}
      />
      <Section
        index={4}
        title={t("whenThisWayOfThinkingHelps.title")}
        items={getArray("whenThisWayOfThinkingHelps.cases")}
        footer={t("whenThisWayOfThinkingHelps.footer")}
        bgImage={WhenItsNeeded}
        bgPosition="center"
        cardWidth="650px"
        cardPosition={{ bottom: '10%', right: '20%' }}
      />
      <Section
        className={styles.closingText}
        index={5}
        title={t("closing.title")}
        items={getArray("closing.text")}
        footer={t("closing.footer")}
        bgImage={SolutionForBusiness}
        bgPosition="center 80%"
        cardWidth="750px"
        cardPosition={{ bottom: '10%', right: '20%' }}
      />
    </>
  );
};

export default Philosophy;
