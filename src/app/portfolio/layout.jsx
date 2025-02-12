import styles from "./page.module.css";

export const metadata = {
  title: "Eastern Portfolio",
  description: "This is a full stack app demo generated by create next app",
};

const Layout = ({ children }) => {
  return (
    <div>
      <h1 className={styles.mainTitle}>Our Works</h1>
      {children}
    </div>
  );
};

export default Layout;
