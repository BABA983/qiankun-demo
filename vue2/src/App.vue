<!--
 * @Author: raoqidi
 * @Date: 2021-07-01 11:59:36
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-07-01 15:23:39
 * @Description: please add a description to the file
 * @FilePath: /qiankun-demo/vue2/src/App.vue
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
