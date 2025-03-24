import axios from "axios";
// import { showToast } from "@/app/components/common/toast";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api/v1",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

// Request Interceptor: Attach token
// axiosInstance.interceptors.request.use(
//   (config) => {
//     if (typeof window !== "undefined") {
//       const token = localStorage.getItem("mocktoken");
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// Response Interceptor: Handle errors globally
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     const status = error.response?.status;
//     const message = error.response?.data?.message || "Something went wrong!";

//     // if (status === 401) {
//     //   showToast.error("Unauthorized! Please login.");
//     // } else if (status === 403) {
//     //   showToast.error("Forbidden! You don't have access.");
//     // } else if (status === 500) {
//     //   showToast.error("Server error! Try again later.");
//     // } else {
//     //   showToast.error(message);
//     // }

//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
