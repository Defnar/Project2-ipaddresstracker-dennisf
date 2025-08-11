import { createContext } from "react";
import type { IpDataType } from "../utils/types";

export const IpDataContext = createContext<IpDataType>({
  ip: "0.0.0.0",
  loading: false,
  error: null,
  domains: [],
  location: {
    country: "",
    city: "",
    region: "",
    lat: 0,
    lng: 0,
    postalCode: 0,
    timezone: "",
    geonameId: 0,
  },
  as: {
    asn: 0,
    name: "",
    route: "",
    domain: "",
    type: "",
  },
  isp: "",

  createData: () => {},
});
