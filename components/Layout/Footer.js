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
        <a
          className={styles.footerLinkText}
          href="https://deepcontrol.net/policy"
        >
          Politikalarımız
        </a>
        <a
          className={styles.footerLinkText}
          href="https://deepcontrol.net/contact"
        >
          İletişim
        </a>
      </div>
    </div>
  );
};

export default Footer;
