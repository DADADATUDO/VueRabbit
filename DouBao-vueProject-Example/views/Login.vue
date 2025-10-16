<template>
  <el-form 
    ref="loginForm" 
    :model="form" 
    :rules="rules" 
    class="login-form"
  >
    <el-form-item label="用户名" prop="username">
      <el-input v-model="form.username" placeholder="请输入用户名" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="form.password" type="password" placeholder="请输入密码" />
    </el-form-item>
    <el-form-item>
      <el-button 
        type="primary" 
        class="w-full" 
        @click="handleLogin"
      >
        登录
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'
import { ElMessage } from 'element-plus'

const router = useRouter()
const userStore = useUserStore()
const loginForm = ref(null)

// 表单数据
const form = ref({
  username: '',
  password: ''
})

// 表单验证规则
const rules = ref({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})

// 登录处理
const handleLogin = async () => {
  try {
    await loginForm.value.validate()
    await userStore.login(form.value)
    await userStore.getInfo() // 获取用户信息
    ElMessage.success('登录成功')
    router.push('/') // 跳转首页
  } catch (error) {
    console.error('登录失败', error)
  }
}
</script>

<style scoped>
.login-form {
  width: 350px;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}
</style>
    