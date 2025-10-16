import { defineStore } from 'pinia'
import { login as loginApi, logout as logoutApi, getUserInfo } from '@/api/user'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: localStorage.getItem('token') || '', // 从本地存储读取token
    userInfo: null // 用户信息
  }),
  actions: {
    // 登录
    async login(data) {
      const res = await loginApi(data)
      this.token = res.data.token
      localStorage.setItem('token', this.token) // 持久化token
    },
    // 获取用户信息
    async getInfo() {
      const res = await getUserInfo()
      this.userInfo = res.data
    },
    // 退出登录
    async logout() {
      await logoutApi()
      this.token = ''
      this.userInfo = null
      localStorage.removeItem('token')
    }
  }
})
    