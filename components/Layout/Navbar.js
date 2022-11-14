import Image from "next/image";
import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={styles.navbarContainer}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Image
          className={styles.navbarImage}
          src="/img/deepControl.png"
          alt="Logo"
          width={370}
          height={70}
        />
      </div>
      <div className={styles.navbarRightSide}>
        <p>SignIn</p>
        <p>SignUp</p>
      </div>
      <div className={styles.navbarMenuContainer}>
        <AiOutlineMenu
          cursor="pointer"
          size={35}
          onClick={() => setShowMenu(!showMenu)}
        />
        {showMenu && (
          <div className={styles.navbarMenu}>
            <p>SignIn</p>
            <p>SignUp</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
