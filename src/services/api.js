import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "utils/constants/endpoints";

export const API = axios.create({
  baseURL: BASE_URL,
});

API.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return toast(error);
  },
);

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return toast(error);
  },
);
