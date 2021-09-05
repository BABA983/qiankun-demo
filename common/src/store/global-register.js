/* eslint-disable */
/*
 * @Author: raoqidi
 * @Date: 2021-09-04 11:40:59
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-09-05 14:31:36
 * @Description: please add a description to the file
 * @FilePath: /qiankun-demo/common/src/store/global-register.js
 */
/**
 *
 * @param {vuex实例} store
 * @param {qiankun下发的props} props
 */
function registerGlobalModule(store, props = {}) {
  if (!store || !store.hasModule) {
    return;
  }
  console.log(props.getGlobalState());
  // 获取初始化的state
  const initState = (props.getGlobalState && props.getGlobalState()) || {
    menu: [],
    user: {},
  };
  console.log('initState');
  console.log(initState);

  // 将父应用的数据存储到子应用中，命名空间固定为global
  if (!store.hasModule('global')) {
    const globalModule = {
      namespaced: true,
      state: initState,
      actions: {
        // 子应用改变state并通知父应用
        setGlobalState({ commit }, payload) {
          commit('setGlobalState', payload);
          commit('emitGlobalState', payload);
        },
        // 初始化，只用于mount时同步父应用的数据
        initGlobalState({ commit }, payload) {
          console.log('initGlobalState');
          console.log(payload);
          commit('setGlobalState', payload);
        },
      },
      mutations: {
        setGlobalState(state, payload) {
          console.log('setGlobalState');
          console.log(state, payload);
          state = Object.assign(state, payload);
          console.log('after setGlobalState');
          console.log(state);
        },
        // 通知父应用
        emitGlobalState(state) {
          if (props.setGlobalState) {
            console.log('emitGlobalState');
            console.log(state);
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
