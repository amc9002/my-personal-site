import { useTranslation } from "react-i18next";
import Section from "../../components/common/section/Section"; // Шлях да твайго ўніверсальнага кампанента

const Home = () => {
  const { t } = useTranslation("home");

  const getArray = (key: string): string[] => {
    const res = t(key, { returnObjects: true });
    return Array.isArray(res) ? (res as string[]) : [];
  };

  return (
    <>
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

export default Home;
