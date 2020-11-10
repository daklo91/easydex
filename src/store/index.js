import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    pokemonArray: [],
    pokemonArrayCounter: 1 //This is a hack used in the for loop in fetchPokemonObject to fetch 15 pokemon at a time.
  },
  mutations: {
    ADD_POKEMON(state, payload) {
      state.pokemonArray.push(payload)
    },
    ADD_COUNT(state) {
      state.pokemonArrayCounter += 15
    }
  },
  actions: {
    fetchPokemonObject({ state, commit }) {
      for (
        let i = state.pokemonArrayCounter;
        i < state.pokemonArrayCounter + 15;
        i++
      ) {
        const url = 'https://pokeapi.co/api/v2/pokemon/' + i
        fetch(url)
          .then(resp => resp.json())
          .then(function(data) {
            commit('ADD_POKEMON', data)
          })
          .catch(function(error) {
            console.log('Error at fetchPokemonObject action: ' + error)
          })
      }
      commit('ADD_COUNT')
    }
  },
  getters: {
    getSortedPokemonArray: state => {
      return state.pokemonArray.sort((a, b) => (a.id > b.id ? 1 : -1))
    }
  },
  modules: {}
})
