import { createRouter, createWebHistory } from 'vue-router';
import News from '@/views/News';
import Jobs from '@/views/Job';
import Ask from '@/views/Ask';
import User from '@/views/User';
import Item from '@/views/Item';

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
  {
    path: '/user/:name',
    component: User,
  },
  {
    path: '/item/:id',
    component: Item,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
