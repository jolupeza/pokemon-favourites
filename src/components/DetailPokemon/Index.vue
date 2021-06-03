<template>
  <transition
    name="custom-classes-transition"
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
  >
    <section class="Modal" v-if="show">
      <article class="Modal__wrapper" v-if="infoPokemon">
        <figure class="Modal__wrapper__figure">
          <button class="Modal__wrapper__close" @click="closeModal">
            <img src="../../assets/images/close.svg" alt="Close" />
          </button>
          <img
            :alt="infoPokemon.name"
            :src="infoPokemon.sprites.other.dream_world.front_default"
          />
        </figure>
        <div class="Modal__wrapper__info">
          <ul class="Modal__wrapper__list">
            <li><strong>Name:</strong> {{ infoPokemon.name | capitalize }}</li>
            <li><strong>Weight:</strong> {{ infoPokemon.weight }}</li>
            <li><strong>Height:</strong> {{ infoPokemon.height }}</li>
            <li><strong>Types:</strong> {{ getTypes }}</li>
          </ul>
        </div>
        <footer class="Modal__footer">
          <button class="Button Button--primary">Share to my friends</button>
          <button class="Modal__footer__star" @click="handleFavorite">
            <template v-if="pokemon.favorite">
              <img src="../../assets/images/star-active.svg" alt="Star" />
            </template>
            <template v-else>
              <img src="../../assets/images/star.svg" alt="Star" />
            </template>
          </button>
        </footer>
      </article>
    </section>
  </transition>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "DetailPokemon",
  computed: {
    ...mapState("pokemons", {
      all: (state) => state.all,
      show: (state) => state.showDetail,
      infoPokemon: (state) => state.infoPokemon,
    }),
    getTypes() {
      return this.infoPokemon.types
        .map(
          (type) =>
            type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)
        )
        .join(", ");
    },
    pokemon() {
      return Object.entries(this.infoPokemon).length
        ? this.all.find((item) => item.name === this.infoPokemon.name)
        : null;
    },
  },
  filters: {
    capitalize(name) {
      return name.charAt(0).toUpperCase() + name.slice(1);
    },
  },
  methods: {
    closeModal() {
      this.$store.dispatch("pokemons/setCloseShowDetail");
    },
    handleFavorite() {
      this.$store.dispatch("pokemons/changeStatusFavorite", this.pokemon.name);
    },
  },
};
</script>

<style scoped lang="scss">
.Modal {
  align-items: center;
  background-color: rgba(black, 0.6);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  &__wrapper {
    background-color: white;
    border-radius: 5px;
    width: 90%;
    @media screen and (min-width: 992px) {
      width: 570px;
    }
    &__figure {
      background: {
        color: transparent;
        image: url("../../assets/images/bg.png");
        position: center center;
        repeat: no-repeat;
        size: cover;
      }
      margin-bottom: 0;
      padding: 15px;
      position: relative;
      text-align: center;
    }
    &__close {
      background-color: transparent;
      border: none;
      position: absolute;
      right: 15px;
      top: 15px;
    }
    &__info {
      padding: 25px 30px;
    }
    &__list {
      margin-bottom: 0;
      padding-left: 0;
      li {
        border-bottom: 1px solid rgba(#e8e8e8, 1);
        color: #5e5e5e;
        font-size: 18px;
        font-weight: 500;
        list-style: none;
        padding: 10px;
        strong {
          font-weight: 700;
        }
      }
    }
  }
  &__footer {
    display: flex;
    justify-content: space-between;
    padding: 5px 30px 15px;
    &__star {
      background-color: #f5f5f5;
      border: none;
      border-radius: 50%;
      padding: 9px;
    }
  }
}
</style>
