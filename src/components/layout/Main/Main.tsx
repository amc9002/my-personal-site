import type { ReactNode } from "react";
import styles from "./Main.module.css"; // Падключаем модуль

type MainProps = {
  children: ReactNode;
};

function Main({ children }: MainProps) {
  // Дадаем клас, які будзе кіраваць усім унутры
  return <main className={styles.mainContainer}>{children}</main>;
}

export default Main;
