<!--
 * @Author: raoqidi
 * @Date: 2021-08-09 15:18:22
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-09-05 15:55:46
 * @Description: please add a description to the file
 * @FilePath: /qiankun-demo/vue3/src/App.vue
-->
<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <button @click="handleUpdate">update</button>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, useStore } from 'vuex';
export default defineComponent({
  name: 'App',
  setup() {
    const store = useStore();
    console.log('object--------');
    console.log(store.state);
    const actions = { ...mapActions('global', ['setGlobalState']) };
    const handleUpdate = () => {
      console.log(actions);
      store.dispatch('global/setGlobalState', { user: { name: 'haha' } });
    };
    return {
      handleUpdate,
    };
  },
});
</script>
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
