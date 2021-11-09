<!--
 * @Author: raoqidi
 * @Date: 2021-08-09 15:18:22
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-09-11 13:59:11
 * @Description: please add a description to the file
 * @FilePath: /qiankun-demo/vue3/src/views/Home.vue
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  created() {
    console.log('vue3 created');
  },
  mounted() {
    console.log('vue3 mounted');
  },
});
</script>
