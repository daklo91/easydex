<template>
  <div>
    <div v-if="pokemons">
      <PokemonCard v-bind:pokemonArray="pokemons" id="flex-container" />
    </div>
  </div>
</template>

<script>
import PokemonCard from '@/components/PokemonCard.vue'

export default {
  components: {
    PokemonCard
  },
  computed: {
    pokemons() {
      return this.$store.getters.getSortedPokemonArray
    }
  },
  mounted() {
    window.onscroll = () => {
      let bottomOfWindow =
        document.documentElement.scrollTop + window.innerHeight ===
        document.documentElement.offsetHeight

      if (bottomOfWindow) {
        this.$store.dispatch('fetchPokemonObject')
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
  padding-top: 120px;
}
</style>
