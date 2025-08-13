import { useEffect, useState } from "react";

export default function useFetchData<apiData>(
  searchByIp: boolean,
  searchParam: string
): [boolean, apiData | null, string | null] {
  const apiKey = import.meta.env.VITE_API_KEY;
  const baseURL = "https://geo.ipify.org/api/v2/country,city?apiKey=";
  let isActive = true;

  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<apiData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    //creates api using parameters and link + api key
    const url = `${baseURL}${apiKey}&${
      searchByIp ? "ipAddress=" : "domain="
    }${searchParam}`;

    //so we aren't sending empty requests/undefined requests
    if (!searchParam || searchParam === "") return;

    //reseting data
    setLoading(true);
    setError(null);

    //timeout and abort functions for fetch data
    const controller = new AbortController();
    const abortTimeout = setTimeout(() => {
      controller.abort();
    }, 5000);

    //fetch data
    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) {
          if (response.status === 400) throw new Error ("domain or IP does not exist")
          throw new Error(`HTTP Error: ${response.status}`);
        }
        const responseData = await response.json();
        if (isActive) setData(responseData);
      } catch (error) {
        if (!isActive) return;
        if (error instanceof DOMException && error.name === "AbortError")
          setError("user aborted or fetching data timed out");
        setError((error as Error).message);
      } finally {
        clearTimeout(abortTimeout);
        if (isActive) setLoading(false);
      }
    };

    fetchData();

    return () => {
      isActive = false;
      controller.abort();
      clearTimeout(abortTimeout);
    };
  }, [searchParam, searchByIp]);

  return [loading, data, error];
}
