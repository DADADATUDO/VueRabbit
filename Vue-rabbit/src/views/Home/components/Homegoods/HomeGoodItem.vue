<script setup>
import SegBar from '@/components/SegBar.vue';
import GoodItem from '@/components/GoodItem.vue';

defineProps({
    goodsItem: {
        type: Object,
        default: () => ({})
    },
});
// console.log("aaa", props.goodsItem)
</script>

<template>
    <div class="wrapper">
        <div class="container">
            <h2>{{ goodsItem.name }}</h2>
            <el-divider class="seg-divider"></el-divider>
            <div class="contain">
                <div class="left-img">
                    <router-link :to="`/category/${goodsItem.id}`">
                        <img :src="goodsItem.picture" :alt="goodsItem.name">
                    </router-link>
                </div>
                <ul class="right-img">
                    <li v-for="item in goodsItem.goods.slice(0, 8)" :key="item.id">
                        <GoodItem :goodItem="item"></GoodItem>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <SegBar></SegBar>
</template>

<style scoped lang="scss">
.wrapper {
    width: 100%;
    height: 70rem;
    //background-color: aqua;

    .container {
        width: 124rem;
        height: 100%;
        margin: 0 auto;
        //background-color: blue
    }
}

h2 {
    font-size: 3rem;
    padding: 0rem 0rem 0rem 2rem;
    display: inline-block;
}

.contain {
    display: flex;

}

.left-img {
    width: 24rem;
    height: 61rem;
    //background-color: red;
    margin-right: 1rem;
    margin-left: 1rem;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.right-img {
    width: 97rem;
    height: 61rem;
    //background-color: blueviolet;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-around;
    padding: 0 1rem;

    li {
        width: 20rem;
        height: 25rem;
        transition: all, .5s;

        &:hover {
            transform: translate3d(0, -4px, 0);
            box-shadow: 0 3px 8px rgba($color: #000000, $alpha: 0.3);
        }

    }
}


.seg-divider {
}

/* 修复：使用 :deep() 并匹配同一元素上的两个类，确保命中 el-divider 根元素 */
:deep(.el-divider--horizontal.seg-divider) {
    margin: 10px 0 !important;
}
</style>
