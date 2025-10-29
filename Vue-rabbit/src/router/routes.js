export const routes = [
  {
    path: "/",
    name: "Layout",
    component: () => import("@/views/Layout/Layout.vue"),
    children: [
      { path: "", name: "Home", component: () => import("@/views/Home/Home.vue") },
      {
        path: "category",
        name: "Category",
        component: () => import("@/views/Category/Category.vue"),
      },
    ],
  },

  // 可选：未匹配时重定向到首页
  { path: "/:catchAll(.*)", redirect: "/" },
];
