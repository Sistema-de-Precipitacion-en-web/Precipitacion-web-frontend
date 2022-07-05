import axios from "axios";
import { config } from "./config";

const axiosClient = axios.create({
  baseURL: config.apiBaseURL,
});

export default axiosClient;
