import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
// import { setLocale } from "element-plus";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import fontawesome from "./plugins/fontawesome";
import "./assets/global.css";
// import "element-plus/theme-chalk/src/common";

// setLocale(zhCn);
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(fontawesome);
app.mount("#app");
