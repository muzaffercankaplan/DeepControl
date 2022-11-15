import { useState } from "react";
import { Marker, Popup } from "react-leaflet";

const MapMarker = ({ item, polyline, setPolyline }) => {
  const [locationImage, setLocationImage] = useState("");

  const firstLocatıonIcon = L.icon({
    iconUrl: "/img/first-marker-icon.png",
    iconSize: [50, 50],
    popupAnchor: [0, -20],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  });
  const lastLocationIcon = L.icon({
    iconUrl: "/img/last-marker-icon.png",
    iconSize: [30, 50],
    popupAnchor: [0, -20],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  });
  const lastIndex = polyline[polyline.length - 1]?.[0];

  let lat = polyline.map((latlng) => latlng?.[0]);
  console.log(polyline);
  return (
    <div>
      <Marker
        eventHandlers={{
          click: (e) => {
            if (lat.includes(e.latlng.lat) === false) {
              if (
                polyline.length === 0 ||
                polyline?.[0]?.[0] === e.latlng.lat
              ) {
                setLocationImage("first");
              } else if (polyline.length > 0 && lastIndex !== e.latlng.lat) {
                setLocationImage("last");
              } else {
                setLocationImage("");
              }
              setPolyline([...polyline, [e.latlng.lat, e.latlng.lng]]);
            } else {
              setLocationImage("");
              console.log(locationImage);
              const index = lat.indexOf(e.latlng.lat);
              const newPolyline = [...polyline];
              const slicePolyLine = newPolyline.splice(index, 1);
              setPolyline(newPolyline);
            }
          },
        }}
        icon={
          locationImage === ""
            ? item.myIcon
            : locationImage === "first"
            ? firstLocatıonIcon
            : lastLocationIcon
        }
        position={item.position}
      >
        <Popup>{item.popup}</Popup>
      </Marker>
    </div>
  );
};

export default MapMarker;
