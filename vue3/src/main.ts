/*
 * @Author: raoqidi
 * @Date: 2021-08-09 15:18:22
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-09-05 15:26:23
 * @Description: please add a description to the file
 * @FilePath: /qiankun-demo/vue3/src/main.ts
 */
import './public-path';
import Vue, { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
// import { store as commonStore } from 'common';
import registerGlobalModule from './store/global-register';

let instance: Vue.App<Element>;

const render = (props: any = {}) => {
  const { container } = props;
  console.log(container);
  instance = createApp(App);
  instance
    .use(store)
    .use(router)
    .mount(
      container instanceof Element ? container.querySelector('#app') : container
    );
};

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  console.log(process.env.VUE_APP_PORT);

  render({ container: '#app' });
}
//暴露主应用生命周期钩子
export async function bootstrap() {
  console.log('[vue3] bootstraped');
}

export async function mount(props: any) {
  console.log('mount [vue3]');
  // commonStore.globalRegister(store, props);
  registerGlobalModule(store, props);
  render(props);
  props.onGlobalStateChange((state: any, prev: any) => {
    console.log('globalStateChange的回调...');
    console.log(prev, state);
  });
}

export async function unmount() {
  console.log('unmount college app');
  instance.unmount();
}
