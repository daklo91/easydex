<template>
  <div class="flex-container">
    <div class="spacer"></div>
    <div class="box">
      <div class="text">
        <ul v-for="(name, index) in fuseArray" :key="name.id" ref="refWord">
          <li
            :class="{ 'active-item': currentItem === index + 1 }"
            @click="searchByID(name.item.name)"
          >
            {{ name.item.name }}
          </li>
        </ul>
      </div>
      <img
        v-if="!confirmedInputSearch"
        src="../assets/PikachuByDoopliss.jpg"
        :class="{ opacity: inputSearch }"
      />
    </div>
    <PokemonCard :pokemonArray="pokemonSearchArray" v-if="!inputSearch" />
    <p :class="{ opacity: inputSearch }">Index or Name</p>
    <div id="input-container">
      <div class="svg-buttons" @click.prevent="clearInput"><ClearIcon /></div>
      <input
        ref="refInput"
        @keyup.enter="searchByID"
        type="text"
        v-model="inputSearch"
      />
      <div class="svg-buttons"><SearchIcon @click.prevent="searchByID" /></div>
      <p v-if="errorMessage">No such Pokemon exist</p>
    </div>
    <p v-if="fuseArray.length > 0">Similar Pokemon:</p>
    <p>{{ activeItemtext }}</p>
    <p>{{ currentItem }}</p>
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
      return result.slice(0, 5).reverse()
    }
  },
  data() {
    return {
      inputSearch: '',
      confirmedInputSearch: '',
      pokemonByID: [],
      errorMessage: false,
      currentItem: 0,
      activeItemtext: ''
    }
  },
  mounted() {
    document.addEventListener('keydown', this.nextItem)
  },
  destroyed() {
    document.removeEventListener('keydown', this.nextItem)
  },
  methods: {
    searchByID(clickEvent) {
      var input = this.inputSearch.toLowerCase()
      if (clickEvent) {
        input = clickEvent
      }
      if (this.currentItem > 0) {
        input = this.activeItemtext.toLowerCase()
      }

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
    },
    nextItem() {
      if (event.keyCode == 38 && this.currentItem == 0) {
        this.currentItem = this.fuseArray.length
      } else if (event.keyCode == 38 && this.currentItem > 0) {
        this.currentItem--
        event.preventDefault()
      } else if (
        event.keyCode == 40 &&
        this.currentItem == this.fuseArray.length
      ) {
        this.currentItem = 0
      } else if (
        event.keyCode == 40 &&
        this.currentItem < this.fuseArray.length
      ) {
        this.currentItem++
      }
      this.activeItemtext = this.$refs.refWord[this.currentItem - 1].innerText
    },
    setCurrentItem() {
      this.currentItem = this.fuseArray
    }
  }
}
</script>

<style lang="scss" scoped>
.active-item {
  color: $pokemon-yellow-color;
  background-color: $pokemon-blue-color;
  padding: 5px;
  border-radius: 8px;
}

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

ul {
  padding: 0;
  text-transform: capitalize;
}

li {
  list-style-type: none;
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
  opacity: 0.2;
}

input {
  margin: 0px;
  width: 200px;
  height: 30px;
  border-radius: 8px;
}
</style>
