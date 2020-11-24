export default {
  namespaced: true,
  state: {
    isResponse: false, //是否响应式
  },
  mutations: {
    SET_isResponse(state, val) {
      state.isResponse = val;
    },
  },
  actions: {},
};
