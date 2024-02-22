// import { AbortController } from 'abort-controller';
import { useState, useEffect } from 'react';

const useApi = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // let abortFetch = null;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // const controller = new AbortController();
        // abortFetch = () => controller.abort();

        // const response = await fetch(url, { signal: controller.signal });
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (error) {
        if (error.name !== 'AbortError') {
          setError(error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    // return () => {
    //   if (abortFetch) abortFetch();
    // };
  }, [url]);

  return { data, error, isLoading };
};

export { useApi };
