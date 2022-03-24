import { createStore } from "vuex";

export default createStore({
  state: {
    cat_id: 275,
  },
  getters: {
    getId: (state) => (id) => {
      state.cat_id = id;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
