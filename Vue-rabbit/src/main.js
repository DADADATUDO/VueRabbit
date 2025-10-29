import { createApp } from 'vue';
import App from './App.vue';
import { setup as setPlugin } from '@/plugins/index.js';
import './styles/index.scss';

const app = createApp(App);
setPlugin(app);
app.mount('#app');
