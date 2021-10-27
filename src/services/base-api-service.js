import axios from "axios";

const http = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:3001/api/v1",
  withCredentials: true,
});

http.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error?.response?.status === 401) {
      window.location.replace("home");
    }
    return Promise.reject(error);
  }
);

export default http;
