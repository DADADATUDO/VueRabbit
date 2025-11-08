<script setup>
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { RouterView } from 'vue-router'; // 导入 RouterView，使 <RouterView /> 可用
</script>

<template>
  <el-config-provider :locale="zhCn" size="default" :z-index="200">
    <RouterView />
  </el-config-provider>

</template>

<style scoped></style>
