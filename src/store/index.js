import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemonArray: [],
    idForModal: '',
    loadingNumber: 1,
    // count: 0,
    genListWindow: false,
    menuIsOpen: false
  },
  mutations: {
    ADD_POKEMON(state, data) {
      // state.count++
      // if (state.count === 9) {
      //   state.count = 0
      //   state.loadingNumber++
      // }
      state.pokemonArray.push(data)
      if (state.pokemonArray.length <= 850) {
        state.pokemonArray.sort((a, b) => (a.id > b.id ? 1 : -1))
      }
    },
    ADD_ADDITIONAL_DATA(state, object) {
      Vue.set(
        state.pokemonArray[object.tempId - 1],
        'lore',
        object.lore.flavor_text
      )
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
              sprite: data.sprites.front_default,
              stats: {
                hp: data.stats.find(x => x.stat.name == 'hp').base_stat,
                attack: data.stats.find(x => x.stat.name == 'attack').base_stat,
                defense: data.stats.find(x => x.stat.name == 'defense')
                  .base_stat,
                specialAttack: data.stats.find(
                  x => x.stat.name == 'special-attack'
                ).base_stat,
                specialDefense: data.stats.find(
                  x => x.stat.name == 'special-defense'
                ).base_stat,
                speed: data.stats.find(x => x.stat.name == 'speed').base_stat
              }
            }

            if (data.types.length > 1) {
              object.types.push(data.types[1].type.name)
            }

            commit('ADD_POKEMON', object)
          })
          .catch(function(error) {
            console.log(error)
          })
      }
    },
    fetchModalData({ commit }, pokemonId) {
      fetch('https://pokeapi.co/api/v2/pokemon-species/' + pokemonId)
        .then(resp => resp.json())
        .then(function(data) {
          var object = {
            tempId: pokemonId,
            lore: data.flavor_text_entries
              .reverse()
              .find(x => x.language.name == 'en')
          }
          commit('ADD_ADDITIONAL_DATA', object)
        })
        .catch(function(error) {
          console.log(
            'Error at fetchModalData action. ID: ' + pokemonId + ' ' + error
          )
        })
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
