import { useContext, useEffect, useState } from "react";
import "./App.css";
import Search from "./components/Search";
import InfoDisplay from "./components/InfoDisplay";
import MapDisplay from "./components/MapDisplay";
import useFetchData from "./custom hooks/useFetchData";
import { isIP } from "is-ip";
import type { IpData } from "./utils/types";
import { IpDataContext } from "./contexts/contexts";
import Header from "./components/Header";

function App() {
  const [searchValue, setSearchValue] = useState<string>();

  const isIp = searchValue ? isIP(searchValue) : false;

  const { createData } = useContext(IpDataContext);

  const [loading, data, error] = useFetchData<IpData>(
    isIp,
    searchValue as string
  );

  useEffect(() => {
    createData(data);
  }, [createData, data]);

  return (
    <div className="text-[18px] font-rubik flex flex-col h-screen">
      <Header>
        <Search submitSearch={setSearchValue} />
        <InfoDisplay loading={loading} error={error} />
      </Header>
      <MapDisplay />
    </div>
  );
}

export default App;
