<template>
    <div class="button-demo">
        <el-button type="primary" @click="handleLogin">主要按钮</el-button>
        <el-button type="danger">危险按钮</el-button>

    </div>
</template>

<script setup>
import { ref } from 'vue'
import api from '@/api'
import { setToken } from '@/utils/auth'
import { useUserStore } from '@/stores/user'
const account = ref("xiaotuxian001")
const password = ref("123456")

const handleLogin = async () => {
    try {
        if (!account.value || !password.value) {
            alert('请输入账号和密码')
            return
        }
        const res = await api.user.login(account.value, password.value)
        console.log('登录成功', res)

        setToken(res.result.token)
        const userStore = useUserStore()
        userStore.setUserInfo(res.result)

    } catch (error) {
        console.log('登录失败', error)
        alert(error.response?.data?.msg || '登录失败，请重试')
    }
}

</script>

<style scoped>
.button-demo {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    padding: 20px;
}
</style>
