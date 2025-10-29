import service from "@/utils/request";

export const GetCategory = () => {
  return service({
    method: "get",
    url: "home/category/head",
  });
};
