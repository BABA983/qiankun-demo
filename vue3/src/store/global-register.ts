/*
 * @Author: raoqidi
 * @Date: 2021-08-25 10:33:59
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-09-04 13:29:36
 * @Description: please add a description to the file
 * @FilePath: /qiankun-demo/vue2/src/store/global-register.ts
 */
// sub-vue/src/store/global-register.js

import { Module, Store, StoreOptions } from 'vuex';

/**
 *
 * @param {vuex实例} store
 * @param {qiankun下发的props} props
 */
function registerGlobalModule(store: Store<any>, props: any = {}) {
  if (!store || !store.hasModule) {
    return;
  }
  console.log(props.getGlobalState());
  // 获取初始化的state
  const initState: StoreOptions<any> = (props.getGlobalState &&
    props.getGlobalState()) || {
    menu: [],
    user: {},
  };

  // 将父应用的数据存储到子应用中，命名空间固定为global
  if (!store.hasModule('global')) {
    const globalModule: Module<any, any> = {
      namespaced: true,
      state: initState,
      actions: {
        // 子应用改变state并通知父应用
        setGlobalState({ commit }: any, payload: any) {
          commit('setGlobalState', payload);
          commit('emitGlobalState', payload);
        },
        // 初始化，只用于mount时同步父应用的数据
        initGlobalState({ commit }: any, payload: any) {
          console.log('initGlobalState');
          console.log(payload);
          commit('setGlobalState', payload);
        },
      },
      mutations: {
        setGlobalState(state: any, payload: any) {
          console.log('setGlobalState');
          console.log(state, payload);
          state = Object.assign(state, payload);
        },
        // 通知父应用
        emitGlobalState(state: any) {
          if (props.setGlobalState) {
            props.setGlobalState(state);
          }
        },
      },
    };
    store.registerModule('global', globalModule);
  } else {
    // 每次mount时，都同步一次父应用数据
    store.dispatch('global/initGlobalState', initState);
  }
}

export default registerGlobalModule;
