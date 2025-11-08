<script setup>
import HomePanel from './HomePanel.vue';
import api from '@/api';
import { ref, onMounted } from 'vue'

const hotList = ref([]);
const getHomeHotList = async () => {
  try {
    const res = await api.homeHot.GetHomeHot();
    hotList.value = res.result;
    // console.log(res);
  } catch (error) {
    console.log("GetHomeHot is failed:", error);
  }
}

onMounted(() => {
  getHomeHotList();
})

</script>

<template>

  <HomePanel title="人气推荐" subtitle="人气爆款 不容错过">
    <ul class="good-list">
      <li v-for="item in hotList" :key="item.id">
        <RouterLink class="nav_link" :to="`/detail/${item.id}`">
          <img v-lazy-img="item.picture" alt="" />
          <p class="name">{{ item.title }}</p>
        </RouterLink>
      </li>
    </ul>
  </HomePanel>
</template>

<style scoped lang="scss">
.good-list {
  display: flex;
  justify-content: space-between;
  height: 25rem;

  li {
    width: 30.6rem;
    height: 100%;
    background-color: var(--el-bg-color);
    transition: all, .5s;

    &:hover {
      transform: translate3d(0, -4px, 0);
      box-shadow: 0 3px 8px rgba($color: #000000, $alpha: 0.3);
    }

    .nav_link {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        width: 20rem;
        height: 20rem;
      }

      p {
        font-size: 2rem;
        color: var(--el-text-primary);
        text-align: center;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }

    }
  }
}
</style>
