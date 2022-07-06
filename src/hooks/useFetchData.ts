import { useEffect, useState } from "react";
import axiosClient from "../config/axiosClient";

export const useFetchData = <T>(url: string) => {
  const [data, setData] = useState<T[]>([]);

  const fetchData = async () => {
    const {
      data: { data },
    } = await axiosClient.get(url);
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data;
};
