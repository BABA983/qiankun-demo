/*
 * @Author: raoqidi
 * @Date: 2021-07-02 11:40:07
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-09-11 13:40:00
 * @Description: please add a description to the file
 * @FilePath: /qiankun-demo/main/src/main.ts
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

const instance = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
