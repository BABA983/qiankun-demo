/*
 * @Author: raoqidi
 * @Date: 2021-08-23 17:11:51
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-08-23 17:24:44
 * @Description: please add a description to the file
 * @FilePath: /qiankun-demo/react17/config-overrides.js
 */
const { name } = require('./package.json'); //注意package.json中的name要和基座中注册的子应用name要一样
module.exports = {
  webpack: function override(config, env) {
    // 解决主应用接入后会挂掉的问题：https://github.com/umijs/qiankun/issues/340
    console.log(config.entry, 'config.entry');
    // config.entry = config.entry.filter(
    //   (e) => !e.includes('webpackHotDevClient')
    // );

    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    config.output.jsonpFunction = `webpackJsonp_${name}`;
    return config;
  },
  devServer: (configFunction) => {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.open = false;
      config.hot = false;
      config.headers = {
        'Access-Control-Allow-Origin': '*',
      };
      return config;
    };
  },
};
