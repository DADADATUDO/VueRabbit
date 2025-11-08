<script setup>
import SliderShow from '@/components/SliderShow.vue';
import api from '@/api';
import { ref, onMounted } from "vue";

const hotBannerList = ref([]);
const GetHotBannerFromApi = async () => {
  try {
    const res = await api.hotBanner.GetHotBanner();
    hotBannerList.value = res.result;
    // console.log("HotBanner data is loadad:", hotBannerList.value);
  } catch (error) {
    console.error("Failed to load category data:", error);
  }
};

onMounted(() => {
  GetHotBannerFromApi();
})

</script>

<template>
  <SliderShow :slides="hotBannerList" width="99rem" height="50rem" :interval="3000" />
  <!-- <div class="dic">

  </div> -->
</template>

<style>
.dic {
  width: 990px;
  height: 500px;
  background-color: blueviolet;
}
</style>
