import { useTranslation } from "react-i18next";
import Hero from "./hero/Hero";
import Section from "../common/section/Section";

const Intro = () => {
  const { t } = useTranslation("home");

  const getArray = (key: string): string[] => {
    const res = t(key, { returnObjects: true });
    return Array.isArray(res) ? (res as string[]) : [];
  };

  return (
    <>
      <Hero title={t("hero.title")} subtitle={t("hero.subtitle")} />
      <Section
        index={0}
        title={t("whatIDo.title")}
        items={getArray("whatIDo.items")}
      />
      <Section
        index={1}
        title={t("howIThink.title")}
        items={getArray("howIThink.description")}
        link="/how-i-think"
        linkText={t("howIThink.link")}
      />
      <Section
        index={2}
        title={t("projects.title")}
        items={getArray("projects.info")}
      />
      <Section
        index={3}
        title={t("contacts.title")}
        items={getArray("contacts.description")}
      />
    </>
  );
};

export default Intro;
