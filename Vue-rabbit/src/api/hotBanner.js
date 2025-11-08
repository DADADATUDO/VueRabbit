import service from "@/utils/request";

export const GetHotBanner=()=>{
  return service({
    method:"get",
    url:"home/banner"
  })
};
