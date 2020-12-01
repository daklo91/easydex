export default {
  namespaced: true,
  state: {
    pokemonArray: [],
    pokemonArrayLoopInt: 152,
    fetchLimit: 251,
    fetchLimitReached: false,
    placeholderArrayStart: 152, //I decide not to use the pokemonArrayLoopInt to create the placeholder array because it is mutable and can cause errors
    placeholderArray: []
  },
  mutations: {
    ADD_POKEMON(state, data) {
      state.placeholderArray[data.id - 1] = data
    },
    ADD_COUNT(state) {
      state.pokemonArrayLoopInt += 12
    }
  },
  actions: {
    fetchPokemonObjectByID({ commit }, payload) {
      var pokeId = payload - 10000
      fetch('https://pokeapi.co/api/v2/pokemon/' + pokeId)
        .then(resp => resp.json())
        .then(function(data) {
          commit('ADD_POKEMON', data)
        })
        .catch(function(error) {
          console.log('Error at fetchPokemonObjectByID action: ' + error)
        })
    },
    fetchPokemonObject({ state, commit }) {
      for (
        let i = state.pokemonArrayLoopInt;
        i < state.pokemonArrayLoopInt + 12;
        i++
      ) {
        if (i <= state.fetchLimit) {
          const url = 'https://pokeapi.co/api/v2/pokemon/' + i
          fetch(url)
            .then(resp => resp.json())
            .then(function(data) {
              commit('ADD_POKEMON', data)
            })
            .catch(function(error) {
              console.log('Error at fetchPokemonObject action: ' + error)
            })
        } else if (state.pokemonArray.length <= state.fetchLimit) {
          state.fetchLimitReached = true
        }
      }
      commit('ADD_COUNT')
    },
    createPlaceholderArray({ state }) {
      for (let i = state.placeholderArrayStart; i <= state.fetchLimit; i++) {
        state.placeholderArray.push({
          id: i + 10000
        })
      }
    }
  },
  getters: {
    getSortedPokemonArray: state => {
      return state.pokemonArray.sort((a, b) => (a.id > b.id ? 1 : -1))
    },
    getPlaceholderArray: state => {
      return state.placeholderArray
    }
  }
}
