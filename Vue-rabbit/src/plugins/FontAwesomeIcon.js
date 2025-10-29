import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// 按需导入 solid 类型图标（统一管理在数组中，便于维护）
import {
  faUser,
  faLock,
  faSearch,
  faMagnifyingGlassPlus,
  faChevronRight,
  faChevronLeft,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

// 图标列表（集中管理，新增/删除图标只需修改此处）
const solidIcons = [faUser, faLock, faSearch, faMagnifyingGlassPlus, faChevronRight, faChevronLeft, faPhone];

// 批量添加图标到库中
library.add(...solidIcons);

export function setup(app) {
  // 全局注册 FontAwesome 组件
  app.component('FontAwesomeIcon', FontAwesomeIcon);
}
