import axios from "axios";
import { baseUrl } from "../constants/network_constants";

export default axios.create({
  baseURL: baseUrl,
  timeout: 30000, // 30 seconds
});
