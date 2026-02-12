import React, { type CSSProperties } from "react";
import { Link } from "react-router-dom";
import styles from "./Section.module.css";
import typoStyles from "../../../styles/typography.module.css";
import { parseText } from "../../../utils/parseText"; // Імпарт функцыі для <b>
import { type SectionProps } from "../../../types/sectiion"; // Імпарт тыпу для пропсаў

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
  children,
  cardPosition,
  cardWidth,
  cardMaxWidth,
  bgImage,
  bgPosition = "center", // Па змаўчанні цэнтраванне фона
  bgSize = "cover", // Па змаўчанні пакрыццё фона
}) => {
  if (!items.length && !title && !description && !footer && !children)
    return null;

  const isAlt = index % 2 !== 0;

  // Калі ёсць bgImage, ствараем аб'ект стыляў для фона
  const sectionStyle: CSSProperties = {
    ...(bgImage
      ? {
          "--bg-image": `url(${bgImage})`,
          "--bg-pos": bgPosition || "center center",
          "--bg-size": bgSize || "cover",
        }
      : {}),
    "--card-top": cardPosition?.top || "auto",
    "--card-bottom": cardPosition?.bottom || "16vh",
    "--card-left": cardPosition?.left || "auto",
    "--card-right": cardPosition?.right || "auto",
    "--card-width": cardWidth || "auto",
    "--card-max-width": cardMaxWidth || "750",
  } as CSSProperties;

  return (
    <section
      className={`${styles.section} 
        ${isAlt ? styles.altBg : ""} 
        ${bgImage ? styles.withBg : ""} 
        ${className || ""}`}
      style={sectionStyle}
    >
      {bgImage && (
        <div
          className={styles.mobileImage}
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}
      <div className="container">
        {/* Калі ёсць фон, ахінаем тэкст у glassCard */}
        <div
          className={`${bgImage ? styles.glassCard : styles.textContent} ${typoStyles.prose}`}
        >
          <h1>{title}</h1>
          {description && <p className={styles.description}>{description}</p>}

          {items.length > 3 ? (
            <ul>
              {items.map((item, i) => (
                <li key={i}>{parseText(item)}</li>
              ))}
            </ul>
          ) : (
            items.map((text, i) => <p key={i}>{text}</p>)
          )}

          {children}

          {footer && <p className={styles.footerText}>{footer}</p>}

          {link &&
            linkText &&
            (link.startsWith("http") ? (
              /* Знешняя спасылка */
              <a
                href={link}
                className={styles.moreLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {linkText}
              </a>
            ) : (
              /* Унутраная спасылка */
              <Link to={link} className={styles.moreLink}>
                {linkText}
              </Link>
            ))}
        </div>

        {image &&
          !bgImage && ( // Малюнак побач паказваем толькі калі няма фона
            <div className={styles.imageBox}>
              <div className={styles.placeholder}>[Малюнак: {image}]</div>
            </div>
          )}
      </div>
    </section>
  );
};

export default Section;
