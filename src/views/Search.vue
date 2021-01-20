<template>
  <div class="flex-container">
    <div class="spacer"></div>
    <div class="box">
      <div class="text">
        <ul v-for="(name, index) in fuseArray" :key="name.id" ref="refWord">
          <li
            :class="{ 'active-item': currentItem === index + 1 }"
            @click="searchByClick(name.item.name)"
          >
            {{ name.item.name }}
          </li>
        </ul>
      </div>
      <img
        src="../assets/PikachuByDoopliss.jpg"
        :class="{ opacity: inputSearch }"
        v-if="!confirmedInputSearch"
      />
    </div>
    <PokemonCard
      class="pokemoncard"
      :pokemonArray="pokemonSearchArray"
      v-if="!inputSearch"
    />
    <div class="input-container-outer">
      <p :class="{ opacity: inputSearch }">
        Index or Name
      </p>
      <div id="input-container">
        <div class="svg-buttons" @click.prevent="clearInput"><ClearIcon /></div>
        <input
          ref="refInput"
          @keyup.enter="searchByInput"
          type="text"
          :value="inputSearch"
          @input="e => (inputSearch = e.target.value)"
        />
        <div class="svg-buttons" @click.prevent="searchByButton">
          <SearchIcon />
        </div>
      </div>
    </div>
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
      currentItem: 0,
      activeItemtext: ''
    }
  },
  mounted() {
    document.addEventListener('keydown', this.nextItem)
    document.addEventListener('keydown', this.searchBySelect)
  },
  destroyed() {
    document.removeEventListener('keydown', this.nextItem)
  },
  methods: {
    searchBySelect() {
      if (this.currentItem > 0 && event.keyCode == 13) {
        for (var i = 0; i < this.$store.state.pokemonArray.length; i++) {
          if (
            this.$store.state.pokemonArray[i].name ==
            this.activeItemtext.toLowerCase()
          ) {
            this.confirmedInputSearch = i + 1
            break
          }
        }
      }
    },
    searchByClick(clickEvent) {
      for (var i = 0; i < this.$store.state.pokemonArray.length; i++) {
        if (
          this.$store.state.pokemonArray[i].name == clickEvent.toLowerCase()
        ) {
          this.confirmedInputSearch = i + 1
          break
        }
        this.inputSearch = ''
      }
    },
    searchByInput() {
      var input = this.inputSearch
      if (typeof input === 'number' && this.currentItem === 0) {
        this.confirmedInputSearch = input
      } else if (typeof input === 'string' && this.currentItem === 0) {
        input = input.toLowerCase()
        for (var i = 0; i < this.$store.state.pokemonArray.length; i++) {
          if (this.$store.state.pokemonArray[i].name == input) {
            this.confirmedInputSearch = i + 1
            break
          }
        }
      }
      this.inputSearch = ''
    },
    searchByButton() {
      var input = this.inputSearch
      if (typeof input === 'number') {
        this.confirmedInputSearch = input
      } else if (typeof input === 'string') {
        input = input.toLowerCase()
        for (var i = 0; i < this.$store.state.pokemonArray.length; i++) {
          if (this.$store.state.pokemonArray[i].name == input) {
            this.confirmedInputSearch = i + 1
            break
          }
        }
      }
      this.inputSearch = ''
    },
    clearInput() {
      this.inputSearch = ''
      this.confirmedInputSearch = ''
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
.input-container-outer {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 60%;
}

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

  @media (max-width: 520px) {
    width: 400px;
  }

  @media (max-width: 500px) {
    width: 350px;
  }
  @media (max-width: 320px) {
    width: 250px;
  }
  @media (max-width: 270px) {
    width: 200px;
  }
}

.text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}
.pokemoncard {
  position: absolute;
  top: 14%;
  z-index: 11;
}

.opacity {
  opacity: 0.2;
}

input {
  margin: 0px;
  margin-left: 5px;
  margin-right: 5px;
  width: 200px;
  height: 30px;
  border-radius: 8px;
}
</style>
