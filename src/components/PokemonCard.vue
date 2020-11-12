<template>
  <div>
    <div v-for="pokemon in pokemonArray" :key="pokemon.id">
      <div
        id="card"
        :style="{
          background:
            'radial-gradient(circle,' +
            colorByTypeRecieved(pokemon.types[0]) +
            ' 0%,rgba(255, 255, 255, 1) 100%)',
          borderColor: colorByTypeRecieved(pokemon.types[1])
        }"
      >
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
    colorByTypeRecieved(type) {
      if (type == undefined) {
        return undefined
      }
      var typeColor = ''
      if (type.type.name == 'grass') {
        typeColor = 'green'
      } else if (type.type.name == 'fire') {
        typeColor = 'orange'
      } else if (type.type.name == 'water') {
        typeColor = 'lightseagreen'
      } else if (type.type.name == 'poison') {
        typeColor = 'purple'
      }
      return typeColor
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
