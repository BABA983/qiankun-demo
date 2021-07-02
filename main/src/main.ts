import { LifeCycleFn } from "qiankun";
/*
 * @Author: raoqidi
 * @Date: 2021-07-01 10:56:40
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-07-01 11:43:06
 * @Description: please add a description to the file
 * @FilePath: /qiankun-demo/main/src/main.ts
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { registerMicroApps, start } from "qiankun";
import microApps from "./micro-app";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

registerMicroApps(microApps, {
  beforeLoad: (app): any =>
    console.log("before load app.name =====>", app.name),
  beforeMount: [(app): any => console.log("before mount", app.name)],
  afterMount: [(app): any => console.log("after mount", app.name)],
  afterUnmount: [(app): any => console.log("after unmount", app.name)],
});

start();
