<script setup>
import { useCategoryStore } from '@/stores/category';
const categoryStore = useCategoryStore();
</script>

<template>
  <div class="category-wrapper">
    <div class="category-container">
      <div class="home-category">
        <ul class="menu">
          <li v-for="item in categoryStore.categoryList" :key="item.id">
            <RouterLink class="nav-link" :to="`/category/${item.id}`">{{ item.name }}</RouterLink>
            <RouterLink v-for="i in item.children.slice(0, 2)" :key="i.id" :to="`/category/sub/${i.id}`">
              {{ i.name }}</RouterLink>
            <!-- 弹层layer位置 -->
            <div class="layer">
              <h4>分类推荐 <small>根据您的购买或浏览记录推荐</small></h4>
              <ul>
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
    </div>
  </div>

</template>


<style scoped lang='scss'>
.category-wrapper {
  width: 100%;
  height: 500px;
  // background: rgba(240, 99, 99, 0.8);
  z-index: 66;

  .category-container {
    width: 124rem;
    height: 100%;
    margin: 0 auto;
    background-color: var(--el-bg-color);

    .home-category {
      width: 250px;
      height: 500px;
      position: relative;
      z-index: 99;

      .menu {
        li {
          padding-left: 40px;
          height: 55px;
          line-height: 55px;
          background: var(--el-bg-color-overlay);

          &:hover {
            background: var(--el-bg-color-hover);
          }

          a {
            margin-right: 4px;
            color: var(--el-text-color-primary);

            &:first-child {
              font-size: 16px;
            }

            &:hover {
              color: var(--el-color-primary);
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

            h4 {
              font-size: 20px;
              font-weight: normal;
              line-height: 80px;
              color: var(--el-text-color-primary);

              small {
                font-size: 1.4rem;
                color: var(--el-text-color-secondary);
              }
            }

            ul {
              display: flex;
              flex-wrap: wrap;

              li {
                width: 310px;
                height: 120px;
                margin-right: 15px;
                margin-bottom: 15px;
                border: 1px solid var(--el-border-color-light);
                border-radius: 4px;
                background: var(--el-bg-color);

                &:nth-child(3n) {
                  margin-right: 0;
                }

                a {
                  display: flex;
                  width: 100%;
                  height: 100%;
                  align-items: center;
                  padding: 10px;

                  &:hover {
                    background: var(--el-color-primary-light-9);
                  }

                  img {
                    width: 95px;
                    height: 95px;
                  }

                  .info {
                    padding-left: 10px;
                    line-height: 24px;
                    overflow: hidden;

                    .name {
                      font-size: 16px;
                      color: var(--el-text-color-primary);
                    }

                    .desc {
                      color: var(--el-text-color-placeholder);
                    }

                    .price {
                      font-size: 2rem;
                      color: var(--el-text-color-primary);

                      i {
                        font-size: 16px;
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
  }
}
</style>
