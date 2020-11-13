<template>
  <div>
    <div v-for="pokemon in pokemonArray" :key="pokemon.id">
      <div id="card" :style="{ backgroundColor: checkType(pokemon.types[0]) }">
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
</template>

<script>
import typeColor from '@/scripts/typeColors.js'

export default {
  props: {
    pokemonArray: {
      type: Array,
      default: function() {
        return 'No array recieved'
      }
    }
  },
  methods: {
    checkType(type) {
      return typeColor(type)
    }
  }
}
</script>

<style lang="scss" scoped>
#card {
  border: solid $main-color 3px;
  border-radius: 8px;
  width: 200px;
  margin: 10px;
  text-transform: capitalize;

  #id-number {
    text-align: left;
    margin-left: 10px;

    #id-hashtag {
      font: 150% $sub-title-font;
    }
  }
}
</style>
