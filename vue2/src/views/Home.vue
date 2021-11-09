<!--
 * @Author: raoqidi
 * @Date: 2021-07-02 11:40:47
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-09-11 20:49:58
 * @Description: please add a description to the file
 * @FilePath: /qiankun-demo/vue2/src/views/Home.vue
-->
<template>
  <div class="home">
    <el-button @click="() => count--">-</el-button>
    {{ count }}
    <el-button @click="() => count++">+</el-button>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      count: 0,
    };
  },
  created() {
    console.log('vue2 created');
  },
  mounted() {
    console.log('vue2 mounted');
  },
  activated() {
    console.log('home activated');
  },
});
</script>
