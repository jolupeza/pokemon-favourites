<template>
  <article class="Empty">
    <h2 class="Empty__title">
      <slot name="title"></slot>
    </h2>
    <h3 class="Empty__message">
      <slot name="message"></slot>
    </h3>
    <div class="Empty__button">
      <router-link :to="{ name: 'Home' }" class="Button Button--primary"
        >Go back home</router-link
      >
    </div>
  </article>
</template>

<script>
export default {
  name: "Index",
};
</script>
<style scoped lang="scss">
.Empty {
  &__title {
    color: #353535;
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: 10px;
    text-align: center;
  }
  &__message {
    color: #5e5e5e;
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 25px;
    text-align: center;
  }
  &__button {
    text-align: center;
  }
}
</style>
