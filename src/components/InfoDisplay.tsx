import { useContext } from "react";
import { IpDataContext } from "../contexts/contexts";
import Loader from "./Loader";

interface infoDisplayProps {
  loading: boolean;
  error: string | null;
}

export default function InfoDisplay({ loading, error }: infoDisplayProps) {
  const { ip, isp, location } = useContext(IpDataContext);

  const formatLocation = () => {
    if (!location || !location.city) return "";
    return `${location.city || ""}, ${location.region || ""} ${
      location.postalCode || ""
    }`;
  };

  const formatData = (title: string, dataInput: string) => (
    <div className="flex flex-col justify-center items-center content-center md:place-items-start md:place-content-start w-full h-full md:px-2 gap-2">
      <h2 className="text-dark-gray text-[10px] font-bold tracking-wider">
        {title}
      </h2>
      {!loading && !error && (
        <p className="font-bold text-very-dark-gray text-center">
          {title === "TIMEZONE" ? "UTC" : ""}
          {dataInput || ""}
        </p>
      )}
    </div>
  );

  return (
    <div className="shadow-md flex flex-col justify-center items-center absolute z-50 bg-white min-w-[300px] w-[300px] md:w-4/5 max-w-[1250px] md:h-[175px]  lg:h-[150px] rounded-2xl translate-y-1/2 bottom-0">
      <div className="flex flex-col md:flex-row w-[300px] md:w-full md:h-full justify-center items-center md:justify-evenly md:divide-x-1 md:divide-dark-gray gap-4 px-10 py-5 md:pt-10">
        {!loading && !error && (
          <>
            {formatData("IP ADDRESS", ip)}
            {formatData("LOCATION", formatLocation())}
            {formatData("TIMEZONE", location.timezone)}
            {formatData("ISP", isp)}
          </>
        )}
        {loading && !error && <Loader />}
      </div>
      {error && <span className="text-[24px] text-red-600">{error}</span>}
    </div>
  );
}
