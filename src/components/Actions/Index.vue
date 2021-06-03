<template>
  <section class="Actions">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="Actions__wrapper">
            <router-link :to="{ name: 'All' }" class="Button Button--variant"
              ><img src="../../assets/images/list.svg" alt="All" />
              All</router-link
            >
            <router-link
              :to="{ name: 'Favorites' }"
              class="Button Button--variant"
              ><img src="../../assets/images/favourite.svg" alt="Favorites" />
              Favorites</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Actions",
};
</script>
<style lang="scss" scoped>
.Actions {
  background-color: #ffffff;
  bottom: 0;
  box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05);
  padding: 18px 0;
  position: fixed;
  width: 100%;
  &__wrapper {
    display: flex;
    justify-content: space-between;
    @media screen and (min-width: 992px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 25px;
    }
  }
  .Button {
    align-items: center;
    display: flex;
    justify-content: center;
    width: 150px;
    &.router-link-exact-active {
      background-color: #f22539;
    }
    img {
      margin-right: 10px;
    }
    @media screen and (min-width: 992px) {
      width: 100%;
    }
  }
}
</style>
