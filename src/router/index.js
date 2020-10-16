import Vue from "vue";
import Router from "vue-router";
import login from "@/components/login";
import home from "@/components/home";

Vue.use(Router);
let routes = [
  {
    path: "/login",
    component: login
  },
  {
    path: "/",
    component: home,
    children: [
      {
        path: "/",
        name: "introduction",
        component: resolve =>
          require(["../components/plugInUnit/introduction.vue"], resolve)
      },
      {
        path: "/sm2",
        name: "表单校验",
        meta: {
          icon: "el-icon-date"
        },
        component: resolve =>
          require(["../components/plugInUnit/sm2.vue"], resolve)
      },
      {
        path: "/checkTable",
        name: "表格多选",
        meta: {
          icon: "el-icon-folder-add"
        },
        component: resolve =>
          require(["../components/plugInUnit/checkTable.vue"], resolve)
      },
      {
        path: "/tabs",
        name: "tabs栏",
        meta: {
          icon: "el-icon-s-home"
        },
        component: resolve =>
          require(["../components/plugInUnit/tabs.vue"], resolve)
      },
      {
        path: "/sortTable",
        name: "表格排序",
        meta: {
          icon: "el-icon-s-cooperation"
        },
        component: resolve =>
          require(["../components/plugInUnit/sortTable.vue"], resolve)
      },
      {
        path: "/dropdown",
        name: "动画",
        meta: {
          icon: "el-icon-upload"
        },
        component: resolve =>
          require(["../components/plugInUnit/dropdown.vue"], resolve)
      },
      {
        path: "/echarts",
        name: "地图迁徙图",
        meta: {
          icon: "el-icon-s-flag"
        },
        component: resolve =>
          require(["../components/plugInUnit/echarts.vue"], resolve)
      },
      {
        path: "/complexTable",
        name: "排序多选表格",
        meta: {
          icon: "el-icon-s-shop"
        },
        component: resolve =>
          require(["../components/plugInUnit/complexTable.vue"], resolve)
      },
      {
        path: "/rsa",
        name: "rsa加解密",
        meta: {
          icon: "el-icon-s-promotion"
        },
        component: resolve =>
          require(["../components/plugInUnit/rsa.vue"], resolve)
      },
      {
        path: "/popover",
        name: "弹出框",
        meta: {
          icon: "el-icon-star-on"
        },
        component: resolve =>
          require(["../components/plugInUnit/popover.vue"], resolve)
      },
      {
        path: "/tooltip",
        name: "文字提示",
        meta: {
          icon: "el-icon-video-camera-solid"
        },
        component: resolve =>
          require(["../components/plugInUnit/tooltip.vue"], resolve)
      },
      {
        path: "/confirm",
        name: "消息弹窗",
        meta: {
          icon: "el-icon-s-open"
        },
        component: resolve =>
          require(["../components/plugInUnit/confirm.vue"], resolve)
      },
      {
        path: "/gaudMap",
        name: "高德地图",
        meta: {
          icon: "el-icon-s-opportunity"
        },
        component: resolve =>
          require(["../components/plugInUnit/gaudMap.vue"], resolve)
      },
      {
        path: "/mixins",
        name: "混合分发",
        meta: {
          icon: "el-icon-s-opportunity"
        },
        component: resolve =>
          require(["../components/plugInUnit/mixins.vue"], resolve)
      },
      {
        path: "/gTopo",
        name: "流程图",
        meta: {
          icon: "el-icon-s-opportunity"
        },
        component: resolve =>
          require(["../components/plugInUnit/gTopo.vue"], resolve)
      }
    ]
  }
];
let router = new Router({
  mode: "history",
  fallback: true,
  base: "/base/",
  routes,
  scrollBehavior(to, from, savePosition) {}
});
router.beforeEach((to, from, next) => {
  let user = sessionStorage.getItem("user");
  if (user || to.path === "/login") {
    next();
  } else {
    next("/login");
  }
});
export default router;
