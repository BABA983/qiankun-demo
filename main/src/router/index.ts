/*
 * @Author: raoqidi
 * @Date: 2021-07-01 10:56:40
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-07-01 15:30:44
 * @Description: please add a description to the file
 * @FilePath: /qiankun-demo/main/src/router/index.ts
 */
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
