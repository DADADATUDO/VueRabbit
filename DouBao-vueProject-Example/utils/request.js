import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/store/user'

// 创建axios实例
const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // 从环境变量获取基础地址
  timeout: 5000 // 超时时间
})

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    const userStore = useUserStore()
    // 自动添加token
    if (userStore.token) {
      config.headers.Authorization = `Bearer ${userStore.token}`
    }
    return config
  },
  (error) => {
    ElMessage.error('请求参数错误')
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    const res = response.data
    // 假设后端约定：code=0为成功
    if (res.code !== 0) {
      ElMessage.error(res.msg || '操作失败')
      return Promise.reject(res)
    }
    return res
  },
  (error) => {
    // 处理401 token过期
    if (error.response?.status === 401) {
      const userStore = useUserStore()
      userStore.logout() // 清除登录状态
      router.push('/login') // 跳转登录页
    }
    ElMessage.error('网络错误，请稍后重试')
    return Promise.reject(error)
  }
)

export default request
    