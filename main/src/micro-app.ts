import type { RegistrableApp } from "qiankun";

/*
 * @Author: raoqidi
 * @Date: 2021-07-01 11:07:04
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-07-02 09:21:18
 * @Description: please add a description to the file
 * @FilePath: /qiankun-demo/main/src/micro-app.ts
 */
const getActiveRule = (hash: string) => (location: Location) =>
  location.hash.startsWith(hash);
const microApps: RegistrableApp<any>[] = [
  {
    name: "vue2",
    entry: "//localhost:7000",
    container: "#container",
    // activeRule: getActiveRule("#/vue2"),
    activeRule: "#/vue2",
    props: {
      routerBase: "#/vue2",
    },
  },
  {
    name: "vue3",
    entry: "//localhost:7001",
    container: "#container",
    // activeRule: getActiveRule("#/vue2"),
    activeRule: "/vue3",
    props: {
      routerBase: "/vue3",
    },
  },
];

export default microApps;
