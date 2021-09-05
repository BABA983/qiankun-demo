/*
 * @Author: raoqidi
 * @Date: 2021-07-02 11:41:00
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-09-04 20:59:14
 * @Description: please add a description to the file
 * @FilePath: /qiankun-demo/vue2/.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    // sourceType: 'module',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
