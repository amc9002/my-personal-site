import React from "react";
import styles from "./Button.module.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "danger" | "ghost";
}

export const Button: React.FC<Props> = ({ variant = "primary", ...props }) => {
  return (
    <button {...props} className={`${styles.button} ${styles[variant]}`} />
  );
};
