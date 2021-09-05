import type { RegistrableApp } from 'qiankun';

/*
 * @Author: raoqidi
 * @Date: 2021-07-01 11:07:04
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-08-30 16:25:47
 * @Description: please add a description to the file
 * @FilePath: /qiankun-demo/main/src/micro-app.ts
 */
import action from './store/globalState';
const getActiveRule = (hash: string) => (location: Location) => location.hash.startsWith(hash);
const domain = 'localhost';
const container = '#container';
interface IProps {
  /**路由前缀 */
  routerBase: string;
}
const microApps: RegistrableApp<IProps>[] = [
  {
    name: 'vue2',
    entry: `//${domain}:7000`,
    container,
    // activeRule: getActiveRule("#/vue2"),
    activeRule: '/vue2'
    // props: {
    //   routerBase: '/vue2'
    // }
  },
  {
    name: 'vue3',
    entry: `//${domain}:7001`,
    container,
    // activeRule: getActiveRule("#/vue3"),
    activeRule: '/vue3'
    // props: {
    //   routerBase: '/vue3'
    // }
  },
  {
    name: 'vite-vue3',
    entry: `//${domain}:7003`,
    container,
    activeRule: '/vite-vue3'
  }
];

const apps = microApps.map((item: RegistrableApp<IProps>) => {
  return {
    ...item,
    props: {
      routerBase: item.activeRule,
      getGlobalState: action.getGlobalState
    }
  };
});

export default apps;
