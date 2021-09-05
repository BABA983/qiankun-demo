<!--
 * @Author: raoqidi
 * @Date: 2021-08-30 11:13:24
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-08-30 11:44:55
 * @Description: please add a description to the file
 * @FilePath: /qiankun-demo/vite-vue3/src/views/Home.vue
-->
<template>
  <div>
    This is a Home page
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  </div>
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: { HelloWorld },
});
</script>

<style></style>
