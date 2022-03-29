import { createRouter, createWebHistory } from 'vue-router';
import News from '@/views/News.vue';
import Jobs from '@/views/Jobs.vue';
import Ask from '@/views/Ask.vue';

const routes = [
  {
    path: '/',
    component: News,
  },
  {
    path: '/jobs',
    component: Jobs,
  },
  {
    path: '/ask',
    component: Ask,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
