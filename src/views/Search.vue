<template>
  <div class="flex-container">
    <div class="spacer"></div>
    <div
      class="search-display"
      :id="confirmedInputSearch ? 'transparent-background' : false"
    >
      <div
        class="opaque-div"
        :id="inputSearch ? false : 'transparent-background'"
      >
        <PokemonCard
          class="pokemoncard"
          :pokemonArray="pokemonSearchArray"
          v-if="!inputSearch"
        />
        <div class="suggestions">
          <ul v-for="(name, index) in fuseArray" :key="name.id" ref="refWord">
            <li
              class="item"
              :class="{ 'active-item': currentItem === index + 1 }"
              @click="searchByClick(name.item.name)"
            >
              {{ name.item.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="input-container">
      <p :class="{ opacity: inputSearch }">
        Index or Name
      </p>
      <div class="inner-input-container">
        <div class="svg-buttons" @click.prevent="clearInput"><ClearIcon /></div>
        <input
          ref="refInput"
          @keyup.enter="searchByInput"
          type="text"
          v-model.number="inputSearch"
          @input="$event.target.composing = false"
          @focus="focus = true"
          @blur="focus = false"
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
      activeItemtext: '',
      focus: false
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
        this.currentItem = 0
      }
    },
    searchByInput() {
      var input = this.inputSearch
      if (typeof input === 'number') {
        this.confirmedInputSearch = input
        event.target.blur()
      } else if (typeof input === 'string' && this.currentItem === 0) {
        input = input.toLowerCase()
        for (var i = 0; i < this.$store.state.pokemonArray.length; i++) {
          if (this.$store.state.pokemonArray[i].name == input) {
            this.confirmedInputSearch = i + 1
            event.target.blur()
            break
          } else this.confirmedInputSearch = ''
        }
      }
      this.inputSearch = ''
      this.currentItem = 0
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
      if (this.currentItem > 0) {
        this.activeItemtext = this.$refs.refWord[this.currentItem - 1].innerText
      }
    },
    setCurrentItem() {
      this.currentItem = this.fuseArray
    }
  }
}
</script>

<style lang="scss" scoped>
.flex-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .search-display {
    background: url('../assets/PikachuByDoopliss.jpg');
    background-size: cover;
    background-position: center;
    height: 300px;
    width: 300px;

    @media (max-width: 300px) {
      height: 250px;
      width: 250px;
    }

    .opaque-div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      background: rgba(255, 255, 255, 0.479);

      @media (max-height: 500px) and (orientation: landscape) {
        .suggestions {
          display: flex;
          flex-wrap: wrap;
        }
      }

      .item:hover {
        color: rgb(255, 190, 70);
        cursor: pointer;
      }

      .active-item {
        color: $pokemon-yellow-color;
        background-color: $pokemon-blue-color;
        padding: 5px;
        border-radius: 8px;
      }
    }
  }

  .input-container {
    display: flex;
    flex-direction: column;

    .inner-input-container {
      display: flex;

      input {
        margin: 0px;
        margin-left: 5px;
        margin-right: 5px;
        width: 200px;
        height: 30px;
        border-radius: 8px;

        @media (max-width: 280px) {
          width: 150px;
        }
      }

      .svg-buttons:hover {
        cursor: pointer;
      }
    }
  }
}

#transparent-background {
  background: transparent;

  @media (max-height: 500px) and (orientation: landscape) {
    background: rgba(255, 255, 255, 0.479);
  }
}

ul {
  padding: 0;
  text-transform: capitalize;
}

li {
  list-style-type: none;
}

.opacity {
  opacity: 0.2;
}

.spacer {
  padding: 50px;

  @media (max-height: 500px) and (orientation: landscape) {
    padding: 0;
  }
}
</style>
