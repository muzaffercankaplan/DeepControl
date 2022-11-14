import Link from "next/link";
import styles from "../../styles/Home.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <p style={{ fontWeight: "600" }}>
        © 2020{" "}
        <span style={{ fontWeight: "900", color: "#221638" }}>
          Deep Control Technology
        </span>
      </p>
      <div className={styles.footerLinkContainer}>
        <Link
          className={styles.footerLinkText}
          href="https://deepcontrol.net/policy"
        >
          Politikalarımız
        </Link>
        <Link
          className={styles.footerLinkText}
          href="https://deepcontrol.net/contact"
        >
          İletişim
        </Link>
      </div>
    </div>
  );
};

export default Footer;
