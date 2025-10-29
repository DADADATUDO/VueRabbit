<script setup>
import { useCategoryStore } from '@/stores/category';
const categoryStore = useCategoryStore();
</script>

<template>
    <div class="re-home-category">
        <ul class="menu">
            <li v-for="item in categoryStore.categoryList" :key="item.id">
                <RouterLink :to="`/category/${item.id}`">{{ item.name }}</RouterLink>
                <RouterLink v-for="i in item.children.slice(0, 2)" :key="i.id" :to="`/category/sub/${i.id}`">
                    {{ i.name }}
                </RouterLink>
                <!-- 弹层layer位置 -->
                <div class="layer">
                    <h4>分类推荐 <small>根据您的购买或浏览记录推荐</small></h4>
                    <ul class="goods-list">
                        <li v-for="i in item.goods" :key="i.id">
                            <RouterLink :to="`/detail/${i.id}`">
                                <img :src="i.picture" alt="" />
                                <div class="info">
                                    <p class="name ellipsis-2">
                                        {{ i.name }}
                                    </p>
                                    <p class="desc ellipsis">{{ i.desc }}</p>
                                    <p class="price"><i>¥</i>{{ i.price }}</p>
                                </div>
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>


<style scoped lang='scss'>
.re-home-category {
    width: 250px;
    height: 500px;
    background: rgba(0, 0, 0, 0.8);
    position: relative;
    z-index: 99;

    .menu {
        display: flex;
        flex-direction: column;
        height: 100%;

        li {
            padding-left: 40px;
            height: 55px;
            line-height: 55px;
            position: relative;
            display: flex;
            align-items: center;

            &:hover {
                background: #27ba9b;
            }

            a {
                margin-right: 4px;
                color: #fff;
                text-decoration: none;

                &:first-child {
                    font-size: 16px;
                }
            }

            .layer {
                width: 990px;
                height: 500px;
                background: rgba(255, 255, 255, 0.8);
                position: absolute;
                left: 250px;
                top: 0;
                display: none;
                padding: 0 15px;
                box-sizing: border-box;

                h4 {
                    font-size: 20px;
                    font-weight: normal;
                    line-height: 80px;
                    margin: 0;

                    small {
                        font-size: 16px;
                        color: #666;
                    }
                }

                .goods-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 15px;
                    padding: 0;
                    margin: 0;
                    list-style: none;

                    li {
                        width: 310px;
                        height: 120px;
                        border: 1px solid #eee;
                        border-radius: 4px;
                        background: #fff;
                        padding: 0;
                        line-height: normal;

                        &:nth-child(3n) {
                            margin-right: 0;
                        }

                        a {
                            display: flex;
                            width: 100%;
                            height: 100%;
                            align-items: center;
                            padding: 10px;
                            box-sizing: border-box;
                            color: inherit;
                            text-decoration: none;

                            &:hover {
                                background: #e3f9f4;
                            }

                            img {
                                width: 95px;
                                height: 95px;
                                flex-shrink: 0;
                            }

                            .info {
                                padding-left: 10px;
                                line-height: 24px;
                                overflow: hidden;
                                flex: 1;

                                .name {
                                    font-size: 16px;
                                    color: #666;
                                    margin: 0 0 8px 0;
                                    display: -webkit-box;
                                    -webkit-line-clamp: 2;
                                    -webkit-box-orient: vertical;
                                    overflow: hidden;
                                }

                                .desc {
                                    color: #999;
                                    margin: 0 0 8px 0;
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                }

                                .price {
                                    font-size: 22px;
                                    color: #cf4444;
                                    margin: 0;

                                    i {
                                        font-size: 16px;
                                        font-style: normal;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            // 关键样式  hover状态下的layer盒子变成block
            &:hover {
                .layer {
                    display: block;
                }
            }
        }
    }
}
</style>