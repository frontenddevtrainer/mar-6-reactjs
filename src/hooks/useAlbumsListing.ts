import { useEffect, useState } from "react";
import axios from "axios";

export const useAlbumsListing = (type: string) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function callApi() {
      try {
        setLoading(true);
        const response = await axios(`http://localhost:3000/${type}`);
        setData(response.data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    callApi();
  }, []);

  return { data, loading, error };
};
