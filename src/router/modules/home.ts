import { RouteRecordRaw } from 'vue-router';

export default {
  path: '/',
  name: 'home',
  component: () => import('@/views/home/index.vue'),
  meta: {},
  children: [],
} as RouteRecordRaw;
