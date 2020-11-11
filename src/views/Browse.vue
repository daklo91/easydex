<template>
  <div>
    <button @click="$store.dispatch('fetchPokemonObject')">
      Fetch
    </button>
    <p>{{ pokemons.length }}</p>
    <p>{{ pokemonArrayLoopInt }}</p>
    <div v-if="pokemons">
      <div v-for="pokemon in pokemons" :key="pokemon.id">
        <div id="temp-frame">
          <p>{{ pokemon.id + '# ' }}</p>
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
    },
    pokemonArrayLoopInt() {
      return this.$store.state.pokemonArrayLoopInt
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

<style lang="scss" scoped>
#temp-frame {
  border: solid $main-color 3px;
  border-radius: 8px;
  width: 250px;
}
</style>
