import { createRouter, createWebHistory } from 'vue-router';
import News from '@/views/News';
import Jobs from '@/views/Job';
import Ask from '@/views/Ask';

const routes = [
  {
    path: '/',
    redirect: '/news',
  },
  {
    path: '/news',
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
