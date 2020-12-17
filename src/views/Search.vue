<template>
  <div class="flex-container">
    <div class="spacer"></div>
    <div class="box">
      <div class="text">
        <ul v-for="(name, index) in fuseArray" :key="name.id">
          <li v-if="index <= 4">{{ name.item.name }}</li>
        </ul>
      </div>
      <img
        v-if="!confirmedInputSearch"
        src="../assets/PikachuByDoopliss.jpg"
        :class="{ opacity: inputSearch }"
      />
    </div>
    <PokemonCard :pokemonArray="pokemonSearchArray" v-if="!inputSearch" />
    <p>Index or Name</p>
    <div id="input-container">
      <div class="svg-buttons" @click.prevent="clearInput"><ClearIcon /></div>
      <input @keyup.enter="searchByID" type="text" v-model="inputSearch" />
      <div class="svg-buttons"><SearchIcon @click.prevent="searchByID" /></div>
      <p v-if="errorMessage">No such Pokemon exist</p>
    </div>
    <p v-if="fuseArray.length > 0">Similar Pokemon:</p>
  </div>
</template>

<script>
import PokemonCard from '@/components/PokemonCard.vue'
import ClearIcon from '@/assets/ClearIcon.vue'
import SearchIcon from '@/assets/SearchIcon.vue'
import Fuse from 'fuse.js'

export default {
  components: {
    PokemonCard,
    ClearIcon,
    SearchIcon
  },
  computed: {
    pokemonSearchArray() {
      if (this.confirmedInputSearch) {
        return [this.$store.state.pokemonArray[this.confirmedInputSearch - 1]]
      } else return []
    },
    fuseArray() {
      const options = {
        keys: ['name'],
        minMatchCharLength: 3,
        threshold: 0.3
      }
      const fuse = new Fuse(this.$store.state.pokemonArray, options)
      const result = fuse.search(this.inputSearch)
      return result
    }
  },
  data() {
    return {
      inputSearch: '',
      confirmedInputSearch: '',
      pokemonByID: [],
      errorMessage: false
    }
  },
  methods: {
    searchByID() {
      var input = this.inputSearch.toLowerCase()
      if (isNaN(input) === false) {
        this.confirmedInputSearch = input
        this.inputSearch = null
      } else if (typeof input === 'string') {
        for (var i = 0; i < this.$store.state.pokemonArray.length; i++) {
          if (this.$store.state.pokemonArray[i].name == input) {
            this.confirmedInputSearch = i + 1
            this.inputSearch = ''
            break
          } else if (this.$store.state.pokemonArray[i].name != input) {
            this.errorMessage = true
          }
        }
      } else {
        this.errormessage = true
      }
    },
    clearInput() {
      this.inputSearch = ''
    }
  }
}
</script>

<style scoped>
.svg-buttons:hover {
  cursor: pointer;
}

#input-container {
  display: flex;
}

.flex-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.spacer {
  padding: 50px;
}

img {
  width: 450px;
  z-index: 1;
}

.text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}

.opacity {
  opacity: 0.5;
}

input {
  margin: 0px;
  width: 200px;
  height: 30px;
  border-radius: 8px;
}
</style>
