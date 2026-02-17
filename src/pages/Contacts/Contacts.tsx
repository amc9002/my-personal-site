import styles from "./Contacts.module.css";
import Section from "../../components/common/section/Section";
import myPhoto from "../../assets/my-photo.jpeg";
import { useTranslation } from "react-i18next";
import { CONTACT_LINKS } from "../../data/contactData";

const Contacts = () => {
  const { t } = useTranslation("contacts");

  return (
    <Section index={0} className={styles.contactSection}>
      <div className={styles.mainGrid}>
        {/* Левая калонка */}
        <div className={styles.sidebar}>
          <h1 className={styles.title}>{t("title")}</h1>
          <div className={styles.photoContainer}>
            <img src={myPhoto} alt="Andrej Cieraškoŭ" />
          </div>
        </div>

        {/* Правая калонка */}
        <div className={styles.content}>
          <p className={styles.contactLead}>{t("lead")}</p>

          <ul className={styles.linkList}>
            {CONTACT_LINKS.map((link, i) => (
              <li key={i}>
                <span className={styles.linkLabel}>{link.label}</span>
                <a href={link.url} target="_blank" rel="noreferrer">
                  {link.value}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Contacts;
