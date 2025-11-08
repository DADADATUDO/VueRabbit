import { defineStore } from "pinia";
import { ref } from "vue";
import api from "@/api";

export const useCategoryStore = defineStore("category", () => {
  const categoryList = ref([]);

  const GetCategoryFromApi = async () => {
    try {
      const res = await api.category.GetCategory();
      categoryList.value = res.result;
      // console.log("Category data loaded:", categoryList.value);
    } catch (error) {
      console.error("Failed to load category data:", error);
    }
  };

  return {
    categoryList,
    GetCategoryFromApi
  };
});
