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
      return this.$store.getters[this.activeGen + 'Array']
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
