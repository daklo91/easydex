import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemonArray: [],
    originalPokemonArray: [],
    typeArray: []
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
    },
    ADD_TYPE(state, data) {
      state.typeArray.push(data)
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
      for (var i = 1; i <= 893; i++) {
        fetch('https://pokeapi.co/api/v2/pokemon/' + i)
          .then(resp => resp.json())
          .then(function(data) {
            var object = {
              id: data.id,
              name: data.name,
              types: [data.types[0].type.name],
              weight: data.weight,
              height: data.height,
              sprite: data.sprites.front_default
            }
            if (data.types.length > 1) {
              object.types.push(data.types[1].type.name)
            }
            commit('ADD_ORIGINAL_POKEMON', object)
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
    },
    fetchType({ commit }) {
      fetch('https://pokeapi.co/api/v2/pokemon-shape/ball')
        .then(resp => resp.json())
        .then(function(data) {
          commit('ADD_TYPE', data)
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  },
  getters: {
    gen1Array: state => {
      return state.originalPokemonArray.slice(0, 151)
    },
    gen2Array: state => {
      return state.pokemonArray.slice(151, 251)
    },
    gen3Array: state => {
      return state.pokemonArray.slice(251, 386)
    }
  }
})
