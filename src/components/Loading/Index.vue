<template>
  <transition
    name="custom-classes-transition"
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
  >
    <section class="Loading" v-if="loading">
      <img
        class="animate__animated animate__infinite animate__rotateOut"
        src="../../assets/images/loading.svg"
        alt="Loading"
      />
    </section>
  </transition>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "Index",
  computed: {
    ...mapState({
      loading: (state) => state.loading,
    }),
  },
};
</script>

<style scoped lang="scss">
.Loading {
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
}
</style>