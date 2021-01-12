import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemonArray: []
  },
  mutations: {
    ADD_POKEMON(state, data) {
      state.pokemonArray.push(data)
      if (state.pokemonArray.length == 898) {
        state.pokemonArray.sort((a, b) => (a.id > b.id ? 1 : -1))
      }
    }
  },
  actions: {
    fetchPokemon({ commit }) {
      for (var i = 1; i <= 898; i++) {
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
            commit('ADD_POKEMON', object)
          })
          .catch(function(error) {
            console.log('Error at fetchPokemon action. ID: ' + i + ' ' + error)
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
    },
    gen4Array: state => {
      return state.pokemonArray.slice(386, 493)
    },
    gen5Array: state => {
      return state.pokemonArray.slice(493, 649)
    },
    gen6Array: state => {
      return state.pokemonArray.slice(649, 721)
    },
    gen7Array: state => {
      return state.pokemonArray.slice(721, 809)
    },
    gen8Array: state => {
      return state.pokemonArray.slice(809, 898)
    }
  }
})
