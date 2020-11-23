import Vue from 'vue'
import Vuex from 'vuex'

import gen1 from '@/store/modules/gen1.js'
import gen2 from '@/store/modules/gen2.js'
import gen3 from '@/store/modules/gen3.js'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    pokemonArray: [],
    pokemonArrayLoopInt: 1 //This is a hack used in the for loop in fetchPokemonObject to fetch 12 pokemon at a time.
  },
  mutations: {
    ADD_POKEMON(state, payload) {
      state.pokemonArray.push(payload)
    },
    ADD_COUNT(state) {
      state.pokemonArrayLoopInt += 12
    }
  },
  actions: {
    fetchPokemonObject({ state, commit }) {
      for (
        let i = state.pokemonArrayLoopInt;
        i < state.pokemonArrayLoopInt + 12;
        i++
      ) {
        if (i <= 893) {
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
      }
      commit('ADD_COUNT')
    }
  },
  getters: {
    getSortedPokemonArray: state => {
      return state.pokemonArray.sort((a, b) => (a.id > b.id ? 1 : -1))
    }
  },
  modules: { gen1, gen2, gen3 }
})
