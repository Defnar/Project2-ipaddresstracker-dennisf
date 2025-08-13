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
    <div className="flex flex-col justify-center items-center md:place-items-start md:place-content-start w-full h-full md:px-2 gap-2">
      <h2 className="text-dark-gray text-[12px] font-bold">{title}</h2>
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
    <div className="flex flex-col justify-center items-center absolute mx-10 z-50 bg-white min-w-[300px] w-[300px] md:w-4/5 max-w-[1000px] md:h-[175px]  rounded-lg translate-y-1/2 bottom-0">
      <div className="flex flex-col md:flex-row w-[300px] md:w-full h-fit md:min-h-[125px] md:justify-evenly md:divide-x-1 md:divide-dark-gray gap-4 px-10 py-5 md:pt-10">
        {formatData("IP ADDRESS", ip)}
        {formatData("LOCATION", formatLocation())}
        {formatData("TIMEZONE", location.timezone)}
        {formatData("ISP", isp)}
      </div>
      {error && <span>{error}</span>}
    </div>
  );
}
