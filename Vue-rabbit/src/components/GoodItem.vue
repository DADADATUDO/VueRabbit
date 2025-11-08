<script setup>
const props = defineProps({
  goodItem:{
    type:Object,
    default: () => ({})
  }
})
</script>

<template>
  <router-link class="nav_link" :to="`/detail/${props.goodItem.id}`">
    <img v-lazy-img="props.goodItem.picture" :alt="props.goodItem.desc" />
    <p>{{ props.goodItem.name }}</p>
  </router-link>
</template>l

<style scoped lang="scss">
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
    white-space: wrap;
  }
}
</style>
