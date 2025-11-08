import service from "@/utils/request";

export const GetHomeNew=()=>{
  return service({
    method:"get",
    url:"home/new"
  });
}
