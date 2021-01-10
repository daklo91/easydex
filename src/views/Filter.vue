<template>
  <div>
    <div class="spacer"></div>
    <div class="type-buttons">
      <div
        class="type-button"
        v-for="type in types"
        :key="type"
        @click="pushType(type)"
        :style="{ backgroundColor: setButtonColor(type) + 95 }"
      >
        <p>{{ type }}</p>
      </div>
    </div>
    <div class="weight-buttons">
      <div
        class="weight-button"
        v-for="weight in weights"
        :key="weight.id"
        @click="pushWeight(weight)"
      >
        <p>{{ weight }} weight</p>
      </div>
    </div>
    <p>{{ filterTypes }}</p>
    <p>{{ filterWeights }}</p>
    <button @click.prevent="filterPokemon">Filter</button>
    <div>
      <PokemonCard :pokemonArray="filteredPokemon" class="pokemoncard" />
    </div>
  </div>
</template>

<script>
import PokemonCard from '@/components/PokemonCard.vue'
import typeColor from '@/scripts/typeColors.js'

export default {
  data() {
    return {
      types: [
        'normal',
        'fire',
        'water',
        'grass',
        'flying',
        'fighting',
        'poison',
        'electric',
        'ground',
        'rock',
        'psychic',
        'ice',
        'bug',
        'ghost',
        'steel',
        'dragon',
        'dark',
        'fairy'
      ],
      filterTypes: [],
      weights: ['light', 'medium', 'heavy'],
      filterWeights: [],
      filteredPokemon: []
    }
  },
  methods: {
    pushType(type) {
      var index = this.filterTypes.indexOf(type)
      if (index === -1) {
        this.filterTypes.push(type)
      } else if (index > -1) {
        this.filterTypes.splice(index, 1)
      }
    },
    pushWeight(weight) {
      var index = this.filterWeights.indexOf(weight)
      if (index === -1) {
        this.filterWeights.push(weight)
      } else if (index > -1) {
        this.filterWeights.splice(index, 1)
      }
    },
    filterPokemon() {
      this.filteredPokemon = []
      var pokemons = this.$store.state.originalPokemonArray

      //Filter by Type
      if (this.filterTypes.length > 0) {
        this.filteredPokemon = pokemons.filter(pokemon =>
          pokemon.types.some(type => this.filterTypes.includes(type.type.name))
        )
      } else {
        this.filteredPokemon = pokemons
      }

      //Filter by Weight
      var lightPokemons = []
      var mediumPokemons = []
      var heavyPokemons = []

      if (this.filterWeights.includes('light')) {
        lightPokemons = this.filteredPokemon.filter(
          pokemon => pokemon.weight <= 199
        )
      }
      if (this.filterWeights.includes('medium')) {
        mediumPokemons = this.filteredPokemon.filter(
          pokemon => pokemon.weight >= 200 && pokemon.weight <= 799
        )
      }
      if (this.filterWeights.includes('heavy')) {
        heavyPokemons = this.filteredPokemon.filter(
          pokemon => pokemon.weight >= 800
        )
      }
      if (this.filterWeights.length > 0) {
        var concatWeight = lightPokemons.concat(mediumPokemons, heavyPokemons)
        this.filteredPokemon = concatWeight
      }
    },
    setButtonColor(type) {
      return typeColor(type)
    }
  },
  mounted() {
    this.$store.dispatch('fetchOriginalPokemon')
  },
  components: {
    PokemonCard
  }
}
</script>

<style lang="scss" scoped>
.spacer {
  padding: 50px;
}

.type-buttons {
  display: flex;
  width: 500px;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  .type-button {
    background-color: lightgray;
    width: 180px;
    height: 30px;
    border-radius: 8px;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      margin: 0;
      text-transform: capitalize;
    }
  }
  .type-button:hover {
    cursor: pointer;
  }
}

.pokemoncard {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
