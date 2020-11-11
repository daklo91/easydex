<template>
  <div>
    <button @click="$store.dispatch('fetchPokemonObject')">
      Fetch
    </button>
    <p>{{ pokemons.length }}</p>
    <div v-if="pokemons" id="flex-container">
      <div v-for="pokemon in pokemons" :key="pokemon.id">
        <div id="card">
          <p id="id-number"><span id="id-hashtag">#</span>{{ pokemon.id }}</p>
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
#flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  #card {
    border: solid $main-color 3px;
    border-radius: 8px;
    width: 200px;
    margin: 10px;
    text-transform: capitalize;
    background: radial-gradient(
      circle,
      rgb(206, 206, 206) 0%,
      rgba(255, 255, 255, 1) 100%
    );

    #id-number {
      text-align: left;
      margin-left: 10px;

      #id-hashtag {
        font: 150% $sub-title-font;
      }
    }
  }
}
</style>
