import React from "react";
import styles from "../Admin.module.css";

interface LangSwitcherProps {
  currentLang: "be" | "en" | "de" | "pl" | "ru";
  onLangChange: (lang: "be" | "en" | "de" | "pl" | "ru") => void;
  // Гэта тое, што прыходзіць з Admin.tsx
  downloadedStatus: Record<string, boolean>;
}

export const LangSwitcher: React.FC<LangSwitcherProps> = ({
  currentLang,
  onLangChange,
  downloadedStatus,
}) => {
  const langs: ("be" | "en" | "de" | "pl" | "ru")[] = [
    "be",
    "ru",
    "en",
    "de",
    "pl",
  ];

  return (
    <div className={styles.topBar}>
      <h1>🛠 Case Builder</h1>
      <div className={styles.langSwitch}>
        {langs.map((l) => (
          <button
            key={l}
            onClick={() => onLangChange(l)}
            className={currentLang === l ? styles.active : ""}
          >
            {l.toUpperCase()}
            {/* ТУТ ДАДАЕМ ГАЛАЧКУ */}
            {downloadedStatus[l] && (
              <span style={{ marginLeft: "5px" }}>✅</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
