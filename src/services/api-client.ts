import axios, { AxiosRequestConfig } from "axios";

export interface FetchDataResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3e0144c46c9d4780b5ff9ce9a2ec7e4e",
  },
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchDataResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
