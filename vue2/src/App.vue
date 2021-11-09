<!--
 * @Author: raoqidi
 * @Date: 2021-07-01 11:59:36
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-09-11 21:02:19
 * @Description: please add a description to the file
 * @FilePath: /qiankun-demo/vue2/src/App.vue
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <a v-if="isSubApp" href="/">Main</a> ｜
      <el-row>
        age:
        <el-input v-model="inputVal" />
      </el-row>
      <el-row>
        menuName:
        <el-input v-model="menuName" />
      </el-row>
      <br />
      <el-button @click="handleInput">change age</el-button>
      <el-button @click="handleMenuName">change menuName</el-button>
      <el-button @click="showDialog">about</el-button>
      <el-button @click="log">log Vuex</el-button>
      <el-dialog title="Dialog" :visible.sync="isShowDialog">
        hahaha
        <template #footer>
          <div>
            <el-button @click="showDialog">reject</el-button>
            <el-button @click="showDialog">confirm</el-button>
          </div>
        </template>
      </el-dialog>
    </div>
    <keep-alive :include="loadedRoute">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  data() {
    return {
      isShowDialog: false,
      inputVal: '',
      menuName: '',
      loadedRoute: [],
    };
  },
  mounted() {
    console.log('====================================');
    console.log(this.$parentProps);
    console.log('====================================');
    if (window.__POWERED_BY_QIANKUN__) {
      this.$parentProps.onGlobalStateChange((state) => {
        console.log(state['vue2']);
        const { childRoute } = state['vue2'];
        const loadedRoutes = childRoute.map((item) =>
          this.$router.resolve(item)
        );
        console.log(loadedRoutes);
        const loadedRouteNames = loadedRoutes.map((item) => item.route.name);
        console.log(loadedRouteNames);
        this.loadedRoute = loadedRouteNames;
      }, true);
    }
  },
  computed: {
    isSubApp() {
      return !!window.__POWERED_BY_QIANKUN__;
    },
    ...mapState('global', {
      user: (state) => state.user,
    }),
  },
  methods: {
    showDialog() {
      console.log(this.user);
      this.isShowDialog = !this.isShowDialog;
      this.update();
      console.log(this.user);
    },
    ...mapActions('global', ['setGlobalState']),
    update() {
      this.setGlobalState({ user: { name: '张三' } });
    },
    log() {
      console.log(this.$store.state);
    },
    handleInput() {
      this.setGlobalState({ user: { age: this.inputVal } });
    },
    handleMenuName() {
      this.setGlobalState({ menu: { name: this.menuName } });
    },
  },
};
</script>

<style lang="scss" scoped>
// @import '~@/styles/index.scss';
@keyframes haha {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background: tomato;
  a {
    font-weight: bold;
    color: #2c3e50;
    animation: haha 5s ease 1s forwards;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

::v-deep .el-dialog {
  &__header {
    text-align: initial;
  }
}
</style>
