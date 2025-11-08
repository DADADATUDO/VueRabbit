import service from '@/utils/request';

export const GetHomeHot = () => {
  return service({
    method: 'get',
    url: 'home/hot',
  });
};

export const getGoods = () => {
  return service({
    method: 'get',
    url: '/home/goods',
  });
};
