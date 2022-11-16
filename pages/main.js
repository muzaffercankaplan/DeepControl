import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/router.js";
import { useEffect, useState } from "react";

const MapWithNoSSR = dynamic(() => import("../components/Map.js"), {
  ssr: false,
});

const Main = () => {
  const [data, setData] = useState();
  const router = useRouter();

  useEffect(() => {
    let isNewCreateOnePager = localStorage.getItem("userInfo");
    setData(JSON.parse(isNewCreateOnePager));
  }, []);

  if (data && data?.isLogIn === false) {
    router.push("login");
  }

  return (
    <div>
      <MapWithNoSSR />
    </div>
  );
};

export default Main;
