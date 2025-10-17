export const routes = [
  { path: "/", name: "mainPage", component: () => import("@/components/mainPage/mainPage.vue") },
  { path: "/mall", name: "Mall", component: () => import("@/views/Mall.vue") },
  { path: "/os", name: "OS", component: () => import("@/views/OS.vue") },
  { path: "/car", name: "Car", component: () => import("@/views/Car.vue") },
  { path: "/imaging", name: "Imaging", component: () => import("@/views/Imaging.vue") },
  { path: "/cloud", name: "Cloud", component: () => import("@/views/Cloud.vue") },
  { path: "/iot", name: "IOT", component: () => import("@/views/IOT.vue") },
  { path: "/youpin", name: "Youpin", component: () => import("@/views/Youpin.vue") },
  { path: "/open", name: "OpenPlatform", component: () => import("@/views/OpenPlatform.vue") },
  { path: "/location", name: "Location", component: () => import("@/views/Location.vue") },
  { path: "/login", name: "Login", component: () => import("@/views/Login.vue") },
  { path: "/register", name: "Register", component: () => import("@/views/Register.vue") },
  // 可选：未匹配时重定向到首页
  { path: "/:catchAll(.*)", redirect: "/" },
];
