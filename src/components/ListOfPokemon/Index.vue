<template>
  <ul class="List">
    <item-pokemon
      v-for="pokemon in items"
      :key="pokemon.name"
      :pokemon="pokemon"
    />
  </ul>
</template>
<script>
import ItemPokemon from "@/components/ItemPokemon/Index";

export default {
  name: "ListOfPokemon",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  components: {
    ItemPokemon,
  },
};
</script>
<style lang="scss" scoped>
.List {
  margin-bottom: 0;
  padding-left: 0;
}
</style>
