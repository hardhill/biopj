import Vue from 'vue'
import Vuex from 'vuex'
import auth from '@/store/auth'
import info from '@/store/info'

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

    // Ошибки 
    error: null
  },
  mutations: {
    countMass(state){
      state.count = state.tests.length
    },
    setError(state, error){
      state.error = error
    },
    clearError(state, ){
      state.error = null
    },
  },
  getters: {
    error: s => s.error
  },
  modules: {
    auth, info
  }
})
