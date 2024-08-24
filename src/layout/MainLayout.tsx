import styles from "./mainLayout.module.css";

export const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className={styles.gridLayout}>
      <nav className={styles.navBar}>
        <p>menu1</p>
        <p>menu1</p>
      </nav>
      {children}
    </main>
  );
};
