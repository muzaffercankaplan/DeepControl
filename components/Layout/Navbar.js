import React, { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [data, setData] = useState();
  const router = useRouter();

  useEffect(() => {
    let isNewCreateOnePager = localStorage.getItem("userInfo");
    setData(JSON.parse(isNewCreateOnePager));
  }, []);

  return (
    <div className={styles.navbarContainer}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link href="https://deepcontrol.net/">
          <img
            className={styles.navbarImage}
            src="./img/deepControl.png"
            alt="Logo"
            loading="lazy"
          />
        </Link>
      </div>
      <div className={styles.navbarRightSide}>
        {!data?.isLogIn && (
          <Link className={styles.navbarLinkText} href="/">
            SignIn
          </Link>
        )}
        <Link
          onClick={() => {
            localStorage.setItem(
              "userInfo",
              JSON.stringify({ ...data, isLogIn: false })
            );
          }}
          className={styles.navbarLinkText}
          href={data?.isLogIn ? "login" : "register"}
        >
          {data?.isLogIn ? "Sign Out" : "SignUp"}
        </Link>
      </div>
      <div className={styles.navbarMenuContainer}>
        <AiOutlineMenu
          cursor="pointer"
          size={35}
          onClick={() => setShowMenu(!showMenu)}
        />
        {showMenu && (
          <div className={styles.navbarMenu}>
            {!data?.isLogIn && (
              <Link className={styles.navbarLinkText} href="/">
                SignIn
              </Link>
            )}
            <Link
              onClick={() => {
                localStorage.setItem(
                  "userInfo",
                  JSON.stringify({ ...data, isLogIn: false })
                );
              }}
              className={styles.navbarLinkText}
              href="login"
            >
              {data?.isLogIn ? "SignOut" : "SignUp"}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
