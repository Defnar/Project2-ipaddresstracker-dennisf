import { useContext } from "react";
import { IpDataContext } from "../contexts/contexts";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function MapDisplay() {
  const { location } = useContext(IpDataContext);

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }} 
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
