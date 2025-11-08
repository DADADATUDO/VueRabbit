<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  title: {
    type: String,
    require: true,
  },
  subtitle: {
    type: String,
    require: true,
  }
})
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <div class="title">
        <h2>{{ props.title }}  <small>{{ props.subtitle }}</small></h2>
      </div>
      <slot/>
    </div>

  </div>
</template>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  height: 30rem;
  // background-color: aqua;
  display: flex;
  justify-content: center;

  .container {
    width: 124rem;
    height: 30rem;
    // background-color: bisque;
  }
  .title{
    h2{
      font-size: 3rem;
    }
  }
}
</style>
