/*
 * @Author: raoqidi
 * @Date: 2021-08-30 11:08:52
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-08-30 16:34:21
 * @Description: please add a description to the file
 * @FilePath: /qiankun-demo/vite-vue3/src/router/index.ts
 */
const routes = [
  {
    path: '/hello-world',
    component: () => import('@/components/HelloWorld.vue'),
  },
  {
    path: '/home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/about',
    component: () => import('@/views/About.vue'),
  },
];

export default routes;
