import { useContext } from "react";
import { IpDataContext } from "../contexts/contexts";

export default function InfoDisplay() {
  const { ip, isp, location } = useContext(IpDataContext);

  const formatLocation = () => {
    return `${location.city}, ${location.region} ${location.postalCode}`;
  };

  return (
    <div>
      <div>
        <h3>IP ADDRESS</h3>
        <p>{ip}</p>
      </div>
      <div>
        <h3>LOCATION</h3>
        <p>{formatLocation()}</p>
      </div>
      <div>
        <h3>TIMEZONE</h3>
        <p>UTC{location.timezone}</p>
      </div>
      <div>
        <h3>ISP</h3>
        <p>{isp}</p>
      </div>
    </div>
  );

  //ip address
  //location city-state-zip
  //isp
  //time zone?
}
