import { useTranslation } from "react-i18next";
import Section from "../../components/common/section/Section"; // Шлях да твайго ўніверсальнага кампанента
import whatIDoBg from "../../assets/engineer-desk.png";
import philosophyBg from "../../assets/automatic_line.png";
import ProjectsBg from "../../assets/kulman.png";
import ContactsBg from "../../assets/invite.png";

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
        bgImage={whatIDoBg}
      />
      <Section
        index={1}
        title={t("philosophy.title")}
        items={getArray("philosophy.description")}
        bgImage={philosophyBg}
        link="/philosophy"
        linkText={t("philosophy.link")}
      />
      <Section
        index={2}
        title={t("projects.title")}
        items={getArray("projects.info")}
        bgImage={ProjectsBg}
        bgPosition="center top"
      />
      <Section
        index={3}
        title={t("contacts.title")}
        items={getArray("contacts.description")}
        bgImage={ContactsBg}
      />
    </>
  );
};

export default Home;
