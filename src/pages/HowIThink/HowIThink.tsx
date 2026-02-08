import { useTranslation } from "react-i18next";
import Section from "../../components/blocks/common/section/Section"; // Шлях да твайго ўніверсальнага кампанента
import styles from "./HowIThink.module.css"; // Калі патрэбныя спецыфічныя стылі для гэтай старонкі

interface Role {
  name: string;
  description: string;
}

const HowIThink = () => {
  const { t } = useTranslation("howIThink");

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
      />
      <Section
        index={1}
        title={t("engineerVsExecutor.title")}
        description={t("engineerVsExecutor.text")}
        items={(
          t("engineerVsExecutor.roles", { returnObjects: true }) as Role[]
        ).map((r) => `${r.name}: ${r.description}`)}
      />
      <Section
        index={2}
        title={t("whyProblemsComeBack.title")}
        description={t("whyProblemsComeBack.text")}
        items={getArray("whyProblemsComeBack.points")}
      />
      <Section
        index={3}
        title={t("toolsAreNotThePoint.title")}
        description={t("toolsAreNotThePoint.text")}
        items={getArray("toolsAreNotThePoint.responsibilities")}
      />
      <Section
        index={4}
        title={t("whenThisWayOfThinkingHelps.title")}
        items={getArray("whenThisWayOfThinkingHelps.cases")}
        footer={t("whenThisWayOfThinkingHelps.footer")}
      />
      <Section
        className={styles.closingText}
        index={5}
        description={t("closing.text")}
        items={getArray("closing.items")}
      />
    </>
  );
};

export default HowIThink;
