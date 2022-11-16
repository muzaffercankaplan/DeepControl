import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/router.js";
import { useEffect, useState } from "react";
import userInfoBoard from "../hook/userInfoBoard.js";

const MapWithNoSSR = dynamic(() => import("../components/Map.js"), {
  ssr: false,
});

const Main = () => {
  const { setUserLogin } = userInfoBoard();
  const [data, setData] = useState();
  const router = useRouter();

  useEffect(() => {
    let isNewCreateOnePager = localStorage.getItem("userInfo");
    setData(JSON.parse(isNewCreateOnePager));
    setUserLogin(true);
  }, []);

  if ((data && data?.isLogIn === false) || data === null) {
    router.push("login");
  }

  return (
    <div>
      <MapWithNoSSR />
    </div>
  );
};

export default Main;
