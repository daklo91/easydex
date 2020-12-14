<template>
  <div>
    <div v-for="pokemon in pokemonArray" :key="pokemon.name">
      <transition name="flip">
        <div :key="10001" v-if="Object.keys(pokemon).length > 2">
          <div
            id="card"
            class="come-in"
            :style="{
              backgroundColor: setTypeColor(pokemon.types[0]) + 95,
              borderColor: setTypeColor(
                pokemon.types[1] ? pokemon.types[1] : pokemon.types[0]
              )
            }"
          >
            <div id="header">
              <p id="id-number">
                <span id="id-hashtag">#</span>{{ pokemon.id }}
              </p>
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
        <div
          :key="10002"
          v-else
          id="empty-card"
          v-observe-visibility="{
            callback: (isVisible, entry) => {
              pokemonInView(isVisible, pokemon)
            },
            once: true,
            throttle: 700
          }"
        >
          <!-- //* This needs to be reworked.
             <p> 
            <span id="id-hashtag">#</span>{{ pokemon.id }}{{ pokemon.name }}
          </p> -->
          <h3 class="easydex-title top">Easydex</h3>
          <EasydexLogo :width="60" :height="70" />
          <h3 class="easydex-title rotate">Easydex</h3>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import typeColor from '@/scripts/typeColors.js'
import TypeIcon from '@/components/TypeIcon.vue'
import EasydexLogo from '@/assets/EasydexLogo.vue'

export default {
  components: {
    TypeIcon,
    EasydexLogo
  },
  props: {
    pokemonArray: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  methods: {
    setTypeColor(type) {
      return typeColor(type)
    },
    pokemonInView(isVisible, pokemon) {
      if (isVisible) {
        this.$store.dispatch('updatePokemonArrayByID', pokemon.name)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.flip-enter-active {
  transition: all 0.7s ease;
}

.flip-leave-active {
  display: none;
}

.flip-enter,
.flip-leave-to {
  transform: rotateY(180deg);
  opacity: 0;
}

.easydex-title {
  font: 300% $title-font;
  color: $pokemon-yellow-color;
  -webkit-text-stroke-width: 1.7px;
  -webkit-text-stroke-color: $pokemon-blue-color;
  margin: 0px;
}

.rotate {
  transform: rotate(-180deg);
}

.top {
  margin-top: 20px;
}

#empty-card {
  border: solid rgb(117, 161, 255) 4px;
  background: rgb(179, 199, 255);
  border-radius: 8px;
  width: 200px;
  height: 220px;
  margin: 10px;
  padding: 5px;
  box-sizing: border-box;
  p {
    text-align: left;
    margin-left: 10px;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.719);
    border-radius: 10px;
  }
  #id-hashtag {
    font: 150% $sub-title-font;
  }
}

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
    width: 96px;
    height: 96px;
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
