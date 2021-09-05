<!--
 * @Author: raoqidi
 * @Date: 2021-08-30 11:04:09
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-08-30 18:04:34
 * @Description: please add a description to the file
 * @FilePath: /qiankun-demo/vite-vue3/src/App.vue
-->
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <section>
    <img alt="Vue logo" src="./assets/logo.png" />
    <br />
    <router-link to="/">default</router-link> |
    <router-link to="/home">home</router-link> |
    <router-link to="/about">about</router-link>
    <br />
    <template v-if="$route.path === '/'"> This is Default page </template>
    <router-view />
  </section>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  color: dodgerblue;
  margin-top: 60px;
}
</style>
