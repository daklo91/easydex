import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemonArray: [],
    originalPokemonArray: [] //Det er ikke original lengre, nå er det alle 893 pokemon
  },
  mutations: {
    ADD_POKEMON(state, data) {
      state.pokemonArray.splice(data.id - 1, 1, data)
    },
    ADD_ARRAY(state, dataList) {
      state.pokemonArray = dataList
    },
    ADD_ORIGINAL_POKEMON(state, data) {
      state.originalPokemonArray.push(data)
    }
  },
  actions: {
    updatePokemonArrayByID({ commit }, payload) {
      var id = payload
      fetch('https://pokeapi.co/api/v2/pokemon/' + id)
        .then(resp => resp.json())
        .then(function(data) {
          commit('ADD_POKEMON', data)
        })
        .catch(function(error) {
          console.log('Error at fetchPokemonObjectByID action: ' + error)
        })
    },
    createEmptyPokemonArray({ commit }) {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=893')
        .then(resp => resp.json())
        .then(function(dataList) {
          commit('ADD_ARRAY', dataList.results)
        })
        .catch(function(error) {
          console.log('Error at createEmptyPokemonArray action: ' + error)
        })
    },
    fetchOriginalPokemon({ commit }) {
      for (var i = 1; i <= 151; i++) {
        fetch('https://pokeapi.co/api/v2/pokemon/' + i)
          .then(resp => resp.json())
          .then(function(data) {
            commit('ADD_ORIGINAL_POKEMON', data)
          })
          .catch(function(error) {
            console.log(
              'Error at fetchOriginalPokemon action: ' +
                'could not fetch pokemon with ID: ' +
                i +
                error
            )
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
