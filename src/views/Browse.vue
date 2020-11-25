<template>
  <div>
    <div id="gen-buttons">
      <button @click="consoleLog(timeout)">log timeout</button>
      <button @click="setActiveGen('gen1')">Gen 1</button>
      <button @click="setActiveGen('gen2')">Gen 2</button>
      <button @click="setActiveGen('gen3')">Gen 3</button>
      <p>{{ activeGen }}</p>
    </div>
    <div id="spacer"></div>
    <PokemonCard
      v-bind:pokemonArray="pokemons.slice(0, 12)"
      id="flex-container"
    />
    <PokemonCard
      v-if="loadMore"
      v-bind:pokemonArray="
        pokemons.slice(12, this.$store.state[this.activeGen].fetchLimit)
      "
      id="flex-container"
    />
  </div>
</template>

<script>
import PokemonCard from '@/components/PokemonCard.vue'

export default {
  components: {
    PokemonCard
  },
  data() {
    return {
      activeGen: 'gen1', //this controls which generation module that gets used
      loadMore: false //after loadMore becomes true, the next slice of the array will be displayed. This prevents input lag
    }
  },
  computed: {
    pokemons() {
      return this.$store.getters[this.activeGen + '/getSortedPokemonArray']
    },
    placeholder() {
      return this.$store.state[this.activeGen].placeholderArray
    }
  },
  methods: {
    setActiveGen(gen) {
      this.loadMore = false
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
      this.activeGen = gen
      if (this.pokemons.length < 12) {
        this.$store.dispatch(this.activeGen + '/fetchPokemonObject')
      }
      if (this.pokemons.length) {
        setTimeout(() => {
          this.loadMore = true
        }, 200)
      }
    },
    consoleLog(input) {
      console.log(input)
    }
  },
  mounted() {
    window.onscroll = () => {
      let bottomOfWindow =
        document.documentElement.scrollTop + window.innerHeight ===
        document.documentElement.offsetHeight
      if (bottomOfWindow) {
        this.loadMore = true
        this.$store.dispatch(this.activeGen + '/fetchPokemonObject')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

#spacer {
  padding-top: 120px;
}

#gen-buttons {
  position: fixed;
  left: 10%;
  background-color: lightgreen;
}
</style>
