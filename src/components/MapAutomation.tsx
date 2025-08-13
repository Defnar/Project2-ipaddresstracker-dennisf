import { useContext, useEffect } from "react";
import { useMap } from "react-leaflet";
import { IpDataContext } from "../contexts/contexts";

export default function MapAutomation() {
  const { location } = useContext(IpDataContext);
  const map = useMap();

  useEffect(() => {
    map.flyTo([location.lat, location.lng + 2], map.getZoom());
  }, [location, map]);

  return null;
}
