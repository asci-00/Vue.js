import { createApp } from 'vue';
// import App from './App.vue';
import AsyncApp from '@/AsyncApp.vue';
import mitt from 'mitt';

const app = createApp(AsyncApp);
const emitter = mitt();

app.config.globalProperties.emitter = emitter;

app.mount('#app');
