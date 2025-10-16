import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 导入API
import api from './api'

// 创建实例
const app = createApp(App)
const pinia = createPinia()

// 全局挂载
app.config.globalProperties.$api = api
app.use(pinia)       // 注册Pinia
app.use(router)      // 注册路由
app.use(ElementPlus) // 注册Element Plus

app.mount('#app')
    