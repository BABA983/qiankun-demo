/*
 * @Author: raoqidi
 * @Date: 2021-08-09 15:42:38
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-08-09 15:42:42
 * @Description: please add a description to the file
 * @FilePath: /qiankun-demo/vue3/src/public-path.ts
 */
if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = <string>window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
