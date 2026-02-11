import { useTranslation } from "react-i18next";
import Section from "../../components/common/section/Section"; // Правер шлях да Section
import styles from "./Methodology.module.css";

const Methodology = () => {
  const { t } = useTranslation("methodology");

  return (
    <div className={styles.methodologyPage}>
      <Section
        index={0}
        title={t("methodology.title")}
        description={t("methodology.description")}
        items={t("methodology.steps", { returnObjects: true }) as string[]}
        footer={t("methodology.footer")}
        />
    </div>
  );
};

export default Methodology;
// Пакуль гэта пустая старонка, але ты можаш запоўніць яе зместам, калі хочаш. Я проста стварыў яе для таго, каб навігацыя працавала і не ламаць сайт.  
