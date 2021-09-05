/*
 * @Author: raoqidi
 * @Date: 2021-07-01 12:02:42
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-09-04 15:05:23
 * @Description: please add a description to the file
 * @FilePath: /qiankun-demo/vue2/vue.config.js
 */
const { name } = require('./package.json');

module.exports = {
  // transpileDependencies: ['common'],
  // chainWebpack: (config) => {
  //   config.module
  //     .rule('fonts')
  //     .test(/.(ttf|otf|eot|woff|woff2)$/)
  //     .use('url-loader')
  //     .loader('url-loader')
  //     .options({})
  //     .end();
  // },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/index.scss";`,
      },
    },
  },
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
