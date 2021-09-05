/*
 * @Author: raoqidi
 * @Date: 2021-08-25 10:29:03
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-09-04 15:19:03
 * @Description: please add a description to the file
 * @FilePath: /qiankun-demo/main/src/store/globalState.ts
 */
import { initGlobalState, MicroAppStateActions } from 'qiankun';
import Vue from 'vue';

const initState: any = Vue.observable({
  user: {
    // name: 'BABA'
  }
});
type IMicroAppStateActions = MicroAppStateActions & {
  getGlobalState?: (key: string) => any;
};
const action: IMicroAppStateActions = initGlobalState(initState);
action.onGlobalStateChange((state, prev) => {
  // 像 watch newVal，oldVal
  console.log('main change', JSON.stringify(state), JSON.stringify(prev));
  for (const key in state) {
    initState[key] = state[key];
  }
});

action.getGlobalState = (key: string) => {
  console.log(key ? initState[key] : initState);
  return key ? initState[key] : initState;
};

export default action;
