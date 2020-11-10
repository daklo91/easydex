<template>
  <div>
    <button @click="$store.dispatch('fetchPokemonObject')">
      Fetch
    </button>
    <p>{{ pokemons.length }}</p>
    <div v-if="pokemons">
      <div v-for="pokemon in pokemons" :key="pokemon.id">
        <p>{{ pokemon.id + '# ' + pokemon.name }}</p>
        <img
          id="main-image"
          :src="
            'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/' +
              getPokemonId(pokemon.id) +
              '.png'
          "
          :alt="'Image of ' + pokemon.name"
          :title="'Image of ' + pokemon.name"
          @error="getSprite(pokemon.id)"
        />
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
  },
  methods: {
    getSprite(id) {
      event.target.src = this.pokemons[id - 1].sprites.front_default
    },
    getPokemonId(id) {
      var idAsString = id.toString()
      if (idAsString.length == 1) {
        return '00' + idAsString
      } else if (idAsString.length == 2) {
        return '0' + idAsString
      } else return idAsString
    }
  }
}
</script>

<style lang="scss" scoped></style>
