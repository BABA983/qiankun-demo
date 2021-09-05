/*
 * @Author: raoqidi
 * @Date: 2021-08-30 11:04:09
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-08-30 16:42:12
 * @Description: please add a description to the file
 * @FilePath: /qiankun-demo/vite-vue3/src/main.ts
 */
import { createApp, App } from 'vue';
import routes from '@/router';
import Application from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  // import.meta.env
  // window.__POWERED_BY_QIANKUN__ ? '/vite-vue3' : process.env.BASE_URL
  history: createWebHistory(
    window.__POWERED_BY_QIANKUN__ ? '/vite-vue3' : import.meta.env.BASE_URL
  ),
  routes,
});

let instance: App<Element>;

const render = (props: any = {}) => {
  const { container } = props;
  console.log(container);
  instance = createApp(Application);
  instance
    .use(router)
    .mount(
      container instanceof Element ? container.querySelector('#app') : container
    );
};

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  console.log(import.meta.env.VUE_APP_PORT);

  render({ container: '#app' });
}

//暴露主应用生命周期钩子
export async function bootstrap() {
  console.log('subapp bootstraped');
}

export async function mount(props: any) {
  console.log('mount subapp');
  render(props);
}

export async function unmount() {
  console.log('unmount college app');
  console.log(instance);
  instance.unmount();
}
