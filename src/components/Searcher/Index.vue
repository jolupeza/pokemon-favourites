<template>
  <div class="Searcher">
    <button class="Searcher__button">
      <img src="../../assets/images/search.svg" alt="Searcher" />
    </button>
    <input
      v-if="filterAll"
      v-model="searchAll"
      class="Searcher__input form-control"
      type="text"
      placeholder="Search"
    />
    <input
      v-else
      v-model="searchFavorites"
      class="Searcher__input form-control"
      type="text"
      placeholder="Search"
    />
  </div>
</template>
<script>
export default {
  name: "Searcher",
  props: {
    filterAll: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    searchAll: {
      get() {
        return this.$store.state.pokemons.searchAll;
      },
      set(value) {
        this.$store.dispatch("pokemons/setSearchAll", value);
      },
    },
    searchFavorites: {
      get() {
        return this.$store.state.pokemons.searchFavorites;
      },
      set(value) {
        this.$store.dispatch("pokemons/setSearchFavorites", value);
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.Searcher {
  margin-bottom: 40px;
  position: relative;
  &__button {
    background-color: transparent;
    border: none;
    height: 100%;
    left: 0;
    position: absolute;
  }
  &__input {
    border: none;
    border-radius: 5px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
    color: #353535;
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
    padding: 0.75rem 1rem 0.75rem 43px;
    width: 100%;
  }
}
</style>
