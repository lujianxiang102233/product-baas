import Vue from "vue";
import App from "./App";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/css/comment.css";
import moment from "moment";
import Router from "vue-router";
import md5 from "js-md5"; //加密
import utils from "@/assets/js/utils"; //加密
import color from "@/assets/js/color";
import Cookie from "js-cookie";
import store from "./store";
// import vuedemoNpmPractice from "vuedemo-npm-practice";
// import dataFormaterSelect from "data-formater-select";
import vuedemoNpmPractice from "./vuedemo-npm-practice/vuedemo-npm-practice/index";
import dataFormaterSelect from "./data-formater-select/dataformater";
import JsEncrypt from "jsencrypt";
import sm2 from "sm-crypto";
// 引入echarts
import echarts from "echarts";
import "echarts-extension-amap";
// require("echarts-extension-amap");
import JsonViewer from "vue-json-viewer";
// 引入中国地图
// import "echarts/map/js/china";
import axios from "axios";
Vue.prototype.$axios = axios;
Vue.prototype.$colorList = color.colorList;
Vue.prototype.$echarts = echarts;
Vue.prototype.$jse = new JsEncrypt();
Vue.prototype.$sm2 = sm2.sm2;
// console.log(Vue.prototype.$jse);
import filter from "./filters";
Vue.mixin(filter);
import myPlugin from "./myPlugin";
Vue.use(myPlugin);
Vue.use(vuedemoNpmPractice);
Vue.use(JsonViewer);

Vue.prototype.utils = utils;
Vue.prototype.$dataFormaterSelect = dataFormaterSelect;
console.log(26, Vue.prototype.$dataFormaterSelect("1528094422381"));
Vue.use(ElementUI);
Vue.use(Router);
Vue.prototype.$md5 = md5;
Vue.prototype.$cookie = Cookie;
Vue.prototype.$getColor = color => {
  return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    {
      offset: 0,
      color: color[0] // 0% 处的颜色
    },
    {
      offset: 1,
      color: color[1] // 50% 处的颜色16638d
    }
  ]);
};

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
