<template>
  <li class="List__item" @click="showDetail">
    <h3 class="List__item__name">{{ pokemon.name | capitalize }}</h3>
    <button class="List__item__star" @click.stop="handleFavorite">
      <template v-if="pokemon.favorite">
        <img src="../../assets/images/star-active.svg" alt="Star" />
      </template>
      <template v-else>
        <img src="../../assets/images/star.svg" alt="Star" />
      </template>
    </button>
  </li>
</template>

<script>
export default {
  name: "Index",
  props: {
    pokemon: {
      type: Object,
      required: true,
    },
  },
  filters: {
    capitalize(name) {
      return name.charAt(0).toUpperCase() + name.slice(1);
    },
  },
  methods: {
    handleFavorite() {
      this.$store.dispatch("pokemons/changeStatusFavorite", this.pokemon.name);
    },
    showDetail() {
      this.$store.dispatch("setStatusLoading", true);
      this.$store
        .dispatch("pokemons/getInfoPokemon", this.pokemon.name)
        .then(() => this.$store.dispatch("pokemons/setShowDetail", true))
        .finally(() => this.$store.dispatch("setStatusLoading", false));
    },
  },
};
</script>
<style scoped lang="scss">
.List {
  &__item {
    align-items: center;
    background-color: #ffffff;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin-bottom: 10px;
    padding: 17px 20px;
    &__name {
      color: #353535;
      font-size: 22px;
      font-weight: 500;
      line-height: 26.4px;
    }
    &__star {
      background-color: #f5f5f5;
      border: none;
      border-radius: 50%;
      padding: 9px;
    }
  }
}
</style>
