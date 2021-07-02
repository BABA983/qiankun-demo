/*
 * @Author: raoqidi
 * @Date: 2021-07-01 12:02:42
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-07-01 14:31:25
 * @Description: please add a description to the file
 * @FilePath: /qiankun-demo/vue2/vue.config.js
 */
/*
 * @Author: raoqidi
 * @Date: 2021-07-01 11:49:26
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-07-01 11:54:27
 * @Description: please add a description to the file
 * @FilePath: /qiankun-demo/vue2/vue.config.js
 */
const { name } = require("./package.json");

module.exports = {
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd",
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
  devServer: {
    port: "7000",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
};
