<template>
  <div class="flex-container">
    <div class="spacer"></div>
    <img
      v-if="!confirmedInputSearch"
      class="img"
      src="../assets/PikachuByDoopliss.jpg"
      alt="Pikachu"
    />
    <PokemonCard :pokemonArray="pokemonSearchArray" v-if="!inputSearch" />
    <p>Index or Name</p>
    <div>
      <button
        style="background-color: red"
        @click.prevent="clearInput"
        class="button"
      >
        Clear
      </button>
      <input
        @keyup.enter="searchByID"
        class="input"
        type="text"
        v-model="inputSearch"
      />
      <button
        style="background-color: limegreen"
        @click.prevent="searchByID"
        class="button"
      >
        Search
      </button>
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
    pokemonSearchArray() {
      if (this.confirmedInputSearch) {
        return [this.$store.state.pokemonArray[this.confirmedInputSearch - 1]]
      } else return []
    }
  },
  data() {
    return {
      inputSearch: null,
      confirmedInputSearch: null,
      pokemonByID: []
    }
  },
  methods: {
    searchByID() {
      if (isNaN(this.inputSearch) === false) {
        this.confirmedInputSearch = this.inputSearch
        this.inputSearch = null
      } else
        for (var i = 0; i < this.$store.state.pokemonArray.length; i++) {
          if (this.$store.state.pokemonArray[i].name == this.inputSearch) {
            this.confirmedInputSearch = i + 1
            this.inputSearch = null
            break
          }
        }
    },
    clearInput() {
      this.inputSearch = null
    }
  }
}
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.spacer {
  padding: 50px;
}

.img {
  width: 450px;
}

.input {
  margin-top: 20px;
  width: 200px;
  height: 30px;
  border-radius: 8px;
}
</style>
