/*
 * @Author: raoqidi
 * @Date: 2021-08-09 15:23:05
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-09-05 15:12:08
 * @Description: please add a description to the file
 * @FilePath: /qiankun-demo/vue3/vue.config.js
 */
const path = require('path');
const { name } = require('./package');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // 设置common要参与编译打包（ES6 -> ES5）
  transpileDependencies: [
    'common',
    /[/\\]node_modules[/\\](.+?)?common(.*)[/\\]*/,
  ],
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
  devServer: {
    port: process.env.VUE_APP_PORT,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};
