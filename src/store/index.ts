import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    initialFetch: [] as object[],
    arrayCounter: 1
  },
  mutations: {
    saveInitialFetch(state, payload) {
      state.initialFetch.push(payload)
    },
    updateArrayCounter(state) {
      state.arrayCounter += 15
    }
  },
  actions: {
    initialFetch({ state, commit }) {
      for (let i = state.arrayCounter; i < state.arrayCounter + 15; i++) {
        const url = 'https://pokeapi.co/api/v2/pokemon/' + i
        fetch(url)
          .then(resp => resp.json())
          .then(function(data) {
            commit('saveInitialFetch', data)
          })
          .catch(function(error) {
            console.log('There was an error:' + error)
          })
      }
      commit('updateArrayCounter')
    }
  },
  getters: {
    sortInitialFetch: state => {
      return state.initialFetch.sort((a, b) => (a.id > b.id ? 1 : -1))
    }
  },
  modules: {}
})
