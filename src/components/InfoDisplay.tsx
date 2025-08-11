import { useContext } from "react";
import { IpDataContext } from "../contexts/contexts";

interface infoDisplayProps {
  loading: boolean;
  error: string | null;
}

export default function InfoDisplay({ loading, error }: infoDisplayProps) {
  const { ip, isp, location } = useContext(IpDataContext);

  const formatLocation = () => {
    if (!location) return ""
    return `${location.city || ""}, ${location.region || ""} ${location.postalCode || ""}`;
  };

  const formatData = (title: string, dataInput: string) => (
    <div>
      <h3>{title}</h3>
      {!loading && !error && (
        <p>
          {title === "TIMEZONE" ? "UTC" : ""}
          {dataInput || ""}
        </p>
      )}
      {loading && <p>data loading...</p>}
    </div>
  );

  return (
    <div>
      <div>
        {formatData("IP ADDRESS", ip)}
        {formatData("LOCATION", formatLocation())}
        {formatData("TIMEZONE", location.timezone)}
        {formatData("ISP", isp)}
      </div>
      <span>{error}</span>
    </div>
  );
}
