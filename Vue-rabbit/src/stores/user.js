import { defineStore } from "pinia";
import { ref } from "vue";
// 从 auth.js 导入本地存储相关方法
import { getLocalUserInfo, setLocalUserInfo, removeLocalUserInfo } from "@/utils/auth";

// 组合式 API 写法
export const useUserStore = defineStore("user", () => {
  // 用 ref 包裹，初始值从 localStorage 读取（刷新页面后恢复数据）
  const userInfo = ref(getLocalUserInfo() || null);

  // 设置用户信息（同步到 Pinia 和 localStorage）
  const setUserInfo = (info) => {
    userInfo.value = info;
    setLocalUserInfo(info); // 同步到本地存储（持久化）
  };

  // 清除用户信息
  const clearUserInfo = () => {
    userInfo.value = null;
    removeLocalUserInfo(); // 清空本地存储
  };

  return {
    userInfo,
    setUserInfo,
    clearUserInfo,
  };
});

/*
存储用户信息时，localStorage（通过 auth.js）和 Pinia 各有优缺点
实际开发中如何选择？
结论：两者不是互斥的，更推荐 “结合使用”。
原因很简单：
只用 localStorage：数据不响应式，组件更新麻烦；
只用 Pinia：刷新页面数据丢失，还是得重新请求接口（达不到 “避免频繁请求” 的目的）。
推荐方案：Pinia + localStorage 结合
登录成功后：
把用户信息存到 localStorage（持久化，避免刷新后丢失）；
同时同步到 Pinia 的状态中（让组件能响应式使用）。
页面初始化时（如 main.js 或 App.vue）：
从 localStorage 读取用户信息，初始化到 Pinia 中（保证刷新后数据不丢失，且组件能读到）。
用户信息更新时（如修改昵称）：
先调用接口更新后端数据；
再同步更新 Pinia 状态（组件实时响应）和 localStorage（持久化保存）。
*/
