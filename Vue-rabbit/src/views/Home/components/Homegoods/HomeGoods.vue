<script setup>
import { onMounted, ref } from 'vue';
import HomeGoodItem from './HomeGoodItem.vue';
import api from '@/api';


const homeGoodsList = ref([]);
const getHomeGoodsList = async () => {
    try {
        const res = await api.homeHot.getGoods();
        homeGoodsList.value = res.result;
        console.log("GetHomeGoods if geted", res)
    } catch (error) {
        console.log("GetHomeGoods if failed", error);
    }
}

onMounted(() => {
    getHomeGoodsList();
})
</script>

<template>
    <HomeGoodItem v-for="item in homeGoodsList" :key="item.id" :goodsItem="item">
    </HomeGoodItem>
</template>

<style scoped lang="scss"></style>