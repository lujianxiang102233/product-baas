export default {
  state: {
    isCollapse: false,
    color: "#FF7635",
    onRoute: ""
  },
  getters: {},
  mutations: {
    changeColor(state, payload) {
      state.color = payload;
    },
    changeisCollapse(state) {
      state.isCollapse = !state.isCollapse;
    },
    changeRoute(state, url) {
      state.onRoute = url;
    }
  }
};
