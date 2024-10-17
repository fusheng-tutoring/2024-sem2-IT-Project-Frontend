'use-client'

import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

// Import Types
import { FetchingDataType } from "./types";

export default function GetData<T>(connecting: string, unlimited: boolean, token?: string): { getData: T | FetchingDataType, getLoading: boolean, getError: AxiosError | null, reGet: () => Promise<void> } {
  const [getData, setData] = useState<FetchingDataType>(null);
  const [getError, setError] = useState<AxiosError | null>(null);
  const [getLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (connecting === "") return;
    if (connecting !== "" && (!unlimited && !token)) return;

    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await axios.get(connecting, {
          headers: unlimited ? {} : { Authorization: `Bearer ${token}` },
        });
        setData(response.data);
      } catch (err) {
        const axiosError = err as AxiosError;
        setError(axiosError);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [connecting, token, unlimited]);

  const reGet = async (): Promise<void> => {
    if (!connecting || (unlimited && !token)) return;

    setLoading(true);
    try {
      const response = await axios.get(connecting, {
        headers: unlimited ? {} : { Authorization: `Bearer ${token}` },
      });
      setData(response.data);
    } catch (err) {
      const axiosError = err as AxiosError;
      setError(axiosError);
    } finally {
      setLoading(false);
    }
  };

  return { getData, getLoading, getError, reGet };
};