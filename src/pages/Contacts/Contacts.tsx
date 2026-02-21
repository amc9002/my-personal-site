import { useTranslation } from "react-i18next";
import {
  Linkedin,
  Github,
  Send,
  Mail,
  Globe,
  Home,
  type LucideIcon,
} from "lucide-react";
import Section from "../../components/common/section/Section";
import myPhoto from "../../assets/contact/my-photo.jpeg";
import styles from "./Contacts.module.css";
// Імпартуем нашы даныя
import { CONTACT_LINKS } from "../../data/contactData";

// 1. Ствараем мапу іконак, дзе ключ — гэта label з твайго CONTACT_LINKS
// Ключ — радок, значэнне — тып LucideIcon
const ICON_MAP: Record<string, LucideIcon> = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Telegram: Send,
  Email: Mail,
};

const Contacts = () => {
  const { t } = useTranslation("contacts");

  return (
    <Section index={0} className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.mainGrid}>
          {/* SIDEBAR застаецца без змен */}
          <div className={styles.sidebar}>
            <h1 className={styles.title}>{t("title")}</h1>
            <div className={styles.photoContainer}>
              <img src={myPhoto} alt="Andrej Cieraškoŭ" />
            </div>
          </div>

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

            {/* 2. Элегантны рэндэрынг спіса */}
            <ul className={styles.linkList}>
              {CONTACT_LINKS.map((link) => {
                // Дастаем патрэбную іконку па назве (label)
                const IconComponent = ICON_MAP[link.label] || Mail; // Mail па змаўчанні

                return (
                  <li key={link.label} className={styles.linkItem}>
                    <div className={styles.labelWithIcon}>
                      <IconComponent size={16} />
                      <span className={styles.linkLabel}>{link.label}</span>
                    </div>
                    <div className={styles.linkWrapper}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.value}
                      </a>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contacts;
