<script setup>
import logo from '@/assets/images/logo/logo-mi2.png';
import { onMounted, onUnmounted, ref } from 'vue';

const isFixed = ref(true)
const isScroll = ref(false)

/*
//这里可以实现下滑时再Fixed
const lastScrollTop = ref(0)
const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    if (scrollTop > 0) {
        isFixed.value = true
    } else {
        isFixed.value = false
    }

    lastScrollTop.value = scrollTop
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
*/

//修改,来适应小米的页面
const lastScrollTop = ref(0)
const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    if (scrollTop > 0) {
        isScroll.value = true
    } else {
        isScroll.value = false
    }
    lastScrollTop.value = scrollTop
    /*
        lastScrollTop 记录当前的滚动位置
        if (scrollTop > lastScrollTop.value) {
        // 向下滚动（当前位置比上一次更靠下）
        console.log("向下滚动");
      } else {
        // 向上滚动（当前位置比上一次更靠上）
        console.log("向上滚动");
      }
    */
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

</script>

<template>
    <div :class="['nav-wrapper', { 'nav-fixed': isFixed }, { 'page-scroll': isScroll }]">
        <div class="nav-container">
            <div class="icon-container">
                <a href="https://www.mi.com" target="_blank" rel="noopener">
                    <img :src="logo" alt="小米官网">
                </a>
            </div>

            <div class="nav-menu">
                <!-- 使用 router-link 指向路由 path（需要对应 routes.js 中定义的 path） -->
                <router-link to="/" class="nav-link">小米官网</router-link>
                <router-link to="/mall" class="nav-link">小米商城</router-link>
                <router-link to="/os" class="nav-link">小米澎湃OS</router-link>
                <router-link to="/car" class="nav-link">小米汽车</router-link>
                <router-link to="/imaging" class="nav-link">小米影像</router-link>
                <router-link to="/cloud" class="nav-link">云服务</router-link>
                <router-link to="/iot" class="nav-link">loT</router-link>
                <router-link to="/youpin" class="nav-link">有品</router-link>
                <router-link to="/open" class="nav-link">小米开放平台</router-link>
                <router-link to="/location" class="nav-link">Location</router-link>
            </div>

            <div class="login-info">
                <router-link to="/login" class="nav-link">登录</router-link>
                <span class="separator"></span>
                <router-link to="/register" class="nav-link">注册</router-link>
            </div>
        </div>
    </div>
</template>

<style>
.nav-wrapper {
    width: 100%;
    height: 6.5rem; /* 65px -> 6.5rem */
    color: rgb(255, 255, 255);
    position: relative;
}

.nav-fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 1000;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(0.5rem); /* 5px -> 0.5rem */
    box-shadow: 0 0.2rem 1rem rgba(255, 255, 255, 0.1); /* 2px 10px -> 0.2rem 1rem */
    transform: translateZ(0);
}

.page-scroll {
    background-color: rgba(0, 0, 0, 0.7);
}


/* 修改为响应式容器：100% 宽度 + max-width 居中 + 内边距保证小屏不会紧贴边缘 */
.nav-container {
    width: 100%;
    max-width: 120rem; /* 1200px -> 120rem */
    /* 根据需要调整最大宽度 */
    padding: 0 1.6rem; /* 16px -> 1.6rem */
    box-sizing: border-box;
    height: 6.5rem; /* 65px -> 6.5rem */
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}

.icon-container {
    height: 6.5rem; /* 65px -> 6.5rem */
    width: 6rem; /* 60px -> 6rem */
    display: flex;
    justify-content: center;
    align-items: center;
}


.icon-container a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

}

.icon-container img {
    display: block;
    width: 3.4rem; /* 34px -> 3.4rem */
    height: 3.4rem; /* 34px -> 3.4rem */
}

.nav-menu {
    height: 6.5rem; /* 65px -> 6.5rem */
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

/* 新增：让 nav 内的链接继承 nav-wrapper 的文字颜色（覆盖 global.css 中的 a {color:...}） */
.nav-wrapper a {
    color: inherit;
}

/* 如果需要对 router-link 单独样式，添加 .nav-link */
.nav-link {
    line-height: 6.5rem; /* 65px -> 6.5rem */
    height: 6.5rem; /* 65px -> 6.5rem */
    padding: 0 2rem; /* 20px -> 2rem */
    white-space: nowrap;
    color: inherit;
    /* 继承 nav-wrapper 的颜色 */
    text-decoration: none;
}

.login-info {
    height: 6.5rem; /* 65px -> 6.5rem */
    width: 11rem; /* 110px -> 11rem */
    text-align: center;
    line-height: 6.5rem; /* 65px -> 6.5rem */
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.separator {
    border-left: 0.2rem solid #999; /* 2px -> 0.2rem */
    height: 1.6rem; /* 16px -> 1.6rem */
    margin: 0rem 0rem 0.2rem 0rem; /* 2px -> 0.2rem */
}

a:hover {
    color: #ff6900;
}
</style>
