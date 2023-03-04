import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import(/* webpackChunkName: "MainLayout" */ '@/modules/common/layouts/MainLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/views/HomeView.vue'),
        },
        {
          path: '/:pathMatch(.*)*',
          component: () => import(/* webpackChunkName: "notFound" */ '@/views/404NotFoundView.vue'),
        },
      ],
    },
  ],
});

export default router;
