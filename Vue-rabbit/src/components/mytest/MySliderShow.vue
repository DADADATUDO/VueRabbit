<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import img1 from './001.jpg';
import img2 from './002.jpg';
import img3 from './003.jpg';

const arry = [img1, img2, img3];
const timer = ref(null)
const currentIndex = ref(0)
const interval = 3000

// 自动切换到下一张：更新 currentIndex 的值
const nextSlide = () => {
  const len = arry.length;
  if (len === 0) return;
  currentIndex.value = (currentIndex.value + 1) % len;
}

onMounted(() => {
  timer.value = setInterval(nextSlide, interval)
})
onUnmounted(() => {
    if (timer.value) {
        clearInterval(timer.value)
    }
})
</script>

<template>
  <div class="wrapper">
    <div class="container" :style="{ transform: `translateX(-${currentIndex * 100}%)`, transition: 'transform 500ms ease' }">
      <RouterLink v-for="(item, index) in arry" :key="index" to="/" class="slide-item">
        <img :src="item" class="slide" />
      </RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  width: 100rem;
  height: 50rem;
  overflow: hidden;
}

.container {
  display: flex;
  width: 100rem;
  height: 50rem;
}

.slide-item {
  flex: 0 0 100%;   /* 每个子项占满容器宽度 */
  width: 100%;
  height: 100%;
  display: block;    /* 让 RouterLink 作为块级填满 */
}

.slide {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style>
