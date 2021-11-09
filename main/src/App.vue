<!--
 * @Author: raoqidi
 * @Date: 2021-07-01 10:56:40
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-09-11 18:12:09
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
      </Menu>
    </Aside>
    <Main id="container">
      <Tabs type="card" v-model="activeTab" closable @tab-remove="removeTab" @tab-click="switchTab">
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
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </Main>
  </Container>
</template>

<script>
import {
  Loading,
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
import { loadMicroApp, initGlobalState } from 'qiankun';
// 初始化 state
const actions = initGlobalState({});
export default {
  name: 'App',
  components: {
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
      activeTab: '',
      tabs: [],
      loadedApp: {}, // 已加载的微应用
      menu: [
        { name: '主应用的about', value: '/about' },
        { name: 'vue2的home', value: '/vue2/home' },
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
  mounted() {
    // 主应用第一次进来时 '/'
    let { fullPath } = this.$route;
    const { pathname } = window.location;
    // 主应用的路由页面
    if (fullPath === '/' && pathname !== '/') {
      fullPath = pathname;
    }
    this.handleSelectMenu(fullPath);
  },
  // mounted() {},
  methods: {
    handleSelectMenu(path) {
      console.log(path);
      if (this.activeTab === path) return;
      console.log('====================================');
      console.log(123123);
      console.log('====================================');
      const existTab = this.tabs.find(item => item.value === path);
      if (existTab) {
        this.activeTab = existTab.value;
      } else {
        // 先判断是子应用还是主应用，再判断子应用是否已加载
        const microApp = this.microApps.find(item => path.includes(item.prefixPath));
        if (microApp) {
          const childPath = path.replace(microApp.prefixPath, '');
          // 没有加载过
          if (!this.loadedApp[microApp.name]) {
            const app = loadMicroApp(microApp);
            this.loadedApp[microApp.name] = {
              app,
              childRoute: []
            };
          }
          this.loadedApp[microApp.name].childRoute.push(childPath);
          actions.setGlobalState(this.loadedApp);
        }
        const currentMenu = this.menu.find(item => item.value === path);
        if (currentMenu) {
          this.tabs.push(currentMenu);
          this.activeTab = currentMenu.value;
        }
      }
    },
    removeTab(tab) {
      const microApp = this.microApps.find(item => tab.includes(item.prefixPath));
      if (microApp) {
        const childPath = tab.replace(microApp.prefixPath, '');
        const childRouteIndex = this.loadedApp[microApp.name].childRoute.indexOf(childPath);
        this.loadedApp[microApp.name].childRoute.splice(childRouteIndex, 1);
        actions.setGlobalState(this.loadedApp);

        // 再当前微应用的页面是否已全部关闭
        if (this.loadedApp[microApp.name].childRoute.length === 0) {
          this.loadedApp[microApp.name].app.unmount();
          this.loadedApp[microApp.name] = null;
        }
      }
      const deleteIndex = this.tabs.findIndex(item => item.value === tab);
      this.tabs.splice(deleteIndex, 1);
      if (deleteIndex > 0 && this.tabs.length > 0) {
        console.log('haha');
        console.log('====================================');
        console.log(this.tabs[deleteIndex - 1].value);
        console.log('====================================');
        this.handleSelectMenu(this.tabs[deleteIndex - 1].value);
        this.$router.push(this.tabs[deleteIndex - 1].value);
      }
    },
    switchTab(tab) {
      if (tab.name === this.$route.path) return;
      this.$router.push(tab.name);
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
