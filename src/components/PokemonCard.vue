<template>
  <div>
    <div v-for="pokemon in pokemonArray" :key="pokemon.id">
      <div
        id="card"
        :style="{
          backgroundColor: setTypeColor(pokemon.types[0]) + 95,
          borderColor: setTypeColor(
            pokemon.types[1] ? pokemon.types[1] : pokemon.types[0]
          )
        }"
      >
        <div id="header">
          <p id="id-number"><span id="id-hashtag">#</span>{{ pokemon.id }}</p>
          <div id="type-icons">
            <div
              id="type-icon"
              v-for="(types, index) in pokemon.types"
              :key="index"
            >
              <TypeIcon :size="15" :type="pokemon.types[index]" />
            </div>
          </div>
        </div>
        <img
          id="image"
          :src="pokemon.sprites.front_default"
          :alt="'Image of ' + pokemon.name"
          :title="'Image of ' + pokemon.name"
        />
        <p>{{ pokemon.species.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import typeColor from '@/scripts/typeColors.js'
import TypeIcon from '@/components/TypeIcon.vue'

//pokemon.sprites.other['official-artwork'].front_default <--- Use this in the image src for the official artwork. There is one for svg's too.
export default {
  components: {
    TypeIcon
  },
  props: {
    pokemonArray: {
      type: Array,
      default: function() {
        return 'No array recieved'
      }
    }
  },
  methods: {
    setTypeColor(type) {
      return typeColor(type)
    }
  }
}
</script>

<style lang="scss" scoped>
#card {
  border: solid $main-color 2px;
  border-radius: 8px;
  width: 200px;
  height: 220px;
  margin: 10px;
  padding: 5px;
  text-transform: capitalize;
  box-sizing: border-box;
  transition: all 0.06s;

  &:hover {
    cursor: pointer;
    border: solid $main-color 5px;
    padding: 2px;
    color: darken($main-color, 10);
  }

  #image {
    max-width: 110px;
  }

  #header {
    display: flex;
    justify-content: space-between;

    #type-icons {
      margin-top: 15px;
      margin-right: 4px;
      display: flex;

      #type-icon {
        margin-left: 4px;
      }
    }

    #id-number {
      margin-left: 10px;

      #id-hashtag {
        font: 150% $sub-title-font;
      }
    }
  }
}
</style>
