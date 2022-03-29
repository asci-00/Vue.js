// import AsyncApp from '@/AsyncApp.vue';
import { createApp } from 'vue';
import App from './App.vue';
import mitt from 'mitt';
import { emitterKey, eventType } from '@/types';

const emitter = mitt<eventType>();
const app = createApp(App);

app.provide(emitterKey, emitter);
app.mount('#app');
