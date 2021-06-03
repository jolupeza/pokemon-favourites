<template>
  <div class="Home">
    <div class="container">
      <section class="Welcome">
        <figure class="Welcome__figure">
          <img src="../assets/images/pikachu.svg" alt="Pikachu" />
        </figure>
        <h1 class="Welcome__title">Welcome to Pokedéx</h1>
        <article class="Welcome__body">
          <p>
            The digital encyclopedia created by Professor Oak is an invaluable
            tool to Trainers in the Pokémon world.
          </p>
        </article>
        <div class="Welcome__button">
          <router-link :to="{ name: 'All' }" class="Button Button--primary"
            >Get started</router-link
          >
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
.Welcome {
  align-content: center;
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  overflow: hidden;
  &__figure {
    margin: 0 0 3rem 0;
    position: relative;
    text-align: center;
    width: 100%;
    &::after {
      background: {
        color: transparent;
        image: url("./../assets/images/circle.svg");
        position: center bottom;
        repeat: no-repeat;
      }
      bottom: -3px;
      content: "";
      height: 100%;
      left: 0;
      position: absolute;
      width: 100%;
      z-index: 0;
    }
    img {
      height: auto;
      left: 14px;
      max-width: 100%;
      position: relative;
      z-index: 1;
    }
  }
  &__title {
    font-size: 1.625rem;
    font-weight: 700;
    margin-bottom: 30px;
    text-align: center;
    width: 100%;
  }
  &__body {
    margin-bottom: 50px;
    text-align: center;
    width: 100%;
  }
  &__button {
    text-align: center;
    width: 100%;
  }
}
</style>
