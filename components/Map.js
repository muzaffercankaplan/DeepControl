import "leaflet/dist/leaflet.css";
import { MapContainer, Polyline, TileLayer, useMap } from "react-leaflet";
import MapMarker from "./MapMarker";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export function ChangeView({ coords }) {
  const map = useMap();
  map.setView(coords, 12);
  return null;
}

export default function Map() {
  const [polyline, setPolyline] = useState([]);
  const [showLine, setShowLine] = useState(true);
  const [completeLine, setCompleteLine] = useState(true);

  const mapMarker = [
    {
      id: 1,
      position: [39.92827, 32.85496],
      myIcon: L.icon({
        iconUrl: "/img/marker.png",
        iconSize: [30, 50],
        popupAnchor: [0, -20],
        shadowSize: [68, 95],
        shadowAnchor: [22, 94],
      }),
      popup: (
        <div>
          <h3>Sıhhiye</h3>
        </div>
      ),
    },
    {
      id: 2,
      position: [39.920824, 32.854046],
      myIcon: L.icon({
        iconUrl: "/img/marker.png",
        iconSize: [30, 50],
        popupAnchor: [0, -20],
        shadowSize: [68, 95],
        shadowAnchor: [22, 94],
      }),
      popup: (
        <div>
          <h3>Kızılay</h3>
          <p>Kızılay Merkez</p>
        </div>
      ),
    },
    {
      id: 3,
      position: [39.97817, 32.86686],
      myIcon: L.icon({
        iconUrl: "/img/marker.png",
        iconSize: [30, 50],
        popupAnchor: [0, -20],
        shadowSize: [68, 95],
        shadowAnchor: [22, 94],
      }),
      popup: (
        <div>
          <h3>Keçiören</h3>
          <p>Keçiören Şelale</p>
        </div>
      ),
    },
    {
      id: 4,
      position: [39.94834009985821, 32.80756239132121],
      myIcon: L.icon({
        iconUrl: "/img/marker.png",
        iconSize: [30, 50],
        popupAnchor: [0, -20],
        shadowSize: [68, 95],
        shadowAnchor: [22, 94],
      }),
      popup: (
        <div>
          <h3>AOÇ</h3>
          <p>Atatürk Orman Çiftliği</p>
        </div>
      ),
    },
    {
      id: 5,
      position: [39.91658919710277, 32.82635062628938],
      myIcon: L.icon({
        iconUrl: "/img/marker.png",
        iconSize: [30, 50],
        popupAnchor: [0, -20],
        shadowSize: [68, 95],
        shadowAnchor: [22, 94],
      }),
      popup: (
        <div>
          <h3>Çankaya</h3>
          <p>Milli Kütüphane</p>
        </div>
      ),
    },
  ];
  const limeOptions = { color: "black" };
  const position = [39.950824, 32.864046];
  const polylineFirstItem = polyline ? polyline[0] : [];
  const seperate = polyline.slice(0, -1);
  const polyLineLastItem = polyline ? polyline[polyline.length - 1] : [];

  const handleCompleteLİne = () => {
    if (completeLine && polylineFirstItem[0] !== polyLineLastItem[0]) {
      setCompleteLine(false);
      setPolyline([...polyline, polylineFirstItem]);
    } else {
      setCompleteLine(true);
      setPolyline(seperate);
    }
  };

  return (
    <div>
      <MapContainer
        center={position}
        zoom={10}
        style={{ height: "80vh", marginTop: "10px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {showLine && (
          <Polyline pathOptions={limeOptions} positions={polyline} />
        )}
        {mapMarker.map((item) => (
          <div key={item.id}>
            <MapMarker
              polyline={polyline}
              setPolyline={setPolyline}
              item={item}
            />
          </div>
        ))}
        <ChangeView coords={position} />
      </MapContainer>
      {polyline.length > 1 && (
        <button
          className={styles.mapButton}
          onClick={() => setShowLine((prev) => !prev)}
        >
          {showLine ? "Hide" : "Show"} line
        </button>
      )}
      {polyline.length > 2 && showLine && (
        <button className={styles.mapButton} onClick={handleCompleteLİne}>
          {completeLine && polylineFirstItem[0] !== polyLineLastItem[0]
            ? "Complete"
            : "Seperate"}
          Lines
        </button>
      )}
    </div>
  );
}
