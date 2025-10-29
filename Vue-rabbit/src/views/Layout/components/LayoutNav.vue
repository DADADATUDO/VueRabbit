<script setup>
import logo from '@/assets/images/logo.png';
import { onMounted, onUnmounted, ref } from 'vue';
import { useCategoryStore } from '@/stores/category';


const isHidden = ref(false)
const lastScrollTop = ref(0)
const scrollThreshold = ref(100)
const categoryStore = useCategoryStore()

const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    // 根据滚动方向和距离控制导航栏显示/隐藏
    if (scrollTop > lastScrollTop.value && scrollTop > scrollThreshold.value) {
        // 向下滚动且超过阈值，隐藏导航栏
        isHidden.value = true
    } else if (scrollTop < lastScrollTop.value || scrollTop <= scrollThreshold.value) {
        // 向上滚动或在顶部附近，显示导航栏
        isHidden.value = false
    }
    lastScrollTop.value = scrollTop
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

</script>

<template>
    <div :class="['nav-wrapper', 'nav-fixed', { 'nav-hidden': isHidden }]">
        <div class="nav-container">
            <div class="icon-container">
                <a href="" target="_blank" rel="noopener">
                    <img :src="logo" alt="">
                </a>
            </div>

            <div class="nav-menu">
                <RouterLink to="/" class="nav-link">首页</RouterLink>
                <p class="nav-link" v-for="item in categoryStore.categoryList" :key="item.id">
                    <RouterLink :to="`/category/${item.id}`">{{ item.name }}</RouterLink>
                </p>

            </div>

            <div class="login-info">
                <RouterLink to="/login" class="nav-link">登录</RouterLink>
                <span class="separator"></span>
                <RouterLink to="/register" class="nav-link">注册</RouterLink>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.nav-wrapper {
    width: 100%;
    height: 6.5rem;
    color: rgb(0, 0, 0);
    position: relative;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;

    a {
        color: inherit;
        text-decoration: none;
    }
}

.nav-fixed {
    position: sticky;
    top: 0;
    z-index: 1000;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transform: translateZ(0);
}

.nav-hidden {
    opacity: 0;
}

.nav-container {
    width: 1240px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.icon-container {
    display: flex;
    align-items: center;
    height: 100%;

    img {
        display: block;
        width: 144px;
        height: 54px;
    }
}

.nav-menu {
    display: flex;
    align-items: center;
    height: 100%;
    flex-grow: 1;
    justify-content: center;
    padding: 0 2rem;
}

.nav-link {
    padding: 0 1.5rem;
    line-height: 6.5rem;
    white-space: nowrap;
    transition: background-color 0.3s;

    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
}

.login-info {
    display: flex;
    align-items: center;
    height: 100%;

    .separator {
        border-left: 1px solid #ccc;
        height: 1.6rem;
        margin: 0 1rem;
    }
}
</style>
