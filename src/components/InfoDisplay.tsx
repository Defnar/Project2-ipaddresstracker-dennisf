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
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-dark-gray text-[10px]">{title}</h3>
      {!loading && !error && (
        <p className="font-bold text-very-dark-gray">
          {title === "TIMEZONE" ? "UTC" : ""}
          {dataInput || ""}
        </p>
      )}
      {loading && <p>data loading...</p>}
    </div>
  );

  return (
    <div className="flex flex-col justify-center items-center absolute z-50 bg-white min-w-[300px] h-[300px] rounded-lg translate-y-1/2 bottom-0">
      <div className="flex flex-col gap-4 px-10 py-5">
        {formatData("IP ADDRESS", ip)}
        {formatData("LOCATION", formatLocation())}
        {formatData("TIMEZONE", location.timezone)}
        {formatData("ISP", isp)}
      </div>
      <span>{error}</span>
    </div>
  );
}
