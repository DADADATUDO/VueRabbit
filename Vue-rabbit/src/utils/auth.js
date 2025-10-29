// 1. 定义 Token 在本地存储中的“键名”（避免硬编码，方便统一修改）
const TOKEN_KEY = "user_token";

export const setToken = (token) => {
  // 选择 localStorage（持久化，关闭浏览器不丢失）或 sessionStorage（会话级，关闭浏览器丢失）
  localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

//有些项目会用两个 Token：accessToken（访问用，过期快）和 refreshToken（刷新用，过期慢），此时需要分别存储
// 扩展：刷新 Token 相关
const REFRESH_TOKEN_KEY = "refresh_token";

export const setRefreshToken = (refreshToken) => {
  localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
};

export const getRefreshToken = () => {
  return localStorage.getItem(REFRESH_TOKEN_KEY);
};

export const removeRefreshToken = () => {
  localStorage.removeItem(REFRESH_TOKEN_KEY);
};

// 本地用户信息储存,数据长期保存，刷新 / 关闭浏览器不丢失（适合 “记住用户”）。
const USER_INFO_KEY = "user_info";

// 存用户信息（转字符串）
export const setLocalUserInfo = (userInfo) => {
  localStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfo));
};

// 取用户信息（转对象）
export const getLocalUserInfo = () => {
  const info = localStorage.getItem(USER_INFO_KEY);
  return info ? JSON.parse(info) : null;
};

// 删用户信息
export const removeLocalUserInfo = () => {
  localStorage.removeItem(USER_INFO_KEY);
};

// 退出登录时，一次性清除所有认证相关数据
export const clearAuthInfo = () => {
  removeToken();
  removeRefreshToken();
  // 其他需要清除的项...
};
