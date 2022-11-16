import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const HomePage = () => {
  const [data, setData] = useState();
  const router = useRouter();

  useEffect(() => {
    let isNewCreateOnePager = localStorage.getItem("userInfo");
    setData(JSON.parse(isNewCreateOnePager));
  }, []);

  if (typeof window !== "undefined") {
    if (data?.isLogIn) {
      router.push("/main");
    } else if (!data) {
      router.push("/login");
    }
  }
  return <div>Loading</div>;
};

export default HomePage;
