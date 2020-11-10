<template>
  <div>
    <button @click="$store.dispatch('initialFetch')">
      Fetch
    </button>
    <!-- <p>{{ initialFetch.length }}</p> -->
    <div v-if="initialFetch">
      <div v-for="pokemon in initialFetch" :key="pokemon.id">
        <p>{{ pokemon.id + '# ' + pokemon.name }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    initialFetch() {
      return this.$store.state.initialFetch
    }
  }
})
</script>

<style lang="scss" scoped></style>
