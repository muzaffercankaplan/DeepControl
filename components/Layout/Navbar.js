import React, { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import userInfoBoard from "../../hook/userInfoBoard";

const Navbar = () => {
  const { userLogin, setUserLogin } = userInfoBoard();
  const [showMenu, setShowMenu] = useState(false);

  const [data, setData] = useState();
  useEffect(() => {
    const isNewCreateOnePager = localStorage.getItem("userInfo");
    if (isNewCreateOnePager) setData(JSON.parse(isNewCreateOnePager));
  }, []);

  return (
    <div className={styles.navbarContainer}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link href="https://deepcontrol.net/">
          <Image
            width={300}
            height={50}
            src="/img/deepControl.png"
            alt="Logo"
            loading="lazy"
          />
        </Link>
      </div>
      <div className={styles.navbarRightSide}>
        {!userLogin ? (
          <div style={{ display: "flex", gap: "20px" }}>
            <Link className={styles.navbarLinkText} href="login">
              SignIn
            </Link>
            <Link className={styles.navbarLinkText} href="register">
              SignUp
            </Link>
          </div>
        ) : (
          <Link
            onClick={() => {
              localStorage.setItem(
                "userInfo",
                JSON.stringify({ ...data, isLogIn: false })
              );
              setUserLogin(false);
            }}
            className={styles.navbarLinkText}
            href="login"
          >
            LogOut
          </Link>
        )}
      </div>
      <div className={styles.navbarMenuContainer}>
        <AiOutlineMenu
          cursor="pointer"
          size={35}
          onClick={() => setShowMenu(!showMenu)}
        />
        {showMenu && (
          <div className={styles.navbarMenu}>
            {!userLogin ? (
              <div className={styles.navbarMenuContent}>
                <Link className={styles.navbarLinkText} href="login">
                  SignIn
                </Link>
                <Link className={styles.navbarLinkText} href="register">
                  SignUp
                </Link>
              </div>
            ) : (
              <Link
                onClick={() => {
                  localStorage.setItem(
                    "userInfo",
                    JSON.stringify({ ...data, isLogIn: false })
                  );
                  setUserLogin(false);
                }}
                className={styles.navbarLinkText}
                href="login"
              >
                LogOut
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
