<!--
 * @Author: raoqidi
 * @Date: 2021-07-01 10:56:40
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-07-02 09:20:36
 * @Description: please add a description to the file
 * @FilePath: /qiankun-demo/main/src/App.vue
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/vue2">vue2</router-link> |
      <router-link to="/vue3">vue3</router-link>
    </div>
    <main id="container"></main>
    <!-- <router-view /> -->
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
