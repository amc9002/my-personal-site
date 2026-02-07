import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Hero from "./hero/Hero";
import styles from "./Intro.module.css";

// Лакальны кампанент для секцый
export const Section = ({
  title,
  items,
  link,
  linkText,
}: {
  title: string;
  items: string[];
  link?: string;
  linkText?: string;
}) => {
  if (!items.length && !title) return null;

  return (
    <section className={styles.section}>
      <h1>{title}</h1>
      {/* Калі гэта спіс (whatIDo), малюем ul, калі проста тэкст — параграфы */}
      {title === "Што я раблю" || items.length > 3 ? (
        <ul>
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      ) : (
        items.map((text, i) => <p key={i}>{text}</p>)
      )}

      {link && linkText && (
        <Link to={link} className={styles.moreLink}>
          {linkText}
        </Link>
      )}
    </section>
  );
};

const Intro = () => {
  const { t } = useTranslation("home");

  const getArray = (key: string): string[] => {
    const res = t(key, { returnObjects: true });
    return Array.isArray(res) ? (res as string[]) : [];
  };

  return (
    <>
      <Hero title={t("hero.title")} subtitle={t("hero.subtitle")} />
      <div className={styles.container}>
        <Section title={t("whatIDo.title")} items={getArray("whatIDo.items")} />

        <Section
          title={t("howIThink.title")}
          items={getArray("howIThink.description")}
          link="/how-i-think"
          linkText={t("howIThink.link")}
        />

        <Section
          title={t("projects.title")}
          items={getArray("projects.info")}
        />

        <Section
          title={t("contacts.title")}
          items={getArray("contacts.description")}
        />
      </div>
    </>
  );
};

export default Intro;
