/*
 * @Author: raoqidi
 * @Date: 2021-07-01 12:09:01
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-07-01 14:24:52
 * @Description: please add a description to the file
 * @FilePath: /qiankun-demo/vue2/src/public-path.ts
 */
if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = <string>window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
