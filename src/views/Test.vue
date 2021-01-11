<template>
  <div><button @click.prevent="consoleLog">Console Log</button></div>
</template>

<script>
export default {
  methods: {
    consoleLog() {
      console.log(this.$store.state.originalPokemonArray)
    }
  }
}
</script>

<style lang="scss" scoped></style>
