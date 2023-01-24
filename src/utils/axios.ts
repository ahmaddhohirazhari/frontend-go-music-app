import axios from "axios";
import { useState, useEffect } from "react";

interface Data {
  // define the shape of the data that you expect to receive from the API
}

export const useGetData = (url: string) => {
  const [data, setData] = useState<Data | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get<Data>(url);
        setData(response.data);
      } catch (e: any) {
        console.log(e);
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, error, loading };
};
