import { useEffect, useLayoutEffect, useRef, useState } from "react";

function useFetch<T>(url: string) {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState<boolean>(true);
  const controllerRef = useRef<AbortController>();

  async function fetchResults() {
    setLoading(true);
    setError(undefined);
    setData(undefined);

    try {
      const controller = new AbortController();
      const signal = controller.signal;

      controllerRef.current = controller;

      const response = await fetch(url, { signal });
      const json = await response.json();

      setData(json);
      setLoading(false);
    } catch (error: unknown) {
      if ((error as Error).name !== "AbortError") {
        setError(error);
      }
    } finally {
      controllerRef.current = undefined;
    }
  }

  useLayoutEffect(() => {
    fetchResults();

    return () => {
      controllerRef.current?.abort();
    };
  }, []);

  return { data, error, loading };
}

export default useFetch;
