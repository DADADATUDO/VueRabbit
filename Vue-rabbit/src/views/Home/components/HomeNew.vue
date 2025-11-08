<script setup>
import HomePanel from './HomePanel.vue';
import api from '@/api';
import { ref, onMounted } from 'vue'

const newList = ref([]);
const getHomeNewList = async () => {
  try {
    const res = await api.homeNew.GetHomeNew();
    newList.value = res.result;
    // console.log(res);
  } catch (error) {
    console.log("GetHomeNew is failed:", error);
  }
}

onMounted(() => {
  getHomeNewList();
})

</script>

<template>

  <HomePanel title="新鲜好物" subtitle="新鲜出炉 品质好物">
    <ul class="good-list">
      <li v-for="item in newList" :key="item.id">
        <RouterLink class="nav_link" :to="`/detail/${item.id}`">
          <img v-lazy-img="item.picture" alt="" />
          <p class="name">{{ item.name }}</p>
          <p class="price">{{ item.price }}</p>
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
        font-size: 1.8rem;
        color: var(--el-text-primary);
        text-align: center;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }

      .price {
        color: var(--el-text-primary);
      }
    }
  }
}
</style>
