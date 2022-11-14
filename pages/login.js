import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    isLogIn: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState();
  const router = useRouter();
  useEffect(() => {
    let isNewCreateOnePager = localStorage.getItem("userInfo");
    setData(JSON.parse(isNewCreateOnePager));
  }, []);
  console.log(userInfo);
  const handleLogin = () => {
    if (userInfo.email && userInfo.password) {
      if (data) {
        if (
          data.email === userInfo.email &&
          data.password === userInfo.password
        ) {
          localStorage.setItem(
            "userInfo",
            JSON.stringify({ ...data, isLogIn: true })
          );
          router.push("/main");
        } else {
          setError("Your creditentials are not correct!");
        }
      } else {
        setError("Your creditentials are not correct!");
      }
    } else {
      setError("Please fill in all fields");
    }
  };
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginInput}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
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
          <img src={showPassword ? "/img/eye.png" : "/img/hide.png"} />
        </span>
        <label htmlFor="password">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="********"
          value={userInfo.password}
          onChange={(e) =>
            setUserInfo({ ...userInfo, password: e.target.value })
          }
        />
      </div>
      {error && <p style={{ color: "red", margin: "-5px" }}>{error}</p>}
      <button onClick={handleLogin} className={styles.button}>
        Login
      </button>
      <p className={styles.loginFooterText}>
        Don't have an account?{" "}
        <span
          onClick={() => router.push("/register")}
          className={styles.loginLink}
        >
          Sign Up
        </span>
      </p>
    </div>
  );
};

export default Login;
