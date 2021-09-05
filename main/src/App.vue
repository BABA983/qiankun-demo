<!--
 * @Author: raoqidi
 * @Date: 2021-07-01 10:56:40
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-09-05 19:58:19
 * @Description: please add a description to the file
 * @FilePath: /qiankun-demo/main/src/App.vue
-->
<template>
  <Container>
    <Aside>
      <Menu @select="handleSelectMenu" router>
        <MenuItem v-for="item in menu" :index="item.value" :key="item.value">
          <template #title>{{ item.name }}</template>
        </MenuItem>
        <!-- <MenuItem><a href="/">main</a></MenuItem>
        <MenuItem><router-link to="/vue2">vue2</router-link></MenuItem>
        <MenuItem><router-link to="/vue3">vue3</router-link></MenuItem>
        <MenuItem><router-link to="/vite-vue3">vite-vue3</router-link></MenuItem> -->
      </Menu>
    </Aside>
    <Main id="container">
      <Tabs type="card" v-model="activeTab" closable>
        <TabPane
          v-for="item in tabs"
          :key="item.value"
          :label="item.name"
          :name="item.value"
        ></TabPane>
      </Tabs>
      <div
        v-for="item in microApps"
        :key="item.name"
        :id="item.container.slice(1)"
        v-show="$route.path.startsWith(item.prefixPath)"
      ></div>
      <!-- <el-button @click="$router.push('/')">home</el-button>
      <el-button @click="$router.push('/about')">about</el-button> -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </Main>
  </Container>
</template>

<script>
import {
  Loading,
  // Button,
  Container,
  Aside,
  Menu,
  MenuItem,
  Main,
  Tabs,
  TabPane
} from 'common/node_modules/element-ui';
import 'common/node_modules/element-ui/lib/theme-chalk/index.css';
import apps from './micro-app';
export default {
  name: 'App',
  components: {
    // ElButton: Button,
    Container,
    Aside,
    Menu,
    MenuItem,
    Main,
    Tabs,
    TabPane
  },
  data() {
    return {
      isLoading: true,
      loadingInstance: null,
      activeTab: '',
      tabs: [],
      loadedApp: {}, // 已加载的微应用
      menu: [
        { name: '主应用的about', value: '/about' },
        { name: 'vue2的home', value: '/vue2/' },
        { name: 'vue2的about', value: '/vue2/about' },
        { name: 'vue3的home', value: '/vue3/' },
        { name: 'vue3的about', value: '/vue3/about' },
        { name: 'vite-vue3的home', value: '/vite-vue3' }
      ]
    };
  },
  created() {
    console.log(Loading);
  },
  methods: {
    handleSelectMenu(path) {
      console.log(path);
      if (this.activeTab === path) return;
      const existTab = this.tabs.find(item => item.value === path);
      if (existTab) {
        this.activeTab = existTab.value;
      } else {
        // 先判断是子应用还是主应用，再判断子应用是否已加载
        const microApp = this.microApps.find(item => path.includes(item.prefixPath));
      }
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
  },
  computed: {
    microApps() {
      return apps.map((item, index) => {
        return (item = {
          ...item,
          container: `#appContainer${index}`,
          prefixPath: item.activeRule
        });
      });
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
