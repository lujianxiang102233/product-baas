import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import app from "./modules/app";
import tab from "./modules/tab";
import lang from "./modules/lang";

const store = new Vuex.Store({
  modules: {
    app,
    tab,
    lang
  }
});
export default store;
