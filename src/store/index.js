import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemonArray: []
  },
  mutations: {
    ADD_POKEMON(state, data) {
      state.pokemonArray.splice(data.id - 1, 1, data)
    }
  },
  actions: {
    updatePokemonArrayByID({ commit }, payload) {
      var id = payload
      fetch('https://pokeapi.co/api/v2/pokemon/' + id)
        .then(resp => resp.json())
        .then(function(data) {
          console.log(data)
          commit('ADD_POKEMON', data)
        })
        .catch(function(error) {
          console.log('Error at fetchPokemonObjectByID action: ' + error)
        })
    },
    createEmptyPokemonArray({ state }) {
      for (var i = 1; i <= 893; i++) {
        state.pokemonArray.push({
          id: i
        })
      }
    }
  },
  getters: {
    gen1Array: state => {
      return state.pokemonArray.slice(0, 151)
    },
    gen2Array: state => {
      return state.pokemonArray.slice(151, 251)
    },
    gen3Array: state => {
      return state.pokemonArray.slice(251, 386)
    }
  }
})
