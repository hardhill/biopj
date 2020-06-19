import Vue from 'vue'
import Vuex from 'vuex'
import auth from '@/store/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    tests: [
      {
        h: "Биология как наука. Лучше ее не изучать",
        questions: 10,
        price: 250
      },
      { h: "Тест 2", questions: 6 },
      { h: "Тест 3", questions: 8 }
    ],
  },
  mutations: {
    countMass(state){
      state.count = state.tests.length
    }
  },
  actions: {
  },
  modules: {
    auth
  }
})
