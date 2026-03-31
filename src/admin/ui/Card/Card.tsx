import React from "react";
import styles from "./Card.module.css";

interface Props {
  title?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}

export const Card: React.FC<Props> = ({ title, action, children }) => {
  return (
    <div className={styles.card}>
      {(title || action) && (
        <div className={styles.header}>
          {title && <h4 className={styles.title}>{title}</h4>}
          {action}
        </div>
      )}
      <div className={styles.body}>{children}</div>
    </div>
  );
};
