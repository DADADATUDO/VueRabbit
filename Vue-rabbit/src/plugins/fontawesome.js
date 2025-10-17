import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// 引入需要的图标
import {
  faUser,
  faLock,
  faSearch,
  faMagnifyingGlassPlus,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
// 将图标添加到库中
library.add(faUser, faLock, faSearch, faChevronRight, faChevronLeft, faMagnifyingGlassPlus);

export default {
  install: (app) => {
    app.component("FontAwesomeIcon", FontAwesomeIcon);
  },
};
