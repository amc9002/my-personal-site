import { useTranslation } from "react-i18next";
import Section from "../../components/common/section/Section"; // Шлях да твайго ўніверсальнага кампанента
import whatIDoBg from "../../assets/home/Engineer Desk_BW.png";
import ImNeeded from "../../assets/home/INeeded.png";
import ProjectsBg from "../../assets/home/ProjectBg.png";
import ContactsBg from "../../assets/home/Notebook.png";

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
        title={t("whenIAmNeeded.title")}
        items={getArray("whenIAmNeeded.items")}
        bgImage={ImNeeded}
        footer={t("whenIAmNeeded.footer")}
        bgPosition="center 0.75%"
        cardPosition={{ bottom: "10%", right: "5%" }}
        cardWidth="650px"
        link="/philosophy"
        linkText={t("whenIAmNeeded.linktext")}
      />
      <Section
        index={1}
        title={t("whatIDo.title")}
        items={getArray("whatIDo.items")}
        bgImage={whatIDoBg}
        cardPosition={{ bottom: "10%", left: "15%" }}
        cardWidth="450px"
      />
      <Section
        index={2}
        title={t("projects.title")}
        items={getArray("projects.info")}
        bgImage={ProjectsBg}
        bgPosition="center 80%"
        cardPosition={{ top: "10%", right: "15%" }}
        cardWidth="450px"
        link="/projects"
        linkText={t("projects.linktext")}
      />
      <Section
        index={3}
        title={t("contacts.title")}
        items={getArray("contacts.description")}
        bgImage={ContactsBg}
        cardPosition={{ top: "10%", left: "20%" }}
        cardWidth="450px"
        link="/contact"
        linkText={t("contacts.linktext")}
      />
    </>
  );
};

export default Home;
