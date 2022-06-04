import { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../layout/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('../page/Home.vue'),
      },
      {
        path: 'series',
        component: () => import('../page/Series.vue'),
      },
      {
        path: 'movies',
        component: () => import('../page/Movies.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('../layout/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('../page/Error404.vue'),
      },
    ],
  },
];
