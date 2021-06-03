import Vue from "vue";
import Vuex from "vuex";
import pokemons from "@/store/modules/pokemons";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: true,
  },
  mutations: {
    SET_STATUS_LOADING(state, status) {
      state.loading = status;
    },
  },
  actions: {
    setStatusLoading({ commit }, status) {
      commit("SET_STATUS_LOADING", status);
    },
  },
  modules: {
    pokemons,
  },
});
