import React, { useId } from "react";
import styles from "./Input.module.css";

interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  textarea?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  textarea = false,
}) => {
  const id = useId();

  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          className={styles.field}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input
          id={id}
          className={styles.field}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </div>
  );
};
