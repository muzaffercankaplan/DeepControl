import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";

const Register = () => {
  const intialValidation = {
    name: "",
    email: "",
    password: "",
    isLogIn: false,
  };
  const [userInfo, setUserInfo] = useState(intialValidation);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleCreateAccount = () => {
    if (userInfo.email && userInfo.password && userInfo.name) {
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      router.push("/login");
    } else {
      setError(true);
    }
    setTimeout(() => {
      setError(false);
    }, 5000);
  };
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginInput}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          minLength="2"
          value={userInfo.name}
          onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
          placeholder="name"
        />
      </div>
      <div className={styles.loginInput}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={userInfo.email}
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
          placeholder="email@mail.com"
        />
      </div>
      <div style={{ position: "relative" }} className={styles.loginInput}>
        <span
          className={styles.loginShowPassword}
          onClick={() => setShowPassword((prevValue) => !prevValue)}
        >
          <Image
            width={24}
            height={24}
            alt="show password"
            src={showPassword ? "/img/eye.png" : "/img/hide.png"}
          />
        </span>
        <label htmlFor="password">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="********"
          minLength="8"
          value={userInfo.password}
          onChange={(e) =>
            setUserInfo({ ...userInfo, password: e.target.value })
          }
        />
      </div>
      {error && (
        <p style={{ color: "red", margin: "-5px" }}>
          Please fill in all fields
        </p>
      )}
      <button onClick={handleCreateAccount} className={styles.button}>
        Create account
      </button>
      <p
        onClick={() => router.push("/login")}
        className={styles.registerFooterText}
      >
        Back
      </p>
    </div>
  );
};

export default Register;
