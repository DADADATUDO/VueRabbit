<script setup>
import SegBar from '@/components/SegBar.vue';
import HomeBanner from './components/HomeBanner.vue';
import HomeCategory from './components/HomeCategory.vue';
import HomeNew from './components/HomeNew.vue';
import HomeHot from './components/HomeHot.vue';
import HomeGoods from './components/Homegoods/HomeGoods.vue';
</script>

<template>
  <div class="container">
    <HomeCategory></HomeCategory>
    <HomeBanner class="banner"></HomeBanner>
  </div>
  <SegBar></SegBar>
  <HomeNew></HomeNew>
  <SegBar></SegBar>
  <HomeHot></HomeHot>
  <SegBar></SegBar>
  <HomeGoods></HomeGoods>
</template>


<style scoped lang="scss">
.container {
  width: 124rem;
  margin: 0 auto;
  position: relative;
  min-height: 50rem;
}

//:deep() 是一个深度选择器，主要用于解决 scoped 样式的隔离限制，让样式能够穿透当前组件，
//作用到子组件或深层嵌套的 DOM 元素上。
:deep(.banner) {
  position: absolute;
  left: 25rem;
  top: 0;
  width: 99rem;
  height: 50rem;
  z-index: 1;
}
</style>
