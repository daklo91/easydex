<template>
  <div
    class="loading-screen-frame"
    v-if="this.$store.state.pokemonArray.length > 898"
  >
    <p>Gotta fetch em all!</p>

    <div class="loading-bar-frame">
      <div
        class="loading-bar"
        :style="{ width: this.$store.state.loadingNumber + '%' }"
      ></div>
    </div>
    <p>Loading {{ this.$store.state.pokemonArray.length }} / 898 Pokemon</p>
  </div>
</template>

<script>
export default {
  computed: {
    testConsole() {
      var loadingNumber = this.$store.state.pokemonArray.length / 100
      console.log(loadingNumber)
      return loadingNumber
    }
  },
  methods: {
    updateProgress() {
      var width = (898 / 100) * 100
      console.log(width)
    }
  }
}
</script>

<style lang="scss" scoped>
.loading-screen-frame {
  left: 0;
  top: 0;
  background: honeydew;
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 200;
  .loading-bar-frame {
    border: black 1px solid;
    height: 10px;
    .loading-bar {
      background: blanchedalmond;
      height: 100%;
    }
  }
}
//898/100=8,98=1%
</style>
