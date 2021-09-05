/*
 * @Author: raoqidi
 * @Date: 2021-08-09 15:18:22
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-09-05 15:15:36
 * @Description: please add a description to the file
 * @FilePath: /qiankun-demo/vue3/.eslintrc
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
