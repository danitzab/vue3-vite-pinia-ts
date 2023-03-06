export default {
  component: () => import(/* webpackChunkName: "layout" */ '@/modules/common/layouts/MainLayout.vue'),
  children: [
    {
      path: '',
      name: `posts-home`,
      component: () => import(/* webpackChunkName: "List" */ '../views/ListView.vue'),
    },
  ],
};
