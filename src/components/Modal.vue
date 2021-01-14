<template>
  <div class="modal-frame" v-if="pokemonID">
    <button @click.prevent="exitModal">X</button>
    <p>#{{ pokemonID }} {{ pokemon.name }}</p>
    <img :src="pokemon.sprite" :alt="'Image of ' + pokemon.name" />
    <p v-if="pokemon.lore">{{ pokemon.lore }}</p>
    <p>hp: {{ pokemon.stats.hp }}</p>
    <p>attack: {{ pokemon.stats.attack }}</p>
    <p>defense: {{ pokemon.stats.defense }}</p>
    <p>special attack: {{ pokemon.stats.specialAttack }}</p>
    <p>special defense: {{ pokemon.stats.specialDefense }}</p>
    <p>speed: {{ pokemon.stats.speed }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    pokemonID() {
      return this.$store.state.idForModal
    },
    pokemon() {
      var pokemon = ''
      if (this.pokemonID) {
        pokemon = this.$store.state.pokemonArray[this.pokemonID - 1]
      }
      return pokemon
    }
  },
  methods: {
    exitModal() {
      this.$store.state.idForModal = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-frame {
  background: beige;
  height: 100vh;
  width: 41.67vw;
  position: fixed;
  z-index: 9999;
}
</style>
