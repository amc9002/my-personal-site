import styles from "./Contacts.module.css";
import Section from "../../components/common/section/Section";
import myPhoto from "../../assets/my-photo.jpeg";
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const { t } = useTranslation("contacts");

  return (
    <Section index={0} className={styles.contactSection}>
      {/* Кантэйнер для цэнтравання ўсёй секцыі */}
      <div className={styles.container}>
        <div className={styles.mainGrid}>
          <div className={styles.sidebar}>
            <h1 className={styles.title}>{t("title")}</h1>
            <div className={styles.photoContainer}>
              <img src={myPhoto} alt="Andrej Cieraškoŭ" />
            </div>
          </div>

          <div className={styles.content}>
            <p className={styles.contactLead}>{t("lead")}</p>

            <div className={styles.workStatus}>
              <p style={{ whiteSpace: "pre-line", margin: 0 }}>
                {t("work_status")}
              </p>
            </div>

            <ul className={styles.linkList}>
              {/* LinkedIn */}
              <li className={styles.linkItem}>
                <span className={styles.linkLabel}>LinkedIn</span>
                <div className={styles.linkWrapper}>
                  <a
                    href="https://www.linkedin.com/in/andrej-ciera%C5%A1ko%C5%AD-40294322/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/andrej-cieraskou
                  </a>
                </div>
              </li>

              {/* GitHub */}
              <li className={styles.linkItem}>
                <span className={styles.linkLabel}>GitHub</span>
                <div className={styles.linkWrapper}>
                  <a
                    href="https://github.com/amc9002"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/amc9002
                  </a>
                </div>
              </li>

              {/* Telegram — вярнулі! */}
              <li className={styles.linkItem}>
                <span className={styles.linkLabel}>Telegram</span>
                <div className={styles.linkWrapper}>
                  <a
                    href="https://t.me/Jjjsss2024"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @andrej_c
                  </a>
                </div>
              </li>

              {/* Email */}
              <li className={styles.linkItem}>
                <span className={styles.linkLabel}>Email</span>
                <div className={styles.linkWrapper}>
                  <a href="mailto:9002amc@gmail.com">9002amc@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contacts;
