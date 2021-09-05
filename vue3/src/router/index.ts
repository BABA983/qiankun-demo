/*
 * @Author: raoqidi
 * @Date: 2021-08-09 15:18:22
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-08-30 11:12:08
 * @Description: please add a description to the file
 * @FilePath: /qiankun-demo/vue3/src/router/index.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(
    window.__POWERED_BY_QIANKUN__ ? '/vue3' : process.env.BASE_URL
  ),
  routes,
});

export default router;
