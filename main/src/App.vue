<!--
 * @Author: raoqidi
 * @Date: 2021-07-01 10:56:40
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-09-05 20:27:54
 * @Description: please add a description to the file
 * @FilePath: /qiankun-demo/main/src/App.vue
-->
<template>
  <Container>
    <Aside>
      <Menu @select="handleSelectMenu" router>
        <MenuItem><a href="/">main</a></MenuItem>
        <MenuItem><router-link to="/vue2">vue2</router-link></MenuItem>
        <MenuItem><router-link to="/vue3">vue3</router-link></MenuItem>
        <MenuItem><router-link to="/vite-vue3">vite-vue3</router-link></MenuItem>
      </Menu>
    </Aside>
    <Main id="container">
      <el-button @click="$router.push('/')">home</el-button>
      <el-button @click="$router.push('/about')">about</el-button>
      <router-view></router-view>
    </Main>
  </Container>
</template>

<script>
import {
  Loading,
  Button,
  Container,
  Aside,
  Menu,
  MenuItem,
  Main
} from 'common/node_modules/element-ui';
import 'common/node_modules/element-ui/lib/theme-chalk/index.css';
export default {
  name: 'App',
  components: {
    ElButton: Button,
    Container,
    Aside,
    Menu,
    MenuItem,
    Main
  },
  data() {
    return {
      isLoading: true,
      loadingInstance: null
    };
  },
  created() {
    console.log(Loading);
  },
  methods: {
    handleSelectMenu(path) {
      console.log(path);
    }
  },
  watch: {
    isLoading: {
      // immediate: true,
      handler(val) {
        // console.log('object-=-=-=');
        // console.log(this);
        if (val) {
          this.$nextTick(() => {
            this.loadingInstance = Loading.service({
              // target: '#app',
              text: '加载中...',
              background: 'rgba(255, 255, 255, 0.7)',
              customClass: 'loading'
            });
          });
          console.log('loading...');
        } else {
          // console.log(this.loadingInstance);
          // console.log('close...');
          this.$nextTick(() => {
            setTimeout(() => {
              this.loadingInstance?.close();
            }, 1000);
          });
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.loading {
  background: red !important;
  position: fixed !important;
  inset: 0 !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
}

#nav {
  padding: 30px;
  min-width: 200px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
::v-deep .el-dialog {
  &__header {
    color: red;
  }
}
</style>
