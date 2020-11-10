<template>
  <div>
    <button @click="$store.dispatch('fetchPokemonObject')">
      Fetch
    </button>
    <!-- <p>{{ initialFetch.length }}</p> -->
    <div v-if="pokemons">
      <div v-for="pokemon in pokemons" :key="pokemon.id">
        <p>{{ pokemon.id + '# ' + pokemon.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    pokemons() {
      return this.$store.getters.getSortedPokemonArray
    }
  }
}
</script>

<style lang="scss" scoped></style>
