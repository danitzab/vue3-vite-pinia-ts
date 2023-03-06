import { createRouter, createWebHistory } from 'vue-router';

// Modules
import postRouter from '@/modules/posts/router/post.router';

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
    {
      name: 'posts',
      path: '/posts',
      ...postRouter,
    },
  ],
});

export default router;
