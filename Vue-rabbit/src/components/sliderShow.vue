<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { computed, onMounted, watch, onUnmounted, ref } from 'vue'

const props = defineProps({
    slides: {
        type: Array,
        required: false,              // 修改：改为非必填并提供默认
        default: () => [],            // 防止未传入时为 undefined
        validator: (value) => {
            // 允许空数组，但若有元素则要求每项包含 src
            return Array.isArray(value) && (value.length === 0 || value.every(item => item && item.src))
        }
    },
    width: {
        type: String,
        default: '100%'
    },
    height: {
        type: String,
        default: '50rem' /* 500px -> 50rem */
    },
    interval: {
        type: Number,
        default: 3000
    },
    duration: {
        type: Number,
        default: 500
    }
})

//状态管理
const currentIndex = ref(0)
//轮播组件通常需要自动切换图片，setInterval 会返回一个计时器 ID，通过这个 ID 可以用 clearInterval 清除计时器（比如手动切换图片时需要重置自动播放）
const timer = ref(null)
//防止用户在动画执行过程中频繁点击切换按钮，导致动画混乱（比如在 prevSlide、nextSlide 方法中会判断 isTransitioning.value，如果为 true 则不执行切换逻辑）
const isTransitioning = ref(false)

const isSingle = computed(() => props.slides.length === 1)

const containerWidth = ref(props.width)
const containerHeight = ref(props.height)
// 修复：computed 必须返回字符串
const transitionDuration = computed(() => `transform ${props.duration}ms ease`)

// 上一张
const prevSlide = () => {
    const len = props.slides?.length || 0
    if (len === 0 || isTransitioning.value) return
    currentIndex.value = (currentIndex.value - 1 + len) % len
    resetTimer()
}

// 下一张
const nextSlide = () => {
    const len = props.slides?.length || 0
    if (len === 0 || isTransitioning.value) return
    currentIndex.value = (currentIndex.value + 1) % len
    resetTimer()
}

// 跳转到指定索引（保持已有防护）
const goToSlide = (index) => {
    const len = props.slides?.length || 0
    if (len === 0 || isTransitioning.value || index === currentIndex.value) return
    currentIndex.value = index
    resetTimer()
}

const resetTimer = () => {
    const len = props.slides?.length || 0
    if (props.interval <= 0 || len === 0) return
    if (timer.value) clearInterval(timer.value)
    timer.value = setInterval(nextSlide, props.interval)
}

// 监听过渡状态
watch(currentIndex, () => {
    isTransitioning.value = true
    const transitionEnd = () => {
        isTransitioning.value = false
    }
    setTimeout(transitionEnd, props.duration);
})

// 初始化自动播放
onMounted(() => {
    if (props.interval > 0 && (props.slides?.length || 0) > 0) {
        timer.value = setInterval(nextSlide, props.interval)
    }
})

// 清理计时器
onUnmounted(() => {
    if (timer.value) {
        clearInterval(timer.value)
    }
})
</script>

<template>
    <div class="carousel-container" :style="{ width: containerWidth, height: containerHeight }">
        <div class="carousel-wrapper" :style="{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: transitionDuration
        }">
            <div class="carousel-slide" v-for="(slide, index) in slides" :key="index">
                <!-- 如果有 slide.path 则用外链包裹，否则直接渲染图片 -->
                <template v-if="slide.path">
                    <a :href="slide.path" target="_blank" rel="noopener noreferrer">
                        <img :src="slide.src" :alt="slide.alt || `${index + 1}`" class="slide-image">
                    </a>
                </template>
                <template v-else>
                    <img :src="slide.src" :alt="slide.alt || `${index + 1}`" class="slide-image">
                </template>
            </div>
        </div>

        <!-- 左右切换按钮 -->
        <button class="carousel-btn prev-btn" v-show="!isSingle" @click="prevSlide" aria-label="上一张">
            <FontAwesomeIcon icon="chevron-left" size="2x" />
        </button>
        <button class="carousel-btn next-btn" v-show="!isSingle" @click="nextSlide" aria-label="下一张">
            <FontAwesomeIcon icon="chevron-right" size="2x" />
        </button>

        <!-- 指示器：修复 v-for 与绑定，移除错误的 v-on:keyup -->
        <div class="carousel-indicators" v-show="!isSingle" v-if="slides && slides.length > 0">
            <button v-for="(slide, index) in slides" :key="`dot-${index}`" class="indicator-dot"
                :class="{ active: index === currentIndex }" @click="goToSlide(index)"
                :aria-label="`切换到第 ${index + 1} 张`"></button>
        </div>

    </div>
</template>

<style>
.carousel-container {
    position: relative;
    overflow: hidden;
    margin: 0 auto;
}

.carousel-wrapper {
    display: flex;
    height: 100%;
}

.carousel-slide {
    flex: 0 0 100%;
    height: 100%;
}

.slide-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: rgba(0, 0, 0, 0.3);
}

/* 替换原有 .carousel-btn 样式，保证垂直居中、图标居中、可访问性和悬停效果 */
.carousel-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.8rem; /* 48px -> 4.8rem */
    height: 4.8rem; /* 48px -> 4.8rem */
    border-radius: 50%;
    color: aliceblue;
    cursor: pointer;
    border: none;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 10;
    transition: background-color 0.2s ease, transform 0.15s ease;
}

/* 悬停与聚焦反馈：增强交互与可访问性 */
.carousel-btn:hover,
.carousel-btn:focus {
    background-color: rgba(0, 0, 0, 0.6);
    outline: none;
    transform: translateY(-50%) scale(1.03);
}

/* 可选：禁用状态/不可点击时的样式 */
.carousel-btn[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
}

.prev-btn {
    left: 1.6rem; /* 16px -> 1.6rem */
}

.next-btn {
    right: 1.6rem; /* 16px -> 1.6rem */
}

.carousel-indicators {
    position: absolute;
    bottom: 2rem; /* 20px -> 2rem */
    display: flex;
    gap: 0.8rem; /* 8px -> 0.8rem */
    left: 50%;
    transform: translateX(-50%); /* 修复：添加居中定位 */
    z-index: 10;
}

.indicator-dot {
    width: 1rem; /* 10px -> 1rem */
    height: 1rem; /* 10px -> 1rem */
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    border: none;
    transition: all 0.3s ease;
}

.indicator-dot.active {
    background-color: #ff6900;
    width: 3rem; /* 30px -> 3rem */
    border-radius: 0.5rem; /* 5px -> 0.5rem */
}
</style>
