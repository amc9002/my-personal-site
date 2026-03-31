import styles from "./AdminLayout.module.css";

interface Props {
  topBar: React.ReactNode;
  children: React.ReactNode;
}

export const AdminLayout: React.FC<Props> = ({ topBar, children }) => {
  return (
    <div className={styles.root}>
      <header className={styles.topBar}>{topBar}</header>
      <main className={styles.content}>{children}</main>
    </div>
  );
};
