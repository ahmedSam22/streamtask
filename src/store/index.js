import { createStore } from "vuex";

export default createStore({
  state: {
    param: 3,
  },
  getters: {
    logTest: (state) => (id) => {
      state.param = id.category_id;
    },
  },
  mutations: {
    logTest(state, e) {
      state.param = e;
      console.log(state.param);
    },
  },
  actions: {
    logTest(commit, e) {
      commit.param = e?.category_id;
    },
  },
  modules: {},
});
