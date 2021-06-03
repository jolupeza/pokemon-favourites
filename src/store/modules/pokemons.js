import pokemonApi from "@/api/pokemon";

const state = {
  original: [],
  all: [],
  searchAll: "",
  searchFavorites: "",
  showDetail: false,
  infoPokemon: {},
};

const getters = {
  favorites: (state) =>
    state.searchFavorites.trim() !== ""
      ? state.all
          .filter((item) => item.favorite)
          .filter((item) =>
            item.name.includes(state.searchFavorites.toLowerCase())
          )
      : state.all.filter((item) => item.favorite),
  allItems: (state) =>
    state.searchAll.trim() !== ""
      ? state.all.filter((item) =>
          item.name.includes(state.searchAll.toLowerCase())
        )
      : state.all,
};

const actions = {
  getAll({ commit }) {
    pokemonApi.getPokemons().then((data) => {
      commit("SET_ALL", data.results);
      commit("SET_ORIGINAL", data.results);
    });
  },
  getInfoPokemon({ commit }, name) {
    return new Promise((resolve) => {
      pokemonApi.getInfoPokemon(name).then((data) => {
        commit("SET_INFO_POKEMON", data);
        resolve();
      });
    });
  },
  setAll({ commit, state }) {
    commit("SET_ALL", state.original);
  },
  changeStatusFavorite({ commit }, name) {
    commit("CHANGE_STATUS_FAVORITE", name);
  },
  setSearchAll({ commit }, search) {
    commit("SET_SEARCH_ALL", search);
  },
  setSearchFavorites({ commit }, search) {
    commit("SET_SEARCH_FAVORITES", search);
  },
  setShowDetail({ commit }, status) {
    commit("SET_STATUS_SHOW_DETAIL", status);
  },
  setCloseShowDetail({ commit }) {
    commit("SET_STATUS_SHOW_DETAIL", false);
    commit("SET_INFO_POKEMON", {});
  },
};

const mutations = {
  SET_ALL(state, items) {
    state.all = items.map((item) => {
      return { ...item, favorite: false };
    });
  },
  SET_ORIGINAL(state, items) {
    state.original = items.map((item) => {
      return { ...item, favorite: false };
    });
  },
  CHANGE_STATUS_FAVORITE(state, name) {
    const index = state.all.findIndex((pokemon) => pokemon.name === name);
    if (index !== -1) {
      state.all[index].favorite = !state.all[index].favorite;
    }
  },
  SET_SEARCH_ALL(state, search) {
    state.searchAll = search;
  },
  SET_SEARCH_FAVORITES(state, search) {
    state.searchFavorites = search;
  },
  SET_STATUS_SHOW_DETAIL(state, status) {
    state.showDetail = status;
  },
  SET_INFO_POKEMON(state, data) {
    state.infoPokemon = data;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
