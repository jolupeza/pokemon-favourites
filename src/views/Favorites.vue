<template>
  <div class="Dashboard">
    <loading v-if="loading" />
    <template v-else>
      <div class="container">
        <section class="Dashboard__wrapper">
          <searcher :filter-all="false" />
          <template v-if="favorites.length">
            <list-of-pokemon :items="favorites" />
          </template>
          <template v-else>
            <list-empty>
              <template #title>Uh-oh!</template>
              <template #message>You don't have favorites yet!</template>
            </list-empty>
          </template>
        </section>
      </div>
      <actions />
      <detail-pokemon />
    </template>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import Searcher from "@/components/Searcher/Index";
import ListOfPokemon from "@/components/ListOfPokemon/Index";
import Actions from "@/components/Actions/Index";
import ListEmpty from "@/components/ListEmpty/Index";
import DetailPokemon from "@/components/DetailPokemon/Index";
import Loading from "@/components/Loading/Index";

export default {
  name: "Favorites",
  components: {
    ListOfPokemon,
    Actions,
    ListEmpty,
    Searcher,
    DetailPokemon,
    Loading,
  },
  data() {
    return {
      items: [],
      search: "",
    };
  },
  computed: {
    ...mapState({
      loading: (state) => state.loading,
    }),
    ...mapState("pokemons", {
      all: (state) => state.all,
    }),
    ...mapGetters("pokemons", ["favorites"]),
  },
  created() {
    if (this.all.length === 0) {
      this.$store.dispatch("pokemons/getAll").finally(() => {
        setTimeout(() => {
          this.$store.dispatch("setStatusLoading", false);
        }, 2000);
      });
    }
  },
};
</script>
<style lang="scss" scoped>
.Dashboard {
  min-height: 100vh;
  overflow: hidden;
  padding: 35px 0 100px 0;
}
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
