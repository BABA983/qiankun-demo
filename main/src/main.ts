/*
 * @Author: raoqidi
 * @Date: 2021-07-02 11:40:07
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-08-30 17:10:39
 * @Description: please add a description to the file
 * @FilePath: /qiankun-demo/main/src/main.ts
 */
import { initGlobalState, MicroAppStateActions, registerMicroApps, start } from 'qiankun';
import Vue from 'vue';
import App from './App.vue';
import microApps from './micro-app';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

const instance = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

function loader(loading: boolean) {
  console.log(instance);
  if (instance && instance.$children) {
    // App.vue
    (instance.$children[0] as any).isLoading = loading;
  }
}
const apps = microApps.map(item => {
  return {
    ...item,
    loader
  };
});

registerMicroApps(apps, {
  beforeLoad: app => Promise.resolve(console.log('before load app.name =====>', app.name)),
  beforeMount: [
    app =>
      Promise.resolve(() => {
        console.log('before mount', app.name);
      })
  ],
  afterMount: [
    app =>
      Promise.resolve(() => {
        console.log('after mount', app.name);
      })
  ],
  afterUnmount: [app => Promise.resolve(console.log('after unmount', app.name))]
});

// start();
// start({ sandbox: { strictStyleIsolation: true } }); // 模式2
start({ sandbox: { experimentalStyleIsolation: true } });
