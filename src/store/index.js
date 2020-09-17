import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: []
  },
  getters: {
    cards: ({ cards }) => cards.sort((a, b) => {
      if (a.name > b.name) return 1
      if (a.name < b.name) return -1

      return 0
    })
  },
  mutations: {
    SET_CARDS (store, payload) {
      store.cards = payload
    }
  },
  actions: {
    async loadCards ({ commit }, name) {
      const url = ['https://api.pokemontcg.io/v1/cards', name]
        .filter(f => f)
        .join('?name=')

      try {
        const response = await fetch(url)
        const data = await response.json()

        commit('SET_CARDS', data.cards)
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
