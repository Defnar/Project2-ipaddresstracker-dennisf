export interface HeaderType {
  children: React.ReactNode;
}

export interface Location {
  country: string;
  city: string;
  region: string;
  lat: number;
  lng: number;
  postalCode: number;
  timezone: string;
  geonameId: number;
}

export type Domains = string[];

export interface AS {
  asn: number;
  name: string;
  route: string;
  domain: string;
  type: string;
}

export interface IpData {
  ip: string;
  domains: Domains;
  as: AS;
  isp: string;
}

export interface IpDataType extends IpData {
  createData: (newIpData: IpData) => void;
}
