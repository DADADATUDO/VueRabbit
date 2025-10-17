import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import fontawesome from './plugins/fontawesome'
import './assets/global.css'

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(fontawesome);
app.mount("#app");
