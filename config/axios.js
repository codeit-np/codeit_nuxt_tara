import axios from "axios";
const axiosApi = axios.create({
  baseURL: "https://codeit.com.np/api/",
  headers: { Accept: "application/json", "Content-Type": "application/json" },
});

export default axiosApi;
