<template>
  <div>
    <PokemonCard v-bind:pokemonArray="activeGenArray" id="flex-container" />
  </div>
</template>

<script>
import PokemonCard from '@/components/PokemonCard.vue'
export default {
  components: {
    PokemonCard
  },
  computed: {
    activeGen() {
      return this.$route.path.slice(-4)
    },
    activeGenArray() {
      if (this.$store.state.pokemonArray.length < 898) {
        return this.$store.getters[this.activeGen + 'Array']
      }
      return []
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
</style>
