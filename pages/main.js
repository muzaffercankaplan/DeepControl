import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(() => import("../components/Map.js"), {
  ssr: false,
});

const main = () => {
  return (
    <div>
      <MapWithNoSSR />
    </div>
  );
};

export default main;
