import service from "@/utils/request";

export const login = (account, password) => {
  return service({
    url: "/login",
    method: "post",
    data: {
      account,
      password,
    },
  });
};
