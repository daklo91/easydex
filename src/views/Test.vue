<template>
  <div id="flex-container">
    <div v-for="objectArray in objectArrays" :key="objectArray.id">
      <div id="placeholder-div">
        <p style="color: white">{{ objectArray.id }}</p>
        <p style="color: white">{{ objectArray.name }}</p>
        <p style="color: white">{{ objectArray.lastname }}</p>
      </div>
    </div>
    <button @click="updateObject2">Update Object 2</button>
    <button @click="consoleLog">log</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      objectArrays: [
        {
          text: 'Object 1 Text',
          id: 1
        },
        {
          text: 'Object 2 Text',
          id: 2
        },
        {
          text: 'Object 3 Text',
          id: 3
        }
      ]
    }
  },
  methods: {
    consoleLog() {
      console.log(this.objectArrays[0].id)
    },
    updateObject2() {
      if (
        this.$store.state.gen1.pokemonArray[0].id == this.objectArrays[0].id
      ) {
        this.objectArrays[0].name = this.$store.state.gen1.pokemonArray[0].name
        this.objectArrays[0].id =
          '#' + this.$store.state.gen1.pokemonArray[0].id
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#flex-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  #placeholder-div {
    width: 250px;
    height: 300px;
    background-color: #343434;
    margin: 10px;
    margin-top: 350px;
  }
}
</style>
