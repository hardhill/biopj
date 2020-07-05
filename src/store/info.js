import firebase from 'firebase/app'

export default {
  state: {
    info: {}
  },
  mutations: {
    setInfo(state, info) {
      state.info = info
    },
    clearInfo(state) {
      state.info = {}
    }
  },
  actions: {
    async fetchInfo({ dispatch, commit }) {
      const uid = await dispatch('getUid')
      try {
        const info = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val()
        commit('setInfo', info)
        dispatch("setInfoToLocal")
      } catch (e) {

      }
    },
    setInfoToLocal({state}){
      const localName = state.info.name
      localStorage.setItem("name", localName)
    },
    removeInfoToLocal({}){
      localStorage.removeItem("name")
    }
  },
  getters: {
    info: s => s.info
  }
}