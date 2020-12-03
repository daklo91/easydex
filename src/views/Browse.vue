<template>
  <div>
    <div id="gen-buttons">
      <button @click="consoleLog(timeout)">log timeout</button>
      <!-- <button @click="setActiveGen('gen1')">Gen 1</button>
      <button @click="setActiveGen('gen2')">Gen 2</button>
      <button @click="setActiveGen('gen3')">Gen 3</button> -->
      <router-link to="/browse/gen1">Gen I</router-link>
      <router-link to="/browse/gen2">Gen II</router-link>
      <router-link to="/browse/gen3">Gen III</router-link>
      <p>{{ activeGen }}</p>
      <p>{{ placeholder.length }}</p>
    </div>
    <div id="spacer"></div>
    <router-view></router-view>
    <PokemonCard
      v-bind:pokemonArray="placeholder"
      v-bind:pokemonGen="activeGen"
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
    placeholder() {
      return this.$store.getters[this.activeGen + '/getPlaceholderArray']
    }
  },
  methods: {
    setActiveGen(gen) {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
      this.activeGen = gen
    },
    consoleLog(input) {
      console.log(input)
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
