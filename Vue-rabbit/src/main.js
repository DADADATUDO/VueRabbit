import { createApp } from 'vue';
import App from './App.vue';
import { setup as setPlugin } from '@/plugins/index.js';
import './styles/index.scss';
import { setupDirectives } from './directivers/index';

const app = createApp(App);
setPlugin(app);
setupDirectives(app);
app.mount('#app');
