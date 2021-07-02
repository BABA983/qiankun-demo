/*
 * @Author: raoqidi
 * @Date: 2021-07-01 11:59:36
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-07-01 15:09:54
 * @Description: please add a description to the file
 * @FilePath: /qiankun-demo/vue2/src/main.ts
 */
import "./public-path";
import Vue from "vue";
import App from "./App.vue";
import router, { routes } from "./router";
import VueRouter from "vue-router";
import store from "./store";

Vue.config.productionTip = false;

let instance: any = null;

const render = (props: any = {}) => {
  const { container, routerBase } = props;
  const router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? routerBase : process.env.BASE_URL,
    mode: "hash",
    routes,
  });

  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector("#app") : "#app");
};

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}

export async function mount(props: any) {
  console.log("[vue] props from main framework", props);

  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
  // router = null;
}
