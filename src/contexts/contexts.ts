import { createContext } from "react";
import type { IpDataType } from "../utils/types";

export const IpDataContext = createContext<IpDataType>({
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

  createData: () => {},
});
