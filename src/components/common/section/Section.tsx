import React from "react";
import { Link } from "react-router-dom";
import styles from "./Section.module.css";

interface SectionProps {
  className?: string;
  title?: string;
  description?: string;
  items?: string[];
  link?: string;
  linkText?: string;
  image?: string;
  footer?: string;
  index: number;
}

const Section: React.FC<SectionProps> = ({
  className,
  title,
  description,
  items = [],
  link,
  linkText,
  image,
  footer,
  index,
}) => {
  if (!items.length && !title && !description && !footer) return null;

  const isAlt = index % 2 !== 0;

  return (
    <section
      className={`${styles.section} ${isAlt ? styles.altBg : ""} ${className || ""}`}
    >
      <div className={`${styles.container} `}>
        <div className={styles.textContent}>
          <h1>{title}</h1>
          {description && <p className={styles.description}>{description}</p>}
          {items.length > 3 ? (
            <ul>
              {items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            items.map((text, i) => <p key={i}>{text}</p>)
          )}
          {footer && <p className={styles.footerText}>{footer}</p>}
          {link && linkText && (
            <Link to={link} className={styles.moreLink}>
              {linkText}
            </Link>
          )}
        </div>
        {image && (
          <div className={styles.imageBox}>
            <div className={styles.placeholder}>[Малюнак: {image}]</div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Section;
