import { useState } from "react";
import { IpDataContext } from "./contexts";
import type { IpData } from "../utils/types";

interface AppProviders {
  children: React.ReactNode;
}

export default function AppProviders({ children }: AppProviders) {
  const [ipData, setIpData] = useState<IpData>({
    ip: "0.0.0.0",
    domains: [],
    as: {
      asn: 0,
      name: "",
      route: "",
      domain: "",
      type: "",
    },
    isp: "",

    loading: false,
    error: null,
  });

  const createData = (newIpData: IpData) => setIpData(newIpData);

  return (
    <IpDataContext.Provider value={{ ...ipData, createData }}>
      {children}
    </IpDataContext.Provider>
  );
}
