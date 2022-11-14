import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <Head>
        <title>Deep Control Technology</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/deep.ico" />
      </Head>
      <div>
        <Navbar />
        <div className={styles.childrenContainer}>
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
