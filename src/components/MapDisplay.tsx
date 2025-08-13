import { useContext } from "react";
import { IpDataContext } from "../contexts/contexts";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MapAutomation from "./MapAutomation";
import { Icon } from "leaflet";
import iconLocation from "/src/assets/icon-location.svg";


export default function MapDisplay() {
  const { ip, location } = useContext(IpDataContext);

  const markerIcon = new Icon({
    iconUrl: iconLocation,
    iconSize: [46, 56],
    iconAnchor: [23, 56],
    popupAnchor: [0, -56]
  });

  return (
    <div className="z-10 w-full grow">
      <MapContainer
        center={[location.lat, location.lng]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
        className="z-10"
        zoomControl={false}
      >
        <MapAutomation />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[location.lat, location.lng]} icon={markerIcon}>
          <Popup>
            {ip}
            <br />
            {`${location.city}, ${location.region} ${location.postalCode}`}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
