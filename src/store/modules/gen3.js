export default {
  namespaced: true,
  state: {
    pokemonArray: [],
    pokemonArrayLoopInt: 252,
    fetchLimit: 386,
    fetchLimitReached: false
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
    }
  },
  getters: {
    getSortedPokemonArray: state => {
      return state.pokemonArray.sort((a, b) => (a.id > b.id ? 1 : -1))
    }
  }
}
