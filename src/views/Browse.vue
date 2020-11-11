<template>
  <div>
    <button @click="$store.dispatch('fetchPokemonObject')">
      Fetch
    </button>
    <p>{{ pokemons.length }}</p>
    <div v-if="pokemons">
      <div v-for="pokemon in pokemons" :key="pokemon.id">
        <div id="temp-frame">
          <p>{{ pokemon.id + '# ' }}</p>
          <img
            :src="pokemon.sprites.front_default"
            :alt="'Image of ' + pokemon.name"
            :title="'Image of ' + pokemon.name"
          />
          <p>{{ pokemon.name }}</p>
        </div>
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

<style lang="scss" scoped>
#temp-frame {
  border: solid $main-color 3px;
  border-radius: 8px;
  width: 250px;
}
</style>
