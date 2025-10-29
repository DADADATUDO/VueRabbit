<script setup>
import LayoutNav from './components/LayoutNav.vue'
import SegBar from '@/components/SegBar.vue';
import { RouterView } from 'vue-router';
import { useCategoryStore } from '@/stores/category';
import { onMounted } from 'vue';
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutFooterInfo from './components/LayoutFooterInfo.vue';

const categoryStore = useCategoryStore();

onMounted(() => {
    categoryStore.GetCategoryFromApi();
})
</script>

<template>
    <LayoutNav></LayoutNav>
    <RouterView />
    <SegBar></SegBar>
    <LayoutFooter></LayoutFooter>
    <LayoutFooterInfo></LayoutFooterInfo>
</template>


<style scoped lang="scss"></style>
