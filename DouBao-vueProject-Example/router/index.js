import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import { useUserStore } from '@/store/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// 路由守卫（登录验证）
router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  // 需要登录但未登录时，跳转登录页
  if (to.meta.requiresAuth && !userStore.token) {
    next('/login?redirect=' + to.path)
  } else {
    next()
  }
})

export default router
    