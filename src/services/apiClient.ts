import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const createApiClient = (version: string) => {
  return axios.create({
    baseURL: `${API_BASE_URL}/api/${version}`,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};

export default createApiClient;
