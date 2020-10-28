<template>
  <div class="navBar">
    <div
      class="headText"
      :class="isCollapse ? 'menu-bar-collapse-width' : 'menu-bar-width'"
      :style="{ backgroundColor: color }"
    >
      增值云方案
    </div>
    <div class="sideBar">
      <el-aside
        class="aside"
        :class="isCollapse ? 'menu-bar-collapse-width' : 'menu-bar-width'"
      >
        <el-menu
          ref="navmenu"
          class="el-menu-vertical-demo"
          text-color="#303133"
          :active-text-color="color"
          router
          :collapse="isCollapse"
          :collapse-transition="false"
          :default-active="$route.path"
        >
          <el-menu-item
            v-for="(item, index) in sideBarList"
            :key="index"
            :index="item.url"
          >
            <i :class="item.icon"></i>
            <span slot="title">{{ item.name }}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState({
      color: (state) => state.app.color,
      isCollapse: (state) => state.app.isCollapse,
    }),
    sideBarList() {
      return [
        {
          url: '/mixins',
          name: this.$t('mixins'),
          icon: 'el-icon-date',
        },
        {
          url: '/gTopo',
          name: this.$t('gTopo'),
          icon: 'el-icon-date',
        },
        {
          url: '/sm2',
          name: this.$t('sm2'),
          icon: 'el-icon-date',
        },
        {
          url: '/checkTable',
          name: this.$t('checkTable'),
          icon: 'el-icon-folder-add',
        },
        {
          url: '/sortTable',
          name: this.$t('sortTable'),
          icon: 'el-icon-s-cooperation',
        },
        {
          url: '/complexTable',
          name: this.$t('complexTable'),
          icon: 'el-icon-s-shop',
        },
        {
          url: '/rsa',
          name: this.$t('rsa'),
          icon: 'el-icon-s-promotion',
        },
        {
          url: '/animation',
          name: this.$t('animation'),
          icon: 'el-icon-upload',
        },
        {
          url: '/echarts',
          name: this.$t('echarts'),
          icon: 'el-icon-s-flag',
        },
        {
          url: '/popover',
          name: this.$t('popover'),
          icon: 'el-icon-star-on',
        },
        {
          url: '/tooltip',
          name: this.$t('tooltip'),
          icon: 'el-icon-video-camera-solid',
        },
        {
          url: '/confirm',
          name: this.$t('confirm'),
          icon: 'el-icon-s-open',
        },
        {
          url: '/gaudMap',
          name: this.$t('gaudMap'),
          icon: 'el-icon-s-opportunity',
        },
      ]
    },
    mainTabs: {
      get() {
        return this.$store.state.tab.mainTabs
      },
      set(val) {
        this.$store.commit('updateMainTabs', val)
      },
    },
    mainTabsActiveName: {
      get() {
        return this.$store.state.tab.mainTabsActiveName
      },
      set(val) {
        this.$store.commit('updateMainTabsActiveName', val)
      },
    },
  },
  watch: {
    $route: 'handleRoute',
  },
  methods: {
    handleRoute(route) {
      this.onRoute = route.path
      let tab = this.mainTabs.filter((item) => item.name === route.name)[0]
      if (!tab) {
        tab = {
          name: route.name,
          title: route.name,
          icon: route.meta.icon,
        }
        this.mainTabs = this.mainTabs.concat(tab)
      }
      this.mainTabsActiveName = tab.name
    },
  },
  created() {
    this.handleRoute(this.$route)
  },
  mounted() {},
}
</script>
<style lang="less" scoped>
.navBar {
  border-right: 1px solid #e6e6e6;
  .headText {
    height: 60px;
    line-height: 60px;
    // background-color: rgb(255, 118, 53);
    color: #fff;
    font-size: 20px;
    text-align: center;
  }
  .sideBar {
    height: calc(100% - 60px);
  }
  .el-menu-vertical-demo {
    border: none;
  }
  .menu-bar-collapse-width {
    width: 65px !important;
  }
  .menu-bar-width {
    width: 200px !important;
    &.aside {
      height: 100%;
    }
  }
}
</style>
