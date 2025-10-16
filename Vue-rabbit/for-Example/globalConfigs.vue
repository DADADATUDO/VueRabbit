<template>
    <el-config-provider :size="size" :z-index="zIndex" :locale="currentLocale" :theme="themeConfig">
        <!-- 配置控制器 -->
        <div class="config-controls">
            <el-select v-model="currentLang" placeholder="选择语言" size="small" @change="handleLangChange">
                <el-option label="中文" value="zhCn"></el-option>
                <el-option label="English" value="en"></el-option>
            </el-select>

            <el-switch v-model="isDarkMode" active-text="暗色模式" inactive-text="亮色模式" @change="toggleDarkMode" />
        </div>

        <!-- 插槽：用于接收外部传入的应用内容 -->
        <slot />
    </el-config-provider>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
// 按需引入模式下，无需手动导入Element Plus组件（插件会自动导入）
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import 'element-plus/theme-chalk/dark/css-vars.css' // 暗色模式样式仍需手动导入

// 全局组件尺寸
const size = ref('small')

// 全局z-index基准值
const zIndex = ref(3000)

// 国际化配置
const currentLang = ref('zhCn')
const currentLocale = ref(zhCn)

// 处理语言切换
const handleLangChange = (lang) => {
    currentLocale.value = lang === 'zhCn' ? zhCn : en
}

// 暗色模式配置
const isDarkMode = ref(false)
const themeConfig = ref({})

// 切换暗色模式
const toggleDarkMode = (value) => {
    isDarkMode.value = value
    document.documentElement.classList.toggle('dark', value)
}

// 初始化：从本地存储恢复用户偏好
watchEffect(() => {
    // 恢复主题设置
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode !== null) {
        const isDark = savedMode === 'true'
        isDarkMode.value = isDark
        document.documentElement.classList.toggle('dark', isDark)
    }

    // 恢复语言设置
    const savedLang = localStorage.getItem('language')
    if (savedLang && ['zhCn', 'en'].includes(savedLang)) {
        currentLang.value = savedLang
        currentLocale.value = savedLang === 'zhCn' ? zhCn : en
    }
})

// 监听设置变化并保存到本地存储
watchEffect(() => {
    localStorage.setItem('darkMode', isDarkMode.value)
})

watchEffect(() => {
    localStorage.setItem('language', currentLang.value)
})
</script>

<style scoped>
.config-controls {
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 9999;
    display: flex;
    gap: 10px;
    padding: 10px;
    background-color: var(--el-bg-color);
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
