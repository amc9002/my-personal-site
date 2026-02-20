import { useTranslation } from "react-i18next";
import { Linkedin, Github, Send, Mail, Globe, Home } from "lucide-react";
import Section from "../../components/common/section/Section";
import myPhoto from "../../assets/contact/my-photo.jpeg";
import styles from "./Contacts.module.css";

const Contacts = () => {
  const { t } = useTranslation("contacts");

  return (
    <Section index={0} className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.mainGrid}>
          {/* SIDEBAR: Visual Identity */}
          <div className={styles.sidebar}>
            <h1 className={styles.title}>{t("title")}</h1>
            <div className={styles.photoContainer}>
              <img src={myPhoto} alt="Andrej Cieraškoŭ" />
            </div>
          </div>

          {/* CONTENT: Information & Call to Action */}
          <div className={styles.content}>
            <p className={styles.contactLead}>{t("lead")}</p>

            <div className={styles.ctaParagraph}>
              <p>{t("discuss")}</p>
            </div>

            <div className={styles.workStatus}>
              <div className={styles.statusItem}>
                <Globe size={18} className={styles.statusIcon} />
                <span>{t("status_remote")}</span>
              </div>
              <div className={styles.statusItem}>
                <Home size={18} className={styles.statusIcon} />
                <span>{t("status_hybrid")}</span>
              </div>
            </div>

            <ul className={styles.linkList}>
              {[
                {
                  id: "linkedin",
                  icon: Linkedin,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/andrej-ciera%C5%A1ko%C5%AD-40294322/",
                  text: "linkedin.com/in/andrej-cieraskou",
                },
                {
                  id: "github",
                  icon: Github,
                  label: "GitHub",
                  href: "https://github.com/amc9002",
                  text: "github.com/amc9002",
                },
                {
                  id: "telegram",
                  icon: Send,
                  label: "Telegram",
                  href: "https://t.me/Jjjsss2024",
                  text: "@andrej_c",
                },
                {
                  id: "email",
                  icon: Mail,
                  label: "Email",
                  href: "mailto:9002amc@gmail.com",
                  text: "9002amc@gmail.com",
                },
              ].map((link) => (
                <li key={link.id} className={styles.linkItem}>
                  <div className={styles.labelWithIcon}>
                    <link.icon size={16} />
                    <span className={styles.linkLabel}>{link.label}</span>
                  </div>
                  <div className={styles.linkWrapper}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.text}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contacts;
