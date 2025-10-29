import axios from "axios";
import { getToken, removeToken } from "@/utils/auth";

const service = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 50000,
});

// 请求拦截
service.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log("请求拦截器错误:", error);
    return Promise.reject(error);
  }
);

// 响应拦截
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    // 小兔鲜后端约定：code="1"为成功，其他为错误
    if (res.code !== "1") {
      console.log("接口处错误:", res.msg || "请求失败");
      return Promise.reject(new Error(res.msg || "请求失败"));
    }
    return res;
  },
  (error) => {
    console.error("响应拦截器错误：", error);
    return Promise.reject(error);
  }
);

export default service;
