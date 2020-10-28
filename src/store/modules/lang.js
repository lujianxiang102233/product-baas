export default {
  state: {
    currentLang: "zh-CN"
  },
  getters: {},
  actions: {
    // 语言切换保存到状态管理
    update_current_lang({ commit }, payload) {
      commit("UPDATE_CURRENT_LANG", payload);
    }
  },
  mutations: {
    UPDATE_CURRENT_LANG(state, currentLang) {
      state.currentLang = currentLang;
    }
  }
};
